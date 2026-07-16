import React from "react";
import { Link } from "react-router-dom";
import { FaClock, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function Footer() {
  const email = "info@sspl.co";
  const subject = "I want to inquire about ";
  const body = "Hello, I would like to...";

  return (
    <div className="w-full bg-[#003662] text-gray-300 border-t border-white/5 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        {/* Address & Hours */}
        <div className="space-y-4">
          <h3 className="text-white font-bold text-lg font-serif tracking-wider uppercase">Address</h3>
          <div className="space-y-2 text-sm">
            <p className="leading-relaxed">
              94, 9th floor, Maker Chamber III, Nariman Point, Mumbai, Maharashtra - 400021, India
            </p>
            <p className="flex items-center gap-2 font-semibold pt-2">
              <FaClock className="text-blue-300" />
              <span>Monday To Friday: 9am - 6pm</span>
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4 lg:pl-12">
          <h3 className="text-white font-bold text-lg font-serif tracking-wider uppercase">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/disclaimer" className="hover:text-white hover:underline transition-colors duration-300">
                Disclaimer
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="text-white font-bold text-lg font-serif tracking-wider uppercase">Contact</h3>
          <div className="space-y-3 text-sm">
            <p className="flex items-center gap-2">
              <FaPhoneAlt className="text-blue-300" />
              <span>+91 22 4057 0360</span>
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-blue-300" />
              <a
                href={`mailto:${email}?subject=${subject}&body=${body}`}
                className="hover:text-white hover:underline transition-colors duration-300"
              >
                {email}
              </a>
            </p>
          </div>
        </div>

        {/* Connect With Us */}
        <div className="space-y-4">
          <h3 className="text-white font-bold text-lg font-serif tracking-wider uppercase">Connect With Us</h3>
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/company/satyanarayan-sekhsaria/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0288D1] hover:text-blue-400 transition-colors duration-300"
              title="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="40"
                height="40"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#0288D1"
                  d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                ></path>
                <path
                  fill="#FFF"
                  d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 pt-6 text-center text-xs text-gray-500">
        Copyright © 2026 Satyanarayan Sekhsaria Pvt Ltd
      </div>
    </div>
  );
}

export default Footer;
