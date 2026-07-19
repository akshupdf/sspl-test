import React, { useEffect } from "react";
import bg from "../images/about-us.jpg";
import HistorySelector from "./HistorySelector";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToTop } from "./ToTop";

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
      <div className="w-full bg-white py-4 border-t border-b border-gray-150">
        <div className="text-center mb-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#003662] uppercase tracking-wide">
            Milestone
          </h2>
          <div className="h-1 w-20 bg-green-700 mx-auto mt-4 rounded"></div>
        </div>
        <div className="flex items-center justify-center">
          <HistorySelector />
        </div>
      </div>

      {/* Management Section */}
      <div className="min-h-screen w-full flex flex-col items-center justify-center ">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#003662] uppercase tracking-wide">
            Our Management
          </h1>
          <div className="h-1 w-20 bg-green-700 mx-auto mt-4 rounded"></div>
        </div>
        <div className="w-[95%] grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-6 justify-items-center">
          <div className="w-full max-w-sm border border-black rounded-lg shadow-xl p-6 flex flex-col items-center">
            <div className="w-full h-64 flex items-center justify-center mb-4 rounded-lg  ">
              <img
                src="/Mr. Pulkit Sekhsaria.jpg"
                alt="Mr. Pulkit Sekhsaria"
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <h1 className="text-xl font-bold text-center">
              Mr. Pulkit Sekhsaria
            </h1>
            <p className="text-justify">
              Pulkit Sekhsaria is the Managing Director of Satyanarayan
              Sekhsaria Pvt. Ltd. (SSPL). Pulkit has been actively involved in
              investments and wealth management across various fields. Under his
              astute leadership and dynamic vision SSPL has grown by leaps and
              bounds and is today renowned as one of the leading and most
              reputed trading organizations dealing in agro-commodities.
            </p>
          </div>
          <div className="w-full max-w-sm border border-black rounded-lg shadow-xl p-6 flex flex-col items-center">
            <div className="w-full h-64 flex items-center justify-center mb-4 rounded-lg  ">
              <img
                src="/Mr. Rajaram Prabhu.png"
                alt="Mr. Rajaram Prabhu"
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <h1 className="text-xl font-bold text-center">
              {" "}
              Mr. Rajaram Prabhu
            </h1>
            <p className="text-justify">
              Mr. Rajaram Prabhu is a Director at SSPL. With over 4 decades of
              experience in the commodity trading sector, he brings deep market
              insight and strategic expertise. His leadership is defined by a
              keen understanding of market dynamics and a commitment to
              excellence in international trade practices. He holds a degree in
              Science and Post-Graduation in Business Management Studies, which
              provides a strong academic foundation for his work in commodity
              markets.
            </p>
          </div>
          <div className="w-full max-w-sm border border-black rounded-lg shadow-xl p-6 flex flex-col items-center">
            <div className="w-full h-64 flex items-center justify-center mb-4 rounded-lg  ">
              <img
                src="/Mr. Ankush Pitale.png"
                alt="Mr. Ankush Pitale"
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <h1 className="text-xl font-bold text-center">
              Mr. Ankush Pitale{" "}
            </h1>
            <p className="text-jsustify">
              Mr. Ankush Pitale is a Director at SSPL. Prior to joining SSPL, he
              worked for over 25 years in investment banking with leading
              financial institutions, including JM Financial, JP Morgan,
              Deutsche Bank, Citigroup and HDFC Bank. As a Director at SSPL, he
              brings extensive expertise in debt and equity fundraising. His
              deep industry knowledge, strategic vision and commitment to
              ethical governance enables him to provide robust oversight and
              valuable insights that support the company’s growth and long-term
              success.
            </p>
          </div>
          <div className="w-full max-w-sm border border-black rounded-lg shadow-xl p-6 flex flex-col items-center">
            <div className="w-full h-64 flex items-center justify-center mb-4 rounded-lg  ">
              <img
                src="/Mr. Lakshit Desai.jpg"
                alt="Mr. Lakshit Desai"
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <h1 className="text-xl font-bold text-center">
              Mr. Lakshit Desai{" "}
            </h1>
            <p className="text-justify">
              Mr. Lakshit Desai serves as a Director at SSPL, bringing over 27
              years of experience in taxation, audit, accounting, and finance. A
              Chartered Accountant with bachelor’s degrees in commerce and law,
              he has helped multinational corporations, Indian enterprises, and
              high-net-worth individuals in navigating complex tax and exchange
              control frameworks, including entry strategies for India,
              corporate reorganizations, tax and regulatory compliances as well
              as litigation.
            </p>
          </div>
        </div>
      </div>

      <ToTop />
    </div>
  );
}

export default About;
