
import wmodel from "../assets/Qm.jpg";
import logo from "../assets/Logo.png";
import arrow from "../assets/RedArrow.png";
import swmodel from "../assets/selLadMod.jpg";
import smmodel from "../assets/selMaMod.jpg";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Q2 = () => {
  
  const [value,setValue]= useState("");
  const [isSelected, setIsSelected] = useState(false);
  const [isSelected2, setIsSelected2] = useState(false);

  const changeGender = () => {
    setValue("Female");
    setIsSelected2(false);
    setIsSelected(true);
  };

  const changeGender2 = () => {
    setValue("Male");
    setIsSelected(false);
    setIsSelected2(true);
  };


  return (
    <div className="bg-zinc-900 w-full h-full flex justify-center p-7 px-0 py-40">
      <img src={wmodel} className="absolute inset-0 w-full h-full object-cover " alt="Background" />
      <img src={logo} className="w-[107px] h-12 absolute bottom-0 right-0 mb-4 mr-4" alt="background" />
      <div className="bg-black bg-opacity-40 rounded-[20px] border border-stone-800 backdrop-blur-sm justify-center p-6 shadow-lg backdrop filter relative">
        <div className="p-4 mt-7">
          <h1 className="text-center static text-white text-xl mb-8 font-['Josefin Slab']">Select Your Gender</h1>
          <div className="flex justify-center">
            <div action="">
              <div className="flex justify-center mb-14">

              <button onClick={changeGender} type="Radio" name="Female" className={`opacity-${isSelected ? '100' : '30'}`}>
                  <img src={swmodel} className="w-20 h-20 rounded-[10px] mb-4" alt="Women Model" />
                  <label className="px-3 py-1 bg-amber-600 rounded-[10px]" name="Female" htmlFor="Female">Female</label>
                </button>

                <button onClick={changeGender2} type="Radio" name="Male" className={`opacity-${isSelected2 ? '100' : '30'}`}>
                  <img src={smmodel} className="w-20 h-20 rounded-[10px] mb-4" alt="Men Model" />
                  <label className=" px-5 py-1 bg-amber-600 rounded-[10px]" name="Male" htmlFor="Male">Male</label>
                </button>

              </div>
              <div className="flex justify-center">
              <button className="">
                  <img src={arrow} className="w-10 h-10 mr-20 hover:opacity-70" alt="Red Arrow" />
                </button>
                <button>
                  <img src={arrow} className="w-10 h-10 rotate-180 hover:opacity-70" alt="Red Arrow" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Q2; 