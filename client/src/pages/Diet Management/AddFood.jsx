import SideBar from "../../components/SideBar";
import bgImg from "../../assets/bg-Img.png";
import React, { useState } from "react";
import DropDownNavBar from "../../components/DropDownNavBar";
import { Link } from "react-router-dom";

function AddFood() {
  const [mobileView] = useState(window.innerWidth < 768);
  return (
    <div
      className="flex flex-row w-screen h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="flex flex-row m-0 w-full">
        <div>{mobileView ? <DropDownNavBar /> : <SideBar />}</div>
        <div className="mx-auto">
          <div className="flex flex-col ">
            <div className=" m-32 lg:m-5 w-fit border-2 pt-11 pb-11 pr-5 pl-5 bg-gray-50 h-full rounded-xl">
              <div className="text-black">
                <h1 className="font-bold  text-5xl">Add New Food</h1>
              </div>
              <hr className="mb-2 mt-2" />
              <div className=" flex flex-row justify-center">
                <div className=" flex flex-col">
                  <div className="text-black">
                    <p className="text-blue-900">
                      Enter the Food Details and the nutrient levels of them.
                    </p>
                  </div>
                  <form action="" className="mt-5 text-xl ">
                    <p className="font-semibold">Food Name</p>
                    <input
                      type="text"
                      placeholder="E.g. Chicken Breast"
                      className="outline-none border-2 border-gray-100 rounded-lg p-1 w-full mt-2"
                    />
                    <div className="flex flex-row">
                      <div className=" flex flex-col">
                        <p className="font-semibold">Calories</p>
                        <input
                          type="number"
                          placeholder="E.g. 100"
                          className="outline-none border-2 border-gray-100 rounded-lg p-1 w-fit mt-2"
                        />
                      </div>
                      <div className=" flex flex-col mr-3 ml-3">
                        <p className="font-semibold">Proteins (g)</p>
                        <input
                          type="number"
                          placeholder="E.g. 100"
                          className="outline-none border-2 border-gray-100 rounded-lg p-1 w-fit mt-2"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row">
                      <div className=" flex flex-col">
                        <p className="font-semibold">Carbs (g)</p>
                        <input
                          type="number"
                          placeholder="E.g. 100"
                          className="outline-none border-2 border-gray-100 rounded-lg p-1 w-fit mt-2"
                        />
                      </div>
                      <div className=" flex flex-col mr-3 ml-3">
                        <p className="font-semibold">Fats (g)</p>
                        <input
                          type="number"
                          placeholder="E.g. 100"
                          className="outline-none border-2 border-gray-100 rounded-lg p-1 w-fit mt-2"
                        />
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold">Upload Image</p>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={() => {
                          // Handle file selection here if needed
                        }}
                        className="outline-none border-2 border-gray-100 rounded-lg p-1 w-fit mt-2"
                      />
                    </div>
                    <button className="mt-5 bg-green-600 p-2 w-full rounded-xl hover:bg-green-500 transition">
                      Save
                    </button>
                    <Link to="/">
                      <button className="mt-5 bg-blue-600 p-2 w-full rounded-xl hover:bg-blue-500 transition">
                        Back
                      </button>
                    </Link>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddFood;
