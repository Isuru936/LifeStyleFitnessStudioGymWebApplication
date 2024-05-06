import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import InventoryRoute from "./routes/inventoryroute.js";
import NotificationRoute from "./routes/Notificationroute.js"
 import cors from "cors";
// import userRouter from "./routes/user.route.js";
dotenv.config();

const app = express();
app.use(cors())

app.use(express.json());

mongoose.connect(process.env.MONGO).
then(console.log("DB connected")).catch(err => console.log(err)) ;

app.listen(3000, () => {
  console.log("Server running in port 3000");
});

app.use("/api/", InventoryRoute);
app.use("/api/messages", NotificationRoute)

// app.get("/", testRoute);
