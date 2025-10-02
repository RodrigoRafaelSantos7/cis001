"use client";

import { DownloadIcon, FileTextIcon } from "lucide-react";
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

type AdminDocument = {
  title: string;
  description: string;
  url: string;
};

const ADMIN_DOCUMENTS: AdminDocument[] = [
  {
    title: "Corpos Sociais 2024-2026",
    description: "Composição dos órgãos sociais para o biénio 2024-2026",
    url: "https://cdn.coralinfantilsetubal.com/documents/Corpos%20sociais%202024-2026.pdf",
  },
  {
    title: "Relatório de Atividades 2023",
    description: "Relatório de atividades do Coral Infantil de Setúbal 2023",
    url: "https://cdn.coralinfantilsetubal.com/documents/Relato%CC%81rios%20e%20Contas/Relato%CC%81rio%20e%20Contas%202023.pdf",
  },
  {
    title: "Relatório de Atividades 2022",
    description: "Relatório de atividades do Coral Infantil de Setúbal 2022",
    url: "https://cdn.coralinfantilsetubal.com/documents/Relato%CC%81rios%20e%20Contas/Relato%CC%81rio%20e%20Contas%202022.pdf",
  },
  {
    title: "Relatório de Atividades 2021",
    description: "Relatório de atividades do Coral Infantil de Setúbal 2021",
    url: "https://cdn.coralinfantilsetubal.com/documents/Relato%CC%81rios%20e%20Contas/Relato%CC%81rio%20e%20Contas%202021.pdf",
  },
  {
    title: "Relatório de Atividades 2020",
    description: "Relatório de atividades do Coral Infantil de Setúbal 2020",
    url: "https://cdn.coralinfantilsetubal.com/documents/Relato%CC%81rios%20e%20Contas/Relato%CC%81rio%20e%20Contas%202020.pdf",
  },
  {
    title: "Relatório de Atividades 2019",
    description: "Relatório de atividades do Coral Infantil de Setúbal 2019",
    url: "https://cdn.coralinfantilsetubal.com/documents/Relato%CC%81rios%20e%20Contas/Relato%CC%81rio%20e%20Contas%202019.pdf",
  },
  {
    title: "Estatutos 2010",
    description: "Estatutos do Coral Infantil de Setúbal 2010",
    url: "https://cdn.coralinfantilsetubal.com/documents/Estatutos%202010.pdf",
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
                  icon={<FileTextIcon className="size-3.5" />}
                  text="Administração"
                />
                <div className="flex w-full flex-col justify-center text-center font-sans font-semibold text-3xl text-[#49423D] leading-tight tracking-tight sm:text-4xl md:text-5xl md:leading-[60px]">
                  Documentos Administrativos
                </div>

                <div className="mt-4 self-stretch text-center font-normal font-sans text-[#605A57] text-sm leading-6 sm:text-base sm:leading-7">
                  Aceda aos documentos oficiais e informações administrativas
                  <br className="hidden sm:block" />
                  do Coral Infantil de Setúbal.
                </div>
              </div>
            </div>

            {/* Documents Table Section */}
            <div className="flex w-full flex-col items-start justify-start gap-6 border-[rgba(55,50,47,0.12)] border-b px-4 py-12 sm:px-6 md:px-12">
              <Table>
                <TableHeader className="bg-[#F7F5F3]">
                  <TableRow className="hover:bg-[#F7F5F3]">
                    <TableHead className="font-sans font-semibold text-[#49423D] text-sm">
                      Documento
                    </TableHead>
                    <TableHead className="hidden font-sans font-semibold text-[#49423D] text-sm md:table-cell">
                      Tipo
                    </TableHead>
                    <TableHead className="text-right font-sans font-semibold text-[#49423D] text-sm">
                      Ação
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {ADMIN_DOCUMENTS.map((doc, idx) => (
                    <TableRow key={`${doc.title}-${idx}`}>
                      {/* Document Info */}
                      <TableCell className="py-4">
                        <div className="flex flex-col gap-1">
                          <div className="font-medium font-sans text-[#49423D] text-sm leading-6">
                            {doc.title}
                          </div>
                          <div className="font-normal font-sans text-[#605A57] text-xs leading-5 sm:text-sm">
                            {doc.description}
                          </div>
                        </div>
                      </TableCell>

                      {/* File Type - Hidden on mobile */}
                      <TableCell className="hidden py-4 font-normal font-sans text-[#605A57] text-sm md:table-cell">
                        PDF
                      </TableCell>

                      {/* Download Button */}
                      <TableCell className="py-4 text-right">
                        <a
                          aria-label={`Descarregar ${doc.title}`}
                          className="inline-flex items-center justify-center gap-2 rounded-lg"
                          download
                          href={doc.url}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <DownloadIcon className="size-4" />
                        </a>
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
