export const productSheet = {
  NAME: "Transmetteur de pression",
  INFO: "Un capteur de pression est un système qui convertit une pression mécanique en une valeur électrique. Celui-ci peut fournir une information numérique en plus.",
  PINS: {
    PIT: "Transmetteur à indicateur de pression",
    PT: "Transmetteur de pression",
    PDT: "Transmetteur de pression différentielle",
  },
  OPENAIR: false,
  PROTOCOLE: false,
  FB: "FB001",
  IO: { NI: 1, NO: 0, AI: 1, AO: 0, TI: 0 },
  TEXTS: {
    NI: ["Envoi d'un signal numérique"],
    NO: [],
    AI: ["Transmetteur de pression 4-20mA"],
    AO: [],
    TI: [],
  },
  // Consigne: mettre "FB" si les commandes sont gérées par un bloc fonction.
  CMD: {
    NI: [
      [
        "Indicateur de niveau de pression",
        "Déclenchement lorsque le niveau de pression 1 est atteint",
        "Activation d'un défaut",
      ],
    ],
    NO: [[]],
    AI: [["FB"]],
    AO: [[]],
    TI: [[]],
  },
  FAULTS: {
    ARRAY: [
      ["def_[TAG]_1", "PMI", "Entrée PLC activée après 3 secondes"],
      ["FB"],
    ],
    OVERALL: [
      ["def_signal_[TAG]", "TMI", "Affichage d'un avertissement"],
      ["def_SL_[TAG]", "PMI", "Affichage d'un avertissement"],
      ["def_SLL_[TAG]", "PMA", "Retour à l'etat par défaut"],
      ["def_SH_[TAG]", "PMI", "Affichage d'un avertissement"],
      ["def_SHH_[TAG]", "PMA", "Retour à l'etat par défaut"],
    ],
  },
};
