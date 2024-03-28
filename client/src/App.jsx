import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import UserDetails from "./pages/ViewUpdateUsers";
import UserPool from "./pages/UserPool";
import ContactUs from "./pages/ContactUs";
import CustomerFeedbacks from "./pages/CustomerFeedbacks";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserDetails />} />
          <Route path="/user-pool" element={<UserPool />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/customer-feedbacks" element={<CustomerFeedbacks />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
