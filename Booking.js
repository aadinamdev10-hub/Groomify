const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  userId:{ type:mongoose.Schema.Types.ObjectId, ref:'User' },
  fullName:{ type:String, required:true },
  phone:{ type:String, required:true },
  service:{ type:String, required:true },
  barber:{ type:String },
  date:{ type:String, required:true },
  slot:{ type:String, required:true },
  status:{ type:String, default:'confirmed' }
},{ timestamps:true });

module.exports = mongoose.model('Booking', bookingSchema);