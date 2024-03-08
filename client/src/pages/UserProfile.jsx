import React from "react";
import LOGO from "../assets/Logo.png";
import MENU from "../assets/MENU.png";
import model from "../assets/model.jpg";
import model1 from "../assets/dumbels.jpg";
import ID from "../assets/download.png";
import tele from "../assets/9i4o5RkiE-2281783926.png";
export const UserProfile = () =>{

    return(

      
      <div className=" mt-[-621px]">


        <div>
          <img src={model1} className="inset-0 absolute h-full object-cover contrast-150 brightness-50" alt="background" />
        
        <div id="NavBar" className="relative p-1 w-[370px] h-10 mb-1 flex-col">
            
          <div className="bg-black bg-opacity-40 border border-stone-900 backdrop-blur-sm shadow-lg backdrop filter">
            <img src={model} className="mt-9 absolute object-cover h-[210px] w-[363px] opacity-75 rounded-lg" alt="background"/>
            
            <div className="flex justify-between flex-row bg-slate-300">
            <img src={LOGO} className="w-[50px] h-[30px]" alt="logo" />
            <img src={MENU} className="w-[50px] h-[50px] mt-[-10px]" alt="menu" />
          </div>
          <div className=" flex items-center p-5 flex-col">
            <img src={model} alt="profile Pic" className="absolute border-4 border-white mt-[130px] mb-2 w-[100px] h-[100px] rounded-[64px] " />
            <label className="text-white font-bold text-xl relative mt-[230px]" htmlFor="UserName">Micheal Clark</label>
          </div>
          <div className="flex-row flex justify-around">
            <button className="text-black bg-slate-200 w-[170px] h-[30px] text-center rounded-lg">Edit Profile</button>
            <button className="text-black w-[180px] h-[30px] bg-orange-400 text-center rounded-lg">Change Password</button>
          </div>
          
            <div className="">
              <div className="p-4 px-[45px] flex-row flex justify-stretch items-center border-1 border-b-gray-200">
                <label className="w-[20px] h-[20px] mr-20 text-bold text-white text-opacity-70"  htmlFor="EmailAddress">ID</label>
                <label className="text-sky-100" htmlFor="EmailAddress">188526445</label>
              </div>
              <div className="p-4 px-[45px] flex-row flex justify-stretch items-center border-1 border-b-gray-200">
                <label className="w-[20px] h-[20px] mr-20 text-bold text-white text-opacity-70"  htmlFor="EmailAddress">Email</label>
                <label className="text-sky-100" htmlFor="EmailAddress">test@gmail.com</label>
              </div>
              <div className="p-4 px-[45px] flex-row flex justify-stretch items-center border-1 border-b-gray-200">
                <label className="w-[20px] h-[20px] mr-20 text-bold text-white text-opacity-70"  htmlFor="EmailAddress">Age</label>
                <label className="text-sky-100" htmlFor="EmailAddress">18</label>
              </div>
              <div className="p-4 px-[45px] flex-row flex justify-stretch items-center border-1 border-b-gray-200">
                <label className="w-[20px] h-[20px] mr-20 text-bold text-white text-opacity-70"  htmlFor="EmailAddress">Tele</label>
                <label className="text-sky-100" htmlFor="EmailAddress">78995518</label>
              </div>
            </div>
            <div className="flex justify-center mt-6">
            <button className="bg-red-600 h-7 w-40 rounded-lg text-black">Delete Account</button>
          </div>
        </div>
      </div>
    </div>
    </div>
    );
};

export default UserProfile;