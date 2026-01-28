"use client";

import Image from "next/image";
import { Button, Link } from "@heroui/react";

export default function HomeAboutSection() {
  return (
    <section className="bg-white pt-6 sm:pt-10 md:pt-16 pb-4 overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-8 md:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="relative min-w-0 lg:order-last">
              <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_15px_45px_rgba(15,23,42,0.12)]">
                <Image
                  src="/assets/img/hero-bg.jpeg"
                  alt="Anthony et David"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 520px"
                />
              </div>
            </div>

            <div className="space-y-6 min-w-0">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl xl:text-6xl max-w-lg">
                <span>Qui sommes</span>{" "}
                <span className="text-primary ">nous ?</span>
              </h2>

              <div className="space-y-4 text-justify text-sm md:text-base lg:text-lg wrap-break-word">
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
                  href="/coaching"
                  radius="full"
                  color="primary"
                  className="text-lg"
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
    </section>
  );
}
