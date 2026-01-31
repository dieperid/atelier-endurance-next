import TeamSection from "@/components/team/TeamSection";

export const metadata = {
  title: "L'équipe – Atelier de l'Endurance",
};

export default function TeamPage() {
  return (
    <main className="container mx-auto px-6 sm:px-16 pt-6 pb-12">
      <div className="mx-auto max-w-6xl">
        <header className="space-y-4 md:space-y-6">
          <h1 className="italic text-4xl font-semibold tracking-tight md:text-6xl lg:text-7xl xl:text-8xl">
            L&apos;équipe
          </h1>
          <div className="h-1 w-48 rounded-full bg-linear-to-r from-black via-slate-500 to-transparent" />
        </header>
      </div>

      <TeamSection />
    </main>
  );
}
