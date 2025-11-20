/** biome-ignore-all lint/style/noMagicNumbers: Calendar dates require numeric values */
"use client";

import { CalendarIcon, ClockIcon, MapPinIcon } from "lucide-react";
import { Footer } from "@/components/app/footer";
import { Navigation } from "@/components/app/navigation";
import { Badge } from "@/components/ui/badge-component";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Define status colors for different event types
const STATUS = {
  ENSAIO: {
    id: "ensaio",
    name: "Ensaio",
    color: "#0D4A85", // Blue - main brand color
  },
  CONCERTO: {
    id: "concerto",
    name: "Concerto",
    color: "#DC2626", // Red - important events
  },
};

type CalendarEvent = {
  id: string;
  name: string;
  date: Date;
  time: string;
  location: string;
  type: typeof STATUS.ENSAIO | typeof STATUS.CONCERTO;
};

// Sample events for the calendar
const CALENDAR_EVENTS: CalendarEvent[] = [
  // October 2025
  {
    id: "1",
    name: "Ensaio Semanal",
    date: new Date(2025, 9, 3),
    time: "18:30 - 20:00",
    location: "Sede do Coral Infantil de Setúbal",
    type: STATUS.ENSAIO,
  },
  {
    id: "2",
    name: "Ensaio Semanal",
    date: new Date(2025, 9, 10),
    time: "18:30 - 20:00",
    location: "Sede do Coral Infantil de Setúbal",
    type: STATUS.ENSAIO,
  },
  {
    id: "3",
    name: "Ensaio Semanal",
    date: new Date(2025, 9, 17),
    time: "18:30 - 20:00",
    location: "Sede do Coral Infantil de Setúbal",
    type: STATUS.ENSAIO,
  },
  {
    id: "4",
    name: "Concerto de Outono",
    date: new Date(2025, 9, 25),
    time: "19:00 - 21:00",
    location: "Fórum Municipal Luísa Todi",
    type: STATUS.CONCERTO,
  },
  {
    id: "5",
    name: "Ensaio Semanal",
    date: new Date(2025, 9, 31),
    time: "18:30 - 20:00",
    location: "Sede do Coral Infantil de Setúbal",
    type: STATUS.ENSAIO,
  },

  // November 2025
  {
    id: "6",
    name: "Ensaio Semanal",
    date: new Date(2025, 10, 7),
    time: "18:30 - 20:00",
    location: "Sede do Coral Infantil de Setúbal",
    type: STATUS.ENSAIO,
  },
  {
    id: "7",
    name: "Ensaio Semanal",
    date: new Date(2025, 10, 14),
    time: "18:30 - 20:00",
    location: "Sede do Coral Infantil de Setúbal",
    type: STATUS.ENSAIO,
  },
  {
    id: "8",
    name: "Ensaio Semanal",
    date: new Date(2025, 10, 21),
    time: "18:30 - 20:00",
    location: "Sede do Coral Infantil de Setúbal",
    type: STATUS.ENSAIO,
  },
  {
    id: "9",
    name: "Concerto de Aniversário",
    date: new Date(2025, 10, 23),
    time: "19:00 - 21:00",
    location: "Fórum Municipal Luísa Todi",
    type: STATUS.CONCERTO,
  },
  {
    id: "10",
    name: "Ensaio Semanal",
    date: new Date(2025, 10, 28),
    time: "18:30 - 20:00",
    location: "Sede do Coral Infantil de Setúbal",
    type: STATUS.ENSAIO,
  },

  // December 2025
  {
    id: "11",
    name: "Ensaio Semanal",
    date: new Date(2025, 11, 5),
    time: "18:30 - 20:00",
    location: "Sede do Coral Infantil de Setúbal",
    type: STATUS.ENSAIO,
  },
  {
    id: "12",
    name: "Ensaio Semanal",
    date: new Date(2025, 11, 12),
    time: "18:30 - 20:00",
    location: "Sede do Coral Infantil de Setúbal",
    type: STATUS.ENSAIO,
  },
  {
    id: "13",
    name: "Ensaio de Natal",
    date: new Date(2025, 11, 19),
    time: "18:30 - 20:00",
    location: "Sede do Coral Infantil de Setúbal",
    type: STATUS.ENSAIO,
  },
  {
    id: "14",
    name: "Concerto de Natal",
    date: new Date(2025, 11, 20),
    time: "19:00 - 21:00",
    location: "Fórum Municipal Luísa Todi",
    type: STATUS.CONCERTO,
  },

  // January 2026
  {
    id: "15",
    name: "Ensaio Semanal",
    date: new Date(2026, 0, 9),
    time: "18:30 - 20:00",
    location: "Sede do Coral Infantil de Setúbal",
    type: STATUS.ENSAIO,
  },
  {
    id: "16",
    name: "Concerto de Ano Novo",
    date: new Date(2026, 0, 11),
    time: "19:00 - 21:00",
    location: "Fórum Municipal Luísa Todi",
    type: STATUS.CONCERTO,
  },
  {
    id: "17",
    name: "Ensaio Semanal",
    date: new Date(2026, 0, 16),
    time: "18:30 - 20:00",
    location: "Sede do Coral Infantil de Setúbal",
    type: STATUS.ENSAIO,
  },
  {
    id: "18",
    name: "Ensaio Semanal",
    date: new Date(2026, 0, 23),
    time: "18:30 - 20:00",
    location: "Sede do Coral Infantil de Setúbal",
    type: STATUS.ENSAIO,
  },
  {
    id: "19",
    name: "Ensaio Semanal",
    date: new Date(2026, 0, 30),
    time: "18:30 - 20:00",
    location: "Sede do Coral Infantil de Setúbal",
    type: STATUS.ENSAIO,
  },

  // February 2026
  {
    id: "20",
    name: "Ensaio Semanal",
    date: new Date(2026, 1, 6),
    time: "18:30 - 20:00",
    location: "Sede do Coral Infantil de Setúbal",
    type: STATUS.ENSAIO,
  },
  {
    id: "21",
    name: "Ensaio Semanal",
    date: new Date(2026, 1, 13),
    time: "18:30 - 20:00",
    location: "Sede do Coral Infantil de Setúbal",
    type: STATUS.ENSAIO,
  },
  {
    id: "22",
    name: "Concerto de São Valentim",
    date: new Date(2026, 1, 14),
    time: "19:00 - 21:00",
    location: "Fórum Municipal Luísa Todi",
    type: STATUS.CONCERTO,
  },
  {
    id: "23",
    name: "Ensaio Semanal",
    date: new Date(2026, 1, 20),
    time: "18:30 - 20:00",
    location: "Sede do Coral Infantil de Setúbal",
    type: STATUS.ENSAIO,
  },
  {
    id: "24",
    name: "Ensaio Semanal",
    date: new Date(2026, 1, 27),
    time: "18:30 - 20:00",
    location: "Sede do Coral Infantil de Setúbal",
    type: STATUS.ENSAIO,
  },

  // March 2026
  {
    id: "25",
    name: "Ensaio Semanal",
    date: new Date(2026, 2, 6),
    time: "18:30 - 20:00",
    location: "Sede do Coral Infantil de Setúbal",
    type: STATUS.ENSAIO,
  },
  {
    id: "26",
    name: "Ensaio Semanal",
    date: new Date(2026, 2, 13),
    time: "18:30 - 20:00",
    location: "Sede do Coral Infantil de Setúbal",
    type: STATUS.ENSAIO,
  },
  {
    id: "27",
    name: "Concerto da Primavera",
    date: new Date(2026, 2, 21),
    time: "19:00 - 21:00",
    location: "Fórum Municipal Luísa Todi",
    type: STATUS.CONCERTO,
  },
  {
    id: "28",
    name: "Ensaio Semanal",
    date: new Date(2026, 2, 27),
    time: "18:30 - 20:00",
    location: "Sede do Coral Infantil de Setúbal",
    type: STATUS.ENSAIO,
  },
];

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

            {/* Events Table Section */}
            <div className="flex w-full flex-col items-start justify-start gap-6 border-[rgba(55,50,47,0.12)] border-b px-4 py-12 sm:px-6 md:px-12">
              <Table>
                <TableHeader className="bg-[#F7F5F3]">
                  <TableRow className="hover:bg-[#F7F5F3]">
                    <TableHead className="font-sans font-semibold text-[#49423D] text-sm">
                      Data
                    </TableHead>
                    <TableHead className="font-sans font-semibold text-[#49423D] text-sm">
                      Evento
                    </TableHead>
                    <TableHead className="hidden font-sans font-semibold text-[#49423D] text-sm md:table-cell">
                      Hora
                    </TableHead>
                    <TableHead className="hidden font-sans font-semibold text-[#49423D] text-sm lg:table-cell">
                      Local
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {CALENDAR_EVENTS.map((event) => (
                    <TableRow key={event.id}>
                      {/* Date */}
                      <TableCell className="py-4">
                        <div className="flex flex-col gap-1">
                          <div className="font-medium font-sans text-[#49423D] text-sm">
                            {event.date.toLocaleDateString("pt-PT", {
                              day: "numeric",
                              month: "short",
                            })}
                          </div>
                          <div className="font-normal font-sans text-[#605A57] text-xs">
                            {event.date.toLocaleDateString("pt-PT", {
                              weekday: "short",
                            })}
                          </div>
                        </div>
                      </TableCell>

                      {/* Event Name and Type */}
                      <TableCell className="py-4">
                        <div className="flex flex-col gap-2">
                          <div className="font-medium font-sans text-[#49423D] text-sm">
                            {event.name}
                          </div>
                          <div className="flex items-center gap-2">
                            <div
                              className="h-2 w-2 shrink-0 rounded-full"
                              style={{ backgroundColor: event.type.color }}
                            />
                            <span className="font-normal font-sans text-[#605A57] text-xs">
                              {event.type.name}
                            </span>
                          </div>
                          {/* Mobile: Show time and location */}
                          <div className="flex flex-col gap-1 text-[#605A57] text-xs md:hidden">
                            <div className="flex items-center gap-1.5">
                              <ClockIcon className="size-3" />
                              <span className="font-normal font-sans">
                                {event.time}
                              </span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <MapPinIcon className="size-3" />
                              <span className="font-normal font-sans">
                                {event.location}
                              </span>
                            </div>
                          </div>
                        </div>
                      </TableCell>

                      {/* Time - Hidden on mobile */}
                      <TableCell className="hidden py-4 md:table-cell">
                        <div className="flex items-center gap-1.5">
                          <ClockIcon className="size-4 text-[#605A57]" />
                          <span className="font-normal font-sans text-[#605A57] text-sm">
                            {event.time}
                          </span>
                        </div>
                      </TableCell>

                      {/* Location - Hidden on mobile and tablet */}
                      <TableCell className="hidden py-4 lg:table-cell">
                        <div className="flex items-center gap-1.5">
                          <MapPinIcon className="size-4 text-[#605A57]" />
                          <span className="font-normal font-sans text-[#605A57] text-sm">
                            {event.location}
                          </span>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  </div>
);

export default Page;
