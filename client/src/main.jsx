import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ToastContainer from "./shared/toast/ToastContainer.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <ToastContainer />
  </React.StrictMode>
);
