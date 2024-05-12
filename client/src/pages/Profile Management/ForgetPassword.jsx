import React, { useContext, useState } from "react";
import wmodel from "../../assets/model3.png";
import logo from "../../assets/Logo.png";
import axios from "axios";
import Toast from "../../shared/toast/Toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../shared/context/auth.context";
import { Icon } from "@iconify/react";

export const ForgetPassword = () => {
  const Auth = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setemail] = useState();

  const submithandler = () => {
    axios
      .post("/api/users/SendOTP", {
        email: email,
      })
      .then((response) => {
        if (response.data.message === "Otp Send Successfully") {
          Toast("Otp Send Successfully", "success");
          Auth.setOTP(response.data.OTP);
          navigate("/otp", { replace: true, state: { email } });
        }
      })
      .catch((error) => {
        Toast("Current Email Does not Exist.", "error");
      });
  };

  return (
    <div className="absolute h-screen w-screen lg:w-screen flex justify-center align-middle ">
      <img
        src={wmodel}
        className="absolute inset-0 h-full max-w-400 object-cover"
        alt="Background"
      />
      <div className="bg-opacity-40 bg-white align-middle w-fit h-fit mt-auto mb-auto rounded-xl border border-stone-800 backdrop-blur-sm justify-center p-6 shadow-lg backdrop filter relative lg:p-10">
        <div>
          <h1 className="text-center static text-neutral-980 text-2xl mb-6 font-bold font-['Josefin Slab']">
            Lifestyle Fitness Studio
          </h1>
          <div>
            <h2 className="text-xl text-center static text-stone-800 font-bold font-['Inria Sans'] mb-4">
              Welcome to Lifestyle Fitness Studio
            </h2>

            <div>
              <div>
                <p className=" text-center text-lg text-black">
                  Please enter your email address
                </p>
                <p className="pb-3 text-center text-lg text-black">
                  to reset your password.
                </p>
                <div className="flex justify-center items-center ">
                  <form
                    onSubmit={submithandler}
                    action="#"
                    className="w-full px-10"
                  >
                    <div className=" text-black text-xl font-normal font-['Inria Sans'] mb-2">
                      <label htmlFor="email">Email</label>
                    </div>
                    <div className="mb-3">
                      <input
                        onChange={(e) => setemail(e.target.value)}
                        className="rounded-[10px] bg-slate-50 p-2 w-72 border-2 opacity-75 "
                        type="email"
                        id="email"
                      />
                    </div>
                    <div className="mb-6"></div>
                    <div className="flex justify-center mb-3">
                      <Link to="/login">
                        <button
                          className="text-xl mr-2 w-fit p-3 bg-slate-600 rounded-[10px] hover:bg-slate-700 transition-colors duration-300 ease-in-out text-white font-bold font-['Inria Sans']"
                          type="button"
                        >
                          <Icon icon="ion:caret-back-circle" />
                        </button>
                      </Link>
                      <button
                        className="text-xl w-[200px] h-[50px] bg-amber-600 rounded-[10px] hover:bg-amber-700 transition-colors duration-300 ease-in-out text-white font-bold font-['Inria Sans']"
                        type="submit"
                      >
                        Done
                      </button>
                    </div>
                    <label className="flex justify-center text-black opacity-75">
                      "Decipline Work Miracles."
                    </label>
                  </form>
                </div>
              </div>
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
  );
};

export default ForgetPassword;
