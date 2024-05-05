import express from "express";
import dotenv from "dotenv";
dotenv.config();
import CookieParser from "cookie-parser";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import userRoute from "./routes/user.route.js";
import quizRoute from "./routes/quiz.route.js";

const port = process.env.PORT || 3000;

connectDB();

const app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);
app.use(CookieParser());

app.use("/api/users", userRoute);
app.use("/api/quiz/", quizRoute);

app.get("/", (req, res) => res.send("Server is ready"));

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
