<<<<<<< HEAD:client/src/pages/WorkoutManagement/WorkouPool.jsx
import React, { useState } from 'react';
import SideBar from '../../components/SideBar';
import DietPlanUserView from '../../components/DietPlanUserView';
import workoutImage from '../../assets/illust58-5797-01.jpg';
import logo from '../../assets/logo.png';
import backgroundImage from '../../assets/bg-Img.png';
import { Icon } from '@iconify/react'; // Importing Iconify

import trashAlt from '@iconify-icons/fa-solid/trash-alt'; // Importing the trash-alt icon from FontAwesome
import editIcon from '@iconify-icons/fa-solid/edit'; // Importing the edit icon from FontAwesome
=======
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faAngleDown,
  faAngleUp,
} from "@fortawesome/free-solid-svg-icons";
import SideBar from "../components/SideBar"; // Import the SideBar component

// Import the workout image from the assets folder
import workoutImage from "../assets/illust58-5797-01.jpg";
import logo from "../assets/logo.png";
import backgroundImage from "../assets/bg-Img.png";
import DietPlanUserView from "../components/DietPlanUserView";
>>>>>>> eaf16ac96010c328902a8e81efc3463dcc09b17f:client/src/pages/WorkouPool.jsx

function WorkoutPool() {
  const [armsDropdown, setArmsDropdown] = useState(false);
  const [legsDropdown, setLegsDropdown] = useState(false);

  const [armsWorkouts, setArmsWorkouts] = useState(["Arm Workout 1", "Arm Workout 2", "Arm Workout 3"]);
  const [legsWorkouts, setLegsWorkouts] = useState(["Leg Workout 1", "Leg Workout 2", "Leg Workout 3"]);

  const toggleArmsDropdown = () => setArmsDropdown(!armsDropdown);
  const toggleLegsDropdown = () => setLegsDropdown(!legsDropdown);

  const handleDeleteWorkout = (workoutType, index) => {
    if (workoutType === 'arms') {
      const updatedWorkouts = [...armsWorkouts];
      updatedWorkouts.splice(index, 1);
      setArmsWorkouts(updatedWorkouts);
    } else {
      const updatedWorkouts = [...legsWorkouts];
      updatedWorkouts.splice(index, 1);
      setLegsWorkouts(updatedWorkouts);
    }
  };

  const handleEditWorkout = (workoutType, index, event) => {
    event.stopPropagation(); // Stop propagation to prevent checkbox from being toggled
    // Redirect to edit page
    // You can use react-router-dom for routing
  };

  return (
<<<<<<< HEAD:client/src/pages/WorkoutManagement/WorkouPool.jsx
    <div className="flex flex-row w-screen h-screen relative" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div><SideBar /><DietPlanUserView/></div> 
      <div className="ml-16 pt-16 flex-grow">
        <div className="container mx-auto">
          <img src={logo} alt="Logo" className="absolute top-0 right-0 h-10 w-auto mt-5 mr-12" />
=======
    <div
      className=" flex flex-row w-screen h-screen relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {" "}
      {/* Set position to relative */}
      {/* Display the SideBar component */}
      <div>
        <SideBar />
        <DietPlanUserView />
      </div>
      <div className="ml-16 pt-16 flex-grow">
        <div className="container mx-auto">
          {/* Logo */}
          <img
            src={logo}
            alt="Logo"
            className="absolute top-0 right-0 h-10 w-auto mt-5 mr-12"
          />
>>>>>>> eaf16ac96010c328902a8e81efc3463dcc09b17f:client/src/pages/WorkouPool.jsx
          <h1 className="text-2xl font-bold my-5">Workout Categories</h1>
          <p className="text-gray-600 text-sm">
            Manage workout categories to help users find the workouts they're
            looking for.
          </p>
          <div className="mb-8"></div>
          <h2 className="text-xl font-bold mb-2">Categories</h2>
          <div className="border border-gray-300 rounded-md max-h-52 overflow-y-auto p-2 bg-white">
            <div className="ml-5">
              <div className="ml-2">
                <p className="cursor-pointer" onClick={toggleArmsDropdown}>
<<<<<<< HEAD:client/src/pages/WorkoutManagement/WorkouPool.jsx
                  <Icon icon="fa-solid:angle-down" />
=======
                  <FontAwesomeIcon
                    icon={armsDropdown ? faAngleUp : faAngleDown}
                    className="cursor-pointer"
                  />{" "}
>>>>>>> eaf16ac96010c328902a8e81efc3463dcc09b17f:client/src/pages/WorkouPool.jsx
                  Arms
                </p>
                {armsDropdown && (
                  <div className="ml-14">
                    <ul>
                      {armsWorkouts.map((workout, index) => (
                        <li key={index}>
                          <label className="flex items-center space-x-2">
                            <span>{workout}</span>
<<<<<<< HEAD:client/src/pages/WorkoutManagement/WorkouPool.jsx
                            <Icon icon={trashAlt} className="cursor-pointer text-red-500" onClick={() => handleDeleteWorkout('arms', index)} />
                            <Icon icon={editIcon} className="cursor-pointer text-blue-500" onClick={(event) => handleEditWorkout('arms', index, event)} />
                            <input type="checkbox" className="form-checkbox text-indigo-600" />
=======
                            <input
                              type="checkbox"
                              className="form-checkbox text-indigo-600"
                            />
>>>>>>> eaf16ac96010c328902a8e81efc3463dcc09b17f:client/src/pages/WorkouPool.jsx
                          </label>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
            <div className="ml-5">
              <div className="ml-2">
                <p className="cursor-pointer" onClick={toggleLegsDropdown}>
<<<<<<< HEAD:client/src/pages/WorkoutManagement/WorkouPool.jsx
                  <Icon icon="fa-solid:angle-down" />
=======
                  <FontAwesomeIcon
                    icon={legsDropdown ? faAngleUp : faAngleDown}
                    className="cursor-pointer"
                  />{" "}
>>>>>>> eaf16ac96010c328902a8e81efc3463dcc09b17f:client/src/pages/WorkouPool.jsx
                  Legs
                </p>
                {legsDropdown && (
                  <div className="ml-14">
                    <ul>
                      {legsWorkouts.map((workout, index) => (
                        <li key={index}>
                          <label className="flex items-center space-x-2">
                            <span>{workout}</span>
<<<<<<< HEAD:client/src/pages/WorkoutManagement/WorkouPool.jsx
                            <Icon icon={trashAlt} className="cursor-pointer text-red-500" onClick={() => handleDeleteWorkout('legs', index)} />
                            <Icon icon={editIcon} className="cursor-pointer text-blue-500" onClick={(event) => handleEditWorkout('legs', index, event)} />
                            <input type="checkbox" className="form-checkbox text-indigo-600" />
=======
                            <input
                              type="checkbox"
                              className="form-checkbox text-indigo-600"
                            />
>>>>>>> eaf16ac96010c328902a8e81efc3463dcc09b17f:client/src/pages/WorkouPool.jsx
                          </label>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
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
<<<<<<< HEAD:client/src/pages/WorkoutManagement/WorkouPool.jsx
          <div>
            <div> <p className="font-semibold mb-3 mx-12">Workout Name</p>
            <img src={workoutImage} alt="Workout" className="w-16 h-16 rounded-md mr-10" />
            </div>
            <div>
              
=======
          {" "}
          {/* Added overflow-auto, border, and h-80 classes */}
          <div>
            <img
              src={workoutImage}
              alt="Workout"
              className="w-16 h-16 rounded-md mr-4"
            />
            <div>
              <p className="font-semibold mb-4 mx-12">Workout Name</p>
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Reps"
                  className="border-b-2 border-gray-300 mr-2 w-16"
                />
                <input
                  type="text"
                  placeholder="Sets"
                  className="border-b-2 border-gray-300 mr-2 w-16"
                />
                <input
                  type="text"
                  placeholder="Weight"
                  className="border-b-2 border-gray-300 w-16"
                />
              </div>
            </div>
          </div>
          <div>
            <img
              src={workoutImage}
              alt="Workout"
              className="w-16 h-16 rounded-md mr-4"
            />
            <div>
              <p className="font-semibold mb-5 mx-12">Workout Name</p>
>>>>>>> eaf16ac96010c328902a8e81efc3463dcc09b17f:client/src/pages/WorkouPool.jsx
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Reps"
                  className="border-b-2 border-gray-300 mr-2 w-16"
                />
                <input
                  type="text"
                  placeholder="Sets"
                  className="border-b-2 border-gray-300 mr-2 w-16"
                />
                <input
                  type="text"
                  placeholder="Weight"
                  className="border-b-2 border-gray-300 w-16"
                />
              </div>
            </div>
          </div>
          {/* More workout items */}
        </div>
<<<<<<< HEAD:client/src/pages/WorkoutManagement/WorkouPool.jsx
      </div>
      <div className="absolute bottom-0 right-20 bg-white p-4">
        <div className="text-center">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md mr-4 hover:bg-blue-600">Add a workout</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Assign Workout</button>
        </div>
      </div>
=======

        {/* Move the Assign Workout button to the right bottom corner */}
      </div>
      <div className="absolute bottom-0 right-20 bg-white p-4">
        <div className="text-center">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md mr-4 hover:bg-blue-600">
            Add a workout
          </button>{" "}
          {/* Added margin-right */}
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Assign Workout
          </button>
        </div>
      </div>
      {/* Render the CopyrightBar component */}
>>>>>>> eaf16ac96010c328902a8e81efc3463dcc09b17f:client/src/pages/WorkouPool.jsx
    </div>
  );
}

export default WorkoutPool;
