"use client"

import React from 'react';
import { useAccordion } from './AccordionContext';

interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
  identifier: number; 
}

const Accordion: React.FC<AccordionProps> = ({ items, identifier }) => {
  const { openIndex, setOpenIndex } = useAccordion();

  return (
    <div className="flex flex-col w-4/5 mx-auto mt-5">
      {items.map((item, index) => (
        <div key={index} className="mb-4 border border-gray-300 rounded overflow-hidden">
          <div
            className="bg-gray-200 p-4 cursor-pointer"
            onClick={() => setOpenIndex(openIndex === identifier + index ? null : identifier + index)}
          >
            {item.title}
          </div>
          <div className={`p-4 ${openIndex === identifier + index ? 'block' : 'hidden'}`}>
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;