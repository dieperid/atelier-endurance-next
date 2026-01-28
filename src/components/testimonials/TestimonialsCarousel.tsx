"use client";

import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import type { Swiper as SwiperInstance } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { testimonials } from "@/lib/testimonialsData";

const AUTO_SWIPE_MS = 8000;
const DESCRIPTION_LINES = 6;

export default function TestimonialsCarousel() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [overflowMap, setOverflowMap] = useState<Record<string, boolean>>({});
  const swiperRef = useRef<SwiperInstance | null>(null);
  const descriptionRefs = useRef<Record<string, HTMLParagraphElement | null>>(
    {},
  );

  const isAnyExpanded = Object.values(expanded).some(Boolean);

  useEffect(() => {
    if (!swiperRef.current?.autoplay) return;
    if (isAnyExpanded) {
      swiperRef.current.autoplay.stop();
    } else {
      swiperRef.current.autoplay.start();
    }
  }, [isAnyExpanded]);

  useEffect(() => {
    const updateOverflow = () => {
      if (isAnyExpanded) return;
      const next: Record<string, boolean> = {};
      for (const testimonial of testimonials) {
        const element = descriptionRefs.current[testimonial.name];
        if (!element) continue;
        next[testimonial.name] =
          element.scrollHeight > element.clientHeight + 1;
      }
      setOverflowMap((prev) => ({ ...prev, ...next }));
    };

    updateOverflow();
    window.addEventListener("resize", updateOverflow);
    return () => window.removeEventListener("resize", updateOverflow);
  }, [isAnyExpanded]);

  const toggleExpanded = (name: string) => {
    setExpanded((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <section className="relative overflow-hidden pt-16 pb-6">
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-gray-300 via-gray-200 to-gray-200" />
      <div className="pointer-events-none absolute left-0 top-0 w-full text-white">
        <svg
          viewBox="0 0 1440 90"
          className="h-16 w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C180,100 360,20 540,30 C720,40 900,90 1080,70 C1260,50 1350,20 1440,30 L1440,0 L0,0 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="relative container mx-auto space-y-6 px-6 sm:px-16 pt-8">
        <div className="mx-auto max-w-6xl space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="italic text-4xl font-extrabold tracking-tight">
              Avis
            </h2>
          </div>

          <div className="relative">
            <Swiper
              modules={[Autoplay, Pagination]}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
                if (isAnyExpanded) {
                  swiper.autoplay.stop();
                }
              }}
              autoplay={{
                delay: AUTO_SWIPE_MS,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              pagination={{ clickable: true, el: ".testimonials-pagination" }}
              loop
              slidesPerView={1}
              slidesPerGroup={1}
              spaceBetween={24}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.name} className="pt-2">
                  <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-300 bg-white p-6 transition hover:-translate-y-2">
                    <div className="pointer-events-none absolute -inset-1 -z-10 rounded-3xl bg-[radial-gradient(circle_at_top,rgba(148,163,184,0.35),transparent_45%),radial-gradient(circle_at_bottom,rgba(226,232,240,0.6),transparent_45%)] opacity-70 blur-2xl transition group-hover:opacity-100" />
                    <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(120deg,rgba(226,232,240,0.7),transparent_40%,rgba(241,245,249,0.9))]" />

                    <div className="relative h-48 w-full overflow-hidden rounded-xl">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold tracking-wide text-slate-900">
                      {testimonial.name}
                    </h3>
                    <div className="mt-4 h-px w-full bg-linear-to-r from-transparent via-slate-200 to-transparent" />
                    {(() => {
                      const isExpanded = Boolean(expanded[testimonial.name]);
                      const description = testimonial.description
                        .split(/<br\s*\/?>/gi)
                        .map((part, indexInner, array) => (
                          <span key={`${part}-${indexInner}`}>
                            {part}
                            {indexInner < array.length - 1 ? <br /> : null}
                          </span>
                        ));

                      return (
                        <>
                          <p
                            ref={(element) => {
                              descriptionRefs.current[testimonial.name] =
                                element;
                            }}
                            className="mt-2 text-sm leading-relaxed text-slate-700 text-justify"
                            style={
                              isExpanded
                                ? undefined
                                : {
                                    display: "-webkit-box",
                                    WebkitBoxOrient: "vertical",
                                    WebkitLineClamp: DESCRIPTION_LINES,
                                    overflow: "hidden",
                                  }
                            }
                          >
                            {description}
                          </p>
                          {(overflowMap[testimonial.name] ?? false) ||
                          isExpanded ? (
                            <button
                              type="button"
                              onClick={() => toggleExpanded(testimonial.name)}
                              className="mt-2 text-sm font-semibold text-primary hover:underline text-left"
                            >
                              {isExpanded ? "Voir moins" : "Voir plus"}
                            </button>
                          ) : null}
                        </>
                      );
                    })()}
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className="text-center gap-2">
          <div className="testimonials-pagination" />
        </div>
      </div>
    </section>
  );
}
