import { Navigate } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/auth.context";
import axios from "axios";

const CheckLogin = ({ children }) => {
  const { isLoggedIn, userID } = useContext(AuthContext);
  const [quizDone, setQuizDone] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuizStatus = async () => {
      try {
        console.log("fetching user");
        if (userID) {
          const response = await axios.get(
            `http://localhost:3000/api/users/${userID}`
          );
          console.log("User fetched");
          console.log(response.data.quiz);
          setQuizDone(response.data.quiz);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuizStatus();
  }, [userID]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (isLoggedIn) {
    return quizDone ? (
      <Navigate to="/user-view-diet-plans" replace />
    ) : (
      <Navigate to="/quiz" replace />
    );
  } else {
    return <>{children}</>;
  }
};

export default CheckLogin;
