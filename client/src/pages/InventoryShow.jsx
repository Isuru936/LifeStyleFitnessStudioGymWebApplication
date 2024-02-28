import React, { useState } from "react";
import SideBar from "../components/SideBar";
import DropDownNavBar from "../components/DropDownNavBar";

function InventoryShow() {
  const [mobileView] = useState(window.innerWidth < 768);
  return (
    <div className="flex flex-row">
      <div>{mobileView ? <DropDownNavBar /> : <SideBar />}</div>
      <div className="m-8">Hello</div>
    </div>
  );
}

export default InventoryShow;
