import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faAngleDown,
  faAngleUp,
} from "@fortawesome/free-solid-svg-icons";
import SideBar from "../components/SideBar.jsx";

// Import the workout image from the assets folder
import workoutImage from "../assets/illust58-5797-01.jpg";

function WorkoutCategory({ category, workouts }) {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="ml-5">
      {/* Toggle icon */}
      <div className="ml-2">
        {/* Category text */}
        <p
          className="cursor-pointer"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <FontAwesomeIcon
            icon={showDropdown ? faAngleUp : faAngleDown}
            className="cursor-pointer"
          />{" "}
          {category}
        </p>
        {/* Dropdown content */}
        {showDropdown && (
          <div className="ml-14">
            <ul>
              {workouts.map((workout, index) => (
                <li key={index}>
                  <label className="flex items-center space-x-2">
                    <span>{workout}</span>
                    <input
                      type="checkbox"
                      className="form-checkbox text-indigo-600"
                    />
                  </label>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

function WorkoutPool() {
  const armsWorkouts = ["Arm Workout 1", "Arm Workout 2", "Arm Workout 3"];
  const legsWorkouts = ["Leg Workout 1", "Leg Workout 2", "Leg Workout 3"];

  return (
    <div className=" flex flex-row w-screen h-screen relative">
      {" "}
      {/* Set position to relative */}
      <div className="absolute top-0 left-0 w-16 h-16 bg-gray-800 flex items-center justify-center">
        {/* <FontAwesomeIcon icon={faBars} className="text-white text-xl cursor-pointer" /> */}
        <SideBar />
      </div>
    </div>
  );
}

export default WorkoutPool;
