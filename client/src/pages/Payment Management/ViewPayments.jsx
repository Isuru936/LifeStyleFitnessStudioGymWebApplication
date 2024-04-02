import React, { useState, useEffect } from "react";
import SideBar from "../../components/SideBar";
import bgImg from "../../assets/sim.jpg";

const ViewPayments = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    // Fetch payment details when the component mounts
    fetchPaymentDetails();
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  const fetchPaymentDetails = async () => {
    try {
      // Fetch payment details from the backend
      const response = await fetch("http://localhost:3000/api/payment");
      const data = await response.json();

      if (data.success) {
        setPayments(data.payments);
      } else {
        console.error("Error fetching payment details:", data.error);
      }
    } catch (error) {
      console.error("Error fetching payment details:", error);
    }
  };

  const handleDelete = async (paymentId) => {
    try {
      // Send DELETE request to delete payment
      const response = await fetch(
        `http://localhost:3000/api/payment/${paymentId}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        // Update payments state after successful deletion
        setPayments(payments.filter((payment) => payment._id !== paymentId));
      } else {
        console.error("Error deleting payment");
      }
    } catch (error) {
      console.error("Error deleting payment:", error);
    }
  };

  return (
    <div
      className="flex flex-row items-start w-screen h-screen bg-cover bg-center bg-no-repeat bg-fixed"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "contain",
        backgroundPosition: "left",
      }}
    >
      <div className="p-5 w-full flex flex-row mx-auto">
        <div className="mr-9">
          <SideBar />
        </div>
        <div className="m-2 w-full">
          <h1 className="text-4xl font-bold my-8">User Payments</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {payments.map((payment) => (
              <div
                key={payment._id}
                className="bg-white rounded-lg shadow-md hover:shadow-xl p-6"
              >
                <h2 className="text-xl font-semibold mb-2">{payment._id}</h2>
                <p className="text-gray-600">Amount: ${payment.price}</p>
                <p className="text-gray-600">
                  Package Type: ${payment.packageName}
                </p>
                <div className="flex justify-between">
                  <p
                    className={`mt-2 ${
                      payment.status === "Success"
                        ? "text-green-600"
                        : "text-yellow-600"
                    }`}
                  >
                    Date Paid:{" "}
                    {new Date(payment.paymentDate).toLocaleDateString()}
                  </p>
                  <button
                    className="text-red-700"
                    onClick={() => handleDelete(payment._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewPayments;
