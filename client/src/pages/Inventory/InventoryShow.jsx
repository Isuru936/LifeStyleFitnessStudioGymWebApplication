import { useState } from "react";
import SideBar from "../../components/SideBar";
import DropDownNavBar from "../../components/DropDownNavBar";

// Import your background image
import backgroundImage from "../assets/sim.jpg";

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
      <div className={`flex ${mobileView ? "flex-col" : "flex-row"}`}>
        {/* Sidebar */}

        {/* Main Content */}
        <div className="flex flex-col items-start justify-start flex-1 ml-auto relative">
          {/* Add To Inventory Button */}
          <button
            className={`bg-green-500 text-white py-2 px-4 rounded absolute ${
              sidebarVisible ? "bottom-0 right-0" : "bottom-4 right-4"
            } m-4`}
          >
            Add To Inventory
          </button>

          {/* Inventory Table */}
          <div>
            <h2 className="m-8 font-bold text-xl text-black">Inventory</h2>
            <table className="mx-8 w-full max-w-2xl border-collapse border border-black-300 mt-4 text-black">
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
                {/* Add more rows as needed */}
              </tbody>
            </table>
          </div>

          {/* Background under the table */}
          <div
            className="mx-8 w-full max-w-2xl h-20"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.7)" }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default InventoryShow;
