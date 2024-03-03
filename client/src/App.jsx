<<<<<<< HEAD
import SamplePage from "./pages/SamplePage.jsx"
=======
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DietPlan from "./pages/DietPlanPool";
import AssignDietPlan from "./pages/AssignDietPlan";
import SideBar from "./components/SideBar";
import AddFood from "./pages/AddFood";
import ShowDietPlan from "./pages/user/ShowDietPlan";
>>>>>>> a4a6f596ba681e83ee2b3d384fa10def48d278a5

function App() {
  return (
    <div>
<<<<<<< HEAD
      <SamplePage />
=======
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DietPlan />} />
          <Route path="/assign-diet-plan" element={<AssignDietPlan />} />
          <Route path="/sidebar" element={<SideBar />} />
          <Route path="/add-food" element={<AddFood />} />
          <Route path="/client/show-diet-plan" element={<ShowDietPlan />} />
        </Routes>
      </BrowserRouter>
>>>>>>> a4a6f596ba681e83ee2b3d384fa10def48d278a5
    </div>
  );
}

export default App;
