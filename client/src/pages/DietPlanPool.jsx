// eslint-disable-next-line no-unused-vars
import React from "react";
import bgImg from "../assets/bg-Img.png";
import proImage from "../assets/proImage.png";
import SideBar from "../components/SideBar";

const DietPlan = () => {
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
      <div className="flex flex-row">
        <SideBar />
        <div className="fixed bottom-0 left-0 p-5">
          <button className="bg-lightBlue-300 font-bold text-white p-3 rounded-2xl w-full hover:bg-blue-900">
            <p className="">
              <span
                className="icon-[mingcute--add-fill] mx-1"
                style={{ height: "20px", width: "20px" }}
              />
              Add Food Item
            </p>
          </button>
        </div>
        <div className="text-white">
          <div className="p-7 lg:ml-52">
            <div className=" ">
              <h1 className="text-5xl font-bold text-black-500 mb-2">
                Diet Plan
              </h1>
              <p className="text-blue-500">
                Manage workout categories to help users find the workouts
                they`re looking for
              </p>
              <h2 className="text-black-500 text-lg font-bold mt-3">
                Select diet plan
              </h2>
              <div className="">
                <div className="bg-blue-100 flex-row rounded-xl w-fit pr-4 lg:w-fit lg:pb-2 pl-1">
                  <input
                    type="text"
                    name="searchFood"
                    id="searchFood"
                    placeholder="Search Food Items"
                    className="mt-2 rounded-lg text-black-500 w-52 bg-blue-100 outline-none lg:w-96 p-2"
                  />
                  <button className="bg-blue-300 rounded-xl hover:scale-105 transition hover:bg-lightBlue-300 pb-1 pt-2 pl-2 pr-2 lg:pb-2 lg:pt-2 lg:pl-3 lg:pr-3">
                    <span
                      className="icon-[material-symbols--search]"
                      style={{ width: "20px", height: "20px" }}
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Porducts */}
            <div className="flex flex-wrap">
              <div className="food-card p-4 m-2 bg-white rounded-lg shadow-md h-auto w-[150px] lg:w-[170px] hover:scale-105 transition">
                <img
                  src={proImage}
                  alt="product"
                  className="w-36 object-cover mx-auto rounded-xl h-36 lg:w-32 lg:h-32  "
                />
                <p className="text-black-500 text-sm font-bold">
                  Egg whole, Cooked, fried
                </p>
                <span
                  className="text-black-500 text-xs"
                  style={{ lineHeight: "0.1" }}
                >
                  205 calories, 13.5g protein, 1.4g carbs, 15.7g fat
                </span>
              </div>
              <div className="food-card p-4 m-2 bg-white rounded-lg shadow-md h-auto w-[150px] lg:w-[170px] hover:scale-105 transition">
                <img
                  src={proImage}
                  alt="product"
                  className="w-36 object-cover mx-auto rounded-xl h-36 lg:w-32 lg:h-32  "
                />
                <p className="text-black-500 text-sm font-bold">
                  Egg whole, Cooked, fried
                </p>
                <span
                  className="text-black-500 text-xs"
                  style={{ lineHeight: "0.1" }}
                >
                  205 calories, 13.5g protein, 1.4g carbs, 15.7g fat
                </span>
              </div>
              <div className="food-card p-4 m-2 bg-white rounded-lg shadow-md h-auto w-[150px] lg:w-[170px] hover:scale-105 transition">
                <img
                  src={proImage}
                  alt="product"
                  className="w-36 object-cover mx-auto rounded-xl h-36 lg:w-32 lg:h-32  "
                />
                <p className="text-black-500 text-sm font-bold">
                  Egg whole, Cooked, fried
                </p>
                <span
                  className="text-black-500 text-xs"
                  style={{ lineHeight: "0.1" }}
                >
                  205 calories, 13.5g protein, 1.4g carbs, 15.7g fat
                </span>
              </div>
              <div className="food-card p-4 m-2 bg-white rounded-lg shadow-md h-auto w-[150px] lg:w-[170px] hover:scale-105 transition">
                <img
                  src={proImage}
                  alt="product"
                  className="w-36 h-36 object-cover mx-auto"
                />
                <p className="text-black-500 text-sm font-bold">
                  Egg whole, Cooked, fried
                </p>
                <span
                  className="text-black-500 text-xs"
                  style={{ lineHeight: "0.1" }}
                >
                  205 calories, 13.5g protein, 1.4g carbs, 15.7g fat
                </span>
              </div>
              <div className="food-card p-4 m-2 bg-white rounded-lg shadow-md h-auto w-[150px] lg:w-[170px] hover:scale-105 transition">
                <img
                  src={proImage}
                  alt="product"
                  className="w-36 object-cover mx-auto rounded-xl h-36 lg:w-32 lg:h-32  "
                />
                <p className="text-black-500 text-sm font-bold">
                  Egg whole, Cooked, fried
                </p>
                <span
                  className="text-black-500 text-xs"
                  style={{ lineHeight: "0.1" }}
                >
                  205 calories, 13.5g protein, 1.4g carbs, 15.7g fat
                </span>
              </div>
              <div className="food-card p-4 m-2 bg-white rounded-lg shadow-md h-auto w-[150px] lg:w-[170px] hover:scale-105 transition">
                <img
                  src={proImage}
                  alt="product"
                  className="w-36 object-cover mx-auto rounded-xl h-36 lg:w-32 lg:h-32  "
                />
                <p className="text-black-500 text-sm font-bold">
                  Egg whole, Cooked, fried
                </p>
                <span
                  className="text-black-500 text-xs"
                  style={{ lineHeight: "0.1" }}
                >
                  205 calories, 13.5g protein, 1.4g carbs, 15.7g fat
                </span>
              </div>
              <div className="food-card p-4 m-2 bg-white rounded-lg shadow-md h-auto w-[150px] lg:w-[170px] hover:scale-105 transition">
                <img
                  src={proImage}
                  alt="product"
                  className="w-36 object-cover mx-auto rounded-xl h-36 lg:w-32 lg:h-32  "
                />
                <p className="text-black-500 text-sm font-bold">
                  Egg whole, Cooked, fried
                </p>
                <span
                  className="text-black-500 text-xs"
                  style={{ lineHeight: "0.1" }}
                >
                  205 calories, 13.5g protein, 1.4g carbs, 15.7g fat
                </span>
              </div>
              <div className="food-card p-4 m-2 bg-white rounded-lg shadow-md h-auto w-[150px] lg:w-[170px] hover:scale-105 transition">
                <img
                  src={proImage}
                  alt="product"
                  className="w-object-cover  mx-aut rounded-xl 36 h- lg:w-32 lg:h-32 o"
                />
                <p className="text-black-500 text-sm font-bold">
                  Egg whole, Cooked, fried
                </p>
                <span
                  className="text-black-500 text-xs"
                  style={{ lineHeight: "0.1" }}
                >
                  205 calories, 13.5g protein, 1.4g carbs, 15.7g fat
                </span>
              </div>
              <div className="food-card p-4 m-2 bg-white rounded-lg shadow-md h-auto w-[150px] lg:w-[170px] hover:scale-105 transition">
                <img
                  src={proImage}
                  alt="product"
                  className="w-36 object-cover mx-auto rounded-xl h-36 lg:w-32 lg:h-32  "
                />
                <p className="text-black-500 text-sm font-bold">
                  Egg whole, Cooked, fried
                </p>
                <span
                  className="text-black-500 text-xs"
                  style={{ lineHeight: "0.1" }}
                >
                  205 calories, 13.5g protein, 1.4g carbs, 15.7g fat
                </span>
              </div>
              <div className="food-card p-4 m-2 bg-white rounded-lg shadow-md h-auto w-[150px] lg:w-[170px] hover:scale-105 transition">
                <img
                  src={proImage}
                  alt="product"
                  className="w-36 object-cover mx-auto rounded-xl h-36 lg:w-32 lg:h-32  "
                />
                <p className="text-black-500 text-sm font-bold">
                  Egg whole, Cooked, fried
                </p>
                <span
                  className="text-black-500 text-xs"
                  style={{ lineHeight: "0.1" }}
                >
                  205 calories, 13.5g protein, 1.4g carbs, 15.7g fat
                </span>
              </div>
              <div className="food-card p-4 m-2 bg-white rounded-lg shadow-md h-auto w-[150px] lg:w-[170px] hover:scale-105 transition">
                <img
                  src={proImage}
                  alt="product"
                  className="w-36 object-cover mx-auto rounded-xl h-36 lg:w-32 lg:h-32  "
                />
                <p className="text-black-500 text-sm font-bold">
                  Egg whole, Cooked, fried
                </p>
                <span
                  className="text-black-500 text-xs"
                  style={{ lineHeight: "0.1" }}
                >
                  205 calories, 13.5g protein, 1.4g carbs, 15.7g fat
                </span>
              </div>
              <div className="food-card p-4 m-2 bg-white rounded-lg shadow-md h-auto w-[150px] lg:w-[170px] hover:scale-105 transition">
                <img
                  src={proImage}
                  alt="product"
                  className="w-36 object-cover mx-auto rounded-xl h-36 lg:w-32 lg:h-32  "
                />
                <p className="text-black-500 text-sm font-bold">
                  Egg whole, Cooked, fried
                </p>
                <span
                  className="text-black-500 text-xs"
                  style={{ lineHeight: "0.1" }}
                >
                  205 calories, 13.5g protein, 1.4g carbs, 15.7g fat
                </span>
              </div>
              <div className="food-card p-4 m-2 bg-white rounded-lg shadow-md h-auto w-[150px] lg:w-[170px] hover:scale-105 transition">
                <img
                  src={proImage}
                  alt="product"
                  className="w-36 object-cover mx-auto rounded-xl h-36 lg:w-32 lg:h-32  "
                />
                <p className="text-black-500 text-sm font-bold">
                  Egg whole, Cooked, fried
                </p>
                <span
                  className="text-black-500 text-xs"
                  style={{ lineHeight: "0.1" }}
                >
                  205 calories, 13.5g protein, 1.4g carbs, 15.7g fat
                </span>
              </div>
              <div className="food-card p-4 m-2 bg-white rounded-lg shadow-md h-auto w-[150px] lg:w-[170px] hover:scale-105 transition">
                <img
                  src={proImage}
                  alt="product"
                  className="w-36 object-cover mx-auto rounded-xl h-36 lg:w-32 lg:h-32  "
                />
                <p className="text-black-500 text-sm font-bold">
                  Egg whole, Cooked, fried
                </p>
                <span
                  className="text-black-500 text-xs"
                  style={{ lineHeight: "0.1" }}
                >
                  205 calories, 13.5g protein, 1.4g carbs, 15.7g fat
                </span>
              </div>
              <div className="food-card p-4 m-2 bg-white rounded-lg shadow-md h-auto w-[150px] lg:w-[170px] hover:scale-105 transition">
                <img
                  src={proImage}
                  alt="product"
                  className="w-36 object-cover mx-auto rounded-xl h-36 lg:w-32 lg:h-32  "
                />
                <p className="text-black-500 text-sm font-bold">
                  Egg whole, Cooked, fried
                </p>
                <span
                  className="text-black-500 text-xs"
                  style={{ lineHeight: "0.1" }}
                >
                  205 calories, 13.5g protein, 1.4g carbs, 15.7g fat
                </span>
              </div>
              <div className="food-card p-4 m-2 bg-white rounded-lg shadow-md h-auto w-[150px] lg:w-[170px] hover:scale-105 transition">
                <img
                  src={proImage}
                  alt="product"
                  className="w-36 object-cover mx-auto rounded-xl h-36 lg:w-32 lg:h-32  "
                />
                <p className="text-black-500 text-sm font-bold">
                  Egg whole, Cooked, fried
                </p>
                <span
                  className="text-black-500 text-xs"
                  style={{ lineHeight: "0.1" }}
                >
                  205 calories, 13.5g protein, 1.4g carbs, 15.7g fat
                </span>
              </div>
              <div className="food-card p-4 m-2 bg-white rounded-lg shadow-md h-auto w-[150px] lg:w-[170px] hover:scale-105 transition">
                <img
                  src={proImage}
                  alt="product"
                  className="w-36 object-cover mx-auto rounded-xl h-36 lg:w-32 lg:h-32  "
                />
                <p className="text-black-500 text-sm font-bold">
                  Egg whole, Cooked, fried
                </p>
                <span
                  className="text-black-500 text-xs"
                  style={{ lineHeight: "0.1" }}
                >
                  205 calories, 13.5g protein, 1.4g carbs, 15.7g fat
                </span>
              </div>
              <div className="food-card p-4 m-2 bg-white rounded-lg shadow-md h-auto w-[150px] lg:w-[170px] hover:scale-105 transition">
                <img
                  src={proImage}
                  alt="product"
                  className="w-36 object-cover mx-auto rounded-xl h-36 lg:w-32 lg:h-32  "
                />
                <p className="text-black-500 text-sm font-bold">
                  Egg whole, Cooked, fried
                </p>
                <span
                  className="text-black-500 text-xs"
                  style={{ lineHeight: "0.1" }}
                >
                  205 calories, 13.5g protein, 1.4g carbs, 15.7g fat
                </span>
              </div>
              <div className="food-card p-4 m-2 bg-white rounded-lg shadow-md h-auto w-[150px] lg:w-[170px] hover:scale-105 transition">
                <img
                  src={proImage}
                  alt="product"
                  className="w-36 object-cover mx-auto rounded-xl h-36 lg:w-32 lg:h-32  "
                />
                <p className="text-black-500 text-sm font-bold">
                  Egg whole, Cooked, fried
                </p>
                <span
                  className="text-black-500 text-xs"
                  style={{ lineHeight: "0.1" }}
                >
                  205 calories, 13.5g protein, 1.4g carbs, 15.7g fat
                </span>
              </div>
              <div className="food-card p-4 m-2 bg-white rounded-lg shadow-md h-auto w-[150px] lg:w-[170px] hover:scale-105 transition">
                <img
                  src={proImage}
                  alt="product"
                  className="w-36 object-cover mx-auto rounded-xl h-36 lg:w-32 lg:h-32  "
                />
                <p className="text-black-500 text-sm font-bold">
                  Egg whole, Cooked, fried
                </p>
                <span
                  className="text-black-500 text-xs"
                  style={{ lineHeight: "0.1" }}
                >
                  205 calories, 13.5g protein, 1.4g carbs, 15.7g fat
                </span>
              </div>
              <div className="food-card p-4 m-2 bg-white rounded-lg shadow-md h-auto w-[150px] lg:w-[170px] hover:scale-105 transition">
                <img
                  src={proImage}
                  alt="product"
                  className="w-object-cover  mx-aut rounded-xl 36 h- lg:w-32 lg:h-32 o"
                />
                <p className="text-black-500 text-sm font-bold">
                  Egg whole, Cooked, fried
                </p>
                <span
                  className="text-black-500 text-xs"
                  style={{ lineHeight: "0.1" }}
                >
                  205 calories, 13.5g protein, 1.4g carbs, 15.7g fat
                </span>
              </div>
              <div className="food-card p-4 m-2 bg-white rounded-lg shadow-md h-auto w-[150px] lg:w-[170px] hover:scale-105 transition">
                <img
                  src={proImage}
                  alt="product"
                  className="w-36 object-cover mx-auto rounded-xl h-36 lg:w-32 lg:h-32  "
                />
                <p className="text-black-500 text-sm font-bold">
                  Egg whole, Cooked, fried
                </p>
                <span
                  className="text-black-500 text-xs"
                  style={{ lineHeight: "0.1" }}
                >
                  205 calories, 13.5g protein, 1.4g carbs, 15.7g fat
                </span>
              </div>
              <div className="food-card p-4 m-2 bg-white rounded-lg shadow-md h-auto w-[150px] lg:w-[170px] hover:scale-105 transition">
                <img
                  src={proImage}
                  alt="product"
                  className="w-36 object-cover mx-auto rounded-xl h-36 lg:w-32 lg:h-32  "
                />
                <p className="text-black-500 text-sm font-bold">
                  Egg whole, Cooked, fried
                </p>
                <span
                  className="text-black-500 text-xs"
                  style={{ lineHeight: "0.1" }}
                >
                  205 calories, 13.5g protein, 1.4g carbs, 15.7g fat
                </span>
              </div>
              <div className="food-card p-4 m-2 bg-white rounded-lg shadow-md h-auto w-[150px] lg:w-[170px] hover:scale-105 transition">
                <img
                  src={proImage}
                  alt="product"
                  className="w-36 object-cover mx-auto rounded-xl h-36 lg:w-32 lg:h-32  "
                />
                <p className="text-black-500 text-sm font-bold">
                  Egg whole, Cooked, fried
                </p>
                <span
                  className="text-black-500 text-xs"
                  style={{ lineHeight: "0.1" }}
                >
                  205 calories, 13.5g protein, 1.4g carbs, 15.7g fat
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DietPlan;
