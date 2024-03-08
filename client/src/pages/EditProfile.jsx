import React, { useState } from "react";
import LOGO from "../assets/Logo.png";
import MENU from "../assets/MENU.png";
import model from "../assets/model.jpg";
import cam from "../assets/Layer 1.jpg";
import ID from "../assets/download.png";
import tele from "../assets/9i4o5RkiE-2281783926.png";
export const UserProfile = () =>{

  const [hovered,setHovered] = useState(false);

    return(
    
      
      <div className=" mt-[-621px]">
        <img src={model} alt="background" className="inset-0 absolute h-full object-cover opacity-50" />


        <div>
        
        <div id="NavBar" className="relative p-1 w-[370px] h-10 mb-1 flex-col">
            
            <div className="">
              <button>
                <img src={cam} className="border-1 border-black mt-9 absolute object-cover h-[210px] w-[363px] opacity-75 rounded-lg" alt="background"/>
              </button>
            <div className="flex justify-between flex-row">
            <img src={LOGO} className="w-[50px] h-[30px]" alt="logo" />
            <img src={MENU} className="w-[50px] h-[50px] mt-[-10px]" alt="menu" />
          </div>
          <div className=" flex items-center p-5 flex-col">
          <button className="flex justify-center">
            <img src={cam} alt="profile Pic" className="bg-gray-500 absolute border-4 border-white mt-[130px] mb-2 w-[100px] h-[100px] rounded-[64px] " /> 
          </button>
            
            <label className="text-black font-bold text-xl relative mt-[230px]" htmlFor="UserName">Micheal Clark</label>
          </div>
          
          
            <div className="">
              <div className="p-4 px-[45px] flex-row flex justify-stretch items-center border border-b-gray-200">
                <label className="w-[20px] h-[20px] mr-20 text-bold text-black text-opacity-70"  htmlFor="EmailAddress">ID</label>
                <input type="text" className="text-sm text-black border border-b-gray-400"  id="ID"/>
              </div>
              <div className="p-4 px-[45px] flex-row flex justify-stretch items-center border border-b-gray-200">
                <label className="w-[20px] h-[20px] mr-20 text-bold text-black text-opacity-70"  htmlFor="EmailAddress">Email</label>
                <input type="text" className="text-sm text-black border border-b-gray-400"  id="ID"/>
              </div>
              <div className="p-4 px-[45px] flex-row flex justify-stretch items-center border border-b-gray-200">
                <label className="w-[20px] h-[20px] mr-20 text-bold text-black text-opacity-70"  htmlFor="EmailAddress">Age</label>
                <input type="text" className="text-sm text-black border border-b-gray-400"  id="ID"/>
              </div>
              <div className="p-4 px-[45px] flex-row flex justify-stretch items-center border border-b-gray-200">
                <label className="w-[20px] h-[20px] mr-20 text-bold text-black text-opacity-70"  htmlFor="EmailAddress">Tele</label>
                <input type="text" className="text-sm text-black border border-b-gray-400"  id="ID"/>
              </div>
            </div>
            <div className="flex justify-center mt-6">
            <button className="bg-orange-600 h-7 w-40 rounded-lg text-black">Save</button>
          </div>
        </div>
      </div>
    </div>
    </div>
    );
};

export default UserProfile;