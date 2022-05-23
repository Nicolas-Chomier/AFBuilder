//+ Mandatory main patern !
export const productSheet = {
  NAME: "Compteur électrique", //! Mandatory
  INFO: "Le compteur électrique produit des impulsions en fonction de la quantité de courant qui le traverse.", //! Mandatory
  PINS: {
    XXX: "XXX",
  },
  OPENAIR: false,
  PROTOCOLE: false,
  FB: false, //* If true => "STRING" ex: "FB001"
  IO: { NI: 1, NO: 0, AI: 0, AO: 0, TI: 0 },
  TEXTS: {
    NI: ["Impulsion du compteur électrique"],
    NO: [],
    AI: [],
    AO: [],
    TI: [],
  },
  //* Warning : if managed by Function Block, fill array with "FB" !
  CMD: {
    NI: [
      [
        "Impulsion du compteur électrique",
        "Impulsion par unité de puissance définie dans le compteur électrique",
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
