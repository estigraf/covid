import React from "react";
import { Link } from "react-router-dom";

const listStyle = {
  display: "flex",
  justifyContent: "space-around",
  border: "black solid 1px",
  listStyle: "none",
};

const Navbar = () => {
  return (
    <div>
      <ul style={listStyle}>
        <li>
          <Link to="/" state={{ home: "page", age: 14 }}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" state={{ isAbout: true, id: "id str", year: 2022 }}>
            About
          </Link>
        </li>
        <li>
          <Link to="/user/default/default">User</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
