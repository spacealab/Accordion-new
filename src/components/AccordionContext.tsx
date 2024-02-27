"use client"

import React, { createContext, useContext, useState } from 'react';

interface AccordionContextType {
  openIndex: number | null;
  setOpenIndex: (index: number | null) => void;
}

type AccordionProviderProps = {
    children?: React.ReactNode;
  };

const AccordionContext = createContext<AccordionContextType | undefined>(undefined);

export const useAccordion = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error('useAccordion must be used within a AccordionProvider');
  }
  return context;
};

export const AccordionProvider: React.FC<AccordionProviderProps> = ({ children }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <AccordionContext.Provider value={{ openIndex, setOpenIndex }}>
      {children}
    </AccordionContext.Provider>
  );
};