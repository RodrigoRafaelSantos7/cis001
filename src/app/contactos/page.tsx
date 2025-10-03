"use client";

import { useForm } from "@tanstack/react-form";
import { useAction, useMutation } from "convex/react";
import { Loader2, MailIcon, SendIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { z } from "zod";
import { Footer } from "@/components/app/footer";
import { Navigation } from "@/components/app/navigation";
import { Badge } from "@/components/ui/badge-component";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { homePath } from "@/paths";
import { api } from "../../../convex/_generated/api";

const contactSchema = z.object({
  name: z
    .string()
    .min(1, "Nome é obrigatório")
    .min(2, "Nome deve ter pelo menos 3 caracteres"),
  email: z.email("Email inválido").min(1, "Email é obrigatório"),
  message: z
    .string()
    .min(1, "Mensagem é obrigatória")
    .min(10, "Mensagem deve ter pelo menos 10 caracteres"),
});

const Page = () => {
  const insert = useMutation(api.formSubmission.insert);
  const sendEmail = useAction(api.sendEmail.sendFormSubmissionEmail);
  const router = useRouter();
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    onSubmit: ({ value }) => {
      toast.promise(
        Promise.all([
          insert({
            name: value.name,
            email: value.email,
            message: value.message,
          }),
          sendEmail({
            name: value.name,
            email: value.email,
            message: value.message,
          }),
        ]),
        {
          loading: "A sua mensagem está a ser enviada...",
          success: "Mensagem enviada com sucesso, em breve responderemos.",
          error: "Erro ao enviar mensagem",
        }
      );

      router.push(homePath());
    },
    validators: {
      onMount: contactSchema,
      onChange: contactSchema,
      onSubmit: contactSchema,
    },
  });

  return (
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
                    icon={<MailIcon className="size-3.5" />}
                    text="Contactos"
                  />
                  <div className="flex w-full flex-col justify-center text-center font-sans font-semibold text-3xl text-[#49423D] leading-tight tracking-tight sm:text-4xl md:text-5xl md:leading-[60px]">
                    Entre em Contacto
                  </div>

                  <div className="mt-4 self-stretch text-center font-normal font-sans text-[#605A57] text-sm leading-6 sm:text-base sm:leading-7">
                    Tem alguma questão ou sugestão? Estamos aqui para ajudar.
                    <br className="hidden sm:block" />
                    Envie-nos uma mensagem e responderemos o mais brevemente
                    possível.
                  </div>
                </div>
              </div>

              {/* Contact Form Section */}
              <div className="flex w-full flex-col items-start justify-start gap-6 border-[rgba(55,50,47,0.12)] border-b px-4 py-12 sm:px-6 md:px-12">
                <form
                  className="mx-auto w-full max-w-2xl space-y-6"
                  onSubmit={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    form.handleSubmit();
                  }}
                >
                  <form.Field name="name">
                    {(field) => (
                      <div className="flex w-full flex-col gap-2">
                        <Label
                          className="mb-2 block text-[#49423D]"
                          htmlFor="name"
                        >
                          Nome
                        </Label>
                        <Input
                          onChange={(e) => field.handleChange(e.target.value)}
                          placeholder="O seu nome completo"
                          value={field.state.value}
                        />
                      </div>
                    )}
                  </form.Field>

                  {/* Email Field */}
                  <form.Field name="email">
                    {(field) => (
                      <div className="flex w-full flex-col gap-2">
                        <Label
                          className="mb-2 block text-[#49423D]"
                          htmlFor="email"
                        >
                          Email
                        </Label>
                        <Input
                          onChange={(e) => field.handleChange(e.target.value)}
                          placeholder="exemplo@exemplo.com"
                          value={field.state.value}
                        />
                      </div>
                    )}
                  </form.Field>

                  {/* Message Field */}
                  <form.Field name="message">
                    {(field) => (
                      <div className="flex w-full flex-col gap-2">
                        <Label
                          className="mb-2 block text-[#49423D]"
                          htmlFor="message"
                        >
                          Mensagem
                        </Label>
                        <Textarea
                          onChange={(e) => field.handleChange(e.target.value)}
                          placeholder="A sua mensagem"
                          value={field.state.value}
                        />
                      </div>
                    )}
                  </form.Field>

                  {/* Submit Button */}
                  <form.Subscribe
                    selector={(state) => ({
                      isSubmitting: state.isSubmitting,
                      canSubmit: state.canSubmit,
                    })}
                  >
                    {({ isSubmitting, canSubmit }) => (
                      <Button
                        className="w-full bg-[#0D4A85] hover:bg-[#0D4A85]/80"
                        disabled={!canSubmit || isSubmitting}
                        type="submit"
                      >
                        <span className="text-[#FFFFFF]">Enviar</span>
                        {isSubmitting ? (
                          <Loader2
                            className="animate-spin text-[#FFFFFF]"
                            size={10}
                          />
                        ) : (
                          <SendIcon className="text-[#FFFFFF]" size={10} />
                        )}
                      </Button>
                    )}
                  </form.Subscribe>
                </form>
              </div>
            </div>

            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
