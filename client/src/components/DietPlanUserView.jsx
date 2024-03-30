import profImg from "../assets/profImg.png";
import React from "react";

export default function DietPlanUserView() {
  return (
    <div>
      <div className="hidden lg:block bg-red-0 lg:mt-0 lg:ml-1">
        <hr className="h-3" />

        <div className="bg-slate-200 rounded-xl w-fit ml-1 mr-1 pt-1 pb-1">
          <input
            type="text"
            placeholder="Search for an User"
            className="bg-slate-200 p-1 pl-2 rounded-xl  ml-1 outline-none"
          />
          <span
            className="icon-[material-symbols--search] bg-slate-500 pl-4 pr-4"
            style={{ width: "20px", height: "20px" }}
          />
        </div>
        <div>
          <div className="p-3">
            <div className="w-[104px] h-[104px] bg-red-300 mx-auto rounded-full">
              <img src={profImg} alt="Profile" />
            </div>
            <p className="font-semibold text-slate-500 mb-1">Weight: </p>
            <p className="font-semibold text-slate-500 mb-1">Height: </p>
            <p className="font-semibold text-slate-500 mb-1">Purpose: </p>
            <p className="font-semibold text-slate-500 mb-1">Age: </p>
            <p className="font-semibold text-slate-500 mb-1">
              Health Condition:{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
