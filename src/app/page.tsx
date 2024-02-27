import Accordion from '@/components/Accordion';
import { AccordionProvider } from '@/components/AccordionContext';
import React from 'react';

const items1 = [
  { title: 'Section 1 Item 1', content: 'Content for section 1 item 1.' },
  { title: 'Section 1 Item 2', content: 'Content for section 1 item 2.' },
];

const items2 = [
  { title: 'Section 2 Item 1', content: 'Content for section 2 item 1.' },
  { title: 'Section 2 Item 2', content: 'Content for section 2 item 2.' },
];

export default function Home() {
  return (
    <AccordionProvider>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Accordion items={items1} identifier={100} />
        <Accordion items={items2} identifier={200} />
      </main>
    </AccordionProvider>
  );
}