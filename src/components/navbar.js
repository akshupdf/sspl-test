import React, { useState } from "react";
import logo from "../images/logo4.png";
import certify from "../images/certify.jpg";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // https://translate.google.com/gen204?sl=en&tl=it&textlen=446&ttt=329&ttl=746&sr=1&nca=te_time&client=te&logld=vTE_20240605

  return (
    <div className="w-full bg-[#003662]/95 backdrop-blur-md text-white fixed top-0 z-50 shadow-md border-b border-white/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row justify-between items-center py-2 lg:py-0">
        <div className="flex justify-between items-center w-full lg:w-auto py-2">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="h-12 w-auto object-contain" />
            <div className="text-left hidden md:block">
              <span className="text-white font-bold text-lg xl:text-xl block tracking-wide font-serif uppercase">
                Satyanarayan Sekhsaria Pvt. Ltd.
              </span>
              <span className="text-blue-200 text-xs block capitalize">
                Building trust in farm-to-market supply chains
              </span>
            </div>
          </Link>
          <div className="lg:hidden cursor-pointer p-2 text-white hover:text-blue-200 transition-colors" onClick={toggleMenu}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </div>
        </div>

        <div
          className={`lg:flex lg:items-center w-full lg:w-auto transition-all duration-300 ${
            isOpen ? "block pb-6 lg:pb-0" : "hidden"
          }`}
        >
          <ul className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8 text-base font-semibold tracking-wide w-full lg:w-auto">
            <li className="relative group">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="hover:text-blue-200 transition-colors duration-300 block py-2 lg:py-6"
              >
                Home
              </Link>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-300 transition-all duration-300 group-hover:w-full hidden lg:block"></span>
            </li>
            <li className="relative group">
              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className="hover:text-blue-200 transition-colors duration-300 block py-2 lg:py-6"
              >
                About
              </Link>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-300 transition-all duration-300 group-hover:w-full hidden lg:block"></span>
            </li>
            <li className="relative group">
              <Link
                to="/products"
                onClick={() => setIsOpen(false)}
                className="hover:text-blue-200 transition-colors duration-300 block py-2 lg:py-6"
              >
                Products
              </Link>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-300 transition-all duration-300 group-hover:w-full hidden lg:block"></span>
            </li>
            <li className="relative group">
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="hover:text-blue-200 transition-colors duration-300 block py-2 lg:py-6"
              >
                Contact
              </Link>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-300 transition-all duration-300 group-hover:w-full hidden lg:block"></span>
            </li>
            <li className="py-2 lg:py-0">
              <img src={certify} alt="Certification" className="h-10 w-auto object-contain lg:ml-2" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
