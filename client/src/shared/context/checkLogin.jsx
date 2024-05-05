import { Navigate } from "react-router-dom";
import React, { useContext } from "react";
import { AuthContext } from "../context/auth.context";

const CheckLogin = ({ children }) => {
  const { isLoggedIn } = useContext(AuthContext);
  console.log(isLoggedIn);
  return (
    <div>
      {isLoggedIn ? <Navigate to="/user-view-diet-plans" replace /> : children}
    </div>
  );
};

export default CheckLogin;
