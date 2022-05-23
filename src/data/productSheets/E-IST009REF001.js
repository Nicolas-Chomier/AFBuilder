//+ Mandatory main patern !
export const productSheet = {
  NAME: "Transmetteur hybride (débit + T°)", //! Mandatory
  INFO: "Transmetteur qui mesure le débit et la température", //! Mandatory
  PINS: {
    XXX: "XXX",
  },
  OPENAIR: false,
  PROTOCOLE: false,
  FB: "FB001", //* If true => "STRING" ex: "FB001"
  IO: { NI: 1, NO: 0, AI: 1, AO: 0, TI: 0 },
  TEXTS: {
    NI: ["Envoi d'un signal numérique"],
    NO: [],
    AI: ["Transmetteur de pression 4-20mA"],
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
    ARRAY: [["def_[TAG]", "PMI", "Entrée PLC activée après 3 secondes"]],
    OVERALL: [
      ["def_signal_[TAG]", "TMI", "Affichage d'un avertissement"],
      ["def_SL_[TAG]", "PMI", "Affichage d'un avertissement"],
      ["def_SLL_[TAG]", "PMA", "Retour à l'etat par défaut"],
      ["def_SH_[TAG]", "PMI", "Affichage d'un avertissement"],
      ["def_SHH_[TAG]", "PMA", "Retour à l'etat par défaut"],
    ],
  },
};
