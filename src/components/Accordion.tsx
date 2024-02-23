"use client"

import React, { useState } from 'react';

interface AccordionItem {
  title: string;
  content: string;
}

const Accordion: React.FC = () => {
  // State to track the open item of each accordion
  const [openIndex1, setOpenIndex1] = useState<number | null>(null);
  const [openIndex2, setOpenIndex2] = useState<number | null>(null);

  const items1: AccordionItem[] = [
    { title: 'Section 1 Item 1', content: 'Content for section 1 item 1.' },
    { title: 'Section 1 Item 2', content: 'Content for section 1 item 2.' },
  ];

  const items2: AccordionItem[] = [
    { title: 'Section 2 Item 1', content: 'Content for section 2 item 1.' },
    { title: 'Section 2 Item 2', content: 'Content for section 2 item 2.' },
  ];

  // Function to handle opening items in the first accordion
  const handleOpenItem1 = (index: number) => {
    setOpenIndex1(index === openIndex1 ? null : index);
    // Ensure the second accordion is closed when opening an item in the first
    if (openIndex2 !== null) setOpenIndex2(null);
  };

  // Function to handle opening items in the second accordion
  const handleOpenItem2 = (index: number) => {
    setOpenIndex2(index === openIndex2 ? null : index);
    // Ensure the first accordion is closed when opening an item in the second
    if (openIndex1 !== null) setOpenIndex1(null);
  };

  return (
    <>
      <div className="flex flex-col w-4/5 mx-auto mt-5">
        {items1.map((item, index) => (
          <div key={index} className="mb-4 border border-gray-300 rounded overflow-hidden">
            <div
              className="bg-gray-200 p-4 cursor-pointer"
              onClick={() => handleOpenItem1(index)}
            >
              {item.title}
            </div>
            <div className={`p-4 ${index === openIndex1 ? 'block' : 'hidden'}`}>
              {item.content}
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col w-4/5 mx-auto mt-5">
        {items2.map((item, index) => (
          <div key={index} className="mb-4 border border-gray-300 rounded overflow-hidden">
            <div
              className="bg-gray-200 p-4 cursor-pointer"
              onClick={() => handleOpenItem2(index)}
            >
              {item.title}
            </div>
            <div className={`p-4 ${index === openIndex2 ? 'block' : 'hidden'}`}>
              {item.content}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Accordion;