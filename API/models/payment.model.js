import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
  {
    userId: {
      type: "String",
      unique: "true",
    },
    email: {
      type: "String",
    },
    username: {
      type: "String",
    },
    paymentType: {
      type: "String",
    },
    amount: {
      type: "Number",
    },
  },
  { timestamps: true }
);

const Payment = mongoose.model("Payment", paymentSchema);

export default Payment;
