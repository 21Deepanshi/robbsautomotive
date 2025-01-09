import React, {useState} from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-2 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="hover:opacity-90">
            <img
              src={logo}
              alt="Logo"
              className="h-12 sm:h-16 lg:h-20 object-contain"
            />
          </Link>
        </div>

        {/* Navbar */}
        <nav>
          <ul className="hidden md:flex space-x-6 text-base font-medium">
            <li>
              <Link
                to="/"
                className="hover:text-gray-400 transition-colors duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-gray-400 transition-colors duration-200"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="hover:text-gray-400 transition-colors duration-200"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
              to="/book-now"
                // onClick={() => {
                //   const element = document.getElementById('book-now');
                //   if (element) {
                //     element.scrollIntoView({ behavior: 'smooth' });
                //   }
                // }}
                className="hover:text-gray-400 transition-colors duration-200"
              >
                Book Now
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-gray-400 transition-colors duration-200"
              >
                Contact
              </Link>
            </li>
            {/* CTA Button */}
            <li>
              <a
                href="tel:+61 424 446 998"
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-200"
              >
                Call Us
              </a>
            </li>
          </ul>
          {/* Mobile Hamburger Menu */}
          <div className="md:hidden">
            <button
              className="text-gray-400 hover:text-white focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </nav>
      </div>
      
      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="bg-gray-800 md:hidden">
          <ul className="space-y-4 text-center py-4 text-lg">
            <li>
              <Link
                to="/"
                className="block text-white hover:text-gray-400 transition-colors duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block text-white hover:text-gray-400 transition-colors duration-200"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="block text-white hover:text-gray-400 transition-colors duration-200"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/book-now"
                className="block text-white hover:text-gray-400 transition-colors duration-200"
              >
                Book Now
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block text-white hover:text-gray-400 transition-colors duration-200"
              >
                Contact
              </Link>
            </li>
            <li>
              <a
                href="tel: +61 424 446 998"
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-200"
              >
                Call Us
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;