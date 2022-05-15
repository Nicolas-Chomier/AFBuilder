export const productSheet = {
  ID: "IST000REF002",
  name: "Transmetteur de pression avec deux contact sec",
  infos:
    "Un capteur de pression est un système qui convertit une pression mécanique en une valeur électrique. Celui-ci peut fournir une information numérique en plus.",
  PINS: {
    PIT: "Transmetteur à indicateur de pression",
    PT: "Transmetteur de pression",
    PDT: "Transmetteur de pression différentielle",
  },
  IO: { NI: 2, NO: 0, AI: 1, AO: 0, TI: 0 },
  // a voir...
  Text: {
    NI: "Envoi d'un signal numérique",
    NO: "",
    AI: "Transmetteur de pression 4-20mA",
    AO: "",
    TI: "",
  },
  AF: {
    NI: [
      [
        "Indicateur de niveau de pression",
        "Déclenchement lorsque le niveau de pression 1 est atteint",
        "Activation d'un défaut",
      ],
      [
        "Indicateur de niveau de pression",
        "Déclenchement lorsque le niveau de pression 2 est atteint",
        "Activation d'un défaut",
      ],
    ],
    NO: [[]],
    AI: [
      [
        "Géré par bloc fonctionnel",
        "Géré par bloc fonctionnel",
        "Géré par bloc fonctionnel",
      ],
    ],
    AO: [[]],
    TI: [[]],
  },
  FAULTS: [
    ["def_[TAG]_1", "PMI", "Entrée PLC activée après 3 secondes"],
    ["def_[TAG]_2", "PMA", "Entrée PLC activée après 3 secondes"],
  ],
  PROTOCOLE: false,
  FB: false,
};
