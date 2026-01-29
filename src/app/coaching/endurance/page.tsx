import Image from "next/image";
import Link from "next/link";
import { enduranceFeatures } from "@/lib/data";

export const metadata = {
  title: "Endurance – Atelier de l'Endurance",
};

export default function EndurancePage() {
  return (
    <main className="container mx-auto px-6 sm:px-16 py-6">
      <div className="mx-auto max-w-6xl space-y-10">
        <header className="space-y-4 md:space-y-6">
          <h1 className="italic text-4xl font-semibold tracking-tight md:text-6xl lg:text-7xl xl:text-8xl">
            Endurance
          </h1>
          <div className="h-1 w-48 rounded-full bg-linear-to-r from-black via-slate-500 to-transparent" />
        </header>

        <div className="space-y-3 text-justify md:text-lg lg:text-xl">
          <p>
            Pensée pour répondre aux exigences des sports d&apos;endurance, la
            formule <span className="font-semibold">Endurance</span> offre un
            accompagnement haut de gamme alliant précision, personnalisation et
            adaptabilité. Elle inclut un suivi individualisé, des
            recommandations nutritionnelles, une préparation stratégique pour
            chaque course, ainsi qu&apos;une analyse détaillée de vos données
            d&apos;entraînement.
          </p>
          <p>
            Conçue pour accompagner l&apos;athlète dans toutes les dimensions de
            sa progression, cette approche place l&apos;humain au centre du
            processus. Elle s&apos;intègre harmonieusement à votre quotidien, en
            tenant compte de vos contraintes personnelles et professionnelles,
            pour bâtir un entraînement cohérent et durable. Grâce à une
            adaptation continue et une lecture fine de vos performances, elle
            évolue au rythme de vos besoins.
          </p>
          <p>
            La formule <span className="font-semibold">Endurance</span> est
            proposée au tarif de 99.- CHF par mois, sur la base d&apos;un{" "}
            <span className="font-semibold underline">
              engagement de 3 mois minimum
            </span>
            . Pour plus de flexibilité, l&apos;option «{" "}
            <Link
              href="/coaching/mensuel"
              className="font-semibold text-primary hover:underline"
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
            alt="Formule Endurance"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
        </div>

        <section className="space-y-4">
          <h2 className="italic text-3xl font-extrabold tracking-tight sm:text-4xl xl:text-4xl">
            <span>La formule </span>
            <span className="text-primary">Endurance</span>
            <span> c&apos;est quoi ?</span>
          </h2>

          <ul className="space-y-3">
            {enduranceFeatures.map((item) => (
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
