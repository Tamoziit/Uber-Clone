import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import connectToDB from "./db/db.js";
import authRoutes from "./routes/user.routes.js"

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
connectToDB();

app.get("/", (req, res) => {
    res.send("<h1>Server up & running</h1>");
});
app.use("/users", authRoutes);

export default app;