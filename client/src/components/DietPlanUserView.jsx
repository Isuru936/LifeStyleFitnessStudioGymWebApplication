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
        console.log("bData", response.data.data.bioData);
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

  return (
    <div>
      <div className="hidden lg:block bg-red-0 lg:mt-0 lg:ml-1">
        <hr className="h-3" />

        <div>
          <div className="p-8 border">
            <h1 className="text-xl font-bold mb-2">User Stats</h1>
            <p className="font-semibold text-slate-500 mb-1">
              Age: {user.age || "Not available"}
            </p>
            <p className="font-semibold text-slate-500 mb-1">
              Weight: {user.weight || "Not available"} kg
            </p>
            <p className="font-semibold text-slate-500 mb-1">
              gender: {user.gender || "Not available"}
            </p>
            <p className="font-semibold text-slate-500 mb-1">
              Height: {user.height || "Not available"} cm
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}