import React, { useState } from "react";
import History from "./History";
import HistoryVariant2 from "./HistoryVariant2";
import HistoryVariant3 from "./HistoryVariant3";
import HistoryVariant4 from "./HistoryVariant4";

const HistorySelector = () => {
  const [activeVariant, setActiveVariant] = useState("variant1");

  const variants = [
    { id: "variant1", name: "Classic Timeline", component: History },
    { id: "variant2", name: "Vertical Timeline", component: HistoryVariant2 },
    { id: "variant3", name: "Card Grid", component: HistoryVariant3 },
    { id: "variant4", name: "Modern Timeline", component: HistoryVariant4 },
  ];

  const ActiveComponent =
    variants.find((v) => v.id === activeVariant)?.component || History;

  return (
    <div className="w-full">
      {/* Tab Navigation */}
      <div className="sticky top-0 z-50 bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center py-4">
            <h2 className="text-2xl font-bold text-gray-800 mr-8">
              History Layout Options:
            </h2>
            <div className="flex gap-2">
              {variants.map((variant) => (
                <button
                  key={variant.id}
                  onClick={() => setActiveVariant(variant.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeVariant === variant.id
                      ? "bg-blue-600 text-white shadow-lg scale-105"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {variant.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Active Variant */}
      <div className="transition-opacity duration-300">
        <ActiveComponent />
      </div>

      {/* Selection Footer */}
      <div className="sticky bottom-0 bg-white border-t border-gray-200 shadow-lg py-4 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-600 mb-2">
            Currently viewing:{" "}
            <span className="font-bold text-blue-600">
              {variants.find((v) => v.id === activeVariant)?.name}
            </span>
          </p>
          <p className="text-sm text-gray-500">
            Click on different tabs to compare layouts and choose your preferred
            design
          </p>
        </div>
      </div>
    </div>
  );
};

export default HistorySelector;
