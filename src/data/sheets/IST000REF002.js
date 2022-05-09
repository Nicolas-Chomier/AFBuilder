export const productSheet = {
  ID: "IST000REF002",
  name: "Transmetteur de pression avec un contact sec",
  infos:
    "Un capteur de pression est un système qui convertit une pression mécanique en une valeur électrique. Celui-ci peut fournir une information numérique en plus.",
  Labels: [
    "PIT = Transmetteur à indicateur de pression",
    "PT = Transmetteur de pression",
    "PDT = Transmetteur de pression différentielle",
  ],
  IO: { DI: 1, DO: 0, AI: 1, AO: 0, AIt: 0 },
  Text: {
    DI: "Envoi d'un signal numérique",
    DO: "",
    AI: "Transmetteur de pression 4-20mA",
    AO: "",
    AIt: "",
  },
  AF: {
    DI: [
      [
        "Indicateur de niveau de pression",
        "Déclenchement lorsque le niveau de pression est atteint",
        "Activation d'un défaut",
      ],
    ],
    DO: [[]],
    AI: [
      [
        "Géré par bloc fonctionnel",
        "Géré par bloc fonctionnel",
        "Géré par bloc fonctionnel",
      ],
    ],
    AO: [[]],
    AIt: [[]],
  },
  FAULTS: [["def_[TAG]", "PMI", "Entrée PLC activée après 3 secondes"]],
  PROTOCOLE: false,
  FB: false,
};
