const router = require('express').Router();
const Order = require('../models/Order');

router.post('/', async(req,res)=>{
  try{

    const order = await Order.create(req.body);

    res.json(order);

  }catch(err){
    res.status(500).json({message:err.message});
  }
});

router.get('/', async(req,res)=>{
  try{

    const orders = await Order.find().sort({createdAt:-1});

    res.json(orders);

  }catch(err){
    res.status(500).json({message:err.message});
  }
});

module.exports = router;