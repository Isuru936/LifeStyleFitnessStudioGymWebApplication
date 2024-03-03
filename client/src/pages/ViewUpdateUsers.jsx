import React from "react";
import Sidebar from "../components/SideBar";
import DropDownNavBar from "../components/DropDownNavBar";
import { useState } from "react";
import profImg from "../assets/profImg.png";

function AddUpdateUserDetails() {
  const [mobileView] = useState(window.innerWidth < 768);
  return (
    <>
      <div className="border-4">
        <div className="flex flex-row ml-0 w-full border-4">
          <div>{mobileView ? <DropDownNavBar /> : <Sidebar />}</div>
          <div className="flex flex-col ">
            <div>flex</div>
            <div>flex</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddUpdateUserDetails;
