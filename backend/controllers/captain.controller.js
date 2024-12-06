import BlacklistTokenModel from "../models/blacklistToken.model.js";
import CaptainModel from "../models/captain.model.js";
import { createCaptain } from "../services/captain.service.js";
import { validationResult } from "express-validator";

export const registerCaptain = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { fullname, email, password, vehicle } = req.body;
        const isCaptainAlreadyExists = await CaptainModel.findOne({ email });
        if (isCaptainAlreadyExists) {
            return res.status(400).json({ message: "Captain with this email already exists" });
        }

        const hashedPassword = await CaptainModel.hashPassword(password);

        const captain = await createCaptain({
            firstname: fullname.firstname,
            lastname: fullname.lastname,
            email,
            password: hashedPassword,
            color: vehicle.color,
            plate: vehicle.plate,
            capacity: vehicle.capacity,
            vehicleType: vehicle.vehicleType
        });

        const token = captain.generateAuthToken();
        //res.cookie("token", token);
        res.status(201).json({ token, captain });
    } catch (error) {
        console.log("Error in register captain controller", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export const loginCaptain = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, password } = req.body;

        const captain = await CaptainModel.findOne({ email }).select('+password');
        if (!captain) {
            return res.status(401).json({ messsage: "Invalid email or password" });
        }

        const isPasswordCorrect = await captain.comparePassword(password);
        if (!isPasswordCorrect) {
            return res.status(401).json({ messsage: "Invalid email or password" });
        }

        const token = captain.generateAuthToken();
        res.cookie("token", token);
        res.status(200).json({ token, captain });
    } catch (error) {
        console.log("Error in login captain controller", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export const getCaptainProfile = async (req, res, next) => {
    try {
        return res.status(200).json(req.captain);
    } catch (error) {
        console.log("Error in captain profile controller", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export const logoutCaptain = async (req, res, next) => {
    try {
        const token = req.cookies.token || req.headers.authorization.split(' ')[1];
        await BlacklistTokenModel.create({ token });
        res.clearCookie("token");

        res.status(200).json({ message: "Logged out" });
    } catch (error) {
        console.log("Error in logout captain controller", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}