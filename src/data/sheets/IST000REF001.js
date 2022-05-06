export const productSheet = {
  category: "Instrumentations",
  ID: "IST000REF001",
  name: "Transmetteur de pression",
  infos:
    "Un transmetteur de pression est un système qui convertit une pression mécanique en une valeur électrique",
  Labels: [
    "PIT = Transmetteur à indicateur de pression",
    "PT = Transmetteur de pression",
    "PDT = Transmetteur de pression différentielle",
  ],
  IO: { DI: 0, DO: 0, AI: 1, AO: 0, AIt: 0 },
  // a voir...
  Text: {
    DI: "",
    DO: "",
    AI: "Transmetteur de pression 4-20mA",
    AO: "",
    AIt: "",
  },
  AF: {
    DI: [[]],
    DO: [[]],
    AI: [
      [
        "Géré par bloc fonctionnel",
        "Géré par bloc fonctionnel",
        "Géré par bloc fonctionnel",
      ],
    ],
    AO: [[]],
    AIt: [[]],
  },
  FAULTS: [
    ["def_signal_[TAG]", "TMI", "Affichage d'un avertissement"],
    ["def_SL_[TAG]", "PMI", "Affichage d'un avertissement"],
    ["def_SLL_[TAG]", "PMA", "Retour à l'etat par défaut"],
    ["def_SH_[TAG]", "PMI", "Affichage d'un avertissement"],
    ["def_SHH_[TAG]", "PMA", "Retour à l'etat par défaut"],
  ],
  ConsumerName: false,
  FunctionBloc: "FB001",
};
