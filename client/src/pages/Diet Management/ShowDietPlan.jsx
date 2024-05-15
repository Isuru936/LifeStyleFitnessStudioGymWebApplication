import React, { useEffect, useState } from "react";
import bgImg from "../../assets/pexels-suzy-hazelwood-1098529.jpg";
import proImage from "../../assets/proImage.png";
import proImage2 from "../../assets/proImage2.png";
import UserNavbar from "../../components/UserNavbar";
import Aos from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { Icon } from "@iconify/react/dist/iconify.js";

const ShowDietPlan = () => {
  const StringId = localStorage.getItem("userID");
  const [dietplan, setDietPlan] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const id = StringId.split('"')[1];
    Aos.init({ duration: 2000 });
    try {
      setLoading(true);
      const fetchUser = async () => {
        const response = await axios.get(
          `http://localhost:3000/api/bioData/bioDataById/${id}`
        );
        setDietPlan(response.data.data.bioData.dietplan);
        console.log("Diet Plan:", response.data.data.bioData.dietplan);
        setLoading(false); // Update loading state after data is fetched
      };

      fetchUser();
    } catch (error) {
      console.error("Error fetching user item:", error);
    }
  }, [StringId]);

  return (
    <div className="h-screen overflow-y-auto  border-black">
      <div
        className="flex flex-row items-start min-h-screen bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="mb w-screen">
          <UserNavbar />
          <hr />
          <h1 className="text-4xl font-bold ml-10">Diet Plans</h1>
          <div className="text-blue-900 ml-10">
            <p>The diet plans were assigned by your instructor</p>
          </div>
          <div className="flex flex-col lg:flex-row justify-center m-5">
            <div className="lg:ml-5">
              <div className="flex flex-row justify-center lg:flex-col lg:mr-3"></div>
            </div>
            {loading ? (
              <Icon
                icon="eos-icons:bubble-loading"
                className="text-9xl"
                style={{ color: "white" }}
              />
            ) : (
              <div className=" bg-white w-fit bg-opacity-50 shadow-md p-2 h-fit rounded border border-solid  ">
                <div className="flex flex-wrap mt-1 justify-center">
                  {dietplan.length === 0 ? (
                    <p className="text-black font-bold text-center py-12 px-20">
                      No diet plan assigned yet, request your instructor to
                      assign a diet plan
                    </p>
                  ) : (
                    dietplan.map((item, index) => (
                      <div
                        key={index}
                        className="food-card p-4 m-2 bg-white rounded-lg shadow-md h-auto w-36 lg:w-[200px] hover:scale-105 transition"
                      >
                        <img
                          src={item.imageData} // Access item's imageData
                          alt="product"
                          className="w-28 h-28 object-cover mx-auto rounded-xl"
                        />
                        <p className="text-black text-sm font-bold">
                          {item.name}
                        </p>
                        <span className="text-black text-xs">
                          {`${item.calories} calories, ${item.protein} protein, ${item.carbs} carbs, ${item.fat} fat`}
                        </span>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowDietPlan;
