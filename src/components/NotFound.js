import React from "react";

const NotFound = () => {
  const myStyle = {
    color: "red",
    // backgroundColor: "#DDD",
    padding: "10px",
    fontFamily: "Sans-Serif",
    marginTop: "200px",
    border: "1px solid #edeff0",
  };
  return (
    <div className="container">
      <h1 style={myStyle}>404 error. Sorry! the page is not found.</h1>
    </div>
  );
};

export default NotFound;
