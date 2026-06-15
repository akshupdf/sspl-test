import { Link } from "react-router-dom";
import { ToTop } from "./ToTop";

import castorSeed from "../images/castor.jpeg";
import castorOil from "../images/castor-oil.png";
import guarSeed from "../images/guar.jpeg";
import guarGum from "../images/guar-gum.jpeg";
import cashew from "../images/cashew.png";
import pulses from "../images/pulses.jpeg";
import chickpeas from "../images/peas.jpeg";
import pigeonPeas from "../images/ppeas.jpeg";

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
    <div className="min-h-screen bg-[#e1e1e9]">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-center text-4xl md:text-5xl lg:text-6xl font-semibold mb-12">
          PRODUCTS
        </h1>

        <div className="space-y-8">
          {products.map((product, index) => (
            <div
              key={product.title}
              className={`flex flex-col lg:flex-row bg-white rounded-2xl shadow-lg overflow-hidden`}
            >
              {/* Image Section */}
              <div className="w-full lg:w-[380px] xl:w-[450px] p-6 flex items-center justify-center">
                <div className="w-full h-[280px] md:h-[320px] border border-gray-200 rounded-xl bg-gray-50 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="max-w-full max-h-full object-contain p-4"
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className="flex-1 p-6 lg:p-10 flex flex-col justify-center">
                <h2 className="text-2xl lg:text-3xl font-semibold mb-4">
                  {product.title}
                </h2>

                <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-6">
                  {product.description}
                </p>

                <div>
                  <Link
                    to={product.link}
                    target="_blank"
                    className="inline-flex items-center justify-center px-6 py-3 bg-green-800 text-white rounded-lg hover:bg-green-700 transition-colors"
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
