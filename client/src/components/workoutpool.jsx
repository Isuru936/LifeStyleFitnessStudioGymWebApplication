// WorkoutPool.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

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
    <div className="relative flex">
      <div className="absolute top-0 left-0 w-16 h-16 bg-gray-800 flex items-center justify-center">
        <FontAwesomeIcon icon={faBars} className="text-white text-xl cursor-pointer" />
      </div>
      <div className="ml-16 pt-16 flex-grow">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold my-5">Workout Categories</h1>
          <p className="text-gray-600 text-sm">Manage workout categories to help users find the workouts they're looking for.</p>
          {/* Leave some space */}
          <div className="mb-8"></div>
          {/* Heading for Categories */}
          <h2 className="text-xl font-bold mb-2">Categories</h2>
          {/* Leave some space */}
          <div className="mb-4"></div>
          {/* Arms category */}
          <WorkoutCategory category="Arms" workouts={armsWorkouts} />
          {/* Legs category */}
          <WorkoutCategory category="Legs" workouts={legsWorkouts} />
        </div>
        <div className="text-right py-4 pr-10">
        <button className="bg-gray-400 text-black px-4 py-2 rounded-md hover:bg-gray-500">Add Categories</button>
      </div>
      </div>
      
      <div className="text-right py-20 pr-10 mx-20">
        <h1 className="text-2xl font-bold">Assigned Workouts</h1>
        {/* Additional content for assigned workouts can be added here */}
      </div>
      
    </div>
  );
}

export default WorkoutPool;
