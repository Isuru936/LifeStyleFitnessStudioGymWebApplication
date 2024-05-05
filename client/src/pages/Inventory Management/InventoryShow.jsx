import React, { useEffect, useState } from "react";
import SideBar from "../../components/SideBar";
import DropDownNavBar from "../../components/DropDownNavBar";
import backgroundImage from "../../assets/sim.jpg";

function InventoryShow() {
  const [inventory, setInventory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [mobileView] = useState(window.innerWidth < 768);
  const sidebarVisible = !mobileView;

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/");
        const data = await response.json();
        setInventory(data.inventory);
        setLoading(false);
      } catch (error) {
        setError("Error fetching inventory data: " + error.message);
        setLoading(false);
      }
    };
    fetchInventory();
  }, []);

  const handleDelete = async (itemId) => {
    if (!itemId) {
      console.error("Error: Invalid itemId");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:3000/api/inventory/${itemId}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        // Remove the deleted item from the inventory state
        setInventory(inventory.filter((item) => item.id !== itemId));
        console.log("Item deleted successfully");
      } else {
        const errorMessage = await response.text();
        throw new Error(`Failed to delete item: ${errorMessage}`);
      }
    } catch (error) {
      console.error("Error deleting item:", error.message);
      setError(error.message);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!Array.isArray(inventory)) {
    return <div>Error: Inventory data is not in the expected format</div>;
  }

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
            <thead className="bg-gray-200">
              <tr>
                <th className="border p-2">Item</th>
                <th className="border p-2">Status</th>
                <th className="border p-2">Description</th>
                <th className="border p-2">Downloads</th>
                <th className="border p-2">Actions</th>
                <th className="border p-2">Delete</th>
              </tr>
            </thead>
            <tbody>
              {inventory.map((item) => (
                <tr key={item.id}>
                  <td className="border p-2">{item.itemName}</td>
                  <td className="border p-2">{item.status}</td>
                  <td className="border p-2">{item.description}</td>
                  <td className="border p-2">Download Details</td>
                  <td className="border p-2">
                    <a href="#">Edit</a>
                  </td>
                  <td className="border p-2 text-red-500 hover:text-red-700 cursor-pointer">
                    <button onClick={() => handleDelete(item.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
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
