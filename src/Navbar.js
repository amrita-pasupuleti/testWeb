import React from "react";
import { Link } from "react-router-dom";
import logo from "./mainpfp.png";

function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} height={50} width={50} alt="logo" />
      <ul className="navlinks">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/pages/Hackathon">Hackathon Projects</Link>
        </li>
        <li>
          <Link to="/pages/Fff">Facts Message Board</Link>
        </li>
        <li>
          <Link to="/pages/Clicker">Other Projects</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
