import express from "express";
import {
  addPayment,
  deletePayment,
  getPayment,
  getPayments,
  updatePayment,
} from "../controllers/payment.controller.js";

const router = express.Router();

router.post("/addPayment", addPayment);
router.get("/getPayments", getPayments);
router.get("/getPayment/:id", getPayment);
router.put("/updatePayment/:id", updatePayment);
router.delete("/deletePayment/:id", deletePayment);

export default router;
