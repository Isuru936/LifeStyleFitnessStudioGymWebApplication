import React, { useEffect, useState } from "react";
import bgImg from "../../assets/bg-Img.png";
import proImage from "../../assets/proImage.png";
import SideBar from "../../components/SideBar";
import logo from "../../assets/Logo.png";
import DropDownBar from "../../components/DropDownNavBar";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const DietPlan = () => {
  const [mobileView] = useState(window.innerWidth < 768);
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    Aos.init({ duration: 2000, selector: ".food-card" });
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/food"); // Change the endpoint accordingly
      if (!response.ok) {
        throw new Error("Failed to fetch food data");
      }
      const jsonData = await response.json();
      setFoods(jsonData.foods);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/api/food/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete food");
      }
      fetchData(); // Refetch data after deletion
    } catch (error) {
      console.error("Error deleting food:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

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
            <Link to="/assign-diet-plan">
              <button className="bg-slate-50 rounded-xl m-auto p-2 border-2 border-solid ml-2 text-black font-semibold hover:bg-green-700 hover:text-slate-50  transition ">
                <span className="icon-[mdi--food] mr-2" />
                Assign Diet Plans
              </button>
            </Link>
          </div>
        </div>

        <div className="flex flex-wrap mt-8 w-full">
          {foods.map((food, index) => (
            <div
              key={index}
              className="food-card p-4 m-2 bg-white rounded-lg shadow-md h-auto w-32 lg:w-[200px] hover:scale-75 transition"
              data-aos="zoom-in"
            >
              <img
                src={proImage}
                alt="product"
                className="w-28 h-28 object-cover mx-auto rounded-xl hover:scale-75 transition"
              />
              <p className="text-black text-sm font-bold">{food.foodname}</p>
              <span className="text-black text-xs">
                {`${food.calories} calories, ${food.proteins}g protein, ${food.carbs}g carbs, ${food.fats}g fat`}
              </span>
              <div className="flex flex-col">
                <button
                  className="p-1 border-2 bg-[#F2420D] text-white rounded-xl  hover:scale-110 transform duration-200"
                  onClick={() => handleDelete(food._id)}
                >
                  <span
                    className="icon-[material-symbols--delete-sharp] align-middle"
                    style={{ width: "32px" }}
                  />
                  Delete
                </button>
                <button className="p-1 border-2 bg-slate-400 text-white rounded-xl  hover:scale-110 transform duration-200">
                  <span
                    className="icon-[basil--edit-outline] align-middle"
                    style={{ width: "32px" }}
                  />
                  Update
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DietPlan;
