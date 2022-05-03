import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
      color: isActive ? "red" : "green",
      backgroundColor: "#F0FFF",
      margin: "20px",
      padding: "10px",
      borderRadius: "6px",
      marginBottom: "30px",
      boxShadow: "1px 2px 3px #DDD",
    };
  };

  return (
    <nav className="primary-nav">
      <NavLink style={navLinkStyles} to="/">
        Home
      </NavLink>
      <NavLink style={navLinkStyles} to="/users">
        Users
      </NavLink>
      <NavLink style={navLinkStyles} to="/about">
        About
      </NavLink>
      <NavLink style={navLinkStyles} to="/contact">
        Contact
      </NavLink>
    </nav>
  );
};

export default Navbar;
