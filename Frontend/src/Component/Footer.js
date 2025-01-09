import React from "react";
import footerImage from "../assets/photo7.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
      
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">About Our Shop</h3>
          <p classname ="text-justify"> 
            Your trusted automotive repair center with experienced technicians
            providing reliable services to keep your vehicle in top shape.
          </p>
          <ul className="space-y-1">
            <li>Hours: Mon - Sat: 9am - 6pm</li>
            <li>Location: Unit 5/4 Annie Douglas St, Casey ACT 2913, Australia</li>
            <li>Phone: +61 424 446 998</li>
          </ul>
        </div>

        <div className="flex justify-center">
          <div
            className="w-40 h-40 bg-center"
            style={{
              backgroundImage: `url(${footerImage})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              animation: "rotateImage 8s linear infinite",
            }}
          ></div>
          <style>
            {`
              @keyframes rotateImage {
                0% {
                  transform: rotateY(0deg);
                }
                100% {
                  transform: rotateY(360deg);
                }
              }
            `}
          </style>
        </div>

        <div className="space-y-4">
            <h3 className="text-2xl font-bold">Follow Us</h3>
            <div className="flex space-x-4">
                <a
                href="https://www.facebook.com/profile.php?id=61571626852273"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500"
                >
                <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a
                href="https://www.instagram.com/robbsautomotive/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500"
                >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
