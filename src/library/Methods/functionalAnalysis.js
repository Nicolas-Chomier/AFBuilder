import {
  Table,
  TableRow,
  TableCell,
  ShadingType,
  Paragraph,
  TextRun,
  HeadingLevel,
  AlignmentType,
  LevelFormat,
  WidthType,
  ImageRun,
} from "docx";
import { Packer, Document } from "docx";
import { saveAs } from "file-saver";
import { Buffer } from "buffer";
//
import { generateCmdTable } from "./generateCmdTable";
import { generateFaultTable } from "./generateFaultTable";
// Images
import { CCOULEUR } from "../../data/images/CCOULEUR.js";
import { IRV } from "../../data/images/IRV.js";
import { IWV } from "../../data/images/IWV.js";
import { ALARMES } from "../../data/images/ALARMES.js";

//
const TITRE1 = "4B6FEA";
const TITRE2 = "4BA9EA";
const TITRE3 = "4BEAC3";
const white = "FFFFFF";
const darkGrey = "2F2F2F";
const grey = "878787";
const black = "000000";

export async function functionalAnalysis(obj = {}) {
  const core = [];
  let FB001 = false;
  //+ Chapter 1:
  core.push(
    new Paragraph({
      text: "Présentation du document",
      heading: HeadingLevel.HEADING_1,
    }),
    new Paragraph({
      children: [
        new TextRun({
          text: "Ce document définit les éléments et les principes de fonctionnement de l'ensemble du lot automatisme pour le projet :",
        }),
        new TextRun({
          text: ` ${obj.ProjectInfos.ProjectName}.`,
          bold: true,
        }),
      ],
      style: "STD",
    }),
    new Paragraph({
      text: "Documents de références",
      heading: HeadingLevel.HEADING_2,
    }),
    new Paragraph({
      text: "Cette analyse fonctionnelle est réalisée sur la base des documents suivants.",
      style: "STD",
    }),
    new Table({
      width: {
        size: 100,
        type: WidthType.PERCENTAGE,
      },
      rows: [
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph({
                  text: "Document de référence",
                  style: "GAL1",
                }),
              ],
              shading: {
                type: ShadingType.SOLID,
                color: darkGrey,
              },
              columnSpan: 3,
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph({
                  text: "Titre",
                  style: "GAL2",
                }),
              ],
              shading: {
                type: ShadingType.SOLID,
                color: grey,
              },
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: "Label",
                  style: "GAL2",
                }),
              ],
              shading: {
                type: ShadingType.SOLID,
                color: grey,
              },
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: "Version",
                  style: "GAL2",
                }),
              ],
              shading: {
                type: ShadingType.SOLID,
                color: grey,
              },
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph({
                  text: "Analyse Fonctionnelle Process",
                  style: "GAL3",
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: "",
                  style: "GAL3",
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: "",
                  style: "GAL3",
                }),
              ],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph({
                  text: "Spécifications technique IHM",
                  style: "GAL3",
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: `${obj.ScreenInfos.HMI.Ref}-SPECIFICATIONS`,
                  style: "GAL3",
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: "NONE",
                  style: "GAL3",
                }),
              ],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph({
                  text: "Spécifications technique CPU",
                  style: "GAL3",
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: `${obj.ScreenInfos.PLC.Ref}-SPECIFICATIONS`,
                  style: "GAL3",
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: "NONE",
                  style: "GAL3",
                }),
              ],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph({
                  text: "",
                  style: "GAL3",
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: "",
                  style: "GAL3",
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: "",
                  style: "GAL3",
                }),
              ],
            }),
          ],
        }),
      ],
    })
  );
  //+ Chapter 2:
  core.push(
    new Paragraph({
      text: "Architecture de l'installation",
      heading: HeadingLevel.HEADING_1,
    }),
    new Paragraph({
      text: "IHM, CPU & CANOpen",
      heading: HeadingLevel.HEADING_2,
    }),
    new Paragraph({
      children: [
        new TextRun({
          text: `Cette installation est gérée par un dispositif de marque ${obj.ScreenInfos.BRAND}, installé dans l'armoire de commande sous la référence: `,
        }),
        new TextRun({
          text: "REF ARMOIRE DE COMMANDE",
          bold: true,
        }),
        new TextRun({
          break: 2,
          text: "L'ensemble est composé d'un: ",
        }),
      ],
      style: "STD",
    }),
    new Paragraph({
      text: "Interface Homme Machine (IHM), comprenant les éléments suivants:",
      heading: HeadingLevel.HEADING_3,
    })
  );
  obj.ScreenInfos.HMI.Devices.map((x) =>
    core.push(
      new Paragraph({
        text: x,
        bullet: {
          level: 0,
        },
        style: "STD",
      })
    )
  );
  core.push(
    new Paragraph({
      text: "Contrôleur logique programmable (PLC), comprenant les éléments suivants:",
      heading: HeadingLevel.HEADING_3,
    })
  );
  obj.ScreenInfos.PLC.Devices.map((x) =>
    core.push(
      new Paragraph({
        text: x,
        bullet: {
          level: 0,
        },
        style: "STD",
      })
    )
  );
  core.push(
    new Paragraph({
      text: "Carte Maître intégré pour protocole CAN-OPEN, avec le profile suivant:",
      heading: HeadingLevel.HEADING_3,
    })
  );
  obj.ScreenInfos.CAN.Devices.map((x) =>
    core.push(
      new Paragraph({
        text: x,
        bullet: {
          level: 0,
        },
        style: "STD",
      })
    )
  );
  core.push(
    new Paragraph({
      text: "",
    }),
    new Paragraph({
      text: `La communication avec les différents éléments du projet s'effectue grâce à des modules d'entrées/sorties ${obj.ScreenInfos.CIO}, sous le protocole de communication "CANOpen".`,
      style: "STD",
    }),
    new Paragraph({
      text: "Protocole de communication",
      heading: HeadingLevel.HEADING_2,
    }),
    new Paragraph({
      text: "Dans cette installation, différent protocole de communication peuvent être utilisés:",
      style: "STD",
    })
  );
  obj.ElementInfos.map((elem) => {
    if (elem.Infos.PROTOCOLE) {
      return core.push(
        new Paragraph({
          children: [
            new TextRun({
              text: "L'élément ",
            }),
            new TextRun({
              text: elem.tag,
              bold: true,
            }),
            new TextRun({
              text: " utilise le protocole: ",
            }),
            new TextRun({
              text: elem.Infos.PROTOCOLE,
              bold: true,
            }),
          ],
          bullet: {
            level: 0,
          },
          style: "STD",
        })
      );
    } else {
      const result = new Paragraph({
        text: "Aucun autre protocole de communication est utilisé dans ce projet.",
        style: "STD",
      });
      return result;
    }
  });
  //+ Chapter 3:
  core.push(
    new Paragraph({
      text: "Architecture réseaux",
      heading: HeadingLevel.HEADING_1,
    }),
    new Paragraph({
      text: "NONE",
      style: "STD",
    })
  );
  //+ Chapter 4:
  core.push(
    new Paragraph({
      text: "Configuration et information",
      heading: HeadingLevel.HEADING_1,
    }),
    new Paragraph({
      text: "L'ensemble PLC & IHM est configuré comme suit:",
      style: "STD",
    }),
    new Paragraph({
      text: "Information logiciel ",
      heading: HeadingLevel.HEADING_2,
    }),
    new Paragraph({
      children: [
        new TextRun({
          text: "La programmation du PLC est effectuée avec le logiciel: ",
        }),
        new TextRun({
          text: "GP-Pro EX 4.09 SP1",
          bold: true,
        }),
        new TextRun({
          text: "Version du produit : ",
          break: 1,
        }),
        new TextRun({
          text: "V4.09.350 (dernière version)",
          bold: true,
        }),
        new TextRun({
          text: "Date de version: ",
          break: 1,
        }),
        new TextRun({
          text: "01/02/2022",
          bold: true,
        }),
      ],
      style: "STD",
    }),
    new Paragraph({
      text: "Information IHM",
      heading: HeadingLevel.HEADING_2,
    }),
    new Paragraph({
      children: [
        new TextRun({
          text: `IHM ${obj.ScreenInfos.HMI.Denomination}, référence: `,
        }),
        new TextRun({
          text: `${obj.ScreenInfos.HMI.Ref}`,
          bold: true,
        }),
      ],
      style: "STD",
    }),
    new Paragraph({
      text: "Mots de passes et niveaux d'accès",
      heading: HeadingLevel.HEADING_3,
    }),
    new Table({
      width: {
        size: 100,
        type: WidthType.PERCENTAGE,
      },
      rows: [
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph({
                  text: "Tableau des niveaux d'accès",
                  style: "GAL1",
                }),
              ],
              shading: {
                type: ShadingType.SOLID,
                color: darkGrey,
              },
              columnSpan: 4,
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph({
                  text: "Nom",
                  style: "GAL2",
                }),
              ],
              shading: {
                type: ShadingType.SOLID,
                color: grey,
              },
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: "Niveau",
                  style: "GAL2",
                }),
              ],
              shading: {
                type: ShadingType.SOLID,
                color: grey,
              },
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: "Permissions",
                  style: "GAL2",
                }),
              ],
              shading: {
                type: ShadingType.SOLID,
                color: grey,
              },
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: "Mot de passe",
                  style: "GAL2",
                }),
              ],
              shading: {
                type: ShadingType.SOLID,
                color: grey,
              },
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph({
                  text: "Utilisateur",
                  style: "GAL3",
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: "0",
                  style: "GAL3",
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: "Visualisation",
                  style: "GAL3",
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: "0",
                  style: "GAL3",
                }),
              ],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph({
                  text: "Opérateur",
                  style: "GAL3",
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: "1",
                  style: "GAL3",
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: "Marche / Arrêt de l'installation et acquittement des alarmes",
                  style: "GAL3",
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: "1",
                  style: "GAL3",
                }),
              ],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph({
                  text: "Administrateur",
                  style: "GAL3",
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: "2",
                  style: "GAL3",
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: "Marche / Arrêt de l'installation, acquittement des alarmes, paramétrage de l'installation, accès à la vue du système.",
                  style: "GAL3",
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: "2",
                  style: "GAL3",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    new Paragraph({
      text: "Information PLC",
      heading: HeadingLevel.HEADING_2,
    }),
    new Paragraph({
      children: [
        new TextRun({
          text: `PLC ${obj.ScreenInfos.PLC.Denomination}, référence: `,
        }),
        new TextRun({
          text: `${obj.ScreenInfos.PLC.Ref}`,
          bold: true,
        }),
      ],
      style: "STD",
    }),
    new Paragraph({
      text: "Agencement modules I/O",
      heading: HeadingLevel.HEADING_3,
    }),
    new Paragraph({
      text: "============================================================",
      style: "STD",
    })
  );
  //+ Chapter 5:
  core.push(
    new Paragraph({
      text: "Abréviations",
      heading: HeadingLevel.HEADING_1,
    }),
    new Table({
      width: {
        size: 100,
        type: WidthType.PERCENTAGE,
      },
      rows: [
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph({
                  text: "Tableau des abréviations",
                  style: "GAL1",
                }),
              ],
              shading: {
                type: ShadingType.SOLID,
                color: darkGrey,
              },
              columnSpan: 3,
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph({
                  text: "Abréviations",
                  style: "GAL2",
                }),
              ],
              shading: {
                type: ShadingType.SOLID,
                color: grey,
              },
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: "Nom complet",
                  style: "GAL2",
                }),
              ],
              shading: {
                type: ShadingType.SOLID,
                color: grey,
              },
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: "Déscription",
                  style: "GAL2",
                }),
              ],
              shading: {
                type: ShadingType.SOLID,
                color: grey,
              },
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph({
                  text: "ATMP",
                  style: "GAL3",
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: "Atmospheric Pressure",
                  style: "GAL3",
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: "1 Bar",
                  style: "GAL3",
                }),
              ],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph({
                  text: "MES",
                  style: "GAL3",
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: "Message",
                  style: "GAL3",
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: "Message / information",
                  style: "GAL3",
                }),
              ],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph({
                  text: "TMA",
                  style: "GAL3",
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: "Technical Major Fault",
                  style: "GAL3",
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: "Défaut technique entrainant l'arrêt de l'installation",
                  style: "GAL3",
                }),
              ],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph({
                  text: "TMI",
                  style: "GAL3",
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: "Technical Minor Fault",
                  style: "GAL3",
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: "Défaut technique sans arrêt de l'installation",
                  style: "GAL3",
                }),
              ],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph({
                  text: "PMA",
                  style: "GAL3",
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: "Process Major Fault",
                  style: "GAL3",
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: "Dépassement de seuil dans le processus avec un impact sur la qualité du produit",
                  style: "GAL3",
                }),
              ],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph({
                  text: "PMI",
                  style: "GAL3",
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: "Process Minor Fault",
                  style: "GAL3",
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: "Dépassement de seuil dans le processus sans impact sur la qualité du produit",
                  style: "GAL3",
                }),
              ],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph({
                  text: "DI",
                  style: "GAL3",
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: "Digital Input",
                  style: "GAL3",
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: "Input 1 or 0",
                  style: "GAL3",
                }),
              ],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph({
                  text: "DO",
                  style: "GAL3",
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: "Digital Output",
                  style: "GAL3",
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: "Output 1 or 0",
                  style: "GAL3",
                }),
              ],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph({
                  text: "AI",
                  style: "GAL3",
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: "Analog Input",
                  style: "GAL3",
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: "Input 4-20mA (for example)",
                  style: "GAL3",
                }),
              ],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph({
                  text: "AI(T°)",
                  style: "GAL3",
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: "Analog Input (T°)",
                  style: "GAL3",
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: "Special Input for PT100 / 1000 or thermocouple",
                  style: "GAL3",
                }),
              ],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph({
                  text: "AO",
                  style: "GAL3",
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: "Analog Output",
                  style: "GAL3",
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: "Output 4-20mA (for example)",
                  style: "GAL3",
                }),
              ],
            }),
          ],
        }),
      ],
    })
  );
  //+ Chapter 6:
  core.push(
    new Paragraph({
      text: "Code couleurs",
      heading: HeadingLevel.HEADING_1,
    }),
    new Paragraph({
      text: "Résumé / vue IHM",
      heading: HeadingLevel.HEADING_2,
    }),
    new Paragraph({
      children: [
        new ImageRun({
          data: Buffer.from(CCOULEUR, "base64"),
          transformation: {
            width: 450,
            height: 310,
          },
        }),
      ],
    }),
    new Paragraph({
      text: "Affichage numérique",
      heading: HeadingLevel.HEADING_2,
    }),
    new Paragraph({
      children: [
        new TextRun({
          text: "Différents types de variables analogiques sont présents sur les différentes vues.",
        }),
        new TextRun({
          text: "Pour certaines, il est seulement possible de visualiser la valeur, pour d'autres, il est possible d'entrer une valeur.",
          break: 1,
        }),
        new TextRun({
          text: "Valeur en lecture et en écriture:",
          bold: true,
          break: 1,
        }),
      ],
      style: "STD",
    }),
    new Paragraph({
      children: [
        new ImageRun({
          data: Buffer.from(IWV, "base64"),
          transformation: {
            width: 60,
            height: 30,
          },
        }),
      ],
    }),
    new Paragraph({
      children: [
        new TextRun({
          text: "Valeur en lecture seule:",
          bold: true,
        }),
      ],
      style: "STD",
    }),
    new Paragraph({
      children: [
        new ImageRun({
          data: Buffer.from(IRV, "base64"),
          transformation: {
            width: 60,
            height: 30,
          },
        }),
      ],
    }),
    new Paragraph({
      text: "Alarmes et défauts",
      heading: HeadingLevel.HEADING_2,
    }),
    new Paragraph({
      children: [
        new ImageRun({
          data: Buffer.from(ALARMES, "base64"),
          transformation: {
            width: 450,
            height: 310,
          },
        }),
      ],
    }),
    new Paragraph({
      text: "Explications",
      heading: HeadingLevel.HEADING_3,
    }),
    new Paragraph({
      children: [
        new TextRun({
          text: "Les alarmes qui ont disparu sont indiquées en blanc.",
        }),
        new TextRun({
          text: "La date et l'heure de déclenchement de l'alarme sont indiquées à gauche.",
          break: 1,
        }),
        new TextRun({
          text: "Le nombre de fois que l'alarme a été déclenchée est indiqué à droite du texte.",
          break: 1,
        }),
        new TextRun({
          text: "La suppression d'une alarme disparue se fait en sélectionnant la ligne concernée puis en appuyant sur le bouton 'Supprimer' (niveau 1 requis).",
          break: 1,
        }),
        new TextRun({
          text: "Pour supprimer toutes les alarmes disparues, sélectionnez la table des alarmes et appuyez sur le bouton 'Supprimer tout' (niveau 1 requis).",
          break: 1,
        }),
      ],
      style: "STD",
    })
  );
  //+ Chapter 7:
  for (const elem of obj.ElementInfos) {
    if (elem.Infos.FB === "FB001") {
      FB001 = true;
    }
  }
  if (FB001) {
    const b64Img = await import("../../data/images/VUEFB001.js");
    core.push(
      new Paragraph({
        text: "Description du bloc de fonction FB001",
        heading: HeadingLevel.HEADING_1,
      }),
      new Paragraph({
        text: "Description générale",
        heading: HeadingLevel.HEADING_2,
      }),
      new Paragraph({
        text: "Il s'agit d'une installation entièrement personnalisée, cependant certains éléments sont identiques, pour eux nous utiliserons la méthode de programmation par blocs fonctionnels (FB).L'instrumentation sera gérée par des blocs standardisés, afin d'assurer une homogénéisation de la programmation. Ce chapitre présente leurs fonctionnalités.",
        style: "STD",
      }),
      new Paragraph({
        text: "Bloc de fonctions 'Mesures analogiques'",
        heading: HeadingLevel.HEADING_2,
      }),
      new Paragraph({
        text: "Le bloc de fonction FB001 est utilisé pour: ",
        style: "STD",
      }),
      new Paragraph({
        text: "Afficher la valeur mesurée à partir d'un signal électrique (4-20mA ou 0-10V).",
        bullet: {
          level: 0,
        },
        style: "STD",
      }),
      new Paragraph({
        text: "Définir l'échelle de la valeur mesurée.",
        bullet: {
          level: 0,
        },
        style: "STD",
      }),
      new Paragraph({
        text: "Filtrer la valeur mesurée.",
        bullet: {
          level: 0,
        },
        style: "STD",
      }),
      new Paragraph({
        text: "Ajouter un décalage (offset) qui peut corriger une dérivation potentielle.",
        bullet: {
          level: 0,
        },
        style: "STD",
      }),
      new Paragraph({
        text: "Forcer une valeur à effectuer des tests.",
        bullet: {
          level: 0,
        },
        style: "STD",
      }),
      new Paragraph({
        text: "Gérer l'affichage et les échelles des courbes.",
        bullet: {
          level: 0,
        },
        style: "STD",
      }),
      new Paragraph({
        text: "Détecter une panne du capteur.",
        bullet: {
          level: 0,
        },
        style: "STD",
      }),
      new Paragraph({
        text: "Mémoriser 4 seuils d'alarmes et un défaut de capteur.",
        bullet: {
          level: 0,
        },
        style: "STD",
      }),
      new Paragraph({
        text: "La gestion de 4 seuils d'alarmes, chaque seuil peut être activé ou désactivé via le panneau (ces seuils sont utilisés pour le diagnostic, ils ne sont pas utilisés pour le processus, toutes les alarmes sont temporisées).",
        bullet: {
          level: 0,
        },
        style: "STD",
      }),
      new Paragraph({
        text: "Récupérer les paramètres d'usine.",
        bullet: {
          level: 0,
        },
        style: "STD",
      }),
      new Paragraph({
        text: "Gestion et description des défauts",
        heading: HeadingLevel.HEADING_3,
      }),
      new Table({
        width: {
          size: 100,
          type: WidthType.PERCENTAGE,
        },
        rows: [
          new TableRow({
            children: [
              new TableCell({
                children: [
                  new Paragraph({
                    text: "Tableau des défauts",
                    style: "GAL1",
                  }),
                ],
                shading: {
                  type: ShadingType.SOLID,
                  color: darkGrey,
                },
                columnSpan: 4,
              }),
            ],
          }),
          new TableRow({
            children: [
              new TableCell({
                children: [
                  new Paragraph({
                    text: "Label",
                    style: "GAL2",
                  }),
                ],
                shading: {
                  type: ShadingType.SOLID,
                  color: grey,
                },
              }),
              new TableCell({
                children: [
                  new Paragraph({
                    text: "Désignation",
                    style: "GAL2",
                  }),
                ],
                shading: {
                  type: ShadingType.SOLID,
                  color: grey,
                },
              }),
              new TableCell({
                children: [
                  new Paragraph({
                    text: "Type",
                    style: "GAL2",
                  }),
                ],
                shading: {
                  type: ShadingType.SOLID,
                  color: grey,
                },
              }),
              new TableCell({
                children: [
                  new Paragraph({
                    text: "Effet",
                    style: "GAL2",
                  }),
                ],
                shading: {
                  type: ShadingType.SOLID,
                  color: grey,
                },
              }),
            ],
          }),
          new TableRow({
            children: [
              new TableCell({
                children: [
                  new Paragraph({
                    text: "def_signal_[TAG]",
                    style: "GAL3",
                  }),
                ],
              }),
              new TableCell({
                children: [
                  new Paragraph({
                    text: "Défaut du capteur",
                    style: "GAL3",
                  }),
                ],
              }),
              new TableCell({
                children: [
                  new Paragraph({
                    text: "TMI",
                    style: "GAL3",
                  }),
                ],
              }),
              new TableCell({
                children: [
                  new Paragraph({
                    text: "Afficher un avertissement",
                    style: "GAL3",
                  }),
                ],
              }),
            ],
          }),
          new TableRow({
            children: [
              new TableCell({
                children: [
                  new Paragraph({
                    text: "def_SL_[TAG]",
                    style: "GAL3",
                  }),
                ],
              }),
              new TableCell({
                children: [
                  new Paragraph({
                    text: "Défaut seuil bas",
                    style: "GAL3",
                  }),
                ],
              }),
              new TableCell({
                children: [
                  new Paragraph({
                    text: "PMI",
                    style: "GAL3",
                  }),
                ],
              }),
              new TableCell({
                children: [
                  new Paragraph({
                    text: "Afficher un avertissement",
                    style: "GAL3",
                  }),
                ],
              }),
            ],
          }),
          new TableRow({
            children: [
              new TableCell({
                children: [
                  new Paragraph({
                    text: "def_SLL_[TAG]",
                    style: "GAL3",
                  }),
                ],
              }),
              new TableCell({
                children: [
                  new Paragraph({
                    text: "Défaut seuil très bas",
                    style: "GAL3",
                  }),
                ],
              }),
              new TableCell({
                children: [
                  new Paragraph({
                    text: "PMA",
                    style: "GAL3",
                  }),
                ],
              }),
              new TableCell({
                children: [
                  new Paragraph({
                    text: "Ramener l'installation à l'état par défaut",
                    style: "GAL3",
                  }),
                ],
              }),
            ],
          }),
          new TableRow({
            children: [
              new TableCell({
                children: [
                  new Paragraph({
                    text: "def_SH_[TAG]",
                    style: "GAL3",
                  }),
                ],
              }),
              new TableCell({
                children: [
                  new Paragraph({
                    text: "Défaut seuil haut",
                    style: "GAL3",
                  }),
                ],
              }),
              new TableCell({
                children: [
                  new Paragraph({
                    text: "PMI",
                    style: "GAL3",
                  }),
                ],
              }),
              new TableCell({
                children: [
                  new Paragraph({
                    text: "Afficher un avertissement",
                    style: "GAL3",
                  }),
                ],
              }),
            ],
          }),
          new TableRow({
            children: [
              new TableCell({
                children: [
                  new Paragraph({
                    text: "def_SHH_[TAG]",
                    style: "GAL3",
                  }),
                ],
              }),
              new TableCell({
                children: [
                  new Paragraph({
                    text: "Défaut seuil très haut",
                    style: "GAL3",
                  }),
                ],
              }),
              new TableCell({
                children: [
                  new Paragraph({
                    text: "PMA",
                    style: "GAL3",
                  }),
                ],
              }),
              new TableCell({
                children: [
                  new Paragraph({
                    text: "Ramener l'installation à l'état par défaut",
                    style: "GAL3",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      new Paragraph({
        text: "Vue IHM FB001",
        heading: HeadingLevel.HEADING_3,
      }),
      new Paragraph({
        children: [
          new ImageRun({
            data: Buffer.from(b64Img.VUEFB001, "base64"),
            transformation: {
              width: 450,
              height: 310,
            },
          }),
        ],
      }),
      new Paragraph({
        text: "Description",
        heading: HeadingLevel.HEADING_3,
      }),
      new Paragraph({
        children: [
          new TextRun({
            text: "N°1:  ",
            bold: true,
          }),
          new TextRun({
            text: " Bouton poussoir d'activation du défaut du capteur [TAG]",
          }),
          new TextRun({
            text: "N°2:  ",
            break: 1,
            bold: true,
          }),
          new TextRun({
            text: " Affichage de la mesure [TAG]",
          }),
          new TextRun({
            text: "N°3:  ",
            break: 1,
            bold: true,
          }),
          new TextRun({
            text: " Réglage de la temporisation avant défaut [TAG]",
          }),
          new TextRun({
            text: "N°4:  ",
            break: 1,
            bold: true,
          }),
          new TextRun({
            text: " Mémorisation du défaut [TAG]",
          }),
          new TextRun({
            text: "N°5:  ",
            break: 1,
            bold: true,
          }),
          new TextRun({
            text: " Indication lumineuse du défaut [TAG]",
          }),
          new TextRun({
            text: "N°6:  ",
            break: 1,
            bold: true,
          }),
          new TextRun({
            text: " Bouton d'activation de forçage [TAG]",
          }),
          new TextRun({
            text: "N°7:  ",
            break: 1,
            bold: true,
          }),
          new TextRun({
            text: " Indication de la valeur forcée [TAG]",
          }),
          new TextRun({
            text: "N°8:  ",
            break: 1,
            bold: true,
          }),
          new TextRun({
            text: " Indicateur valeur forcée [TAG]",
          }),
          new TextRun({
            text: "N°9:  ",
            break: 1,
            bold: true,
          }),
          new TextRun({
            text: " Activation défaut SHH [TAG]",
          }),
          new TextRun({
            text: "N°10:  ",
            break: 1,
            bold: true,
          }),
          new TextRun({
            text: " Réglage SHH [TAG]",
          }),
          new TextRun({
            text: "N°11:  ",
            break: 1,
            bold: true,
          }),
          new TextRun({
            text: " Temporisation du défaut de signal SHH [TAG]",
          }),
          new TextRun({
            text: "N°12:  ",
            break: 1,
            bold: true,
          }),
          new TextRun({
            text: " Mémorisation du défaut SHH [TAG]",
          }),
          new TextRun({
            text: "N°13:  ",
            break: 1,
            bold: true,
          }),
          new TextRun({
            text: " Indication lumineuse SHH [TAG]",
          }),
          new TextRun({
            text: "N°14:  ",
            break: 1,
            bold: true,
          }),
          new TextRun({
            text: " Activation défaut SH [TAG]",
          }),
          new TextRun({
            text: "N°15:  ",
            break: 1,
            bold: true,
          }),
          new TextRun({
            text: " Réglage SH [TAG]",
          }),
          new TextRun({
            text: "N°16:  ",
            break: 1,
            bold: true,
          }),
          new TextRun({
            text: " Temporisation du défaut de signal SH [TAG]",
          }),
          new TextRun({
            text: "N°17:  ",
            break: 1,
            bold: true,
          }),
          new TextRun({
            text: " Mémorisation du défaut SH [TAG]",
          }),
          new TextRun({
            text: "N°18:  ",
            break: 1,
            bold: true,
          }),
          new TextRun({
            text: " Indication lumineuse SH [TAG]",
          }),
          new TextRun({
            text: "N°19:  ",
            break: 1,
            bold: true,
          }),
          new TextRun({
            text: " Activation défaut SL [TAG]",
          }),
          new TextRun({
            text: "N°20:  ",
            break: 1,
            bold: true,
          }),
          new TextRun({
            text: " Réglage SL [TAG]",
          }),
          new TextRun({
            text: "N°21:  ",
            break: 1,
            bold: true,
          }),
          new TextRun({
            text: " Temporisation du défaut de signal SL [TAG]",
          }),
          new TextRun({
            text: "N°22:  ",
            break: 1,
            bold: true,
          }),
          new TextRun({
            text: " Mémorisation du défaut SL [TAG]",
          }),
          new TextRun({
            text: "N°23:  ",
            break: 1,
            bold: true,
          }),
          new TextRun({
            text: " Indication lumineuse SL [TAG]",
          }),
          new TextRun({
            text: "N°24:  ",
            break: 1,
            bold: true,
          }),
          new TextRun({
            text: " Activation défaut SLL [TAG]",
          }),
          new TextRun({
            text: "N°25:  ",
            break: 1,
            bold: true,
          }),
          new TextRun({
            text: " Réglage SLL [TAG]",
          }),
          new TextRun({
            text: "N°26:  ",
            break: 1,
            bold: true,
          }),
          new TextRun({
            text: " Temporisation du défaut de signal SLL [TAG]",
          }),
          new TextRun({
            text: "N°27:  ",
            break: 1,
            bold: true,
          }),
          new TextRun({
            text: " Mémorisation du défaut SLL [TAG]",
          }),
          new TextRun({
            text: "N°28:  ",
            break: 1,
            bold: true,
          }),
          new TextRun({
            text: " Indication lumineuse SLL [TAG]",
          }),
          new TextRun({
            text: "N°29:  ",
            break: 1,
            bold: true,
          }),
          new TextRun({
            text: " Réglages de l'échelle MAX [TAG]",
          }),
          new TextRun({
            text: "N°30:  ",
            break: 1,
            bold: true,
          }),
          new TextRun({
            text: " Réglages de l'échelle MIN [TAG]",
          }),
        ],
        style: "STD",
      })
    );
  }
  //+ Chapter 8:
  core.push(
    new Paragraph({
      text: "Fonctionnement de l'installation",
      heading: HeadingLevel.HEADING_1,
    }),
    new Paragraph({
      text: "==============================================================================================================================================================================",
      style: "STD",
    })
  );
  //+ Chapter 9:
  core.push(
    new Paragraph({
      text: "Définitions des objets",
      heading: HeadingLevel.HEADING_1,
    })
  );
  for (const elem of obj.ElementInfos) {
    // Get PINS table
    const pinsObj = elem.Infos.PINS;
    // Build CMD table
    const commandTable = generateCmdTable(elem);
    // Build FAULT table
    const faultTable = generateFaultTable(elem);
    // Push Title and introduction texte
    core.push(
      new Paragraph({
        text: `${elem.Infos.NAME}, Tag N° ${elem.tag}`,
        heading: HeadingLevel.HEADING_2,
      }),
      new Paragraph({
        text: "Informations",
        heading: HeadingLevel.HEADING_3,
      }),
      new Paragraph({
        text: `${elem.Infos.INFO}`,
        style: "STD",
      }),
      new Paragraph({
        text: "Tous les éléments dessinés sur le P&ID avec cette étiquette sont traités de la même manière :",
        style: "STD",
      })
    );
    // Push different label from PINS table
    for (const [key, value] of Object.entries(pinsObj)) {
      core.push(
        new Paragraph({
          children: [
            new TextRun({
              text: `<${key}>`,
              bold: true,
            }),
            new TextRun({
              text: " = ",
            }),
            new TextRun({
              text: value,
            }),
          ],
          style: "STD",
        })
      );
    }
    core.push(
      // Push titles and commande tables
      new Paragraph({
        text: "Commande(s)",
        heading: HeadingLevel.HEADING_3,
      }),
      commandTable,
      // Push titles and fault tables
      new Paragraph({
        text: "Défaut(s)",
        heading: HeadingLevel.HEADING_3,
      }),
      faultTable
    );
  }
  //+ Chapter 10:
  core.push(
    new Paragraph({
      text: "Gestion des alarmes",
      heading: HeadingLevel.HEADING_1,
    }),
    new Paragraph({
      text: "Introduction",
      heading: HeadingLevel.HEADING_2,
    }),
    new Paragraph({
      text: "La gestion de la sécurité partage quatre niveaux de défauts. Toutes les familles de défauts, lorsqu'elles sont déclenchées, déclenchent une synthèse et un message de défaut sur l'écran des alarmes de l'IHM. Une demande d'acquittement permet d'acquitter et de réinitialiser le défaut. Les alarmes sont classées en 2 catégories : ",
      style: "STD",
    }),
    new Paragraph({
      text: "Défaut mineur (TMI & PMI)",
      heading: HeadingLevel.HEADING_3,
    }),
    new Paragraph({
      text: "Alerte sans impact immédiat sur la capacité du système à assurer les fonctions principales du processus ou lorsque l'état d'une mesure s'approche des limites ultimes d'un processus. Sans traitement, une alarme mineure peut conduire à une alarme majeure du fait de l'évolution du phénomène. Ce type d'alarme peut être traité en quelques jours et permet d'éviter les alarmes majeures.",
      style: "STD",
    }),
    new Paragraph({
      text: "Défaut majeur (TMA & PMA)",
      heading: HeadingLevel.HEADING_3,
    }),
    new Paragraph({
      text: "État d'un équipement le rendant inopérant ou état d'une mesure ayant dépassé les spécifications ultimes d'un processus. Ce type d'alarme doit être traité comme une urgence afin d'éviter une perte de production et/ou un risque d'endommagement des équipements.",
      style: "STD",
    }),
    new Paragraph({
      text: "Liste des défauts",
      heading: HeadingLevel.HEADING_2,
    }),
    new Paragraph({
      text: "===========================================================================================================================================================",
      style: "STD",
    })
  );
  //* Document structure & style
  const doc = new Document({
    creator: "NCR",
    title: "Draft",
    description: "AF Draft",
    styles: {
      default: {
        heading1: {
          run: {
            size: 32,
            bold: false,
            italics: false,
            color: TITRE1,
            font: "Calibri",
            /* underline: {}, */
          },
          paragraph: {
            spacing: {
              before: 120,
              after: 120,
            },
          },
        },
        heading2: {
          run: {
            size: 24,
            bold: false,
            italics: false,
            color: TITRE2,
            font: "Calibri",
            /* underline: {}, */
          },
          paragraph: {
            spacing: {
              before: 100,
              after: 100,
            },
          },
        },
        heading3: {
          run: {
            size: 20,
            bold: false,
            italics: false,
            color: TITRE3,
            font: "Calibri",
            underline: {},
          },
          paragraph: {
            spacing: {
              before: 120,
              after: 120,
            },
          },
        },
        listParagraph: {
          run: {
            color: black,
          },
        },
      },
      paragraphStyles: [
        {
          // Grey array title (line 1)
          id: "GAL1",
          name: "GAL1",
          basedOn: "Normal",
          next: "Normal",
          run: {
            size: 20,
            bold: true,
            italics: false,
            color: white,
            font: "Calibri",
          },
          paragraph: {
            spacing: {
              line: 276,
            },
            indent: {
              left: 0,
            },
          },
        },
        {
          // Grey array line 2
          id: "GAL2",
          name: "GAL2",
          basedOn: "Normal",
          next: "Normal",
          run: {
            size: 18,
            bold: true,
            italics: false,
            color: black,
            font: "Calibri",
          },
          paragraph: {
            spacing: {
              line: 276,
            },
            indent: {
              left: 0,
            },
          },
        },
        {
          // Normal / Standard style
          id: "GAL3",
          name: "GAL3",
          basedOn: "Normal",
          next: "Normal",
          run: {
            size: 18,
            bold: false,
            italics: false,
            color: black,
            font: "Calibri",
          },
          paragraph: {
            spacing: {
              before: 10,
              after: 10,
              line: 276,
            },
            indent: {
              left: 0,
            },
          },
        },
        {
          // Normal / Standard style
          id: "BOLD",
          name: "BOLD",
          basedOn: "Normal",
          next: "Normal",
          run: {
            size: 18,
            bold: true,
            italics: false,
            color: black,
            font: "Calibri",
          },
          paragraph: {
            spacing: {
              before: 0,
              after: 0,
              line: 276,
            },
            indent: {
              left: 0,
            },
          },
        },
        {
          // Normal / Standard style only for table design
          id: "STDTABLE",
          name: "STDTABLE",
          basedOn: "Normal",
          next: "Normal",
          run: {
            size: 18,
            bold: false,
            italics: false,
            color: black,
            font: "Calibri",
          },
          paragraph: {
            spacing: {
              before: 0,
              after: 0,
              line: 276,
            },
            indent: {
              left: 0,
            },
          },
        },
        {
          // Normal / Standard style
          id: "STD",
          name: "STD",
          basedOn: "Normal",
          next: "Normal",
          run: {
            size: 18,
            bold: false,
            italics: false,
            color: black,
            font: "Calibri",
          },
          paragraph: {
            spacing: {
              before: 50,
              after: 0,
              line: 276,
            },
            indent: {
              left: 0,
            },
          },
        },
      ],
    },
    numbering: {
      config: [
        {
          reference: "my-crazy-numbering",
          levels: [
            {
              level: 0,
              format: LevelFormat.LOWER_LETTER,
              text: "%1)",
              alignment: AlignmentType.LEFT,
            },
          ],
        },
      ],
    },
    sections: [{ children: core }],
  });
  //* Print document
  Packer.toBlob(doc).then((blob) => {
    saveAs(blob, "Draft.docx");
  });
  return false;
}
