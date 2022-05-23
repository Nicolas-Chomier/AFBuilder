//+ Mandatory main patern !
export const productSheet = {
  NAME: "Détecteur de niveau d'eau", //! Mandatory
  INFO: "Un capteur de niveau est un dispositif électronique qui mesure la hauteur d'un matériau, généralement liquide, dans un réservoir.Il détecte de manière binaire, comme un interrupteur, si le niveau d'eau atteint ou non une certaine limite.", //! Mandatory
  PINS: {
    FQIT: "Capteur de niveau d'eau avec indicateur",
    FQT: "Capteur de niveau d'eau",
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
        "Indicateur de niveau d'eau",
        "Déclenchement lorsque le niveau d'eau atteint la limite haute/basse.",
        "Activation d'un défaut",
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
        "def_[TAG]",
        "PMA",
        "Lorsque le niveau d'eau atteint la limite très élevée à l'intérieur du réservoir.",
      ],
    ],
    OVERALL: [],
  },
};
