//+ Mandatory main patern !
export const productSheet = {
  NAME: "Détecteur de débit", //! Mandatory
  INFO: "Dispositif qui fournit une information numérique lorsque le fluide auquel il est soumis est en mouvement", //! Mandatory
  PINS: {
    FD: "Détecteur de débit",
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
        "Indicateur de débit volumique",
        "Déclenchement lorsque la limite de débit est atteinte",
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
