import mongoose, { Schema } from "mongoose";

const paymentSchema = new mongoose.Schema({
  packageName: {
    type: String,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  price: {
    type: Number,
    required: false,
    default: 14,
  },
  paymentDate: {
    type: String,
    default: "2024-04-02T00:00:00.000Z",
  },
});

const Payment = mongoose.model("Payment", paymentSchema);

export default Payment;
