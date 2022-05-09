import {
  Table,
  TableRow,
  TableCell,
  ShadingType,
  Paragraph,
  TextRun,
  convertInchesToTwip,
  UnderlineType,
  HorizontalPositionAlign,
  HorizontalPositionRelativeFrom,
  HeadingLevel,
  AlignmentType,
  LevelFormat,
  WidthType,
  ImageRun,
} from "docx";
import { Packer, Document } from "docx";
import { saveAs } from "file-saver";
import { Buffer } from "buffer";
// Images
import { CCOULEUR } from "../../data/images/CCOULEUR.js";
import { IRV } from "../../data/images/IRV.js";
import { IWV } from "../../data/images/IWV.js";
import { ALARMES } from "../../data/images/ALARMES.js";

const TITRE1 = "4B6FEA";
const TITRE2 = "4BA9EA";
const TITRE3 = "4BEAC3";
const white = "FFFFFF";
const darkGrey = "2F2F2F";
const grey = "878787";
const black = "000000";

export function functionalAnalysis(obj = {}) {
  const core = [];
  let FB001 = false;
  console.log("start");
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
  console.log("!!!");
  for (const elem of obj.ElementInfos) {
    console.log("plop");
    if (elem.Infos.FB === "FB001") {
      console.log("FB");
      FB001 = true;
    }
  }
  if (FB001) {
    console.log("FB001");
    core.push(
      new Paragraph({
        text: "Description du bloc de fonction FB001",
        heading: HeadingLevel.HEADING_1,
      }),
      new Paragraph({
        text: "Description générale",
        heading: HeadingLevel.HEADING_2,
      })
    );
  }
  //* Document structure
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
              before: 80,
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
    saveAs(blob, "afDraft.docx");
  });
  return false;
}
