import express from "express";
import { body } from "express-validator";
import { loginUser, registerUser } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/register", [
    body('email').isEmail().withMessage("Invalid Email"), //express-validators to validate the incoming data at this path
    body('fullname.firstname').isLength({min: 3}).withMessage("First name must be atleast 3 characters long"),
    body('password').isLength({min: 6}).withMessage("password must be atleast 6 characters long")
], registerUser);

router.post("/login", [
    body("email").isEmail().withMessage("Invalid Email"),
    body("password").isLength({min: 6}).withMessage("Password must be atleast 6 characters long")
], loginUser);

export default router;