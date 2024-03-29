import React, { useState } from "react";
import SideBar from "../../components/SideBar";
import DropDownNavBar from "../../components/DropDownNavBar";
import backgroundImage from "../../assets/sim.jpg";

function InventoryShow() {
  const [mobileView] = useState(window.innerWidth < 768);
  const sidebarVisible = !mobileView; // Check if sidebar is visible

  return (
    <div
      className={`relative flex ${mobileView ? "flex-col" : "flex-row"}`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <div>{mobileView ? <DropDownNavBar /> : <SideBar />}</div>
      <div className={`flex flex-col mx-auto`}>
        <div>
          <h2 className="m-8 font-bold text-5xl text-center text-black">
            Inventory
          </h2>
          <table
            className=" w-full max-w-2xl mt-4 text-black"
            style={{ border: "none" }}
          >
            <thead className="bg-black-200">
              <tr>
                <th className="border p-2">Item</th>
                <th className="border p-2">Status</th>
                <th className="border p-2">Description</th>
                <th className="border p-2">Downloads</th>
                <th className="border p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">Dumbell 01</td>
                <td className="border p-2">Under Maintenance</td>
                <td className="border p-2">Details</td>
                <td className="border p-2">Download Details</td>
                <td className="border p-2">
                  <a href="#">Edit</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <button
          className={`bg-green-500 text-white py-2 px-4 rounded mt-4 hover:bg-green-600`}
        >
          Add To Inventory
        </button>
      </div>
    </div>
  );
}

export default InventoryShow;
