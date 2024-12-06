import BlacklistTokenModel from "../models/blacklistToken.model.js";
import UserModel from "../models/user.model.js";
import { createUser } from "../services/user.service.js";
import { validationResult } from "express-validator";

export const registerUser = async (req, res, next) => {
    try {
        const errors = validationResult(req); // errors returned by express validators
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { fullname, email, password } = req.body;
        const hashedPassword = await UserModel.hashPassword(password);

        const user = await createUser({
            firstname: fullname.firstname,
            lastname: fullname.lastname,
            email,
            password: hashedPassword
        });

        const token = user.generateAuthToken(); // calling model func. to generate JWT token
        res.cookie("token", token); //setting token
        res.status(201).json({ token, user });
    } catch (error) {
        console.log("Error in register user controller", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export const loginUser = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, password } = req.body;

        const user = await UserModel.findOne({ email }).select('+password');
        if (!user) {
            return res.status(401).json({ messsage: "Invalid email or password" });
        }

        const isPasswordCorrect = await user.comparePassword(password);
        if (!isPasswordCorrect) {
            return res.status(401).json({ messsage: "Invalid email or password" });
        }

        const token = user.generateAuthToken();
        res.cookie("token", token);
        res.status(200).json({ token, user });
    } catch (error) {
        console.log("Error in login user controller", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export const getUserProfile = async (req, res, next) => {
    try {
        return res.status(200).json(req.user);
    } catch (error) {
        console.log("Error in user profile controller", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export const logoutUser = async (req, res, next) => {
    try {
        res.clearCookie("token");
        const token = req.cookies.token || req.headers.authorization.split(' ')[1];
        await BlacklistTokenModel.create({ token });

        res.status(200).json({ message: "Logged out" });
    } catch (error) {
        console.log("Error in logout controller", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}