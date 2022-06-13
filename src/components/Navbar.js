import React from "react";
import { Link } from "react-router-dom";

const listStyle = {
  display: "flex",
  justifyContent: "space-around",
  border: "black solid 1px",
};

const Navbar = () => {
  return (
    <div>
      <ul style={listStyle}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        {/* <li><Link to=""></Link></li> */}
      </ul>
    </div>
  );
};

export default Navbar;
