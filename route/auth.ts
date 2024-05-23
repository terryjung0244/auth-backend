import { Router } from "express";
import * as authController from "../controller/auth";

const router = Router();

// /auth/signup
router.post("/signup", authController.signup);

// // /auth/checkValidToken
// router.get("/checkValidToken", verifyToken, authController.checkValidToken);
// // /auth/verifyEmail
// router.post("/verifyEmail", authController.verifyEmail);
// // /auth/resendVerifyEmail
// router.post("/resendVerifyEmail", authController.resendVerifyEmail);
// // /auth/login
// router.post("/login", authController.login);
// // /auth/forgotpassword
// router.post("/forgotpassword", authController.forgotpassword);
// // /auth/forgotpasswordResendVerifyEmail
// router.post(
//   "/forgotpasswordResendVerifyEmail",
//   authController.forgotpasswordResendVerifyEmail
// );
// // /auth/forgotpasswordVerifyEmail
// router.post(
//   "/forgotpasswordVerifyEmail",
//   authController.forgotpasswordVerifyEmail
// );
// // /auth/forgotpasswordChange
// router.post("/forgotpasswordChange", authController.forgotpasswordChange);

export default router;
