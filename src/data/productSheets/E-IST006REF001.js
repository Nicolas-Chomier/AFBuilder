//+ Mandatory main patern !
export const productSheet = {
  NAME: "Hygrometre", //! Mandatory
  INFO: "L'hygromètre est basé sur la mesure de la température du point de rosée, et est utilisé pour mesurer l'humidité de l'air, ou d'un autre mélange gazeux",
  PINS: {
    AT: "Transmetteur Analyseur",
  },
  OPENAIR: false,
  PROTOCOLE: false,
  FB: "FB001", //* If true => "STRING" ex: "FB001"
  IO: { NI: 0, NO: 0, AI: 0, AO: 0, TI: 0 },
  TEXTS: {
    NI: [],
    NO: [],
    AI: ["Transmetteur d'humidité"],
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
