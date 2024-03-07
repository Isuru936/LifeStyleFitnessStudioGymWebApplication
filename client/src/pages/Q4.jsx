import React, { useState } from "react";
import wmodel from "../assets/dumbels.jpg";
import logo from "../assets/Logo.png";
import arrow from "../assets/RedArrow.png";
import swmodel from "../assets/selLadMod.jpg";
import smmodel from "../assets/selMaMod.jpg";

import { Link } from "react-router-dom";

export const Q4 = () => {
  const [value, setValue] = useState("");
  const [isSelected, setIsSelected] = useState(false);
  const [isSelected2, setIsSelected2] = useState(false);

  const changeWeight = () => {
    setValue("lbs");
    setIsSelected2(false);
    setIsSelected(true);
  };

  const changeWeight2 = () => {
    setValue("kg");
    setIsSelected(false);
    setIsSelected2(true);
  };

  return (
    <div className="bg-zinc-900 w-full h-full flex justify-center p-7 px-0 py-40">
      <img src={wmodel} className="absolute inset-0 w-full h-full object-cover " alt="Background" />
      <img src={logo} className="w-[107px] h-12 absolute bottom-0 right-0 mb-4 mr-4" alt="background" />
      <div className="bg-black bg-opacity-40 rounded-[20px] border border-stone-800 backdrop-blur-sm justify-center p-6 shadow-lg backdrop filter relative">
        <div className="p-4 mt-7">
          <h1 className="text-center static text-white text-xl mb-8 font-['Josefin Slab']">How tall are you ?</h1>
          <div className="flex justify-center">
            <form action="">
              <div className="flex justify-center mt-10 mb-14">
                <button onClick={changeWeight} type="Radio" name="lbs" className={`opacity-${isSelected ? '100' : '30'}`}>
                  <label className="px-10 py-10 bg-amber-600 rounded-bl-[10px] rounded-tl-[10px]" htmlFor="Ft">
                    lbs
                  </label>
                </button>
                <button onClick={changeWeight2} type="Radio" name="kg" className={`opacity-${isSelected2 ? '100' : '30'}`}>
                  <label className=" px-10 py-10 bg-amber-600 rounded-br-[10px] rounded-tr-[10px]" htmlFor="cm">
                    kg 
                  </label>
                </button>
              </div>
              <div className="flex justify-center mb-5">
                <input className="bg-transparent border-b-2 border-gray-500" type="text" />
                <p className="opacity-30">{value}</p>
              </div>
              <div className="flex justify-center">
                <button>
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

export default Q4;
