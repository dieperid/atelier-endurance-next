"use client";

import { Accordion, AccordionItem } from "@heroui/react";

export default function FAQ() {
  const itemClasses = {
    base: "rounded-xl border border-slate-200 bg-white/90 shadow-[0_8px_20px_rgba(15,23,42,0.06)] data-[open=true]:bg-slate-50 data-[open=true]:shadow-[0_12px_30px_rgba(15,23,42,0.1)]",
    trigger: "px-4 py-4",
    title: "text-slate-900 font-semibold",
    indicator: "text-slate-400",
    content: "px-4 pb-4 text-slate-600",
  };

  return (
    <section>
      <h2 className="text-4xl font-bold text-slate-900 mb-4">FAQ</h2>

      <Accordion variant="splitted" className="px-0 space-y-3">
        <AccordionItem
          title="Que puis-je attendre d'un coaching personnalisé ?"
          classNames={itemClasses}
        >
          <ul className="list-disc list-inside space-y-1">
            <li>Une augmentation de tes performances.</li>
            <li>Une diminution significative du risque de blessure.</li>
            <li>
              Une gestion optimisée de tes pics de forme pour exceller au bon
              moment.
            </li>
            <li>
              Un allègement mental en confiant ton entraînement à un expert.
            </li>
            <li>
              Un plan 100 % personnalisé, adapté à ton profil de coureur et à
              tes contraintes.
            </li>
            <li>
              Un coach engagé dans ta progression, te guidant sur quoi faire et
              éviter.
            </li>
            <li>
              Un accompagnement sur mesure, tenant compte de ton âge, de ton
              expérience et de tes objectifs.
            </li>
            <li>Un coach passionné, partageant tes réussites et tes défis.</li>
            <li>
              Un soutien stratégique pour choisir tes courses et planifier
              efficacement tes saisons.
            </li>
          </ul>
        </AccordionItem>

        <AccordionItem
          title="Quelle est la durée d'engagement ?"
          classNames={itemClasses}
        >
          <p className="text-justify">
            Nos formules <span className="font-semibold">Endurance</span> et{" "}
            <span className="font-semibold">Performance</span> sont proposées
            avec un engagement minimum de 3 et 6 mois respectivement. Le{" "}
            <span className="font-semibold">Plan mensuel</span> est disponible
            sans engagement. Chaque formule est accompagnée d&apos;une
            évaluation initiale gratuite pour estimer ton niveau actuel et
            répondre à tes questions.
          </p>
        </AccordionItem>

        <AccordionItem
          title="Y a-t-il un niveau requis ?"
          classNames={itemClasses}
        >
          <p className="text-justify">
            Pas du tout ! Quel que soit ton niveau, nous t’accompagnons avec la
            même attention. Que tu pratiques le cyclisme, la course sur route,
            le trail ou le triathlon, que tu vises un semi-marathon en moins
            d’1h30 ou que tu te lances ton tout premier défi d’endurance, notre
            priorité, c’est ta motivation à progresser et à apprendre.
          </p>
        </AccordionItem>

        <AccordionItem
          title="Puis-je changer de formule ?"
          classNames={itemClasses}
        >
          <p className="text-justify">
            Oui, tout à fait ! Si tu as opté pour le{" "}
            <span className="font-semibold">Plan mensuel</span>, tu peux passer
            à tout moment vers la formule{" "}
            <span className="font-semibold">Endurance</span> ou{" "}
            <span className="font-semibold">Performance </span>
            en écrivant soit par e-mail à{" "}
            <a
              href="mailto:contact@atelier-endurance.ch"
              className="text-primary font-medium hover:underline"
            >
              contact@atelier-endurance.ch
            </a>
            , soit directement à David sur WhatsApp. Si tu es déjà engagé sur
            une formule <span className="font-semibold">Endurance</span> ou{" "}
            <span className="font-semibold">Performance</span>, tu pourras
            changer de formule une fois la période d’engagement terminée. Tu
            peux également décider d’arrêter ton abonnement à la fin de ton mois
            en cours, selon les conditions de ta formule.
          </p>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
