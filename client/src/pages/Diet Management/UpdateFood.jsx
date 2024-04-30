import SideBar from "../../components/SideBar";
import bgImg from "../../assets/bg-Img.png";
import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import notify from "../../components/toasts/toastTemplate";
import firebase from "firebase/compat/app";
import { ToastContainer } from "react-toastify";

function UpdateFood() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const [food, setFood] = useState({
    name: "",
    calories: "",
    protein: "",
    carbs: "",
    fat: "",
    imageData: "",
  });

  useEffect(() => {
    try {
      const fetchFoodItem = async () => {
        const response = await axios.get(
          `http://localhost:3000/api/food/getFoodById/${id}`
        );
        setFood(response.data.data.food);
        console.log(response.data.data.food);
      };

      fetchFoodItem();
    } catch (error) {
      console.error("Error fetching food item:", error);
    }
  }, [id]);

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
        setFood({ ...food, imageData: url });
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

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(
        `http://localhost:3000/api/food/updateFood/${id}`,
        food
      );
      notify("success", "", "Food updated successfully");
      navigate("/diet-plan");
    } catch (error) {
      console.error("Error updating food:", error);
      notify("error", "", "Failed to update food");
    }
  };

  console.log(id);
  return (
    <div
      className="flex flex-row w-screen h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="flex flex-row m-0 w-full">
        <div>
          {" "}
          <SideBar />
        </div>
        <div className="mx-auto">
          <div className="flex flex-col ">
            <div className=" m-32 lg:m-5 w-fit border-2 pt-11 pb-11 pr-5 pl-5 bg-gray-50 h-full rounded-xl">
              <div className="text-black">
                <h1 className="font-bold  text-5xl">Update Food</h1>
              </div>
              <hr className="mb-2 mt-2" />
              <div className=" flex flex-row justify-center">
                <div className=" flex flex-col">
                  <div className="text-black">
                    <p className="text-blue-900">
                      Enter the Food Details and the nutrient levels of them.
                    </p>
                  </div>
                  <img src={food.imageData} className="w-64 mx-auto" alt="" />
                  <form onSubmit={handleUpdate} className="mt-5 text-xl ">
                    <p className="font-semibold">Food Name</p>
                    <input
                      type="text"
                      placeholder="E.g. Chicken Breast"
                      className="outline-none border-2 border-gray-100 rounded-lg p-1 w-full mt-2"
                      value={food.name || ""}
                      onChange={(e) =>
                        setFood({ ...food, name: e.target.value })
                      }
                    />
                    <div className="flex flex-row">
                      <div className=" flex flex-col">
                        <p className="font-semibold">Calories</p>
                        <input
                          type="number"
                          placeholder="E.g. 100"
                          className="outline-none border-2 border-gray-100 rounded-lg p-1 w-fit mt-2"
                          value={food.calories || ""}
                          onChange={(e) =>
                            setFood({ ...food, calories: e.target.value })
                          }
                        />
                      </div>
                      <div className=" flex flex-col mr-3 ml-3">
                        <p className="font-semibold">Proteins (g)</p>
                        <input
                          type="number"
                          placeholder="E.g. 100"
                          className="outline-none border-2 border-gray-100 rounded-lg p-1 w-fit mt-2"
                          value={food.protein || ""}
                          onChange={(e) =>
                            setFood({ ...food, protein: e.target.value })
                          }
                          name="protein"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row">
                      <div className=" flex flex-col">
                        <p className="font-semibold">Carbs (g)</p>
                        <input
                          type="number"
                          placeholder="E.g. 100"
                          className="outline-none border-2 border-gray-100 rounded-lg p-1 w-fit mt-2"
                          value={food.carbs || ""}
                          onChange={(e) =>
                            setFood({ ...food, carbs: e.target.value })
                          }
                        />
                      </div>
                      <div className=" flex flex-col mr-3 ml-3">
                        <p className="font-semibold">Fats (g)</p>
                        <input
                          type="number"
                          placeholder="E.g. 100"
                          className="outline-none border-2 border-gray-100 rounded-lg p-1 w-fit mt-2"
                          value={food.fat || ""}
                          onChange={(e) =>
                            setFood({ ...food, fats: e.target.value })
                          }
                        />
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold">Upload Image</p>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileUpload}
                        className="outline-none border-2 border-gray-100 rounded-lg p-1 w-fit mt-2"
                      />
                    </div>
                    {
                      <button
                        className="mt-5 bg-green-600 p-2 w-full rounded-xl hover:bg-green-500 transition"
                        type="success"
                      >
                        Update
                      </button>
                    }
                    <Link to="/diet-plan">
                      <button className="mt-5 bg-blue-600 p-2 w-full rounded-xl hover:bg-blue-500 transition">
                        Back
                      </button>
                    </Link>
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

export default UpdateFood;
