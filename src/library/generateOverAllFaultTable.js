import {
  Table,
  TableRow,
  TableCell,
  ShadingType,
  Paragraph,
  TextRun,
  WidthType,
} from "docx";
//
const CUSTOM = "505E6E";
const SOFTCUSTOM = "92A9C3";
const overAllPatern = ["Nom", "Type", "Impact"];
// Generate element fault table
export function generateOverAllFaultTable(obj) {
  const tag = obj.tag;
  const data = obj.Infos.FAULTS.OVERALL;
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
            columnSpan: overAllPatern.length,
          }),
        ],
      }),
    ],
  });
  // Creation of the first line
  const firstRow = new TableRow({
    children: [],
  });
  for (let i = 0; i < overAllPatern.length; i++) {
    const newCell = new TableCell({
      children: [
        new Paragraph({
          text: overAllPatern[i],
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
    if (item.length === 0) {
      const fbMessage = new TableRow({
        children: [
          new TableCell({
            children: [
              new Paragraph({
                children: [
                  new TextRun({
                    text: "Cette objet ne remonte aucun défaut.",
                    bold: true,
                  }),
                ],
                style: "STDTABLE",
              }),
            ],
            columnSpan: overAllPatern.length,
          }),
        ],
      });
      table.root.push(fbMessage);
    }
    // Normal row whith normal content (from sheets)
    else {
      const tableRow = new TableRow({
        children: [
          new TableCell({
            children: [
              new Paragraph({
                text: item[0].replace("TAG", tag),
                style: "STDTABLE",
              }),
            ],
          }),
          new TableCell({
            children: [
              new Paragraph({
                text: item[1],
                style: "BOLD",
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
