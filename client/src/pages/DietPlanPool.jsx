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
        <div className="text-white">
          <div className="p-7 ">
            <div className=" lg:ml-52">
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
              <input
                type="text"
                name="searchFood"
                id="searchFood"
                placeholder="Search Food Items"
                className="p-3 mt-2 rounded-lg text-black-500 w-96 bg-blue-100 outline-none"
              />

              {/* Porducts */}
              <div className="flex flex-wrap">
                <div className="food-card p-4 m-2 bg-white rounded-lg shadow-md h-auto w-[170px] hover:scale-105 transition">
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
                <div className="food-card p-4 m-2 bg-white rounded-lg shadow-md h-auto w-[170px] hover:scale-105 transition">
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
                <div className="food-card p-4 m-2 bg-white rounded-lg shadow-md h-auto w-[170px] hover:scale-105 transition">
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
                <div className="food-card p-4 m-2 bg-white rounded-lg shadow-md h-auto w-[170px] hover:scale-105 transition">
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
                <div className="food-card p-4 m-2 bg-white rounded-lg shadow-md h-auto w-[170px] hover:scale-105 transition">
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
                <div className="food-card p-4 m-2 bg-white rounded-lg shadow-md h-auto w-[170px] hover:scale-105 transition">
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
                <div className="food-card p-4 m-2 bg-white rounded-lg shadow-md h-auto w-[170px] hover:scale-105 transition">
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
                <div className="food-card p-4 m-2 bg-white rounded-lg shadow-md h-auto w-[170px] hover:scale-105 transition">
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
                <div className="food-card p-4 m-2 bg-white rounded-lg shadow-md h-auto w-[170px] hover:scale-105 transition">
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
                <div className="food-card p-4 m-2 bg-white rounded-lg shadow-md h-auto w-[170px] hover:scale-105 transition">
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
                <div className="food-card p-4 m-2 bg-white rounded-lg shadow-md h-auto w-[170px] hover:scale-105 transition">
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
                <div className="food-card p-4 m-2 bg-white rounded-lg shadow-md h-auto w-[170px] hover:scale-105 transition">
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
                <div className="food-card p-4 m-2 bg-white rounded-lg shadow-md h-auto w-[170px] hover:scale-105 transition">
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
                <div className="food-card p-4 m-2 bg-white rounded-lg shadow-md h-auto w-[170px] hover:scale-105 transition">
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
                <div className="food-card p-4 m-2 bg-white rounded-lg shadow-md h-auto w-[170px] hover:scale-105 transition">
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
                <div className="food-card p-4 m-2 bg-white rounded-lg shadow-md h-auto w-[170px] hover:scale-105 transition">
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
                <div className="food-card p-4 m-2 bg-white rounded-lg shadow-md h-auto w-[170px] hover:scale-105 transition">
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
                <div className="food-card p-4 m-2 bg-white rounded-lg shadow-md h-auto w-[170px] hover:scale-105 transition">
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
                <div className="food-card p-4 m-2 bg-white rounded-lg shadow-md h-auto w-[170px] hover:scale-105 transition">
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
                <div className="food-card p-4 m-2 bg-white rounded-lg shadow-md h-auto w-[170px] hover:scale-105 transition">
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
                <div className="food-card p-4 m-2 bg-white rounded-lg shadow-md h-auto w-[170px] hover:scale-105 transition">
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
                <div className="food-card p-4 m-2 bg-white rounded-lg shadow-md h-auto w-[170px] hover:scale-105 transition">
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
                <div className="food-card p-4 m-2 bg-white rounded-lg shadow-md h-auto w-[170px] hover:scale-105 transition">
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
                <div className="food-card p-4 m-2 bg-white rounded-lg shadow-md h-auto w-[170px] hover:scale-105 transition">
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
                <div className="food-card p-4 m-2 bg-white rounded-lg shadow-md h-auto w-[170px] hover:scale-105 transition">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DietPlan;
