import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js";
import paymentRoute from "./routes/payment.route.js";
import foodRoute from "./routes/food.route.js";
import inventoryRoute from "./routes/inventory.route.js";
import cors from "cors";
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/", userRoute);
app.use("/api/", paymentRoute);
app.use("/api/", foodRoute);
app.use("/api/", inventoryRoute);

mongoose
  .connect(process.env.MONGO)
  .then(console.log("DB connected"))
  .catch((err) => console.log(err));

app.listen(3000, () => {
  console.log("Server running in port 3000");
});

// app.use("http://localhost:3000/addUser", userRouter);

// app.get("/", testRoute);
