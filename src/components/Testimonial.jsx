import React from "react";

const TruckRevolution = () => {
  return (
    <div className="truck-revolution  mt-5 p-4 ">
      <div className="container">
        <div className="row justify-content-center align-items-center gap-5">
          {/* Left Side Content */}
          <div className="col-lg-5 col-md-12 text-center text-lg-start">
            <h1 className="headline text-danger fw-bold">
              Don’t Miss the Revolution in Trucking!
            </h1>
            <h3 className="subheadline text-secondary my-3">
              Be the First to Experience Simple, Reliable, and Smart Solutions.
            </h3>
            <p className="description text-muted">
              Join thousands of truckers now transforming the way they manage
              loads, track operations, and save costs. From finding the right
              trucks to fuel discounts, we’ve got everything you need to drive
              your business forward today.
            </p>
            <button className="btn btn-danger cta-button px-4 py-2 mt-3">
              Experience It First!
            </button>
          </div>

          {/* Right Side Form */}
          <div className="col-lg-5 footerbg col-md-12">
            <h2 className="form text-white fw-bold mt-3 px-2 mb-4">
              Get Early Access to Your All-in-One Trucking Solution!
            </h2>
            <form className="access-form">
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="whatsapp" className="form-label">
                    WhatsApp Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="whatsapp"
                    placeholder="Enter your WhatsApp number"
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email address"
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="business-type" className="form-label">
                    Business Type
                  </label>
                  <select className="form-select" id="business-type" required>
                    <option value="" disabled selected>
                      Select your business type
                    </option>
                    <option value="fleet-owner">Fleet Owner</option>
                    <option value="truck-operator">Truck Operator</option>
                    <option value="driver">Driver</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="col-12 mb-3">
                  <label htmlFor="location" className="form-label">
                    Location
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="location"
                    placeholder="Enter your location or select from dropdown"
                    required
                  />
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-dark w-100 py-2">
                    Notify Me on Launch
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TruckRevolution;
