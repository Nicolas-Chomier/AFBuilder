//+ Mandatory main patern !
export const productSheet = {
  NAME: "Transmetteur de température avec signal de commutation", //! Mandatory
  INFO: "Un transmetteur de température est un système qui convertit une température en une valeur électrique.Celui-ci peut fournir une information numérique en plus.", //! Mandatory
  PINS: {
    TT: "Transmetteur de température",
    TIT: "Transmetteur et indicateur de température",
  },
  OPENAIR: false,
  PROTOCOLE: false,
  FB: "FB001", //* If true => "STRING" ex: "FB001"
  IO: { NI: 1, NO: 0, AI: 1, AO: 0, TI: 0 },
  TEXTS: {
    NI: ["Envoi d'un signal numérique"],
    NO: [],
    AI: ["Transmetteur de température 4-20mA"],
    AO: [],
    TI: [],
  },
  //* Warning : if managed by Function Block, fill array with "FB" !
  CMD: {
    NI: [
      [
        "Indicateur du niveau de température",
        "Déclenchement lorsque le niveau de température est atteint",
        "Activation d'un défaut",
      ],
    ],
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
