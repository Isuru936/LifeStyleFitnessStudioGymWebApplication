import React, { useState } from "react";
import wmodel from "../../assets/signBack.png";
import logo from "../../assets/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Toast from "../../shared/toast/Toast";

export const signup = () => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      axios
        .post("http://localhost:3000/api/users", formData)
        .then((response) => {
          Toast("Account Created", "success");
          navigate("/quiz", { replace: true, state: { id: response.data._id } });
        })
        .catch((error) => {
          console.log(error);
          Toast("Something went wrong", "error");
        });
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.username) {
      errors.username = "Username is required";
    }
    if (!formData.fullName) {
      errors.fullName = "Full Name is required";
    }
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Invalid email address";
    }
    if (!formData.password) {
      errors.password = "Password is required";
    } else if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }
    return errors;
  };

  return (
    <div
      className="absolute h-screen w-screen lg:w-screen flex justify-center"
      style={{
        backgroundImage: `url(${wmodel})`,
        backgroundRepeat: "no-repeat",
      }}
    >
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
                      className="rounded-[10px] bg-gray-500 opacity-65 h-8 w-full"
                      type="text"
                      id="username"
                      onChange={handleChange}
                    />
                    {errors.username && <div className="text-red-500">{errors.username}</div>}
                  </div><div className="h-5 text-black text-xl font-normal font-['Inria Sans'] mb-2">
                    <label htmlFor="username">Full Name</label>
                  </div>
                  <div className="mb-3">
                    <input
                      className="rounded-[10px] bg-gray-500 opacity-65 h-8 w-full"
                      type="text"
                      id="fullName"
                      onChange={handleChange}
                    />
                    {errors.fullName && <div className="text-red-500">{errors.fullName}</div>}
                  </div>
                  <div className="h-5 text-black text-xl font-normal font-['Inria Sans'] mb-2">
                    <label htmlFor="email">Email</label>
                  </div>
                  <div className="mb-3">
                    <input
                      className="rounded-[10px] bg-gray-500 opacity-65 h-8 w-full"
                      type="text"
                      id="email"
                      onChange={handleChange}
                    />
                    {errors.email && <div className="text-red-500">{errors.email}</div>}
                  </div>
                  <div className="h-5 text-black text-xl font-normal font-['Inria Sans'] mb-2 ">
                    <label htmlFor="password">Password</label>{" "}
                    {/* Corrected htmlFor value */}
                  </div>
                  <div className="mb-5">
                    <input
                      className="rounded-[10px] bg-gray-500 opacity-65 h-8 w-[300px]"
                      type="password"
                      id="password"
                      onChange={handleChange}
                    />
                    {errors.password && <div className="text-red-500">{errors.password}</div>}
                  </div>
                  <Link to="/login">
                    <div className="mb-7">
                      <span className="text-xl flex justify-center text-blue-800">
                        Have an Account?
                      </span>
                    </div>
                  </Link>
                  <div className="flex justify-center mb-5">
                    <button
                      className="text-xl w-[200px] h-[50px] bg-amber-600 rounded-[10px]"
                      type="submit"
                    >
                      Signup
                    </button>
                  </div>
                  <label className="flex justify-center text-black opacity-50 text-base">
                    "Discipline Work Miracles."
                  </label>{" "}
                  {/* Corrected typo in the text */}
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

export default signup;
