import React, { useState } from "react";
import DropDownNavBar from "../../components/DropDownNavBar";
import SideBar from "../../components/SideBar";
import bgImg from "../../assets/sim.jpg";

const ViewPayments = () => {
  // Dummy data for demonstration
  const [payments, setPayments] = useState([
    { id: 1, user: "John Doe", amount: 50, status: "Success" },
    { id: 2, user: "Jane Smith", amount: 75, status: "Pending" },
    { id: 3, user: "Alice Johnson", amount: 100, status: "Success" },
    { id: 4, user: "Bob Brown", amount: 30, status: "Success" },
    { id: 5, user: "Eve Williams", amount: 90, status: "Pending" },
  ]);

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
                key={payment.id}
                className="bg-white rounded-lg shadow-md hover:shadow-xl p-6"
              >
                <h2 className="text-xl font-semibold mb-2">{payment.user}</h2>
                <p className="text-gray-600">Amount: ${payment.amount}</p>
                <p className="text-gray-600">Package Type: Yearly</p>
                <p
                  className={`mt-2 ${
                    payment.status === "Success"
                      ? "text-green-600"
                      : "text-yellow-600"
                  }`}
                >
                  Status: {payment.status}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewPayments;
