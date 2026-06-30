import React, { useEffect } from "react";
import bg from "../images/about-us.jpg";
// import ps from "../images/ps.jpg"
import isotank from "../images/iso.jpg";
import bulk from "../images/bulk.jpg";
// import flexi from "../images/flexi.jpg"
import flexi1 from "../images/flexi1.jpg";
import History from "./History";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToTop } from "./ToTop";

function About() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="w-[100%] font-serif h-[100%] flex flex-col justify-center  m-auto  mt-8 ">
      <div>
        <div
          className=" 2xl:h-screen xl:h-[112vh] bg-cover w-[100%] bg-no-repeat p-4 pt-0  h-screen sm:overflow-auto"
          data-aos="fade-in"
          data-aos-duration="3000"
        >
          <h1 className="w-[100%] text-center  2xl:text-6xl backdrop-blur-sm pt-2 sm:text-4xl ">
            {" "}
            ABOUT US
          </h1>
          <div className="flex 2xl:flex-row xl:flex-row sm:flex-col">
            <div className="w-[50%] sm:w-[100%] text-center ">
              <img src={bg} alt="none" className="p-8" />
            </div>
            <div className="w-[50%] sm:w-[100%] sm:text-sm xl:text-xl 2xl:text-xl p-4 backdrop-blur-sm text-justify">
              <p className="">
                {" "}
                <span className="font-bold">SSPL</span> is focused on Exporting
                and supplying of a wide range of agricultural commodities like
                Castor Seed, Guar Seed,Castor Oil(FSG Grade),Cashew Kernels,
                Pulses , Chickpeas and Pigeon Peas. Capitalizing on Indias
                diverse geography, SSPL delivers superior agro products
                worldwide.
              </p>{" "}
              <p className="">
                {" "}
                As a specialized trading organization, we build long-term
                customer relationships and manage all aspects of bulk
                agro-commodity trade, from storage to direct market purchases
                and sales.{" "}
              </p>{" "}
              <p className="">
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
      </div>

      <h1 className=" border-black border mx-auto rounded-xl text-center  text-4xl p-4 bg-[#003662] text-white mb-10">
        {" "}
        HISTORY
      </h1>
      <div className="  flex items-center justify-center ">
        <History />
      </div>
      <div className="min-h-screen w-full flex flex-col items-center justify-center ">
        <h1 className=" border-black border mx-auto rounded-xl text-center mt-10 text-4xl mb-8 p-4 bg-[#003662] text-white ">
          {" "}
          OUR TEAM
        </h1>
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
          </div>
        </div>
      </div>

      {/* <hr className="border-2 w-[90%] mx-auto"></hr> */}
      {/* <div className="min-h-screen w-full p-10">
        <h1 className=" border-black border w-[60%] mx-auto rounded-xl text-center  text-4xl p-4 bg-[#003662] text-white mt-10">
          {" "}
          GLIMPSE OF OUR DELIVERY METHODS
        </h1>
        <div className="flex sm:flex-col lg:flex-row p-10">
          <img
            src={isotank}
            alt="flexi"
            className="lg:w-[40%] lg:h-[40%] lg:p-10"
          />
          <div className="lg:w-[50%] m-auto lg:p-10 lg:text-2xl sm:mt-4">
            <p>
              {" "}
              <span className="font-bold"> ISO Tank</span> containers are
              dedicated on the transport of bulk liquid products and are built
              under ISO (International Organization for Standardization)
              standards and designed on a type-of-substance basis, made of
              stainless steel alloy and surrounded by protective layers
            </p>
          </div>
        </div>
        <hr></hr>
        <div className="flex sm:flex-col lg:flex-row p-10">
          <div className="lg:w-[50%] m-auto lg:p-10 lg:text-2xl sm:mb-4">
            <p>
              <span className="font-bold"> Flexible tanks </span> (also
              flexi-bags, flexibags and flexi-tanks) are a kind of storage
              equipment for liquids such as water or oil. Compared to steel
              tanks, flexible tanks have many advantages, including lighter
              weight and being rustproof, foldable, and quicker and easier to
              set up.
            </p>
          </div>
          <div className="flex sm:flex-col lg:flex-row lg:w-[50%] ">
            <img
              src={flexi1}
              alt="flexi"
              className="w-[70vh] h-[50vh] mx-auto lg:p-10"
            />
          </div>
        </div>
        <hr></hr>
        <div className="flex sm:flex-col lg:flex-row p-10">
          <div className="flex sm:flex-col lg:flex-row lg:w-[50%] lg:p-12">
            <img
              src={bulk}
              alt="flexi"
              className="w-[60vh] h-[40vh] m-auto  "
            />
          </div>
          <div className="lg:w-[50%] m-auto lg:p-10 lg:text-2xl sm:mt-4">
            <p>
              <span className="font-bold"> Bulk Cargo </span> Common types of
              liquid bulk cargo include crude oil, petroleum products (such as
              gasoline and diesel), chemicals (industrial chemicals, solvents,
              acids), liquefied gases (LNG), and food-grade liquids (vegetable
              oils, juices )
            </p>
          </div>
        </div>
      </div> */}
      <ToTop />
    </div>
  );
}

export default About;
