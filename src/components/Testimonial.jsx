import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TruckRevolution = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    whatsapp_no: "",
    email_id: "",
    business_type: "",
    location: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form fields
    if (
      !formData.full_name.trim() ||
      !formData.whatsapp_no.trim() ||
      !formData.email_id.trim() ||
      !formData.business_type.trim() ||
      !formData.location.trim()
    ) {
      toast.error("Please fill out all fields.");
      return;
    }

    try {
      const payload = {
        full_name: formData.full_name,
        whatsapp_no: formData.whatsapp_no,
        email_id: formData.email_id,
        business_type: formData.business_type,
        location: formData.location,
      };

      const response = await axios.post(
        "https://truck.truckmessage.com/cta_form_entry",
        payload
      );

      if (response.status === 200) {
        toast.success("Form submitted successfully!");
        // Reset form fields after successful submission
        setFormData({
          full_name: "",
          whatsapp_no: "",
          email_id: "",
          business_type: "",
          location: "",
        });
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
    <div className="truck-revolution mt-5 p-4">
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
            <form className="access-form" onSubmit={handleSubmit}>
              <div className="row">
                {/* Name Field */}
                <div className="col-md-6 mb-3">
                  <label htmlFor="full_name" className="form-label">
                    Name
                  </label>
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
                <div className="col-md-6 mb-3">
                  <label htmlFor="whatsapp_no" className="form-label">
                    WhatsApp Number
                  </label>
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
                <div className="col-md-6 mb-3">
                  <label htmlFor="email_id" className="form-label">
                    Email Address
                  </label>
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
                <div className="col-md-6 mb-3">
                  <label htmlFor="business_type" className="form-label">
                    Business Type
                  </label>
                  <select
                    className="form-select"
                    id="business_type"
                    value={formData.business_type}
                    onChange={handleChange}
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
                  <label htmlFor="location" className="form-label">
                    Location
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="location"
                    placeholder="Enter your location"
                    value={formData.location}
                    onChange={handleChange}
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
    </div>
  );
};

export default TruckRevolution;
