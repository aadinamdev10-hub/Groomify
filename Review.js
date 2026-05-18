const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, default: 'Bhopal' },
  text: { type: String, required: true },
  rating: { type: Number, default: 5 },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });

module.exports = mongoose.model('Review', reviewSchema);
