const mongoose = require('mongoose');

const stFormatSchema = mongoose.Schema({
  sideA: {
    type: Boolean,
    default: true,
  },
  sideB: {
    type: Boolean,
    default: true,
  },
  image: String,
  address: String,
  price: Number,
});

const StFormat = mongoose.model('StFormat', stFormatSchema);

module.exports = StFormat;