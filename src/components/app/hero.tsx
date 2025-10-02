"use client";

import { MusicIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
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
      <div className="flex w-full max-w-[937px] flex-col items-center justify-center gap-3 sm:gap-4 md:gap-5 lg:w-[937px] lg:gap-6">
        <div className="flex flex-col items-center justify-center gap-4 self-stretch rounded-[3px] sm:gap-5 md:gap-6 lg:gap-8">
          <div className="flex w-full max-w-[748.71px] flex-col justify-center px-2 text-center font-charm font-normal text-[#0D4A85] text-[24px] xs:text-[28px] leading-[1.1] sm:px-4 sm:text-[36px] sm:leading-[1.15] md:px-0 md:text-[52px] md:leading-[1.2] lg:w-[748.71px] lg:text-[80px] lg:leading-24">
            Coral Infantil
            <br />
            de Setúbal
          </div>
          <div className="flex w-full max-w-[520.08px] flex-col justify-center px-2 text-center font-medium font-sans text-[rgba(55,50,47,0.80)] text-sm leading-[1.4] sm:px-4 sm:text-lg sm:leading-[1.45] md:px-0 md:text-xl md:leading-[1.5] lg:text-lg lg:leading-7">
            Gostas de cantar?Tens entre 6 e 16 anos?
            <br className="hidden sm:block" />
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

      <div className="-translate-x-1/2 pointer-events-none absolute top-[232px] left-1/2 z-0 transform sm:top-[248px] md:top-[264px] lg:top-[320px]">
        <Image
          alt=""
          className="h-auto w-[936px] opacity-30 mix-blend-multiply sm:w-[1404px] sm:opacity-40 md:w-[2106px] md:opacity-50 lg:w-[2808px]"
          height={320}
          src="/mask-group-pattern.svg"
          style={{
            filter: "hue-rotate(15deg) saturate(0.7) brightness(1.2)",
          }}
          width={2808}
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
                    src="/cis-anniversary.JPG"
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
                    src="/tuti-encantos.JPG"
                    width={960}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-start justify-center self-stretch border-[#E0DEDB] border-t border-b">
        <div className="relative w-4 self-stretch overflow-hidden sm:w-6 md:w-8 lg:w-12">
          {/* Left decorative pattern */}
          <div className="-translate-y-1/2 absolute top-1/2 left-[-100px] flex w-[160px] flex-col items-start justify-start sm:left-[-120px] sm:w-[180px] md:left-[-140px] md:w-[220px] lg:left-[-160px] lg:w-[260px]">
            <Image
              alt=""
              className="h-auto w-full opacity-20 mix-blend-multiply sm:opacity-25 md:opacity-30 lg:opacity-35"
              height={320}
              src="/mask-group-pattern.svg"
              style={{
                filter: "hue-rotate(200deg) saturate(0.9) brightness(1.1)",
                maskImage:
                  "linear-gradient(to right, transparent 0%, black 40%, black 60%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to right, transparent 0%, black 40%, black 60%, transparent 100%)",
              }}
              width={2808}
            />
          </div>
        </div>

        <div className="flex flex-1 flex-col items-stretch justify-center gap-0 px-0 sm:px-2 md:flex-row md:px-0">
          {/* Feature Cards */}
          <FeatureCard
            description="Streamline customer subscriptions and billing with automated scheduling tools."
            isActive={activeCard === 0}
            onClick={() => handleCardClick(0)}
            progress={activeCard === 0 ? progress : 0}
            title="Plan your schedules"
          />
          <FeatureCard
            description="Transform your business data into actionable insights with real-time analytics."
            isActive={activeCard === 1}
            onClick={() => handleCardClick(1)}
            progress={activeCard === 1 ? progress : 0}
            title="Analytics & insights"
          />
        </div>

        <div className="relative w-4 self-stretch overflow-hidden sm:w-6 md:w-8 lg:w-12">
          {/* Right decorative pattern */}
          <div className="-translate-y-1/2 absolute top-1/2 right-[-100px] flex w-[160px] flex-col items-end justify-start sm:right-[-120px] sm:w-[180px] md:right-[-140px] md:w-[220px] lg:right-[-160px] lg:w-[260px]">
            <Image
              alt=""
              className="h-auto w-full opacity-20 mix-blend-multiply sm:opacity-25 md:opacity-30 lg:opacity-35"
              height={320}
              src="/mask-group-pattern.svg"
              style={{
                filter: "hue-rotate(200deg) saturate(0.9) brightness(1.1)",
                maskImage:
                  "linear-gradient(to left, transparent 0%, black 40%, black 60%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to left, transparent 0%, black 40%, black 60%, transparent 100%)",
              }}
              width={2808}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export { Hero };
