export const productSheet = {
  ID: "IST000REF001",
  NAME: "Transmetteur de pression",
  INFO: "Un transmetteur de pression est un système qui convertit une pression mécanique en une valeur électrique.",
  PINS: {
    PIT: "Transmetteur à indicateur de pression",
    PT: "Transmetteur de pression",
    PDT: "Transmetteur de pression différentielle",
  },
  IO: { DI: 0, DO: 0, AI: 1, AO: 0, AIt: 0 },
  TEXTS: {
    DI: "",
    DO: "",
    AI: "Transmetteur de pression 4-20mA",
    AO: "",
    AIt: "",
  },
  // Consigne: mettre "FB" si les commandes sont gérées par un bloc fonction.
  CMD: {
    DI: [
      [
        "Indicateur de niveau de pression",
        "Déclenchement lorsque le niveau de pression est atteint",
        "Activation d'un défaut",
      ],
    ],
    DO: [[]],
    AI: [["FB"]],
    AO: [[]],
    AIt: [[]],
  },
  FAULTS: {
    ARRAY: [["FB"]],
    OVERALL: [
      ["def_signal_[TAG]", "TMI", "Affichage d'un avertissement"],
      ["def_SL_[TAG]", "PMI", "Affichage d'un avertissement"],
      ["def_SLL_[TAG]", "PMA", "Retour à l'etat par défaut"],
      ["def_SH_[TAG]", "PMI", "Affichage d'un avertissement"],
      ["def_SHH_[TAG]", "PMA", "Retour à l'etat par défaut"],
    ],
  },
  PROTOCOLE: false,
  FB: "FB001",
};
