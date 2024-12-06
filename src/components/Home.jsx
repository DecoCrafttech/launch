



import React, { useState } from "react";
import { FaTruck, FaUserAlt, FaMapMarkerAlt, FaDollarSign, FaClipboardList } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const navigate = useNavigate(); // Hook for navigation

  const [formData, setFormData] = useState({
    full_name: "",
    whatsapp_no: "",
    email: "",
    biggest_challenge: "",
    prefered_service: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { full_name, whatsapp_no, email } = formData;
    if (!full_name || !whatsapp_no || !email) {
      toast.error("Please fill out all required fields: Name, WhatsApp Number, and Email.");
      return;
    }

    try {
      const response = await fetch("https://truck.truckmessage.com/header_form_entry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Form submitted successfully!");
        setFormData({
          full_name: "",
          whatsapp_no: "",
          email: "",
          biggest_challenge: "",
          prefered_service: "",
        });
        navigate("/thankyou"); // Redirect on success
      } else {
        const errorData = await response.json();
        toast.error(errorData.message || "Failed to submit the form. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      toast.error("An error occurred. Please try again.");
    }
  };

  const [modalData, setmodalData] = useState({
    modal_full_name: "",
    modal_whatsapp_no: "",
    modal_email_id: "",
    modal_business_type: "",
    modal_location: "",
  });

  const handleModalChange = (e) => {
    const { id, value } = e.target;
    setmodalData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleModalSubmit = async (e) => {
    e.preventDefault();

    if (
      !modalData.modal_full_name.trim() ||
      !modalData.modal_whatsapp_no.trim() ||
      !modalData.modal_email_id.trim() ||
      !modalData.modal_business_type.trim() ||
      !modalData.modal_location.trim()
    ) {
      toast.error("Please fill out all fields.");
      return;
    }

    try {
      const payload = {
        full_name: modalData.modal_full_name,
        whatsapp_no: modalData.modal_whatsapp_no,
        email_id: modalData.modal_email_id,
        business_type: modalData.modal_business_type,
        location: modalData.modal_location,
      };

      const response = await axios.post("https://truck.truckmessage.com/cta_form_entry", payload);

      if (response.status === 200) {
        toast.success("Form submitted successfully!");
        setmodalData({
          modal_full_name: "",
          modal_whatsapp_no: "",
          modal_email_id: "",
          modal_business_type: "",
          modal_location: "",
        });
        navigate("/thankyou"); // Redirect on success
      } else {
        toast.error("Failed to submit the form. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      toast.error(
        error.response?.data?.message || "An error occurred. Please try again."
      );
    }
  };

  return (
    // Your JSX remains unchanged
    <section className="home-section py-5 px-2">
      <div className="container mt-4">
        <div className="row">
        <h1 className="fw-bold px-5 head-card">
  Trucking Just <span className="text-warning ">Got Smarter</span>
</h1>

         
          {/* Left Side Content */}
          <div className="col-lg-7 px-sm-0 px-lg-5 mt-0">
          <p className="mt-3 text-white">
            Say Goodbye to Trucking Challenges - Find Loads, Trucks, Drivers, Fuel, and More, All in One Smart Platform.
          </p>
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
    ].map((item, index, array) => (
      <div
        className={`col-12 col-md-6 p-2 ${
          index === array.length - 1 ? "mx-auto" : ""
        }`}
        key={index}
      >
        <div className="feature-card text-start">
          <span className="feature-icon">{item.icon}</span>
          {item.text}
        </div>
      </div>
    ))}
  </div>
  <button
    type="button"
    data-bs-toggle="modal"
    data-bs-target="#headerform"
    className="btn btn-danger mt-4 p-2 px-4 w-100"
  > 
    Be the First to Know
  </button>
</div>


          {/* Right Side Form */}
          <div className="col-lg-5">
            <form className="d-flex flex-column" onSubmit={handleSubmit}>
              <h3 className="text-white fw-bold">Simplify Your Trucking Journey</h3>
              <div className="mb-3 w-100">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control transparent-input"
                    id="full_name"
                    placeholder="Enter your name"
                    value={formData.full_name}
                    onChange={handleChange}
                  />
                  <label htmlFor="full_name">Full Name</label>
                </div>
              </div>
              <div className="mb-3 w-100">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control transparent-input"
                    id="whatsapp_no"
                    placeholder="Enter your WhatsApp number"
                    value={formData.whatsapp_no}
                    onChange={handleChange}
                  />
                  <label htmlFor="whatsapp_no">WhatsApp Number</label>
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
                    id="biggest_challenge"
                    value={formData.biggest_challenge}
                    onChange={handleChange}
                  >
                    <option value="">Select your main trucking challenge</option>
                    <option>Finding Loads</option>
                    <option>Hiring Reliable Drivers</option>
                    <option>Managing Costs</option>
                    <option>Fuel Discounts & Parking</option>
                    <option>Real-Time Tracking</option>
                  </select>
                  <label htmlFor="biggest_challenge">Your Biggest Challenge</label>
                </div>
              </div>
              <div className="mb-3 w-100">
                <div className="form-floating">
                  <select
                    className="form-select transparent-input"
                    id="prefered_service"
                    value={formData.prefered_service}
                    onChange={handleChange}
                  >
                    <option value="">Select a service</option>
                    <option>Fleet Owners</option>
                    <option>Truck Operators</option>
                    <option>Logistics Companies</option>
                  </select>
                  <label htmlFor="prefered_service">Preferred Service</label>
                </div>
              </div>
              <button type="submit" className="btn btn-danger w-100">
                Get Early Access!
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* moadl */}




      <div class="modal fade" id="headerform" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog  modal-lg  modal-dialog-centered">

          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel"> Form</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
          


              <h5 className="  px-4 mt-4 mb-0 text-dark fw-bold ">
                Get Early Access to Your All-in-One Trucking Solution!
              </h5>

              <form className=" p-4 container mt-0" onSubmit={handleModalSubmit}>

                <div className="row">
                  {/* Name Field */}
                  <div className="col-md-12 mb-3">
                    <label htmlFor="modal_full_name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="modal_full_name"
                      placeholder="Enter your full name"
                      value={modalData.modal_full_name}
                      onChange={handleModalChange}
                      required
                    />
                  </div>
                  {/* WhatsApp Number Field */}
                  <div className="col-md-12 mb-3">
                    <label htmlFor="modal_whatsapp_no" className="form-label">
                      WhatsApp Number
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="modal_whatsapp_no"
                      placeholder="Enter your WhatsApp number"
                      value={modalData.whatsapp_no}
                      onChange={handleModalChange}
                      required
                    />
                  </div>
                  {/* Email Address Field */}
                  <div className="col-md-12 mb-3">
                    <label htmlFor="modal_email_id" className="form-label">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="modal_email_id"
                      placeholder="Enter your email address"
                      value={modalData.email_id}
                      onChange={handleModalChange}
                      required
                    />
                  </div>
                  {/* Business Type Field */}
                  <div className="col-md-12 mb-3">
                    <label htmlFor="modal_business_type" className="form-label">
                      Business Type
                    </label>
                    <select
                      className="form-select"
                      id="modal_business_type"
                      value={modalData.business_type}
                      onChange={handleModalChange}
                      required
                    >
                      <option value="" disabled>
                        Select your business type
                      </option>
                      <option value="fleet-owner">Fleet Owner</option>
                      <option value="truck-operator">Truck Operator</option>
                      <option value="driver">Driver</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  {/* Location Field */}
                  <div className="col-12 mb-3">
                    <label htmlFor="modal_location" className="form-label">
                      Location
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="modal_location"
                      placeholder="Enter your location"
                      value={modalData.location}
                      onChange={handleModalChange}
                      required
                    />
                  </div>
                  {/* Submit Button */}
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
      <ToastContainer />
    </section>
  );
};

export default Home;

