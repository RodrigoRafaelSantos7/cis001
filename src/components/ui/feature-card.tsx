"use client";

import Image from "next/image";

type FeatureCardProps = {
  title: string;
  description: string;
  isActive: boolean;
  progress: number;
  onClick: () => void;
};

/**
 * FeatureCard component definition inline to fix import error
 * @example <FeatureCard title="Title" description="Description" isActive={true} progress={50} onClick={() => {}} />
 * @param title - The title of the feature card
 * @param description - The description of the feature card
 * @param isActive - Whether the feature card is active
 * @param progress - The progress of the feature card
 * @param onClick - The function to call when the feature card is clicked
 */
const FeatureCard = ({
  title,
  description,
  isActive,
  progress,
  onClick,
}: FeatureCardProps) => (
  <button
    className={`relative flex w-full cursor-pointer flex-col items-start justify-start gap-2 self-stretch overflow-hidden border-b px-6 py-5 last:border-b-0 md:flex-1 md:border-b-0 ${
      isActive
        ? "bg-white shadow-[0px_0px_0px_0.75px_#E0DEDB_inset]"
        : "border-[#E0DEDB]/80 border-r-0 border-l-0 md:border"
    }`}
    onClick={onClick}
    type="button"
  >
    {isActive && (
      <div className="absolute top-0 left-0 h-0.5 w-full bg-[rgba(50,45,43,0.08)]">
        <div
          className="h-full bg-[#322D2B] transition-all duration-100 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>
    )}

    <div className="flex h-full flex-col items-center justify-center self-stretch font-semibold text-sm leading-6 md:text-sm md:leading-6">
      {title === "Coral Infantil" ? (
        <Image
          alt="Coral Infantil"
          height={150}
          src="/cis-logo.png"
          width={150}
        />
      ) : (
        <Image
          alt="Tuti Encantus"
          height={150}
          src="/tutti-encantus-logo.png"
          width={200}
        />
      )}
    </div>
    <div className="self-stretch font-normal font-sans text-[#605A57] text-[13px] leading-[22px] md:text-[13px] md:leading-[22px]">
      {description}
    </div>
  </button>
);

export { FeatureCard };
