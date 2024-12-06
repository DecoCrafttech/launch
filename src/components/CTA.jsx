import React, { useState } from 'react';
import axios from 'axios';
import { FaCreditCard, FaMoneyBillWave, FaCarCrash, FaMapMarkedAlt, FaCalculator, FaBell } from 'react-icons/fa'; // Importing relevant icons
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navigate } from 'react-router-dom';

const Features = () => {
  const [formData, setFormData] = useState({
    full_name: '',
    whatsapp_no: '',
    email_id: '',
    business_type: '',
    location: '',
    biggest_challenge: '',
    prefered_service: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handlectamodalSubmit = async (e) => {
    e.preventDefault();

    const data = {
      full_name: formData.full_name,
      whatsapp_no: formData.whatsapp_no,
      biggest_challenge: formData.biggest_challenge,
      prefered_service: formData.prefered_service,
    };

    try {
      const response = await axios.post(
        'https://truck.truckmessage.com/header_form_entry',
        data
      );
      
      toast.success('Form submitted successfully:', response.data);
      // Navigate("/thankyou"); // Redirect on success

      // Optionally, handle success here (e.g., show a confirmation message)
    } catch (error) {
      toast.error('Error submitting form:', error);
      // Optionally, handle error here (e.g., show an error message)
    }
  };

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
            <li><FaMoneyBillWave className="features-icon" /> Simplified Toll Management with Mileage Insights</li>
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
        <div className="d-flex justify-content-center">
          <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#Ctamodal"
            className="btn btn-danger mt-4 p-2 px-4 "
          >
            Secure your place in the future of trucking
          </button>

        </div>

      </div>
      <div>
        <div className="modal fade" id="Ctamodal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">Form</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form className='container text-start' onSubmit={handlectamodalSubmit}>
                  <div className="row">
                    {/* Name Field */}
                    <div className="col-md-12 mb-3">
                      <label htmlFor="full_name" className="form-label">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="full_name"
                        placeholder="Enter your full name"
                        value={formData.full_name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    {/* WhatsApp Number Field */}
                    <div className="col-md-12 mb-3">
                      <label htmlFor="whatsapp_no" className="form-label">WhatsApp Number</label>
                      <input
                        type="text"
                        className="form-control"
                        id="whatsapp_no"
                        placeholder="Enter your WhatsApp number"
                        value={formData.whatsapp_no}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    {/* Email Address Field */}
                    <div className="col-md-12 mb-3">
                      <label htmlFor="email_id" className="form-label">Email Address</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email_id"
                        placeholder="Enter your email address"
                        value={formData.email_id}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    {/* Business Type Field */}
                    {/* <div className="col-md-6 mb-3">
                      <label htmlFor="business_type" className="form-label">Business Type</label>
                      <select
                        className="form-select"
                        id="business_type"
                        value={formData.business_type}
                        onChange={handleChange}
                        required
                      >
                        <option value="" disabled>Select your business type</option>
                        <option value="fleet-owner">Fleet Owner</option>
                        <option value="truck-operator">Truck Operator</option>
                        <option value="driver">Driver</option>
                        <option value="other">Other</option>
                      </select>
                    </div> */}
                    {/* Location Field */}
                    {/* <div className="col-12 mb-3">
                      <label htmlFor="location" className="form-label">Location</label>
                      <input
                        type="text"
                        className="form-control"
                        id="location"
                        placeholder="Enter your location"
                        value={formData.location}
                        onChange={handleChange}
                        required
                      />
                    </div> */}
                    {/* Biggest Challenge Field */}
                    <div className="col-md-12 mb-3">
                      <label htmlFor="biggest_challenge" className="form-label">Biggest Challenge</label>
                      <select
                        className="form-select"
                        id="biggest_challenge"
                        value={formData.biggest_challenge}
                        onChange={handleChange}
                        required
                      >
                        <option value="" >Select your Challenge </option>
                        <option value="Finding Loads">Finding Loads</option>
                        <option value="Hiring Reliable Drivers">Hiring Reliable Drivers</option>
                        <option value="Managing Costs">Managing Costs</option>
                        <option value="Fuel Discounts & Parking">Fuel Discounts & Parking</option>
                        <option value="Real-Time Tracking">Real-Time Tracking</option>

                      </select>

                    </div>
                    {/* Preferred Service Field */}
                    <div className="col-md-12 mb-3">
                      <label htmlFor="prefered_service" className="form-label">Prefered Service</label>
                      <select
                        className="form-select"
                        id="prefered_service"
                        value={formData.prefered_service}
                        onChange={handleChange}
                        required
                      >
                        <option value="" >Select your business type</option>
                        <option value="Fleet Owner">Fleet Owner</option>
                        <option value="Truck Operator">Truck Operator</option>
                        <option value="Logistics Companies">Logistics Companies</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>


                    {/* <div className="col-12 mb-3">
                      <label htmlFor="prefered_service" className="form-label">Preferred Service</label>
                      <input
                        type="text"
                        className="form-control"
                        id="prefered_service"
                        placeholder="Enter your preferred service"
                        value={formData.prefered_service}
                        onChange={handleChange}
                        required
                      />
                    </div> */}
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
        </div>
      </div>
      <ToastContainer />

    </div>


  );
};

export default Features;
