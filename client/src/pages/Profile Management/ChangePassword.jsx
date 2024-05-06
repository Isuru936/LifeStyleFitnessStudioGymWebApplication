import React, { useContext, useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import LOGO from "../../assets/Logo.png";
import MENU from "../../assets/MENU.png";
import bg from "../../assets/gym.jpg";
import axios from "axios";
import { AuthContext } from "../../shared/context/auth.context";
import Toast from "../../shared/toast/Toast";

const ChangePassword = () => {
  const Auth = useContext(AuthContext);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [touch , setTouch] = useState(false);

  const isChangeEnabled =
    currentPassword !== "" &&
    newPassword !== "" &&
    confirmPassword !== "" &&
    newPassword === confirmPassword;

  const handleSave = () => {
    axios
      .put("/api/users/changepassword", {
        userID: Auth.userID,
        Oldpassword: currentPassword,
        NewPassword: newPassword,
      })
      .then((response) => {
        if(response.data.message === "Password updated successfully"){
          Toast("Password updated successfully","success")
        }
      })
      .catch((error) => {
        Toast("Current Password is Invalid","error")
      });
  };

  const toggleShowCurrentPassword = () => {
    setShowCurrentPassword(!showCurrentPassword);
  };

  const toggleShowNewPassword = () => {
    setShowNewPassword(!showNewPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };


  return (
    <div className="bg-gray-200 h-screen relative">
      <img
        src={bg}
        alt="background"
        className="absolute inset-0 object-cover w-full h-full opacity-80 grayscale brightness-50"
      />
      <div className="p-5 relative z-10 max-w-screen-lg mx-auto">
        <img
          src={LOGO}
          alt="logo"
          className="absolute top-0 left-0 h-10 mt-2 ml-5 "
        />
        <img
          src={MENU}
          className="absolute w-10 h-10 top-0 right-0 mt-2 mr-2 "
          alt="menu"
        />
        <div className="bg-white bg-opacity-50 rounded-lg shadow-xl mt-16 pt-3 ">
          <h4 className="text-black text-2xl font-bold bg-transparent w-[380px] pl-4 mb-10 mt-2">
            Change Password
          </h4>
          <ul className="p-6 flex flex-col space-y-8">
            <li className="flex flex-col w-full">
              <label htmlFor="currentPassword" className="text-black text-lg">
                Current Password
              </label>
              <div className="relative">
                <input
                  type={showCurrentPassword ? "text" : "password"}
                  id="currentPassword"
                  className="bg-slate-300 rounded-lg w-full h-8 px-2 text-black pr-10"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value) }

                />
                <button
                  className="absolute inset-y-0 right-0 flex items-center justify-center mr-2 focus:outline-none"
                  onClick={toggleShowCurrentPassword}
                >
                  {showCurrentPassword ? <HiEyeOff /> : <HiEye />}
                </button>
              </div>
            </li>
            <li className="flex flex-col w-full">
              <label htmlFor="newPassword" className="text-black text-lg">
                New Password
              </label>
              <div className="relative">
                <input
                  type={showNewPassword ? "text" : "password"}
                  id="newPassword"
                  className="bg-slate-300 rounded-lg w-full h-8 px-2 text-black pr-10"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
                <button
                  className="absolute inset-y-0 right-0 flex items-center justify-center mr-2 focus:outline-none"
                  onClick={toggleShowNewPassword}
                >
                  {showNewPassword ? <HiEyeOff /> : <HiEye />}
                </button>
              </div>
            </li>
            <li className="flex flex-col w-full">
              <label htmlFor="confirmPassword" className="text-black text-lg">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  onBlur={() => setTouch(true)}
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  className="bg-slate-300 rounded-lg w-full h-8 px-2 text-black pr-10"
                  value={confirmPassword}
                  onChange={(e) =>setConfirmPassword(e.target.value)}
                />
                <button
                  className="absolute inset-y-0 right-0 flex items-center justify-center mr-2 focus:outline-none"
                  onClick={toggleShowConfirmPassword}
                >
                  {showConfirmPassword ? <HiEyeOff /> : <HiEye />}
                </button>
              </div>
                {touch && newPassword !== confirmPassword && <h2 className="text-red-700" >Password Mismatch </h2>}
            </li>
            {isChangeEnabled && (
              <li className="flex justify-center">
                <button
                  className="bg-blue-700 w-40 h-16 rounded-full text-xl font-bold"
                  onClick={handleSave}
                >
                  Save
                </button>
              </li>
            )}
            <li className="flex justify-center">
              <button className="text-black underline hover:no-underline">
                Forget Password ?
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center bg-white bg-opacity-50 p-2 absolute bottom-0 left-0 w-full">
        <p className="text-black">Copyright© All rights Reserved.</p>
      </div>
    </div>
  );
};

export default ChangePassword;
