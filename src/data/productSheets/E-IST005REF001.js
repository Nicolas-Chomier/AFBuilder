//+ Mandatory main patern !
export const productSheet = {
  NAME: "Thermostat", //! Mandatory
  INFO: "Lorsque la température mesurée est inférieure au point de consigne, le thermostat envoie un signal à l'automate", //! Mandatory
  PINS: {
    TS: "Niveau de l'interrupteur du transmetteur",
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
        "Indicateur du niveau de température",
        "Déclenchement lorsque le niveau de température est atteint",
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
