import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import cement from "../images/cotton1.JPG";
import cot from "../images/chem1.png";
import chem from "../images/chem2.JPG";
import agri from "../images/food.jpg";
import co from "../images/oil.jpg";
import cashewProd from "../images/cashew-prod.png";
import pulsesProd from "../images/pulses-prod.jpeg";

const timelineData = [
  {
    year: 1974,
    title: "SSPL Incorporated",
    description: "Beginning of the cotton business.",
    image: cement,
    color: "#c62828",
  },
  {
    year: 1979,
    title: "Sekhsaria Chemicals",
    description: "Expansion into pharmaceuticals.",
    image: cot,
    color: "#1565c0",
  },
  {
    year: 2006,
    title: "Watson Acquisition",
    description: "Major milestone for the company.",
    image: chem,
    color: "#26a69a",
  },
  {
    year: 2008,
    title: "Agriculture",
    description: "Agricultural commodities trading.",
    image: agri,
    color: "#f9a825",
  },
  {
    year: 2019,
    title: "Castor Oil Export",
    description: "International exports begin.",
    image: co,
    color: "#ef6c00",
  },
  {
    year: 2023,
    title: "Cashew Business",
    description: "Entry into premium dry fruits.",
    image: cashewProd,
    color: "#8e24aa",
  },
  {
    year: 2024,
    title: "Pulses Trading",
    description: "Expansion into pulses market.",
    image: pulsesProd,
    color: "#00897b",
  },
];

const HistoryVariant3 = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 700,
    });
  }, []);

  return (
    <section className="bg-white py-20 overflow-x-auto">
      <div className="max-w-[1700px] mx-auto px-10">
        <div className="mb-20">
          <h2 className="text-5xl font-bold text-gray-900">OUR JOURNEY</h2>

          <div className="w-24 h-1 bg-red-700 mt-4"></div>

          <p className="mt-5 text-gray-500 max-w-xl">
            More than five decades of innovation and continuous growth.
          </p>
        </div>

        <div className="relative min-w-[1450px]">
          {/* Main Horizontal Line */}

          <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gray-300"></div>

          <div className="grid grid-cols-7 relative">
            {timelineData.map((item, index) => {
              const top = index % 2 === 0;

              return (
                <div
                  key={item.year}
                  className="relative flex flex-col items-center"
                >
                  {/* TOP CARD */}

                  {top ? (
                    <>
                      <div className="pb-10 text-center" data-aos="fade-down">
                        <img
                          src={item.image}
                          alt=""
                          className="w-44 h-28 object-cover rounded-md shadow"
                        />

                        <h3
                          className="mt-4 font-bold uppercase"
                          style={{ color: item.color }}
                        >
                          {item.title}
                        </h3>

                        <p className="text-xs mt-2 text-gray-600 px-3">
                          {item.description}
                        </p>
                      </div>

                      <div
                        className="w-[2px] h-16"
                        style={{ background: item.color }}
                      />
                    </>
                  ) : (
                    <div className="h-[220px]" />
                  )}

                  {/* DOT */}

                  <div
                    className="w-5 h-5 rounded-full border-4 border-white z-20"
                    style={{ background: item.color }}
                  />

                  {/* YEAR */}

                  <div
                    className="mt-4 text-2xl font-bold"
                    style={{ color: item.color }}
                  >
                    {item.year}
                  </div>

                  {/* BOTTOM */}

                  {!top ? (
                    <>
                      <div
                        className="w-[2px] h-16"
                        style={{ background: item.color }}
                      />

                      <div className="pt-10 text-center" data-aos="fade-up">
                        <img
                          src={item.image}
                          alt=""
                          className="w-44 h-28 object-cover rounded-md shadow"
                        />

                        <h3
                          className="mt-4 font-bold uppercase"
                          style={{ color: item.color }}
                        >
                          {item.title}
                        </h3>

                        <p className="text-xs mt-2 text-gray-600 px-3">
                          {item.description}
                        </p>
                      </div>
                    </>
                  ) : (
                    <div className="h-[220px]" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistoryVariant3;
