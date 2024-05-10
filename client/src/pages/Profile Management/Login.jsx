import React, { useContext, useState } from "react";
import wmodel from "../../assets/loginBack.png";
import logo from "../../assets/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../shared/context/auth.context";
import { toast } from "react-toastify";

export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setloading] = useState(false);
  const auth = useContext(AuthContext);

  const submitHandler = (event) => {
    event.preventDefault();
    setloading(true);
    axios
      .post("http://localhost:3000/api/users/auth", {
        email: email,
        password: password,
      })
      .then((response) => {
        auth.login(response.data);
        console.log(response.data);
        navigate("/");
        setloading(false);
      })
      .catch((error) => {
        console.log("error");
        setloading(true);
        toast.error("Invalid email or password", "");
      });
  };

  return (
    <div
      className="absolute h-screen w-screen lg:w-screen flex justify-center align-middle"
      style={{
        backgroundImage: `url(${wmodel})`,
        backgroundRepeat: "no-repeat",
      }}
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
                      className="rounded-xl outline-none bg-slate-50 border-2 p-5 opacity-65 h-8 w-full"
                      type="email"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      id="email"
                    />
                  </div>
                  <div className="h-5 text-black text-xl font-normal font-['Inria Sans'] mb-2 ">
                    <label htmlFor="Password">Password</label>
                  </div>
                  <div className="mb-5">
                    <input
                      className="rounded-[10px] bg-slate-50 p-5 border-2 outline-none opacity-65 h-8 w-[300px]"
                      type="password"
                      id="password"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                  </div>
                  <Link to="/forget-password">
                    <div className="mt-7 mb-5">
                      <span className="text-xl flex justify-center hover:text-slate-700 text-slate-600">
                        Forget Password?
                      </span>
                    </div>
                  </Link>

                  <div className="flex justify-center mb-5">
                    <button
                      className="text-xl w-[200px] h-[50px] bg-amber-600 rounded-[10px] hover:bg-amber-700 transition-colors duration-300 ease-in-out text-white font-bold font-['Inria Sans']"
                      type="submit"
                    >
                      Login
                    </button>
                  </div>
                  <Link to="/sign-up">
                    <div className=" mb-7">
                      <span className="flex justify-center text-blue-700 hover:underline transition-transform duration-1000 ease-in-out">
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
