import React, { useState } from 'react';
import axios from 'axios';

const YourComponent = () => {
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

    const handleSubmit = async (e) => {
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
            console.log('Form submitted successfully:', response.data);
            // Optionally, handle success here (e.g., show a confirmation message)
        } catch (error) {
            console.error('Error submitting form:', error);
            // Optionally, handle error here (e.g., show an error message)
        }
    };

    return (
        <div>
            <div className="modal fade" id="Ctamodal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className="access-form" onSubmit={handleSubmit}>
                                <div className="row">
                                    {/* Name Field */}
                                    <div className="col-md-6 mb-3">
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
                                    <div className="col-md-6 mb-3">
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
                                    <div className="col-md-6 mb-3">
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
                                    <div className="col-md-6 mb-3">
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
                                    </div>
                                    {/* Location Field */}
                                    <div className="col-12 mb-3">
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
                                    </div>
                                    {/* Biggest Challenge Field */}
                                    <div className="col-12 mb-3">
                                        <label htmlFor="biggest_challenge" className="form-label">Biggest Challenge</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="biggest_challenge"
                                            placeholder="Enter your biggest challenge"
                                            value={formData.biggest_challenge}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    {/* Preferred Service Field */}
                                    <div className="col-12 mb-3">
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
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default YourComponent;
