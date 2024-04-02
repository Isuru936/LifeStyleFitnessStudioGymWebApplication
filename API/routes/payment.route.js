import express from "express";
import {
  storePayment,
  getPaymentDetails,
  deletePayment,
} from "../controllers/payment.controller.js";

const router = express.Router();

router.post("/payment", storePayment);
router.get("/payment", getPaymentDetails);
router.delete("/payment/:id", deletePayment);

export default router;
