import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login&Signup/Login"
import Signup from "./Pages/Login&Signup/Signup"
import AboutPage from "./Pages/About/AboutPage";
import Contact from "./Pages/Contact/Contact"
const App = () => {
  return (
    <div className="h-bg-dark-400">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
