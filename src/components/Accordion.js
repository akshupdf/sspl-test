import React, { useState } from 'react';

const AccordionItem = ({ year, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-200">
      <div
        className="cursor-pointer py-4 px-6 text-xl font-semibold flex justify-between items-center"
        onClick={toggleAccordion}
      >
        <span>{year}</span>
        <span>{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && (
        <div className="py-4 px-6 text-lg">
          {content}
        </div>
      )}
    </div>
  );
};

const Accordion = ({ data }) => {
  return (
    <div className="w-full max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      {data.map((item, index) => (
        <AccordionItem key={index} year={item.year} content={item.content} />
      ))}
    </div>
  );
};

export default Accordion;