import CoachingHero from "@/components/coaching/CoachingHero";
import CoachingIntro from "@/components/coaching/CoachingIntro";
import FAQ from "@/components/coaching/Faq";
import HowItWorks from "@/components/coaching/HowItWorks";
import PricingGrid from "@/components/coaching/PricingGrid";

export const metadata = {
  title: "Coaching – Atelier de l'Endurance",
};

export default function CoachingPage() {
  return (
    <main className="container mx-auto px-6 sm:px-16 pt-6">
      <div className="mx-auto max-w-6xl space-y-10">
        <CoachingHero />
        <CoachingIntro />
        <PricingGrid />
        <HowItWorks />
        <FAQ />
      </div>
    </main>
  );
}
