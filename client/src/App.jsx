import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import UserPool from "./pages/User Management/UserPool";
import ContactUs from "./pages/Customer Feedback/ContactUs";
import CustomerFeedbacks from "./pages/Customer Feedback/CustomerFeedbacks";
import DietPlan from "./pages/Diet Management/DietPlanPool";
import AssignDietPlan from "./pages/Diet Management/AssignDietPlan";
import EnterPaymentDetails from "./pages/Payment Management/EnterPaymentDetails";
import AddUpdateUserDetails from "./pages/User Management/ViewUpdateUsers";
import ShowDietPlan from "./pages/Diet Management/ShowDietPlan";
import AddUsers from "./pages/User Management/AddUser";
import AddCard from "./pages/Payment Management/AddCard";
import MembershipPlanSelection from "./pages/Payment Management/MembershipPlanSelection";
import PaymentComplete from "./pages/Payment Management/PaymentComplete";
import PaymentReview from "./pages/Payment Management/PaymentReview";
import PaymentDetails from "./pages/Payment Management/PaymentDetails";

import WorkoutPool from "./pages/WorkoutManagement/WorkouPool";
import UserExercises from "./pages/WorkoutManagement/UserExercises";
import AddWorkout from "./pages/WorkoutManagement/AddWorkout";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Client Routes */}
          {/* Thamalsha */}
          <Route path="/contact-us" element={<ContactUs />} />
          {/* Sewmini */}
          <Route path="/add-card" element={<AddCard />} />
          <Route path="/payment-complete" element={<PaymentComplete />} />
          <Route path="/payment-review" element={<PaymentReview />} />
          <Route path="/payment-details" element={<PaymentDetails />} />
          <Route
            path="/membership-plan"
            element={<MembershipPlanSelection />}
          />
          <Route path="/enter-payment" element={<EnterPaymentDetails />} />
          {/* Admin Routes */}
          {/* Isuru */}
          <Route path="/user-view-diet-plans" element={<ShowDietPlan />} />
          {/* Admin */}
          <Route path="/assign-diet-plan" element={<AssignDietPlan />} />
          {/* Thamalsha */}
          <Route path="/user-pool" element={<UserPool />} />
          <Route path="/add-user" element={<AddUsers />} />
          <Route path="/update-user" element={<AddUpdateUserDetails />} />
          <Route path="/customer-feedbacks" element={<CustomerFeedbacks />} />
          {/* {Sewmini} */}
          <Route
            path="/enter-payment-details"
            element={<EnterPaymentDetails />}
          />
          {/* {Vinuka} */}
          <Route path="/UserExercises" element={<UserExercises />} />
          <Route path="/workoutpool" element={<WorkoutPool />} />
          <Route path="/AddWorkout" element={<AddWorkout />} />

          {/* Sewmini */}
          <Route path="/" element={<DietPlan />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
