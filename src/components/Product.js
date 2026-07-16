import { Link } from "react-router-dom";
import { ToTop } from "./ToTop";

import castorSeed from "../images/castor-prod.jpeg";
import castorOil from "../images/oil-prod.jpeg";
import guarSeed from "../images/guar-seed-prod.png";
import guarGum from "../images/guar-gum-prod.png";
import cashew from "../images/cashew-prod.png";
import pulses from "../images/pulses-prod.jpeg";
import chickpeas from "../images/peas-prod.jpeg";
import pigeonPeas from "../images/peagon-prod.png";

const products = [
  {
    title: "Castor Seed",
    image: castorSeed,
    link: "https://wa.link/hbdcu2",
    description:
      "Castor seed is a non-edible oilseed crop, with an average of 46% oil recovery. India is major producing country followed by China, Brazil, and Thailand. Gujarat is major producing state which accounts about 80% of domestic production followed by Andhra Pradesh and Rajasthan.",
  },
  {
    title: "Castor Oil",
    image: castorOil,
    link: "https://wa.link/zlu2eo",
    description:
      "Castor oil is a vegetable oil pressed from castor beans. Castor oil and its derivatives are used in soaps, lubricants, hydraulic fluids, paints, dyes, coatings, inks, plastics, pharmaceuticals, and perfumes. We export FSG Castor Oil worldwide.",
  },
  {
    title: "Guar Seeds",
    image: guarSeed,
    link: "https://wa.link/z39v4j",
    description:
      "The guar or cluster bean is an annual legume also known as Cyamopsis Tetragonoloba and the source of guar gum. It is a valuable crop used in agriculture and crop rotation systems.",
  },
  {
    title: "Guar Gum",
    image: guarGum,
    link: "https://wa.link/z39v4j",
    description:
      "Guar gum is extracted from guar beans. It is used as an emulsifier, thickener, and stabilizer across food, cosmetics, and pharmaceutical industries due to its exceptional thickening properties.",
  },
  {
    title: "Cashew Kernels",
    image: cashew,
    link: "https://wa.link/z39v4j",
    description:
      "Cashew kernels are one of India's major agricultural exports. They are cultivated across several countries and are widely consumed worldwide due to their nutritional value and versatility.",
  },
  {
    title: "Pulses",
    image: pulses,
    link: "https://wa.link/z39v4j",
    description:
      "Pulses are edible seeds of legumes and are a vital source of protein worldwide. They are grown extensively for human consumption and also improve soil fertility.",
  },
  {
    title: "Chickpeas",
    image: chickpeas,
    link: "https://wa.link/z39v4j",
    description:
      "Chickpeas are an annual legume widely known as gram or garbanzo beans. They are rich in protein and are consumed extensively throughout Asia, Europe, and the Americas.",
  },
  {
    title: "Pigeon Peas",
    image: pigeonPeas,
    link: "https://wa.link/z39v4j",
    description:
      "Pigeon peas are perennial legumes cultivated in tropical and subtropical regions. They are an important food crop in South Asia, Africa, and Latin America.",
  },
];

function Product() {
  return (
    <div className="min-h-screen bg-gray-50 pt-28 lg:pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#003662] uppercase tracking-wide">
            Products
          </h1>
          <div className="h-1 w-20 bg-green-700 mx-auto mt-4 rounded"></div>
        </div>

        <div className="space-y-8">
          {products.map((product, index) => (
            <div
              key={product.title}
              className="flex flex-col lg:flex-row bg-white rounded-2xl shadow-md  transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              {/* Image Section */}
              <div className="w-full lg:w-[380px] xl:w-[450px] p-6 flex items-center justify-center ">
                <div className="w-full h-[280px] md:h-[320px] bg-white rounded-xl flex items-center justify-center p-4">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="max-w-full max-h-full object-contain p-2"
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className="flex-1 p-6 lg:p-10 flex flex-col justify-center">
                <h2 className="text-2xl lg:text-3xl font-bold font-serif text-[#003662] mb-4">
                  {product.title}
                </h2>

                <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-6">
                  {product.description}
                </p>

                <div>
                  <Link
                    to={product.link}
                    target="_blank"
                    className="inline-flex items-center justify-center px-6 py-3 bg-green-700 hover:bg-green-800 text-white font-semibold rounded-lg shadow-md transition-colors duration-300"
                  >
                    Get In Touch
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ToTop />
    </div>
  );
}

export default Product;
