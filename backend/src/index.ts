import express from "express";
import connectDB from "./lib/db";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes"

const app = express();

dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRoutes)

app.listen(3000, () => {
    console.log("Server is running on port 3000");
    connectDB();
})
