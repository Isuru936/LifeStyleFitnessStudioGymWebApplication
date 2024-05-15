import React, { useState } from "react";
import LOGO from "../../assets/Logo.png";
import MENU from "../../assets/MENU.png";
import bg from "../../assets/gym.jpg";
import { Icon } from "@iconify/react/dist/iconify.js";

const UserProfile = () => {
  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState("");
  const [nic, setNic] = useState("");
  const [phone, setPhone] = useState("");

  const isSaveEnabled =
    fullName !== "" &&
    age !== "" &&
    nic !== "" &&
    phone !== "" &&
    !isNaN(parseInt(age)) &&
    !isNaN(parseInt(phone)) &&
    !isNaN(parseInt(nic));

  const handleSave = () => {
    if (isSaveEnabled) {
      alert("Saving profile...");
    } else {
      alert("Please fill in all fields with valid values before saving.");
    }
  };

  return (
    <div className="bg-gray-200 h-screen relative">
      <img
        src={bg}
        alt="background"
        className="absolute inset-0 object-cover w-full h-screen opacity-80 grayscale brightness-50"
      />
      <div className="p-5 relative">
        <img
          src={LOGO}
          alt="logo"
          className="absolute top-0 left-0 h-10 mt-2 ml-5 "
        />
        <Icon
          icon="tabler:layout-navbar-expand"
          className="text-3xl text-slate-300 hover:scale-105 transition-transform cursor-pointer absolute top-5 right-5"
        />
        <div className="bg-white bg-opacity-50 rounded-lg shadow-xl mt-16 pt-3 ">
          <h4 className="text-black text-2xl font-bold bg-transparent w-[380px] pl-4 mt-2">
            Edit profile
          </h4>
          <ul className="p-6 flex flex-col space-y-5">
            <li className="flex flex-col w-full">
              <label htmlFor="fullName" className="text-black text-lg">
                Full Name
              </label>
              <input
                type="text"
                className="bg-slate-300 rounded-lg w-full h-8 px-2 text-black"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </li>
            <li className="flex flex-col w-full">
              <label htmlFor="age" className="text-black text-lg">
                Age
              </label>
              <input
                type="text"
                className="bg-slate-300 rounded-lg w-full h-8 px-2 text-black"
                value={age}
                onChange={(e) => setAge(e.target.value.replace(/\D/, ""))}
              />
            </li>
            <li className="flex flex-col w-full">
              <label htmlFor="nic" className="text-black text-lg">
                NIC
              </label>
              <input
                type="text"
                className="bg-slate-300 rounded-lg w-full h-8 px-2 text-black"
                value={nic}
                onChange={(e) => setNic(e.target.value.replace(/\D/, ""))}
              />
            </li>
            <li className="flex flex-col w-full">
              <label htmlFor="phone" className="text-black text-lg">
                Phone
              </label>
              <input
                type="text"
                className="bg-slate-300 rounded-lg w-full h-8 px-2 text-black mb-10"
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/, ""))}
              />
            </li>
            {isSaveEnabled && (
              <li className="flex justify-center">
                <button
                  className="bg-orange-700 w-24 rounded-2xl text-xl font-bold text-white"
                  onClick={handleSave}
                >
                  Save
                </button>
              </li>
            )}
          </ul>
          <div className="w-full flex justify-center mb-3">
            <button
              className="bg-slate-700 w-fit p-2 rounded-2xl hover:bg-slate-600 text-xl font-bold text-white"
              onClick={() => window.history.back()}
            >
              <Icon icon="ion:caret-back-circle" />
            </button>
          </div>
        </div>
      </div>
      <div className="text-center bg-white bg-opacity-50 p-2 absolute bottom-0 left-0 w-full">
        <p className="text-black">Copyright© All rights Reserved.</p>
      </div>
    </div>
  );
};

export default UserProfile;
