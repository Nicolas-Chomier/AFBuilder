export const productSheet = {
  ID: "IST000REF002",
  name: "Transmetteur de pression avec un contact sec",
  infos:
    "Un capteur de pression est un système qui convertit une pression mécanique en une valeur électrique. Celui-ci peut fournir une information numérique en plus.",
  PINS: {
    PIT: "Transmetteur à indicateur de pression",
    PT: "Transmetteur de pression",
    PDT: "Transmetteur de pression différentielle",
  },
  IO: { NI: 1, NO: 0, AI: 1, AO: 0, TI: 0 },
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
        "Déclenchement lorsque le niveau de pression est atteint",
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
  FAULTS: {
    ARRAY: [["def_[TAG]", "PMI", "Entrée PLC activée après 3 secondes"]],
    OVERALL: [["eeee"]],
  },
  PROTOCOLE: false,
  FB: false,
};
