import React, { useState } from "react";
import { GiRotaryPhone } from "react-icons/gi";
import { MdOutlineAttachEmail } from "react-icons/md";
import { HiBuildingOffice } from "react-icons/hi2";
import { FaClock } from "react-icons/fa";

const countryCodes = [
  {
    code: "+1",
    country: "USA/Canada",
    pattern: /^\d{10}$/,
    example: "1234567890",
  },
  { code: "+44", country: "UK", pattern: /^\d{10,11}$/, example: "7123456789" },
  { code: "+91", country: "India", pattern: /^\d{10}$/, example: "9876543210" },
  {
    code: "+61",
    country: "Australia",
    pattern: /^\d{9,10}$/,
    example: "412345678",
  },
  {
    code: "+86",
    country: "China",
    pattern: /^\d{11}$/,
    example: "13812345678",
  },
  {
    code: "+49",
    country: "Germany",
    pattern: /^\d{10,11}$/,
    example: "15123456789",
  },
  { code: "+33", country: "France", pattern: /^\d{9}$/, example: "612345678" },
  {
    code: "+81",
    country: "Japan",
    pattern: /^\d{10,11}$/,
    example: "9012345678",
  },
  { code: "+971", country: "UAE", pattern: /^\d{9,10}$/, example: "501234567" },
  {
    code: "+65",
    country: "Singapore",
    pattern: /^\d{8}$/,
    example: "91234567",
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

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhoneNumber = (number, countryCode) => {
    const country = countryCodes.find((c) => c.code === countryCode);
    if (country && country.pattern) {
      return country.pattern.test(number);
    }
    return /^\d{7,15}$/.test(number);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error for this field
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const validateForm = () => {
    const newErrors = {};

    // Full Name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required";
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Full Name must be at least 2 characters";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Organization validation
    if (!formData.organization.trim()) {
      newErrors.organization = "Organization is required";
    }

    // Contact Number validation
    if (!formData.contactNumber.trim()) {
      newErrors.contactNumber = "Contact Number is required";
    } else if (
      !validatePhoneNumber(formData.contactNumber, formData.countryCode)
    ) {
      const country = countryCodes.find((c) => c.code === formData.countryCode);
      newErrors.contactNumber = `Invalid format. Expected: ${country.example}`;
    }

    // Product validation
    if (!formData.product) {
      newErrors.product = "Please select a product";
    }

    // Purpose of Enquiry validation
    if (!formData.purposeOfEnquiry.trim()) {
      newErrors.purposeOfEnquiry = "Please provide the purpose of enquiry";
    } else if (formData.purposeOfEnquiry.trim().length < 10) {
      newErrors.purposeOfEnquiry = "Please provide at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const response = await fetch(
        "https://feedback-backend-3ocf.onrender.com/feedback",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();
      if (data.success) {
        alert("Enquiry sent successfully");

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
        alert("Error sending enquiry");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Error sending enquiry");
    }
  };

  const email = "info@sspl.co";
  const subject = "I want to inquire about ";
  const body = "Hello, I would like to...";

  return (
    <div className="h-auto w-[100%]">
      <h1 className="w-[100%] text-center 2xl:text-6xl backdrop-blur-sm pt-2 sm:text-4xl">
        CONTACT US
      </h1>
      <div className="flex xl:flex-row sm:flex-col">
        <div className="xl:w-[50%] 2xl:w-[50%] sm:w-[100%] justify-center items-center sm:flex-none flex">
          <div className="rounded-xl border border-black xl:p-10 shadow-xl">
            <form
              className="2xl:w-[60vh] xl:w-[80vh] mx-auto sm:w-[50vh] p-4"
              onSubmit={handleSubmit}
            >
              {/* Full Name */}
              <div className="mb-4">
                <label className="block mb-2 text-xl font-medium">
                  Full Name *
                </label>
                <input
                  value={formData.fullName}
                  onChange={handleChange}
                  name="fullName"
                  className={`bg-gray-50 border ${
                    errors.fullName ? "border-red-500" : "border-gray-300"
                  } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
                  placeholder="Enter your full name"
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
                )}
              </div>

              {/* Email Address */}
              <div className="mb-4">
                <label className="block mb-2 text-xl font-medium">
                  Email Address *
                </label>
                <input
                  value={formData.email}
                  onChange={handleChange}
                  name="email"
                  type="email"
                  className={`bg-gray-50 border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
                  placeholder="Enter your email address"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Organization */}
              <div className="mb-4">
                <label className="block mb-2 text-xl font-medium">
                  Organization *
                </label>
                <input
                  value={formData.organization}
                  onChange={handleChange}
                  name="organization"
                  className={`bg-gray-50 border ${
                    errors.organization ? "border-red-500" : "border-gray-300"
                  } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
                  placeholder="Enter your organization name"
                />
                {errors.organization && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.organization}
                  </p>
                )}
              </div>

              {/* Contact Number with Country Code */}
              <div className="mb-4">
                <label className="block mb-2 text-xl font-medium">
                  Contact Number *
                </label>
                <div className="flex gap-2">
                  <select
                    value={formData.countryCode}
                    onChange={handleChange}
                    name="countryCode"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[110px] p-2.5"
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
                    name="contactNumber"
                    type="tel"
                    className={`flex-1 bg-gray-50 border ${
                      errors.contactNumber
                        ? "border-red-500"
                        : "border-gray-300"
                    } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5`}
                    placeholder="Enter contact number"
                  />
                </div>
                {errors.contactNumber && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.contactNumber}
                  </p>
                )}
                <p className="text-gray-500 text-xs mt-1">
                  Format:{" "}
                  {
                    countryCodes.find((c) => c.code === formData.countryCode)
                      ?.example
                  }
                </p>
              </div>

              {/* Product Dropdown */}
              <div className="mb-4">
                <label className="block mb-2 text-xl font-medium">
                  Product *
                </label>
                <select
                  value={formData.product}
                  onChange={handleChange}
                  name="product"
                  className={`bg-gray-50 border ${
                    errors.product ? "border-red-500" : "border-gray-300"
                  } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
                >
                  <option value="">Select a product</option>
                  {products.map((product) => (
                    <option key={product} value={product}>
                      {product}
                    </option>
                  ))}
                </select>
                {errors.product && (
                  <p className="text-red-500 text-sm mt-1">{errors.product}</p>
                )}
              </div>

              {/* Purpose of Enquiry */}
              <div className="mb-4">
                <label className="block mb-2 text-xl font-medium">
                  Purpose of Enquiry *
                </label>
                <textarea
                  value={formData.purposeOfEnquiry}
                  onChange={handleChange}
                  name="purposeOfEnquiry"
                  rows="4"
                  className={`block p-2.5 w-full text-xl text-gray-900 bg-gray-50 rounded-lg border ${
                    errors.purposeOfEnquiry
                      ? "border-red-500"
                      : "border-gray-300"
                  } focus:ring-blue-500 focus:border-blue-500`}
                  placeholder="Please describe your enquiry..."
                ></textarea>
                {errors.purposeOfEnquiry && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.purposeOfEnquiry}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 mt-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="xl:w-[50%] 2xl:w-[50%] sm:w-[100%] m-auto text-xl p-4">
          <div className="flex mt-7 mb-2">
            <span className="mr-2 mt-1">
              {" "}
              <HiBuildingOffice />
            </span>
            <p className="text-2xl font-bold ">
              SATYANARAYAN SEKHSARIA PVT. LTD
            </p>
          </div>
          <p>94, 9th floor, Maker Chamber III,</p>
          <p>Nariman Point </p>
          <p> Mumbai 400021 India</p>
          <div className="flex mt-2">
            <span className="mr-2 mt-1">
              <GiRotaryPhone />
            </span>{" "}
            <p> +91 22 4057 0360 </p>
          </div>
          <div className="flex">
            <span className="mr-2 mt-1">
              <MdOutlineAttachEmail />{" "}
            </span>{" "}
            <a href={`mailto:${email}?subject=${subject}&body=${body}`}>
              {email}
            </a>
          </div>
          <div className="flex mt-2">
            <span className="mr-2 ml-0 mt-1">
              <FaClock />{" "}
            </span>{" "}
            <p>Monday To Friday :- 9am-6pm</p>
          </div>
          <div className="xl:w-[80vh] 2xl:w-[100vh] sm:w-auto  mt-10 flex mb-10">
            <iframe
              title="myFrame"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d483090.85185613966!2d72.823173!3d18.924874!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1e944dac3d7%3A0x61c1f7b11b32e334!2sMaker%20Chambers%203!5e0!3m2!1sen!2sus!4v1716837749064!5m2!1sen!2sus"
              width="700"
              height="300"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
