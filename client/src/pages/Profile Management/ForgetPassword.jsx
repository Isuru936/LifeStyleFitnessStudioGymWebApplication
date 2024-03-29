import React from "react";
import wmodel from "../../assets/model3.png";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

export const ForgetPassword = () => {
  return (
    <div className="bg-white p-6">
      <img
        src={wmodel}
        className="absolute inset-0 h-full max-w-400"
        alt="Background"
      />
      <img
        src={logo}
        className="w-[107px] h-12 absolute bottom-0 right-0 mb-4 mr-4"
        alt="background"
      />
      <div className=" bg-white bg-opacity-40 rounded-[20px] border border-stone-800 backdrop-blur-sm justify-center shadow-lg backdrop filter relative">
        <div className="p-7">
          <h1 className="text-center static text-neutral-950 text-xl mb-6 font-bold font-['Josefin Slab']">
            Lifestyle Fitness Studio
          </h1>
          <div>
            <h2 className="text-center static text-stone-800 text-base font-bold font-['Inria Sans'] mb-4">
              Welcome to Lifestyle Fitness Studio
            </h2>

            <div>
              <div>
                <p className="p-5 b-3 text-center text-xs text-black">
                  Please enter your email address to reset your password we will
                  send an email to reset your password.
                </p>
              </div>
              <div className="flex justify-center">
                <form action="">
                  <div className=" h-5 text-black text-sm font-normal font-['Inria Sans'] mb-2">
                    <label htmlFor="email">Email</label>
                  </div>
                  <div className="mb-3">
                    <input
                      className="rounded-[10px] bg-gray-500 opacity-65"
                      type="email"
                      id="email"
                    />
                  </div>
                  <div className="mb-3">
                    <span className="flex justify-center size- text-[#50E338]">
                      A Email has Sent
                    </span>
                  </div>
                  <div className="flex justify-center mb-3">
                    <button
                      className=" w-[108px] h-[35px] bg-amber-600 rounded-[10px]"
                      type="submit"
                    >
                      Done
                    </button>
                  </div>
                  <label className="flex justify-center text-black opacity-50">
                    "Decipline Work Miracles."
                  </label>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
