import React, { useEffect, useState } from "react";
import backgroundImage from "../../assets/sim.jpg";
import SideBar from "../../components/SideBar";
import { Link, useParams, useNavigate } from "react-router-dom";

function InventoryUpdateDlt() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [inventoryItem, setInventoryItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("adminLogin") === null) {
      navigate("/admin-login");
    }

    const fetchItemByID = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch item");
        }
        const data = await response.json();
        console.log(data.inventoryItem);
        setInventoryItem(data.inventoryItem);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchItemByID();
  }, [id]);

  const handleUpdate = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inventoryItem), // Send the updated inventoryItem object
      });
      if (!response.ok) {
        throw new Error("Failed to update item");
      }
      console.log("Item updated successfully");
      alert("Item Updated Successfully");
      navigate("/show-inventory");
      // Optionally, you can redirect the user or show a success message here
    } catch (error) {
      console.error("Error updating item:", error);
      // Handle error
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!inventoryItem) {
    return <div>No item found</div>;
  }

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
        <div className="flex flex-row p-8">
          <SideBar />
          <div className="flex flex-col  justify-center mx-auto w-full">
            <div className="mt-5 justify-center mx-auto">
              <h2 className="font-bold text-black text-3xl">
                UPDATE INVENTORY
              </h2>
            </div>
            <div className="mt-8 flex flex-row mx-auto justify-center w-full">
              <div className="flex  flex-col justify-center mx-auto w-full md:w-1/3 ml-5 mr-5">
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
                    value={inventoryItem.itemName}
                    onChange={(e) =>
                      setInventoryItem({
                        ...inventoryItem,
                        itemName: e.target.value,
                      })
                    }
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
                    value={inventoryItem.description}
                    onChange={(e) =>
                      setInventoryItem({
                        ...inventoryItem,
                        description: e.target.value,
                      })
                    }
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
                    value={inventoryItem.status}
                    onChange={(e) =>
                      setInventoryItem({
                        ...inventoryItem,
                        status: e.target.value,
                      })
                    }
                  >
                    <option value="underMaintenance">Under Maintenance</option>
                    <option value="outOfWork">Out of Work</option>
                    <option value="brandNew">Brand New</option>
                  </select>
                </div>
                <div className="mt-4 flex flex-col md:flex-row">
                  <button
                    className="bg-green-500 text-white py-2 px-4 rounded mb-2 md:mb-0 md:mr-2"
                    onClick={handleUpdate}
                  >
                    Update
                  </button>
                  <Link to="/show-inventory">
                    <button className="bg-orange-500 text-white py-2 px-4 rounded">
                      Back
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

export default InventoryUpdateDlt;
