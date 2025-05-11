import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleMenu = () => {
    setNavOpen(!navOpen);
  };

  return (
    <div>
      <div className="navbar flex items-center justify-between bg-gray-100 p-4">
        {/* Logo */}
        <div className="logo">
          <h1 className="text-xl font-bold">Logo!</h1>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex">
          <ul className="flex items-center justify-center gap-8 text-base font-medium">
            <li className="hover:text-blue-500">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-blue-500">
              <Link to="/">Hostels</Link>
            </li>
            <li className="hover:text-blue-500">
              <Link to="/">About</Link>
            </li>
            <li className="hover:text-blue-500">
              <Link to="/">Login</Link>
            </li>
            <li className="hover:text-blue-500">
              <Link to="/">Signup</Link>
            </li>
            <li className="hover:text-blue-500 text-2xl text-blue-400">
              <Link to="/" className="flex items-center">
                <CgProfile />
              </Link>
            </li>
          </ul>
        </nav>

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden z-50" onClick={toggleMenu}>
          {navOpen ? (
            <FaTimes className="text-2xl cursor-pointer" />
          ) : (
            <FaBars className="text-2xl cursor-pointer" />
          )}
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full mt-5 bg-white text-black flex flex-col justify-center items-center gap-6 text-lg transition-transform duration-400 ${
          navOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Link onClick={toggleMenu} to="/" className="hover:text-blue-500">
          Home
        </Link>
        <Link onClick={toggleMenu} to="/" className="hover:text-blue-500">
          Hostels
        </Link>
        <Link onClick={toggleMenu} to="/" className="hover:text-blue-500">
          About
        </Link>
        <Link onClick={toggleMenu} to="/" className="hover:text-blue-500">
          Login
        </Link>
        <Link onClick={toggleMenu} to="/" className="hover:text-blue-500">
          Signup
        </Link>
        <Link onClick={toggleMenu} to="/" className="text-3xl text-blue-400">
          <CgProfile />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
