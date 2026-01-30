"use client";

import Image from "next/image";
import { Chip } from "@heroui/react";
import { motion } from "framer-motion";

type Badge = {
  label: string;
  href?: string;
};

type CoachProfileProps = {
  name: string;
  imageSrc: string;
  imageAlt: string;
  bio: string[];
  badges?: Badge[];
  reverse?: boolean;
};

export default function CoachProfile({
  name,
  imageSrc,
  imageAlt,
  bio,
  badges = [],
  reverse = false,
}: CoachProfileProps) {
  const imageOrder = reverse ? "lg:order-last" : "lg:order-first";
  const contentOrder = reverse ? "lg:order-first" : "lg:order-last";

  return (
    <div className="grid items-center gap-10 lg:grid-cols-2">
      <div className={`${imageOrder} min-w-0`}>
        <div className="relative">
          <div className="relative rounded-3xl bg-linear-to-br from-sky-300/50 via-blue-300/25 to-indigo-300/15 p-px">
            <div className="relative aspect-square w-full overflow-hidden rounded-[22px] border border-sky-100/80 bg-white">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 520px"
              />
            </div>
          </div>
        </div>

        {badges.length > 0 ? (
          <div className="mt-5 flex flex-wrap gap-2">
            {badges.map((badge) => (
              <motion.div
                key={badge.label}
                whileHover={{
                  x: [0, -2, 2, -2, 2, 0],
                  rotate: [0, -1, 1, -1, 1, 0],
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <Chip
                  variant="bordered"
                  className="max-w-full border-sky-100/80 bg-white text-xs text-neutral-700 shadow-[0_8px_20px_rgba(59,130,246,0.12)] sm:text-sm whitespace-normal h-auto items-start py-1"
                >
                  {badge.href ? (
                    <a
                      href={badge.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="wrap-break-word transition hover:text-sky-900 hover:underline"
                    >
                      {badge.label}
                    </a>
                  ) : (
                    <span className="wrap-break-word">{badge.label}</span>
                  )}
                </Chip>
              </motion.div>
            ))}
          </div>
        ) : null}
      </div>

      <div className={`space-y-4 text-justify min-w-0 ${contentOrder}`}>
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold leading-tight lg:text-4xl">
            {name}
          </h3>
        </div>
        <div className="space-y-4 text-neutral-700 text-sm sm:text-base xl:text-lg">
          {bio.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
