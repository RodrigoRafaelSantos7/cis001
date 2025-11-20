/** biome-ignore-all lint/style/noMagicNumbers: Calendar dates require numeric values */
"use client";

import { CalendarIcon, ClockIcon, MapPinIcon } from "lucide-react";
import Image from "next/image";
import { Footer } from "@/components/app/footer";
import { Navigation } from "@/components/app/navigation";
import { Badge } from "@/components/ui/badge-component";

type FeaturedEvent = {
  id: string;
  name: string;
  date: Date;
  time: string;
  location: string;
  price: string;
  imageAlt: string;
  imageSrc: string;
};

const FEATURED_EVENTS: FeaturedEvent[] = [
  {
    id: "anniversary",
    name: "46º Aniversário do Coral infantil de Setúbal",
    date: new Date(2025, 10, 29),
    time: "21h00",
    location: "Fórum Municipal Luísa Todi",
    price: "Bilhetes: 7,50€",
    imageAlt: "Coral infantil a atuar em palco",
    imageSrc: "/cartaz-46-aniv.jpg",
  },
];

const groupEventsByMonth = () => {
  const buckets = new Map<number, FeaturedEvent[]>();
  for (const event of FEATURED_EVENTS) {
    const key = event.date.getFullYear() * 100 + event.date.getMonth();
    const existing = buckets.get(key);
    if (existing) {
      existing.push(event);
      continue;
    }
    buckets.set(key, [event]);
  }
  return Array.from(buckets.entries())
    .sort((a, b) => a[0] - b[0])
    .map(([key, events]) => {
      const year = Math.floor(key / 100);
      const monthIndex = key - year * 100;
      const label = new Date(year, monthIndex, 1).toLocaleDateString("pt-PT", {
        month: "long",
        year: "numeric",
      });
      return { label, events };
    });
};

const formatDateBadge = (date: Date) => ({
  day: date.toLocaleDateString("pt-PT", { day: "2-digit" }),
  month: date.toLocaleDateString("pt-PT", { month: "short" }).toUpperCase(),
  year: date.getFullYear(),
});

const EventCard = ({ event }: { event: FeaturedEvent }) => {
  const badge = formatDateBadge(event.date);
  return (
    <div className="relative flex w-full flex-col gap-6 rounded-[32px] border border-[rgba(55,50,47,0.12)] bg-white p-6 shadow-[0px_24px_70px_rgba(10,10,10,0.05)] sm:flex-row sm:p-10">
      <div className="relative w-full overflow-hidden rounded-3xl bg-[#E1ECF7] sm:w-[320px]">
        <Image
          alt={event.imageAlt}
          className="h-full w-full object-fit"
          height={480}
          priority
          src={event.imageSrc}
          width={640}
        />
        <div className="absolute top-5 left-5 flex flex-row items-center gap-3 rounded-2xl bg-white/95 px-3 py-4 text-[#0D4A85] shadow-lg">
          <div className="flex flex-col items-center">
            <span className="font-semibold text-2xl">{badge.day}</span>
            <span className="font-semibold text-xs tracking-[0.2em]">
              {badge.month}
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-col gap-3">
            <h3 className="font-sans font-semibold text-2xl text-[#241C17] sm:text-[28px]">
              {event.name}
            </h3>
          </div>
          <span className="inline-flex shrink-0 rounded-full bg-[#DDEBFF] px-5 py-2 font-sans font-semibold text-[#0D4A85] text-sm">
            {event.price}
          </span>
        </div>
        <div className="grid gap-4 text-[#4E4743] text-sm sm:grid-cols-2">
          <div className="flex items-center gap-2">
            <CalendarIcon className="size-4 text-[#3B6AA0]" />
            <span className="font-medium">
              {event.date.toLocaleDateString("pt-PT", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <ClockIcon className="size-4 text-[#3B6AA0]" />
            <span className="font-medium">{event.time}</span>
          </div>
          <div className="flex items-center gap-2 sm:col-span-2">
            <MapPinIcon className="size-4 text-[#3B6AA0]" />
            <span className="font-medium">{event.location}</span>
          </div>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="h-[1px] w-full bg-[rgba(55,50,47,0.1)] sm:hidden" />
          <button
            className="inline-flex items-center justify-center rounded-full border border-transparent bg-[#0D4A85] px-6 py-3 font-sans font-semibold text-sm text-white uppercase tracking-[0.2em] transition hover:bg-[#09315F]"
            type="button"
          >
            Saber mais
          </button>
        </div>
      </div>
    </div>
  );
};

const Page = () => (
  <div className="relative flex min-h-screen w-full flex-col items-center justify-start overflow-x-hidden bg-[#F7F5F3]">
    <div className="relative flex w-full flex-col items-center justify-start">
      {/* Main container with proper margins */}
      <div className="relative flex min-h-screen w-full max-w-none flex-col items-start justify-start px-4 sm:px-6 md:px-8 lg:w-[1060px] lg:max-w-[1060px] lg:px-0">
        {/* Left vertical line */}
        <div className="absolute top-0 left-4 z-0 h-full w-[1px] bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] sm:left-6 md:left-8 lg:left-0" />

        {/* Right vertical line */}
        <div className="absolute top-0 right-4 z-0 h-full w-[1px] bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] sm:right-6 md:right-8 lg:right-0" />

        <div className="relative z-10 flex flex-col items-center justify-center gap-4 self-stretch overflow-hidden pt-[9px] sm:gap-6 md:gap-8 lg:gap-[66px]">
          <Navigation />

          <div className="flex w-full flex-col items-center justify-start px-2 pt-16 pr-0 pb-8 pl-0 sm:px-4 sm:pt-20 sm:pr-0 sm:pb-12 sm:pl-0 md:px-8 md:pt-24 md:pb-16 lg:px-0 lg:pt-[125px]">
            {/* Header Section */}
            <div className="flex w-full flex-col items-center justify-center gap-6 border-[rgba(55,50,47,0.12)] border-b px-4 py-12 sm:px-6 sm:py-16 md:px-12 md:py-20">
              <div className="flex w-full max-w-[800px] flex-col items-center justify-start gap-4">
                <Badge
                  icon={<CalendarIcon className="size-3.5" />}
                  text="Calendário"
                />
                <div className="flex w-full flex-col justify-center text-center font-sans font-semibold text-3xl text-[#49423D] leading-tight tracking-tight sm:text-4xl md:text-5xl md:leading-[60px]">
                  Calendário de Atividades
                </div>

                <div className="mt-4 self-stretch text-center font-normal font-sans text-[#605A57] text-sm leading-6 sm:text-base sm:leading-7">
                  Consulte os próximos concertos e eventos
                  <br className="hidden sm:block" />
                  do Coral Infantil de Setúbal.
                </div>
              </div>
            </div>

            {/* Featured events list */}
            <div className="flex w-full flex-col gap-14 border-[rgba(55,50,47,0.12)] border-b px-4 py-12 sm:px-6 md:px-12">
              {groupEventsByMonth().map(({ label, events }) => (
                <section className="flex flex-col gap-8" key={label}>
                  <div className="flex w-full items-center gap-6 font-semibold text-[#7A94B8] text-xs uppercase tracking-[0.4em]">
                    <span className="h-[1px] flex-1 bg-[rgba(55,50,47,0.12)]" />
                    <span>{label}</span>
                    <span className="h-[1px] flex-1 bg-[rgba(55,50,47,0.12)]" />
                  </div>
                  <div className="flex flex-col gap-8">
                    {events.map((event) => (
                      <EventCard event={event} key={event.id} />
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  </div>
);

export default Page;
