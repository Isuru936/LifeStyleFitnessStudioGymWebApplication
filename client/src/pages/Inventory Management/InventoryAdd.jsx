import React, { useEffect, useState } from "react";
import SideBar from "../../components/SideBar";
import backgroundImage from "../../assets/sim.jpg";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import { Link } from "react-router-dom";

function InventoryAdd() {
  const [itemName, setItemName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("underMaintenance");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    if (localStorage.getItem("adminLogin") === null) {
      navigate("/admin-login");
    }
  }, []);

  const handleAddInventory = async () => {
    try {
      if (!itemName || !description) {
        setErrorMessage("Please fill out all required fields.");
        return;
      }

      const response = await fetch("http://localhost:3000/api/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          itemName,
          description,
          status,
          // imageUrl,
        }),
      });
      console.log(itemName, description, status);

      if (response.ok) {
        setSuccessMessage("Inventory item added successfully");
        alert("Inventory Added");
        setItemName("");
        setDescription("");
        setStatus("underMaintenance");
      } else {
        setErrorMessage("Failed to add inventory item");
      }
    } catch (error) {
      setErrorMessage("Error adding inventory item");
      console.error("Error adding inventory item:", error);
    }
  };

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
            {errorMessage && (
              <div className="text-red-600 mt-4 text-center">
                {errorMessage}
              </div>
            )}
            {successMessage && (
              <div className="text-green-600 mt-4 text-center">
                {successMessage}
              </div>
            )}
            <div className="mt-8 flex flex-row items-start justify-center">
              <div className="flex flex-col mx-auto  ml-5 mr-5">
                <div className="flex flex-col w-full">
                  <label
                    htmlFor="itemName"
                    className="text-black font-medium mb-2"
                  >
                    Item Name:
                  </label>
                  <input
                    type="text"
                    id="itemName"
                    className="border rounded py-1 px-2 w-full"
                    value={itemName}
                    onChange={(e) => setItemName(e.target.value)}
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
                    className="border rounded py-1 px-2 h-24 w-full"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
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
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option value="underMaintenance">Under Maintenance</option>
                    <option value="outOfWork">Out of Work</option>
                    <option value="brandNew">Brand New</option>
                  </select>
                </div>
                <div className="mt-5">
                  <button
                    className="bg-green-500 text-white py-2 px-4 rounded"
                    onClick={handleAddInventory}
                  >
                    Add Inventory
                  </button>
                  <Link to="/show-inventory">
                    <button
                      className="bg-slate-500 ml-5 text-white py-2 px-4 rounded"
                      onClick={handleAddInventory}
                    >
                      Back{" "}
                    </button>
                  </Link>
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
