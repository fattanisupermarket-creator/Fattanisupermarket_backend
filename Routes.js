const routes = require("express").Router();
const {
  getProductsByCatagories,
  updateSingleProductCategory,
  getProductParentCategories
} = require("./controllers/ProductController");
const {
  SignupWithEmailOrPhoneandPassword,
  VerifyOtpAndCreate,
  deleteUser,
  forgetPasswordOtpUser,
  loginWithEmailOrPhone,
  sendOtpOnMail,
  setNewPasswordByUser,
  signUpOrLoginWithGoogle,
  updateUserById,
} = require("./controllers/AuthController");


//Auth Routes
routes.post("/signupWithEmailOrPhoneandPassword", SignupWithEmailOrPhoneandPassword);
routes.post("/verifyOtpAndCreate", VerifyOtpAndCreate);
routes.post("/loginWithEmailOrPhone", loginWithEmailOrPhone);
routes.post("/forgetPasswordOtpUser", forgetPasswordOtpUser);
routes.post("/setNewPasswordByUser", setNewPasswordByUser);
routes.post("/signUpOrLoginWithGoogle", signUpOrLoginWithGoogle);
routes.put("/updateUserById/:id", updateUserById);
routes.delete("/deleteUser/:id", deleteUser);

//Main Routes
routes.get("/getProductsByCatagories", getProductsByCatagories);
routes.get("/getProductParentCategories", getProductParentCategories);
// routes.get("/updateSingleProductCategory", updateSingleProductCategory);

module.exports = routes;
