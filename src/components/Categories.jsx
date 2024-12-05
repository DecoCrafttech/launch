import React from "react";
import { FaTruck, FaUserTie, FaExchangeAlt, FaParking, FaGasPump, FaRssSquare } from "react-icons/fa";

const Categories = () => {
  const services = [
    { icon: <FaTruck size={32} />, title: "Load Needs", desc: "Loads for your trucks every day." },
    { icon: <FaTruck size={32} />, title: "Truck Needs", desc: "Trucks when you need them." },
    { icon: <FaUserTie size={32} />, title: "Driver Needs", desc: "Skilled drivers at your service." },
    { icon: <FaExchangeAlt size={32} />, title: "Buy and Sell", desc: "Hassle-free buy and sell of pre-owned trucks." },
    { icon: <FaParking size={32} />, title: "Parking", desc: "Secure parking spaces for your trucks." },
    { icon: <FaGasPump size={32} />, title: "Fuel Stations", desc: "Locate discounted fuel stations nearby." },
    { icon: <FaRssSquare size={32} />, title: "Tracking", desc: "Real-time load tracking and mileage monitoring." },
  ];

  return (
    <section className="categorie ">
      <div className="text mb-5 text-center ">
        <h4>Start Your Journey with Our Services</h4>
      </div>
      <div className="row-items mb-5 ">
        {services.slice(0, 7).map((service, index) => (
          <div className="container-box" key={index}>
            <div className="container-img">{service.icon}</div>
            <div>
            <h4>{service.title}</h4>
              </div>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
      
    </section>
  );
};

export default Categories;
