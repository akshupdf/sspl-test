import c from "../images/castor.jpeg";
import d from "../images/castor-oil.png";
import a from "../images/guar.jpeg";
import gg from "../images/guar-gum.jpeg";
import b from "../images/cashew.png";
import e from "../images/pulses.jpeg";
import j from "../images/peas.jpeg";
import k from "../images/ppeas.jpeg";
import { Link } from "react-router-dom";
import { ToTop } from "./ToTop";

function Product() {
  return (
    <div className="h-auto bg-[#e1e1e9] w-[100%]">
      <h1 className="w-[100%] text-center  2xl:text-6xl backdrop-blur-sm pt-2 sm:text-4xl ">
        {" "}
        PRODUCTS
      </h1>
      <div className="max-w-7xl mx-auto   flex flex-col justify-center ">
        <div className="w-full xl:flex-row 2xl:flex sm:flex-col flex justify-center m-4 rounded-xl shadow-xl bg-white">
          <img
            src={c}
            alt="Castor Seed"
            className="w-1/2 h-64 object-contain"
          />
          <div className="w-1/2 m-4 flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-2">Castor Seed</h2>
            <p className="text-gray-700 mb-4 text-xl">
              Castor seed is a non-edible oilseed crop, with an average of 46%
              oil recovery. India is major producing country followed by China,
              Brazil, and Thailand. Gujarat is major producing state which
              accounts about 80% of domestic production followed by Andhra
              Pradesh and Rajasthan. These 3 states contribute about 96% of
              total production of India.
            </p>
            <button className="bg-green-800 text-white py-2 px-4 rounded hover:bg-green-700 2xl:w-[20vh] xl:w-[40vh]">
              <Link to="https://wa.link/hbdcu2" target="_blank">
                Get In Touch
              </Link>
            </button>
          </div>
        </div>

        <div className="w-full xl:flex-row 2xl:flex sm:flex-col flex justify-center m-4 shadow-xl rounded-xl bg-white">
          <img
            src={d}
            alt="Castor Oil"
            className="w-1/2 h-64 object-contain"
          />
          <div className="w-1/2 m-4 flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-2">Castor Oil</h2>
            <p className="text-gray-700 mb-4 text-xl">
              Castor oil is a vegetable oil pressed from castor beans. Castor
              oil and its derivatives are used in the manufacturing of soaps,
              lubricants, hydraulic and brake fluids, paints, dyes, coatings,
              inks, cold resistant plastics, waxes and polishes, nylon,
              pharmaceuticals, and perfumes. Castor oil enjoys tremendous demand
              world-wide. We are exporting FSG Castor oil to Europe, UK, USA,
              and Thailand since 2019, offering basis of FOB / CIF in Bulk, ISO
              & Flexi tanks.
            </p>
            <button className="bg-green-800 text-white py-2 px-4 rounded hover:bg-green-700 2xl:w-[20vh] xl:w-[40vh]">
              <Link to="https://wa.link/zlu2eo" target="_blank">
                Get In Touch
              </Link>
            </button>
          </div>
        </div>

        <div className="w-full xl:flex-row 2xl:flex sm:flex-col flex justify-center m-4 shadow-xl rounded-xl bg-white">
          <img
            src={a}
            alt="Guar Seeds"
            className="w-1/2 h-64 object-contain rounded-lg"
          />
          <div className="w-1/2 m-4 flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-2">Guar Seeds</h2>
            <p className="text-gray-700 mb-4 text-xl">
              The guar or cluster bean is an annual legume also known as
              Cyamopsis Tetragonoloba and the source of guar gum. It is also
              known as gavar, guwar or guvar bean. This legume is a valuable
              plant in a crop rotation cycle, as it lives in symbiosis with
              nitrogen-fixing bacteria. Agriculturists in semi-arid regions of
              Rajasthan follow crop-rotation and use guar to.
            </p>
            <button className="bg-green-800 text-white py-2 px-4 rounded hover:bg-green-700 2xl:w-[20vh] xl:w-[40vh]">
              <Link to="https://wa.link/z39v4j" target="_blank">
                Get In Touch
              </Link>
            </button>
          </div>
        </div>

        <div className="w-full xl:flex-row 2xl:flex sm:flex-col flex justify-center m-4 shadow-xl rounded-xl bg-white">
          <img
            src={gg}
            alt="Guar Gum"
            className="w-1/2 h-64 object-contain rounded-lg"
          />
          <div className="w-1/2 m-4 flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-2">Guar Gum</h2>
            <p className="text-gray-700 mb-4 text-xl">
              Guar gum is extracted from guar bean. Guar gum is basically a
              polysaccharide composed of the galactose and mannose. Guar gum is
              used as emulsifier, thickener, and stabilizer with wide range of
              industrial applications especially in food, cosmetics, and
              pharmaceuticals. Guar gum is very economical in comparison to
              other thickening agents. It shows almost 8 times the water
              thickening properties than starch.{" "}
            </p>
            <button className="bg-green-800 text-white py-2 px-4 rounded hover:bg-green-700 2xl:w-[20vh] xl:w-[40vh]">
              <Link to="https://wa.link/z39v4j" target="_blank">
                Get In Touch
              </Link>
            </button>
          </div>
        </div>

        <div className="w-full xl:flex-row 2xl:flex sm:flex-col flex justify-center m-4 shadow-xl rounded-xl bg-white">
          <img
            src={b}
            alt="Cashew Kernels"
            className="w-1/2 h-64 object-contain rounded-lg p-10"
          />
          <div className="w-1/2 m-4 flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-2">Cashew Kernels</h2>
            <p className="text-gray-700 mb-4 text-xl ">
              The Cashew tree, Anacardium occidentale, generally considered the
              native to the northern part of South America. Today, cashews are
              cultivated in several countries, including India, Vietnam, Brazil,
              and Africa. India remains one of the leading producers and
              exporters of cashews globally, with a diverse range of cashew
              products.
            </p>
            <button className="bg-green-800 text-white py-2 px-4 rounded hover:bg-green-700 2xl:w-[20vh] xl:w-[40vh]">
              <Link to="https://wa.link/z39v4j" target="_blank">
                Get In Touch
              </Link>
            </button>
          </div>
        </div>

        <div className="w-full xl:flex-row 2xl:flex sm:flex-col flex justify-center m-4 shadow-xl rounded-xl bg-white">
          <img
            src={e}
            alt="Pulses"
            className="w-1/2 h-64 object-contain"
          />
          <div className="w-1/2 m-4 flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-2">Pulses</h2>
            <p className="text-gray-700 mb-4 text-xl">
              Legumes are plants in the family Fabaceae, or the fruit or seeds
              of such plants. When used as a dry grain for human consumption,
              the seeds are also called pulses. Legumes are grown
              agriculturally, primarily for human consumption; for livestock
              forage and silage; and as soil-enhancing green manure .
            </p>
            <button className="bg-green-800 text-white py-2 px-4 rounded hover:bg-green-700 2xl:w-[20vh] xl:w-[40vh]">
              <Link to="https://wa.link/z39v4j" target="_blank">
                Get In Touch
              </Link>
            </button>
          </div>
        </div>
        <div className="w-full xl:flex-row 2xl:flex sm:flex-col flex justify-center m-4 shadow-xl rounded-xl bg-white">
          <img
            src={j}
            alt="Chickpeas"
            className="w-1/2 h-64 object-contain"
          />
          <div className="w-1/2 m-4 flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-2">Chickpeas</h2>
            <p className="text-gray-700 mb-4 text-xl">
              The chickpea or chick pea is an annual legume of the family
              Fabaceae, subfamily Faboideae. Its different types are variously
              known as gram or Bengal gram, chhola, chhana, chana, or channa,
              garbanzo or garbanzo bean, or Egyptian pea.{" "}
            </p>
            <button className="bg-green-800 text-white py-2 px-4 rounded hover:bg-green-700 2xl:w-[20vh] xl:w-[40vh]">
              <Link to="https://wa.link/z39v4j" target="_blank">
                Get In Touch
              </Link>
            </button>
          </div>
        </div>
        <div className="w-full xl:flex-row 2xl:flex sm:flex-col flex justify-center m-4 shadow-xl rounded-xl bg-white">
          <img
            src={k}
            alt="Pigeon Peas"
            className="w-1/2 h-64 object-contain"
          />
          <div className="w-1/2 m-4 flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-2">Pigeon Peas</h2>
            <p className="text-gray-700 mb-4 text-xl">
              The pigeon pea is a perennial legume from the family Fabaceae
              native to the Eastern Hemisphere. The pigeon pea is widely
              cultivated in tropical and semitropical regions around the world,
              being commonly consumed in South Asia, Southeast Asia, Africa,
              Latin America, and the Caribbean.{" "}
            </p>
            <button className="bg-green-800 text-white py-2 px-4 rounded hover:bg-green-700 2xl:w-[20vh] xl:w-[40vh]">
              <Link to="https://wa.link/z39v4j" target="_blank">
                Get In Touch
              </Link>
            </button>
          </div>
        </div>
      </div>
      <ToTop />
    </div>
  );
}

export default Product;
