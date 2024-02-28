import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

// Import the workout image from the assets folder
import workoutImage from '../assets/illust58-5797-01.jpg';

function WorkoutCategory({ category, workouts }) {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="ml-5">
      {/* Toggle icon */}
      <div className="ml-2">
        {/* Category text */}
        <p className="cursor-pointer" onClick={() => setShowDropdown(!showDropdown)}>
          <FontAwesomeIcon
            icon={showDropdown ? faAngleUp : faAngleDown}
            className="cursor-pointer"
          /> {category}
        </p>
        {/* Dropdown content */}
        {showDropdown && (
          <div className='ml-14'>
            <ul>
              {workouts.map((workout, index) => (
                <li key={index}>
                  <label className="flex items-center space-x-2">
                    <span>{workout}</span>
                    <input type="checkbox" className="form-checkbox text-indigo-600" />
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
    <div className=" flex flex-row w-screen h-screen relative"> {/* Set position to relative */}
      <div className="absolute top-0 left-0 w-16 h-16 bg-gray-800 flex items-center justify-center">
        <FontAwesomeIcon icon={faBars} className="text-white text-xl cursor-pointer" />
      </div>
      <div className="ml-16 pt-16 flex-grow">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold my-5">Workout Categories</h1>
          <p className="text-gray-600 text-sm">Manage workout categories to help users find the workouts they're looking for.</p>
          <div className="mb-8"></div>
          <h2 className="text-xl font-bold mb-2">Categories</h2>
          <div className="border border-gray-300 rounded-md max-h-52 overflow-y-auto p-2">
            <WorkoutCategory category="Arms" workouts={armsWorkouts} />
            <WorkoutCategory category="Legs" workouts={legsWorkouts} />
          </div>
          <div className="text-right py-4 pr-10">
            <button className="bg-gray-400 text-black px-4 py-2 rounded-md hover:bg-gray-500">Add Categories</button>
          </div>
        </div>
      </div>
      <div className="text-right py-20 pr-10 mx-20">
        <h1 className="text-2xl font-bold mx-12">Assigned Workouts</h1>
        <div className="mt-8 bg-white rounded-md p-4 shadow-md overflow-auto border border-gray-300 h-80"> {/* Added overflow-auto, border, and h-80 classes */}
          <div>
            <img src={workoutImage} alt="Workout" className="w-16 h-16 rounded-md mr-4" />
            <div>
              <p className="font-semibold mb-4 mx-12">Workout Name</p>
              <div className="flex items-center">
                <input type="text" placeholder="Reps" className="border-b-2 border-gray-300 mr-2 w-16" />
                <input type="text" placeholder="Sets" className="border-b-2 border-gray-300 mr-2 w-16" />
                <input type="text" placeholder="Weight" className="border-b-2 border-gray-300 w-16" />
              </div>
            </div>
          </div>
          <div>
            <img src={workoutImage} alt="Workout" className="w-16 h-16 rounded-md mr-0" />
            <div>
              <p className="font-semibold mb-5 mx-12">Workout Name</p>
              <div className="flex items-center">
                <input type="text" placeholder="Reps" className="border-b-2 border-gray-300 mr-2 w-16" />
                <input type="text" placeholder="Sets" className="border-b-2 border-gray-300 mr-2 w-16" />
                <input type="text" placeholder="Weight" className="border-b-2 border-gray-300 w-16" />
              </div>
            </div>
          </div>
        </div>
        {/* Move the Assign Workout button to the right bottom corner */}
        <div className="absolute bottom-0 right-20 bg-white p-4">
          <div className="text-center">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Assign Workout</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkoutPool;
