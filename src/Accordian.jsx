import React, { useState } from 'react';

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const accordionItems = [
    { title: 'What is your return policy?', body: 'This is the content of Accordion 1' },
    { title: 'How do I track my order?', body: 'This is the content of Accordion 2' },
    { title: 'Can I purchase itme again?', body: 'This is the content of Accordion 3' },
  ];

  const toggleAccordion = (index) => {
    if (openIndex === index) {
      setOpenIndex(null); 
    } else {
      setOpenIndex(index); 
    }
  };

  return (
    <div>
      {accordionItems.map((item, index) => (
        <div key={index}>
          <div
            onClick={() => toggleAccordion(index)}
            style={{
              padding: '10px',
              backgroundColor: '#f0f0f0',
              cursor: 'pointer',
              border: '1px solid #ddd',
            }}
          >
           <p>{item.title}</p>
          </div>

          {openIndex === index && (
            <div
              style={{
                padding: '10px',
                backgroundColor: '#f9f9f9',
                border: '1px solid #ddd',
              }}
            >
              {item.body}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
