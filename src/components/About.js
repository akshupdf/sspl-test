import React, { useEffect } from "react";
import bg from "../images/about-us.jpg";
import HistorySelector from "./HistorySelector";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToTop } from "./ToTop";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const managementData = [
  {
    name: "Mr. Pulkit Sekhsaria",
    image: "/Mr. Pulkit Sekhsaria.jpg",
    description:
      "Mr. Pulkit Sekhsaria is the Managing Director of Satyanarayan Sekhsaria Pvt. Ltd. (SSPL). Pulkit has been actively involved in investments and wealth management across various fields. Under his astute leadership and dynamic vision SSPL has grown by leaps and bounds and is today renowned as one of the leading and most reputed trading organizations dealing in agro-commodities.",
  },
  {
    name: "Mr. Rajaram Prabhu",
    image: "/Mr. Rajaram Prabhu.png",
    description:
      "Mr. Rajaram Prabhu is a Director at SSPL with over 4 decades of experience in the commodity trading sector, he brings deep market insight and strategic expertise. His leadership is defined by a keen understanding of market dynamics and a commitment to excellence in international trade practices. He holds a degree in Science and Post-Graduation in Business Management Studies, which provides a strong academic foundation for his work in commodity markets.",
  },
  {
    name: "Mr. Ankush Pitale",
    image: "/Mr. Ankush Pitale.png",
    description:
      "Mr. Ankush Pitale is a Director at SSPL. Prior to joining SSPL, he worked for over 25 years in investment banking with leading financial institutions, including JM Financial, JP Morgan, Deutsche Bank, Citigroup and HDFC Bank. As a Director at SSPL, he brings extensive expertise in debt and equity fundraising. His deep industry knowledge, strategic vision and commitment to ethical governance enables him to provide robust oversight and valuable insights that support the company’s growth and long-term success.",
  },
  {
    name: "Mr. Lakshit Desai",
    image: "/Mr. Lakshit Desai.jpg",
    description:
      "Mr. Lakshit Desai serves as a Director at SSPL, bringing over 27 years of experience in taxation, audit, accounting, and finance. A Chartered Accountant with bachelor’s degrees in commerce and law, he has helped multinational corporations, Indian enterprises, and high-net-worth individuals in navigating complex tax and exchange control frameworks, including entry strategies for India, corporate reorganizations, tax and regulatory compliances as well as litigation.",
  },
  {
    name: "Mr. Ashok Sharma",
    image: "/ashok-sharma.png",
    description:
      "Mr. Ashok Sharma is a Commerce graduate (B.Com) from the University of Rajasthan and currently serves as the Finance Controller at SSPL. He brings over 31 years of extensive experience in Accounts, Finance, and Financial Management,. In addition to his financial expertise, Mr. Sharma possesses deep insight into rural India and the agricultural sector, gained through years of working closely with agrarian communities and rural markets.",
  },
];

function About() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="w-full min-h-screen pt-28 lg:pt-32 pb-16 bg-gray-50 flex flex-col justify-start">
      {/* About Us Section */}
      <div
        className="max-w-7xl mx-auto px-4 md:px-8 w-full mb-16"
        data-aos="fade-in"
        data-aos-duration="2000"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#003662] uppercase tracking-wide">
            About Us
          </h1>
          <div className="h-1 w-20 bg-green-700 mx-auto mt-4 rounded"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={bg}
              alt="About Us"
              className="    max-h-[450px] object-contain w-full max-w-xl"
            />
          </div>
          <div className="w-full lg:w-1/2 text-gray-700 text-base md:text-lg leading-relaxed text-justify space-y-6">
            <p>
              <span className="font-bold text-[#003662]">SSPL</span> is focused
              on Exporting and supplying of a wide range of agricultural
              commodities like Castor Seed, Guar Seed, Castor Oil (FSG Grade),
              Cashew Kernels, Pulses, Chickpeas and Pigeon Peas. Capitalizing on
              India's diverse geography, SSPL delivers superior agro products
              worldwide.
            </p>
            <p>
              As a specialized trading organization, we build long-term customer
              relationships and manage all aspects of bulk agro-commodity trade,
              from storage to direct market purchases and sales.
            </p>
            <p>
              With decades of experience, we have strong connections with
              farmers, brokers, manufacturers, exporters, and importers,
              enabling direct deliveries from Private and NCDEX accredited
              warehouses. We aim for exponential growth by expanding our
              agro-commodities portfolio, leveraging our trading expertise and
              strategic alliances.
            </p>
          </div>
        </div>
      </div>

      {/* History Section */}
      <div className="w-full bg-white py-4 ">
        <div className="text-center mb-4">
          <h2 className="text-4xl md:text-5xl font-bold text-[#003662] uppercase tracking-wide">
            Milestone
          </h2>
          <div className="h-1 w-20 bg-green-700 mx-auto mt-4 rounded"></div>
        </div>
        <div className="flex items-center justify-center">
          <HistorySelector />
        </div>
      </div>

      {/* Management Section */}
      <div className="w-full py-12 bg-white px-4 md:px-14 lg:px-20 flex flex-col items-center justify-center">
        <div className="max-w-7xl mx-auto w-full relative">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#003662] uppercase tracking-wide">
              Our Management
            </h1>
            <div className="h-1 w-20 bg-green-700 mx-auto mt-4 rounded"></div>
          </div>

          {/* Custom Navigation Arrows positioned further left & right */}
          <button
            aria-label="Previous Slide"
            className="management-prev absolute -left-4 md:-left-10 lg:-left-14 top-1/2 -translate-y-1/2 z-30 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white border border-gray-200 shadow-lg flex items-center justify-center text-[#003662] hover:bg-[#003662] hover:text-white transition-all duration-300 focus:outline-none"
          >
            <svg
              className="w-5 h-5 md:w-6 md:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            aria-label="Next Slide"
            className="management-next absolute -right-4 md:-right-10 lg:-right-14 top-1/2 -translate-y-1/2 z-30 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white border border-gray-200 shadow-lg flex items-center justify-center text-[#003662] hover:bg-[#003662] hover:text-white transition-all duration-300 focus:outline-none"
          >
            <svg
              className="w-5 h-5 md:w-6 md:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          <Swiper
            grabCursor
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: ".management-prev",
              nextEl: ".management-next",
            }}
            pagination={{ clickable: true }}
            spaceBetween={24}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 16,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 28,
              },
            }}
            modules={[Pagination, Navigation, Autoplay]}
            className="w-full py-6 mx-auto management-swiper"
          >
            {managementData.map((member, idx) => (
              <SwiperSlide key={idx} className="pt-2 pb-8 flex">
                <div className="bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 p-6 pb-0 flex flex-col items-center w-full h-[650px] group">
                  <div className="w-full h-64  rounded-xl flex items-center justify-center  flex-shrink-0">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-center text-[#003662] mb-2 min-h-[56px] flex items-center justify-center flex-shrink-0">
                    {member.name}
                  </h3>
                  <div className="w-12 h-1 bg-[#003662]/60 mb-4 rounded-full flex-shrink-0"></div>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed text-justify overflow-hidden flex-1 w-full">
                    {member.description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <ToTop />
    </div>
  );
}

export default About;
