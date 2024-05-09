import React, { createContext, useState } from "react";

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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userID, setUserID] = useState(null);
  const [otp, setOtp] = useState(null);

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
    }, 60000); // OTP validity for 1 minute
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
