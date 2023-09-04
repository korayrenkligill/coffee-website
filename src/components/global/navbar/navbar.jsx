//CSS
import "./navbar.css";

//Other
import React, { useState } from "react";
import { SiCoffeescript } from "react-icons/si";
import { BiMenu } from "react-icons/bi";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [mobileNavbarIsOpen, setMobileNavbarIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <div className={`mobile-navbar ${mobileNavbarIsOpen ? "open" : "close"}`}>
        <p className="navbar-logo">
          <SiCoffeescript className="navbar-logo-icon" /> Coffeact
        </p>
        <button
          onClick={() => {
            setMobileNavbarIsOpen(!mobileNavbarIsOpen);
          }}
        >
          <BiMenu className="icon" />
        </button>
      </div>
      <div className={`navbar-links ${mobileNavbarIsOpen ? "open" : "close"}`}>
        <NavLink
          to="/"
          onClick={() => {
            setMobileNavbarIsOpen(false);
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/menu/all"
          onClick={() => {
            setMobileNavbarIsOpen(false);
          }}
        >
          Menu
        </NavLink>
        <NavLink
          to="/about-us"
          onClick={() => {
            setMobileNavbarIsOpen(false);
          }}
        >
          About Us
        </NavLink>
        <NavLink
          to="/contact"
          onClick={() => {
            setMobileNavbarIsOpen(false);
          }}
        >
          Contact
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
