import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Performance – Atelier de l'Endurance",
};

const performanceFeatures = [
  "Un entretien initial afin de cibler ton niveau actuel et tes objectifs futurs",
  "Un accès à la plateforme d'entraînement Intervals.icu et à la communauté de l'Atelier de l'Endurance",
  "Un plan d'entraînement fait sur mesure construit chaque semaine en fonction de la charge ressentie et des retours de l'athlète",
  "Une analyse de tes entraînements avec tous les outils disponibles, et une lecture claire de tes données pour mieux comprendre ta progression",
  "Un retour chaque semaine sur ta progression pour ajuster les blocs, la charge et le volume d'entraînement",
  "Un échange illimité avec ton coach via WhatsApp pour adapter ton entraînement en temps réel",
  "Mise en place d'une stratégie et d'un plan de course précis pour arriver au meilleur de ta forme le jour J",
  "Élaboration d'une stratégie nutritionnelle pour apprendre à connaître ton corps et savoir quoi consommer pendant l'effort",
  "Une préparation physique générale et spécifique adaptée à tes besoins conçu pour renforcer ton corps, prévenir les blessures et améliorer tes performances",
];

export default function PerformancePage() {
  return (
    <main className="container mx-auto px-6 sm:px-16 py-6">
      <div className="mx-auto max-w-6xl space-y-10">
        <header className="space-y-4 md:space-y-6">
          <h1 className="italic text-4xl font-semibold tracking-tight md:text-6xl lg:text-7xl xl:text-8xl">
            Performance
          </h1>
          <div className="h-1 w-48 rounded-full bg-linear-to-r from-black via-slate-500 to-transparent" />
        </header>

        <div className="space-y-3 text-justify md:text-lg lg:text-xl">
          <p>
            Pensée pour réunir tous les avantages de la formule{" "}
            <span className="italic">Endurance</span>, la formule{" "}
            <span className="font-semibold">Performance</span> ajoute à cet
            accompagnement complet une préparation physique générale et
            spécifique.
          </p>
          <p>
            Ce coaching ultra-personnalisé comprend une préparation stratégique
            approfondie pour chaque compétition, ainsi qu&apos;une analyse
            détaillée de vos données d&apos;entraînement. Cette formule
            s&apos;adresse aux athlètes qui souhaitent optimiser chaque aspect
            de leur performance et bénéficier d&apos;un encadrement de haut
            niveau. Conçue pour s&apos;adapter parfaitement à votre quotidien et
            à vos contraintes, cette approche évolue en continu pour répondre à
            vos besoins et vous accompagner vers l&apos;excellence.
          </p>
          <p>
            La formule <span className="font-semibold">Performance</span> est
            proposée au tarif de 129.- CHF par mois, sur la base d&apos;un{" "}
            <span className="font-semibold underline">
              engagement de 6 mois minimum
            </span>
            . Pour plus de flexibilité, l&apos;option «{" "}
            <Link
              href="/coaching/mensuel"
              className="font-semibold text-slate-900 hover:underline"
            >
              Plan mensuel
            </Link>{" "}
            » est également disponible pour les athlètes souhaitant un
            engagement plus court.
          </p>
        </div>

        <div className="relative h-72 w-full overflow-hidden rounded-2xl border border-slate-200 shadow-[0_10px_35px_rgba(15,23,42,0.08)] sm:h-96">
          <Image
            src="/assets/img/hero-bg.jpeg"
            alt="Formule Performance"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
        </div>

        <section className="space-y-4">
          <h2 className="italic text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl xl:text-4xl">
            <span>La formule </span>
            <span className="text-primary">Performance</span>
            <span> c&apos;est quoi ?</span>
          </h2>

          <ul className="space-y-3">
            {performanceFeatures.map((item) => (
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
