import CoachProfile from "@/components/team/CoachProfile";
import { coaches } from "@/lib/data";

export default function TeamSection() {
  return (
    <section className="bg-white pt-10">
      <div className="mx-auto max-w-6xl space-y-12">
        {coaches.map((coach) => (
          <CoachProfile
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
    </section>
  );
}
