"use client";

import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: "Com que idade se pode entrar no Coral",
    answer: "Entre os 6 e os 14 anos.",
  },
  {
    question: "Quando são os ensaios?",
    answer:
      "Os ensaios decorrem semanalmente às 4ª feira e 6ª feira das 19h00 às 20h15. Para informações específicas sobre horários e localização, por favor entra em contacto connosco através do formulário de contacto.",
  },
  {
    question: "É preciso saber música?",
    answer:
      "Não! Não é necessário ter conhecimentos prévio de música. Ao longo do tempo os coralistas vão desenvolvendo as suas capacidades musicais.",
  },
  {
    question: "Quais são os custos?",
    answer:
      "Cada coralista e o seu Encarregado de Educação têm de se tornar sócios do Coral Infantil de Setúbal, pagando uma quota mensal de valor simbólico. Entre setembro e julho os coralistas pagam uma mensalidade. Contacte-nos para informações mais detalhadas.",
  },
  {
    question: "O que é o Coro Feminino TuttiEncantus ?",
    answer:
      "É um coro formado por ex-coralistas do Coral Infantil de Setúbal. É uma forma de manter a ligação à música e ao coral, mesmo depois de completar os 16 anos.",
  },
  {
    question: "Como posso inscrever o meu filho?",
    answer:
      "Para inscrever o seu filho, entre em contacto connosco através do formulário de contacto. Teremos todo o gosto em explicar o processo de inscrição e responder às suas questões.",
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
            Tem dúvidas sobre o Coral?
            <br className="hidden md:block" />
            Aqui encontra as respostas mais comuns.
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
