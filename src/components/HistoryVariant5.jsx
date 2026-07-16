import React, { useEffect, useRef, useState } from "react";

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
    description: "Incorporated in 1974, SSPL boasts a rich legacy backed by its founders' extensive experience spanning over seven decades in the raw-cotton supply business. This wealth of knowledge and expertise has been instrumental in establishing strong and enduring relationships with reputed textile mills. Over the years, SSPL has built a reputation for reliability and quality, consistently providing high-grade raw cotton to meet the stringent demands of the textile industry.",
    image: cement,
    color: "#c62828",
  },
  {
    year: 1979,
    title: "Sekhsaria Chemicals Pvt. Ltd. was established",
    description: "In 1979, Sekhsaria Chemicals Pvt. Ltd. was established as a wholly owned subsidiary, marking a strategic expansion into the pharmaceutical sector. This subsidiary focuses on process research and the USFDA-approved contract manufacturing of active pharmaceutical ingredients (API) and related intermediaries. By adhering to stringent regulatory standards, Sekhsaria Chemicals ensures the production of high-quality pharmaceutical components essential for drug development and manufacturing.",
    image: cot,
    color: "#1565c0",
  },
  {
    year: 2006,
    title: "Sekhsaria Chemicals Ltd was acquired",
    description: "Sekhsaria Chemicals Ltd was acquired by Watson Pharmaceuticals Inc, the third-largest pharmaceuticals company in the USA.",
    image: chem,
    color: "#26a69a",
  },
  {
    year: 2008,
    title: "Engaging in the trading of various agricultural commodities",
    description: "In 2008, Engaging in the trading of various agricultural commodities taps into the dynamic agribusiness sector, promoting sustainability and ensuring the availability of essential products in different markets. These ventures highlight a commitment to excellence and innovation in both agricultural and industrial domains.",
    image: agri,
    color: "#f9a825",
  },
  {
    year: 2019,
    title: "FSG Castor Oil Export",
    description: "In 2019, Venturing into the export of FSG Castor Oil marks a significant milestone. With its applications ranging from industrial to personal care products, castor oil is a versatile and in-demand commodity. By ensuring the highest standards of quality, this initiative aims to cater to diverse industries worldwide, contributing to the international supply chain of a highly sought-after natural product.",
    image: co,
    color: "#ef6c00",
  },
  {
    year: 2023,
    title: "Cashew Business Launch",
    description: "In 2023, SSPL started most promising business. The Cashew business is one of the fastest growing businesses. Cashew is very famous & is being eaten not only as a raw dry fruit but also is used in cooking purposes. This nut is in high demand nuts throughout the year in India.",
    image: cashewProd,
    color: "#8e24aa",
  },
  {
    year: 2024,
    title: "Pulses Trading Business",
    description: "In 2024, engaged in the trading business of different pulses. Pulses are one of the important food crops due to their higher protein content. With rising focus on food security, plant-based nutrition, and sustainable agriculture, demand for pulses continues to grow across international markets.",
    image: pulsesProd,
    color: "#00897b",
  },
];

