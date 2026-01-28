import TestimonialsCarousel from "@/components/testimonials/TestimonialsCarousel";
import TestimonialsHero from "@/components/testimonials/TestimonialsHero";
import TestimonialsIntro from "@/components/testimonials/TestimonialsIntro";

export const metadata = {
  title: "Témoignages – Atelier de l'Endurance",
};

export default function TestimonialsPage() {
  return (
    <main className="pt-6">
      <div className="container mx-auto px-6 sm:px-16">
        <div className="mx-auto max-w-6xl space-y-10">
          <TestimonialsHero />
          <TestimonialsIntro />
        </div>
      </div>
      <div className="mt-10">
        <TestimonialsCarousel />
      </div>
    </main>
  );
}
