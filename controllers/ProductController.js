
const ProductModal = require('../models/Products');


async function getProductParentCategories(req, res) {
  try {
    // Use distinct to get unique category values
    const categories = await ProductModal.distinct('parentCategory');

    return res.status(200).json({
      success: true,
      message: 'Categories fetched successfully',
      categories: categories
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Error fetching categories',
      error: error.message
    });
  }
}


async function getProductsByCatagories(req, res) {
    

    const { category } = req.query;

    try {
        if(!category){
            return res.status(400).json({ message: 'Category parameter is required' });
        }
        const products = await ProductModal.find({category: category});
        res.status(200).json({
            success: true,
            message: 'Products fetched successfully',    
            products: products
        });
    } catch (error) {
        res.status(500).json({success:false,  message: 'Error fetching products', error: error.message,  });
    }
}




async function updateSingleProductCategory() {
  try {

    const products = await ProductModal.find();
    let updatedCount = 0;

    for (const product of products) {
      if (!product.category) continue;

      const parts = product.category.split(/[-–]/).map(s => s.trim());

      let parentCategory, subCategory;
      if (parts.length > 1) {
        parentCategory = parts[0];
        subCategory = parts[1];
      } else {
        parentCategory = parts[0];
        subCategory = parts[0];
      }

      const result = await ProductModal.updateOne(
        { _id: product._id },
        { $set: { parentCategory, subCategory } }
      );

      if (result.modifiedCount > 0) {
        updatedCount++;
        console.log(`✅ Updated: ${product.name} → ${parentCategory} / ${subCategory}`);
      }
    }

    console.log(`\n📊 Total products updated: ${updatedCount}/${products.length}`);
  } catch (err) {
    console.error("❌ Error updating categories:", err);
  }
}
module.exports = {
    getProductsByCatagories,
    getProductParentCategories,
    updateSingleProductCategory
};



