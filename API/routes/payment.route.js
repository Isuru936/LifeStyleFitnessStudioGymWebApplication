import express from "express";
import {
  storePayment,
  getPaymentDetails,
  deletePayment,
} from "../controllers/payment.controller.js";

const router = express.Router();

router.post("/payment", storePayment); //add = post
router.get("/payment", getPaymentDetails); //recieve payments = get
router.delete("/payment/:id", deletePayment); //delete = delete

export default router;
