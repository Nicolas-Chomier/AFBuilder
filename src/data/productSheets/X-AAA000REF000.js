//+ Mandatory main patern !
export const productSheet = {
  NAME: "", //! Mandatory
  INFO: "", //! Mandatory
  PINS: {
    XXX: "XXX",
  },
  OPENAIR: false,
  PROTOCOLE: false,
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
    ARRAY: [[]],
    //! Write here Function bloc faults or reccurent faults
    OVERALL: [[]],
  },
};
