import SideBar from "../../components/SideBar";
import bgImg from "../../assets/bg-Img.png";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import exclamationCircleOutlined from "@iconify-icons/ant-design/exclamation-circle-outlined";

function AddWorkout() {
  const [mobileView] = useState(window.innerWidth < 768);
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-row m-2 w-full justify-center">
        <div className="flex-col">
          <SideBar />
        </div>
        <div className="mx-auto w-3/4 flex justify-center">
          {" "}
          {/* Center the form horizontally */}
          <div className="flex flex-col ">
            <div className="m-32 lg:m-5 w-fit border-2 pt-8 pb-8 pr-5 pl-5 bg-gray-50 h-full rounded-xl">
              <div className="text-black">
                <h1 className="font-bold text-4xl lg:text-5xl">
                  Add a new workout
                </h1>
              </div>
              <hr className="mb-2 mt-2" />
              <div className="flex flex-row justify-center">
                <div className="flex flex-col w-full">
                  <div className="text-black">
                    <p className="text-sm lg:text-base text-blue-900">
                      Enter the workout details
                    </p>
                  </div>
                  <form action="" className="mt-5 text-base lg:text-xl">
                    <div className="mb-4 lg:mb-6">
                      <p className="font-semibold text-sm lg:text-base mb-1">
                        Workout name
                      </p>
                      <input
                        type="text"
                        placeholder="E.g. Bicep curl"
                        className="outline-none border-2 border-gray-100 rounded-lg p-2 w-full lg:w-96 mt-2 text-sm lg:text-base"
                      />
                    </div>
                    <div className="mb-4 lg:mb-6">
                      <p className="font-semibold mb-1 text-sm lg:text-base">
                        Workout Description
                      </p>
                      <textarea
                        placeholder="Describe your workout here..."
                        className="outline-none border-2 border-gray-100 rounded-lg p-2 w-full lg:w-96 mt-2 text-sm lg:text-base resize-y"
                        rows="5"
                      />
                    </div>
                    <div className="mt-2 flex items-center">
                      <label
                        htmlFor="file-upload"
                        className="font-semibold cursor-pointer text-sm lg:text-base text-blue-600 flex items-center"
                      >
                        <Icon icon={exclamationCircleOutlined} />
                        Choose an image
                      </label>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={() => {
                          // Handle file selection here if needed
                        }}
                        id="file-upload"
                        className="hidden"
                      />
                    </div>
                    <button className="mt-5 bg-orange-500 text-white p-2 w-full rounded-xl hover:bg-orange-600 transition text-sm lg:text-base">
                      Save
                    </button>
                    <Link to="/">
                      <button className="mt-5 bg-blue-600 text-white p-2 w-full rounded-xl hover:bg-blue-700 transition text-sm lg:text-base">
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

export default AddWorkout;
