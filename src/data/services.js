import {
  Code2,
  Globe,
  ShoppingCart,
  Wrench,
} from "lucide-react";

export const services = [
  {
    id: 1,
    icon: Code2,
    title: "Développement d'applications web",
    description:
      "Conception et développement d'applications web modernes, fonctionnelles et adaptées aux besoins spécifiques de votre activité.",
    features: [
      "Applications sur mesure avec des interfaces modernes et responsives",
      "Tableaux de bord d'administration et gestion des utilisateurs, rôles et permissions",
      "Développement d'API REST et gestion des bases de données",
      "Digitalisation et automatisation de vos processus métier",
    ],
  },

  {
    id: 2,
    icon: Globe,
    title: "Création de sites web",
    description:
      "Création de sites web modernes, attractifs et responsives pour présenter votre activité et renforcer votre présence en ligne.",
    features: [
      "Sites vitrines professionnels pour entreprises, PME et startups",
      "Pages modernes et interactives, adaptées au mobile, à la tablette et à l'ordinateur",
      "Formulaires de contact et expérience utilisateur soignée (UX/UI)",
      "Maintenance et amélioration de sites existants",
    ],
  },

  {
    id: 3,
    icon: ShoppingCart,
    title: "Développement e-commerce",
    description:
      "Création, personnalisation et optimisation de boutiques en ligne pour vous permettre de vendre vos produits efficacement sur Internet.",
    features: [
      "Création et personnalisation de boutiques en ligne, de leurs thèmes et de leurs fonctionnalités",
      "Refonte du design et amélioration du parcours d'achat",
      "Gestion du catalogue et des fonctionnalités produits",
      "Maintenance, correction des bugs et optimisation des performances",
    ],
  },

  {
    id: 4,
    icon: Wrench,
    title: "Maintenance & optimisation",
    description:
      "Assurer la fiabilité, la performance et l'évolution de vos sites web et applications grâce à une maintenance technique et des améliorations continues.",
    features: [
      "Maintenance préventive et corrective, correction des bugs",
      "Amélioration des performances et optimisation du code",
      "Ajout de fonctionnalités et modernisation des interfaces",
      "Audit technique et recommandations",
    ],
  },
];
