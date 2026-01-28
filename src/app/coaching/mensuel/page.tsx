import Image from "next/image";

export const metadata = {
  title: "Plan mensuel – Atelier de l'Endurance",
};

const mensuelFeatures = [
  "Un entretien initial afin de cibler ton niveau actuel et tes objectifs futurs",
  "Un accès à la plateforme d'entraînement Intervals.icu et à la communauté de l'Atelier de l'Endurance",
  "Un plan d'entraînement fait sur mesure construit chaque mois",
  "Mise en place d'une stratégie et d'un plan de course précis pour arriver au meilleur de ta forme le jour J",
];

export default function MensuelPage() {
  return (
    <main className="container mx-auto px-6 sm:px-16 py-6">
      <div className="mx-auto max-w-6xl space-y-10">
        <header className="space-y-4 md:space-y-6">
          <h1 className="italic text-4xl font-semibold tracking-tight md:text-6xl lg:text-7xl xl:text-8xl">
            Plan mensuel
          </h1>
          <div className="h-1 w-48 rounded-full bg-linear-to-r from-black via-slate-500 to-transparent" />
        </header>

        <div className="space-y-3 text-justify md:text-lg lg:text-xl">
          <p>
            Le <span className="font-semibold">Plan mensuel</span>{" "}
            s&apos;adresse à ceux qui souhaitent structurer leur entraînement
            sans suivi des données. Après un entretien initial, un plan
            d&apos;entraînement avec les consignes essentielles vous est envoyé,
            puis vous gérez vos semaines en toute autonomie. Une stratégie
            spécifique est mise en place avant votre compétition pour maximiser
            vos chances de réussite.
            <br />
            Le tarif du <span className="font-semibold">Plan mensuel</span> est
            de 59.- CHF par mois pour un sport d&apos;endurance, et 79.- CHF par
            mois avec préparation physique incluse.
          </p>
        </div>

        <div className="relative h-72 w-full overflow-hidden rounded-2xl border border-slate-200 shadow-[0_10px_35px_rgba(15,23,42,0.08)] sm:h-96">
          <Image
            src="/assets/img/hero-bg.jpeg"
            alt="Plan mensuel"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
        </div>

        <section className="space-y-4">
          <h2 className="italic text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl xl:text-4xl">
            <span>Le </span>
            <span className="text-primary">Plan mensuel</span>
            <span> c&apos;est quoi ?</span>
          </h2>

          <ul className="space-y-3">
            {mensuelFeatures.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <div className="relative mt-1">
                  <span className="absolute inset-0 rounded-full bg-slate-200 blur-md" />
                  <svg
                    className="relative h-5 w-5 text-primary"
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
                    />
                  </svg>
                </div>
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
