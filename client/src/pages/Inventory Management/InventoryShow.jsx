import React, { useEffect, useState } from "react";
import SideBar from "../../components/SideBar";
import backgroundImage from "../../assets/sim.jpg";
import axios from "axios";
import logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react/dist/iconify.js";
import { saveAs } from "file-saver";
import {
  PDFViewer,
  Document,
  Page,
  pdf,
  Text,
  Image,
  View,
  StyleSheet,
} from "@react-pdf/renderer";

function InventoryShow() {
  const [inventory, setInventory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

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

  const handleSearch = (event) => {
    console.log(event);
    setSearchTerm(event.target.value);
  };

  const filteredInventory = inventory.filter((inventory) =>
    inventory.itemName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handlePDFDownnload = async (id, itemName, status, description) => {
    // Generate PDF content
    const pdfContent = (
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <View style={styles.headerSection}>
              <Image src={logo} style={styles.logo} />
              <Text style={styles.header}>Inventory Data</Text>
            </View>
            <hr />
            <View style={styles.infoSection}>
              <View style={styles.table}>
                <View style={styles.row}>
                  <View style={styles.colLabel}>
                    <Text style={styles.label}>ID:</Text>
                  </View>
                  <View style={styles.colValue}>
                    <Text style={styles.text}>#{id}</Text>
                  </View>
                </View>
                <View style={styles.row}>
                  <View style={styles.colLabel}>
                    <Text style={styles.label}>Item:</Text>
                  </View>
                  <View style={styles.colValue}>
                    <Text style={styles.text}>{itemName}</Text>
                  </View>
                </View>
                <View style={styles.row}>
                  <View style={styles.colLabel}>
                    <Text style={styles.label}>Status:</Text>
                  </View>
                  <View style={styles.colValue}>
                    <Text style={styles.text}>{status}</Text>
                  </View>
                </View>
                <View style={styles.row}>
                  <View style={styles.colLabel}>
                    <Text style={styles.label}>Description:</Text>
                  </View>
                  <View style={styles.colValue}>
                    <Text style={styles.text}>{description}</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </Page>
      </Document>
    );

    // Generate PDF blob
    const blob = await pdf(pdfContent).toBlob();

    // Download PDF
    saveAs(blob, `${itemName} Inventory Data.pdf`);
  };

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
          <div className="mx-auto w-full flex justify-center ">
            <input
              type="text"
              className="border border-1 mt-5 p-2 w-72 outline-none rounded-lg text-black"
              placeholder="Search"
              onChange={handleSearch}
            />
          </div>
          <table className="w-full max-w-7xl mt-2 mx-auto text-black p-3 border-collapse rounded-lg overflow-hidden">
            <thead className="bg-gray-200">
              <tr>
                <th className="border p-2">Item</th>
                <th className="border p-2">Status</th>
                <th className="border p-2">Description</th>
                <th className="border p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredInventory.map((item, index) => (
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

                  <td className=" p-2 flex gap-1 mx-auto">
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
                    <button
                      className="bg-white p-1 rounded-lg border font-light text-sm pl-2 pr-2 hover:bg-red-700"
                      onClick={() => {
                        handlePDFDownnload(
                          item._id,
                          item.itemName,
                          item.status,
                          item.description
                        );
                      }}
                    >
                      <Icon
                        icon="line-md:download-outline-loop"
                        style={{ color: "black", border: "black " }}
                      />
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
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#ffffff",
    padding: 60,
    border: "1px solid #000",
  },
  section: {
    marginBottom: 10,
  },
  headerSection: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 50,
    marginRight: 10,
  },
  header: {
    fontSize: 32,
    fontWeight: "extrabold",
    marginBottom: 10,
  },
  infoSection: {
    marginBottom: 20,
  },
  table: {
    border: "1px solid #000",
  },
  row: {
    flexDirection: "row",
    borderBottom: "1px solid #000",
  },
  colLabel: {
    width: "50%",
    borderRight: "1px solid #000",
    padding: 5,
  },
  colValue: {
    width: "40%",
    padding: 5,
  },
  label: {
    fontWeight: "bold",
  },
  text: {},
});

export default InventoryShow;
