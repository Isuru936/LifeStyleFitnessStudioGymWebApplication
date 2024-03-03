// UserExercises.jsx
import React, { useState } from 'react';
import NavigationBar from '../components/UserNavbar';
import CopyrightBar from '../components/copyrightbar';

function UserExercises() {
  const exercises = [
    { name: "Exercise 1", reps: "10", sets: "3", weight: "50kg" },
    { name: "Exercise 2", reps: "8", sets: "4", weight: "60kg" },
    { name: "Exercise 3", reps: "12", sets: "3", weight: "55kg" }
  ]; // Example exercises data with reps, sets, and weight

  const [checkedItems, setCheckedItems] = useState(new Array(exercises.length).fill(false));

  const handleCheckboxChange = (index) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);
  };

  return (
    <div>
      <NavigationBar /> {/* Include the NavigationBar component */}
      <div className="container mx-auto flex flex-col justify-between min-h-screen">
        <div>
          <h1 className="text-3xl font-bold text-center mr-4">Your Workout</h1> {/* Adjusted heading size and alignment */}
          <p className="text-lg text-center my-5">Exercises</p> {/* Adjusted paragraph size and alignment */}
          
          {/* To-Do List */}
          <div className="flex flex-col items-center justify-center w-full max-w-xl mx-auto"> {/* Adjusted width and centered horizontally */}
            {exercises.map((exercise, index) => (
              <div key={index} className={`w-full bg-gray-200 bg-opacity-30 backdrop-blur-md rounded-md p-4 mb-4 flex justify-between items-center ${checkedItems[index] ? 'line-through' : ''}`}>
                <div className="flex items-center">
                  <p className="text-lg mr-2">{exercise.name}</p>
                  <span className="text-gray-500 text-sm mr-2">Reps: {exercise.reps}</span>
                  <span className="text-gray-500 text-sm mr-2">Sets: {exercise.sets}</span>
                  <span className="text-gray-500 text-sm">Weight: {exercise.weight}</span>
                </div>
                <input 
                  type="checkbox" 
                  checked={checkedItems[index]} 
                  onChange={() => handleCheckboxChange(index)} 
                  className="form-checkbox h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" 
                />
              </div>
            ))}
          </div>
        </div>
        
        <CopyrightBar /> {/* Place the CopyrightBar component at the bottom */}
        
      </div>
    </div>
  );
}

export default UserExercises;
