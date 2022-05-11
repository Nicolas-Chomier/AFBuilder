//+ Mandatory main patern !
export const productSheet = {
  NAME: "",
  INFO: "",
  PINS: {
    PIT: "",
    PT: "",
    PDT: "",
  },
  OPENAIR: false,
  PROTOCOLE: false,
  FB: false, //* If true => "STRING" ex: "FB001"
  IO: { NI: 0, NO: 0, AI: 0, AO: 0, TI: 0 },
  TEXTS: {
    DI: [""],
    DO: [""],
    AI: [""],
    AO: [""],
    AIt: [""],
  },
  //* Warning : if managed by Function Block, fill array with "FB" !
  CMD: {
    DI: [[]],
    DO: [[]],
    AI: [[]],
    AO: [[]],
    AIt: [[]],
  },
  FAULTS: {
    ARRAY: [[]],
    OVERALL: [[]],
  },
};
