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
//
const CUSTOM = "67EAA3";
const SOFTCUSTOM = "A8EBC7";
const cmdPatern = [
  "Désignation",
  "Type de connexion au PLC",
  "Numéro",
  "Condition d'activation",
  "Fonction",
];
// Generate element command table
export function generateCmdTable(obj) {
  const tag = obj.tag;
  const data = obj.Infos.CMD;
  const FB = obj.Infos.FB;
  const table = new Table({
    width: {
      size: 100,
      type: WidthType.PERCENTAGE,
    },
    // Head line
    rows: [
      new TableRow({
        children: [
          new TableCell({
            children: [
              new Paragraph({
                text: tag,
                style: "GAL1",
              }),
            ],
            shading: {
              type: ShadingType.SOLID,
              color: CUSTOM,
            },
            columnSpan: cmdPatern.length,
          }),
        ],
      }),
    ],
  });
  // Creation of the first line
  const firstRow = new TableRow({
    children: [],
  });
  for (let i = 0; i < cmdPatern.length; i++) {
    const newCell = new TableCell({
      children: [
        new Paragraph({
          text: cmdPatern[i],
          style: "BOLD",
        }),
      ],
      shading: {
        type: ShadingType.SOLID,
        color: SOFTCUSTOM,
      },
    });
    firstRow.root.push(newCell);
  }
  table.root.push(firstRow);
  // Creation of the rest of the CMD table
  for (const [key, value] of Object.entries(data)) {
    let k = 0;
    for (const item of value) {
      k++;
      // Custom message when CMD controled by FB
      if (FB && item[0] === "FB") {
        const fbMessage = new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph({
                  text: "Connexion type:",
                  style: "STDTABLE",
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: `${key}`,
                  style: "BOLD",
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: "Voir bloc de fonction:",
                    }),
                    new TextRun({
                      text: ` ${FB}.`,
                      bold: true,
                    }),
                  ],
                  style: "STDTABLE",
                }),
              ],
              columnSpan: cmdPatern.length - 2,
            }),
          ],
        });
        table.root.push(fbMessage);
      }
      // Normal row whith normal content (from sheets)
      else if (item.length !== 0 && item[0] !== "FB") {
        const tableRow = new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph({
                  text: item[0],
                  style: "STDTABLE",
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: key,
                  style: "STDTABLE",
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: `${k}`,
                  style: "STDTABLE",
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: item[1],
                  style: "STDTABLE",
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: item[2],
                  style: "STDTABLE",
                }),
              ],
            }),
          ],
        });
        table.root.push(tableRow);
      }
    }
  }
  return table;
}
