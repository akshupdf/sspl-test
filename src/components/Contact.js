import React, { useState } from "react";
import { GiRotaryPhone } from "react-icons/gi";
import { MdOutlineAttachEmail } from "react-icons/md";
import { HiBuildingOffice } from "react-icons/hi2";
import { FaClock } from "react-icons/fa";

const countryCodes = [
  { code: "+91", country: "India", pattern: /^\d{10}$/, example: "9876543210" },
  {
    code: "+1",
    country: "USA/Canada",
    pattern: /^\d{10}$/,
    example: "1234567890",
  },
  { code: "+44", country: "UK", pattern: /^\d{10}$/, example: "7123456789" },
  {
    code: "+61",
    country: "Australia",
    pattern: /^\d{10}$/,
    example: "4123456789",
  },
  { code: "+86", country: "China", pattern: /^\d{10}$/, example: "1381234567" },
  {
    code: "+49",
    country: "Germany",
    pattern: /^\d{10}$/,
    example: "1512345678",
  },
  {
    code: "+33",
    country: "France",
    pattern: /^\d{10}$/,
    example: "6123456789",
  },
  { code: "+81", country: "Japan", pattern: /^\d{10}$/, example: "9012345678" },
  { code: "+971", country: "UAE", pattern: /^\d{10}$/, example: "5012345678" },
  {
    code: "+65",
    country: "Singapore",
    pattern: /^\d{10}$/,
    example: "9123456789",
  },
];

const products = [
  "Castor Seed",
  "Castor Oil",
  "Guar Seeds",
  "Guar Gum",
  "Cashew Kernels",
  "Pulses",
  "Chickpeas",
  "Pigeon Peas",
];

// Web3Forms Access Key
const WEB3FORMS_ACCESS_KEY = "c8589e9e-763b-4922-b2f3-8b952f1d511e";

