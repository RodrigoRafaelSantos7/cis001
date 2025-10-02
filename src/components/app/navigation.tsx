import Image from "next/image";
import Link from "next/link";
import {
  adminPath,
  archivePath,
  calendarPath,
  contactPath,
  homePath,
} from "@/paths";

const NAV_ITEMS = [
  { label: "Administração", href: adminPath(), hideOnMobile: true },
  { label: "Arquivo", href: archivePath(), hideOnMobile: false },
  { label: "Calendário", href: calendarPath(), hideOnMobile: false },
  { label: "Contactos", href: contactPath(), hideOnMobile: false },
] as const;

const NAV_LINK_CLASSES =
  "flex flex-col justify-center font-medium font-sans text-[rgba(49,45,43,0.80)] text-xs leading-[14px] md:text-[13px] hover:text-[rgba(49,45,43,1)] transition-colors";

const Navigation = () => (
  <div className="absolute top-0 left-0 z-20 flex h-12 w-full items-center justify-center px-6 sm:h-14 sm:px-8 md:h-16 md:px-12 lg:h-[84px] lg:px-0">
    <div className="absolute top-6 left-0 h-0 w-full border-[rgba(55,50,47,0.12)] border-t shadow-[0px_1px_0px_white] sm:top-7 md:top-8 lg:top-[42px]" />

    <div className="relative z-30 flex h-10 w-full max-w-[calc(100%-32px)] items-center justify-between overflow-hidden rounded-[50px] bg-[#F7F5F3] px-3 py-1.5 pr-2 shadow-[0px_0px_0px_2px_white] backdrop-blur-sm sm:h-11 sm:max-w-[calc(100%-48px)] sm:px-4 sm:py-2 sm:pr-3 md:h-12 md:max-w-[calc(100%-64px)] md:px-4 lg:w-[700px] lg:max-w-[700px]">
      <div className="flex w-full items-center justify-between">
        <Link className="flex items-center" href={homePath()}>
          <Image
            alt="Coral Infantil de Setúbal"
            className="h-10 w-14"
            height={100}
            src="/cis-icon.png"
            width={100}
          />
        </Link>
        <nav className="flex flex-row items-start justify-start gap-2 pl-3 sm:flex sm:gap-3 sm:pl-4 md:gap-4 md:pl-5 lg:gap-4 lg:pl-5">
          {NAV_ITEMS.map((item) => (
            <Link
              className={`flex items-center justify-start ${
                item.hideOnMobile ? "hidden md:flex" : ""
              }`}
              href={item.href}
              key={item.href}
            >
              <span className={NAV_LINK_CLASSES}>{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  </div>
);

export { Navigation };
