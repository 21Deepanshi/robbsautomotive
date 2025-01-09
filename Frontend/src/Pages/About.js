import React from 'react';
import aboutImage from '../assets/photo1.jpeg';
import ownerImage from '../assets/Photo6.jpeg';

const About = () => {
  return (
    <div className="about-page">
      {/* Company Information Section */}
      <section className="company-section py-12 px-6 bg-gray-50">
        <div className="container mx-auto space-y-12">
          <div className="company-info flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-12">
            <img
              src={aboutImage}
              alt="Garage"
              className="w-full md:w-[500px] h-[300px] object-cover shadow-md"
            />
            <div className="text-center md:text-left space-y-4">
              <h2 className="text-4xl font-semibold text-gray-800">
                Robb's Automotive
              </h2>
              <p className="text-lg text-gray-700 text-justify">
                Robb's Automotive is your trusted local mechanic shop specializing in high-quality car repair and maintenance services.
                From routine oil changes to advanced engine diagnostics and vintage car restoration, we ensure your vehicle runs at its best.
                With experienced technicians and a passion for excellence, we deliver reliable, affordable, and timely solutions tailored to your needs.
                Whether it’s modern cars or classic vehicles, we’ve got you covered. Visit us today for exceptional service you can count on!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Owner Information Section */}
    <section className="owner-section py-12 px-6 bg-white">
        <div className="container mx-auto space-y-12">
            <div className="owner-info flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-12">
                <div className="text-center md:text-left space-y-4">
                    <h3 className="text-2xl font-semibold text-gray-800">
                    Meet the Owner
                </h3>
                    <p className="text-lg text-gray-700 text-justify">
                    Robin, the proud owner of Robb's Automotive, has an experience in the automotive industry. His passion for cars and commitment to high-quality service has made him a trusted name in the community. When he's not in the garage, he enjoys working on vintage car restorations and staying up-to-date with the latest industry trends.
                </p>
            </div>
                <img
                    src={ownerImage}
                    alt="Owner"
                    className="w-32 h-32 md:w-48 md:h-48 object-cover"
                />
            </div>
         </div>
    </section>
</div>
  );
};

export default About;

