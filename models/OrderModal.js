const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  OrderById: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  Address: {
    type: String,
  },
  Purchased_Product_List: {
    type: Array,
  },
  Subtotal: {
    type: Int32Array,
  },
  discount: {
    type: String,
  },
  Anydiscount: {
    type: Boolean,
  },
  Total_Price: {
    type: Boolean,
  },
  Delivery_Charges: {
    type: Boolean,
  },
  Order_Status: {
    type: String,
    enum: ["New_Order", "Pending", "Dispatched", "Delivered", "Canceled"],
    default: "New_Order",
    required: true,
  },
});

module.exports = mongoose.model("Order", OrderSchema);
