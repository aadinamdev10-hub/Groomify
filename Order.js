const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId:{ type:mongoose.Schema.Types.ObjectId, ref:'User' },
  products:[
    {
      name:String,
      price:Number,
      quantity:Number,
      image:String
    }
  ],
  total:{ type:Number, required:true },
  paymentMethod:{ type:String },
  paymentStatus:{ type:String, default:'paid' }
},{ timestamps:true });

module.exports = mongoose.model('Order', orderSchema);