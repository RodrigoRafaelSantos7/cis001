import SmartSimpleBrilliant from "../ui/smar-simple-brilliant";
import NumbersThatSpeak from "./numbers-that-speak";

const BentoGrid = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center border-[rgba(55,50,47,0.12)] border-b">
      <div className="flex items-center justify-center gap-6 self-stretch border-[rgba(55,50,47,0.12)] border-b px-4 py-8 sm:px-6 sm:py-12 md:px-8 md:py-16 lg:w-[1060px] lg:max-w-[1060px] lg:px-0">
        <div className="flex w-full max-w-[616px] flex-col items-center justify-start gap-3 overflow-hidden rounded-lg px-4 py-4 shadow-none sm:gap-4 sm:px-6 sm:py-5 lg:w-[616px]">
          <div className="flex w-full max-w-[598.06px] flex-col justify-center text-center font-sans font-semibold text-[#49423D] text-xl leading-tight tracking-tight sm:text-2xl md:text-3xl md:leading-[60px] lg:w-[598.06px] lg:text-5xl">
            Sempre informado,
            <br />
            sempre presente
          </div>
          <div className="self-stretch text-center font-normal font-sans text-[#605A57] text-sm leading-6 sm:text-base sm:leading-7">
            Acede ao calendário de ensaios e eventos, consulta informações
            <br />
            administrativas e mantém-te sempre atualizado.
          </div>
        </div>
      </div>

      <div className="flex items-start justify-center self-stretch bg-[#0D4A85]/10">
        <div className="relative w-4 self-stretch overflow-hidden sm:w-6 md:w-8 lg:w-12">
          <div className="absolute top-[-120px] left-[-40px] flex w-[120px] flex-col items-start justify-start sm:left-[-50px] sm:w-[140px] md:left-[-58px] md:w-[162px]" />
        </div>

        {/* Left - Smart. Simple. Brilliant. */}
        <div className="grid flex-1 grid-cols-1 gap-0 border-[rgba(55,50,47,0.12)] border-r border-l bg-[#F7F5F3] md:grid-cols-2">
          <div className="flex flex-col items-start justify-start gap-4 border-[rgba(55,50,47,0.12)] border-r-0 border-b p-4 sm:gap-6 sm:p-6 md:border-r md:p-8 lg:p-12">
            <div className="flex flex-col gap-2">
              <h3 className="font-sans font-semibold text-[#37322F] text-lg leading-tight sm:text-xl">
                Sempre em sintonia
              </h3>
              <p className="font-normal font-sans text-[#605A57] text-sm leading-relaxed md:text-base">
                Consulta os nossos ensaios, concertos e eventos. Nunca percas um
                momento especial do coral.
              </p>
            </div>
            <div className="flex h-[200px] w-full items-center justify-center overflow-hidden rounded-lg sm:h-[250px] md:h-[300px]">
              <SmartSimpleBrilliant
                className="scale-50 sm:scale-65 md:scale-75 lg:scale-90"
                height="100%"
                theme="light"
                width="100%"
              />
            </div>

            <div className="relative flex h-10 w-full items-center justify-center overflow-hidden rounded-full bg-[#0D4A85] px-6 py-2 shadow-[0px_0px_0px_2.5px_rgba(255,255,255,0.08)_inset] sm:h-11 sm:px-8 sm:py-[6px] md:h-12 md:px-10 lg:px-12">
              <div className="flex items-center justify-center font-medium font-sans text-sm text-white leading-5 sm:text-base md:text-[15px]">
                Ver o nosso calendário
              </div>
            </div>
          </div>

          {/* Right - Financial information */}
          <div className="flex flex-col items-start justify-start gap-4 p-4 sm:gap-6 sm:p-6 md:p-8 lg:p-12">
            <div className="flex flex-col gap-2">
              <h3 className="font-sans font-semibold text-[#37322F] text-lg leading-tight sm:text-xl">
                Transparência total
              </h3>
              <p className="font-normal font-sans text-[#605A57] text-sm leading-relaxed md:text-base">
                Acompanha quotas, pagamentos e informação financeira de forma
                clara e organizada.
              </p>
            </div>
            <div className="relative flex h-[200px] w-full items-center justify-center overflow-hidden rounded-lg sm:h-[250px] md:h-[300px]">
              <div className="absolute inset-0 flex items-center justify-center">
                <NumbersThatSpeak
                  className="h-full w-full object-contain"
                  height="100%"
                  theme="light"
                  width="100%"
                />
              </div>

              {/* Gradient mask for soft bottom edge */}
              <div className="pointer-events-none absolute right-0 bottom-0 left-0 h-8 bg-gradient-to-t from-[#F7F5F3] to-transparent" />
              {/* Fallback content if component doesn't render */}
              <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <div className="flex flex-col items-center gap-2 p-4">
                  <div className="h-full w-3/4 rounded-full bg-green-500" />
                </div>
                <div className="text-green-600 text-sm">Growth Rate</div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative w-4 self-stretch overflow-hidden sm:w-6 md:w-8 lg:w-12" />
      </div>
    </div>
  );
};

export { BentoGrid };
