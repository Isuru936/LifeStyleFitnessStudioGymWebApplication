import SideBar from "../../components/SideBar";
import bgImg from "../../assets/bg-Img.png";
import DietPlanUserView from "../../components/DietPlanUserView";
import DropDownBar from "../../components/DropDownNavBar";
import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

export default function AssignDietPlan() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [foods, setFoods] = useState([]);
  const [assignedFoods, setAssignedFoods] = useState([]);
  const [recNutrients, setRecNutrients] = useState("");
  const [userId, setUserId] = useState("");

  const getRecommendedNutrient = () => {
    const storedNutrientLevels = JSON.parse(
      localStorage.getItem("nutrientsRecommend")
    );
    setRecNutrients(storedNutrientLevels);
    setUserId(storedNutrientLevels.userId);
    console.log("from me", storedNutrientLevels);
  };

  const fetchFoods = async () => {
    Aos.init({ duration: 2000, selector: ".food-card" });
    try {
      const response = await axios.get(
        "http://localhost:3000/api/food/getFoods"
      );
      setFoods(response.data.data.foodItems);
      console.log(response.data.data.foodItems);
    } catch (error) {
      console.error("Error fetching foods:", error);
    }
  };
  useEffect(() => {
    fetchFoods();
    console.log(id);
    // getRecommendedNutrient();
  }, []);

  const addToSelectedFoods = (food) => {
    const exists = assignedFoods.some(
      (selectedFood) => selectedFood._id === food._id
    );

    if (!exists) {
      setAssignedFoods((prevSelectedFoods) => [...prevSelectedFoods, food]);
    } else {
      toast.warning("Food already selected");
    }
  };

  const removeFromSelectedFoods = (index) => {
    setAssignedFoods((prevSelectedFoods) =>
      prevSelectedFoods.filter((_, i) => i !== index)
    );
    console.log("removed", index);
  };

  const handleClearAssignedFoods = () => {
    setAssignedFoods([]);
  };

  const totalNutrients = assignedFoods.reduce(
    (acc, food) => {
      acc.calories += food.calories;
      acc.protein += food.protein;
      acc.carbs += food.carbs;
      acc.fat += food.fat;
      return acc;
    },
    { calories: 0, protein: 0, carbs: 0, fat: 0 }
  );

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
  const handleSubmit = async (e) => {
    console.log(userId);
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:3000/api/users/bioDataUpdate/${userId}`,
        { dietplan: assignedFoods }
      );
      handleClearAssignedFoods();
      toast.success("Diet plan Assigned Successfully");
      navigate("/view-all-users");
      console.log(response.data);
    } catch (error) {
      console.error("Error:", error.response.data.message);
    }
  };

  const [mobileView] = useState(window.innerWidth < 768);
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div
      className="inline-flex flex-col items-start min-h-screen w-screen bg-cover bg-center bg-no-repeat bg-fixed"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col">
        <div className="flex flex-row " data-aos="fade-up">
          {/* side bar, select user */}
          <div className="flex-col">
            {mobileView ? <DropDownBar /> : <SideBar />}
            <DietPlanUserView userId={id} />
          </div>
          {/* Assign Diet Plan  */}
          <div className="p-4 mt-3 w-full lg:w-[800px] ">
            <h1 className="text-3xl font-bold">Assign Diet Plan</h1>
            <p className="text-indigo-800 mt-1">
              Select a user and assign a diet plan, You can also search and
              select from a list of foods with their nutritional information and
              photos.
            </p>
            <div>
              <h2 className="text-xl font-semibold mt-3">Create Diet Plan</h2>
              <div className="flex flex-row ">
                <div className="bg-slate-200 rounded-xl w-fit h-fit ml-1 mr-1 mt-2 pt-1 pb-1">
                  <input
                    type="text"
                    placeholder="Search by Food Name"
                    onChange={(e) => handleSearch(e.target.value)}
                    className="bg-slate-200 p-1 pl-2 rounded-xl  ml-1 outline-none"
                  />
                  <span
                    className="icon-[material-symbols--search] bg-slate-500 pl-4 pr-4"
                    style={{ width: "20px", height: "20px" }}
                  />
                </div>
                <Link to="/diet-plan">
                  <button className="bg-slate-50 rounded-xl m-auto p-2 border-2 border-solid ml-2 text-black font-semibold hover:bg-green-700 hover:text-slate-50  transition ">
                    <span className="icon-[emojione--pot-of-food] mr-2" /> View
                    Food Pool
                  </button>
                </Link>
              </div>
            </div>
            <div className="w-full lg:w-[800px] ">
              <h2 className="tex-l font-bold mt-3">Select Food</h2>
              {/* Food List */}
              <div className=" flex flex-wrap">
                {foods.map((food, number) => (
                  <div
                    key={number}
                    className={`w-fit h-fit bg-slate-50 rounded-lg p-3 m-0 flex flex-row hover:bg-green-500 transition duration-300 ease-in-out ml-3 mb-1 ${
                      assignedFoods.some(
                        (selectedFood) => selectedFood._id === food._id
                      )
                        ? "bg-[#26e326] border-2"
                        : "bg-white"
                    }`}
                    onClick={() => addToSelectedFoods(food)}
                  >
                    <div>
                      <img
                        src={food.imageData}
                        className="w-20 h-20 p-0 rounded-xl"
                        alt="Food "
                      />
                    </div>
                    <div className="flex flex-col ml-3">
                      <h5 className="font-bold">{food.name}</h5>
                      <p className="text-xs">
                        {food.calories}g calories, {food.protein}g protein,{" "}
                        {food.carbs}g carbs, {food.fat}g fat
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              {/* end food list */}
            </div>
          </div>
          {/* Selected Food and Nutrient Levels */}
          <div className="fixed top-0 left-[1050px] bottom-0 w-screen h-screen bg-slate-50">
            <div>
              <h1 className="mt-5 ml-2 text-lg font-semibold ">
                Selected Food
              </h1>
              {/* Selected Food */}
              <div className=" bg-slate-0 border h-96 flex flex-col p-3 relative overflow-y-auto">
                <div>
                  {assignedFoods.length > 0 ? (
                    assignedFoods.map((selectedFood, index) => (
                      <div
                        key={index}
                        className="w-[440px] h-fit bg-slate-50 rounded-lg p-3 flex flex-row transition duration-500 ease-in-out relative mb-1 hover:bg-slate-300"
                      >
                        <img
                          src={selectedFood.imageData}
                          className="w-10 h-10 p-0 rounded-xl "
                          alt="Food"
                        />
                        <div className="flex flex-col ml-3">
                          <h5 className="font-bold text-sm">
                            {selectedFood.name}
                          </h5>
                          <p className="text-xs">
                            {selectedFood.calories} calories,
                            {selectedFood.protein}g protein,{" "}
                            {selectedFood.carbs}g carbs, {selectedFood.fat}g fat
                          </p>
                        </div>
                        <button
                          className="bg-red-0 text-sm p-2 rounded-xl  absolute right-0"
                          onClick={() => removeFromSelectedFoods(index)}
                        >
                          <span
                            className="icon-[line-md--remove] hover:bg-red-500"
                            style={{
                              width: "24px",
                              height: "24px",
                              animation: "auto",
                            }}
                          />
                        </button>
                      </div>
                    ))
                  ) : (
                    <p className="border my-auto">No food selected</p>
                  )}
                </div>
              </div>
              {/* Nutrient Levels */}
              <div className="flex flex-row w-[462px] h-fit p-3">
                <div className="p-4 flex-1 bg-red-0 rounded-xl mr-5 ">
                  <h1 className="text-2xl font-bold pb-5 text-green-900">
                    Recommended Nutrient Levels
                  </h1>
                  <p className="font-semibold">
                    Calories:{" "}
                    <span className="text-blue-600">
                      {recNutrients.calories}
                    </span>
                  </p>
                  <p className="font-semibold">
                    Protein:{" "}
                    <span className="text-blue-600">
                      {" "}
                      {recNutrients.protein}g
                    </span>
                  </p>
                  <p className="font-semibold">
                    Carbs:{" "}
                    <span className="text-blue-600">{recNutrients.carbs}g</span>
                  </p>
                  <p className="font-semibold">
                    Fat:{" "}
                    <span className="text-blue-600"> {recNutrients.fats}g</span>
                  </p>
                </div>
                <div className="p-4 flex-1 bg-red-0 rounded-xl  ">
                  <h1 className="text-2xl font-bold pb- text-green-700 pb-5">
                    Assigned Nutrient Levels
                  </h1>
                  <p className="font-semibold">
                    Calories:{" "}
                    <span className="text-blue-600">
                      {totalNutrients.calories}
                    </span>
                  </p>
                  <p className="font-semibold">
                    Protein:{" "}
                    <span className="text-blue-600">
                      {" "}
                      {totalNutrients.protein}g
                    </span>
                  </p>
                  <p className="font-semibold">
                    Carbs:{" "}
                    <span className="text-blue-600">
                      {totalNutrients.carbs}g
                    </span>
                  </p>
                  <p className="font-semibold">
                    Fat:{" "}
                    <span className="text-blue-600">
                      {" "}
                      {totalNutrients.fat}g
                    </span>
                  </p>
                </div>
              </div>
              <button
                className="bg-slate-50 rounded-xl m-auto p-2 border-2 border-solid ml-2 text-black font-semibold hover:bg-green-700 hover:text-slate-50  transition "
                onClick={handleSubmit}
              >
                <span className="icon-[mdi--food] mr-2" /> Assign Diet Plans
              </button>
              <button
                className="bg-slate-50 rounded-xl m-auto p-2 border-2 border-solid ml-2 text-black font-semibold hover:bg-red-700 hover:text-slate-50  transition "
                onClick={handleClearAssignedFoods}
              >
                <span className="icon-[ic--twotone-clear] mr-2" /> Clear
                Selected Foods
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
