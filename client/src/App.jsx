import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import UserDetails from "./pages/ViewUpdateUsers";
import UserPool from "./pages/UserPool";
import ContactUs from "./pages/ContactUs";
import CustomerFeedbacks from "./pages/CustomerFeedbacks";
import DietPlan from "./pages/DietPlanPool";
import AssignDietPlan from "./pages/AssignDietPlan";
import EnterPaymentDetails from "./pages/EnterPaymentDetails";
import AddUpdateUserDetails from "./pages/ViewUpdateUsers";
import ShowDietPlan from "./pages/user/ShowDietPlan";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserDetails />} />
          <Route path="/user-pool" element={<UserPool />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route
            path="/update-user-details"
            element={<AddUpdateUserDetails />}
          />

          <Route path="/customer-feedbacks" element={<CustomerFeedbacks />} />
          <Route path="/diet-pool" element={<DietPlan />} />
          <Route path="/assign-diet-plan" element={<AssignDietPlan />} />
          <Route path="/user-view-diet-plans" element={<ShowDietPlan />} />
          <Route
            path="/enter-payment-details"
            element={<EnterPaymentDetails />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
