import { BrowserRouter, Routes, Route } from "react-router-dom";
import DietPlan from "./pages/DietPlanPool";
import AssignDietPlan from "./pages/AssignDietPlan";

import SideBar from "./components/SideBar";
import WorkoutPool from "./pages/WorkoutManagement/WorkouPool";
import UserExercises from "./pages/WorkoutManagement/UserExercises";
import AddWorkout from "./pages/WorkoutManagement/AddWorkout";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
         
          <Route path="/sidebar" element={<SideBar />} />

         
          
          <Route path="/UserExercises" element={<UserExercises/>} />
          <Route path="/workoutpool" element={<WorkoutPool/>} />
          <Route path="/AddWorkout" element={<AddWorkout/>} />
          

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
