import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";

function Cardquestion({ questions = [] }) {
  const titleClass = "text-gray-800 text-[17px] md:text-lg font-semibold font-['Quicksand'] border-none focus:ring-0 hover:bg-transparent";

  return (
    <div className="flex flex-col gap-4 w-full">
      {questions.map((faq) => (
        <Accordion
          collapseAll
          key={faq.id}
          className="border-none bg-white rounded-2xl shadow-sm"
        >
          <AccordionPanel>
            <AccordionTitle className={titleClass}>
              {faq.title}
            </AccordionTitle>
            <AccordionContent className="border-none pt-1">
              {faq.content}
            </AccordionContent>
          </AccordionPanel>
        </Accordion>
      ))}
    </div>
  );
}

export default Cardquestion;