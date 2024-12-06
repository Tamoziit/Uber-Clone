import BlacklistTokenModel from "../models/blacklistToken.model.js";
import CaptainModel from "../models/captain.model.js";
import UserModel from "../models/user.model.js";
import jwt from "jsonwebtoken";

export const authUser = async (req, res, next) => {
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
        const user = await UserModel.findById(decoded._id);
        req.user = user;
        return next();
    } catch (error) {
        console.log("Error in auth middleware", error);
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