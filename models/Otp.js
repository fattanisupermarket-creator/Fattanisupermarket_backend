const mongoose = require("mongoose");

const OtpSchema = new mongoose.Schema({
  EmailOrPhone: { type: String },
  Otp: { type: Number },
});

module.exports = mongoose.model("Otp", OtpSchema);
