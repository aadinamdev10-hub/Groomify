const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name:{ type:String, required:true },
  brand:{ type:String },
  description:{ type:String },
  price:{ type:Number, required:true },
  image:{ type:String },
  category:{ type:String },
  stock:{ type:Number, default:10 },
  externalLink:{ type:String },
  externalSite:{ type:String }
},{ timestamps:true });

module.exports = mongoose.model('Product', productSchema);
