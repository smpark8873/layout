import React, { useState } from "react";

const AccordionMenu = [
    {
      index: 0,
      title: "Content 1",
      content: `Aperiam ab atque incidunt dolores ullam est, earum ipsa recusandae velit cumque. Aperiam ab atque incidunt dolores ullam est, earum ipsa recusandae velit cumque.`
    },
    {
      index: 1,
      title: "Content 2",
      content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
      quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
      dolor ut sequi minus iste? Quas?`
    },
    {
      index: 3,
      title: "Content 3",
      content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
      reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
      quaerat iure quos dolorum accusantium ducimus in illum vero commodi
      pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
      quidem maiores doloremque est numquam praesentium eos voluptatem amet!
      Repudiandae, mollitia id reprehenderit a ab odit!`
    }
];

const Accordion = ({ title, content, index, activeIndex, onAccordionClick }) => {
    const isActive = index === activeIndex;
  
    return (
      <div className="accordion-item" key={title}>
        <div className="accordion-title" onClick={() => onAccordionClick(index)}>
          <div>{title}</div>
          <div>{isActive ? "-" : "+"}</div>
        </div>
        {isActive && <div className="accordion-content">{content}</div>}
      </div>
    );
  };

export default function AccordionApp() {
    const [activeIndex, setActiveIndex] = useState(-1);
  
    const handleAccordionClick = (index) => {
      setActiveIndex(index === activeIndex ? -1 : index);
    };
  
    return (
      <div className="wrap">
        <h1>Accordion</h1>
        <div className="accordion">
          {AccordionMenu.map((item, index) => (
            <Accordion
              key={index}
              title={item.title}
              content={item.content}
              index={index}
              activeIndex={activeIndex}
              onAccordionClick={handleAccordionClick}
            />
          ))}
        </div>
      </div>
    );
  }