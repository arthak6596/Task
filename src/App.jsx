import React from "react";
import './index.css';
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Services from "./pages/Services";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import BecomeATaskPerformer from "./pages/BecomeATaskPerformer";
import '@fortawesome/fontawesome-free/css/all.min.css'
function App() {
  return (
    <div className="h-screen">
      <div className=" overflow-y-scroll h-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path='/services' element={<Services />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/forgotpassword' element={<ForgotPassword />} />
          <Route path="/become-a-task-performer" element={<BecomeATaskPerformer />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
