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

export function functionalAnalysis(obj = {}) {
  //console.log("OBJECT", obj);
  const blue = "008BF1";
  const green = "17D417";
  const yellow = "F8E100";
  const white = "FFFFFF";
  const darkGrey = "2F2F2F";
  const grey = "878787";
  const black = "000000";
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
            color: blue,
            font: "Calibri",
            /* underline: {}, */
          },
          paragraph: {
            spacing: {
              before: 10,
              after: 120,
            },
          },
        },
        heading2: {
          run: {
            size: 28,
            bold: false,
            italics: false,
            color: green,
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
        heading3: {
          run: {
            size: 24,
            bold: false,
            italics: false,
            color: yellow,
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
            color: "#FF0000",
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
    sections: [
      {
        children: [
          //+ Chapter 1:
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
            text: "Documents de réferences",
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
                        style: "STD",
                      }),
                    ],
                  }),
                  new TableCell({
                    children: [
                      new Paragraph({
                        text: "",
                        style: "STD",
                      }),
                    ],
                  }),
                  new TableCell({
                    children: [
                      new Paragraph({
                        text: "",
                        style: "STD",
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
                        style: "STD",
                      }),
                    ],
                  }),
                  new TableCell({
                    children: [
                      new Paragraph({
                        text: `${obj.ScreenInfos.HMI.Ref}-SPECIFICATIONS`,
                        style: "STD",
                      }),
                    ],
                  }),
                  new TableCell({
                    children: [
                      new Paragraph({
                        text: "NONE",
                        style: "STD",
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
                        style: "STD",
                      }),
                    ],
                  }),
                  new TableCell({
                    children: [
                      new Paragraph({
                        text: `${obj.ScreenInfos.PLC.Ref}-SPECIFICATIONS`,
                        style: "STD",
                      }),
                    ],
                  }),
                  new TableCell({
                    children: [
                      new Paragraph({
                        text: "NONE",
                        style: "STD",
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
                        style: "STD",
                      }),
                    ],
                  }),
                  new TableCell({
                    children: [
                      new Paragraph({
                        text: "",
                        style: "STD",
                      }),
                    ],
                  }),
                  new TableCell({
                    children: [
                      new Paragraph({
                        text: "",
                        style: "STD",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          //+ Chapter 2:
        ],
      },
    ],
  });
  // Print document
  Packer.toBlob(doc).then((blob) => {
    saveAs(blob, "afDraft.docx");
  });
  return false;
}
