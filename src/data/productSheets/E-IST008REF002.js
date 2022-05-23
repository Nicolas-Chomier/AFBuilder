//+ Mandatory main patern !
export const productSheet = {
  NAME: "Compteur d'énergie", //! Mandatory
  INFO: "Le compteur d'énergie produit des impulsions en fonction de la quantité d'énergie réglable qui le traverse.", //! Mandatory
  PINS: {
    XXX: "XXX",
  },
  OPENAIR: false,
  PROTOCOLE: false,
  FB: false, //* If true => "STRING" ex: "FB001"
  IO: { NI: 1, NO: 0, AI: 0, AO: 0, TI: 0 },
  TEXTS: {
    NI: ["Impulsion du compteur d'énergie thermique"],
    NO: [],
    AI: [],
    AO: [],
    TI: [],
  },
  //* Warning : if managed by Function Block, fill array with "FB" !
  CMD: {
    NI: [
      [
        "Impulsions du compteur d'eau",
        "Impulsion par unité de volume définie dans le compteur d'énergie thermique",
        "Incrémentation du compteur",
      ],
    ],
    NO: [[]],
    AI: [[]],
    AO: [[]],
    TI: [[]],
  },
  FAULTS: {
    ARRAY: [
      [
        "Défaut de seuil",
        "PMI",
        "Lorsque la somme des impulsions atteint un nombre limite défini",
      ],
    ],
    OVERALL: [],
  },
};
