import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#040405] text-white py-8 shadow-md border-t border-gray-700">
      <div className="container mx-auto px-4">
{/*         <div className="flex flex-col md:flex-row justify-between items-center"> */}
       

          {/* Navigation Links */}
{/*           <div className="flex space-x-6 mb-4 md:mb-0">
            <a
              href="#"
              className="text-gray-300 hover:text-yellow-400 transition-colors text-sm"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-pink-500 transition-colors text-sm"
            >
              About Us
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-green-400 transition-colors text-sm"
            >
              Services
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
            >
              Contact
            </a>
          </div>
 */}
          {/* Social Media Icons */}
{/*           <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-400 hover:text-blue-500 transition-colors"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-pink-500 transition-colors"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-blue-600 transition-colors"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-purple-500 transition-colors"
              aria-label="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
 */}
        {/* Bottom Section */}
        <div className="mt-6 text-gray-400 text-xs text-center">
          <p>
            © {new Date().getFullYear()} Saransh & Ritik. All rights reserved.
          </p>
          <p>
            Designed with{" "}
            <span className="text-red-500 text-base" role="img" aria-label="heart">
              ♥
            </span>{" "}
            by Saransh & Ritik.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
