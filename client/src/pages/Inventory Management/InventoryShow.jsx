import React, { useEffect, useState } from "react";
import SideBar from "../../components/SideBar";
import backgroundImage from "../../assets/sim.jpg";
import axios from "axios";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function InventoryShow() {
  const [inventory, setInventory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  useEffect(() => {
    fetchInventory();
  }, []);

  const handleDelete = async (itemId) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/api/${itemId}`
      );
      setInventory(inventory.filter((item) => item.id !== itemId));
      console.log("Item deleted successfully");
      alert("Deleted Successfully");
      fetchInventory();
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
      className="relative flex flex-col md:flex-row"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <div>
        <SideBar />
      </div>
      <div className="flex flex-col mx-auto w-full md:w-screen">
        <div className="w-screen mx-auto">
          <h2 className="m-8 mb-0 font-bold text-5xl text-center text-black">
            Inventory
          </h2>
          <Link to="/add-inventory" className="absolute top-0 right-5 mx-auto">
            <button className="bg-green-500 text-white py-2 px-4 rounded mt-4 hover:bg-green-600">
              Add To Inventory
            </button>
          </Link>
          <table className="w-full max-w-7xl mt-10 mx-auto text-black p-3 border-collapse rounded-lg overflow-hidden">
            <thead className="bg-gray-200">
              <tr>
                <th className="border p-2">Item</th>
                <th className="border p-2">Status</th>
                <th className="border p-2">Description</th>
                <th className="border p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {inventory.map((item, index) => (
                <motion.tr
                  key={item.id}
                  variants={{
                    hidden: { opacity: 0, y: -20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className="bg-white border-b"
                  initial="hidden"
                  animate="visible"
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                >
                  <td className=" p-2">{item.itemName}</td>
                  <td className=" p-2">{item.status}</td>
                  <td className=" p-2">{item.description}</td>

                  <td className=" p-2 flex gap-1">
                    <Link to={`/update-inventory/${item._id}`}>
                      <button className="bg-green-500 hover:bg-green-700 p-1 rounded-lg text-white font-light pl-2 pr-2">
                        Update
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="bg-red-500 p-1 rounded-lg text-white font-light text-sm pl-2 pr-2 hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default InventoryShow;
