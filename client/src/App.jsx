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

import Login from "./pages/Profile Management/Login";
import Signup from "./pages/Profile Management/Signup";
import ForgetPassword from "./pages/Profile Management/ForgetPassword";
import NewPassword from "./pages/Profile Management/NewPassword";
import UserProfile from "./pages/Profile Management/UserProfile";
import EditProfile from "./pages/Profile Management/EditProfile";
import Quiz from "./pages/Profile Management/Quiz";
import InventoryAdd from "./pages/Inventory Management/InventoryAdd";
import InventoryShow from "./pages/Inventory Management/InventoryShow";
import InventoryUpdateDlt from "./pages/Inventory Management/InventoryUpdateDlt";
import CreateNotification from "./pages/Notification Management/CreateMsg";
import NotificationUpdateDelete from "./pages/Notification Management/UpdateDltMsg";
import Notifications from "./pages/Notification Management/Notifications";
import AddFood from "./pages/Diet Management/AddFood";
import ViewPayments from "./pages/Payment Management/ViewPayments";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Client Routes */}
          {/* {Isuru} */}
          <Route path="/user-view-diet-plans" element={<ShowDietPlan />} />
          {/* {Vinuka} */}
          <Route path="/contact-us" element={<ContactUs />} />
          {/* Thamalsha */}
          <Route path="/UserExercises" element={<UserExercises />} />
          {/* Sewmini */}
          <Route
            path="/enter-payment-details"
            element={<EnterPaymentDetails />}
          />
          <Route path="/add-card" element={<AddCard />} />
          <Route path="/payment-complete" element={<PaymentComplete />} />
          <Route path="/payment-review" element={<PaymentReview />} />
          <Route path="/payment-details" element={<PaymentDetails />} />
          <Route
            path="/membership-plan"
            element={<MembershipPlanSelection />}
          />
          <Route path="/enter-payment" element={<EnterPaymentDetails />} />
          {/* {Shafry} */}
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/new-password" element={<NewPassword />} />
          <Route path="/Quiz" element={<Quiz />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/editProfile" element={<EditProfile />} />

          {/* Admin Routes */}
          {/* Isuru */}
          <Route path="/" element={<DietPlan />} />
          <Route path="/assign-diet-plan" element={<AssignDietPlan />} />
          <Route path="/add-food" element={<AddFood />} />

          {/* Thamalsha */}
          <Route path="/user-pool" element={<UserPool />} />
          <Route path="/add-user" element={<AddUsers />} />
          <Route path="/update-user" element={<AddUpdateUserDetails />} />
          <Route path="/customer-feedbacks" element={<CustomerFeedbacks />} />
          {/* {Sewmini} */}
          <Route path="/payment-view" element={<ViewPayments />} />
          {/* {Vinuka} */}
          <Route path="/workoutpool" element={<WorkoutPool />} />
          <Route path="/AddWorkout" element={<AddWorkout />} />

          {/* {Umaya} */}
          <Route path="/add-inventory" element={<InventoryAdd />} />
          <Route path="/show-inventory" element={<InventoryShow />} />
          <Route path="/update-inventory" element={<InventoryUpdateDlt />} />

          <Route path="/create-notification" element={<CreateNotification />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route
            path="/update-notifications"
            element={<NotificationUpdateDelete />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
