import React, { useState } from 'react';
import NavigationBar from '../components/UserNavbar';
import CopyrightBar from '../components/CopyrightBar';
import backgroundImage from '../assets/bg-Img.png';
"./styles/UserExersisesstyles.css";

function UserExercises() {
  const exercises = [
    { name: "Exercise 1", reps: "10", sets: "3", weight: "50kg" },
    { name: "Exercise 2", reps: "8", sets: "4", weight: "60kg" },
    { name: "Exercise 3", reps: "12", sets: "3", weight: "55kg" }
  ];

  const [checkedItems, setCheckedItems] = useState(new Array(exercises.length).fill(false));

  const handleCheckboxChange = (index) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);

    // Move the checked item to the bottom of the array
    const checkedItem = exercises[index];
    exercises.splice(index, 1);
    exercises.push(checkedItem);
  };

  return (
    <div className="relative bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <NavigationBar />
      <div className="container mx-auto flex flex-col min-h-screen">
        <div className="flex-grow">
          <h1 className="text-3xl font-bold text-center mt-8 mb-4">Your Workout</h1>
          <p className="text-lg text-center mb-4">Exercises</p>
          
          <div className="max-w-md mx-auto">
            {exercises.map((exercise, index) => (
              <div key={index} className={`exercise-item bg-orange-100 bg-opacity-30 backdrop-blur-md rounded-md p-4 mb-4 transition ${checkedItems[index] ? 'line-through flipped' : ''}`}>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-lg mb-1">{exercise.name}</p>
                    <p className="text-sm text-gray-500">Reps: {exercise.reps}, Sets: {exercise.sets}, Weight: {exercise.weight}</p>
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
            ))}
          </div>
        </div>
        
        <div className="flex justify-center mb-8"> {/* Adjust margin bottom as needed */}
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Done</button>
        </div>
        
        <CopyrightBar />
        
      </div>
    </div>
  );
}

export default UserExercises;
