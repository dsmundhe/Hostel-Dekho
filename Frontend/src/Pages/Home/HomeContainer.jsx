import React from "react";
import "./HomeContainer.css";
import {Link} from "react-router"

const HomeContainer = () => {
  return (
    <div className="homebox">
      <h1 className="home-heading">
        Welcome to <span className="highlight">HostelDekho.com</span>
      </h1>
      <div className="home-para">
        <p>
          Discover and book your ideal hostel in seconds! HostelDekho helps you explore
          modern, affordable, and convenient accommodations across various cities.
          Your perfect stay is just a click away.
        </p>
      </div>
      <div className="home-btns">
 <Link to='/login'><button className="btn login-btn">Login</button></Link>
        <Link to='/signup'><button className="btn signup-btn">Signup</button></Link>
      </div>
    </div>
  );
};

export default HomeContainer;
