// Registration.js

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Toast from "../../shared/toast/Toast";
import wmodel from "../../assets/signBack.png";
import logo from "../../assets/Logo.png";

const AdminRegistration = () => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    axios
      .post("http://localhost:3000/api/admin/users", formData)
      .then((response) => {
        Toast("Account Created", "success");
        navigate("/diet-plan", {
          replace: true,
          state: { id: response.data._id },
        });
      })
      .catch((error) => {
        console.log(error);
        Toast("Something went wrong", "error");
      });
  };

  return (
    <div className="absolute h-screen w-screen lg:w-screen flex justify-center">
      <div className="w-fit flex h-screen">
        <div className="bg-opacity-40 bg-white align-middle w-fit h-fit mt-auto mb-auto rounded-xl border border-stone-800 backdrop-blur-sm justify-center p-6 shadow-lg backdrop filter relative lg:p-10">
          <div>
            <h1 className="text-center static text-neutral-980 text-2xl mb-6 font-bold font-['Josefin Slab']">
              Lifestyle Fitness Studio
            </h1>
            <div>
              <div className="flex justify-center p-1">
                <form onSubmit={handleSubmit} action="#">
                  <div className="h-5 text-black text-xl font-normal font-['Inria Sans'] mb-2">
                    <label htmlFor="username">Username</label>
                  </div>
                  <div className="mb-3">
                    <input
                      className="rounded-[10px]  bg-slate-50 p-5 outline-none border-2 opacity-65 h-8 w-full"
                      type="text"
                      id="username"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="h-5 text-black text-xl font-normal font-['Inria Sans'] mb-2">
                    <label htmlFor="email">Email</label>
                  </div>
                  <div className="mb-3">
                    <input
                      className="rounded-[10px] bg-slate-50 p-5 outline-none border-2 opacity-65 h-8 w-full"
                      type="text"
                      id="email"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="h-5 text-black text-xl font-normal font-['Inria Sans'] mb-2">
                    <label htmlFor="password">Password</label>
                  </div>
                  <div className="mb-5">
                    <input
                      className="rounded-[10px]  bg-slate-50 p-5 outline-none border-2 opacity-65 h-8 w-[300px]"
                      type="password"
                      id="password"
                      onChange={handleChange}
                    />
                  </div>
                  <Link to="/admin-login">
                    <div className="mb-2">
                      <span className="text-lg flex justify-center text-blue-800">
                        Login Here
                      </span>
                    </div>
                  </Link>
                  <div className="flex justify-center mb-5">
                    <button
                      className="text-xl w-[200px] h-[50px] bg-amber-600 rounded-[10px] hover:bg-amber-700 transition-colors duration-300 ease-in-out text-white font-bold font-['Inria Sans']"
                      type="submit"
                    >
                      Signup
                    </button>
                  </div>
                  <label className="flex justify-center text-black opacity-50 text-base">
                    "Discipline Work Miracles."
                  </label>
                </form>
              </div>
            </div>
          </div>
        </div>
        <img
          src={logo}
          className="w-[107px] h-12 absolute bottom-0 right-0 mb-4 mr-4"
          alt="background"
        />
      </div>
    </div>
  );
};

export default AdminRegistration;
