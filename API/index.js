import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { errorHandler } from "./middleware/errorMiddleware.js";
import CookieParser from "cookie-parser";
import foodRouter from "./routes/food.route.js";
import bodyParser from "body-parser";
import employeeRouter from "./routes/employee.route.js";
import userRouter from "./routes/user.route.js";
import paymentRouter from "./routes/payment.route.js";
import workoutRoutes from "./routes/workoutRoutes.js";
import quizRoute from "./routes/quiz.route.js";
import getUserRoute from "./routes/getUser.route.js";
import { sendEmailRoute } from "./emailSender.js";
import pdfGenerationRoute from "./routes/Report.js";
import BioDataRoutes from "./routes/bioData.route.js";

import InventoryRoute from "./routes/inventoryroute.js";
import NotificationRoute from "./routes/Notificationroute.js"
 import cors from "cors";
// import userRouter from "./routes/user.route.js";
dotenv.config();

const app = express();
app.use(cors())

app.use(bodyParser.json());
app.use(CookieParser());

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use("/api/users/", userRouter);
app.use("/api/quiz/", quizRoute);

app.get("/", (req, res) => res.send("Server is ready"));

app.use(errorHandler);

mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));

app.listen(3000, () => {
  console.log("Server running in port 3000");
});

app.use("/api/food/", foodRouter);
app.use("/api/employee/", employeeRouter);
app.use("/api/users/", userRouter);
app.use("/api", workoutRoutes);
app.use("/api/payments/", paymentRouter);
app.use("/api/getUsers/", getUserRoute);
app.post("/api/sendEmail", sendEmailRoute);
app.use("/api", pdfGenerationRoute);
app.use("/api/bioData/", BioDataRoutes);
app.use("/api/", InventoryRoute);
app.use("/api/messages", NotificationRoute)

// app.get("/", testRoute);
