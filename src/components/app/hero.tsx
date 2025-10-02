"use client";

import { MusicIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { FeatureCard } from "../ui/feature-card";

const MAX_PROGRESS = 100;
const FEATURE_CARDS = 2;
const PROGRESS_INTERVAL = 100;

const Hero = () => {
  const [activeCard, setActiveCard] = useState(0);
  const [progress, setProgress] = useState(0);
  const mountedRef = useRef(true);
  const progressRef = useRef(0);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      if (!mountedRef.current) {
        return;
      }

      progressRef.current += 1; // 1% every 100ms = 10 seconds total

      if (progressRef.current >= MAX_PROGRESS) {
        progressRef.current = 0;
        setActiveCard((current) => (current + 1) % FEATURE_CARDS);
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
    <>
      <div className="flex w-full max-w-[937px] flex-col items-center justify-center gap-3 sm:gap-4 md:gap-5 lg:gap-6">
        <div className="flex flex-col items-center justify-center gap-4 self-stretch rounded-[3px] sm:gap-5 md:gap-6 lg:gap-8">
          <Image
            alt="Coral Infantil de Setúbal"
            className=""
            height={125}
            src="/cis-icon.png"
            width={125}
          />
          <div className="flex w-full max-w-[748.71px] flex-col justify-center px-2 text-center font-charm font-normal text-[#0D4A85] text-[24px] xs:text-[28px] leading-[1.1] sm:px-4 sm:text-[36px] sm:leading-[1.15] md:px-0 md:text-[52px] md:leading-[1.2] lg:text-[80px] lg:leading-24">
            Coral Infantil de Setúbal
          </div>
          <div className="flex w-full max-w-[520.08px] flex-col justify-center px-2 text-center font-medium font-sans text-[rgba(55,50,47,0.80)] text-sm leading-[1.4] sm:px-4 sm:text-lg sm:leading-[1.45] md:px-0 md:text-xl md:leading-[1.5] lg:text-lg lg:leading-7">
            Gostas de cantar? Tens entre 6 e 16 anos?
            <br className="block" />
            Então estás à espera do quê para pertenceres a esta família?
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-6 flex w-full max-w-[497px] flex-col items-center justify-center gap-6 sm:mt-8 sm:gap-8 md:mt-10 md:gap-10 lg:mt-12 lg:w-[497px] lg:gap-12">
        <div className="flex items-center justify-start gap-4 backdrop-blur-[8.25px]">
          <div className="relative flex h-10 items-center justify-center overflow-hidden rounded-full bg-[#0D4A85] px-6 py-2 shadow-[0px_0px_0px_2.5px_rgba(255,255,255,0.08)_inset] sm:h-11 sm:px-8 sm:py-[6px] md:h-12 md:px-10 lg:px-12">
            <div className="flex items-center justify-center font-medium font-sans text-sm text-white leading-5 sm:text-base md:text-[15px]">
              Estamos à tua espera
              <MusicIcon className="ml-2 size-5" />
            </div>
          </div>
        </div>
      </div>

      <div className="-translate-x-1/2 pointer-events-none absolute top-[20px] left-1/2 z-0 h-[400px] w-[100vw] max-w-[1400px] transform sm:top-[220px] sm:h-[500px] md:top-[240px] md:h-[600px] lg:top-[260px] lg:h-[700px]">
        <div
          className="h-full w-full opacity-50 mix-blend-multiply transition-all duration-500 sm:opacity-60 md:opacity-70"
          style={{
            background:
              activeCard === 0
                ? "radial-gradient(ellipse 70% 50% at 50% 40%, rgba(13, 74, 133, 0.7) 0%, rgba(25, 90, 150, 0.5) 20%, rgba(45, 120, 180, 0.3) 40%, transparent 70%)"
                : "radial-gradient(ellipse 70% 50% at 50% 40%, rgba(224, 21, 130, 0.7) 0%, rgba(230, 60, 150, 0.5) 20%, rgba(240, 100, 180, 0.3) 40%, transparent 70%)",
            filter: "blur(60px) saturate(1.2) brightness(1.0)",
          }}
        />
      </div>

      <div className="relative z-5 my-8 mb-0 flex w-full max-w-[960px] flex-col items-center justify-center gap-2 px-2 pt-2 pb-6 sm:my-12 sm:px-4 sm:pt-4 sm:pb-8 md:my-16 md:px-6 md:pb-10 lg:my-16 lg:w-[960px] lg:px-11 lg:pb-0">
        <div className="flex h-[200px] w-full max-w-[960px] flex-col items-start justify-start overflow-hidden rounded-[6px] bg-white shadow-[0px_0px_0px_0.9056603908538818px_rgba(0,0,0,0.08)] sm:h-[280px] sm:rounded-[8px] md:h-[450px] lg:h-[695.55px] lg:w-[960px] lg:rounded-[9.06px]">
          <div className="flex flex-1 items-start justify-start self-stretch">
            <div className="flex h-full w-full items-center justify-center">
              <div className="relative h-full w-full overflow-hidden">
                <div
                  className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                    activeCard === 0
                      ? "scale-100 opacity-100 blur-0"
                      : "scale-95 opacity-0 blur-sm"
                  }`}
                >
                  <Image
                    alt="Aniversário de 45 anos do Coral Infantil de Setúbal"
                    className="h-full w-full object-cover"
                    height={695.55}
                    src="https://cdn.coralinfantilsetubal.com/157.JPG"
                    width={960}
                  />
                </div>

                <div
                  className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                    activeCard === 1
                      ? "scale-100 opacity-100 blur-0"
                      : "scale-95 opacity-0 blur-sm"
                  }`}
                >
                  <Image
                    alt="Tuti Encantos"
                    className="h-full w-full object-cover"
                    height={695.55}
                    src="https://cdn.coralinfantilsetubal.com/119.JPG"
                    width={960}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "flex items-start justify-center self-stretch border-[#E0DEDB] border-t border-b",
          {
            "bg-gradient-to-t from-[#0D4A85]/50 to-[#F7F5F3]": activeCard === 0,
            "bg-gradient-to-t from-[#E01582]/50 to-[#F7F5F3]": activeCard === 1,
          }
        )}
      >
        <div className="relative w-4 self-stretch overflow-hidden sm:w-6 md:w-8 lg:w-12" />

        <div className="flex flex-1 flex-col items-stretch justify-center gap-0 bg-[#F7F5F3] px-0 sm:px-2 md:flex-row md:px-0">
          {/* Feature Cards */}
          <FeatureCard
            description="O Coral Infantil de Setúbal foi fundado em 1979, conta com mais de 50 coralistas com idade compreendida entre os 6 e os 16 anos."
            isActive={activeCard === 0}
            onClick={() => handleCardClick(0)}
            progress={activeCard === 0 ? progress : 0}
            title="Coral Infantil"
          />
          <FeatureCard
            description="O Coro Feminino TuttiEncantus é constituído por ex-coralistas do Coral Infantil de Setúbal."
            isActive={activeCard === 1}
            onClick={() => handleCardClick(1)}
            progress={activeCard === 1 ? progress : 0}
            title="Tuti Encantos"
          />
        </div>

        <div className="relative w-4 self-stretch overflow-hidden sm:w-6 md:w-8 lg:w-12" />
      </div>
    </>
  );
};

export { Hero };
