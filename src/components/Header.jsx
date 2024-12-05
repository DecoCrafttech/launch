import React from "react";

const Header = () => {
  return (
    <header>
      <a href="#" className="logo">
        <img src="images/Logo.png" alt="Logo" />
      </a>
      <ul className="navlist">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#destination">Destination</a></li>
        <li><a href="#testimonial">Testimonial</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="h-right">
        <a href="#" className="h-btn">
          Book Now<img src="images/Vector.png" alt="vector" />
        </a>
        <div className="bx bx-menu" id="menu-icon"></div>
      </div>
    </header>
  );
};

export default Header;
