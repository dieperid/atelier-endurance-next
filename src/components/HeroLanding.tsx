"use client";

import Image from "next/image";

export default function HeroLanding() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background image */}
      <Image
        src="/assets/img/coaching/performance.jpg"
        alt="Atelier Endurance background"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/30 via-black/50 to-black/30" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <div className="text-center text-white">
          <h1 className="drop-shadow-lg text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
            Ton <span className="text-primary">succès</span>, notre mission
          </h1>

          <p className="mt-6 drop-shadow-lg w-full mx-auto font-semibold text-white sm:text-xl">
            Construire l’endurance, la résilience et la performance sur le long
            terme.
          </p>

          <p className="mt-6 drop-shadow-lg w-full mx-auto font-bold text-white sm:text-xl">
            Route, Trail, Cyclisme, Triathlon
          </p>
        </div>
      </div>
    </section>
  );
}
