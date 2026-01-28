"use client";

import { Link, Button } from "@heroui/react";

type Props = {
  title: string;
  price: string;
  description: string;
  features: string[];
  href: string;
};

export default function PricingCard({
  title,
  price,
  description,
  features,
  href,
}: Props) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_10px_35px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:shadow-[0_16px_55px_rgba(15,23,42,0.12)]">
      <div className="pointer-events-none absolute -inset-1 -z-10 rounded-3xl bg-[radial-gradient(circle_at_top,rgba(148,163,184,0.35),transparent_45%),radial-gradient(circle_at_bottom,rgba(226,232,240,0.6),transparent_45%)] opacity-70 blur-2xl transition group-hover:opacity-100" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(120deg,rgba(226,232,240,0.7),transparent_40%,rgba(241,245,249,0.9))]" />

      <h2 className="mt-4 text-center font-semibold uppercase tracking-widest text-slate-900 sm:text-left sm:text-xl">
        {title}
      </h2>

      <div className="mt-6 flex items-baseline justify-center gap-2 sm:justify-start">
        <p className="text-4xl font-black tracking-tight text-slate-900 xl:text-5xl">
          {price}
        </p>
        <span className="text-sm uppercase tracking-[0.2em] text-slate-400">
          /mois
        </span>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
        {description}
      </p>

      <div className="mt-6 h-px w-full bg-linear-to-r from-transparent via-slate-200 to-transparent" />

      <ul className="mt-6 space-y-3 text-sm text-slate-700 lg:text-base mb-6">
        {features.map((item) => (
          <li key={item} className="flex items-start gap-3 font-semibold">
            <div className="relative mt-0.5">
              <span className="absolute inset-0 rounded-full bg-slate-200 blur-md" />
              <svg
                className="relative h-5 w-5 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
            {item}
          </li>
        ))}
      </ul>

      <Button
        as={Link}
        href={href}
        variant="bordered"
        color="primary"
        className="mt-auto text-base font-semibold uppercase tracking-widest hover:bg-slate-50"
      >
        Détails
      </Button>
    </div>
  );
}
