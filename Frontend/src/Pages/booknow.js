import React, { useState } from "react";

function BookNow() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    vehicle: "",
    appointmentDate: "",
    serviceRequired: "",
    additionalNotes: "",
  });

 const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://robbsautomotive.onrender.com/api/send-appointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Appointment submitted successfully:', data);
        // You can display a success message or redirect the user here
        setFormData({
        name: '',
        phone: '',
        email: '',
        vehicle: '',
        appointmentDate: '',
        serviceRequired: '',
        additionalNotes: '',
      });
      } else {
        console.error('Error submitting appointment');
        // Handle error (e.g., show a message to the user)
      }
    } catch (error) {
      console.error('An error occurred:', error);
      // Handle network error (e.g., show a message to the user)
    }
  };
  return (
    <div>
      {/* Booking Section */}
      <section
        id="book-now"
        className="py-16 bg-gray-100"
      >
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">
            Book an Appointment
          </h2>
          <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto bg-white p-6 shadow-lg rounded-lg"
          >
            <div className="mb-4">
              <label htmlFor="name" className="block text-left text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-left text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-left text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="vehicle" className="block text-left text-gray-700">
                Vehicle Make and Model
              </label>
              <input
                type="text"
                id="vehicle"
                name="vehicle"
                value={formData.vehicle}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="appointmentDate"
                className="block text-left text-gray-700"
              >
                Preferred Appointment Date
              </label>
              <input
                type="datetime-local"
                id="appointmentDate"
                name="appointmentDate"
                value={formData.appointmentDate}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="serviceRequired"
                className="block text-left text-gray-700"
              >
                Service Required
              </label>
              <select
                id="serviceRequired"
                name="serviceRequired"
                value={formData.serviceRequired}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                required
              >
                <option value="">Select Service</option>
                <option value="oil change">Oil Change</option>
                <option value="tire repair">Tyre Repair</option>
                <option value="brake service">Brake Service</option>
                <option value="suspension service">Suspension Service</option>
                <option value="battery replacement">Battery Replacement</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                htmlFor="additionalNotes"
                className="block text-left text-gray-700"
              >
                Additional Notes
              </label>
              <textarea
                id="additionalNotes"
                name="additionalNotes"
                value={formData.additionalNotes}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                rows="4"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Submit Booking
            </button>
          </form>
        </div>
      </section>

      {/* Additional Information */}
        <section className="py-16 bg-gray-900 text-white">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-8">Our Booking Process</h2>
                <p className="mb-4">
                We’ve designed a simple and hassle-free booking process to ensure you can secure your appointment with ease. Here’s how it works:
                </p>
                <ol className="list-decimal pl-8 mb-4">
                <li>Fill out the form with your contact details and vehicle information.</li>
                <li>Select your preferred service and appointment date.</li>
                </ol>
                <p>
                Our team will review your request and get in touch to confirm the details. We’re here to make your experience seamless and stress-free.
                </p>
            </div>
        </section>
    </div>
  );
}

export default BookNow;
