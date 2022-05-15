export const productSheet = {
  NAME: "Compresseur centrifuge",
  INFO: "Compresseur piloté par notre système Open Air avec contrôle analogique",
  PINS: {
    CTF: "Compresseur centrifuge",
  },
  OPENAIR: true,
  PROTOCOLE: false,
  FB: false, //* If true => "STRING" ex: "FB001"
  IO: { NI: 6, NO: 2, AI: 3, AO: 1, TI: 0 },
  TEXTS: {
    NI: [
      "Fonctionnement du compresseur",
      "Fonctionnement en charge",
      "Moteur en marche",
      "Synthèse d'alerte",
      "Synthèse d'alarme",
      "locale / distance",
    ],
    NO: ["Activation de la charge à distance", "Contrôle de la charge"],
    AI: [
      "Mesure d'intensité du moteur",
      "Mesure de la pression de sortie du compresseur",
      "Mesure de la pression d'entrée' du compresseur",
    ],
    AO: ["Envoi de la consigne de pilotage"],
    TI: [],
  },
  //* Warning : if managed by Function Block, fill array with "FB" !
  CMD: {
    NI: [
      [
        "Compresseur en marche",
        "Le compresseur est prêt",
        "Indique que le compresseur est opérationnel",
      ],
      [
        "Fonctionnement en charge",
        "Fonctionnement du compresseur",
        "Indique que le compresseur fonctionne",
      ],
      [
        "Moteur en fonctionnement",
        "Moteur du compresseur en fonctionnement",
        "Indique que le moteur du compresseur est en rotation",
      ],
      [
        "Synthèse des avertissements",
        "Problème technique ou de dépassement de seuil sans arrêt de l'équipement",
        "Activation d'un défaut",
      ],
      [
        "Synthèse d'alarme",
        "Problème technique ou de dépassement de seuil avec arrêt de l'équipement",
        "Activation d'un défaut",
      ],
      [
        "Commande locale/à distance",
        "Dépend du choix de l'opérateur",
        "Laisser le compresseur s'autogérer ou non",
      ],
      [],
      [],
    ],
    NO: [
      [
        "Activation de la charge à distance",
        "Activation de la sortie numérique de l'automate",
        "Laisser l'autorisation de gestion de la charge au logiciel externe",
      ],
      [
        "Contrôle de la charge",
        "Activation de la sortie numérique de l'automate",
        "Piloter la charge",
      ],
      [],
      [],
      [],
      [],
      [],
      [],
    ],
    AI: [
      [
        "Mesure d'intensité du moteur",
        "Signal 4-20mA actif",
        "Indique la valeur du courant traversant le moteur",
      ],
      [
        "Mesure de pression",
        "Signal 4-20mA actif",
        "Mesure de la pression de sortie du compresseur",
      ],
      [
        "Mesure de pression",
        "Signal 4-20mA actif",
        "Mesure de la pression d'entrée du compresseur",
      ],
      [],
    ],
    AO: [
      [
        "Envoie d'une valeur analogique (4-20mA)",
        "Sortie analogique de l'automate active",
        "Pilote le compresseur avec une nouvelle consigne",
      ],
      [],
    ],
    TI: [[]],
  },
  FAULTS: {
    ARRAY: [
      [
        "Def_avertissement_compresseur_[TAG]",
        "TMI",
        "Entrée PLC activée après 3 secondes",
      ],
      [
        "Def_alarme_compresseur_[TAG]",
        "TMA",
        "Entrée PLC activée après 3 secondes",
      ],
    ],
    OVERALL: [[]],
  },
};
