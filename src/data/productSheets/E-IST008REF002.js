//+ Mandatory main patern !
export const productSheet = {
  NAME: "Compteur d'énergie", //! Mandatory
  INFO: "Le compteur d'énergie produit des impulsions en fonction de la quantité d'énergie réglable qui le traverse.", //! Mandatory
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