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

const createWhatsAppLink = (productTitle, phone = "919833691511") => {
  const message = `Hello SSPL,\nCan you provide the latest price and availability of ${productTitle.toLowerCase()}.`;
  return `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;
};

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
    link: createWhatsAppLink("Guar Seeds", "919833691511"),
    description:
      "The guar or cluster bean is an annual legume also known as Cyamopsis Tetragonoloba and the source of guar gum. It is a valuable crop used in agriculture and crop rotation systems.",
  },
  {
    title: "Guar Gum",
    image: guarGum,
    link: createWhatsAppLink("Guar Gum", "919833691511"),
    description:
      "Guar gum is extracted from guar beans. It is used as an emulsifier, thickener, and stabilizer across food, cosmetics, and pharmaceutical industries due to its exceptional thickening properties.",
  },
  {
    title: "Cashew Kernels",
    image: cashew,
    link: createWhatsAppLink("Cashew Kernels", "919833691511"),
    description:
      "Cashew kernels are one of India's major agricultural exports. They are cultivated across several countries and are widely consumed worldwide due to their nutritional value and versatility.",
  },
  {
    title: "Pulses",
    image: pulses,
    link: createWhatsAppLink("Pulses", "919833691511"),
    description:
      "Pulses are edible seeds of legumes and are a vital source of protein worldwide. They are grown extensively for human consumption and also improve soil fertility.",
  },
  {
    title: "Chickpeas",
    image: chickpeas,
    link: createWhatsAppLink("Chickpeas", "919833691511"),
    description:
      "Chickpeas are an annual legume widely known as gram or garbanzo beans. They are rich in protein and are consumed extensively throughout Asia, Europe, and the Americas.",
  },
  {
    title: "Pigeon Peas",
    image: pigeonPeas,
    link: createWhatsAppLink("Pigeon Peas", "919833691511"),
    description:
      "Pigeon peas are perennial legumes cultivated in tropical and subtropical regions. They are an important food crop in South Asia, Africa, and Latin America.",
  },
];

function Product() {
  return (
    <div className="min-h-screen bg-gray-50 pt-28 lg:pt-32 pb-16">
      <div className="w-full max-w-[1920px] mx-auto px-4 md:px-10 lg:px-16">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[#003662] uppercase tracking-wide">
            Products
          </h1>
          <div className="h-1 w-16 bg-green-700 mx-auto mt-3 rounded"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {products.map((product) => (
            <div
              key={product.title}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 p-6 flex flex-col items-center group text-center hover:-translate-y-1 w-full"
            >
              {/* Image Section */}
              <div className="w-full h-48 sm:h-52  rounded-xl flex items-center justify-center p-4 mb-4 group-hover:scale-105 transition-transform duration-300">
                <img
                  src={product.image}
                  alt={product.title}
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              {/* Title & Divider */}
              <h2 className="text-xl font-bold font-serif text-[#003662] mb-2 min-h-[32px] flex items-center justify-center">
                {product.title}
              </h2>
              <div className="w-12 h-0.5 bg-green-700 mb-3.5 rounded-full"></div>

              {/* Description */}
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-5 text-left flex-1 w-full">
                {product.description}
              </p>

              {/* Button */}
              <a
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-auto py-2.5 px-4 bg-green-700 hover:bg-green-800 text-white font-semibold text-sm rounded-lg shadow transition-colors duration-300 text-center block"
              >
                Get In Touch
              </a>
            </div>
          ))}
        </div>
      </div>

      <ToTop />
    </div>
  );
}

export default Product;
