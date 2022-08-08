import React from "react";
import { Link } from "react-router-dom";

import './MyNavBar.css';

function MyNavBar() {
  return (
    <nav className="sticky-nav navbar navbar-expand-lg navbar-light bg-light" >
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active navbar-brand">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item active navbar-brand">
            <Link to="/About">About</Link>
          </li>
          <li className="nav-item active navbar-brand">
            <Link to="/Forecast">Forecast</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default MyNavBar;