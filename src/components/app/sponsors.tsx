import Image from "next/image";
import { Badge } from "../ui/badge-component";

const GRID_COLS_MOBILE = 2;
const GRID_COLS_DESKTOP = 2;
const DESKTOP_LAST_COL_INDEX = 1;
const FIRST_ROW_THRESHOLD = 2;

const Sponsors = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center border-[rgba(55,50,47,0.12)] border-b">
      <div className="flex items-center justify-center gap-6 self-stretch border-[rgba(55,50,47,0.12)] border-b px-4 py-8 sm:px-6 sm:py-12 md:px-24 md:py-16">
        <div className="flex w-full max-w-[586px] flex-col items-center justify-start gap-3 overflow-hidden rounded-lg px-4 py-4 shadow-none sm:gap-4 sm:px-6 sm:py-5">
          <Badge
            icon={
              <svg
                fill="none"
                height="10"
                viewBox="0 0 12 10"
                width="12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Social Proof</title>
                <rect
                  fill="none"
                  height="6"
                  stroke="#37322F"
                  strokeWidth="1"
                  width="4"
                  x="1"
                  y="3"
                />
                <rect
                  fill="none"
                  height="8"
                  stroke="#37322F"
                  strokeWidth="1"
                  width="4"
                  x="7"
                  y="1"
                />
                <rect fill="#37322F" height="1" width="1" x="2" y="4" />
                <rect fill="#37322F" height="1" width="1" x="3.5" y="4" />
                <rect fill="#37322F" height="1" width="1" x="2" y="5.5" />
                <rect fill="#37322F" height="1" width="1" x="3.5" y="5.5" />
                <rect fill="#37322F" height="1" width="1" x="8" y="2" />
                <rect fill="#37322F" height="1" width="1" x="9.5" y="2" />
                <rect fill="#37322F" height="1" width="1" x="8" y="3.5" />
                <rect fill="#37322F" height="1" width="1" x="9.5" y="3.5" />
                <rect fill="#37322F" height="1" width="1" x="8" y="5" />
                <rect fill="#37322F" height="1" width="1" x="9.5" y="5" />
              </svg>
            }
            text="Apoios"
          />
          <div className="flex w-full max-w-[472.55px] flex-col justify-center text-center font-sans font-semibold text-[#49423D] text-xl leading-tight tracking-tight sm:text-2xl md:text-3xl md:leading-[60px] lg:text-5xl">
            Os nossos apoios
          </div>
          <div className="self-stretch text-center font-normal font-sans text-[#605A57] text-sm leading-6 sm:text-base sm:leading-7">
            Temos o orgulho de contar com a colaboração de vários apoios que nos
            ajudam a continuar a oferecer uma formação musical de excelência.
          </div>
        </div>
      </div>

      {/* Logo Grid */}
      <div className="flex items-start justify-center self-stretch border-[rgba(55,50,47,0.12)] border-t border-b-0">
        <div className="relative w-4 self-stretch overflow-hidden sm:w-6 md:w-8 lg:w-12">
          {/* Left decorative pattern */}
          <div className="-translate-y-1/2 absolute top-1/2 left-[-100px] flex w-[160px] flex-col items-start justify-start sm:left-[-120px] sm:w-[180px] md:left-[-140px] md:w-[220px] lg:left-[-160px] lg:w-[260px]">
            <Image
              alt=""
              className="h-auto w-full opacity-30 mix-blend-multiply sm:opacity-35 md:opacity-40 lg:opacity-45"
              height={320}
              src="/mask-group-pattern.svg"
              style={{
                filter: "hue-rotate(200deg) saturate(0.9) brightness(1.1)",
                maskImage:
                  "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)",
              }}
              width={2808}
            />
          </div>
        </div>

        <div className="grid flex-1 grid-cols-2 gap-0 border-[rgba(55,50,47,0.12)] border-r border-l sm:grid-cols-4 md:grid-cols-4">
          {/* Logo Grid - Responsive grid */}
          {Array.from({ length: 4 }).map((_, index) => {
            const isMobileFirstColumn = index % GRID_COLS_MOBILE === 0;
            const isDesktopFirstColumn = index % GRID_COLS_DESKTOP === 0;
            const isDesktopLastColumn =
              index % GRID_COLS_DESKTOP === DESKTOP_LAST_COL_INDEX;
            const isDesktopTopRow = index < GRID_COLS_DESKTOP;
            const isDesktopBottomRow = index >= GRID_COLS_DESKTOP;

            return (
              <div
                className={`flex h-24 xs:h-28 items-center justify-center gap-1 xs:gap-2 border-[rgba(227,226,225,0.5)] border-b sm:h-32 sm:gap-3 md:h-36 lg:h-40 ${index < FIRST_ROW_THRESHOLD ? "sm:border-b-[0.5px]" : "sm:border-b"}
                            ${index >= FIRST_ROW_THRESHOLD ? "border-b" : ""}
                            ${isMobileFirstColumn ? "border-r-[0.5px]" : ""}sm:border-r-[0.5px] sm:border-l-0 ${isDesktopFirstColumn ? "md:border-l" : "md:border-l-[0.5px]"}
                            ${isDesktopLastColumn ? "md:border-r" : "md:border-r-[0.5px]"}
                            ${isDesktopTopRow ? "md:border-b-[0.5px]" : ""}
                            ${isDesktopBottomRow ? "md:border-t-[0.5px] md:border-b" : ""}border-[#E3E2E1]`}
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

        <div className="relative w-4 self-stretch overflow-hidden sm:w-6 md:w-8 lg:w-12">
          {/* Right decorative pattern */}
          <div className="-translate-y-1/2 absolute top-1/2 right-[-100px] flex w-[160px] flex-col items-end justify-start sm:right-[-120px] sm:w-[180px] md:right-[-140px] md:w-[220px] lg:right-[-160px] lg:w-[260px]">
            <Image
              alt=""
              className="h-auto w-full opacity-30 mix-blend-multiply sm:opacity-35 md:opacity-40 lg:opacity-45"
              height={320}
              src="/mask-group-pattern.svg"
              style={{
                filter: "hue-rotate(200deg) saturate(0.9) brightness(1.1)",
                maskImage:
                  "linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 100%)",
              }}
              width={2808}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Sponsors };
