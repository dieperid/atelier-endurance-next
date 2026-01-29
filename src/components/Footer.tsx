"use client";

import Image from "next/image";
import { Link } from "@heroui/react";
import { menuItems, socialLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-200 pt-2 pb-6">
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-white via-slate-100 to-slate-200" />
      <div className="container relative mx-auto px-6 sm:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:justify-between">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/assets/img/logo-trans.png"
                alt="Atelier Endurance Logo"
                width={100}
                height={100}
                priority
              />
            </Link>

            <nav className="flex flex-wrap justify-center gap-6 text-xs sm:text-sm">
              {menuItems.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  color="foreground"
                  className="transition hover:text-slate-900 hover:underline"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="h-px w-full bg-linear-to-r from-transparent via-slate-300 to-transparent mt-4 sm:mt-0" />

          <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <p className="text-sm text-slate-500 text-center sm:text-left">
              © 2025 Atelier de l&apos;Endurance. Tous droits réservés.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href={socialLinks.instagram}
                className="rounded-full border border-slate-200 bg-white p-2 text-sm text-slate-600 shadow-[0_6px_18px_rgba(15,23,42,0.08)] transition hover:text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="size-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Link>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                Réalisé par
                <Link
                  href={socialLinks.david_website}
                  color="foreground"
                  className="transition hover:underline text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  David Dieperink
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
