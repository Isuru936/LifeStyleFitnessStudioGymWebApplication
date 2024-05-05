import axios from "axios";
import profImg from "../assets/profImg.png";
import React, { useEffect, useState } from "react";

export default function DietPlanUserView({ userId }) {
  const [user, setUser] = useState([]);
  const id = userId;
  console.log("UserNav", id);

  useEffect(() => {
    try {
      const fetchUser = async () => {
        const response = await axios.get(
          `http://localhost:3000/api/bioData/bioDataById/${id}`
        );
        setUser(response.data.data.bioData);
        console.log("bData", response.data.data);
        const nutrientLevels = JSON.stringify(
          response.data.data.nutrientLevels
        );
        localStorage.setItem("nutrientsRecommend", nutrientLevels);
      };

      fetchUser();
    } catch (error) {
      console.error("Error fetching food item:", error);
    }
  }, [id]);

  console.log(user.weight);

  return (
    <div>
      <div className="hidden lg:block bg-red-0 lg:mt-0 lg:ml-1">
        <hr className="h-3" />

        <div className="bg-slate-200 rounded-xl w-fit ml-1 mr-1 pt-1 pb-1">
          <input
            type="text"
            placeholder="Search for an Email"
            value={user.userID}
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
            <p className="font-semibold text-slate-500 mb-1">
              Weight: {user.Weight || "Not available"} kg
            </p>
            <p className="font-semibold text-slate-500 mb-1">
              gender: {user.Gender || "Not available"}
            </p>
            <p className="font-semibold text-slate-500 mb-1">
              Height: {user.Height || "Not available"} cm
            </p>
            <p className="font-semibold text-slate-500 mb-1">
              Glucose_lvl: {user.Glucose_lvl || "Not available"}
            </p>
            <p className="font-semibold text-slate-500 mb-1">
              Cholesterol_lvl: {user.Cholesterol_lvl || "Not available"}
            </p>
            <p className="font-semibold text-slate-500 mb-1">Age: {user.Age}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
