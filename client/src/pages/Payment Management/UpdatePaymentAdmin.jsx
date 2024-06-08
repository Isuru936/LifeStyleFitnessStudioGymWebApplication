import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import notify from "../../components/toasts/toastTemplate";
import axios from "axios";

function UpdatePaymentAdmin() {
  if (localStorage.getItem("adminLogin") === null) {
    navigate("/admin-login");
  }

  const { id } = useParams();
  const navigate = useNavigate();

  const [payment, setPayment] = useState({
    email: "",
    userId: "",
    username: "",
    paymentType: "",
    amount: 0,
  });

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

  const handlePaymentTypeChange = (e) => {
    setPaymentType(e.target.value);
  };

  const handleUpdatePayment = async () => {
    const updatedPayment = { ...payment }; // Include paymentType in the updated payment object
    if (updatedPayment.paymentType === "") {
      toast.error("Please select a payment type");
      return;
    }

    try {
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
        notify("success", "", "Payment Updated successfully");
        let emailContent = `
          <h1 style="text-align: center; color: #333;">Payment Record Modified</h1>
          <div style="text-align: center;">
            <img src="https://firebasestorage.googleapis.com/v0/b/lsfs-1a314.appspot.com/o/Logo.png?alt=media&token=117322bf-b255-4114-b29e-b58a55e5a58e" alt="Company Logo" style="max-width: 100px;">
          </div>
          <p style="margin-top: 20px; line-height: 1.6; color: #555;">
            Dear Sir/ Madam,
          </p>
          <p style="margin-top: 20px; line-height: 1.6; color: #555;">
            We are writing to inform you that your payment record has been successfully modified by our admin.
          </p>
          <p style="margin-top: 20px; line-height: 1.6; color: #555;">
            If you have any questions or concerns, feel free to contact our support team.
          </p>
          <p style="margin-top: 20px; line-height: 1.6; color: #555;">
            Thank you for choosing LSFS.
          </p>
          <p style="margin-top: 20px; line-height: 1.6; color: #555; text-align: center;">
            Sincerely,<br>
            LSFS Team
          </p>
        `;
        toast.info("Sending email to user...");
        // Send the email
        try {
          await axios.post("http://localhost:3000/api/sendEmail", {
            userEmail: `{${payment.email} }`, // Fixed the data structure
            subject: "Payment Notice",
            html: emailContent,
          });
          console.log("Email sent successfully");
          toast.success("Notified User");
          navigate("/view-all-users");
        } catch (error) {
          console.error("Error sending email:", error);
          notify("error", "", "Error sending email");
        }
      } else {
        notify("error", "", "Error submitting payment");
      }
      setTimeout(() => {
        toast.success(data.message);
        toast.success("Payment updated successfully!");
      }, 10);
    } catch (error) {
      console.error("Error updating payment:", error);
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
        <p className="mb-3 text-slate-500">#{payment._id}</p>
        <p className="mb-3">Email: {payment.email} </p>
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
