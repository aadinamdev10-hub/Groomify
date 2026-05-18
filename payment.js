const router = require('express').Router();
const Razorpay = require('razorpay');
const crypto = require('crypto');

const getRazorpay = () => {
  if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) return null;
  return new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET
  });
};

router.post('/create-order', async (req, res) => {
  try {
    const instance = getRazorpay();
    if (!instance) return res.status(503).json({ message: 'Payment gateway not configured' });
    const { amount } = req.body;
    const order = await instance.orders.create({
      amount: amount * 100,
      currency: 'INR',
      receipt: 'groomify_' + Date.now()
    });
    res.json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/verify', async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
    const body = razorpay_order_id + '|' + razorpay_payment_id;
    const expectedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
      .update(body)
      .digest('hex');
    if (expectedSignature === razorpay_signature) {
      res.json({ success: true, paymentId: razorpay_payment_id });
    } else {
      res.status(400).json({ success: false, message: 'Payment verification failed' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/key', (req, res) => {
  res.json({ key: process.env.RAZORPAY_KEY_ID || null });
});

module.exports = router;
