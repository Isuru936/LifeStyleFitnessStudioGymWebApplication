import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import foodRouter from "./routes/food.route.js";
import employeeRouter from "./routes/employee.route.js";
import userRouter from "./routes/user.route.js";
import paymentRouter from "./routes/payment.route.js";
import workoutRoutes from './routes/workoutRoutes.js';
import cors from "cors";
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
mongoose
  .connect(process.env.MONGO)
  .then(console.log("DB connected"))
  .catch((err) => console.log(err));

app.listen(3000, () => {
  console.log("Server running in port 3000");
});

app.use("/api/food/", foodRouter);
app.use("/api/employee/", employeeRouter);
app.use("/api/users/", userRouter);
app.use('/api', workoutRoutes);
app.use("/api/payments/", paymentRouter);
