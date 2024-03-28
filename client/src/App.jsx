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
import AddUsers from "./pages/AddUser";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Client */}
          {/* Thamalsha */}
          <Route path="/contact-us" element={<ContactUs />} />
          {/* Admin */}
          {/* {Isuru} */}
          <Route path="/" element={<DietPlan />} />
          <Route path="/assign-diet-plan" element={<AssignDietPlan />} />
          <Route path="/user-view-diet-plans" element={<ShowDietPlan />} />
          {/* {Thamalsha} */}
          <Route path="/user-pool" element={<UserPool />} />
          <Route path="/add-user" element={<AddUsers />} />
          <Route path="/update-user" element={<AddUpdateUserDetails />} />
          <Route path="/customer-feedbacks" element={<CustomerFeedbacks />} />
          {/* {Sewmini} */}
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
