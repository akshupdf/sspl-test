/*
MOBILE UPDATE TODO (preserving desktop):
- Wrap existing desktop timeline in: <div className="hidden md:block">...</div>
- Add a new mobile-only layout: <div className="block md:hidden">...</div>
- Mobile layout should render one card at a time vertically:
    Card
     |
    Dot
    Year
     |
    Card
- Keep desktop code unchanged.
*/

import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import cement from "../images/cotton1.JPG";
import cot from "../images/chem1.png";
import chem from "../images/chem2.JPG";
import agri from "../images/food.jpg";
import co from "../images/oil.jpg";
import cashewProd from "../images/cashew-prod.png";
import pulsesProd from "../images/metal.jpg";

const timelineData = [
  {
    year: 1974,
    title: "Raw Cotton Trading & Export",
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
    title: "Sekhsaria chemicals sold to Watson Pharma",
    description:
      "Sekhsaria Chemicals Ltd was sold to Watson Pharmaceuticals Inc, the third-largest pharmaceuticals company in the USA.",
    image: chem,
    color: "#26a69a",
  },
  {
    year: 2008,
    title: "Engaging in the trading of various Agri Commodities",
    description:
      "In 2008, Engaging in the trading of various Agri Commodities taps into the dynamic agribusiness sector, promoting sustainability and ensuring the availability of essential products in different markets. These ventures highlight a commitment to excellence and innovation in both agricultural and industrial domains.",
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
      "In 2024, engaged in the trading business of different metals. Metals are essential commodities in various industries, and with the growing demand for sustainable and ethically sourced materials, SSPL aims to establish a strong presence in the global metals market.",
    image: pulsesProd,
    color: "#00897b",
  },
];

