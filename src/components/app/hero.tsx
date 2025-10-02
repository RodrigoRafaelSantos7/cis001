import { MusicIcon } from "lucide-react";
import Image from "next/image";

const Hero = () => (
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
        src="/mask-group-pattern.svg"
        style={{
          filter: "hue-rotate(15deg) saturate(0.7) brightness(1.2)",
        }}
      />
    </div>
  </>
);

export { Hero };
