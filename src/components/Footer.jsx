import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <a href="#" className="logo">
          <img src="images/Logo.png" alt="Logo" />
        </a>
        <ul className="footer-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#destination">Destination</a></li>
          <li><a href="#testimonial">Testimonial</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <p className="copyright">
        © 2024 Salty Adventures. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
