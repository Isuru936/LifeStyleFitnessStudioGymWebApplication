import React, { useContext, useEffect, useState } from "react";
import LOGO from "../../assets/Logo.png";
import MENU from "../../assets/MENU.png";
import model from "../../assets/model.jpg";
import gym from "../../assets/gym.jpg";
import bg from "../../assets/860.jpg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../shared/context/auth.context";
import axios from "axios";

const UserProfile = () => {

  const Auth = useContext(AuthContext)
  const [profile , setProfile] = useState({});

  useEffect(() => {
    axios
    .get(`http://localhost:3000//api/users/${Auth.userID}`)
    .then((response) => {
      setProfile(response.data)
      console.log(response.data)
    })
    .catch((error) => {
      console.log(error);
      Toast("Something went wrong", "error");
    });
  })
  return (
    <div className="bg-gray-200 h-screen lg:h-full relative">
      <img
        src={bg}
        alt="background"
        className="absolute inset-0 object-cover w-full h-full opacity-50"
      />
      <div className="p-5 relative z-10">
        <img
          src={LOGO}
          alt="logo"
          className="absolute top-0 left-0 h-10 mt-2 ml-3"
        />
        <img
          src={MENU}
          className="absolute w-10 h-10 top-0 right-0 mt-2 mr-2"
          alt="menu"
        />
        <div className="bg-white rounded-lg shadow-xl pb-8 mt-10">
          <div className="w-full h-[250px]">
            <img
              src={gym}
              className="w-full h-full rounded-tl-lg rounded-tr-lg object-cover"
              alt="Profile Background"
            />
          </div>
          <div className="flex flex-col items-center -mt-20">
            <img
              src={model}
              className="border-4 border-white object-cover w-36 h-36 rounded-full custom-position"
              alt="Profile"
            />
            <div className="flex items-center mt-2">
              <label className="text-2xl text-black font-bold"></label>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center lg:items-end justify-end px-8 mt-2">
            <div className="flex items-center space-x-4 mt-2">
              <Link to="/editProfile">
                <button className="flex items-center bg-orange-600 hover:bg-orange-700 text-gray-100  rounded text-[12px]  transition duration-100 w-[130px] h-7 justify-center">
                  <span>Update Profile</span>
                </button>
              </Link>
              <Link to="/change-password">
                <button className="flex items-center bg-orange-600 hover:bg-orange-700 text-gray-100  rounded text-[12px]  transition duration-100 w-[130px] h-7 justify-center">
                  <span>Change Password</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-white rounded-lg shadow-xl p-8 mt-3">
          <h4 className="text-xl text-gray-900 font-bold">Personal Info</h4>
          <ul className="mt-2 text-gray-700">
            <li className="flex border-y py-2">
              <span className="font-bold w-24">Full name:</span>
              <span className="text-gray-700">Amanda S. Ross</span>
            </li>
            <li className="flex border-y py-2">
              <span className="font-bold w-24">Age:</span>
              <span className="text-gray-700">18</span>
            </li>
            <li className="flex border-y py-2">
              <span className="font-bold w-24">NIC:</span>
              <span className="text-gray-700">485684455</span>
            </li>
            <li className="flex border-y py-2">
              <span className="font-bold w-24">Phone:</span>
              <span className="text-gray-700">+94 77 666 8888</span>
            </li>
          </ul>
          <div className="mt-12  flex justify-center">
            <button className="flex items-center bg-red-600 hover:bg-red-700 text-gray-100  rounded text-[12px]  transition duration-100 w-[130px] h-7 justify-center">
              <span>Delete Profile</span>
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center bg-white absolute bottom-0 left-0 w-full">
        <p className="text-black">Copyright© All rights Reserved.</p>
      </div>
    </div>
  );
};

export default UserProfile;
