"use client";

const CTA = () => {
  return (
    <div className="relative flex w-full flex-col items-center justify-center gap-2 overflow-hidden">
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center gap-6 self-stretch border-[rgba(55,50,47,0.12)] border-t border-b bg-[#0D4A85]/10 px-6 py-12 md:px-24 md:py-12">
        <div className="relative z-20 flex w-full max-w-[586px] flex-col items-center justify-start gap-6 overflow-hidden rounded-lg px-6 py-5 md:py-8">
          <div className="flex flex-col items-start justify-start gap-3 self-stretch">
            <div className="flex flex-col justify-center self-stretch text-center font-sans font-semibold text-3xl text-[#49423D] leading-tight tracking-tight md:text-5xl md:leading-[56px]">
              Junta-te a nós!
            </div>
            <div className="self-stretch text-center font-medium font-sans text-[#605A57] text-base leading-7">
              Tens dúvidas ou queres fazer parte do Coral?
              <br />
              Entra em contacto connosco. Estamos à tua espera!
            </div>
          </div>
          <div className="flex w-full max-w-[497px] flex-col items-center justify-center gap-12">
            <div className="flex items-center justify-start gap-4">
              <div className="relative flex h-10 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-[#0D4A85] px-12 py-[6px] shadow-[0px_0px_0px_2.5px_rgba(255,255,255,0.08)_inset] transition-colors hover:bg-[#0A3A6B]">
                <div className="flex flex-col justify-center font-medium font-sans text-[13px] text-white leading-5">
                  Entra em contacto
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { CTA };
