const ProductModal = require("../models/Products");
const CategoriesModal = require("../models/CategoriesModal");
const OrderModal = require("../models/OrderModal");

async function CreateOrder(req, res) {
  try {
    console.log("req.body",req.body)

    return

    const CreateOrder = await OrderModal.create(req.body);
    await CreateOrder.save();

    res.send({
        success:true,
        message:"Order created successfully",
        CreateOrder:CreateOrder
    })
  } catch (error) {
    console.log("error", error);
  }
}

module.exports = {
  CreateOrder,
};
