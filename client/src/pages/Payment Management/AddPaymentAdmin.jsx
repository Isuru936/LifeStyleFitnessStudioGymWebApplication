import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import notify from "../../components/toasts/toastTemplate";
import { ToastContainer } from "react-toastify";

function AddPaymentAdmin() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const [paymentType, setPaymentType] = useState("");
  const [paymentAmount, setPaymentAmount] = useState(0);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/users/getUser/${id}`
        );
        const data = await response.json();
        setUserData(data.data.user);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUser();
  }, [id]);

  // Function to handle payment type selection
  const handlePaymentTypeChange = (e) => {
    setPaymentType(e.target.value);
    // Calculate payment amount based on selected payment type
    if (e.target.value === "Monthly") {
      setPaymentAmount(10000);
    } else if (e.target.value === "Yearly") {
      setPaymentAmount(110000);
    } else {
      setPaymentAmount(0);
    }
  };

  // Function to handle payment amount input
  const handlePaymentAmountChange = (e) => {
    setPaymentAmount(e.target.value);
  };

  // Function to handle payment submission
  const handlePaymentSubmission = async () => {
    if (!paymentType) {
      notify("error", "", "Please select a payment type");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:3000/api/payments/addPayment",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: userData.email,
            userId: id,
            username: userData.username,
            paymentType: paymentType.toLowerCase(), // Convert to lowercase for consistency
            amount: paymentAmount,
          }),
        }
      );

      if (response.ok) {
        notify("success", "", "Payment submitted successfully");
        navigate("/view-all-users");
      } else {
        notify("error", "", "Error submitting payment");
      }
    } catch (error) {
      notify("error", "", "Error submitting payment");
    }
  };

  const handleBack = () => {
    navigate("/view-all-users");
  };

  return (
    <div className="container w-fit mx-auto py-5">
      <div className="mx-auto border-2 p-5 rounded-lg">
        <h1 className="text-3xl text-center mb-5 font-extrabold">
          Add Payment
        </h1>
        <p className="mb-3">Email: {userData.email}</p>
        <p className="mb-3">Username: {userData.username}</p>
        <label htmlFor="paymentType" className="block mb-1">
          Payment Type:
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
          {/* Add more payment types as needed */}
        </select>
        <label htmlFor="paymentAmount" className="block mb-1">
          Amount:
        </label>
        <input
          type="number"
          id="paymentAmount"
          value={paymentAmount}
          disabled
          onChange={handlePaymentAmountChange}
          className="border border-gray-300 rounded px-3 py-2 mb-3 w-full"
        />
        <button
          onClick={handlePaymentSubmission}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Submit Payment
        </button>
        <button
          onClick={handleBack}
          className="bg-slate-500 ml-2 text-white px-4 py-2 rounded hover:bg-slate-600"
        >
          Back
        </button>
      </div>
      <ToastContainer />
    </div>
  );
}

export default AddPaymentAdmin;
