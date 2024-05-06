import Payment from "../models/payment.model.js";

export const addPayment = async (req, res) => {
  try {
    const payment = await Payment.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        payment,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

export const getPayments = async (req, res) => {
  try {
    const payments = await Payment.find();
    res.status(200).json({
      status: "success",
      results: payments.length,
      data: {
        payments,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

export const getPayment = async (req, res) => {
  try {
    const payment = await Payment.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        payment,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

export const updatePayment = async (req, res) => {
  try {
    const payment = await Payment.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "success",
      data: {
        payment,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

export const deletePayment = async (req, res) => {
  try {
    await Payment.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
