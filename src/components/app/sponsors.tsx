import Image from "next/image";
import { SponsorsIcon } from "../icons/sponsors";
import { Badge } from "../ui/badge-component";

const GRID_COLS = 2;

const Sponsors = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center border-[rgba(55,50,47,0.12)] border-b">
      <div className="flex items-center justify-center gap-6 self-stretch border-[rgba(55,50,47,0.12)] border-b px-4 py-8 sm:px-6 sm:py-12 md:px-24 md:py-16">
        <div className="flex w-full max-w-[586px] flex-col items-center justify-start gap-3 overflow-hidden rounded-lg px-4 py-4 shadow-none sm:gap-4 sm:px-6 sm:py-5">
          <Badge icon={<SponsorsIcon />} text="Apoios" />
          <div className="flex w-full max-w-[472.55px] flex-col justify-center text-center font-sans font-semibold text-[#49423D] text-xl leading-tight tracking-tight sm:text-2xl md:text-3xl md:leading-[60px] lg:text-5xl">
            Os nossos apoios
          </div>
          <div className="self-stretch text-center font-normal font-sans text-[#605A57] text-sm leading-6 sm:text-base sm:leading-7">
            Temos o orgulho de contar com a colaboração de vários apoios que nos
            ajudam a continuar a oferecer uma formação musical de excelência.
          </div>
        </div>
      </div>

      <div className="flex items-start justify-center self-stretch border-[rgba(55,50,47,0.12)] border-b-0 bg-[#0D4A85]/10">
        <div className="relative w-4 self-stretch overflow-hidden sm:w-6 md:w-8 lg:w-12" />

        <div className="grid flex-1 grid-cols-2 gap-0 border-[rgba(55,50,47,0.12)] border-r border-l bg-[#F7F5F3]">
          {/* Logo Grid - 2x2 grid */}
          {Array.from({ length: 4 }).map((_, index) => {
            const isLeftColumn = index % GRID_COLS === 0;
            const isTopRow = index < GRID_COLS;

            return (
              <div
                className={`flex h-24 items-center justify-center border-[#E3E2E1] sm:h-32 md:h-36 lg:h-40 ${isLeftColumn ? "border-r-[0.5px]" : "border-l-[0.5px]"} ${isTopRow ? "border-b-[0.5px]" : "border-t-[0.5px] border-b"}`}
                // biome-ignore lint/suspicious/noArrayIndexKey: reason
                key={index}
              >
                <Image
                  alt="CMS"
                  className="h-full w-full object-contain"
                  height={300}
                  src="/cms-logo.png"
                  width={226}
                />
              </div>
            );
          })}
        </div>

        <div className="relative w-4 self-stretch overflow-hidden sm:w-6 md:w-8 lg:w-12" />
      </div>
    </div>
  );
};

export { Sponsors };
