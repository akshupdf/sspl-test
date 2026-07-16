import React, { useEffect, useRef, useState } from "react";
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
      "Incorporated in 1974, SSPL boasts a rich legacy backed by its founders' extensive experience spanning over seven decades in the raw-cotton supply business. This wealth of knowledge and expertise has been instrumental in establishing strong and enduring relationships with reputed textile mills. Over the years, SSPL has built a reputation for reliability and quality, consistently providing high-grade raw cotton to meet the stringent demands of the textile industry.",
    image: cement,
    color: "#c62828",
  },
  {
    year: 1979,
    title: "Sekhsaria Chemicals Ltd. (Subsidiary)",
    description:
      "In 1979, Sekhsaria Chemicals Pvt. Ltd. was established as a wholly owned subsidiary, marking a strategic expansion into the pharmaceutical sector. This subsidiary focuses on process research and the USFDA-approved contract manufacturing of active pharmaceutical ingredients (API) and related intermediaries. By adhering to stringent regulatory standards, Sekhsaria Chemicals ensures the production of high-quality pharmaceutical components essential for drug development and manufacturing.",
    image: cot,
    color: "#1565c0",
  },
  {
    year: 2006,
    title: "Sekhsaria Chemicals Limited (sold) Watson Pharma Acquired ",
    description:
      "Sekhsaria Chemicals Ltd was acquired by Watson Pharmaceuticals Inc, the third-largest pharmaceuticals company in the USA.",
    image: chem,
    color: "#26a69a",
  },
  {
    year: 2008,
    title: "Engaging in the Trading of Agri Commodities",
    description:
      "In 2008, Engaging in the trading of various agricultural commodities taps into the dynamic agribusiness sector, promoting sustainability and ensuring the availability of essential products in different markets. These ventures highlight a commitment to excellence and innovation in both agricultural and industrial domains.",
    image: agri,
    color: "#f9a825",
  },
  {
    year: 2019,
    title: "FSG Castor Oil",
    description:
      "In 2019, Venturing into the export of FSG Castor Oil marks a significant milestone. With its applications ranging from industrial to personal care products, castor oil is a versatile and in-demand commodity. By ensuring the highest standards of quality, this initiative aims to cater to diverse industries worldwide, contributing to the international supply chain of a highly sought-after natural product.",
    image: co,
    color: "#ef6c00",
  },
  {
    year: 2023,
    title: "Cashew Business Launch",
    description:
      "In 2023, SSPL started most promising business. The Cashew business is one of the fastest growing businesses. Cashew is very famous & is being eaten not only as a raw dry fruit but also is used in cooking purposes. This nut is in high demand nuts throughout the year in India.",
    image: cashewProd,
    color: "#8e24aa",
  },
  {
    year: 2024,
    title: "Trading of Metals",
    description:
      "In 2024, engaged in the trading business of different metals. Metals are essential commodities in various industries, and their demand continues to grow with advancements in technology and infrastructure. By focusing on quality and sustainability, this initiative aims to establish a strong presence in the global metals market.",
    image: pulsesProd,
    color: "#00897b",
  },
];

const HistoryVariant3 = () => {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
    });

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const scrolled = -rect.top;
      const scrollableHeight = rect.height - window.innerHeight;

      if (scrollableHeight > 0) {
        let progress = scrolled / scrollableHeight;
        progress = Math.max(0, Math.min(1, progress));
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const activeCardIndex = scrollProgress * (timelineData.length - 1);

  return (
    <div ref={containerRef} className="relative w-full h-[400vh] ">
      {/* Sticky viewport container */}
      <div className="sticky top-24 h-[calc(100vh-6rem)] w-full overflow-hidden flex items-center justify-center perspective-[1500px]">
        {/* Book Container wrapper */}
        <div className="relative w-[90vw] md:w-[800px] h-[520px] md:h-[420px] flex items-center justify-center transform-style-3d">
          {timelineData.map((item, index) => {
            const localProgress = activeCardIndex - index;

            let rotateY = 0;
            let opacity = 1;
            let zIndex = timelineData.length - index;
            let pointerEvents = "auto";

            if (localProgress < 0) {
              // Pages that haven't been turned yet (flat on the stack)
              rotateY = 0;
              opacity = 1;
              zIndex = timelineData.length - index;
            } else if (localProgress >= 0 && localProgress < 1) {
              // Page currently turning
              rotateY = -localProgress * 180;
              zIndex = timelineData.length + index; // Keep on top while turning
              opacity = 1;
            } else {
              // Page has finished turning
              rotateY = -180;
              opacity = 0;
              zIndex = index;
              pointerEvents = "none";
            }

            return (
              <div
                key={item.year}
                className="absolute w-full h-full bg-white border border-gray-150 rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden transition-transform duration-75 ease-out will-change-transform"
                style={{
                  transform: `rotateY(${rotateY}deg)`,
                  opacity: opacity,
                  zIndex: zIndex,
                  pointerEvents: pointerEvents,
                  transformOrigin: "left center",
                  backfaceVisibility: "hidden",
                }}
              >
                {/* Left Side: Image container (never cropped) */}
                <div className="h-[200px] md:h-full md:w-[320px] bg-gray-50 flex items-center justify-center p-4 flex-shrink-0 border-b md:border-b-0 md:border-r border-gray-100">
                  <div className="w-full h-full bg-white rounded-xl overflow-hidden p-1 flex items-center justify-center shadow-inner">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </div>

                {/* Right Side: Text content */}
                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between overflow-y-auto text-left">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span
                        className="text-4xl md:text-5xl font-extrabold tracking-tight font-serif"
                        style={{ color: item.color }}
                      >
                        {item.year}
                      </span>
                      <div
                        className="h-1.5 w-16 rounded"
                        style={{ backgroundColor: item.color }}
                      ></div>
                    </div>

                    <h3 className="text-lg md:text-xl font-bold text-gray-800 font-serif leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 text-xs md:text-sm leading-relaxed text-justify">
                      {item.description}
                    </p>
                  </div>

                  {/* Page number footer */}
                  <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center text-xs text-gray-400 font-mono">
                    <span>SATYANARAYAN SEKHSARIA PRIVATE LIMITED</span>
                    <span>
                      PAGE {index + 1} OF {timelineData.length}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HistoryVariant3;
