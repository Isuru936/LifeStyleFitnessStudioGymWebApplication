import { Link } from "react-router-dom";
import logo from "../../assets/Logo.png";
import React from "react";

function PaymentDetails() {
  return (
    <div className="inline-flex flex-col items-start h-screen w-screen bg-slate-200 p-6">
      <div>
        <img src={logo} style={{ width: "100px" }} alt="" />
      </div>
      <div className="mx-auto w-96 bg-white rounded-xl shadow-lg p-10">
        <h2 className="text-3xl font-bold text-black mb-1">Payment Details</h2>
        <hr className="font-bold bg-[#F2420D] mb-3" />
        <h3 className="text-xl font-bold text-orange-800 mb-3">
          Transaction ID 123552
        </h3>
        <div className="flex flex-col font-regular text-black">
          <div className="flex flex-row justify-between mb-5">
            <div>Date</div>
            <div>Aug 22, 2023</div>
          </div>
          <div className="flex flex-row justify-between mb-5">
            <div>Name</div>
            <div>Sewmini Swarnasinghe</div>
          </div>
          <div className="flex flex-row justify-between mb-5">
            <div>Payment Method</div>
            <div>Card Payment</div>
          </div>
          <div className="flex flex-row justify-between mb-5">
            <div>Date</div>
            <div>Aug 22, 2023</div>
          </div>
          <div className="flex flex-row justify-between mb-5">
            <div>Status</div>
            <div>Paid</div>
          </div>
          <div className="flex flex-row justify-between mb-5">
            <div>Package</div>
            <div>30,000 Package</div>
          </div>
        </div>
        <Link to="/UserExercises">
          <button className="bg-[#E8EDF2] mx-auto justify-center p-2 pl-3 pr-3 rounded-xl hover:bg-[#D8EDF2]">
            Go Back
          </button>
        </Link>
      </div>
    </div>
  );
}

export default PaymentDetails;
