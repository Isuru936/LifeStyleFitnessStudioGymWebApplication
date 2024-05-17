import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

import firebase from "firebase/compat/app";
import "firebase/compat/storage";

import axios from "axios";
import SideBar from "../../components/SideBar";
import DropDownNavBar from "../../components/DropDownNavBar";
import bgImg from "../../assets/bg-Img.png";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import notify from "../../components/toasts/toastTemplate";
import { Icon } from "@iconify/react/dist/iconify.js";

function AddFood() {
  const fileRef = useRef(null);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    calories: 0,
    protein: 0,
    carbs: 0,
    fat: 0,
    imageData:
      "https://firebasestorage.googleapis.com/v0/b/lsfs-1a314.appspot.com/o/asad.jpeg?alt=media&token=2941c385-0a75-4722-adec-fe18d0fcf1ed",
  });
  const [loading, setLoading] = useState(false);

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
        setFormData({ ...formData, imageData: url });
        notify("success", "", "Image uploaded successfully");
      } catch (error) {
        console.error("Error uploading file:", error);
        alert("Failed to upload file. Please try again.");
      } finally {
        setLoading(false);
      }
    } else {
      console.log("No file selected");
    }
  };

  const handleNotify = () => {
    notify("warn", "", "New food Item Added !");
  };

  useEffect(() => {
    if (localStorage.getItem("adminLogin") === null) {
      navigate("/admin-login");
    }

    console.log("FormData updated:", formData);
  }, [formData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/food/addFood",
        formData,
        {
          headers: {
            "Content-Type": "application/json", // Ensure that the Content-Type header is set to JSON
          },
        }
      );
      console.log("Response:", response);
      clearForm();
      notify("success", "token-branded:gymnet", "New food Item Added !");
    } catch (error) {
      console.error("Error adding food:", error);
      notify("error", "", "Whoops!! 🥲 Error adding food");
    }
  };

  const clearForm = () => {
    setFormData({
      name: "",
      calories: "",
      protein: "",
      carbs: "",
      fat: "",
      imageData:
        "https://firebasestorage.googleapis.com/v0/b/lsfs-1a314.appspot.com/o/asad.jpeg?alt=media&token=2941c385-0a75-4722-adec-fe18d0fcf1ed",
    });
  };

  const mobileView = window.innerWidth < 768;

  return (
    <div
      className="flex flex-row w-screen h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="flex flex-row m-0 w-full">
        <div>{mobileView ? <DropDownNavBar /> : <SideBar />}</div>
        <div className="mx-auto">
          <div className="flex flex-col ">
            <div className="m-32 lg:m-5 w-fit border-2 pt-11 pb-11 pr-5 pl-5 bg-gray-50 h-full rounded-xl">
              <div className="text-black">
                <h1 className="font-bold text-5xl">Add New Food</h1>
              </div>
              <hr className="mb-2 mt-2" />
              <div className="flex flex-row">
                <div className="text-black w-full flex flex-col ">
                  <p className="text-blue-900 ">
                    Enter the Food Details and the nutrient levels of them.
                  </p>
                  <input
                    type="file"
                    name="imageData"
                    accept="image/*"
                    hidden
                    ref={fileRef}
                    onChange={handleFileUpload}
                    className="outline-none border-2 border-gray-100 rounded-lg p-1 w-fit mt-2"
                  />
                  <img
                    onClick={() => fileRef.current.click()}
                    src={formData.imageData}
                    className="w-48 h-48 mx-auto hover:scale-110 transition duration-500 ease-in-out rounded-xl mt-5"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex flex-row justify-center">
                <div className="flex flex-row justify-center">
                  <form onSubmit={handleSubmit} className="mt-5 text-xl">
                    <p className="font-semibold">Food Name</p>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="E.g. Chicken Breast"
                      className="outline-none border-2 border-gray-100 rounded-lg p-1 w-full mt-2"
                    />
                    <div className="flex flex-row">
                      <div className="flex flex-col">
                        <p className="font-semibold">Calories</p>
                        <input
                          type="number"
                          name="calories"
                          value={formData.calories}
                          placeholder="E.g. 100"
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              calories: e.target.value,
                            })
                          }
                          className="outline-none border-2 border-gray-100 rounded-lg p-1 w-fit mt-2"
                        />
                      </div>
                      <div className="flex flex-col mr-3 ml-3">
                        <p className="font-semibold">Proteins (g)</p>
                        <input
                          type="number"
                          name="protein"
                          value={formData.protein}
                          placeholder="E.g. 100"
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              protein: e.target.value,
                            })
                          }
                          className="outline-none border-2 border-gray-100 rounded-lg p-1 w-fit mt-2"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row">
                      <div className="flex flex-col">
                        <p className="font-semibold">Carbs (g)</p>
                        <input
                          type="number"
                          name="carbs"
                          value={formData.carbs}
                          placeholder="E.g. 100"
                          onChange={(e) =>
                            setFormData({ ...formData, carbs: e.target.value })
                          }
                          className="outline-none border-2 border-gray-100 rounded-lg p-1 w-fit mt-2"
                        />
                      </div>
                      <div className="flex flex-col mr-3 ml-3">
                        <p className="font-semibold">Fats (g)</p>
                        <input
                          type="number"
                          name="fat"
                          value={formData.fat}
                          placeholder="E.g. 100"
                          onChange={(e) =>
                            setFormData({ ...formData, fat: e.target.value })
                          }
                          className="outline-none border-2 border-gray-100 rounded-lg p-1 w-fit mt-2"
                        />
                      </div>
                    </div>
                    <div className="flex flex-auto gap-4">
                      <Link to="/diet-plan">
                        <button className="mt-5 bg-blue-600 p-2 w-full rounded-xl hover:bg-blue-500 p-3 transition relative">
                          <Icon
                            icon="ion:caret-back-circle"
                            className="text-white"
                          />
                        </button>
                      </Link>
                      <button
                        type="submit"
                        className="mt-5 bg-green-600 p-2 w-full rounded-xl hover:bg-green-500 transition"
                        disabled={loading}
                      >
                        {loading ? (
                          <div className="flex justify-center">
                            <div className="animate-spin rounded-full h-fit w-fit border-t-2 border-b-2 border-white">
                              <Icon
                                icon="line-md:loading-loop"
                                className="text-white"
                              />
                            </div>
                          </div>
                        ) : (
                          <p className="text-white font-bold">Save</p>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default AddFood;
