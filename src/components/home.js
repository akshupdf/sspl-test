import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import rib from "../images/rib2.png";
import a from "../images/guar-seed-home.png";
import b from "../images/cashew-home.jpeg";
import c from "../images/castor-home.jpeg";
import d from "../images/castor-oil-home.png";
import e from "../images/pulses-home.jpeg";
import j from "../images/peas-home.jpeg";
import k from "../images/peagon-home.jpeg";
import f from "../images/BB.jpg";
import g from "../images/NB.jpg";
import h from "../images/DD.jpg";
import i from "../images/AA.jpg";
import gg from "../images/guar-home.png";
import wcsf from "../images/wc.png";
// import bg2 from "../images/bg2.mp4";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import AOS from "aos";
import "aos/dist/aos.css";
import Translate from "./Translate";
import { ToTop } from "./ToTop";

function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  const products = [
    { name: "Castor Seed", image: c },
    { name: "Castor Oil", image: d },
    { name: "Guar Seeds", image: a },
    { name: "Guar Gum", image: gg },
    { name: "Cashew Kernels", image: b },
    { name: "Pulses", image: e },
    { name: "Chickpeas", image: j },
    { name: "Pigeon Peas", image: k },
  ];

  const reviewData = [
    {
      stars: 5,
      quote: "Exceptional Quality and Timely Deliveries",
      text: "We have been working with SSPL, and their professionalism and dedication have consistently impressed us. The quality of their FSG Castor Oil is top-notch, and their timely deliveries ensure that our operations run smoothly.",
    },
    {
      stars: 4.7,
      quote: "Reliable Partner in Agricultural Trading",
      text: "SSPL has been a reliable partner in our agricultural trading ventures. Their attention to detail and commitment to excellence set them apart in the industry. We have always received high-quality products and exceptional customer service.",
    },
    {
      stars: 4.5,
      quote: "Superior Quality and Efficient Logistics",
      text: "Working with SSPL has been a game-changer for our business. Their FSG Castor Oil is of superior quality, and their efficient logistics have never let us down. We look forward to continuing our successful partnership.",
    },
    {
      stars: 5,
      quote: "Valued Client Relationship",
      text: "SSPL continues to be a valued client, with constructive and engaging discussions during our weekly online meetings. The team is highly responsive, and provides clear insights that help us better understand their market requirements, supporting informed decision-making. We appreciate the strong working relationship and look forward to continuing our successful partnership",
    },
    {
      stars: 4.8,
      quote: "A Trusted & Ethical Organization",
      text: "SSPL is a reputed global exporter known for consistently delivering high-quality products. The management team, led by Mr. Pulkit Sekhsaria, demonstrates professionalism, responsiveness & a strong commitment to meeting customer requirements. Their greatest strength is their hands-on approach to quality, maintaining the highest product standards, conduct business with integrity & transparency & focus on building long-term, sustainable relationships. These values make them a trusted & ethical organization in the global castor oil industry",
    },
  ];

  return (
    <div className="w-[100%] h-[100%] relative ">
      <Translate />
      <div
        className="lg:w-[100%] font-bold h-screen lg:flex justify-center bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url(/herobg.png)" }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-white/20"></div>
        <div
          className="relative z-10 max-w-6xl mx-auto px-4 mt-[8rem] text-center"
          data-aos="fade-left"
          data-aos-duration="3000"
        >
          <div className="mb-8">
            <h1 className="lg:text-7xl sm:text-5xl xl:text-8xl mb-6 font-serif leading-tight text-[#003662] drop-shadow-sm">
              SSPL
            </h1>
          </div>

          <p className="text-lg sm:text-base lg:text-xl mb-[6rem] text-gray-800 leading-relaxed max-w-5xl mx-auto font-medium">
            SSPL is focused on Exporting and supplying of a wide range of
            agricultural commodities like Castor Seed, Guar Seed, Castor Oil
            (FSG Grade), Cashew Kernels , Pulses , Chickpeas and Pigeon Peas .
            <br></br>
          </p>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <Link
              to="/about"
              className="group inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white bg-green-800 hover:bg-green-700 rounded-xl shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-105"
            >
              <span>Discover Our Story</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full text-center items-center py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#003662] uppercase tracking-wide">
            Our Products
          </h1>
          <div className="h-1 w-20 bg-green-700 mx-auto mt-4 rounded"></div>
        </div>
        <Swiper
          grabCursor
          loop
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          centeredSlides={false}
          spaceBetween={24}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3.2,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 3,
            },
          }}
          modules={[Pagination, Navigation, Autoplay]}
          className="w-full mt-8"
        >
          {products.map((product) => (
            <SwiperSlide key={product.name}>
              <div className="bg-white rounded-3xl shadow-xl p-5 h-[420px] flex flex-col">
                <div className="h-[260px] w-full  flex items-center justify-center p-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="flex-1 flex items-center justify-center">
                  <h3 className="text-center text-xl lg:text-2xl font-semibold">
                    {product.name}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="w-[100%] mx-auto items-center justify-center flex mb-10 mt-10">
        <Link
          to="/products"
          class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-green-800 rounded-xl group"
        >
          <span class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
            <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
          </span>
          <span class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
          <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
            Know More
          </span>
        </Link>
      </div>

      <div className="justify-center pt-10 items-center text-center w-full mb-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#003662] uppercase tracking-wide">
            Memberships
          </h1>
          <div className="h-1 w-20 bg-green-700 mx-auto mt-4 rounded"></div>
        </div>
        {/* <h1 className='text-4xl font-bold pt-4'>CERTIFICATIONS</h1> */}
        <div className="flex flex-wrap mx-auto  pt-12 2xl:w-[100%] justify-center">
          <img
            src={f}
            alt="none"
            className="m-4 sm:w-32 xl:w-[240px] xl:[120px] 2xl:w-[300px] 2xl:h-[180px]"
          />
          <img
            src={g}
            alt="none"
            className="m-4 sm:w-32 xl:w-[200px] 2xl:w-[250px]"
          />
          <img
            src={wcsf}
            alt="none"
            className="m-4 sm:w-32 xl:w-[200px] 2xl:w-[250px] p-4"
          />
          <img
            src={i}
            alt="none"
            className="m-4 sm:w-32 xl:w-[200px] 2xl:w-[250px] p-4"
          />
          <img
            src={h}
            alt="none"
            className="m-4 sm:w-32 xl:w-[200px] 2xl:w-[250px]"
          />
        </div>
      </div>

      <div className="justify-center items-center text-center py-8 w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#003662] uppercase tracking-wide">
            Certificate
          </h1>
          <div className="h-1 w-20 bg-green-700 mx-auto mt-4 rounded"></div>
        </div>
        <div className="flex items-center justify-center w-full px-4">
          <img
            src="/certificate.png"
            alt="certi"
            className="max-w-full max-h-[80vh] w-auto h-auto object-contain mx-auto shadow-xl rounded-lg"
          />
        </div>
      </div>
      <div
        className="w-full mt-16 text-black"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#003662] uppercase tracking-wide">
            Reviews
          </h2>
          <div className="h-1 w-20 bg-green-700 mx-auto mt-4 rounded"></div>
        </div>
        <Swiper
          grabCursor
          loop
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          centeredSlides={false}
          spaceBetween={24}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3.2,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 3,
            },
          }}
          modules={[Pagination, Navigation, Autoplay]}
          className="w-full mt-8"
        >
          {reviewData.map((review, index) => (
            <SwiperSlide key={index} className="pb-8">
              <div
                className={`
              h-[360px]
              rounded-2xl
              bg-white
              shadow-xl
              border border-gray-100
              p-8
              flex flex-col
              items-center
              text-center
              transition-all duration-500 
            `}
              >
                <ReactStars
                  count={5}
                  value={review.stars}
                  size={24}
                  activeColor="#000"
                  isHalf={review.stars % 1 !== 0}
                  edit={false}
                />

                <h3 className="mt-5 text-xl font-bold line-clamp-3">
                  "{review.quote}"
                </h3>

                <p className="mt-4 text-gray-600 flex-1 overflow-hidden">
                  {review.text}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <ToTop />
    </div>
  );
}

export default Home;
