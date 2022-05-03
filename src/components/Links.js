import React from "react";
import { NavLink } from "react-router-dom";

const navLinkStyles = ({ isActive }) => {
  return {
    fontWeight: isActive ? "bold" : "normal",
    textDecoration: isActive ? "none" : "underline",
    color: isActive ? "red" : "green",
    backgroundColor: "#F0F8FF",
    margin: "20px",
    padding: "10px",
    borderRadius: "6px",
    marginBottom: "30px",
    boxShadow: "1px 2px 3px #DDD",
    fontSize: "20px",
  };
};

const Links = () => {
  return (
    <>
      <h1>Links</h1>
      <NavLink style={navLinkStyles} to="single">
        Single
      </NavLink>

      <NavLink style={navLinkStyles} to="../Blog">
        Blog
      </NavLink>
      <hr />
    </>
  );
};

export default Links;
