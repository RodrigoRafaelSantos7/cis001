"use client";

import { SendIcon } from "lucide-react";
import Link from "next/link";
import { contactPath } from "@/paths";

// Design tokens for consistent styling
const COLORS = {
  primary: "#0D4A85",
  textPrimary: "#49423D",
  textSecondary: "#605A57",
  border: "rgba(55,50,47,0.12)",
  shadow: "rgba(255,255,255,0.08)",
} as const;

const SPACING = {
  container: "px-6 py-12 md:px-24 md:py-12",
  content: "px-6 py-5 md:py-8",
  button: "px-6 py-2 sm:px-8 sm:py-[6px] md:px-10 lg:px-12",
} as const;

const CTA = () => {
  return (
    <section className="relative flex w-full flex-col items-center justify-center gap-2 overflow-hidden">
      {/* Background container with borders */}
      <div
        className={`relative z-10 flex items-center justify-center gap-6 self-stretch border-t border-b bg-[${COLORS.primary}]/20 ${SPACING.container}`}
        style={{ borderColor: COLORS.border }}
      >
        {/* Main content container */}
        <div
          className={`relative z-20 flex w-full max-w-[586px] flex-col items-center justify-start gap-6 overflow-hidden rounded-lg ${SPACING.content}`}
        >
          {/* Text content */}
          <div className="flex flex-col items-start justify-start gap-3 self-stretch">
            <h2
              className="flex flex-col justify-center self-stretch text-center font-sans font-semibold text-3xl leading-tight tracking-tight md:text-5xl md:leading-[56px]"
              style={{ color: COLORS.textPrimary }}
            >
              Junta-te a nós!
            </h2>

            <p
              className="self-stretch text-center font-medium font-sans text-base leading-7"
              style={{ color: COLORS.textSecondary }}
            >
              Tens dúvidas ou queres fazer parte do Coral?
              <br />
              Entra em contacto connosco. Estamos à tua espera!
            </p>
          </div>

          {/* Call-to-action button */}
          <div className="relative z-10 flex w-full max-w-[497px] flex-col items-center justify-center gap-6 lg:w-[497px] lg:gap-12">
            <div className="flex items-center justify-start gap-4 backdrop-blur-[8.25px]">
              <Link
                className={`relative flex h-10 items-center justify-center overflow-hidden rounded-full shadow-[0px_0px_0px_2.5px_${COLORS.shadow}_inset] sm:h-11 md:h-12 ${SPACING.button}`}
                href={contactPath()}
                style={{ backgroundColor: COLORS.primary }}
              >
                <span className="flex items-center justify-center font-medium font-sans text-sm text-white leading-5 sm:text-base md:text-[15px]">
                  Estamos à tua espera
                  <SendIcon className="ml-2 size-4" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { CTA };
