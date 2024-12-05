// import React from "react";
import { FaTruck, FaUserAlt, FaMapMarkerAlt, FaDollarSign, FaClipboardList } from "react-icons/fa"; // Importing relevant icons from react-icons
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    whatsapp_no: "",
    email: "",
    biggest_challenge: "",
    prefered_service: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Prepare the required fields and filter out unnecessary ones
    const payload = {
      full_name: formData.name || "",
      whatsapp_no: formData.whatsapp || "",
      email: formData.email || "",
      biggest_challenge: formData.challenge || "",
      prefered_service: formData.service || "",
    };
  
    // Validate required fields
    if (!payload.full_name || !payload.whatsapp_no || !payload.email) {
      toast.error("Please fill out all required fields: Name, WhatsApp Number, and Email.");
      return;
    }
  
    try {
      const response = await fetch("https://truck.truckmessage.com/header_form_entry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
  
      if (response.ok) {
        toast.success("Form submitted successfully!");
        setFormData({
          full_name: "",
          whatsapp_no: "",
          email: "",
          biggest_challenge: "",
          prefered_service: "",
        }); // Reset form
      } else {
        toast.error("Failed to submit the form. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      toast.error("An error occurred. Please try again.");
    }
  };
  

  return (
    <section className="home-section py-5 px-2">
      <div className="container mt-4">
        <div className="row">
          <h1 className="fw-bold head-card">Trucking Just Got Smarter</h1>
          <p className="mt-3 text-white">
            Say Goodbye to Trucking Challenges - Find Loads, Trucks, Drivers, Fuel, and More, All in One Smart Platform.
          </p>
          {/* Left Side Content */}
          <div className="col-lg-7 px-sm-0 px-lg-5 mt-0">
            <div>
              <div className="row">
                {[
                  { text: "Load & Truck Booking", icon: <FaTruck /> },
                  { text: "Driver Arrangements", icon: <FaUserAlt /> },
                  { text: "Truck Buying & Selling", icon: <FaTruck /> },
                  { text: "Truck Parking", icon: <FaMapMarkerAlt /> },
                  { text: "Discounted Petrol Pump Locator", icon: <FaMapMarkerAlt /> },
                  { text: "Load Tracking", icon: <FaClipboardList /> },
                  { text: "Toll Gate & Mileage Calculators", icon: <FaDollarSign /> },
                  { text: "FAST Tag Recharge", icon: <FaDollarSign /> },
                  { text: "Commercial Insurance Renewal", icon: <FaDollarSign /> },
                ].map((item, index) => (
                  <div className="col-12 col-md-6 p-2" key={index}>
                    <div className="feature-card text-start">
                      <span className="feature-icon">{item.icon}</span>
                      {item.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button className="btn btn-danger mt-4 p-2 px-4">Be the First to Know</button>
          </div>

          {/* Right Side Form */}
          <div className="col-lg-5">
            <form className="d-flex flex-column" onSubmit={handleSubmit}>
              <div>
                <h3 className="text-white fw-bold">Simplify Your Trucking Journey</h3>
              </div>
              <div className="mb-3 w-100">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control transparent-input"
                    id="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <label htmlFor="name">Full Name</label>
                </div>
              </div>
              <div className="mb-3 w-100">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control transparent-input"
                    id="whatsapp"
                    placeholder="Enter your contact number"
                    value={formData.whatsapp}
                    onChange={handleChange}
                  />
                  <label htmlFor="whatsapp">WhatsApp Number</label>
                </div>
              </div>
              <div className="mb-3 w-100">
                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control transparent-input"
                    id="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <label htmlFor="email">Email Address</label>
                </div>
              </div>
              <div className="mb-3 w-100">
                <div className="form-floating">
                  <select
                    className="form-select transparent-input"
                    id="challenge"
                    value={formData.challenge}
                    onChange={handleChange}
                  >
                    <option value="">Select your main trucking challenge</option>
                    <option>Finding Loads</option>
                    <option>Hiring Reliable Drivers</option>
                    <option>Managing Costs</option>
                    <option>Fuel Discounts & Parking</option>
                    <option>Real-Time Tracking</option>
                  </select>
                  <label htmlFor="challenge">Your Biggest Challenge</label>
                </div>
              </div>
              <div className="mb-3 w-100">
                <div className="form-floating">
                  <select
                    className="form-select transparent-input"
                    id="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">Select a service</option>
                    <option>Fleet Owners</option>
                    <option>Truck Operators</option>
                    <option>Logistics Companies</option>
                  </select>
                  <label htmlFor="service">Preferred Service</label>
                </div>
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-danger w-100">
                  Get Early Access!
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Home;
