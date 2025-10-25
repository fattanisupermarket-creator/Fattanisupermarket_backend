const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  category: { type: String },
  categoryImage: { type: String },
  subcategories: {type: Array}
});

module.exports = mongoose.model('category', categorySchema);
