import { BrowserRouter, Routes, Route } from "react-router-dom";
import DietPlan from "./pages/DietPlanPool";
import AssignDietPlan from "./pages/AssignDietPlan";
import SideBar from "./components/SideBar";
import AddFood from "./pages/AddFood";
import SamplePage from "./pages/SamplePage";
import WorkoutPool from "./pages/WorkouPool";
import UserExercises from "./pages/UserExercises";
import AddWorkout from "./pages/AddWorkout";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/dietplan" element={<DietPlan />} />
          <Route path="/assign-diet-plan" element={<AssignDietPlan />} />
          <Route path="/sidebar" element={<SideBar />} />
          <Route path="/add-food" element={<AddFood />} />
          <Route path="/sample-page" element={<SamplePage />} />
          <Route path="/user-exercises" element={<UserExercises />} />
          <Route path="/workoutpool" element={<WorkoutPool />} />
          <Route path="/AddWorkout" element={<AddWorkout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
