import React from "react";
import wmodel from "../../assets/dc907d1437465e2b0d94230b9086304c.png";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

export const NewPassword = () => {
  return (
    <div className="bg-white">
      <img
        src={wmodel}
        className="absolute inset-0 w-full h-full object-cover"
        alt="Background"
      />
      <img
        src={logo}
        className="w-[107px] h-12 absolute bottom-0 right-0 mb-4 mr-4"
        alt="background"
      />
      <div className=" bg-white bg-opacity-40 rounded-[20px] border border-stone-800 backdrop-blur-sm justify-center p-6 shadow-lg backdrop filter relative">
        <div>
          <h1 className="text-center static text-neutral-950 text-xl mb-6 font-bold font-['Josefin Slab']">
            Lifestyle Fitness Studio
          </h1>
          <div>
            <h2 className="text-center static text-stone-800 text-x font-bold font-['Inria Sans'] mb-4">
              Enter A New Password.
            </h2>
            <div className="flex justify-center">
              <form action="">
                <div className="h-5 text-black text-sm font-normal font-['Inria Sans'] mb-2 ">
                  <label htmlFor="Password">New Password</label>
                </div>
                <div className="mb-5">
                  <input
                    className="rounded-[10px] bg-gray-500 opacity-65"
                    type="password"
                    id="new_password"
                  />
                </div>
                <div className="h-5 text-black text-sm font-normal font-['Inria Sans'] mb-2 ">
                  <label htmlFor="Password">Confirm Password</label>
                </div>
                <div className="mb-5">
                  <input
                    className="rounded-[10px] bg-gray-500 opacity-65"
                    type="password"
                    id="confirm_password"
                  />
                </div>
                <div className="flex justify-center mb-3">
                  <button
                    className=" w-[108px] h-[35px] bg-amber-600 rounded-[10px]"
                    type="submit"
                  >
                    Login
                  </button>
                </div>
                <label className="flex justify-center text-black opacity-50 mt-7">
                  "Decipline Work Miracles."
                </label>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPassword;
