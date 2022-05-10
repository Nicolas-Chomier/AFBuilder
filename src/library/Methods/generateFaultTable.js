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
const CUSTOM = "EB6272";
const SOFTCUSTOM = "EBA8BD";
const faultPatern = ["Nom", "Niveau d'alarme", "Condition d'activation"];
// Generate element fault table
export function generateFaultTable(obj) {
  const tag = obj.tag;
  const data = obj.Infos.FAULTS.ARRAY;
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
            columnSpan: faultPatern.length,
          }),
        ],
      }),
    ],
  });
  // Creation of the first line
  const firstRow = new TableRow({
    children: [],
  });
  for (let i = 0; i < faultPatern.length; i++) {
    const newCell = new TableCell({
      children: [
        new Paragraph({
          text: faultPatern[i],
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
  // Creation of the rest of the fault table
  for (const item of data) {
    // Custom message when CMD controled by FB
    if (FB && item[0] === "FB") {
      const fbMessage = new TableRow({
        children: [
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
            columnSpan: faultPatern.length,
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
  return table;
}
