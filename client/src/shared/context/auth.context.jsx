import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({
  isLoggedIn: false,
  userID: null,
  otp: null,
  login: () => {},
  logout: () => {},
  setOTP: () => {},
  unsetOTP: () => {},
});

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const savedIsLoggedIn = localStorage.getItem("isLoggedIn");
    return savedIsLoggedIn ? JSON.parse(savedIsLoggedIn) : false;
  });

  const [userID, setUserID] = useState(() => {
    const savedCusId = localStorage.getItem("userID");
    return savedCusId ? JSON.parse(savedCusId) : null;
  });
  const [otp, setOtp] = useState(() => {
    const savedotp = localStorage.getItem("otp");
    return savedotp ? JSON.parse(savedotp) : null;
  });

  useEffect(() => {
    localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
    localStorage.setItem("userID", JSON.stringify(userID));
    localStorage.setItem("otp", JSON.stringify(otp));
  }, [isLoggedIn, userID, otp]);

  const login = (userId) => {
    setIsLoggedIn(true);
    setUserID(userId);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserID(null);
  };

  const setOTP = (OTP) => {
    setOtp(OTP);
    setTimeout(() => {
      unsetOTP();
    }, 60000);
  };

  const unsetOTP = () => {
    setOtp(null);
  };
  return (
    <AuthContext.Provider
      value={{ isLoggedIn, userID, otp, login, logout, setOTP, unsetOTP }}
    >
      {children}
    </AuthContext.Provider>
  );
};
