"use client";

import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: "Que idade é necessária para entrar no Coral?",
    answer:
      "O Coral Infantil de Setúbal aceita crianças e jovens entre os 6 e os 16 anos. Não é necessário ter experiência prévia em canto, apenas vontade de aprender e fazer parte desta família musical.",
  },
  {
    question: "Quando são os ensaios?",
    answer:
      "Os ensaios decorrem regularmente durante a semana. Para informações específicas sobre horários e localização, por favor entra em contacto connosco através do formulário de contacto.",
  },
  {
    question: "É necessário saber ler música?",
    answer:
      "Não! Não é necessário ter conhecimentos prévios de música. Ao longo do tempo, os coralistas aprendem a ler partituras e desenvolvem as suas capacidades musicais com o apoio dos nossos maestros.",
  },
  {
    question: "Há algum custo para participar?",
    answer:
      "Para informações sobre mensalidades e custos associados à participação no coral, por favor contacta-nos. Teremos todo o gosto em esclarecer todas as dúvidas relacionadas com inscrições.",
  },
  {
    question: "O que é o TuttiEncantus?",
    answer:
      "O TuttiEncantus é o coro feminino formado por ex-coralistas do Coral Infantil de Setúbal. É uma forma de manter a ligação à música e ao coral mesmo depois de completar os 16 anos.",
  },
  {
    question: "Como posso inscrever o meu filho?",
    answer:
      "Para inscrever o teu filho no Coral Infantil de Setúbal, entra em contacto connosco através do formulário de contacto. A nossa equipa terá todo o gosto em explicar o processo de inscrição e responder a todas as tuas questões.",
  },
];

const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="flex w-full items-start justify-center">
      <div className="flex flex-1 flex-col items-start justify-start gap-6 px-4 py-16 md:px-12 md:py-20 lg:flex-row lg:gap-12">
        {/* Left Column */}
        <div className="flex w-full flex-col items-start justify-center gap-4 lg:flex-1 lg:py-5">
          <div className="flex w-full flex-col justify-center font-sans font-semibold text-4xl text-[#49423D] leading-tight tracking-tight md:leading-[44px]">
            Perguntas Frequentes
          </div>
          <div className="w-full font-normal font-sans text-[#605A57] text-base leading-7">
            Tens dúvidas sobre o Coral?
            <br className="hidden md:block" />
            Aqui encontras as respostas mais comuns.
          </div>
        </div>

        {/* Right Column*/}
        <div className="flex w-full flex-col items-center justify-center lg:flex-1">
          <div className="flex w-full flex-col">
            {faqData.map((item, index) => {
              const isOpen = openItems.includes(index);

              return (
                <div
                  className="w-full overflow-hidden border-[rgba(73,66,61,0.16)] border-b"
                  // biome-ignore lint/suspicious/noArrayIndexKey: reason
                  key={index}
                >
                  <button
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-5 px-5 py-[18px] text-left transition-colors duration-200 hover:bg-[rgba(73,66,61,0.02)]"
                    onClick={() => toggleItem(index)}
                    type="button"
                  >
                    <div className="flex-1 font-medium font-sans text-[#49423D] text-base leading-6">
                      {item.question}
                    </div>
                    <div className="flex items-center justify-center">
                      <ChevronDownIcon
                        className={`h-6 w-6 text-[rgba(73,66,61,0.60)] transition-transform duration-300 ease-in-out ${
                          isOpen ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-5 pb-[18px] font-normal font-sans text-[#605A57] text-sm leading-6">
                      {item.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export { FAQSection };