const HistoryVariant6 = () => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [maxTranslate, setMaxTranslate] = useState(0);

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

  useEffect(() => {
    const updateMaxTranslate = () => {
      if (trackRef.current) {
        const trackWidth = trackRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        setMaxTranslate(Math.max(0, trackWidth - viewportWidth));
      }
    };

    updateMaxTranslate();
    window.addEventListener("load", updateMaxTranslate);
    window.addEventListener("resize", updateMaxTranslate);

    const t1 = setTimeout(updateMaxTranslate, 100);
    const t2 = setTimeout(updateMaxTranslate, 1000);

    return () => {
      window.removeEventListener("load", updateMaxTranslate);
      window.removeEventListener("resize", updateMaxTranslate);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  const activeCardIndex = scrollProgress * (timelineData.length - 1);

  return (
    <>
      {/* Desktop Timeline */}
      <div
        ref={containerRef}
        className="relative w-full bg-white hidden md:block h-[350vh]"
      >
        {/* Sticky viewport wrapper */}
        <div className="sticky top-20 h-[calc(100vh-5rem)] w-full overflow-hidden flex flex-col justify-center">
          <div
            ref={trackRef}
            className="relative flex flex-row items-center gap-0 py-20 min-w-[3000px] px-32 transition-transform duration-100 ease-out will-change-transform"
            style={{
              transform: `translateX(-${scrollProgress * maxTranslate}px)`,
            }}
          >
            {/* Main Horizontal Line */}
            <div
              className="absolute left-0 right-0 z-10"
              style={{
                top: "50%",
                transform: "translateY(-50%)",
              }}
            >
              <div className="h-[3px] w-full bg-gray-300" />
            </div>
            {timelineData.map((item, index) => {
              const top = index % 2 === 0;
              const distance = Math.abs(index - activeCardIndex);

              // Focus Zoom variables based on active card center location
              const scale = Math.max(0.82, 1 - distance * 0.08);
              const opacity = Math.max(0.4, 1 - distance * 0.25);

              return (
                <div
                  key={item.year}
                  className="relative flex-shrink-0 flex flex-col items-center w-[340px] h-[620px] overflow-visible z-20 transition-all duration-300 ease-out"
                  style={{
                    transform: `scale(${scale})`,
                  }}
                >
                  {/* TOP SECTION */}
                  <div className="w-full h-[310px] flex flex-col justify-end items-center pb-6">
                    {top ? (
                      <div className="flex flex-col items-center overflow-visible">
                        <div
                          className="w-[540px] h-[260px] bg-white border border-gray-150 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-row overflow-hidden flex-shrink-0"
                          data-aos="fade-down"
                        >
                          {/* Left Side: Image container using object-contain to prevent cropping */}
                          <div className="w-[180px] bg-gray-50 flex items-center justify-center p-3 flex-shrink-0 border-r border-gray-100">
                            <div className="w-full h-full bg-white rounded-xl overflow-hidden p-1 flex items-center justify-center shadow-inner">
                              <img
                                src={item.image}
                                alt={item.title}
                                className="max-w-full max-h-full object-contain"
                              />
                            </div>
                          </div>

                          {/* Right Side: Text content */}
                          <div className="p-4 flex-1 flex flex-col overflow-y-auto text-left">
                            <div className="space-y-1.5 flex-1 flex flex-col min-h-0">
                              <h4
                                className="text-sm font-bold font-serif uppercase tracking-wider mb-1.5"
                                style={{ color: item.color }}
                              >
                                {item.title}
                              </h4>
                              <p className="text-sm text-gray-500 leading-relaxed text-justify   pr-1 flex-1 min-h-0">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </div>
                        {/* Connector line */}
                        <div
                          className="w-[2px] h-10 mt-4"
                          style={{ background: item.color }}
                        ></div>
                      </div>
                    ) : (
                      /* Show the Year above the timeline for bottom items */
                      <div
                        className="text-2xl font-extrabold font-serif mb-4 flex-shrink-0"
                        style={{ color: item.color }}
                      >
                        {item.year}
                      </div>
                    )}
                  </div>

                  {/* DOT */}
                  <div
                    className="w-5 h-5 rounded-full border-4 border-white z-30 shadow-md flex-shrink-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    style={{ background: item.color }}
                  />

                  {/* BOTTOM SECTION */}
                  <div className="w-full h-[310px] flex flex-col justify-start items-center pt-6">
                    {!top ? (
                      <div className="flex flex-col items-center overflow-visible">
                        {/* Connector line */}
                        <div
                          className="w-[2px] h-10 mb-4"
                          style={{ background: item.color }}
                        ></div>
                        <div
                          className="w-[540px] h-[260px] bg-white border border-gray-150 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-row overflow-hidden flex-shrink-0"
                          data-aos="fade-up"
                        >
                          {/* Left Side: Image container using object-contain to prevent cropping */}
                          <div className="w-[180px] bg-gray-50 flex items-center justify-center p-3 flex-shrink-0 border-r border-gray-100">
                            <div className="w-full h-full bg-white rounded-xl overflow-hidden p-1 flex items-center justify-center shadow-inner">
                              <img
                                src={item.image}
                                alt={item.title}
                                className="max-w-full max-h-full object-contain"
                              />
                            </div>
                          </div>

                          {/* Right Side: Text content */}
                          <div className="p-4 flex-1 flex flex-col overflow-y-auto text-left">
                            <div className="space-y-1.8 flex-1 flex flex-col min-h-0">
                              <h4
                                className="text-sm font-bold font-serif uppercase tracking-wider "
                                style={{ color: item.color }}
                              >
                                {item.title}
                              </h4>
                              <p className="text-sm text-gray-500  text-justify   pr-1 flex-1 min-h-0">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* Show the Year below the timeline for top items */
                      <div
                        className="text-2xl font-extrabold font-serif mt-4 flex-shrink-0"
                        style={{ color: item.color }}
                      >
                        {item.year}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile Timeline - Hidden on desktop */}
      <div className="block md:hidden py-8 px-4">
        <div className="max-w-md mx-auto space-y-6">
          {timelineData.map((item) => (
            <div
              key={item.year}
              className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden h-[340px] flex flex-col"
              data-aos="fade-up"
            >
              {/* Image */}
              <div className="h-[140px] bg-gray-50 flex items-center justify-center p-3 flex-shrink-0">
                <div className="h-full w-full bg-white rounded-xl overflow-hidden p-2 flex items-center justify-center shadow-inner">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="p-4 flex-1 flex flex-col overflow-y-auto">
                <div className="flex items-center gap-3 mb-2 flex-shrink-0">
                  {/* Dot */}
                  <div
                    className="w-4 h-4 rounded-full border-3 border-white shadow-sm flex-shrink-0"
                    style={{ background: item.color }}
                  />
                  {/* Year */}
                  <div
                    className="text-lg font-extrabold font-serif"
                    style={{ color: item.color }}
                  >
                    {item.year}
                  </div>
                </div>

                <h4
                  className="text-sm font-bold font-serif uppercase tracking-wider mb-1 flex-shrink-0"
                  style={{ color: item.color }}
                >
                  {item.title}
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed overflow-y-auto flex-1 pr-1 text-justify">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HistoryVariant6;
