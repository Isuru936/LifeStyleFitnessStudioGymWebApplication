import React from "react";
import wmodel from "../../assets/435224b8d6c20d7126bc9eb88fa745dd.png";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div className="bg-white">
      <img
        src={wmodel}
        className="absolute inset-0 lg:px-[220px]  h-full object-cover "
        alt="Background"
      />
      <img
        src={logo}
        className="w-[107px] h-12 absolute bottom-0 right-0 mb-4 mr-4"
        alt="background"
      />
      <div className=" bg-white bg-opacity-40 rounded-[20px] border border-stone-800 backdrop-blur-sm justify-center p-6 shadow-lg backdrop filter relative lg:p-10">
        <div>
          <h1 className="text-center static text-neutral-950 text-xl mb-6 font-bold font-['Josefin Slab']">
            Lifestyle Fitness Studio
          </h1>
          <div>
            <h2 className="text-center static text-stone-800 text-base font-bold font-['Inria Sans'] mb-4">
              Welcome to Lifestyle Fitness Studio
            </h2>
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
                <div className="h-5 text-black text-sm font-normal font-['Inria Sans'] mb-2 ">
                  <label htmlFor="Password">Password</label>
                </div>
                <div className="mb-5">
                  <input
                    className="rounded-[10px] bg-gray-500 opacity-65"
                    type="password"
                    id="password"
                  />
                </div>
                <div className="mb-3">
                  <span className="flex justify-center size- text-blue-500">
                    Forget Password?
                  </span>
                </div>
                <div className="flex justify-center mb-3">
                  <button
                    className=" w-[108px] h-[35px] bg-amber-600 rounded-[10px]"
                    type="submit"
                  >
                    Login
                  </button>
                </div>
                <div className=" mb-7">
                  <span className="flex justify-center text-blue-700">
                    Don't have an Account?
                  </span>
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
  );
};

export default Login;
