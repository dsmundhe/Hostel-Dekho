import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css"; // Optional if you want to separate CSS

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleMenu = () => setNavOpen(!navOpen);

  return (
    <div className="navbar-container">
      {/* Top Nav */}
      <div className="navbar flex items-center justify-between px-6 py-4 bg-white shadow-md fixed w-full z-50">
        <div className="logo text-2xl font-bold text-blue-600">
          <Link to="/">HostelDekho</Link>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 items-center font-medium text-gray-700">
          <li className="nav-link"><Link to="/">Home</Link></li>
          <li className="nav-link"><Link to="/hostels">Hostels</Link></li>
          <li className="nav-link"><Link to="/about">About</Link></li>
          <li className="nav-link"><Link to="/contact">Contact</Link></li>
          <li className="text-2xl hover:text-blue-500">
            <Link to="/profile"><CgProfile /></Link>
          </li>
        </ul>

        {/* Hamburger (Mobile) */}
        <div className="md:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
          {navOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`mobile-menu md:hidden fixed top-0 left-0 w-full h-screen bg-white pt-24 transition-transform duration-300 ease-in-out flex flex-col items-center gap-6 text-lg font-medium ${navOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <Link onClick={toggleMenu} to="/" className="mobile-link">Home</Link>
        <Link onClick={toggleMenu} to="/hostels" className="mobile-link">Hostels</Link>
        <Link onClick={toggleMenu} to="/about" className="mobile-link">About</Link>
        <Link onClick={toggleMenu} to="/login" className="mobile-link">Login</Link>
        <Link onClick={toggleMenu} to="/signup" className="mobile-link">Signup</Link>
        <Link onClick={toggleMenu} to="/profile" className="text-3xl text-blue-500"><CgProfile /></Link>
      </div>
    </div>
  );
};

export default Navbar;
