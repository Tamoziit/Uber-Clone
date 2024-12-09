import BlacklistTokenModel from "../models/blacklistToken.model.js";
import CaptainModel from "../models/captain.model.js";
import UserModel from "../models/user.model.js";
import jwt from "jsonwebtoken";

export const authUser = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

    if (!token) {
        console.log("No token provided");
        return res.status(401).json({ message: "Unauthorized. No token Provided." });
    }

    try {
        // Check if token is blacklisted
        const isBlackListed = await BlacklistTokenModel.findOne({ token });
        if (isBlackListed) {
            console.log("Token is blacklisted ", token);
            return res.status(401).json({ message: "Unauthorized. Token Expired." });
        }

        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log("Decoded token:", decoded);

        const user = await UserModel.findById(decoded._id);
        if (!user) {
            return res.status(401).json({ message: "Unauthorized. User not found." });
        }

        req.user = user;
        return next();
    } catch (error) {
        console.error("Error in auth middleware:", error);
        return res.status(401).json({ message: "Unauthorized. Invalid token." });
    }
}

export const authCaptain = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: "Unauthorized. No token Provided." });
    }

    const isBlackListed = await BlacklistTokenModel.findOne({ token: token });
    if (isBlackListed) {
        return res.status(401).json({ message: "Unauthorized. Token Expired." });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const captain = await CaptainModel.findById(decoded._id);
        req.captain = captain;
        return next();
    } catch (error) {
        console.log("Error in auth middleware", error);
        return res.status(401).json({ message: "Unauthorized. Invalid token." });
    }
}