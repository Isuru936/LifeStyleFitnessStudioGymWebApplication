import React from "react";
import wmodel from "../assets/Qm.jpg";
import logo from "../assets/Logo.png";
import arrow from "../assets/RedArrow.png";
import { Link } from "react-router-dom";

export const Q1 = () => {

  const changeGender = event => {
    console.log(event.target.id)
  };
  return (
    <div className="bg-zinc-900 w-full h-full flex justify-center p-7 px-0 py-40">
      <img src={wmodel} className="absolute inset-0 w-full h-full object-cover scale-y-[-1] rotate-180" alt="Background" />
      <img src={logo} className="w-[107px] h-12 absolute bottom-0 right-0 mb-4 mr-4" alt="background" />
      <div className="bg-black bg-opacity-40 rounded-[20px] border border-stone-800 backdrop-blur-sm justify-center p-6 shadow-lg backdrop filter relative">
        <div className="p-4 mt-7">
          <h1 className="text-center static text-white text-xl mb-8 font-['Josefin Slab']">Select Your Age</h1>
          <div className="flex justify-center">
            <form action="">
              <div className="flex justify-center mb-3">
                <label onClick={changeGender} id="Hello" className="w-40 h-7 flex justify-center bg-orange-700 rounded-[15px] text-x hover:bg-orange-800 cursor-pointer" type="submit">
                  Age : 18 - 29
                </label>
              </div>
              <div className="flex justify-center mb-3">
                <label onClick={changeGender} id="Hello2" className="w-40 h-7 flex justify-center bg-orange-700 rounded-[15px] text-x hover:bg-orange-800 cursor-pointer" type="submit">
                  Age : 30 - 39
                </label>
              </div>
              <div className="flex justify-center mb-3">
                <label onClick={changeGender} id="Hello3" className="w-40 h-7 flex justify-center bg-orange-700 rounded-[15px] text-x hover:bg-orange-800 cursor-pointer" type="submit">
                  Age : 40 - 49
                </label>
              </div>
              <div className="flex justify-center mb-12">
                <label onClick={changeGender} id="Hello4" className="w-40 h-7 flex justify-center bg-orange-700 rounded-[15px] text-x hover:bg-orange-800 cursor-pointer" type="submit">
                  Age : 50+
                </label>
              </div >
              <div className="flex justify-center">
              <button className="">
                  <img src={arrow} className="w-10 h-10 mr-20 hover:opacity-70" alt="Red Arrow" />
                </button>
                <button>
                  <img src={arrow} className="w-10 h-10 rotate-180 hover:opacity-70" alt="Red Arrow" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Q1;
