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
    <div className="lg:flex backdrop-blur-2xl bg w-[100%] font-serif bg-[#003662] text-white fixed top-0 z-50">
      <div className="flex justify-between items-center w-full lg:w-[50%] pt-2">
        <Link to="/" className="flex items-center flex-col lg:flex-row">
          {" "}
          <img
            src={logo}
            alt="Logo"
            className="w-40 h-15 mb-2 lg:mb-0 lg:mr-4"
          />
          <div className="text-left">
            <span className="text-white font-bold text-xl hidden lg:block uppercase">
              Satyanarayan Sehksaria Private Limited
            </span>
            <span className="text-blue-200 text-sm lg:text-base hidden lg:block text-center capitalize">
              Building trust farm to market supply chains
            </span>
          </div>
        </Link>
        <div className="lg:hidden" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
      </div>
      <div
        className={`lg:flex lg:items-center lg:justify-end mr-10 lg:w-[50%] ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col lg:flex-row items-center w-full lg:w-auto text-2xl lg:justify-end">
          <li className="m-2 hover:underline">
            <Link to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li className="m-2 hover:underline">
            <Link to="/about" onClick={() => setIsOpen(false)}>
              About
            </Link>
          </li>
          <li className="m-2 hover:underline">
            <Link to="/products" onClick={() => setIsOpen(false)}>
              Products
            </Link>
          </li>
          <li className="m-2 hover:underline">
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </li>
          <li>
            <img src={certify} alt="logo" className="w-20 h-20 ml-10" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
