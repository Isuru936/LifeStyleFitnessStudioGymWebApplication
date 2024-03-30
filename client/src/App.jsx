import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgetPassword from "./pages/ForgetPassword";
import NewPassword from "./pages/NewPassword";
import UserProfile from "./pages/UserProfile";
import EditProfile from "./pages/EditProfile";
import Quiz from "./pages/Quiz";
import ChangePassword from "./pages/ChangePassword.jsx";
function App() {
  return (
    <div
      className="text-white h-[100vh] flex justify-center items-center bg-cover"
      style={{ background: "white" }}
    >
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/sign-up" element={<Signup />}></Route>
        <Route path="/forget-password" element={<ForgetPassword />}></Route>
        <Route path="/new-password" element={<NewPassword />}></Route>
        <Route path="/Quiz" element={<Quiz />}></Route>
        <Route path="/profile" element={<UserProfile />}></Route>
        <Route path="/editProfile" element={<EditProfile />}></Route>
        <Route path="/change-password" element={<ChangePassword />}></Route>
      </Routes>
    </div>
  );
}
export default App;
