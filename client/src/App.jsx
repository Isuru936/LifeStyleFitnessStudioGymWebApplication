import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

import UserPool from "./pages/Employee Management/EmployeePool";
import ContactUs from "./pages/Customer Feedback/ContactUs";
import CustomerFeedbacks from "./pages/Customer Feedback/CustomerFeedbacks";

import ViewAllUsers from "./components/ViewAllUsers";

import DietPlan from "./pages/Diet Management/DietPlanPool";
import AssignDietPlan from "./pages/Diet Management/AssignDietPlan";
import ShowDietPlan from "./pages/Diet Management/ShowDietPlan";

import EnterPaymentDetails from "./pages/Payment Management/EnterPaymentDetails";
import AddUsers from "./pages/Employee Management/AddEmployee";
import AddCard from "./pages/Payment Management/AddCard";
import MembershipPlanSelection from "./pages/Payment Management/MembershipPlanSelection";
import PaymentComplete from "./pages/Payment Management/PaymentComplete";
import PaymentReview from "./pages/Payment Management/PaymentReview";
import PaymentDetails from "./pages/Payment Management/PaymentDetails";

import EditWorkout from "./pages/WorkoutManagement/EditWorkout";
import WorkoutPool from "./pages/WorkoutManagement/WorkouPool";
import UserExercises from "./pages/WorkoutManagement/UserExercises";
import AddWorkout from "./pages/WorkoutManagement/AddWorkout";

import PDFGeneration from "./pages/PDF Generation/InsertDataToPDF.jsx";

import InventoryAdd from "./pages/Inventory Management/InventoryAdd";
import InventoryShow from "./pages/Inventory Management/InventoryShow";
import InventoryUpdateDlt from "./pages/Inventory Management/InventoryUpdateDlt";
import CreateNotification from "./pages/Notification Management/CreateMsg";
import NotificationUpdateDelete from "./pages/Notification Management/UpdateDltMsg";
import Notifications from "./pages/Notification Management/Notifications";
import AddFood from "./pages/Diet Management/AddFood";
import ViewPayments from "./pages/Payment Management/ViewPayments";
import Login from "./pages/Profile Management/Login";
import Signup from "./pages/Profile Management/Signup";
import ForgetPassword from "./pages/Profile Management/ForgetPassword";
import NewPassword from "./pages/Profile Management/NewPassword";
import Quiz from "./pages/Profile Management/Quiz";
import UserProfile from "./pages/Profile Management/UserProfile";
import EditProfile from "./pages/Profile Management/EditProfile";
import ChangePassword from "./pages/Profile Management/ChangePassword";
import UpdateFood from "./pages/Diet Management/UpdateFood";
import AddUpdateEmployeeDetails from "./pages/Employee Management/ViewUpdateEmployee";
import AddPaymentAdmin from "./pages/Payment Management/AddPaymentAdmin";
import UpdatePaymentAdmin from "./pages/Payment Management/UpdatePaymentAdmin";
import Scanner from "./pages/Attendance Tracking/QRCodeScanner";
import Test from "./pages/Profile Management/test";
import OTP from "./pages/Profile Management/OTP";
import { AuthProvider } from "./shared/context/auth.context";
import ProtectedRouteCustomer from "./shared/context/PrivateRoute";
import CheckLogin from "./shared/context/checkLogin";
import DashBoard from "./pages/DashBoard.jsx";
import AdminRegistration from "./pages/AdminLogin/AdminReg.jsx";
import AdminLogin from "./pages/AdminLogin/AdminLogin.jsx";
import NotFound404 from "./components/404.jsx";

import SideBar from "./components/SideBar.jsx";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route
            path="/login"
            element={
              <CheckLogin>
                <Login />
              </CheckLogin>
            }
          />
          <Route element={<ProtectedRouteCustomer />}>
            {/* Client Routes */}
            {/* {Isuru} */}
            <Route path="/user-view-diet-plans" element={<ShowDietPlan />} />
            {/* {Vinuka} */}
            {/* TODO code This hadnle backend as well */}
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
            <Route path="/editProfile" element={<EditProfile />} />
            <Route path="/profile" element={<UserProfile />} />
          </Route>
          <Route path="/pdf/:id" element={<PDFGeneration />} />
          <Route path="/test" element={<Test />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/Quiz" element={<Quiz />} />
          <Route path="/otp" element={<OTP />} />
          <Route path="/new-password" element={<NewPassword />} />
          {/* Admin Routes */}
          {/* Isuru */}
          <Route path="/admin-registrations" element={<AdminRegistration />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/diet-plan" element={<DietPlan />} />
          <Route path="/assign-diet-plan/:id" element={<AssignDietPlan />} />
          <Route path="/add-food" element={<AddFood />} />
          <Route path="/update-food/:id" element={<UpdateFood />} />
          <Route path="/QR-CodeScanner" element={<Scanner />} />
          {/* Thamalsha */}
          <Route path="/employee-pool" element={<UserPool />} />
          <Route path="/add-employee" element={<AddUsers />} />
          <Route
            path="/update-employee/:id"
            element={<AddUpdateEmployeeDetails />}
          />
          <Route path="/customer-feedbacks" element={<CustomerFeedbacks />} />
          {/* {Sewmini} */}
          <Route path="/payment-view" element={<ViewPayments />} />
          <Route path="/add-payment/:id" element={<AddPaymentAdmin />} />
          <Route path="/update-payment/:id" element={<UpdatePaymentAdmin />} />
          {/* Shafry */}
          <Route path="/view-all-users" element={<ViewAllUsers />} />
          {/* {Vinuka} */}
          <Route path="/workoutpool/:id" element={<WorkoutPool />} />
          <Route path="/AddWorkout" element={<AddWorkout />} />
          <Route path="/editWorkout/:id" element={<EditWorkout />} />{" "}
          {/* Define route for editing workouts */}
          {/* <Route path="/workoutpool" element={<WorkoutPool />} />
          <Route path="/AddWorkout" element={<AddWorkout />} /> */}
          {/* {Umaya} */}
          <Route path="/add-inventory" element={<InventoryAdd />} />
          <Route path="/show-inventory" element={<InventoryShow />} />
          <Route
            path="/update-inventory/:id"
            element={<InventoryUpdateDlt />}
          />
          <Route path="/create-notification" element={<CreateNotification />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route
            path="/update-notifications"
            element={<NotificationUpdateDelete />}
          />
          <Route path="*" element={<NotFound404 />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
