import React, { useState, useEffect, useRef } from "react";
import NavigationBar from "../../components/UserNavbar";
import backgroundImage from "../../assets/bg-Img.png";
import axios from "axios";
import { FaExclamationCircle } from "react-icons/fa";
import "./UserExercises.css";

function UserExercises() {
  const [exercises, setExercises] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);
  const [showDescriptionIndex, setShowDescriptionIndex] = useState(-1);
  const [showDescriptionModal, setShowDescriptionModal] = useState(false);
  const [descriptionModalContent, setDescriptionModalContent] = useState("");
  const descriptionRef = useRef(null);

  useEffect(() => {
    const userId = localStorage.getItem("userID");
    console.log("userid is", userId);
    if (userId) {
      const userIdWithoutQuotes = userId.replace(/"/g, "");
      console.log("useridwithoutquotes is", userIdWithoutQuotes);
      axios
        .get(
          `http://localhost:3000/api/bioData/bioDataById/${userIdWithoutQuotes}`
        )
        .then((response) => {
          const userData = response.data.data;
          console.log("this is the users data", userData);
          const workoutPlan = userData.bioData.workoutplan;
          console.log("workoutPlan:", workoutPlan); // Check if the workout plan is retrieved

          // Sort workouts according to category
          const sortedExercises = [...workoutPlan].sort((a, b) => {
            const categoryA = a.category.toLowerCase();
            const categoryB = b.category.toLowerCase();
            if (categoryA < categoryB) {
              return -1;
            }
            if (categoryA > categoryB) {
              return 1;
            }
            return 0;
          });

          setExercises(sortedExercises);
          setCheckedItems(new Array(workoutPlan.length).fill(false));
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    }
  }, []);

  const handleCheckboxChange = (index) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);
  };

  const handleExclamationClick = (index) => {
    setShowDescriptionIndex(index === showDescriptionIndex ? -1 : index);
    if (index !== showDescriptionIndex) {
      setDescriptionModalContent(exercises[index].description);
      setShowDescriptionModal(true);
    } else {
      setShowDescriptionModal(false);
    }
  };

  const handleBackButtonClick = () => {
    window.history.back();
  };

  const handleClickOutsideDescription = (event) => {
    if (descriptionRef.current && !descriptionRef.current.contains(event.target)) {
      setShowDescriptionModal(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideDescription);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideDescription);
    };
  }, []);

  return (
    <div
      className="relative bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <NavigationBar />
      <div className="container mx-auto flex flex-col min-h-screen">
        <div className="flex-grow">
          <h1 className="text-3xl font-bold text-center mt-8 mb-4">
            Your Workout
          </h1>
          <p className="text-lg text-center mb-4">Exercises</p>
  
          <div className="max-w-md mx-auto">
            {exercises.length === 0 ? (
              <p className="text-xl text-center">No workouts have been assigned yet.</p>
            ) : (
              Object.entries(
                exercises.reduce((acc, exercise, index) => {
                  if (!acc[exercise.category]) {
                    acc[exercise.category] = [];
                  }
                  acc[exercise.category].push(
                    <div
                      key={index}
                      className={`exercise-item bg-orange-100 bg-opacity-30 backdrop-blur-md rounded-md p-4 mb-4 transition ${
                        checkedItems[index] ? "line-through flipped" : ""
                      }`}
                    >
                      <div className="flex justify-between items-center relative exercise-hover">
                        <div>
                          <img
                            src={exercise.imageUrl}
                            alt="Workout"
                            className="w-16 h-16 rounded-md mr-4 relative z-10"
                          />
                          <div className="flex items-center">
                            <p className="text-lg mb-1">{exercise.name}</p>
                            <FaExclamationCircle
                              className="ml-2 cursor-pointer"
                              onClick={() => handleExclamationClick(index)}
                            />
                            {showDescriptionIndex === index && (
                              <div ref={descriptionRef} className="description">
                                <p className="text-sm text-gray-500 ml-1">{exercise.description}</p>
                              </div>
                            )}
                          </div>
                          <p className="text-sm text-gray-500">
                            Reps: {exercise.reps}, Sets: {exercise.sets}, Weight:{" "}
                            {exercise.weight} kg
                          </p>
                        </div>
                        <label className="checkbox-container">
                          <input
                            type="checkbox"
                            checked={checkedItems[index]}
                            onChange={() => handleCheckboxChange(index)}
                            className="form-checkbox h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                          />
                          <span className="checkmark"></span>
                        </label>
                      </div>
                    </div>
                  );
                  return acc;
                }, {})
              ).map(([category, exercises]) => (
                <div key={category}>
                  <h2 className="text-xl font-semibold mt-4 mb-2">{category}</h2>
                  {exercises}
                </div>
              ))
            )}
          </div>
        </div>
        <div className="flex justify-center mb-8">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            onClick={handleBackButtonClick}
          >
            Back
          </button>
        </div>
      </div>
      {showDescriptionModal && (
        <div className="description-modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowDescriptionModal(false)}>
              &times;
            </span>
            <p>{descriptionModalContent}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserExercises;


