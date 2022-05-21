//+ Mandatory main patern !
export const productSheet = {
  NAME: "Centrale de mesure multifonction", //! Mandatory
  INFO: "Le DIRIS A-10 est un appareil de multimesure des grandeurs électriques pour les réseaux BT au format modulaire avec raccordement sur transformateurs de courant. Il permet de visualiser tous les paramètres électriques et d’exploiter les fonctions de mesure, de comptage des énergies et de communication.", //! Mandatory
  PINS: {},
  OPENAIR: false,
  PROTOCOLE: "Modbus RS-485",
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
    ARRAY: [],
    OVERALL: [],
  },
};
