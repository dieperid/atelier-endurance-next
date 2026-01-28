import HeroLanding from "@/components/HeroLanding";
import HomeAboutSection from "@/components/home/HomeAboutSection";
import HomeCoachesSection from "@/components/home/HomeCoachesSection";

export default function Home() {
  return (
    <div>
      <HeroLanding />
      <HomeAboutSection />
      <HomeCoachesSection />
    </div>
  );
}
