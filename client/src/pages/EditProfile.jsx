import React, { useState } from "react";
import LOGO from "../assets/Logo.png";
import MENU from "../assets/MENU.png";
import bg from "../assets/gym.jpg";

const UserProfile = () => {
  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState("");
  const [nic, setNic] = useState("");
  const [phone, setPhone] = useState("");

  const isSaveEnabled =
    fullName !== "" && age !== "" && nic !== "" && phone !== "" && !isNaN(parseInt(age)) && !isNaN(parseInt(phone))  && !isNaN(parseInt(nic));

  const handleSave = () => {
    if (isSaveEnabled) {
      alert("Saving profile...");
    } else {
      alert("Please fill in all fields with valid values before saving.");
    }
  };

  return (
    <div className="bg-gray-200 h-full relative">
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
            Edit profile
          </h4>
          <ul className="p-6 flex flex-col space-y-8">
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
                  className="bg-blue-700 w-40 h-16 rounded-full text-xl font-bold"
                  onClick={handleSave}
                >
                  Save
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
      <div className="flex justify-center bg-white bg-opacity-50 p-2 absolute bottom-0 left-0 w-full">
        <p className="text-black">Copyright© All rights Reserved.</p>
      </div>
    </div>
  );
};

export default UserProfile;
