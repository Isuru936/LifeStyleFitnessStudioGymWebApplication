
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DietPlan from "./pages/DietPlanPool";
import Home from "./pages/Home";
import AssignDietPlan from "./pages/AssignDietPlan";
import SideBar from "./components/SideBar";
import AddFood from "./pages/AddFood";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DietPlan />} />
          <Route path="/assign-diet-plan" element={<AssignDietPlan />} />
          <Route path="/sidebar" element={<SideBar />} />
          <Route path="/add-food" element={<AddFood />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
