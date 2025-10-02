const HORIZONTAL_OFFSET = 300;
const VERTICAL_OFFSET = 120;

function Footer() {
  return (
    <div className="flex w-full flex-col items-start justify-start pt-10">
      {/* Main Footer Content */}
      <div className="flex h-auto flex-col items-stretch justify-between self-stretch pt-0 pr-0 pb-8 md:flex-row">
        <div className="flex h-auto flex-col items-start justify-start gap-8 p-4 md:p-8">
          {/* Brand Section */}
          <div className="flex items-center justify-start gap-3 self-stretch">
            <div className="text-center font-charm text-[#0D4A85] text-xl leading-4">
              Coral Infantil de Setúbal
            </div>
          </div>
          <div className="font-medium font-sans text-[rgba(73,66,61,0.90)] text-sm leading-[18px]">
            Rua Álvaro Perdigão, Nº 4 A 2900-163 Setúbal
          </div>

          <div className="flex items-start justify-start gap-4">
            {/* Instagram Icon */}
            <div className="relative h-6 w-6 overflow-hidden">
              <div className="absolute top-0 left-0 flex h-6 w-6 items-center justify-center">
                <svg
                  height="16"
                  preserveAspectRatio="xMidYMid"
                  viewBox="0 0 256 256"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Instagram</title>
                  <path
                    d="M128 23.064c34.177 0 38.225.13 51.722.745 12.48.57 19.258 2.655 23.769 4.408 5.974 2.322 10.238 5.096 14.717 9.575 4.48 4.479 7.253 8.743 9.575 14.717 1.753 4.511 3.838 11.289 4.408 23.768.615 13.498.745 17.546.745 51.723 0 34.178-.13 38.226-.745 51.723-.57 12.48-2.655 19.257-4.408 23.768-2.322 5.974-5.096 10.239-9.575 14.718-4.479 4.479-8.743 7.253-14.717 9.574-4.511 1.753-11.289 3.839-23.769 4.408-13.495.616-17.543.746-51.722.746-34.18 0-38.228-.13-51.723-.746-12.48-.57-19.257-2.655-23.768-4.408-5.974-2.321-10.239-5.095-14.718-9.574-4.479-4.48-7.253-8.744-9.574-14.718-1.753-4.51-3.839-11.288-4.408-23.768-.616-13.497-.746-17.545-.746-51.723 0-34.177.13-38.225.746-51.722.57-12.48 2.655-19.258 4.408-23.769 2.321-5.974 5.095-10.238 9.574-14.717 4.48-4.48 8.744-7.253 14.718-9.575 4.51-1.753 11.288-3.838 23.768-4.408 13.497-.615 17.545-.745 51.723-.745M128 0C93.237 0 88.878.147 75.226.77c-13.625.622-22.93 2.786-31.071 5.95-8.418 3.271-15.556 7.648-22.672 14.764C14.367 28.6 9.991 35.738 6.72 44.155 3.555 52.297 1.392 61.602.77 75.226.147 88.878 0 93.237 0 128c0 34.763.147 39.122.77 52.774.622 13.625 2.785 22.93 5.95 31.071 3.27 8.417 7.647 15.556 14.763 22.672 7.116 7.116 14.254 11.492 22.672 14.763 8.142 3.165 17.446 5.328 31.07 5.95 13.653.623 18.012.77 52.775.77s39.122-.147 52.774-.77c13.624-.622 22.929-2.785 31.07-5.95 8.418-3.27 15.556-7.647 22.672-14.763 7.116-7.116 11.493-14.254 14.764-22.672 3.164-8.142 5.328-17.446 5.95-31.07.623-13.653.77-18.012.77-52.775s-.147-39.122-.77-52.774c-.622-13.624-2.786-22.929-5.95-31.07-3.271-8.418-7.648-15.556-14.764-22.672C227.4 14.368 220.262 9.99 211.845 6.72c-8.142-3.164-17.447-5.328-31.071-5.95C167.122.147 162.763 0 128 0Zm0 62.27C91.698 62.27 62.27 91.7 62.27 128c0 36.302 29.428 65.73 65.73 65.73 36.301 0 65.73-29.428 65.73-65.73 0-36.301-29.429-65.73-65.73-65.73Zm0 108.397c-23.564 0-42.667-19.103-42.667-42.667S104.436 85.333 128 85.333s42.667 19.103 42.667 42.667-19.103 42.667-42.667 42.667Zm83.686-110.994c0 8.484-6.876 15.36-15.36 15.36-8.483 0-15.36-6.876-15.36-15.36 0-8.483 6.877-15.36 15.36-15.36 8.484 0 15.36 6.877 15.36 15.36Z"
                    fill="#0A0A08"
                  />
                </svg>
              </div>
            </div>

            {/* Facebook Icon */}
            <div className="relative h-6 w-6 overflow-hidden">
              <div className="absolute top-0 left-0 flex h-6 w-6 items-center justify-center">
                <svg
                  fill="url(#facebook-a)"
                  height="16"
                  viewBox="0 0 36 36"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Facebook</title>
                  <defs>
                    <linearGradient
                      id="facebook-a"
                      x1="50%"
                      x2="50%"
                      y1="97.078%"
                      y2="0%"
                    >
                      <stop offset="0%" stop-color="#0062E0" />
                      <stop offset="100%" stop-color="#19AFFF" />
                    </linearGradient>
                  </defs>
                  <path d="M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z" />
                  <path
                    d="m25 23 .8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z"
                    fill="#FFF"
                  />
                </svg>
              </div>
            </div>

            {/* Email Icon */}
            <div className="relative h-6 w-6 overflow-hidden">
              <div className="absolute top-0 left-0 flex h-6 w-6 items-center justify-center">
                <svg
                  height="16"
                  viewBox="0 49.4 512 399.42"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Email</title>
                  <g fill="none" fill-rule="evenodd">
                    <g fill-rule="nonzero">
                      <path
                        d="M34.91 448.818h81.454V251L0 163.727V413.91c0 19.287 15.622 34.91 34.91 34.91z"
                        fill="#4285f4"
                      />
                      <path
                        d="M395.636 448.818h81.455c19.287 0 34.909-15.622 34.909-34.909V163.727L395.636 251z"
                        fill="#34a853"
                      />
                      <path
                        d="M395.636 99.727V251L512 163.727v-46.545c0-43.142-49.25-67.782-83.782-41.891z"
                        fill="#fbbc04"
                      />
                    </g>
                    <path
                      d="M116.364 251V99.727L256 204.455 395.636 99.727V251L256 355.727z"
                      fill="#ea4335"
                    />
                    <path
                      d="M0 117.182v46.545L116.364 251V99.727L83.782 75.291C49.25 49.4 0 74.04 0 117.18z"
                      fill="#c5221f"
                      fill-rule="nonzero"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-wrap items-start justify-start gap-6 self-stretch p-4 sm:flex-row sm:justify-between md:gap-8 md:p-8">
          <div className="flex min-w-[120px] flex-1 flex-col items-start justify-start gap-3">
            <div className="self-stretch font-medium font-sans text-[rgba(73,66,61,0.50)] text-sm leading-5">
              Navegação
            </div>
            <div className="flex flex-col items-start justify-end gap-2">
              <div className="cursor-pointer font-normal font-sans text-[#49423D] text-sm leading-5 transition-colors hover:text-[#37322F]">
                Arquivo
              </div>
              <div className="cursor-pointer font-normal font-sans text-[#49423D] text-sm leading-5 transition-colors hover:text-[#37322F]">
                História
              </div>
              <div className="cursor-pointer font-normal font-sans text-[#49423D] text-sm leading-5 transition-colors hover:text-[#37322F]">
                Calendário
              </div>
              <div className="cursor-pointer font-normal font-sans text-[#49423D] text-sm leading-5 transition-colors hover:text-[#37322F]">
                Contactos
              </div>
            </div>
          </div>

          <div className="flex min-w-[120px] flex-1 flex-col items-start justify-start gap-3">
            <div className="font-medium font-sans text-[rgba(73,66,61,0.50)] text-sm leading-5">
              Recursos
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="cursor-pointer self-stretch font-normal font-sans text-[#49423D] text-sm leading-5 transition-colors hover:text-[#37322F]">
                Política de Privacidade
              </div>
              <div className="cursor-pointer self-stretch font-normal font-sans text-[#49423D] text-sm leading-5 transition-colors hover:text-[#37322F]">
                Termos de Utilização
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-12 self-stretch overflow-hidden border-[rgba(55,50,47,0.12)] border-t border-b">
        <div className="absolute inset-0 h-full w-full overflow-hidden">
          <div className="relative h-full w-full">
            {Array.from({ length: 400 }).map((_, i) => (
              <div
                className="absolute h-16 w-[300px] border border-[rgba(3,7,18,0.08)]"
                // biome-ignore lint/suspicious/noArrayIndexKey: reason
                key={i}
                style={{
                  left: `${i * HORIZONTAL_OFFSET - VERTICAL_OFFSET}px`,
                  top: "-120px",
                  transform: "rotate(-45deg)",
                  transformOrigin: "top left",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export { Footer };
