import { BrowserRouter, Routes, Route } from "react-router-dom";
import DietPlan from "./pages/DietPlanPool";
import Home from "./pages/Home";
import AssignDietPlan from "./pages/AssignDietPlan";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/diet-plan" element={<DietPlan />} />
          <Route path="/assign-diet-plan" element={<AssignDietPlan />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
