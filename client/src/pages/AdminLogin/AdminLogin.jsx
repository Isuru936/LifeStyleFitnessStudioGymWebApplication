import React, { useContext, useState } from "react";
import wmodel from "../../assets/loginBack.png";
import logo from "../../assets/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../shared/context/auth.context";
import Toast from "../../shared/toast/Toast"; // Import Toast for error handling

const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // Add loading state
  const auth = useContext(AuthContext);

  const submitHandler = async (event) => {
    event.preventDefault();
    setLoading(true); // Set loading to true when form is submitted
    try {
      const response = await axios.post(
        "http://localhost:3000/api/admin/auth",
        {
          email,
          password,
        }
      );
      auth.login(response.data);
      console.log(response.data);
      localStorage.setItem("adminLogin", true);
      navigate("/view-all-users");
    } catch (error) {
      console.error(error);
      // Handle login error here
      Toast("Invalid email or password", "error");
    } finally {
      setLoading(false); // Reset loading state after login attempt
    }
  };

  return (
    <div
      className="absolute h-screen w-screen lg:w-screen flex justify-center align-middle"
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
            <form onSubmit={submitHandler} action="#">
              <h2 className="text-xl text-center static text-stone-800 font-bold font-['Inria Sans'] mb-4">
                Admin Login
              </h2>
              <div className="flex justify-center p-1">
                <div action={submitHandler}>
                  <div className="h-5 text-black text-xl font-normal font-['Inria Sans'] mb-2">
                    <label htmlFor="email">Email</label>
                  </div>
                  <div className="mb-3">
                    <input
                      className="rounded-[10px] bg-slate-50 p-5 outline-none border-2 opacity-65 h-8 w-full"
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
                      className="rounded-[10px]  bg-slate-50 p-5 outline-none border-2 opacity-65 h-8 w-[300px]"
                      type="password"
                      id="password"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                  </div>

                  <div className="flex justify-center mb-5">
                    <button
                      className="text-xl w-[200px] h-[50px] bg-amber-600 hover:bg-orange-700 transition-colors duration-500 hover:text-white rounded-[10px]"
                      type="submit"
                      disabled={loading} // Disable button while loading
                    >
                      {loading ? "Logging in..." : "Login"}{" "}
                      {/* Show loading text when loading */}
                    </button>
                  </div>
                  <Link to="/admin-registrations">
                    <div className=" mb-7">
                      <span className="flex justify-center text-blue-700">
                        Register Admin
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

export default AdminLogin;
