import React, { useEffect, useState } from "react";
import bgImg from "../../assets/bg-Img.png";
import SideBar from "../../components/SideBar";
import logo from "../../assets/Logo.png";
import DropDownBar from "../../components/DropDownNavBar";
import { Link, useNavigate } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { motion } from "framer-motion";
import { set } from "mongoose";
import { Icon } from "@iconify/react/dist/iconify.js";

const DietPlan = () => {
  const [mobileView] = useState(window.innerWidth < 768);
  const [popUp, setPopUp] = useState(false);
  const [popUpData, setPopUpData] = useState({});
  const [foods, setFoods] = useState([]);
  const [imageLoading, setImageLoading] = useState(true);
  const navigate = useNavigate();

  const fetchFoods = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/food/getFoods"
      );
      setFoods(response.data.data.foodItems);
    } catch (error) {
      console.error("Error fetching foods:", error);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("adminLogin") === null) {
      navigate("/admin-login");
    }

    const fetchFoods = async () => {
      Aos.init({ duration: 2000, selector: ".food-card" });
      try {
        const response = await axios.get(
          "http://localhost:3000/api/food/getFoods"
        );
        setFoods(response.data.data.foodItems);
      } catch (error) {
        console.error("Error fetching foods:", error);
      }
    };

    fetchFoods();

    setTimeout(() => {
      setImageLoading(false);
    }, 4000);
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/food/deleteFood/${id}`);
      setFoods((prevFoods) => prevFoods.filter((food) => food._id !== id));
    } catch (error) {
      console.error("Error deleting food:", error);
    }
  };

  const handleSearch = async (name) => {
    try {
      if (name === "") return fetchFoods();
      const response = await axios.get(
        `http://localhost:3000/api/food/searchByName/${name}`
      );
      setFoods(response.data.data.food);
    } catch (error) {
      console.error("Error searching for food:", error);
    }
  };

  const handleUpdate = async (id) => {
    navigate(`/update-food/${id}`);
  };

  return (
    <div
      className="flex flex-row items-start min-h-screen bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {mobileView ? <DropDownBar /> : <SideBar />}
      <div className="p-7 flex flex-col flex-1 justify-between">
        <div>
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-black mb-2 lg:text-5xl">
              Diet Plan
            </h1>
            <img src={logo} alt="" className="h-8 w-auto" />
          </div>
          <p className="text-blue-800">
            Manage workout categories to help users find the workouts they`re
            looking for
          </p>
          <h2 className="text-black text-lg font-bold mt-3 mb-2">
            Select diet plan
          </h2>
          <div className="flex flex-row">
            <div className="flex w-fit bg-blue-100 rounded-xl h-fit">
              <input
                type="text"
                name="searchFood"
                id="searchFood"
                placeholder="Search Food Items"
                onChange={(e) => handleSearch(e.target.value)}
                className="mt-2 rounded-lg text-black bg-blue-100 outline-none pl-2 pb-2 flex-1 "
              />
              <button className="bg-blue-0 rounded-lg hover:scale-105 transition hover:bg-lightBlue-300">
                <span
                  className="icon-[material-symbols--search]"
                  style={{ width: "30px", height: "20px" }}
                />
              </button>
            </div>
            <Link to="/add-food">
              <button className="bg-slate-50 rounded-xl pl-2 pr-2 p-2 border ml-2 text-black font-semibold hover:bg-blue-950 hover:text-slate-50 transition ">
                <span className="icon-[ci--add-plus] font-extrabold mr-1" />
                {mobileView ? "" : "Add Foods"}
              </button>
            </Link>
            <Link to="/view-all-users">
              <button className="bg-slate-50 rounded-xl m-auto p-2 border-2 border-solid ml-2 text-black font-semibold hover:bg-green-700 hover:text-slate-50  transition ">
                <span className="icon-[mdi--food] mr-2" /> Assign Diet Plans
              </button>
            </Link>
          </div>
        </div>

        <div className="flex flex-wrap mt-8 w-full">
          {foods.map((food, id) => (
            <motion.div
              key={id}
              className=""
              initial={{ opacity: 0, scale: 0.8 }} // Initial scale value, adjust as needed
              animate={{ opacity: 1, scale: 1 }} // Final scale value, adjust as needed
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{
                duration: 0.5,
                delay: id * 0.1,
              }}
            >
              <div
                key={food._id}
                className={`food-card flex flex-col p-4 m-2 bg-white rounded-lg shadow-md h-auto w-32 lg:w-[200px] hover:scale-75 transition ${
                  food.deleted ? "fade-out" : ""
                }`}
                data-aos="zoom-in"
              >
                <img
                  src={food.imageData}
                  alt="product"
                  className="w-28 h-28 object-cover mx-auto rounded-xl hover:scale-95 transition"
                  onClick={() => {
                    setPopUp(true);
                    setPopUpData(food);
                  }}
                />
                <p className="text-black text-sm font-bold">{food.name}</p>
                <span className="text-black text-xs">
                  {food.calories} calories, {food.protein}g protein,{" "}
                  {food.carbs}g carbs, {food.fat}g fat
                </span>
                <button
                  className="p-1 border-2 bg-[#F2420D] text-white rounded-xl mx-0 flex  hover:scale-110 transform duration-200"
                  onClick={() => handleDelete(food._id)}
                >
                  <p className="">
                    <span
                      className="icon-[material-symbols--delete-sharp] align-middle my-auto"
                      style={{ width: "32px" }}
                    />{" "}
                    Delete
                  </p>
                </button>
                <button
                  className="p-1 border-2 bg-slate-400 text-white rounded-xl w-full flex hover:scale-110 transform duration-200"
                  onClick={() => handleUpdate(food._id)}
                >
                  <span
                    className="icon-[basil--edit-outline] align-middle"
                    style={{ width: "32px" }}
                  />{" "}
                  Update
                </button>
              </div>
            </motion.div>
          ))}
          {popUp && (
            <div className="fixed top-0 left-0 z-50 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center">
              <div className="bg-white w-96 rounded-2xl h-fit border-3 border-black shadow-lg">
                <div className="flex justify-between items-center px-5 py-3 border-b border-gray-300">
                  <p className="text-lg font-bold">{popUpData.name}</p>
                  <button onClick={() => setPopUp(false)}>
                    <Icon icon="pajamas:close-xs" className="text-gray-500" />
                  </button>
                </div>
                <div className="">
                  <img
                    src={popUpData.imageData}
                    alt="product"
                    className="w-64 h-64 mx-auto mt-5 rounded-xl"
                  />
                  <div className="text-center p-5 ">
                    <div className="text-black text-sm font-semibold flex justify-evenly">
                      <div className="flex justify-start flex-col ">
                        <div className="p-2  ">
                          <p>{popUpData.calories} calories</p>
                        </div>
                        <div className="p-2  ">
                          <p>{popUpData.protein}g protein</p>{" "}
                        </div>
                      </div>
                      <div className="flex justify-start flex-col">
                        <div className="p-2  ">
                          <p>{popUpData.carbs}g carbs</p>
                        </div>
                        <div className="p-2  ">
                          <p>{popUpData.fat}g fat</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DietPlan;
