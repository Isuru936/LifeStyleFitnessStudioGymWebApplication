import React, { useContext, useState } from "react";
import wmodel from "../../assets/loginBack.png";
import logo from "../../assets/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../shared/context/auth.context";
import Toast from "../../shared/toast/Toast";


export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [touchEmail , setTouchEmail] = useState(false);
  const [touchPassword , setTouchPassword] = useState(false);
  const [loading, setloading] = useState(false);
  const auth = useContext(AuthContext)

  const validateForm = () => {
    let isValid = true;
    if (!email) {
      setEmailError("Email is required");
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Invalid email address");
      isValid = false;
    } else {
      setEmailError("");
    }
    if (!password) {
      setPasswordError("Password is required");
      isValid = false;
    } else {
      setPasswordError("");
    }
    return isValid;
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (validateForm()) {
      setloading(true);
      axios.post("http://localhost:3000/api/users/auth", {
        email: email,
        password: password,
      }).then((response) => {
        auth.login(response.data);
        console.log(response.data);
        navigate("/user-view-diet-plans");
        setloading(false);
      }).catch((error) => {
        console.log("error");
        setloading(false);
        Toast("Invalid email or password", "error");
      });
    }
  };

  return (
    <div
      className="absolute h-screen w-screen lg:w-screen flex justify-center align-middle"
      style={{ 
        backgroundImage: `url(${wmodel})`,
        backgroundRepeat: "no-repeat",
      }}
      div
    >
      <div className=" w-fit flex h-screen ">
        <div className=" bg-opacity-40 bg-white align-middle w-fit h-fit mt-auto mb-auto rounded-xl border border-stone-800 backdrop-blur-sm justify-center p-6 shadow-lg backdrop filter relative lg:p-10">
          <div>
            <h1 className="text-center static text-neutral-980 text-2xl mb-6 font-bold font-['Josefin Slab']">
              Lifestyle Fitness Studio
            </h1>
            <form onSubmit={submitHandler} action="#">
              <h2 className="text-xl text-center static text-stone-800 font-bold font-['Inria Sans'] mb-4">
                Welcome to Lifestyle Fitness Studio
              </h2>
              <div className="flex justify-center p-1">
                <div action={submitHandler}>
                  <div className=" h-5 text-black text-xl font-normal font-['Inria Sans'] mb-2">
                    <label htmlFor="email">Email</label>
                  </div>
                  <div className="mb-3">
                    <input
                      className="rounded-[10px] bg-gray-500 opacity-65 h-8 w-full"
                      type="email"
                      onBlur={() => setTouchEmail(true)}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      id="email"
                    />
                    {touchEmail && emailError && <div className="text-red-500">{emailError}</div>}
                  </div>
                  <div className="h-5 text-black text-xl font-normal font-['Inria Sans'] mb-2 ">
                    <label htmlFor="Password">Password</label>
                  </div>
                  <div className="mb-5">
                    <input
                      className="rounded-[10px] bg-gray-500 opacity-65 h-8 w-[300px]"
                      type="password"
                      id="password"
                      onBlur={() => setTouchPassword(true)}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                    {touchPassword && passwordError && <div className="text-red-500">{passwordError}</div>}
                  </div>
                  <Link to="/forget-password">
                    <div className="mt-7 mb-5">
                      <span className="text-xl flex justify-center size- text-blue-500">
                        Forget Password?
                      </span>
                    </div>
                  </Link>

                  <div className="flex justify-center mb-5">
                    <button
                      className="text-xl w-[200px] h-[50px] bg-amber-600 rounded-[10px]"
                      type="submit"
                    >
                      Login
                    </button>
                  </div>
                  <Link to="/sign-up">
                    <div className=" mb-7">
                      <span className="flex justify-center text-blue-700">
                        Don't have an Account?
                      </span>
                    </div>
                  </Link>
                  <label className="flex justify-center text-black opacity-50">
                    "Decipline Work Miracles."
                  </label>
                </div>
              </div>
            </form>
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

export default Login;