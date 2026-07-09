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
    description: "Founded with a legacy in the raw cotton trading business.",
    image: cement,
    color: "#f47c20",
  },
  {
    year: 1979,
    title: "Sekhsaria Chemicals",
    description: "Expanded into pharmaceutical manufacturing.",
    image: cot,
    color: "#1565C0",
  },
  {
    year: 2006,
    title: "Watson Acquisition",
    description: "Major acquisition by Watson Pharmaceuticals.",
    image: chem,
    color: "#5E35B1",
  },
  {
    year: 2008,
    title: "Agriculture",
    description: "Entered agricultural commodities trading.",
    image: agri,
    color: "#D4A017",
  },
  {
    year: 2019,
    title: "Castor Oil Export",
    description: "Started international exports.",
    image: co,
    color: "#C62828",
  },
  {
    year: 2023,
    title: "Cashew Business",
    description: "Expansion into premium dry fruits.",
    image: cashewProd,
    color: "#689F38",
  },
  {
    year: 2024,
    title: "Pulses Trading",
    description: "Entered global pulses trading market.",
    image: pulsesProd,
    color: "#009688",
  },
];

const HistoryVariant4 = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
    });
  }, []);

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-[1800px] mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold">OUR JOURNEY</h2>

          <p className="mt-4 text-gray-500">
            Five decades of growth and innovation
          </p>
        </div>

        <div className="overflow-x-auto pb-8">
          <div className="min-w-[1700px]">
            {/* Arrow Timeline */}

            <div className="grid grid-cols-7">
              {timelineData.map((item, index) => (
                <div key={item.year} className="relative">
                  <div
                    className={`relative h-16 flex items-center justify-center text-white font-bold text-xl ${
                      index !== timelineData.length - 1
                        ? "clip-arrow"
                        : "rounded-r-md"
                    }`}
                    style={{
                      background: item.color,
                    }}
                  >
                    {item.year}
                  </div>
                </div>
              ))}
            </div>

            {/* Cards */}

            <div className="grid grid-cols-7 mt-12 gap-6">
              {timelineData.map((item, index) => (
                <div
                  key={item.year}
                  className="flex flex-col items-center"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  {/* Connector */}

                  <div
                    className="w-[3px] h-10"
                    style={{
                      background: item.color,
                    }}
                  />

                  {/* Circle */}

                  <div
                    className="w-6 h-6 rounded-full border-4 border-white shadow"
                    style={{
                      background: item.color,
                    }}
                  />

                  {/* Semi Circle */}

                  <div
                    className="w-28 h-14 border-[6px] border-b-0 rounded-t-full mt-4 flex justify-center items-end"
                    style={{
                      borderColor: item.color,
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-12 h-12 rounded-full object-cover bg-white p-1"
                    />
                  </div>

                  {/* Card */}

                  <div className="bg-white rounded-3xl shadow-md mt-0 p-6 text-center">
                    <h3
                      className="font-bold text-xl"
                      style={{
                        color: item.color,
                      }}
                    >
                      {item.title}
                    </h3>

                    <p className="text-sm text-gray-600 mt-3 leading-6">
                      {item.description}
                    </p>

                    <div
                      className="h-2 rounded-full w-20 mx-auto mt-6"
                      style={{
                        background: item.color,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .clip-arrow{
            clip-path: polygon(
              0 0,
              88% 0,
              100% 50%,
              88% 100%,
              0 100%,
              10% 50%
            );
        }
      `}</style>
    </section>
  );
};

export default HistoryVariant4;