function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    organization: "",
    countryCode: "+91",
    contactNumber: "",
    product: "",
    purposeOfEnquiry: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    organization: "",
    contactNumber: "",
    product: "",
    purposeOfEnquiry: "",
  });

  // Strict email validation checking for standard formatting rules
  const validateEmail = (email) => {
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
    return emailRegex.test(email);
  };

  // Enforces 10 digits only for phone numbers
  const validatePhoneNumber = (number) => {
    return /^\d{10}$/.test(number);
  };

  // Validate a single field based on name and value
  const validateField = (name, value) => {
    let errorMsg = "";

    if (name === "fullName") {
      if (!value.trim()) {
        errorMsg = "Full Name is required";
      } else if (value.trim().length < 2) {
        errorMsg = "Full Name must be at least 2 characters";
      }
    }

    if (name === "email") {
      if (!value.trim()) {
        errorMsg = "Email is required";
      } else if (!validateEmail(value)) {
        errorMsg = "Please enter a valid email address";
      }
    }

    if (name === "organization") {
      if (!value.trim()) {
        errorMsg = "Organization is required";
      }
    }

    if (name === "contactNumber") {
      if (!value.trim()) {
        errorMsg = "Contact Number is required";
      } else if (!validatePhoneNumber(value.trim())) {
        errorMsg =
          "Contact Number must contain exactly 10 digits (numbers only)";
      }
    }

    if (name === "product") {
      if (!value) {
        errorMsg = "Please select a product";
      }
    }

    if (name === "purposeOfEnquiry") {
      if (!value.trim()) {
        errorMsg = "Please provide the purpose of enquiry";
      } else if (value.trim().length < 10) {
        errorMsg = "Please provide at least 10 characters";
      }
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: errorMsg,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const updated = {
        ...prevData,
        [name]: value,
      };

      // Perform real-time validation on change for dropdowns or when criteria is met
      if (name === "product") {
        validateField("product", value);
      }
      if (name === "contactNumber") {
        if (value.trim().length === 10) {
          validateField("contactNumber", value);
        } else {
          setErrors((prev) => ({ ...prev, contactNumber: "" }));
        }
      }
      return updated;
    });

    if (name !== "product" && name !== "contactNumber") {
      // Clear error as user types
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    validateField(name, value);
  };

  const validateForm = () => {
    // Run full validation on submit
    validateField("fullName", formData.fullName);
    validateField("email", formData.email);
    validateField("organization", formData.organization);
    validateField("contactNumber", formData.contactNumber);
    validateField("product", formData.product);
    validateField("purposeOfEnquiry", formData.purposeOfEnquiry);

    return (
      formData.fullName.trim().length >= 2 &&
      validateEmail(formData.email) &&
      formData.organization.trim() !== "" &&
      validatePhoneNumber(formData.contactNumber.trim()) &&
      formData.product !== "" &&
      formData.purposeOfEnquiry.trim().length >= 10
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New SSPL Website Enquiry from ${formData.fullName}`,
          from_name: "SSPL Contact Form",
          name: formData.fullName,
          email: formData.email,
          phone: `${formData.countryCode} ${formData.contactNumber}`,
          organization: formData.organization,
          product: formData.product,
          message: formData.purposeOfEnquiry,
        }),
      });

      const data = await response.json();
      if (data.success) {
        alert("Enquiry sent successfully to info@sspl.co");

        setFormData({
          fullName: "",
          email: "",
          organization: "",
          countryCode: "+91",
          contactNumber: "",
          product: "",
          purposeOfEnquiry: "",
        });
      } else {
        alert(data.message || "Error sending enquiry. Please try again.");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Error sending enquiry. Please try again.");
    }
  };

  const email = "info@sspl.co";
  const subject = "I want to inquire about ";
  const body = "Hello, I would like to...";

  return (
    <div className="w-full min-h-screen pt-28 lg:pt-24 bg-gray-50 flex flex-col justify-start">
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-[#003662] uppercase tracking-wide">
          Contact Us
        </h1>
        <div className="h-1 w-20 bg-green-700 mx-auto mt-4 rounded"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full flex flex-col lg:flex-row gap-12 items-start">
        {/* Form Column */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="w-full max-w-xl bg-white border border-gray-100 rounded-2xl p-6 md:p-10 shadow-lg">
            <form className="space-y-5" onSubmit={handleSubmit}>
              {/* Full Name */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <label className="sm:w-1/3 text-left text-sm font-semibold text-gray-700 flex-shrink-0">
                  Full Name *
                </label>
                <div className="flex-1">
                  <input
                    value={formData.fullName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="fullName"
                    className={`bg-gray-50 border ${
                      errors.fullName ? "border-red-500" : "border-gray-300"
                    } text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-[#003662] focus:border-[#003662] block w-full p-2.5 outline-none`}
                    placeholder="Enter your full name"
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.fullName}
                    </p>
                  )}
                </div>
              </div>

              {/* Email Address */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <label className="sm:w-1/3 text-left text-sm font-semibold text-gray-700 flex-shrink-0">
                  Email Address *
                </label>
                <div className="flex-1">
                  <input
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="email"
                    type="email"
                    className={`bg-gray-50 border ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    } text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-[#003662] focus:border-[#003662] block w-full p-2.5 outline-none`}
                    placeholder="Enter your email address"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Organization */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <label className="sm:w-1/3 text-left text-sm font-semibold text-gray-700 flex-shrink-0">
                  Organization *
                </label>
                <div className="flex-1">
                  <input
                    value={formData.organization}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="organization"
                    className={`bg-gray-50 border ${
                      errors.organization ? "border-red-500" : "border-gray-300"
                    } text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-[#003662] focus:border-[#003662] block w-full p-2.5 outline-none`}
                    placeholder="Enter your organization name"
                  />
                  {errors.organization && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.organization}
                    </p>
                  )}
                </div>
              </div>

              {/* Contact Number with Country Code */}
              <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
                <label className="sm:w-1/3 text-left text-sm font-semibold text-gray-700 flex-shrink-0 pt-2.5">
                  Contact Number *
                </label>
                <div className="flex-1 w-full">
                  <div className="flex gap-2">
                    <select
                      value={formData.countryCode}
                      onChange={handleChange}
                      name="countryCode"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-[#003662] focus:border-[#003662] block w-[110px] p-2.5 outline-none"
                    >
                      {countryCodes.map((country) => (
                        <option key={country.code} value={country.code}>
                          {country.code}
                        </option>
                      ))}
                    </select>
                    <input
                      value={formData.contactNumber}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="contactNumber"
                      type="tel"
                      className={`flex-1 bg-gray-50 border ${
                        errors.contactNumber
                          ? "border-red-500"
                          : "border-gray-300"
                      } text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-[#003662] focus:border-[#003662] block p-2.5 outline-none`}
                      placeholder="Enter exactly 10 digits"
                    />
                  </div>
                  {errors.contactNumber && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.contactNumber}
                    </p>
                  )}
                  <p className="text-gray-500 text-xs mt-1">
                    Enforce strictly 10 digits only.
                  </p>
                </div>
              </div>

              {/* Product Dropdown */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <label className="sm:w-1/3 text-left text-sm font-semibold text-gray-700 flex-shrink-0">
                  Product *
                </label>
                <div className="flex-1">
                  <select
                    value={formData.product}
                    onChange={handleChange}
                    name="product"
                    className={`bg-gray-50 border ${
                      errors.product ? "border-red-500" : "border-gray-300"
                    } text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-[#003662] focus:border-[#003662] block w-full p-2.5 outline-none`}
                  >
                    <option value="">Select a product</option>
                    {products.map((product) => (
                      <option key={product} value={product}>
                        {product}
                      </option>
                    ))}
                  </select>
                  {errors.product && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.product}
                    </p>
                  )}
                </div>
              </div>

              {/* Purpose of Enquiry */}
              <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
                <label className="sm:w-1/3 text-left text-sm font-semibold text-gray-700 flex-shrink-0 pt-2.5">
                  Purpose of Enquiry *
                </label>
                <div className="flex-1 w-full">
                  <textarea
                    value={formData.purposeOfEnquiry}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="purposeOfEnquiry"
                    rows="4"
                    className={`block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border ${
                      errors.purposeOfEnquiry
                        ? "border-red-500"
                        : "border-gray-300"
                    } focus:ring-2 focus:ring-[#003662] focus:border-[#003662] outline-none`}
                    placeholder="Please describe your enquiry..."
                  ></textarea>
                  {errors.purposeOfEnquiry && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.purposeOfEnquiry}
                    </p>
                  )}
                </div>
              </div>

              {/* Submit Button aligned with inputs */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                <div className="sm:w-1/3 flex-shrink-0"></div>
                <button
                  type="submit"
                  className="w-full sm:w-2/3 text-white bg-[#003662] hover:bg-[#002240] focus:ring-4 focus:outline-none focus:ring-blue-200 font-semibold rounded-lg text-sm px-5 py-3 text-center transition-colors duration-300 shadow-md animate-none"
                >
                  Submit Enquiry
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Address and Map Column */}
        <div className="w-full lg:w-1/2 space-y-6 text-gray-700 text-base md:text-lg">
          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-10 shadow-lg space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2 text-[#003662]">
                <HiBuildingOffice className="text-2xl" />
                <h2 className="text-2xl font-bold font-serif">
                  SATYANARAYAN SEKHSARIA PVT. LTD
                </h2>
              </div>
              <div className="pl-8 text-gray-600">
                <p>94, 9th floor, Maker Chamber III,</p>
                <p>Nariman Point, Mumbai - 400021, India</p>
              </div>
            </div>

            <div className="border-t border-gray-100 pt-6 space-y-4">
              <div className="flex items-center gap-3">
                <GiRotaryPhone className="text-xl text-[#003662]" />
                <p className="text-gray-600">
                  <span className="font-semibold text-gray-800">Phone:</span>{" "}
                  +91 22 4057 0360
                </p>
              </div>
              <div className="flex items-center gap-3">
                <MdOutlineAttachEmail className="text-xl text-[#003662]" />
                <p className="text-gray-600">
                  <span className="font-semibold text-gray-800">Email:</span>{" "}
                  <a
                    href={`mailto:${email}?subject=${subject}&body=${body}`}
                    className="text-[#003662] hover:underline"
                  >
                    {email}
                  </a>
                </p>
              </div>
              <div className="flex items-center gap-3">
                <FaClock className="text-xl text-[#003662]" />
                <p className="text-gray-600">
                  <span className="font-semibold text-gray-800">Hours:</span>{" "}
                  Monday To Friday, 9am - 6pm
                </p>
              </div>
            </div>

            <div className="w-full mt-6 rounded-xl overflow-hidden shadow-md border border-gray-100">
              <iframe
                title="Office Location Map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d483090.85185613966!2d72.823173!3d18.924874!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1e944dac3d7%3A0x61c1f7b11b32e334!2sMaker%20Chambers%203!5e0!3m2!1sen!2sus!4v1716837749064!5m2!1sen!2sus"
                width="100%"
                height="320"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
