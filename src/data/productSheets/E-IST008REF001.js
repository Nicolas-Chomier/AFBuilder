//+ Mandatory main patern !
export const productSheet = {
  NAME: "Compteur d'eau", //! Mandatory
  INFO: "Le compteur d'eau produit des impulsions en fonction de la quantité d'eau qu'il contient.", //! Mandatory
  PINS: {
    PIT: "",
    PT: "",
    PDT: "",
  },
  OPENAIR: false,
  PROTOCOLE: false,
  FB: false, //* If true => "STRING" ex: "FB001"
  IO: { NI: 0, NO: 0, AI: 0, AO: 0, TI: 0 },
  TEXTS: {
    NI: [],
    NO: [],
    AI: [],
    AO: [],
    TI: [],
  },
  //* Warning : if managed by Function Block, fill array with "FB" !
  CMD: {
    NI: [[]],
    NO: [[]],
    AI: [[]],
    AO: [[]],
    TI: [[]],
  },
  FAULTS: {
    ARRAY: [[]],
    OVERALL: [[]],
  },
};
