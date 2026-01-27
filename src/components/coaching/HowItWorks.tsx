export default function HowItWorks() {
  return (
    <section className="space-y-6">
      <h2 className="italic text-4xl xl:text-6xl font-extrabold tracking-tight">
        <span className="text-primary">Comment</span> ça marche ?
      </h2>

      <ol className="list-decimal list-inside space-y-3 font-medium">
        <li>
          Choisis la formule d&apos;accompagnement qui te correspond :{" "}
          <a
            href="/coaching/mensuel"
            className="hover:text-primary hover:underline"
          >
            Plan Mensuel
          </a>
          ,{" "}
          <a
            href="/coaching/endurance"
            className="hover:text-primary hover:underline"
          >
            Endurance{" "}
          </a>
          ou{" "}
          <a
            href="/coaching/performance"
            className="hover:text-primary hover:underline"
          >
            Performance
          </a>
          .
        </li>
        <li>
          Remplis le formulaire de demande de coaching avec un maximum
          d’informations.
        </li>
        <li>
          David te contacte sous 24 à 48h via WhatsApp pour planifier un appel
          d’évaluation.
        </li>
        <li>
          Lors de l’appel, vous échangez sur tes objectifs, ton questionnaire,
          et la mise en place du coaching.
        </li>
        <li>
          Ton espace Intervals.icu est créé, et ton plan d’entraînement
          personnalisé est lancé.
        </li>
        <li>
          Le suivi varie selon la formule choisie — retrouve tous les détails
          sur la page de ta formule.
        </li>
        <li>
          Une fois le coaching démarré, une question ou un doute ? Tu peux
          contacter David à tout moment via WhatsApp pour être guidé.
        </li>
      </ol>
    </section>
  );
}
