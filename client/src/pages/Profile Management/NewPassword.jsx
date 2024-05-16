import React, { useState } from "react";
import wmodel from "../../assets/dc907d1437465e2b0d94230b9086304c.png";
import logo from "../../assets/Logo.png";
import { HiEye, HiEyeOff } from "react-icons/hi";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import Toast from "../../shared/toast/Toast";

export const NewPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [touch, setTouch] = useState(false);

  const handleSave = () => {
    if (newPassword.length < 8) {
      Toast("At least 8 characters", "error");
      return;
    }
    axios
      .put("/api/users/newpassword", {
        mail: location.state.email,
        NewPassword: newPassword,
      })
      .then((response) => {
        if (response.data.message === "Password updated successfully") {
          Toast("Password updated successfully", "success");
          navigate("/login");
        }
      })
      .catch((error) => {
        Toast("Current Password is Invalid", "error");
      });
  };

  const toggleShowNewPassword = () => {
    setShowNewPassword(!showNewPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="absolute h-screen w-screen lg:w-screen flex justify-center align-middle">
      <img
        src={wmodel}
        className="absolute inset-0 w-full h-full object-none"
        alt="Background"
      />
      <img
        src={logo}
        className="w-[107px] h-12 absolute bottom-0 right-0 mb-4 mr-4"
        alt="background"
      />
      <div className="w-fit flex h-screen">
        <div className="bg-opacity-40 bg-white align-middle w-fit h-fit mt-auto mb-auto rounded-xl border border-stone-800 backdrop-blur-sm justify-center p-6 shadow-lg backdrop filter relative lg:p-10">
          <div>
            <h1 className="text-center static text-neutral-980 text-2xl mb-6 font-bold font-['Josefin Slab']">
              Lifestyle Fitness Studio
            </h1>
            <div>
              <h2 className="text-xl text-center static text-stone-800 font-bold font-['Inria Sans'] mb-4">
                Enter A New Password.
              </h2>
              <div className="flex justify-center">
                <div>
                  <div className="h-5 text-black text-lg font-normal font-['Inria Sans'] mb-3">
                    <label htmlFor="Password">New Password</label>
                  </div>
                  <div className="rounded-[10px] pr-1 relative flex bg-slate-500">
                    <input
                      type={showNewPassword ? "text" : "password"}
                      className="bg-transparent h-7 w-full"
                      onChange={(event) => setNewPassword(event.target.value)}
                    />
                    <button className="" onClick={toggleShowNewPassword}>
                      {showNewPassword ? <HiEyeOff /> : <HiEye />}
                    </button>
                  </div>
                  {touch && newPassword.length < 8 && (
                    <h2 className="text-red-700 mb-5">
                      At least 8 characters
                    </h2>
                  )}
                  <div className="h-5 text-black text-lg font-normal font-['Inria Sans'] mb-2 mt-5">
                    <label htmlFor="Password">Confirm Password</label>
                  </div>
                  <div className="rounded-[10px] pr-1 mb-1 relative flex bg-slate-500">
                    <input
                      onBlur={() => setTouch(true)}
                      className="bg-transparent opacity-65 h-7 w-full"
                      type={showConfirmPassword ? "text" : "password"}
                      id="confirmPassword"
                      onChange={(event) =>
                        setConfirmPassword(event.target.value)
                      }
                    />
                    <button onClick={toggleShowConfirmPassword}>
                      {showConfirmPassword ? <HiEyeOff /> : <HiEye />}
                    </button>
                  </div>
                  {touch && newPassword !== confirmPassword && (
                    <h2 className="text-red-700 mb-2">Password Mismatch</h2>
                  )}
                  <div className="flex justify-center mt-5 mb-3">
                    <button
                      className={`text-xl w-[100px] h-[45px] ${
                        newPassword !== confirmPassword ||
                        newPassword.length < 8 ||
                        newPassword === ""
                          ? "bg-gray-600"
                          : "bg-amber-600"
                      } rounded-[10px]`}
                      type="submit"
                      onClick={handleSave}
                      disabled={
                        newPassword !== confirmPassword ||
                        newPassword.length < 8 ||
                        newPassword === ""
                      }
                    >
                      Submit
                    </button>
                  </div>
                  <label className="flex justify-center text-black opacity-75 mt-7">
                    "Discipline Works Miracles."
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPassword;
