import React, { useState, useEffect } from "react";
import axios from "axios";
import bgImg from "../../assets/userPoolbgImg.png";
import DropDownNavBar from "../../components/DropDownNavBar";
import SideBar from "../../components/SideBar";
import logo from "../../assets/Logo.png";
import { useParams } from "react-router-dom";

function AddUpdateUserDetails() {
  const [user, setUser] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/users/${id}`
        );
        setUser(response.data);
        console.log(user);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    if (id) {
      fetchUserDetails();
    }
  }, [id]);

  const [mobileView] = useState(window.innerWidth < 768);

  if (!user) {
    return <div>Loading...</div>;
  }

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
        {console.log(user)}
        <div className="flex flex-col w-full">
          <div className="flex flex-row m-2">
            <div className="flex-col">
              {mobileView ? <DropDownNavBar /> : <SideBar />}
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
                    src={user.profileImage}
                    alt="profile"
                    className=" w-32  h-32 bg-slate-800 rounded-full hover:scale-105 duration-500 ease-in-out transform mb-2"
                  />
                  <p className="flex text-black flex-row justify-center font-semibold pb-5">
                    {user.fullName}
                  </p>
                </div>
                <form className="mx-auto  ">
                  <h1 className="font-bold text-xl mb-2">
                    Account Information
                  </h1>
                  <div className="flex flex-row mb-5">
                    <div className="mr-5 ">
                      <p className="font-semibold">Email</p>
                      <input
                        type="text"
                        value={user.email}
                        className="bg-white  p-2 rounded-xl w-96 border" // Adjusted width
                      />
                    </div>
                    <div className="mr-5 w-full">
                      <p className="font-semibold">Password</p>
                      <input
                        type="password"
                        className="bg-white  p-2 rounded-xl w-96 border" // Adjusted width
                      />
                    </div>
                  </div>
                  <div className="flex flex-row mb-5">
                    <div className="mr-5 ">
                      <p className="font-semibold">Username</p>
                      <input
                        type="text"
                        className="bg-white  p-2 rounded-xl w-96 border" // Adjusted width
                      />
                    </div>
                    <div className="mr-5 w-full">
                      <p className="font-semibold">Age</p>
                      <input
                        type="number"
                        className="bg-white  p-2 rounded-xl w-96 border" // Adjusted width
                      />
                    </div>
                  </div>
                  <div className="flex flex-row mb-5">
                    <div className="mr-5 ">
                      <p className="font-semibold">Telephone</p>
                      <input
                        type="tel"
                        className="bg-white  p-2 rounded-xl w-96 border" // Adjusted width
                      />
                    </div>
                    <div className="mr-5 w-full">
                      <p className="font-semibold">NIC</p>
                      <input
                        type="text"
                        className="bg-white  p-2 rounded-xl w-96 border" // Adjusted width
                      />
                    </div>
                  </div>
                  <div className="flex mb-5">
                    <div className="mr-10 ml-10">
                      <p className="font-semibold">Height</p>
                      <input
                        type="tel"
                        className="bg-white  p-2 rounded-xl w-62 border" // Adjusted width
                      />
                    </div>
                    <div className="mr-10 ml-10">
                      <p className="font-semibold">Weight</p>
                      <input
                        type="text"
                        className="bg-white  p-2 rounded-xl w-62 border" // Adjusted width
                      />
                    </div>
                    <div className="mr-10 w-full">
                      <p className="font-semibold">BMI</p>
                      <input
                        type="text"
                        disabled
                        className="bg-white  p-2 rounded-xl w-62 border " // Adjusted width
                      />
                    </div>
                  </div>
                  <div>
                    <div className="text-xl font-bold">
                      Health Issues
                      <input type="text" className="w-full p-3 rounded-xl" />
                    </div>
                  </div>
                  <h1 className="text-xl font-bold mt-2">Plans</h1>
                  <div className="flex flex-row mx-auto text-bold ">
                    <div className=" flex-1 w-10 p-5 m-1 mt-2 bg-green-50 rounded-xl  hover:bg-green-600 duration-300 ease-in-out transition">
                      <span
                        className="icon-[fluent--food-16-filled] ml-2"
                        style={{ width: "24px", height: "24px" }}
                      />
                      Diet Plan
                    </div>
                    <div className=" flex-1 w-10 p-5 m-1 mt-2 bg-orange-50 rounded-xl hover:bg-orange-600 duration-200 ease-in-out transition">
                      Work Out Plan
                      <span
                        className="icon-[arcticons--home-workouts] ml-2"
                        style={{ width: "24px", height: "24px" }}
                      />
                    </div>
                  </div>
                </form>
                <div className="flex flex-row justify-end w-auto mr-96">
                  {/* Action buttons */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddUpdateUserDetails;
