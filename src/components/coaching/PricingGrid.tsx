import PricingCard from "./PricingCard";

export default function PricingGrid() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <PricingCard
        title="Endurance"
        price="99.– CHF"
        description="La formule Endurance propose un suivi personnalisé, des conseils nutritionnels et une préparation stratégique, adaptés à votre quotidien et à votre progression."
        features={[
          "Évaluation initiale",
          "Plan d'entraînement hebdomadaire",
          "Accessible via Intervals.icu",
          "Échange quotidien (WhatsApp)",
          "Adaptation du plan illimité",
          "Analyse des séances",
          "Stratégie de course",
        ]}
        href="/coaching/endurance"
      />

      <PricingCard
        title="Performance"
        price="129.– CHF"
        description="La formule Performance complète Endurance avec la préparation physique spécifique et générale pour optimiser votre performance."
        features={[
          "Évaluation initiale",
          "Plan d'entraînement hebdomadaire",
          "Accessible via Intervals.icu",
          "Échange quotidien (WhatsApp)",
          "Adaptation du plan illimité",
          "Analyse des séances",
          "Stratégie de course",
          "Préparation physique générale et spécifique",
        ]}
        href="/coaching/performance"
      />

      <PricingCard
        title="Plan mensuel"
        price="59.– CHF"
        description="Le Plan mensuel vous fournit un plan personnalisé après un entretien, sans suivi des données, avec une stratégie ciblée avant la compétition."
        features={[
          "Évaluation initiale",
          "Plan d'entraînement hebdomadaire",
          "Accessible via Intervals.icu",
          "Stratégie de course",
        ]}
        href="/coaching/mensuel"
      />
    </section>
  );
}
