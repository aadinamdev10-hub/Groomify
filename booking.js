const router = require('express').Router();
const Booking = require('../models/Booking');

router.post('/', async(req,res)=>{
  try{

    const booking = await Booking.create(req.body);

    res.json(booking);

  }catch(err){
    res.status(500).json({message:err.message});
  }
});

router.get('/', async(req,res)=>{
  try{

    const bookings = await Booking.find().sort({createdAt:-1});

    res.json(bookings);

  }catch(err){
    res.status(500).json({message:err.message});
  }
});

module.exports = router;