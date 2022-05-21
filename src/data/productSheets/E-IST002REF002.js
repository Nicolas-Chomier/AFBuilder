//+ Mandatory main patern !
export const productSheet = {
  NAME: "Transmetteur de débit à impulsion", //! Mandatory
  INFO: "Les débitmètres magnétiques se composent d'un émetteur et d'un capteur qui fonctionnent ensemble pour mesurer le débit. Le capteur du débitmètre magnétique est placé en ligne et mesure une tension induite générée par le fluide lorsqu'il passe dans un tuyau.Celui-ci peut fournir une information numérique en plus.", //! Mandatory
  PINS: {
    FT: "Transmetteur de débit",
  },
  OPENAIR: false,
  PROTOCOLE: false,
  FB: "FB001", //* If true => "STRING" ex: "FB001"
  IO: { NI: 1, NO: 0, AI: 1, AO: 0, TI: 0 },
  TEXTS: {
    NI: ["Envoi d'un signal numérique (pulse)"],
    NO: [],
    AI: ["Transmetteur de pression 4-20mA"],
    AO: [],
    TI: [],
  },
  //* Warning : if managed by Function Block, fill array with "FB" !
  CMD: {
    NI: [
      [
        "Indicateur du volume du débit par l'envoi d'une impulsion",
        "Impulsion par unité de volume définie dans les paramètres de l'élément",
        "Incrémentation du compteur",
      ],
    ],
    NO: [[]],
    AI: [["FB"]],
    AO: [[]],
    TI: [[]],
  },
  FAULTS: {
    ARRAY: [
      [
        "def_[TAG]",
        "PMI",
        "Lorsque la somme des impulsions atteint le seuil limite haut",
      ],
      ["FB"],
    ],
    OVERALL: [
      ["def_signal_[TAG]", "TMI", "Affichage d'un avertissement"],
      ["def_SL_[TAG]", "PMI", "Affichage d'un avertissement"],
      ["def_SLL_[TAG]", "PMA", "Retour à l'etat par défaut"],
      ["def_SH_[TAG]", "PMI", "Affichage d'un avertissement"],
      ["def_SHH_[TAG]", "PMA", "Retour à l'etat par défaut"],
    ],
  },
};
