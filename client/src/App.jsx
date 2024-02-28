import { BrowserRouter, Routes, Route } from "react-router-dom";
import DietPlan from "./pages/DietPlanPool";
import Home from "./pages/Home";
import AssignDietPlan from "./pages/AssignDietPlan";
import SideBar from "./components/SideBar";
import AddFood from "./pages/AddFood";
import SamplePage from "./pages/SamplePage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DietPlan />} />
          <Route path="/assign-diet-plan" element={<AssignDietPlan />} />
          <Route path="/sidebar" element={<SideBar />} />
          <Route path="/add-food" element={<AddFood />} />
          <Route path="/sample-page" element={<SamplePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
