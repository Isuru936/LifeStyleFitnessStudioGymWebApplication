import { BrowserRouter, Routes, Route } from "react-router-dom";
import DietPlan from "./pages/DietPlanPool";
import AssignDietPlan from "./pages/AssignDietPlan";
import SideBar from "./components/SideBar";
import AddFood from "./pages/AddFood";
import ShowDietPlan from "./pages/user/ShowDietPlan";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DietPlan />} />
          <Route path="/assign-diet-plan" element={<AssignDietPlan />} />
          <Route path="/sidebar" element={<SideBar />} />
          <Route path="/add-food" element={<AddFood />} />
          <Route path="/client/show-diet-plan" element={<ShowDietPlan />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
