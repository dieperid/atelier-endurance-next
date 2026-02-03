"use client";

import Image from "next/image";
import { Button, Link } from "@heroui/react";

export default function HomeAboutSection() {
  return (
    <section className="relative overflow-hidden py-10 sm:py-14 md:py-16">
      <div className="container relative mx-auto px-6 sm:px-8 md:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="relative min-w-0 lg:order-last home-about-fade home-about-fade-delay">
              <div className="absolute -inset-3 rounded-[28px] bg-linear-to-br from-sky-400/40 via-blue-500/20 to-transparent blur-2xl" />
              <div className="relative rounded-[28px] bg-linear-to-br from-sky-400/80 via-blue-500/50 to-indigo-500/30 p-0.5">
                <div className="relative aspect-4/3 lg:aspect-square w-full overflow-hidden rounded-[26px] border border-sky-100/80">
                  <Image
                    src="/assets/img/AnthonyDavid.jpg"
                    alt="Anthony et David"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 520px"
                  />
                </div>
              </div>
            </div>

            <div className="relative min-w-0 home-about-fade">
              <div className="absolute -inset-1 rounded-3xl border border-sky-200/60 opacity-80" />
              <div className="relative space-y-6 rounded-3xl border border-sky-200/60 p-4 backdrop-blur-xl sm:p-6">
                <h2 className="text-3xl font-semibold sm:text-4xl md:text-5xl xl:text-6xl">
                  <span>Qui sommes</span>{" "}
                  <span className="bg-linear-to-r from-primary via-blue-500 to-blue-400 bg-clip-text text-transparent">
                    nous ?
                  </span>
                </h2>

                <div className="space-y-4 text-justify text-sm sm:text-base lg:text-lg wrap-break-word">
                  <p>
                    Nous sommes David et Anthony, deux frères passionnés des
                    sports d&apos;endurance.
                  </p>
                  <p>
                    L&apos;un évolue en cyclisme de haut niveau, tandis que
                    l&apos;autre se distingue en trail au niveau amateur/élite.
                    Notre parcours sportif nous a naturellement conduits à nous
                    intéresser en profondeur à l&apos;entraînement et à la
                    physiologie de l&apos;effort.
                  </p>
                  <p>
                    Nous avons créé l&apos;
                    <span className="font-semibold">
                      Atelier de l&apos;Endurance
                    </span>{" "}
                    avec l&apos;envie de partager notre expérience et
                    d&apos;accompagner tous les passionnés de sport
                    d&apos;endurance, qu&apos;ils soient débutants ou confirmés.
                    Notre objectif est d&apos;aider chacun à progresser, à se
                    dépasser et à prendre du plaisir dans sa pratique, en
                    proposant un accompagnement adapté à tous les niveaux et
                    toutes les ambitions.
                  </p>
                </div>

                <p className="text-right text-sm text-slate-500 md:text-base">
                  David et Anthony
                </p>

                <div>
                  <Button
                    as={Link}
                    href="/team"
                    radius="full"
                    className="group bg-linear-to-r from-primary to-blue-400 sm:text-lg text-white"
                  >
                    En savoir plus
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-2 h-5 w-5 transition group-hover:translate-x-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .home-about-fade {
          animation: fadeUp 0.8s ease-out both;
        }
        .home-about-fade-delay {
          animation-delay: 0.15s;
        }
      `}</style>
    </section>
  );
}
