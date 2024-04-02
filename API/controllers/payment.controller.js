import Payment from "../models/payment.model.js";

export const storePayment = async (req, res) => {
  try {
    const { packageName, userId, price, address } = req.body;

    // Create a new Payment instance
    const payment = new Payment({
      packageName,
      userId,
      price,
      address,
    });

    // Save the payment to the database
    await payment.save();

    res
      .status(201)
      .json({ success: true, message: "Payment stored successfully." });
  } catch (error) {
    console.error("Error storing payment:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
};

export const getPaymentDetails = async (req, res) => {
  try {
    const { userId } = req.params;

    // Find payments by userId
    const payments = await Payment.find();

    res.status(200).json({ success: true, payments });
  } catch (error) {
    console.error("Error getting payment details:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
};

export const deletePayment = async (req, res) => {
  try {
    const { id } = req.params;

    // Find payment by ID and delete it
    const deletedPayment = await Payment.findByIdAndDelete(id);

    if (!deletedPayment) {
      return res
        .status(404)
        .json({ success: false, error: "Payment not found" });
    }

    res
      .status(200)
      .json({ success: true, message: "Payment deleted successfully" });
  } catch (error) {
    console.error("Error deleting payment:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
};
