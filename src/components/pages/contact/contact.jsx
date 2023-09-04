import React from "react";
import ContactHeader from "./sections/header/contact-header";
import ContactInformations from "./sections/content/contact-informations";

function Contact() {
  return (
    <div className="Contact">
      <ContactHeader />
      <ContactInformations />
    </div>
  );
}

export default Contact;
