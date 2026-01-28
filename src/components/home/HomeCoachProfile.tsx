"use client";

import Image from "next/image";
import { Chip } from "@heroui/react";

type Badge = {
  label: string;
  href?: string;
};

type HomeCoachProfileProps = {
  name: string;
  imageSrc: string;
  imageAlt: string;
  bio: string[];
  badges?: Badge[];
  reverse?: boolean;
};

export default function HomeCoachProfile({
  name,
  imageSrc,
  imageAlt,
  bio,
  badges = [],
  reverse = false,
}: HomeCoachProfileProps) {
  const imageOrder = reverse ? "lg:order-last" : "lg:order-first";
  const contentOrder = reverse ? "lg:order-first" : "lg:order-last";

  return (
    <div className="grid items-center gap-10 lg:grid-cols-2">
      <div className={`${imageOrder} min-w-0`}>
        <div className="relative">
          <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_15px_45px_rgba(15,23,42,0.12)]">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 520px"
            />
          </div>
        </div>

        {badges.length > 0 ? (
          <div className="mt-5 flex flex-wrap gap-2">
            {badges.map((badge) => (
              <Chip
                key={badge.label}
                variant="bordered"
                className="max-w-full border-slate-200 bg-white text-xs shadow-[0_8px_20px_rgba(15,23,42,0.08)] sm:text-sm whitespace-normal h-auto items-start py-1"
              >
                {badge.href ? (
                  <a
                    href={badge.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="wrap-break-word transition hover:text-slate-900 hover:underline"
                  >
                    {badge.label}
                  </a>
                ) : (
                  <span className="wrap-break-word">{badge.label}</span>
                )}
              </Chip>
            ))}
          </div>
        ) : null}
      </div>

      <div className={`space-y-4 text-justify min-w-0 ${contentOrder}`}>
        <h3 className="text-2xl font-semibold leading-tight lg:text-4xl">
          {name}
        </h3>
        <div className="space-y-4 text-sm md:text-base lg:text-lg">
          {bio.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
