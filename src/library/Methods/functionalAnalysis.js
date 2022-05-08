import {
  Table,
  TableRow,
  TableCell,
  ShadingType,
  Paragraph,
  TextRun,
  convertInchesToTwip,
  UnderlineType,
  HeadingLevel,
  AlignmentType,
  LevelFormat,
  WidthType,
  ImageRun,
} from "docx";
import { Packer, Document } from "docx";
import { saveAs } from "file-saver";
import { Buffer } from "buffer";

const TITRE1 = "4B6FEA";
const TITRE2 = "4BA9EA";
const TITRE3 = "4BEAC3";
const white = "FFFFFF";
const darkGrey = "2F2F2F";
const grey = "878787";
const black = "000000";
const core = [];

export function functionalAnalysis(obj = {}) {
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
    new Paragraph({
      text: "============================================================",
      style: "STD",
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
