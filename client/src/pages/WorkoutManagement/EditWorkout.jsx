import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import bgImg from "../../assets/bg-Img.png";
import SideBar from "../../components/SideBar";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import firebase from "firebase/compat/app";
import "firebase/compat/storage";

function EditWorkout() {
  const { id } = useParams(); // Get the workout ID from URL params
  const [workout, setWorkout] = useState({
    name: "",
    description: "",
    imageUrl: "",
    category: "",
    reps: "",
    sets: ""
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true); // State to track loading status

  const storage = firebase.storage(); // Access the storage object from the imported firebase object

  useEffect(() => {
    // Fetch workout details when component mounts
    axios.get(`http://localhost:3000/api/workouts/${id}`)
      .then(response => {
        setWorkout(response.data);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch(error => {
        console.error('Error fetching workout details:', error);
        setLoading(false); // Set loading to false in case of error
      });
  }, [id]);

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    const storageRef = storage.ref();
    const imageRef = storageRef.child(`workoutImages/${Date.now()}`);
    await imageRef.put(file);
    const url = await imageRef.getDownloadURL();
    setWorkout(prevState => ({
      ...prevState,
      imageUrl: url
    }));
  };

  const handleCategoryChange = (event) => {
    setWorkout(prevState => ({
      ...prevState,
      category: event.target.value
    }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Upload new image to Firebase Storage if a new image is selected
      if (workout.imageUrl.startsWith("data:")) {
        const file = event.target.querySelector('input[type="file"]').files[0];
        const storageRef = storage.ref();
        const imageRef = storageRef.child(`workoutImages/${Date.now()}`);
        await imageRef.put(file);
        const url = await imageRef.getDownloadURL();
        console.log('New Firebase URL:', url); // Log the new Firebase URL
        setWorkout(prevState => ({
          ...prevState,
          imageUrl: url
        }));
      }
  
      // Update workout details (including image URL) in MongoDB
      const response = await axios.put(`http://localhost:3000/api/workouts/${id}`, workout);
      console.log('Workout updated successfully:', response.data);
      toast.success("Workout updated successfully!");
    } catch (error) {
      console.error('Error updating workout:', error);
      setError(error.message || "Error updating workout.");
      toast.error("Error updating workout.");
    }
  };
  
  if (loading) {
    return <div>Loading...</div>;
  }

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
        <div className="flex flex-col justify-center">
          <div className="m-32 lg:m-5 border-2 pt-8 pb-8 pr-5 pl-5 bg-gray-50 rounded-xl relative text-center">
            <div className="text-black">
              <h1 className="font-bold text-4xl lg:text-5xl mb-4">
                Update the workout details
              </h1>
              <hr className="mb-2 mt-2" />
              <div className="flex items-center justify-center"> {/* Add this container div */}
                <img 
                  src={workout.imageUrl} 
                  alt="Workout" 
                  style={{ 
                    width: "200px", // Set a fixed width for the image
                    height: "200px", // Set a fixed height for the image to make it square
                    objectFit: "cover", // Maintain aspect ratio by cropping if needed
                    borderRadius: "8px" // Add border radius for rounded corners
                  }} 
                />
              </div>
            </div>
            
            {error && <div className="text-red-500">{error}</div>}
            <div className="flex flex-row justify-center">
              <div className="flex flex-col w-full">
                <form onSubmit={handleSubmit} className="mt-5 text-base lg:text-xl">
                  <div className="mb-4 lg:mb-6">
                    <p className="font-semibold text-sm lg:text-base mb-1">
                      Workout name
                    </p>
                    <input
                      type="text"
                      placeholder="E.g. Bicep curl"
                      className="outline-none border-2 border-gray-100 rounded-lg p-2 w-full lg:w-96 mt-2 text-sm lg:text-base"
                      value={workout.name}
                      onChange={(e) => setWorkout(prevState => ({
                        ...prevState,
                        name: e.target.value
                      }))}
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
                      value={workout.description}
                      onChange={(e) => setWorkout(prevState => ({
                        ...prevState,
                        description: e.target.value
                      }))}
                    />
                  </div>
                  <div className="mb-4 lg:mb-6">
                    <p className="font-semibold mb-1 text-sm lg:text-base">
                      Workout Category
                    </p>
                    <select
                      value={workout.category}
                      onChange={handleCategoryChange}
                      className="outline-none border-2 border-gray-100 rounded-lg p-2 w-full lg:w-96 mt-2 text-sm lg:text-base"
                    >
                      <option value="">Select category...</option>
                      <option value="Cardio">Cardio</option>
                      <option value="Strength Training">Strength Training</option>
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
                  <button type="submit" className="mt-5 bg-orange-500 text-white p-2 w-full rounded-xl hover:bg-orange-600 transition text-sm lg:text-base">
                    Update
                  </button>
                  <Link to="/">
                    <button className="mt-5 bg-blue-600 text-white p-2 w-full rounded-xl hover:bg-blue-700 transition text-sm lg:text-base">
                      Cancel
                    </button>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditWorkout;
