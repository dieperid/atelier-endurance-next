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
    <div className="flex flex-col border border-gray-300 rounded-lg shadow-sm p-6">
      <h2 className="mx-auto italic text-4xl font-bold tracking-tight">
        {title}
      </h2>

      <div className="flex justify-center items-end mt-4">
        <p className="text-3xl xl:text-4xl font-extrabold">{price}</p>
        <span className="ml-1">/mois</span>
      </div>

      <p className="mt-4 text-center xl:text-justify">{description}</p>

      <ul className="mt-6 space-y-3 text-sm lg:text-base mb-6">
        {features.map((item) => (
          <li key={item} className="flex font-semibold">
            <div>
              <svg
                className="w-6 h-6 mr-2 font-semibold text-primary"
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
        className="mt-auto text-lg"
      >
        Détails du programme
      </Button>
    </div>
  );
}
