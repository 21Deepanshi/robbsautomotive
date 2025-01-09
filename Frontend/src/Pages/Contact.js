import React from 'react';

function Contact() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Contact Header */}
      <header className="bg-gray-800 py-10 text-center text-white">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="mt-2 text-lg">We would love to hear from you!</p>
      </header>

      {/* Contact Information */}
      <section className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Details */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Get in Touch</h2>
            <p className="text-gray-700 mb-4">
              Feel free to reach out to us via email or phone. We're here to help!
            </p>
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-800">Email</h3>
              <p className="text-gray-600">
                <a
                  href="mailto: robbsautomotive@gmail.com"
                  className="text-blue-600 hover:underline"
                >
                  robbsautomotive@gmail.com
                </a>
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-800">Phone</h3>
              <p className="text-gray-600">
                  +61 424 446 998
              </p>
            </div>
          </div>

          {/* Google Map */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.900526246929!2d149.101181!3d-35.1591015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b17ab325d65bf65%3A0x791afd267ef60b84!2sRobb&#39;s%20Automotive%20Repair!5e0!3m2!1sen!2sca!4v1735706615683!5m2!1sen!2sca" 
              width= "100%" 
              height="450" 
              style={{ border: 0 }}
              allowfullscreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade">
              </iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
