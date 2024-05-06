import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import notify from "../../components/toasts/toastTemplate";

function UpdatePaymentAdmin() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Initialize payment state
  const [payment, setPayment] = useState({
    email: "",
    userId: "",
    username: "",
    paymentType: "",
    amount: 0,
  });

  // Initialize payment type state
  const [paymentType, setPaymentType] = useState("");

  useEffect(() => {
    const fetchPayment = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/payments/getPayment/${id}`
        );
        const data = await response.json();
        setPayment(data.data.payment);
        setPaymentType(data.data.payment.paymentType);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPayment();
  }, [id]);

  useEffect(() => {
    // Calculate payment amount based on selected payment type
    if (paymentType === "Monthly") {
      setPayment((prevPayment) => ({
        ...prevPayment,
        paymentType: "Monthly",
        amount: 10000,
      }));
    } else if (paymentType === "Yearly") {
      setPayment((prevPayment) => ({
        ...prevPayment,
        paymentType: "Yearly",
        amount: 110000,
      }));
    } else {
      setPayment((prevPayment) => ({
        ...prevPayment,
        paymentType: "",
        amount: 0,
      }));
    }
    console.log(payment);
  }, [paymentType]);

  // Function to handle payment type selection
  const handlePaymentTypeChange = (e) => {
    setPaymentType(e.target.value);
  };
  const handleUpdatePayment = async () => {
    try {
      const updatedPayment = { ...payment }; // Include paymentType in the updated payment object
      // console.log(`http://localhost:3000/api/payments/updatePayment/${id}`);
      const response = await fetch(
        `http://localhost:3000/api/payments/updatePayment/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedPayment), // Send the updatedPayment object with paymentType included
        }
      );
      const data = await response.json();
      if (response.ok) {
        toast.success(data.message);
        navigate("/payment-view");
      } else {
        toast.error(data.error);
      }
    } catch (error) {
      console.error("Error updating payment:", error);
      // toast.error("Error updating payment. Please try again later.");
    }
  };
  const handleDeletePayment = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/payments/deletePayment/${id}`,
        {
          method: "DELETE",
        }
      );
      const data = await response.json();
      if (response.ok) {
        console.log(response);
      } else {
        toast.error(data.error);
      }
    } catch (error) {
      console.error("Error deleting payment:", error);
      // toast.error("Error deleting payment. Please try again later.");
    }
  };

  const handleBack = () => {
    navigate("/payment-view");
  };

  return (
    <div className="w-fit mx-auto py-5">
      <div className="mx-auto border-2 p-5 rounded-lg">
        <h1 className="text-3xl text-center mb-5 font-extrabold">
          Update Payment
        </h1>
        <p className="mb-3">Email: {payment.email} </p>
        <p className="mb-3">Username: {payment.username}</p>
        <div className="border border-1 rounded-lg p-3">
          <p className="mb-3">Payment Type: {payment.paymentType}</p>
          <p className="mb-3">Payment Amount: {payment.amount}</p>
        </div>

        <label htmlFor="paymentType" className="block mb-1 font-bold">
          Change Payment Type
        </label>
        <select
          id="paymentType"
          value={paymentType}
          onChange={handlePaymentTypeChange}
          className="border border-gray-300 rounded px-3 py-2 mb-3 w-full"
        >
          <option value="">Select Payment Type</option>
          <option value="Yearly">Yearly</option>
          <option value="Monthly">Monthly</option>
        </select>
        <div className="flex justify-evenly">
          <button
            onClick={handleUpdatePayment}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Update Payment
          </button>
          <button
            onClick={handleBack}
            className="bg-slate-500 ml-2 text-white px-4 py-2 rounded hover:bg-slate-600"
          >
            Back
          </button>
          <button
            onClick={(e) => {
              handleDeletePayment(payment._id);
              navigate("/payment-view");
            }}
            className="bg-red-500 ml-2 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default UpdatePaymentAdmin;
