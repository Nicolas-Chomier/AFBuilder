//+ Mandatory main patern !
export const productSheet = {
  NAME: "Pressostat", //! Mandatory
  INFO: "le pressostat permet de vérifier la pression minimale dans le circuit d'eau", //! Mandatory
  PINS: {
    PSL: "Limite du pressostat",
  },
  OPENAIR: false,
  PROTOCOLE: false,
  FB: false, //* If true => "STRING" ex: "FB001"
  IO: { NI: 1, NO: 0, AI: 0, AO: 0, TI: 0 },
  TEXTS: {
    NI: ["Envoi d'un signal numérique"],
    NO: [],
    AI: [],
    AO: [],
    TI: [],
  },
  //* Warning : if managed by Function Block, fill array with "FB" !
  CMD: {
    NI: [
      [
        "Indicateur de niveau de pression",
        "Déclenchement lorsque le niveau de pression est atteint",
        "Activation d'un défaut",
      ],
    ],
    NO: [[]],
    AI: [[]],
    AO: [[]],
    TI: [[]],
  },
  FAULTS: {
    ARRAY: [["def_[TAG]", "PMI", "Entrée PLC activée après 3 secondes"]],
    OVERALL: [],
  },
};
