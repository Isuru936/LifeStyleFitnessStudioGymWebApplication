import React, { useEffect, useState } from "react";
import DropDownNavBar from "../../components/DropDownNavBar";
import SideBar from "../../components/SideBar";
import bgImg from "../../assets/sim.jpg";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import notify from "../../components/toasts/toastTemplate";
import { ToastContainer } from "react-toastify";
import { motion } from "framer-motion";

const ViewPayments = () => {
  // Dummy data for demonstration
  const [payments, setPayments] = useState([
    { id: "", userId: "", email: "", username: "", amount: "" },
  ]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/payments/getPayments"
        );
        const data = await response.json();
        setPayments(data.data.payments);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPayments();
  }, []);

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
          <div className="flex justify-between">
            <h1 className="text-4xl font-bold my-8">User Payments</h1>
            <button
              className="border border-black w-fit h-fit flex  p-3 rounded-lg hover:bg-orange-500 hover:border-none hover:text-white transition-colors duration-300 ease-in-out"
              onClick={() => {
                notify(
                  "info",
                  "",
                  "Please select a user that you want to add a payment for."
                );
                navigate("/view-all-users");
              }}
            >
              <Icon
                icon="icon-park-twotone:add-web"
                className="mr-2 text-black hover:text-orange-500"
                style={{ color: "black" }}
              />
              Add Payments
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {payments.map((payment, index) => (
              <motion.div
                key={payment.id}
                className="bg-white rounded-lg shadow-md hover:shadow-xl p-6 flip-card"
                initial={{ opacity: 0, y: 20, rotateX: -180 }} // Adjust initial rotation
                animate={{ opacity: 1, y: 0, rotateX: 0 }} // Adjust final rotation
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >
                <div className="flex justify-between">
                  <h2 className="text-xl font-semibold mb-2">#{payment._id}</h2>
                  <button
                    className="text-blue-700"
                    onClick={(e) => {
                      navigate(`/update-payment/${payment._id}`);
                      console.log(payment._id);
                      console.log(payment.user);
                    }}
                  >
                    Manage
                  </button>
                </div>
                <h3>{payment.email}</h3>
                <p className="text-gray-600">Amount: ${payment.amount}</p>
                <p className="text-gray-600">
                  Package Type: ${payment.paymentType}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ViewPayments;
