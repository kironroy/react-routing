import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import the CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-link">
        Home
      </Link>     
      <Link to="/contact" className="navbar-link">
        Contact
      </Link>
      <Link to="/artwork" className="navbar-link">
        Artwork
      </Link>
    </nav>
  );
};

export default Navbar;
