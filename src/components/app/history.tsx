"use client";

import { HistoryIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Badge } from "../ui/badge-component";

const MAX_PROGRESS = 100;
const PROGRESS_INTERVAL = 100;
const TOTAL_CARDS = 3;

const History = () => {
  const [activeCard, setActiveCard] = useState(0);
  const [progress, setProgress] = useState(0);
  const mountedRef = useRef(true);
  const progressRef = useRef(0);

  const cards = [
    {
      title: "Fundação e primeiros anos",
      description:
        "O Coral Infantil de Setúbal foi fundado em 1979, marcando o início de uma jornada musical única.",
      image: "https://cdn.coralinfantilsetubal.com/2.jpg",
      gradient: "from-[#0D4A85]/20 to-[#F7F5F3]",
    },
    {
      title: "Crescimento e reconhecimento",
      description:
        "Ao longo dos anos, o coral conquistou diversos prémios e reconhecimento nacional e internacional.",
      image: "https://cdn.coralinfantilsetubal.com/100.JPG",
      gradient: "from-[#E01582]/20 to-[#F7F5F3]",
    },
    {
      title: "45 anos de história",
      description:
        "Celebramos 45 anos de música, formação e amizade, com mais de 50 coralistas ativos.",
      image: "https://cdn.coralinfantilsetubal.com/157.JPG",
      gradient: "from-[#0D4A85]/20 to-[#F7F5F3]",
    },
  ];

  useEffect(() => {
    const progressInterval = setInterval(() => {
      if (!mountedRef.current) {
        return;
      }

      progressRef.current += 1; // 1% every 100ms = 10 seconds total

      if (progressRef.current >= MAX_PROGRESS) {
        progressRef.current = 0;
        setActiveCard((current) => (current + 1) % TOTAL_CARDS);
      }

      setProgress(progressRef.current);
    }, PROGRESS_INTERVAL);

    return () => {
      clearInterval(progressInterval);
      mountedRef.current = false;
    };
  }, []);

  useEffect(
    () => () => {
      mountedRef.current = false;
    },
    []
  );

  const handleCardClick = (index: number) => {
    if (!mountedRef.current) {
      return;
    }

    setActiveCard(index);
    progressRef.current = 0;
    setProgress(0);
  };

  return (
    <div className="flex w-full flex-col items-center justify-center border-[rgba(55,50,47,0.12)] border-b">
      {/* Header Section */}
      <div className="flex items-center justify-center gap-6 self-stretch border-[rgba(55,50,47,0.12)] border-b px-4 py-8 sm:px-6 sm:py-12 md:px-24 md:py-16">
        <div className="flex w-full max-w-[586px] flex-col items-center justify-start gap-3 overflow-hidden rounded-lg px-4 py-4 shadow-none sm:gap-4 sm:px-6 sm:py-5">
          <Badge icon={<HistoryIcon className="size-3.5" />} text="Arquivo" />
          <div className="flex w-full max-w-[472.55px] flex-col justify-center text-center font-sans font-semibold text-[#49423D] text-xl leading-tight tracking-tight sm:text-2xl md:text-3xl md:leading-[60px] lg:text-5xl">
            Uma história com
            <br />
            mais de 45 anos
          </div>
          <div className="self-stretch text-center font-normal font-sans text-[#605A57] text-sm leading-6 sm:text-base sm:leading-7">
            Descobre a trajetória do Coral Infantil de Setúbal,
            <br />
            desde a fundação até aos dias de hoje.
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex items-center justify-start self-stretch overflow-hidden bg-[#0D4A85]/10 px-4 sm:px-6 md:px-9">
        <div className="flex flex-1 flex-col items-center justify-start gap-6 py-8 md:flex-row md:gap-12 md:py-11 lg:gap-16">
          {/* Left Column - Feature Cards */}
          <div className="order-2 flex w-full flex-col items-center justify-center gap-3 md:order-1 md:w-auto md:max-w-[400px]">
            {cards.map((card, index) => {
              const isActive = index === activeCard;

              return (
                <button
                  className={`flex w-full cursor-pointer flex-col items-start justify-start overflow-hidden transition-all duration-300 ${
                    isActive
                      ? "bg-white shadow-[0px_0px_0px_0.75px_#E0DEDB_inset]"
                      : "border border-[rgba(2,6,23,0.08)] bg-white"
                  }`}
                  // biome-ignore lint/suspicious/noArrayIndexKey: reason
                  key={index}
                  onClick={() => handleCardClick(index)}
                  type="button"
                >
                  <div
                    className={`h-0.5 w-full overflow-hidden bg-[rgba(50,45,43,0.08)] transition-opacity ${isActive ? "opacity-100" : "opacity-0"}`}
                  >
                    <div
                      className="h-0.5 bg-[#322D2B]"
                      style={{
                        width: isActive ? `${progress}%` : "0%",
                        transition: "width 0.1s linear",
                      }}
                    />
                  </div>
                  <div className="flex w-full flex-col gap-2 px-5 py-4 sm:px-6 sm:py-5">
                    <div className="flex flex-col justify-center self-stretch text-left font-sans font-semibold text-[#49423D] text-sm leading-6 sm:text-base">
                      {card.title}
                    </div>
                    <div className="self-stretch whitespace-pre-line text-left font-normal font-sans text-[#605A57] text-[13px] leading-[22px]">
                      {card.description}
                    </div>
                  </div>
                </button>
              );
            })}

            <button
              className="relative flex h-10 w-full items-center justify-center overflow-hidden rounded-full bg-[#0D4A85] px-6 py-2 shadow-[0px_0px_0px_2.5px_rgba(255,255,255,0.08)_inset] sm:h-11 sm:px-8 sm:py-[6px] md:h-12 md:px-10 lg:px-12"
              type="button"
            >
              <div className="flex items-center justify-center font-medium font-sans text-sm text-white leading-5 sm:text-base md:text-[15px]">
                Ver a história completa
              </div>
            </button>
          </div>

          {/* Right Column - Image */}
          <div className="order-1 flex w-full flex-col items-center justify-center gap-2 rounded-lg md:order-2 md:w-auto">
            <div className="relative flex h-[250px] w-full flex-col items-start justify-start overflow-hidden rounded-lg bg-white shadow-[0px_0px_0px_0.9056603908538818px_rgba(0,0,0,0.08)] sm:h-[300px] md:h-[420px] md:w-[580px]">
              {cards.map((card, index) => (
                <div
                  className={`absolute inset-0 h-full w-full transition-all duration-500 ease-in-out ${
                    activeCard === index
                      ? "scale-100 opacity-100 blur-0"
                      : "pointer-events-none scale-95 opacity-0 blur-sm"
                  }`}
                  // biome-ignore lint/suspicious/noArrayIndexKey: reason
                  key={index}
                >
                  <Image
                    alt={card.title}
                    className="h-full w-full object-cover"
                    height={420}
                    src={card.image || ""}
                    width={580}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { History };
