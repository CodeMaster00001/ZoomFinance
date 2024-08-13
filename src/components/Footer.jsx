import React from "react";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-lg font-bold">Zoom Finance</h3>
            <p className="text-sm">
              Providing reliable loan services since 2008
            </p>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/zoomfinance9/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61563941941368"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="https://wa.me/9340752360"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaWhatsapp size={24} />
            </a>
            <a
              href="https://t.me/zoomnidhifinance"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaTelegram size={24} />
            </a>
          </div>
        </div>
        <div className="mt-4 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Zoom Finance. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
