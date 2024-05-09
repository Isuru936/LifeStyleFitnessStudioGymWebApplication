import { Navigate, Outlet } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/auth.context";
import axios from "axios";

const ProtectedRouteClient = () => {
  const { isLoggedIn, userID , otpVerified } = useContext(AuthContext);
  const [quizDone, setQuizDone] = useState(false);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchQuizStatus = async () => {
      try {
        if (isLoggedIn && userID) {
          const response = await axios.get(`http://localhost:3000/api/users/${userID}`);
          console.log("API response:", response.data);
          setQuizDone(response.data.quiz);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false); 
      }
    };

    fetchQuizStatus();
  }, [isLoggedIn, userID]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (isLoggedIn) {
    if (quizDone) {
      return <Outlet />;
    } else {
      return <Navigate to="/quiz" replace />;
    }
  } else {
    return <Navigate to="/login" replace />;
  }
};

export default ProtectedRouteClient;
