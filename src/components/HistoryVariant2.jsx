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
    title: "Incorporation of Satyanarayan Sehksaria Private Limited",
    description:
      "Incorporated in 1974, SSPL boasts a rich legacy backed by its founders' extensive experience spanning over seven decades in the raw cotton supply business.",
    image: cement,
  },
  {
    year: 1979,
    title: "Sekhsaria Chemicals Pvt. Ltd. Established",
    description:
      "Established as a wholly owned subsidiary focusing on pharmaceutical process research and USFDA-approved contract manufacturing.",
    image: cot,
  },
  {
    year: 2006,
    title: "Sekhsaria Chemicals Ltd. Acquired",
    description:
      "Watson Pharmaceuticals Inc. acquired Sekhsaria Chemicals, marking a major milestone in the company's journey.",
    image: chem,
  },
  {
    year: 2008,
    title: "Agricultural Commodities Trading",
    description:
      "Expanded into agricultural commodities trading, strengthening the company's presence in the agribusiness sector.",
    image: agri,
  },
  {
    year: 2019,
    title: "FSG Castor Oil Export",
    description:
      "Started exporting premium quality FSG Castor Oil to international markets.",
    image: co,
  },
  {
    year: 2023,
    title: "Cashew Business Launch",
    description:
      "Entered the cashew business with a focus on premium quality products for domestic and export markets.",
    image: cashewProd,
  },
  {
    year: 2024,
    title: "Pulses Trading Business",
    description:
      "Expanded into pulses trading to support food security and sustainable agriculture.",
    image: pulsesProd,
  },
];

const HistoryVariant2 = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out",
    });
  }, []);

  return (
    <section className="bg-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <div className="text-center mb-24" data-aos="fade-down">
          <h2 className="text-5xl md:text-6xl font-bold tracking-wide text-gray-900">
            OUR HISTORY
          </h2>

          <div className="w-20 h-1 bg-[#8b1e24] mx-auto mt-5"></div>
        </div>

        {/* Timeline */}

        <div className="relative">
          {/* Triple Line */}

          <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 hidden md:flex gap-[5px]">
            <div className="w-[2px] bg-[#8b1e24]" />
            <div className="w-[5px] bg-[#8b1e24]" />
            <div className="w-[2px] bg-[#8b1e24]" />
          </div>

          {/* Mobile Line */}

          <div className="absolute left-5 top-0 bottom-0 md:hidden w-[3px] bg-[#8b1e24]" />

          {timelineData.map((item, index) => {
            const left = index % 2 === 0;

            return (
              <div
                key={item.year}
                className="relative grid md:grid-cols-2 py-20"
                data-aos={left ? "fade-right" : "fade-left"}
              >
                {/* Desktop Left */}

                {left && (
                  <>
                    <div className="pr-20 text-right hidden md:block">
                      <h2 className="text-6xl font-extrabold text-[#8b1e24]">
                        {item.year}
                      </h2>

                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-[340px] h-[210px] object-cover mt-8 ml-auto"
                      />

                      <h3 className="mt-8 text-2xl font-semibold text-gray-900">
                        {item.title}
                      </h3>

                      <p className="mt-4 text-gray-600 leading-8">
                        {item.description}
                      </p>
                    </div>

                    <div className="hidden md:block"></div>
                  </>
                )}

                {/* Desktop Right */}

                {!left && (
                  <>
                    <div className="hidden md:block"></div>

                    <div className="pl-20">
                      <h2 className="text-6xl font-extrabold text-[#8b1e24]">
                        {item.year}
                      </h2>

                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-[340px] h-[210px] object-cover mt-8"
                      />

                      <h3 className="mt-8 text-2xl font-semibold text-gray-900">
                        {item.title}
                      </h3>

                      <p className="mt-4 text-gray-600 leading-8">
                        {item.description}
                      </p>
                    </div>
                  </>
                )}

                {/* Desktop Dot */}

                <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="w-5 h-5 rounded-full bg-[#8b1e24] border-[5px] border-white"></div>
                </div>

                {/* Mobile Layout */}

                <div className="md:hidden pl-12 relative">
                  <div className="absolute left-[10px] top-4 w-4 h-4 rounded-full bg-[#8b1e24]"></div>

                  <h2 className="text-4xl font-bold text-[#8b1e24]">
                    {item.year}
                  </h2>

                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-56 object-cover mt-5"
                  />

                  <h3 className="mt-6 text-xl font-semibold">{item.title}</h3>

                  <p className="mt-3 text-gray-600 leading-7">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HistoryVariant2;
