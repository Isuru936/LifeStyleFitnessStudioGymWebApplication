import React, { useState, useEffect } from "react";
import axios from "axios";
import SideBar from "../../components/SideBar";
import DietPlanUserView from "../../components/DietPlanUserView";
import logo from "../../assets/Logo.png";
import backgroundImage from "../../assets/bg-Img.png";
import { Icon } from "@iconify/react";
import trashAlt from "@iconify-icons/fa-solid/trash-alt";
import editIcon from "@iconify-icons/fa-solid/edit";
import { Link } from "react-router-dom";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";

function WorkoutPool() {
  const [workoutCategories, setWorkoutCategories] = useState([]);
  const [workoutsByCategory, setWorkoutsByCategory] = useState({});
  const [selectedWorkouts, setSelectedWorkouts] = useState([]);
  const [error, setError] = useState(null); // State to handle errors
  const [openDropdown, setOpenDropdown] = useState(null); // State to track open dropdown
  const [weightValues, setWeightValues] = useState({}); // State for weight values

  useEffect(() => {
    // Fetch workout categories
    axios
      .get("http://localhost:3000/api/workouts/categories")
      .then((response) => {
        setWorkoutCategories(response.data);
      })
      .catch((error) => {
        console.error("Error fetching workout categories:", error);
        setError("Error fetching workout categories");
      });
  }, []);

  const fetchWorkoutsByCategory = (category) => {
    axios
      .get(`http://localhost:3000/api/workouts/category/${category}`)
      .then((response) => {
        setWorkoutsByCategory((prevState) => ({
          ...prevState,
          [category]: response.data,
        }));
      })
      .catch((error) => {
        console.error(`Error fetching ${category} workouts:`, error);
        setError(`Error fetching ${category} workouts`);
      });
  };

  const handleDropdownChange = (category) => {
    if (!workoutsByCategory[category]) {
      fetchWorkoutsByCategory(category);
    }
    setOpenDropdown(openDropdown === category ? null : category); // Toggle dropdown
  };

  const handleDeleteWorkout = (category, index) => {
    const workoutId = workoutsByCategory[category][index]._id;
    axios
      .delete(`http://localhost:3000/api/workouts/${workoutId}`)
      .then((response) => {
        // Remove the deleted workout from the state
        const updatedWorkouts = [...workoutsByCategory[category]];
        updatedWorkouts.splice(index, 1);
        setWorkoutsByCategory((prevState) => ({
          ...prevState,
          [category]: updatedWorkouts,
        }));
      })
      .catch((error) => {
        console.error("Error deleting workout:", error);
        setError("Error deleting workout");
      });
  };

  const handleSelectWorkout = (category, index) => {
    const selectedWorkout = workoutsByCategory[category][index];
    const isAlreadySelected = selectedWorkouts.some(
      (workout) => workout._id === selectedWorkout._id
    );
    if (!isAlreadySelected) {
      firebase.storage()
        .refFromURL(selectedWorkout.imageUrl)
        .getDownloadURL()
        .then((imageUrl) => {
          const workoutWithImage = {
            ...selectedWorkout,
            imageUrl: imageUrl,
          };
          setSelectedWorkouts((prevState) => [...prevState, workoutWithImage]);
          setWeightValues((prevState) => ({
            ...prevState,
            [selectedWorkout._id]: "", // Initialize weight value as empty string
          }));
        })
        .catch((error) => {
          console.error("Error fetching workout image from Firebase:", error);
          setError("Error fetching workout image from Firebase");
        });
    } else {
      const updatedWorkouts = selectedWorkouts.filter(
        (workout) => workout._id !== selectedWorkout._id
      );
      setSelectedWorkouts(updatedWorkouts);
      setWeightValues((prevState) => {
        const updatedValues = { ...prevState };
        delete updatedValues[selectedWorkout._id]; // Remove weight value for deselected workout
        return updatedValues;
      });
    }
  };

  const handleRepsSetsChange = (index, field, value) => {
    const updatedWorkouts = [...selectedWorkouts];
    updatedWorkouts[index][field] = value;
    setSelectedWorkouts(updatedWorkouts);
  };

  const handleWeightChange = (workoutId, value) => {
    setWeightValues((prevState) => ({
      ...prevState,
      [workoutId]: value,
    }));
  };

  const handleEditWorkout = (category, index, event) => {
    const workoutId = workoutsByCategory[category][index]._id;
    const editUrl = `http://localhost:5173/editWorkout/${workoutId}`;
    event.preventDefault();
    window.location.href = editUrl;
  };

  return (
    <div
      className="flex flex-row w-screen h-screen relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div>
        <SideBar />
        <DietPlanUserView />
      </div>
      <div className="ml-16 pt-16 flex-grow">
        <div className="container mx-auto">
          <img
            src={logo}
            alt="Logo"
            className="absolute top-0 right-0 h-10 w-auto mt-5 mr-12"
          />
          <h1 className="text-2xl font-bold my-5">Workout Categories</h1>
          <p className="text-gray-600 text-sm">
            Manage workout categories to help users find the workouts they're
            looking for.
          </p>
          <div className="mb-8"></div>
          <h2 className="text-xl font-bold mb-2">Categories</h2>
          <div className="border border-gray-300 rounded-md max-h-52 overflow-y-auto p-2 bg-white">
            {workoutCategories.map((category) => (
              <div key={category} className="ml-5">
                <div className="ml-2">
                  <p
                    className="cursor-pointer"
                    onClick={() => handleDropdownChange(category)}
                  >
                    <Icon
                      icon={
                        openDropdown === category
                          ? "fa-solid:angle-up"
                          : "fa-solid:angle-down"
                      }
                    />
                    {category}
                  </p>
                  {workoutsByCategory[category] && openDropdown === category && (
                    <div className="ml-14">
                      <ul>
                        {workoutsByCategory[category].map((workout, index) => (
                          <li key={index}>
                            <label className="flex items-center space-x-2">
                              <input
                                type="checkbox"
                                className="form-checkbox text-indigo-600"
                                onChange={() =>
                                  handleSelectWorkout(category, index)
                                }
                              />
                              <span>{workout.name}</span>
                              <Icon
                                icon={trashAlt}
                                className="cursor-pointer text-red-500"
                                onClick={() =>
                                  handleDeleteWorkout(category, index)
                                }
                              />
                              <Icon
                                icon={editIcon}
                                className="cursor-pointer text-blue-500"
                                onClick={(event) =>
                                  handleEditWorkout(category, index, event)
                                }
                              />
                            </label>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="text-right py-4 pr-10">
            <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-400">
              Add Categories
            </button>
          </div>
        </div>
      </div>
      <div className="text-right py-20 pr-10 mx-20">
        <h1 className="text-2xl font-bold mx-12">Assigned Workouts</h1>
        <div className="mt-8 bg-white rounded-md p-4 shadow-md overflow-auto border border-gray-300 h-80">
          {selectedWorkouts.map((workout, index) => (
            <div key={index} className="flex items-center mb-4">
              <img
                src={workout.imageUrl}
                alt="Workout"
                className="w-16 h-16 rounded-md mr-4"
              />
              <div>
                <p className="font-semibold mb-2">{workout.name}</p>
                <div className="flex items-center">
                  <input
                    type="number"
                    placeholder="Reps"
                    className="border-b-2 border-gray-300 mr-2 w-16"
                    value={workout.reps || ""}
                    onChange={(e) =>
                      handleRepsSetsChange(index, "reps", e.target.value)
                    }
                  />
                  <input
                    type="number"
                    placeholder="Sets"
                    className="border-b-2 border-gray-300 mr-2 w-16"
                    value={workout.sets || ""}
                    onChange={(e) =>
                      handleRepsSetsChange(index, "sets", e.target.value)
                    }
                  />
                  <input
                    type="number"
                    placeholder="Weight"
                    className="border-b-2 border-gray-300 mr-2 w-16"
                    value={weightValues[workout._id] || ""}
                    onChange={(e) =>
                      handleWeightChange(workout._id, e.target.value)
                    }
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 right-20 bg-white p-4">
        <div className="text-center">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md mr-4 hover:bg-blue-600">
            Assign workout
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            <Link to="/AddWorkout" className="text-white">
              Add a workout
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default WorkoutPool;
