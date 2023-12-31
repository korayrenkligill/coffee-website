//CSS
import "./footer.css";
//Other
import { Link } from "react-router-dom";
import React from "react";

function Footer() {
  return (
    <div className="Footer">
      <div className="footer-top">
        <div>
          <h3>Navigations</h3>
          <Link to="/">Home</Link>
          <Link to="/menu/all">Menu</Link>
          <Link to="/about-us">About us</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div>
          <h3>Contact</h3>
          <p>123 Main Street, Downtown, Cityville, USA</p>
          <p>(555) 123-4567</p>
          <p>info@coffeact.com</p>
        </div>
        <div>
          <h3>Social Medias</h3>
          <p>Instagram</p>
          <p>Facebook</p>
          <p>Twitter</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; 2023{" "}
          <a href="https://www.korayrenkligil.com" target="blank">
            Koray Renkligil.
          </a>{" "}
          All rights reserved. Unauthorized use of product information and
          images use is prohibited.
        </p>
      </div>
    </div>
  );
}

export default Footer;
