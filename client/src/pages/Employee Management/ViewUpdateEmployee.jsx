import React, { useEffect, useRef, useState } from "react";
import SideBar from "../../components/SideBar";
import bgImg from "../../assets/bgImg.png";
import logo from "../../assets/Logo.png";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import notify from "../../components/toasts/toastTemplate";
import { ToastContainer, toast } from "react-toastify";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import QRCode from "react-qr-code";
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
import { Icon } from "@iconify/react/dist/iconify.js";

function AddUpdateEmployeeDetails() {
  const fileRef = useRef(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    image: "",
    role: "",
    age: 0,
    telephone: "",
    nic: "",
  });
  console.log("formData", formData);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/employee/getEmployeeById/${id}`
        );
        console.log(response.data);
        setFormData(response.data.data.employee);
      } catch (error) {
        console.log("Error fetching employee.", error);
      }
    };

    fetchEmployee();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(
        `http://localhost:3000/api/employee/updateEmployee/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      notify("success", "", "Employee details updated successfully");
      navigate("/employee-pool");
    } catch (error) {
      console.log("Error updating employee.", error);
      toast.error("Failed to update employee details");
    }
  };

  const handleFileUpload = async (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const storageRef = firebase.storage().ref();
      const fileRef = storageRef.child(selectedFile.name);
      setLoading(true);
      notify("info", "", "Uploading image...");
      try {
        const snapshot = await fileRef.put(selectedFile);
        const url = await snapshot.ref.getDownloadURL();
        setFormData({ ...formData, image: url });
        notify("success", "", "Image uploaded successfully");
      } catch (error) {
        console.error("Error uploading file:", error);
        notify("error", "", "Failed to upload image");
      } finally {
        setLoading(false);
      }
    } else {
      console.log("No file selected");
    }
  };

  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/api/employee/deleteEmployee/${id}`
      );
      console.log(response.data);
      notify("success", "", "Employee deleted successfully");
      navigate("/employee-pool");
    } catch (error) {
      console.log("Error deleting employee.", error);
    }
  };

  const handlePDFDownnload = async () => {
    // Generate PDF content
    const pdfContent = (
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <View style={styles.headerSection}>
              <Image src={logo} style={styles.logo} />
              <Text style={styles.header}>Employee Credentials</Text>
            </View>
            <hr />
            <View style={styles.infoSection}>
              <View style={styles.infoRow}>
                <Text style={styles.label}>Name:</Text>
                <Text style={styles.text}>{formData.name}</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.label}>Email:</Text>
                <Text style={styles.text}>{formData.email}</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.label}>Role:</Text>
                <Text style={styles.text}>{formData.role}</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.label}>Age:</Text>
                <Text style={styles.text}>{formData.age}</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.label}>Telephone:</Text>
                <Text style={styles.text}>{formData.telephone}</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.label}>NIC:</Text>
                <Text style={styles.text}>{formData.nic}</Text>
              </View>
            </View>
          </View>
        </Page>
      </Document>
    );

    // Generate PDF blob
    const blob = await pdf(pdfContent).toBlob();

    // Download PDF
    saveAs(blob, `${formData.name} Employee Details.pdf`);
  };

  return (
    <>
      <div
        className="inline-flex flex-col items-start min-h-screen w-screen bg-cover bg-center bg-no-repeat bg-fixed "
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "auto",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left",
        }}
      >
        <div className="flex flex-col w-full">
          <div className="flex flex-row m-2">
            <div className="flex-col">
              <SideBar />
            </div>
            <div className="p-4 mt-3  w-full ">
              <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold ">User Details</h1>
                <Link to="/diet-plan">
                  <img src={logo} className="w-24 h-12 mr-5" alt="" />
                </Link>
              </div>
              <hr />
              <div className="flex flex-col  justify-center w-full">
                <div className="mx-auto mt-5">
                  <input
                    type="file"
                    name="image"
                    accept="image/*"
                    ref={fileRef}
                    onChange={handleFileUpload}
                    hidden
                    className="outline-none border-2 border-gray-100 rounded-lg p-1 w-fit mt-2"
                  />
                  <img
                    src={formData.image}
                    onClick={() => fileRef.current.click()}
                    alt="profile"
                    className=" w-32  h-32 bg-slate-800 rounded-full hover:scale-105 duration-500 ease-in-out transform mb-2"
                  />
                  <p className="flex flex-row justify-center font-semibold pb-5">
                    {formData.name}
                  </p>
                </div>
                <form className="mx-auto" onSubmit={handleSubmit}>
                  <h1 className="font-bold text-xl mb-2">
                    Account Information
                  </h1>
                  <div className="flex flex-row mb-5 w-fit">
                    <div className="mr-5 w-full">
                      <p className="font-semibold">Full Name</p>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="bg-white p-2 rounded-xl w-96 border outline-none" // Adjusted width
                      />
                    </div>
                    <div className="mr-5 w-full">
                      <p className="font-semibold">Email</p>
                      <input
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        type="text"
                        name="email"
                        value={formData.email}
                        className="bg-white p-2 rounded-xl w-96 border outline-none" // Adjusted width
                      />
                    </div>
                  </div>
                  <div className="flex flex-row mb-5">
                    <div className="mr-5 ">
                      <p className="font-semibold">Role</p>
                      <input
                        type="text"
                        value={formData.role}
                        onChange={(e) =>
                          setFormData({ ...formData, role: e.target.value })
                        }
                        className="bg-white p-2 rounded-xl w-96 border outline-none" // Adjusted width
                      />
                    </div>
                    <div className="mr-5 w-full">
                      <p className="font-semibold">Age</p>
                      <input
                        type="number"
                        value={formData.age}
                        onChange={(e) =>
                          setFormData({ ...formData, age: e.target.value })
                        }
                        className="bg-white p-2 rounded-xl w-96 border outline-none" // Adjusted width
                      />
                    </div>
                  </div>
                  <div className="flex flex-row mb-5">
                    <div className="mr-5 ">
                      <p className="font-semibold">Telephone</p>
                      <input
                        value={formData.telephone}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            telephone: e.target.value,
                          })
                        }
                        type="tel"
                        className="bg-white p-2 rounded-xl w-96 border outline-none" // Adjusted width
                      />
                    </div>
                    <div className="mr-5 w-full">
                      <p className="font-semibold">NIC</p>
                      <input
                        type="text"
                        value={formData.nic}
                        onChange={(e) =>
                          setFormData({ ...formData, nic: e.target.value })
                        }
                        className="bg-white  p-2 rounded-xl w-96 border outline-none" // Adjusted width
                      />
                    </div>
                  </div>

                  <div className="flex gap-4 w-full">
                    <Link to="/employee-pool">
                      <button className="p-4 bg-white rounded-xl text-black border font-bold  hover:bg-slate-100">
                        <Icon icon="ion:chevron-back-circle-sharp" />
                      </button>
                    </Link>
                    <button
                      className="p-3 flex bg-blue-800 rounded-xl items-center align-middle gap-1 text-white font-bold  hover:bg-blue-700"
                      onClick={handleSubmit}
                    >
                      <Icon icon="flowbite:edit-outline" />
                      Update Details
                    </button>
                    <button
                      className="p-3 bg-red-800 rounded-xl text-white font-bold flex align-middle items-center gap-2  hover:bg-red-700"
                      onClick={handleDelete}
                      type="button"
                    >
                      <Icon icon="mdi-light:delete" />
                      Delete Record
                    </button>
                    <Link to={`/pdf/${formData._id}`} target="_blank">
                      <button
                        className="p-3 flex align-middle bg-orange-500 rounded-xl items-center text-white font-bold hover:bg-orange-600 "
                        type="button"
                      >
                        <Icon icon="grommet-icons:qr" className="mr-2" />
                        Download QR Code
                      </button>
                    </Link>
                    <button
                      className="p-3 bg-green-600 rounded-xl flex  align-middle items-center gap-2 text-white font-bold hover:bg-green-700"
                      onClick={handlePDFDownnload}
                      type="none"
                    >
                      <Icon icon="line-md:download-loop" />
                      Download Employee Details
                    </button>
                  </div>
                </form>
                <div className="mx-auto"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
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
  },
  infoSection: {
    marginBottom: 20,
  },
  infoRow: {
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "row",
    marginBottom: 5,
    margin: "10px",
  },
  label: {
    fontWeight: "bold",
    width: 80,
  },
  text: {
    flex: 1,
  },
});

export default AddUpdateEmployeeDetails;
