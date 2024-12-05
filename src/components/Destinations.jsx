import React from 'react';
import { FaTruck, FaClock, FaDollarSign } from 'react-icons/fa'; // Import Font Awesome icons

const Destinations = () => {
  return (
    <div className=" Container container mb-5 mt-5 p-4 rounded ">
      <div className="row bg-light p-4 rounded h-100">
        {/* Left side - Headline and content */}
        <div className="col-md-6  p-4 h-100 d-flex flex-column justify-content-center ">
          <h2 className="headline mb-3">Facing These Common Trucking Issues?</h2>
          <ul className="content-list ps-4">
            <li><FaTruck className="icon " /> Struggling to find reliable loads daily?</li>
            <li><FaClock className="icon" /> Need trucks on time but can't find any?</li>
            <li><FaDollarSign className="icon" /> Tired of dealing with increasing operational costs?</li>
          </ul>
        </div>

        {/* Right side - Visuals */}
        <div className="col-md-6  p-4 h-100  ">
          <img
            src="https://dmq79vlehx2uk.cloudfront.net/truck-logistics-operations-dusk01.jpg"
            alt="Trucking Operations"
            className=" w-100 h-100 rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default Destinations;
