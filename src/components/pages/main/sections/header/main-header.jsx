//CSS
import "./main-header.css";
//Other
import { Link } from "react-router-dom";
import React from "react";
function MainHeader() {
  return (
    <div className="MainHeader">
      <div className="main-container">
        <h1 className="main-title">Coffee is the key to a good day</h1>
        <p className="main-description">
          Coffee is much more than just a beverage to be enjoyed. Ideal for
          starting the day, chatting with friends or just relaxing. Coffee is a
          friend that should always be with us.
        </p>
        <Link to="/menu/all" className="main-button">
          Browse Menu
        </Link>
      </div>
    </div>
  );
}

export default MainHeader;
