//CSS
import "./contact-informations.css";
//Other
import React from "react";

function ContactInformations() {
  return (
    <div className="ContactInformations">
      <img
        src="https://seeklogo.com/images/C/coffee-time-logo-187E7F85DE-seeklogo.com.png"
        alt="Logo"
        loading="lazy"
      />
      <h2>Informations</h2>
      <p>{window.location.hostname}</p>
      <div className="horizontal-rule" />
      <span>You can contact us in writing</span>
      <p>info@coffeact.com</p>
      <div className="horizontal-rule" />
      <span>You can contact us verbally</span>
      <p>(555) 123-4567</p>
      <div className="horizontal-rule" />
      <span>Social medias</span>
      <a href="https://www.google.com/">Instagram</a>
      <a href="https://www.google.com/">Facebook</a>
      <a href="https://www.google.com/">Twitter</a>
      <div className="horizontal-rule" />
      <p>123 Main Street, Downtown, Cityville, USA</p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1731.8192609100508!2d-95.36438284332937!3d29.75917309374112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640bf1121542a99%3A0x63b3d803fbb8368a!2sMain%20Street%20Downtown!5e0!3m2!1str!2str!4v1693823940268!5m2!1str!2str"
        allowfullscreen=""
        loading="lazy"
        title="map"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default ContactInformations;
