import React, { useState, useEffect } from "react";
import bgImg from "../../assets/bg-Img.png";
import SideBar from "../../components/SideBar";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddWorkout() {
  const [workoutName, setWorkoutName] = useState("");
  const [workoutDescription, setWorkoutDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [category, setCategory] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // Loading state
  const storage = firebase.storage();

  useEffect(() => {
    if (localStorage.getItem("adminLogin") === null) {
      navigate("/admin-login");
    }

    console.log("Updated imageUrl:", imageUrl);
  }, [imageUrl]);

  const handleFileUpload = async (event) => {
    try {
      const file = event.target.files[0];
      const storageRef = storage.ref();
      const imageRef = storageRef.child(`workoutImages/${Date.now()}`);
      await imageRef.put(file);
      const url = await imageRef.getDownloadURL();
      console.log("Firebase image URL:", url);
      setImageUrl(url); // Set the imageUrl state
    } catch (error) {
      console.error("Error uploading image:", error);
      setError("Error uploading image.");
    }
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check if any field is empty
    if (!workoutName || !workoutDescription || !imageUrl || !category) {
      setError("Please fill in all fields."); // Set error message
      return; // Don't proceed further
    }

    setLoading(true); // Set loading to true when submitting
    try {
      const requestBody = {
        name: workoutName,
        description: workoutDescription,
        imageUrl: imageUrl,
        category: category,
      };
      console.log("Request body:", requestBody);
      const response = await fetch("http://localhost:3000/api/workouts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Failed to save workout.");
      }
      console.log("Response from backend:", data);
      toast.success("Workout saved successfully");
      setWorkoutName("");
      setWorkoutDescription("");
      setImageUrl("");
      setCategory("");
      setError(""); // Reset error state
    } catch (error) {
      console.error("Error saving workout:", error.message);
      setError(error.message || "Error saving workout.");
      toast.error(error.message || "Error saving workout.");
    } finally {
      setLoading(false); // Set loading to false after submission
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <ToastContainer />
      <div className="flex flex-row m-2 w-full justify-center">
        <div className="flex-col">
          <SideBar />
        </div>
        <div className="mx-auto w-3/4 flex justify-center">
          <div className="flex flex-col">
            <div className="m-32 lg:m-5 w-fit border-2 pt-8 pb-8 pr-5 pl-5 bg-gray-50 h-full rounded-xl">
              <div className="text-black">
                <h1 className="font-bold text-4xl lg:text-5xl">
                  Add a new workout
                </h1>
              </div>
              <hr className="mb-2 mt-2" />
              {error && <div className="text-red-500">{error}</div>}
              <div className="flex flex-row justify-center">
                <div className="flex flex-col w-full">
                  <div className="text-black">
                    <p className="text-sm lg:text-base text-blue-900">
                      Enter the workout details
                    </p>
                  </div>
                  <form
                    onSubmit={handleSubmit}
                    className="mt-5 text-base lg:text-xl"
                  >
                    <div className="mb-4 lg:mb-6">
                      <p className="font-semibold text-sm lg:text-base mb-1">
                        Workout name
                      </p>
                      <input
                        type="text"
                        placeholder="E.g. Bicep curl"
                        className="outline-none border-2 border-gray-100 rounded-lg p-2 w-full lg:w-96 mt-2 text-sm lg:text-base"
                        value={workoutName}
                        onChange={(e) => setWorkoutName(e.target.value)}
                      />
                    </div>
                    <div className="mb-4 lg:mb-6">
                      <p className="font-semibold mb-1 text-sm lg:text-base">
                        Workout Description
                      </p>
                      <textarea
                        placeholder="Describe your workout here..."
                        className="outline-none border-2 border-gray-100 rounded-lg p-2 w-full lg:w-96 mt-2 text-sm lg:text-base resize-y"
                        rows="5"
                        value={workoutDescription}
                        onChange={(e) => setWorkoutDescription(e.target.value)}
                      />
                    </div>
                    <div className="mb-4 lg:mb-6">
                      <p className="font-semibold mb-1 text-sm lg:text-base">
                        Workout Category
                      </p>
                      <select
                        value={category}
                        onChange={handleCategoryChange}
                        className="outline-none border-2 border-gray-100 rounded-lg p-2 w-full lg:w-96 mt-2 text-sm lg:text-base"
                      >
                        <option value="">Select category...</option>
                        <option value="Cardio">Cardio</option>
                        <option value="Strength Training">
                          Strength Training
                        </option>
                        <option value="Flexibility">Flexibility</option>
                        <option value="arms">arms</option>
                        <option value="legs">legs</option>
                        <option value="chest">upper body</option>
                        <option value="weigth loss">weight loss</option>
                        <option value="back">back</option>
                        <option value="abs">abs</option>
                        {/* Add more options as needed */}
                      </select>
                    </div>
                    <div className="mt-2 flex items-center">
                      <label
                        htmlFor="file-upload"
                        className="font-semibold cursor-pointer text-sm lg:text-base text-blue-600 flex items-center"
                      >
                        Choose an image
                      </label>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileUpload}
                        id="file-upload"
                        className="hidden"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={!imageUrl || loading} // Disable button when imageUrl is empty or loading is true
                      className="mt-5 bg-orange-500 text-white p-2 w-full rounded-xl hover:bg-orange-600 transition text-sm lg:text-base"
                    >
                      {loading ? "Saving..." : "Save"}{" "}
                      {/* Button text changes based on loading state */}
                    </button>

                    <Link to="/">
                      <button className="mt-5 bg-blue-600 text-white p-2 w-full rounded-xl hover:bg-blue-700 transition text-sm lg:text-base">
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
    </div>
  );
}

export default AddWorkout;
