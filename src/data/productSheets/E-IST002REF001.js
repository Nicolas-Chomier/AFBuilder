//+ Mandatory main patern !
export const productSheet = {
  NAME: "Transmetteur de débit", //! Mandatory
  INFO: "Les débitmètres magnétiques se composent d'un émetteur et d'un capteur qui fonctionnent ensemble pour mesurer le débit. Le capteur du débitmètre magnétique est placé en ligne et mesure une tension induite générée par le fluide lorsqu'il passe dans un tuyau", //! Mandatory
  PINS: {
    FT: "Transmetteur de débit",
  },
  OPENAIR: false,
  PROTOCOLE: false,
  FB: "FB001", //* If true => "STRING" ex: "FB001"
  IO: { NI: 0, NO: 0, AI: 1, AO: 0, TI: 0 },
  TEXTS: {
    NI: [],
    NO: [],
    AI: ["Transmetteur de débit 4-20mA"],
    AO: [],
    TI: [],
  },
  //* Warning : if managed by Function Block, fill array with "FB" !
  CMD: {
    NI: [[]],
    NO: [[]],
    AI: [["FB"]],
    AO: [[]],
    TI: [[]],
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
};
