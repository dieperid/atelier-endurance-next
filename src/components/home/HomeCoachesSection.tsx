import HomeCoachProfile from "@/components/home/HomeCoachProfile";
import { coaches } from "@/lib/data";

export default function HomeCoachesSection() {
  return (
    <section className="bg-white pb-6 sm:pb-10 md:pb-16 pt-4 overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-8 md:px-16">
        <div className="mx-auto max-w-6xl space-y-12">
          {coaches.map((coach) => (
            <HomeCoachProfile
              key={coach.name}
              name={coach.name}
              imageSrc={coach.imageSrc}
              imageAlt={coach.imageAlt}
              bio={coach.bio}
              badges={coach.badges}
              reverse={coach.reverse}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
