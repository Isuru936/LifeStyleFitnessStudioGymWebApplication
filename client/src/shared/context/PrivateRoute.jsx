import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

const ProtectedRouteClient = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return <div>{isLoggedIn ? <Outlet/> : <Navigate to="/login" replace />}</div>;
};

export default ProtectedRouteClient;
