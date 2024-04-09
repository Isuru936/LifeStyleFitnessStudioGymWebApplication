import React, { useState } from "react";
import axios from "axios";
import DropDownNavBar from "../../components/DropDownNavBar";
import profImg from "../../assets/profImg.png";
import SideBar from "../../components/SideBar";
import bgImg from "../../assets/bgImg.png";
import logo from "../../assets/Logo.png";
import { Link, useNavigate } from "react-router-dom";

function AddUsers() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    fullName: "Isuru Gayantha Bandara",
    age: 0,
    gender: "male",
    height: 0,
    weight: 0,
    dietPlan: null,
    workoutPlan: null,
    profileImage: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUserData({ ...userData, [id]: value });
    console.log(userData);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setUserData({
          ...userData,
          profileImage: reader.result,
        });
        console.log("imageData", userData.profileImage);
      };
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/users/",
        userData
      );
      console.log(userData);
      console.log(response.data);
      alert("User added successfully");
      navigate("/user-pool");

      // Redirect or show success message
    } catch (error) {
      console.error("Error adding user:", error);
      // Handle error, show error message, etc.
    }
  };

  return (
    <>
      <div
        className="inline-flex flex-col items-start min-h-screen w-screen bg-cover bg-center bg-no-repeat bg-fixed "
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "auto",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left",
        }}
      >
        <div className="flex flex-col w-full">
          <div className="flex flex-row m-2">
            <div className="flex-col">
              <SideBar />
            </div>
            <div className="p-4 mt-3  w-full ">
              <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold ">User Details</h1>
                <img src={logo} className="w-24 h-12 mr-5" alt="" />
              </div>
              <hr />
              <div className="flex flex-col  justify-center w-full">
                <div className="mx-auto mt-5">
                  <img
                    src={
                      userData.profileImage ? userData.profileImage : profImg
                    }
                    alt="profile"
                    className="w-32 h-32 bg-slate-800 rounded-full hover:scale-105 duration-500 ease-in-out transform mb-2"
                  />

                  {console.log(userData.profileImage)}
                </div>
                <form className="mx-auto" onSubmit={handleSubmit}>
                  <h1 className="font-bold text-2xl mb-2">
                    Account Information
                  </h1>
                  <div className="mr-5 ">
                    <p className="font-semibold">Choose Image</p>
                    <input
                      type="file"
                      id="profileImage"
                      className="bg-white  p-2 rounded-xl w-full border" // Adjusted width
                      onChange={handleImageChange}
                    />
                  </div>
                  <div className="flex flex-row mb-5">
                    <div className="mr-5 ">
                      <p className="font-semibold">Email</p>
                      <input
                        type="text"
                        className="bg-white  p-2 rounded-xl w-96 border" // Adjusted width
                        onChange={handleChange}
                        id="email"
                      />
                    </div>
                    <div className="mr-5 w-full">
                      <p className="font-semibold">Password</p>
                      <input
                        type="password"
                        className="bg-white  p-2 rounded-xl w-96 border" // Adjusted width
                        onChange={handleChange}
                        id="password"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row mb-5">
                    <div className="mr-5 ">
                      <p className="font-semibold">Username</p>
                      <input
                        type="text"
                        className="bg-white  p-2 rounded-xl w-96 border" // Adjusted width
                        onChange={handleChange}
                        id="username"
                      />
                    </div>
                    <div className="mr-5 w-full">
                      <p className="font-semibold">Age</p>
                      <input
                        type="number"
                        className="bg-white  p-2 rounded-xl w-96 border" // Adjusted width
                        onChange={handleChange}
                        id="age"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row mb-5">
                    <div className="mr-5 ">
                      <p className="font-semibold">Telephone</p>
                      <input
                        type="tel"
                        className="bg-white  p-2 rounded-xl w-96 border" // Adjusted width
                        onChange={handleChange}
                        id="telephone"
                      />
                    </div>
                    <div className="mr-5 w-full">
                      <p className="font-semibold">NIC</p>
                      <input
                        type="text"
                        id="nic"
                        className="bg-white  p-2 rounded-xl w-96 border" // Adjusted width
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="flex mb-5">
                    <div className="mr-10 ml-10">
                      <p className="font-semibold">Height</p>
                      <input
                        type="tel"
                        className="bg-white  p-2 rounded-xl w-62 border" // Adjusted width
                        onChange={handleChange}
                        id="height"
                      />
                    </div>
                    <div className="mr-10 ml-10">
                      <p className="font-semibold">Weight</p>
                      <input
                        type="text"
                        className="bg-white  p-2 rounded-xl w-62 border" // Adjusted width
                        onChange={handleChange}
                        id="weight"
                      />
                    </div>
                    {/* <div className="mr-10 w-full">
                      <p className="font-semibold">BMI</p>
                      <input
                        type="text"
                        disabled
                        className="bg-white  p-2 rounded-xl w-62 border " // Adjusted width
                      />
                    </div> */}
                  </div>
                  <div>
                    <div className="text-xl font-bold">
                      Health Issues
                      <input type="text" className="w-full p-3 rounded-xl" />
                    </div>
                  </div>
                  <div className="flex flex-row justify-end w-auto mr-96">
                    <button className="p-3 bg-green-800 rounded-xl text-white font-bold mr-5 mt-5 mb-10 hover:bg-green-700">
                      <span
                        className="icon-[ic--twotone-system-security-update-good] mr-2"
                        style={{ width: "20px", height: "20px" }}
                      />
                      Add User
                    </button>
                    <Link to="/user-pool">
                      <button className="p-3 bg-white rounded-xl text-black border font-bold mr-5 mt-5 mb-10 hover:bg-slate-100">
                        <span
                          className="icon-[ic--twotone-system-security-update-good] mr-2"
                          style={{ width: "20px", height: "20px" }}
                        />
                        Back
                      </button>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddUsers;
