import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import UserDetails from "./pages/ViewUpdateUsers";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
