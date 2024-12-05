import React from 'react';
import { FaCreditCard, FaMoneyBillWave, FaCarCrash, FaMapMarkedAlt, FaCalculator, FaBell } from 'react-icons/fa'; // Importing relevant icons

const Features = () => {
  return (
    <div className="container text-center mt-5 mb-5">
      {/* Logo Section */}
      <div className="mb-4">
        
        <h2 className="features-title">What Makes Us Different?</h2>
        {/* <p className="features-description">
          Discover how our app simplifies your travel experience with innovative features.
        </p> */}
      </div>

      {/* Features Section */}
      <div className="row">
        {/* Column 1 */}
        <div className="col-md-3 p-4 rounded features-column">
             
        </div>

        {/* Column 2 */}
        <div className="col-md-3 p-4 rounded features-column">
        <ul className="features-list text-start">
            <li><FaCreditCard className="features-icon" /> Easy FAST Tag Recharge</li>
            <li><FaMoneyBillWave className="features-icon" /> Cashless Toll Payments</li>
            <li><FaCarCrash className="features-icon" /> Insurance Renewal in Minutes</li>
          </ul>
        </div>
        <div className="col-md-3 p-4 rounded features-column">
          <ul className="features-list text-start">
            <li><FaMapMarkedAlt className="features-icon" /> Live Tracking and Updates</li>
            <li><FaCalculator className="features-icon" /> Smart Toll Cost Planning</li>
            <li><FaBell className="features-icon" /> Daily Fuel Price Alerts</li>
          </ul>
        </div>
        <div className="col-md-3 p-4 rounded features-column">
         
        </div>
      </div>
    </div>
  );
};

export default Features;
