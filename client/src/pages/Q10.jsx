import React, { useState } from "react";
import wmodel from "../assets/MB.jpg";
import logo from "../assets/Logo.png";
import arrow from "../assets/RedArrow.png";
import swmodel from "../assets/selLadMod.jpg";
import smmodel from "../assets/selMaMod.jpg";

import { Link } from "react-router-dom";

export const Q9 = () => {

  return (
    <div className="bg-zinc-900 w-full h-full flex justify-center p-20 items-center">
      <img src={wmodel} className="absolute inset-0 w-full h-full object-cover grayscale" alt="Background" />
      <img src={logo} className="w-[107px] h-12 absolute bottom-0 right-0 mb-4 mr-4" alt="background" />
      <div className="bg-black bg-opacity-40 rounded-[20px] w-fit lg:w-[] border border-stone-800 backdrop-blur-sm justify-center p-6 shadow-lg backdrop filter absolute">
        <div className="py-2 px-4">
          <h1 className="text-center static text-white text-xl mb-8 font-['Josefin Slab']">Do you consume alcohol?</h1>
          <div className="mb-[40px] p-2" >
           <div className="bg-slate-500 hover:bg-slate-100 duration-300 transition-colors ease-in-out rounded-[15px] h-9 mb-2 flex justify-center">
              <label className="text-rose-500 text-[1.25rem] font-bold " htmlFor="radioOption1">Yes</label>
              <label className="ml-[130px]" htmlFor=""></label>
              <input className="align-middle cursor-pointer" type="radio" id="alc_Yes" name="alcohol" />
            </div>
            <div className="bg-slate-500 hover:bg-slate-100 duration-300 transition-colors ease-in-out rounded-[15px] h-9 mb-2 flex justify-center">
              <label className="text-rose-500 text-[1.25rem] font-bold " htmlFor="radioOption1">No</label>
              <label className="ml-[130px]" htmlFor=""></label>
              <input className="align-middle cursor-pointer" type="radio" id="alc_No" name="alcohol" />
            </div>
            </div>
              <div className="flex justify-center">
                <button>
                  <img src={arrow} className="w-10 h-10 mr-20 hover:opacity-70" alt="Red Arrow" />
                </button>
                <button>
                  <img src={arrow} className="w-10 h-10 ml-10 rotate-180 hover:opacity-70" alt="Red Arrow" />
                </button>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default Q9;
