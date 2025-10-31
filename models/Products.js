const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String },
  price: { type: Number },
  productImage: { type: String },
  parentCategory: String,
  subCategory: String
},{
  timestamps:true
});

module.exports = mongoose.model('Product', productSchema);
