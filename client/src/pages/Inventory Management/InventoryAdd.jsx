// TODO add Logo
// Import your background image
import backgroundImage from "../../assets/sim.jpg";
import SideBar from "../../components/SideBar";
import React from "react";

function InventoryAdd() {
  return (
    <div className="">
      <div
        className="relative"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
        }}
      >
        <div className="flex flex-row align-middle p-5">
          <SideBar />
          <div className="w-full flex flex-col align-middle mx-auto justify-center ">
            <div className="mt-5 flex flex-row justify-center mx-auto">
              <h2 className="font-bold text-black text-4xl">Add Inventory</h2>
            </div>
            <div className="mt-8 flex flex-row items-start justify-center">
              <div className="flex flex-col mx-auto  ml-5 mr-5">
                <div className="flex flex-col w-full">
                  <div className="flex flex-col">
                    <label
                      htmlFor="itemName"
                      className="text-black font-medium mb-2"
                    >
                      Item/Machine/Equipment Name:
                    </label>
                    <input
                      type="text"
                      id="itemName"
                      className="border rounded py-1 px-2 w-full"
                    />
                  </div>
                  <div className="flex flex-col mt-4">
                    <label
                      htmlFor="description"
                      className="text-black font-medium mb-2"
                    >
                      Description:
                    </label>
                    <textarea
                      id="description"
                      className="border rounded py-1 px-2 h-24 w-full" // Adjust the 'h-24' value for a longer textarea
                    ></textarea>
                  </div>
                  <div className="flex flex-col mt-4">
                    <label
                      htmlFor="status"
                      className="text-black font-medium mb-2"
                    >
                      Status:
                    </label>
                    <select
                      id="status"
                      className="border rounded py-1 px-2 w-full"
                    >
                      <option value="underMaintenance">
                        Under Maintenance
                      </option>
                      <option value="outOfWork">Out of Work</option>
                      <option value="brandNew">Brand New</option>
                    </select>
                  </div>
                  <div className="mt-5">
                    <button className="bg-green-500 text-white py-2 px-4 rounded">
                      Add inventory
                    </button>
                  </div>
                </div>
              </div>
              {/* Add Image section */}
              <div className="w-96 mt-0 ">
                <div className="w-full h-96 border border-dashed rounded-lg flex flex-col items-center justify-center mx-auto">
                  {/* You can add an image or any other content here */}
                  {/* This is where the image will be displayed */}
                  <img
                    src="your_image_path.jpg"
                    alt=""
                    className="w-80 h-80 ml-4"
                  />
                  <div className="mt-4 text-center">
                    <button className="bg-blue-500 text-white py-2 px-4 rounded">
                      Add Image
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InventoryAdd;