const HistoryVariant5 = () => {
  const trackRef = useRef(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const handleScroll = () => {
      const cardWidthWithGap = 540 + 48; // Card width (540) + gap (48)
      const scrollPos = track.scrollLeft;
      const index = Math.round(scrollPos / cardWidthWithGap);
      setActiveCardIndex(index);
    };

    const handleWheel = (e) => {
      const isAtEnd = track.scrollLeft >= (track.scrollWidth - track.clientWidth - 5);
      const isAtStart = track.scrollLeft <= 5;
      
      if ((e.deltaY > 0 && !isAtEnd) || (e.deltaY < 0 && !isAtStart)) {
        e.preventDefault();
        track.scrollLeft += e.deltaY;
      }
    };

    track.addEventListener("scroll", handleScroll);
    track.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      track.removeEventListener("scroll", handleScroll);
      track.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <section className="bg-white py-4 w-full select-none">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Horizontal scroll container designed to fit the larger cards on one screen height */}
        <div 
          ref={trackRef}
          className="relative w-full h-[600px] overflow-x-auto overflow-y-hidden flex items-center gap-12 px-[20vw] md:px-[35vw] scroll-smooth"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {/* Hide scrollbar for Chrome/Safari */}
          <style>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          {/* Main Horizontal Line */}
          <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gray-300 -translate-y-1/2 z-10"></div>

          {timelineData.map((item, index) => {
            const top = index % 2 === 0;
            const distance = Math.abs(index - activeCardIndex);
            
            // Focus Zoom variables based on active card center location
            const scale = Math.max(0.82, 1 - distance * 0.08);
            const opacity = Math.max(0.4, 1 - distance * 0.25);

            return (
              <div
                key={item.year}
                className="relative flex-shrink-0 flex flex-col items-center w-[540px] transition-all duration-300 ease-out will-change-transform"
                style={{
                  transform: `scale(${scale})`,
                  opacity: opacity,
                }}
              >
                {/* TOP CARD */}
                {top ? (
                  <div className="flex flex-col items-center">
                    <div 
                      className="w-[540px] h-[240px] bg-white border border-gray-100 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-row overflow-hidden"
                    >
                      {/* Left Side: Image container */}
                      <div className="w-[180px] bg-gray-50 flex items-center justify-center p-3 flex-shrink-0 border-r border-gray-100">
                        <div className="w-full h-full bg-white rounded-lg overflow-hidden p-1 flex items-center justify-center shadow-inner">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="max-w-full max-h-full object-contain"
                          />
                        </div>
                      </div>
                      
                      {/* Right Side: Text content */}
                      <div className="p-4 flex-1 flex flex-col justify-between overflow-y-auto text-left">
                        <div className="space-y-1.5">
                          <h4 className="text-sm md:text-base font-bold font-serif uppercase tracking-wider mb-1.5" style={{ color: item.color }}>
                            {item.title}
                          </h4>
                          <p className="text-xs md:text-sm text-gray-500 leading-relaxed text-justify">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* Connector line */}
                    <div className="w-[2px] h-5 mt-2" style={{ background: item.color }}></div>
                  </div>
                ) : (
                  <div className="h-[262px]" /> /* spacer to balance */
                )}

                {/* DOT */}
                <div
                  className="w-4 h-4 rounded-full border-4 border-white z-20 shadow flex-shrink-0"
                  style={{ background: item.color }}
                />

                {/* YEAR */}
                <div
                  className="my-1.5 text-2xl font-extrabold font-serif flex-shrink-0"
                  style={{ color: item.color }}
                >
                  {item.year}
                </div>

                {/* BOTTOM CARD */}
                {!top ? (
                  <div className="flex flex-col items-center">
                    {/* Connector line */}
                    <div className="w-[2px] h-5 mb-2" style={{ background: item.color }}></div>
                    <div 
                      className="w-[540px] h-[240px] bg-white border border-gray-100 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-row overflow-hidden"
                    >
                      {/* Left Side: Image container */}
                      <div className="w-[180px] bg-gray-50 flex items-center justify-center p-3 flex-shrink-0 border-r border-gray-100">
                        <div className="w-full h-full bg-white rounded-lg overflow-hidden p-1 flex items-center justify-center shadow-inner">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="max-w-full max-h-full object-contain"
                          />
                        </div>
                      </div>
                      
                      {/* Right Side: Text content */}
                      <div className="p-4 flex-1 flex flex-col justify-between overflow-y-auto text-left">
                        <div className="space-y-1.5">
                          <h4 className="text-sm md:text-base font-bold font-serif uppercase tracking-wider mb-1.5" style={{ color: item.color }}>
                            {item.title}
                          </h4>
                          <p className="text-xs md:text-sm text-gray-500 leading-relaxed text-justify">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="h-[262px]" /> /* spacer to balance */
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HistoryVariant5;
