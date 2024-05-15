import { Link } from "react-router-dom";
import workoutWithSanjeewa from "../../assets/workoutwithSanjeewa.png";
import UserNavbar from "../../components/UserNavbar";
import React from "react";
import { useNavigate } from "react-router-dom";

function MembershipPlanSelection() {
  const navigate = useNavigate();
  // Function to handle saving package type to localStorage
  const handleChoosePlan = (packageType) => {
    localStorage.setItem("selectedPackage", packageType);
    localStorage.setItem("userID");
    navigate("/add-card");
  };

  return (
    <div className="h-auto bg-[#121212]">
      <UserNavbar />

      <div className="flex flex-col lg:flex-row p-3 ml-0 lg:ml-5">
        <div>
          <img
            src={workoutWithSanjeewa}
            className="w-[700px] lg:mt-10 h-[auto]"
            alt=""
          />
        </div>
        <div className="flex flex-col lg:p-5 text-white mt-5 m-0">
          <div className="flex flex-col w-full lg:flex-row">
            {/* Personal Training */}
            <div className="flex lg:mr-5 flex-col border-2 mb-5 p-3 w-full h-fit pt-10 pb-10 border-white rounded-xl justify-center">
              <h1 className="text-3xl mb-5 font-bold">Personal Training</h1>
              <button
                className="p-3 pl-5 pr-5 mb-5 bg-white text-black font-semibold hover:bg-slate-300 rounded-3xl"
                onClick={() => handleChoosePlan("Personal Training")}
              >
                <Link to="/add-card"> Choose Plan Below </Link>
              </button>
              <p className="font-semibold mb-3">
                3 Days per week / 12 Sessions per month{" "}
              </p>
              <button className="p-3 pl-5 pr-5 mb-5 bg-[#F2420D] text-black font-semibold hover:bg-[#E95022] rounded-3xl">
                Rs. 25,000/=
              </button>
              <p className="font-semibold mb-3">
                3 Days per week / 12 Sessions per month{" "}
              </p>
              <button className="p-3 pl-5 pr-5 mb-5 bg-[#F2420D] text-black font-semibold hover:bg-[#E95022] rounded-3xl">
                Rs. 25,000/=
              </button>
              <button className="p-3 pl-5 pr-5 mb-5 bg-[#3CBC27] text-white font-bold hover:bg-[#2D6524] text-xl rounded-3xl duration-300 ease-in-out transition-colors">
                Rs. 2,500 per Session
              </button>
            </div>
            {/* Family */}
            <div className="flex flex-col border-2 mb-5 p-8 w-full border-white rounded-xl justify-center">
              <h1 className="text-3xl mb-5 font-bold">Family - 3 Person</h1>
              <button
                className="p-3 pl-5 pr-5 mb-5 bg-white text-black font-semibold hover:bg-slate-300 rounded-3xl"
                onClick={() => handleChoosePlan("Family Plan")}
              >
                <Link to="/add-card"> Choose Plan Below </Link>
              </button>
              <p className="font-semibold mb-3 flex justify-between">
                One month
                <button className="p-1 pl-3 pr-3 mb-5 bg-[#F2420D] text-black text-sm font-semibold hover:bg-[#E95022] rounded-3xl">
                  Rs. 24,000/=
                </button>
              </p>
              <p className="font-semibold mb-3 flex justify-between">
                Three month
                <button className="p-1 pl-3 pr-3 mb-5 bg-[#F2420D] text-black text-sm font-semibold hover:bg-[#E95022] rounded-3xl">
                  Rs. 58,000/=
                </button>
              </p>
              <p className="font-semibold mb-3 flex justify-between">
                Six month
                <button className="p-1 pl-3 pr-3 mb-5 bg-[#F2420D] text-black text-sm font-semibold hover:bg-[#E95022] rounded-3xl">
                  Rs. 90,000/=
                </button>
              </p>
              <p className="font-semibold mb-3 flex justify-between">
                Annual
                <button className="p-1 pl-3 pr-3 mb-5 bg-[#F2420D] text-black text-sm font-semibold hover:bg-[#E95022] rounded-3xl">
                  Rs. 140,000/=
                </button>
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row">
            {/* Individual */}
            <div className="ml-0 flex  flex-col border-2 mb-5 p-8 w-full border-white rounded-xl justify-center">
              <h1 className="text-3xl mb-5 font-bold">Individual</h1>
              <button className="p-3 pl-5 pr-5 mb-5 bg-white text-black font-semibold hover:bg-slate-300 rounded-3xl">
                <Link to="/add-card"> Choose Plan Below </Link>
              </button>
              <p className="font-semibold mb-3 flex justify-between">
                One month
                <button
                  className="p-1 pl-3 pr-3 mb-5 bg-[#F2420D] text-black text-sm font-semibold hover:bg-[#E95022] rounded-3xl"
                  onClick={() => handleChoosePlan("Individual one Month")}
                >
                  Rs. 10,000/=
                </button>
              </p>
              <p className="font-semibold mb-3 flex justify-between">
                Three month
                <button
                  className="p-1 pl-3 pr-3 mb-5 bg-[#F2420D] text-black text-sm font-semibold hover:bg-[#E95022] rounded-3xl"
                  onClick={() => handleChoosePlan("Individual Three month")}
                >
                  Rs. 25,000/=
                </button>
              </p>
              <p className="font-semibold mb-3 flex justify-between">
                Six month
                <button
                  className="p-1 pl-3 pr-3 mb-5 bg-[#F2420D] text-black text-sm font-semibold hover:bg-[#E95022] rounded-3xl"
                  onClick={() => handleChoosePlan("Individual Six month")}
                >
                  Rs. 40,000/=
                </button>
              </p>
              <p className="font-semibold mb-3 flex justify-between">
                Annual
                <button
                  className="p-1 pl-3 pr-3 mb-5 bg-[#F2420D] text-black text-sm font-semibold hover:bg-[#E95022] rounded-3xl"
                  onClick={() => handleChoosePlan("Individual Annual")}
                >
                  Rs. 65,000/=
                </button>
              </p>
            </div>
            {/* Couple */}
            <div className="ml-0 lg:ml-5 flex  flex-col border-2 mb-5 p-8 w-full border-white rounded-xl justify-center">
              <h1 className="text-3xl mb-5 font-bold">Couple - 2 Person</h1>
              <button
                className="p-3 pl-5 pr-5 mb-5 bg-white text-black font-semibold hover:bg-slate-300 rounded-3xl"
                onClick={() => handleChoosePlan("Individual")}
              >
                <Link to="/add-card"> Choose Plan Below</Link>
              </button>
              <button
                className="font-semibold mb-3 flex justify-between"
                onClick={() => handleChoosePlan("Couple one Month")}
              >
                One month
                <button
                  className="p-1 pl-3 pr-3 mb-5 bg-[#F2420D] text-black text-sm font-semibold hover:bg-[#E95022] rounded-3xl"
                  onClick={() => handleChoosePlan("Couple two Months")}
                >
                  Rs. 18,000/=
                </button>
              </button>
              <p className="font-semibold mb-3 flex justify-between">
                Three month
                <button
                  className="p-1 pl-3 pr-3 mb-5 bg-[#F2420D] text-black text-sm font-semibold hover:bg-[#E95022] rounded-3xl"
                  onClick={() => handleChoosePlan("Couple three Months")}
                >
                  Rs. 45,000/=
                </button>
              </p>
              <p className="font-semibold mb-3 flex justify-between">
                Six month
                <button
                  className="p-1 pl-3 pr-3 mb-5 bg-[#F2420D] text-black text-sm font-semibold hover:bg-[#E95022] rounded-3xl"
                  onClick={() => handleChoosePlan("Couple six Months")}
                >
                  Rs. 65,000/=
                </button>
              </p>
              <p className="font-semibold mb-3 flex justify-between">
                Annual
                <button
                  className="p-1 pl-3 pr-3 mb-5 bg-[#F2420D] text-black text-sm font-semibold hover:bg-[#E95022] rounded-3xl"
                  onClick={() => handleChoosePlan("Couple Yearly")}
                >
                  Rs. 100,000/=
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MembershipPlanSelection;
