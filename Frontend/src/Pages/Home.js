import React, {useState} from 'react';
import photo from '../assets/Photo4.jpeg';
import formbackImage from '../assets/Photo8.jpeg';
import Footer from '../Component/Footer';

function Home() {
  const BookingForm = () => {
    const [formData, setFormData] = useState({
      name: '',
      phone: '',
      email: '',
      vehicle: '',
      vehicleNumber: '',
      appointmentDate: '',
      serviceRequired: '',
      additionalNotes: '',
    });
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
    
  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    // Send form data to the backend
    const response = await fetch('https://robbsautomotive.onrender.com/api/send-appointment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json(); // Parse the JSON response

    // Check if the response is successful
    if (response.ok) {
      alert('Your booking has been submitted successfully!');
      // Reset the form to its initial state
      setFormData({
        name: '',
        phone: '',
        email: '',
        vehicle: '',
        vehicleNumber: '',
        appointmentDate: '',
        serviceRequired: '',
        additionalNotes: '',
      });
    } else {
      alert('There was an issue with your submission.');
    }

    console.log('Success:', data);
  } catch (error) {
    console.error('Error:', error);
    alert('There was an error with the submission. Please try again later.');
  }
};
  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] bg-gray-900">
      <img
        src={photo}
        alt="Welcome"
        className="w-full h-full object-cover absolute top-0 left-0"
      />
      <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-white">
            Welcome to Robb's Automotive
          </h1>
          <p className="text-xl sm:text-2xl text-white mt-4">
            From Anything to Everything
          </p>
        </div>
      </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-gray-800">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Service 1 */}
          <div className="p-6 bg-gray-100 shadow-lg rounded-lg hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-blue-900">Inspection of Cars, Utes, and Trailers</h3>
            <p className="text-gray-700">
              Comprehensive inspections to ensure your vehicles are roadworthy and safe.
            </p>
          </div>

          {/* Service 2 */}
          <div className="p-6 bg-gray-100 shadow-lg rounded-lg hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-blue-900">Minor Service</h3>
            <p className="text-gray-700">
              Routine maintenance, including oil change, filter replacement, and basic checks.
            </p>
          </div>

          {/* Service 3 */}
          <div className="p-6 bg-gray-100 shadow-lg rounded-lg hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-blue-900">Major Service</h3>
            <p className="text-gray-700">
              Extensive servicing, covering all key vehicle components to maintain optimal performance.
            </p>
          </div>

          {/* Service 4 */}
          <div className="p-6 bg-gray-100 shadow-lg rounded-lg hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-blue-900">Suspension and Brakes</h3>
            <p className="text-gray-700">
              Repairs and maintenance of your vehicle's suspension system and brake components.
            </p>
          </div>

          {/* Service 5 */}
          <div className="p-6 bg-gray-100 shadow-lg rounded-lg hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-blue-900">Car Maintenance</h3>
            <p className="text-gray-700">
              Full diagnostic and maintenance services tailored for 4WD vehicles.
            </p>
          </div>

          {/* Service 6 */}
          <div className="p-6 bg-gray-100 shadow-lg rounded-lg hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-blue-900">Clutch Replacement</h3>
            <p className="text-gray-700">
              Professional clutch inspections, repairs, and replacements for all vehicle types.
            </p>
          </div>

          {/* Service 7 */}
          <div className="p-6 bg-gray-100 shadow-lg rounded-lg hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-blue-900">Battery Replacement</h3>
            <p className="text-gray-700">
              Testing, replacement, and installation of high-quality car batteries.
            </p>
          </div>
          
          {/* Service 8 */}
          <div className="p-6 bg-gray-100 shadow-lg rounded-lg hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-blue-900">After-Hours Service</h3>
            <p className="text-gray-700">
              Emergency services, including assistance with brakes, batteries, top-up fuel, and jump starts.
            </p>
          </div>
        </div>
      </div>
      </section>

      {/* Booking  */}
      <section
        id="book-now"
        className="py-16 bg-gray-100"
        style={{
          backgroundImage: `url(${formbackImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-gray-900">Book an Appointment</h2>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 shadow-lg rounded-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block text-left text-gray-700">Full Name</label>
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
            <label htmlFor="phone" className="block text-left text-gray-700">Phone Number</label>
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
            <label htmlFor="email" className="block text-left text-gray-700">Email Address</label>
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
            <label htmlFor="vehicle" className="block text-left text-gray-700">Vehicle Make and Model</label>
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
              <label htmlFor="vehicleNumber" className="block text-left text-gray-700">
                Vehicle Rego Number and State
              </label>
              <input
                type="text"
                id="vehicle"
                name="vehicle"
                value={formData.vehicleNumber}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>

          <div className="mb-4">
            <label htmlFor="appointmentDate" className="block text-left text-gray-700">Preferred Appointment Date</label>
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
            <label htmlFor="serviceRequired" className="block text-left text-gray-700">Service Required</label>
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
              {/* Add more services here */}
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="additionalNotes" className="block text-left text-gray-700">Additional Notes</label>
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

      {/* Review Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Reviews</h2>
          <button
            onClick={() => window.open('https://g.page/r/CYQL9n4m_Rp5EAI/review', '_blank')}
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Leave a Review
          </button>
          <div className="mt-8 space-y-4">
            <div className="bg-white p-4 shadow-md rounded-md">
              <p className="font-semibold">Chris Hicri Tosun</p>
              <p className="text-yellow-500">⭐⭐⭐⭐⭐</p>
              <p className="text-sm text-gray-600">
                "Great Talent and great Price 👍 highly recommended "
              </p>
            </div>
            <div className="bg-white p-4 shadow-md rounded-md">
              <p className="font-semibold">Oprah Saini</p>
              <p className="text-yellow-500">⭐⭐⭐⭐⭐</p>
              <p className="text-sm text-gray-600">
                "Great experience and friendly staff!"
              </p>
            </div>
            <div className="bg-white p-4 shadow-md rounded-md">
              <p className="font-semibold">Addie Anoop</p>
              <p className="text-yellow-500">⭐⭐⭐⭐⭐</p>
              <p className="text-sm text-gray-600">
                "Good quality and excellent support."
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
  return (
    <div>
      <BookingForm />
    </div>
  );
}

export default Home;
