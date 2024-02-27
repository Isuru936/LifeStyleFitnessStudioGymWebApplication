import { BrowserRouter, Routes, Route } from "react-router-dom";
import DietPlan from "./pages/DietPlanPool";
import Home from "./pages/Home";
import AssignDietPlan from "./pages/AssignDietPlan";
import SideBar from "./components/SideBar";
import SIDENAVBAR from "./components/SIDENAVBAR";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/diet-plan" element={<DietPlan />} />
          <Route path="/assign-diet-plan" element={<AssignDietPlan />} />
          <Route path="/sidebar" element={<SideBar />} />
          <Route path="/navBar" element={<SIDENAVBAR />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
