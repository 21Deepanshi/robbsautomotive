import React from "react";

const Services = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
        <p className="mt-4 text-lg text-gray-600">
          At Robb's Automotive, we provide a comprehensive range of professional
          automotive services to keep your vehicle running smoothly. Explore our
          services below:
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {/* Service 1 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800">Oil Change & Fluid Services</h3>
          <p className="mt-4 text-gray-600">
            Regular oil changes are vital for your engine's longevity. We offer both
            conventional and synthetic oil changes, along with fluid top-ups and checks
            (brake fluid, transmission fluid, coolant, etc.).
          </p>
        </div>
        
        {/* Service 2 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800">Brake Repair & Replacement</h3>
          <p className="mt-4 text-gray-600">
            From squeaky brakes to complete brake system failure, we provide brake pad
            replacement, rotor resurfacing, fluid flushes, and more to ensure your safety
            on the road.
          </p>
        </div>

        {/* Service 3 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800">Tyres Services</h3>
          <p className="mt-4 text-gray-600">
            We offer tyre rotation, balancing, alignment, and tyre replacement services.
            Let us help you choose the right tyres for your vehicle and driving style.
          </p>
        </div>

        {/* Service 4 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800">Engine Diagnostics & Repair</h3>
          <p className="mt-4 text-gray-600">
            Our advanced diagnostic equipment can quickly identify engine issues. We
            provide repairs for all types of engine problems, from minor issues to major
            repairs.
          </p>
        </div>

        {/* Service 5 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800">Transmission Services</h3>
          <p className="mt-4 text-gray-600">
            Our team is skilled in repairing and maintaining both automatic and manual
            transmissions. Whether it’s fluid changes or complete overhauls, we have you
            covered.
          </p>
        </div>

        {/* Service 6 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800">Battery Testing & Replacement</h3>
          <p className="mt-4 text-gray-600">
            Ensure your vehicle starts every time with our battery testing and replacement
            services. We also provide charging system diagnostics to prevent future issues.
          </p>
        </div>

        {/* Service 7 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800">Air Conditioning & Heating</h3>
          <p className="mt-4 text-gray-600">
            Keep cool in the summer and warm in the winter with our air conditioning and
            heating system repair services. From refrigerant refills to complete HVAC system
            repairs, we’ve got your comfort covered.
          </p>
        </div>

        {/* Service 8 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800">Suspension & Steering</h3>
          <p className="mt-4 text-gray-600">
            If you’re experiencing rough rides or handling issues, we offer suspension
            repair, shock absorber replacement, steering alignment, and other services to
            restore your vehicle’s stability.
          </p>
        </div>
      </div>

      <div className="text-center mt-12">
        <h3 className="text-2xl font-semibold text-gray-800">Why Choose Us?</h3>
        <ul className="mt-4 text-lg text-gray-600 list-disc list-inside">
          <li>Expert Technicians</li>
          <li>Affordable Rates</li>
          <li>Customer Satisfaction</li>
          <li>Convenient Location</li>
        </ul>
      </div>

      <div className="mt-12 text-center">
        <h3 className="text-2xl font-semibold text-gray-800">Schedule Your Appointment</h3>
        <p className="mt-4 text-lg text-gray-600">
          Ready to get your vehicle serviced? <strong>Call us</strong> or <strong>fill out our online appointment form</strong> to schedule your service today. We look forward to assisting you!
        </p>
      </div>
    </div>
  );
};

export default Services;
