import React, { useEffect } from "react";
import cement from "../images/cotton1.JPG";
import cot from "../images/chem1.png";
import chem from "../images/chem2.JPG";
import agri from "../images/food.jpg";
import co from "../images/oil.jpg";
import cashewProd from "../images/cashew-prod.png";
import pulsesProd from "../images/pulses-prod.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";

function History() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="rounded-lg bg-no-repeat bg-cover text-black w-[90%] bg-fixed "
      // style={{
      //   backgroundImage: url(https://cas.stthomas.edu/_media-library/_images/history/1920x1080/stthomas-history-time.jpg),
      // }}
    >
      {/* <div className='w-[90%] opacity-60 absolute bg-[#000004]  rounded-xl h-[269vh] '></div> */}
      <div class="container mx-auto lg:px-4 px-0 py-8 ">
        <div class="relative wrap pl-18 ">
          <div class="lg:flex border-2-2 ml-10 absolute border-opacity-60 border-gray-700 h-full border   sm:hidden"></div>
          <hr></hr>
          <div
            class="mb-8 lg:flex justify-between items-center w-full right-timeline shadow-xl   "
            data-aos="fade-left"
            data-aos-duration="3000"
          >
            <div class="order-1 lg:w-5/12   lg:flex p-8">
              <img src={cement} alt="none" className="w-[50vh] h-[50vh]" />
            </div>
            <div class="z-20 flex items-center  bg-gray-200 w-20  h-10 ">
              <h1 class="mx-auto font-semibold text-lg text-blue-800 ">1974</h1>
            </div>
            <div class="order-1 lg:w-5/12 px-6 py-4  rounded-xl mt-4">
              <h3 class="mb-3 font-bold text-gray-800 text-xl">
                Incorporation of Satyanarayan Sehksaria Private Limited.{" "}
              </h3>
              <p class="text-justify leading-tight lg:text-xl backdrop-opacity-10 p-6 rounded-lg pl-0">
                {" "}
                Incorporated in 1974, SSPL boasts a rich legacy backed by its
                founders' extensive experience spanning over seven decades in
                the raw-cotton supply business. This wealth of knowledge and
                expertise has been instrumental in establishing strong and
                enduring relationships with reputed textile mills. Over the
                years, SSPL has built a reputation for reliability and quality,
                consistently providing high-grade raw cotton to meet the
                stringent demands of the textile industry.
              </p>
            </div>
          </div>
          <hr></hr>

          <div
            class="mb-8 lg:flex justify-between items-center w-full right-timeline shadow-xl "
            data-aos="fade-right"
            data-aos-duration="3000"
          >
            <div class="order-1 lg:w-5/12 lg:flex  p-8">
              <img src={cot} alt="none" className="w-[50vh] h-[50vh]" />
            </div>
            <div class="z-20 flex items-center  bg-gray-200 w-20 h-10">
              <h1 class="mx-auto font-semibold text-lg text-blue-800">1979</h1>
            </div>
            <div class="order-1 lg:w-5/12 px-6 py-4 bg-white rounded-xl mt-4">
              <h3 class="mb-3 font-bold text-gray-800 text-xl">
                Sekhsaria Chemicals Pvt. Ltd. was established.
              </h3>
              <p class="text-justify leading-tight lg:text-xl  backdrop-blur-sm p-4 rounded-lg pl-0">
                In 1979, Sekhsaria Chemicals Pvt. Ltd. was established as a
                wholly owned subsidiary, marking a strategic expansion into the
                pharmaceutical sector. This subsidiary focuses on process
                research and the USFDA-approved contract manufacturing of active
                pharmaceutical ingredients (API) and related intermediaries. By
                adhering to stringent regulatory standards, Sekhsaria Chemicals
                ensures the production of high-quality pharmaceutical components
                essential for drug development and manufacturing.
              </p>
            </div>
          </div>
          <hr></hr>
          <div
            class="mb-8 lg:flex justify-between  items-center w-full right-timeline shadow-xl"
            data-aos="fade-left"
            data-aos-duration="3000"
          >
            <div class="order-1 lg:w-5/12 lg:flex  p-8">
              <img src={chem} alt="none" className=" w-[50vh] h-[40vh]" />
            </div>
            <div class="z-20 flex items-center  bg-gray-200 w-20 h-10">
              <h1 class="mx-auto font-semibold text-lg text-blue-800">2006</h1>
            </div>
            <div class="order-1  lg:w-5/12 px-6 py-4 bg-white rounded-xl mt-4">
              <h3 class="mb-3 font-bold text-gray-800 text-xl">
                Sekhsaria Chemicals Ltd was acquired .
              </h3>
              <p class="text-justify leading-tight lg:text-xl  backdrop-blur-sm p-4 pl-0 rounded-lg">
                {" "}
                Sekhsaria Chemicals Ltd was acquired by Watson Pharmaceuticals
                Inc, the third-largest pharmaceuticals company in the USA.
              </p>
            </div>
          </div>
          <hr></hr>
          <div
            class="mb-8 lg:flex justify-between  items-center w-full right-timeline shadow-xl"
            data-aos="fade-right"
            data-aos-duration="3000"
          >
            <div class="order-1 lg:w-5/12 lg:flex  p-8">
              <img src={agri} alt="none" className="w-[50vh] h-[50vh]" />
            </div>
            <div class="z-20 flex items-center  bg-gray-200 w-20 h-10">
              <h1 class="mx-auto font-semibold text-lg text-blue-800">2008</h1>
            </div>
            <div class="order-1 lg:w-5/12 px-6 py-4 bg-white rounded-xl mt-4">
              <h3 class="mb-3 font-bold text-gray-800 text-xl">
                Engaging in the trading of various agricultural commodities
              </h3>
              <p class="text-justify leading-tight lg:text-xl  backdrop-blur-sm p-4 pl-0 rounded-lg">
                In 2008, Engaging in the trading of various agricultural
                commodities taps into the dynamic agribusiness sector, promoting
                sustainability and ensuring the availability of essential
                products in different markets. These ventures highlight a
                commitment to excellence and innovation in both agricultural and
                industrial domains.
              </p>
            </div>
          </div>
          <hr></hr>
          <div
            class="mb-8 lg:flex justify-between items-center w-full right-timeline shadow-xl"
            data-aos="fade-left"
            data-aos-duration="3000"
          >
            <div class="order-1 lg:w-5/12 lg:flex  p-8">
              <img src={co} alt="none" className="w-[50vh] h-[50vh]" />{" "}
            </div>
            <div class="z-20 flex items-center bg-gray-200 w-20 h-10">
              <h1 class="mx-auto font-semibold text-lg text-blue-800">2019</h1>
            </div>
            <div class="order-1  lg:w-5/12 px-6 py-4 bg-white rounded-xl mt-4 ">
              <h3 class="mb-3 font-bold text-gray-800 text-xl">
                Venturing into the export of FSG Castor Oil.
              </h3>
              <p class="text-justify leading-tight lg:text-xl  backdrop-blur-sm p-4 pl-0 rounded-lg">
                {" "}
                In 2019, Venturing into the export of FSG Castor Oil marks a
                significant milestone. With its applications ranging from
                industrial to personal care products, castor oil is a versatile
                and in-demand commodity. By ensuring the highest standards of
                quality, this initiative aims to cater to diverse industries
                worldwide, contributing to the international supply chain of a
                highly sought-after natural product.
              </p>
            </div>
          </div>
          <hr></hr>
          <div
            class="mb-8 lg:flex justify-between items-center w-full right-timeline shadow-xl"
            data-aos="fade-right"
            data-aos-duration="3000"
          >
            <div class="order-1 lg:w-5/12 lg:flex  p-8">
              <img src={cashewProd} alt="none" className="w-[50vh] h-[50vh]" />{" "}
            </div>
            <div class="z-20 flex items-center bg-gray-200 w-20 h-10">
              <h1 class="mx-auto font-semibold text-lg text-blue-800">2023</h1>
            </div>
            <div class="order-1  lg:w-5/12 px-6 py-4 bg-white rounded-xl mt-4 ">
              <h3 class="mb-3 font-bold text-gray-800 text-xl">
                Cashew Business Launch
              </h3>
              <p class="text-justify leading-tight lg:text-xl  backdrop-blur-sm p-4 pl-0 rounded-lg">
                {" "}
                In 2023, SSPL started most promising business. The Cashew
                business is one of the fastest growing businesses. Cashew is
                very famous & is being eaten not only as a raw dry fruit but
                also is used in cooking purposes. This nut is in high demand
                nuts throughout the year in India.
              </p>
            </div>
          </div>
          <hr></hr>
          <div
            class="mb-8 lg:flex justify-between items-center w-full right-timeline shadow-xl"
            data-aos="fade-left"
            data-aos-duration="3000"
          >
            <div class="order-1 lg:w-5/12 lg:flex  p-8">
              <img src={pulsesProd} alt="none" className="w-[50vh] h-[50vh]" />{" "}
            </div>
            <div class="z-20 flex items-center bg-gray-200 w-20 h-10">
              <h1 class="mx-auto font-semibold text-lg text-blue-800">2024</h1>
            </div>
            <div class="order-1  lg:w-5/12 px-6 py-4 bg-white rounded-xl mt-4 ">
              <h3 class="mb-3 font-bold text-gray-800 text-xl">
                Pulses Trading Business
              </h3>
              <p class="text-justify leading-tight lg:text-xl  backdrop-blur-sm p-4 pl-0 rounded-lg">
                {" "}
                In 2024, engaged in the trading business of different pulses.
                Pulses are one of the important food crops due to their higher
                protein content. With rising focus on food security, plant-based
                nutrition, and sustainable agriculture, demand for pulses
                continues to grow across international markets.
              </p>
            </div>
          </div>
          <hr></hr>
        </div>
      </div>
    </div>
  );
}

export default History;
