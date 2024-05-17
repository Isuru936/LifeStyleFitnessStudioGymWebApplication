import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({
  isLoggedIn: false,
  userID: null,
  otp: null,
  login: () => {},
  logout: () => {},
  SetOTP: () => {}
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

  const [otp, setOtp] = useState(null);
  const [otpExpiry, setOtpExpiry] = useState(null);

  useEffect(() => {
    localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
    localStorage.setItem("userID", JSON.stringify(userID));
  }, [isLoggedIn, userID]);

  const login = (userId) => {
    setIsLoggedIn(true);
    setUserID(userId);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserID(null);
  };

  const SetOTP = (Otp, duration = (300000/2)) => {
    setOtp(Otp);
    const expiryTime = Date.now() + duration;
    setOtpExpiry(expiryTime);

    setTimeout(() => {
      setOtp(null);
      setOtpExpiry(null);
    }, duration);
  }


  return (
    <AuthContext.Provider
      value={{ isLoggedIn, userID, otp , otpExpiry ,login, logout , SetOTP }}
    >
      {children}
    </AuthContext.Provider>
  );
};