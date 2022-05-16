import {
  Table,
  TableRow,
  TableCell,
  ShadingType,
  Paragraph,
  WidthType,
} from "docx";
//
const COLORA = "F0B011";
const COLORB = "FCE46B";
//
//! A terminer
export function generateOpenAirFunctionTable(arr) {
  const compressorList = arr.filter((e) => e.Infos.OPENAIR);
  const table = new Table({
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
                text: "I/O modules, ligne principale",
                style: "GAL1",
              }),
            ],
            shading: {
              type: ShadingType.SOLID,
              color: COLORA,
            },
            columnSpan: 3,
          }),
        ],
      }),
    ],
  });
  for (const item of compressorList) {
    const row = new TableRow({
      children: [
        new TableCell({
          children: [
            new Paragraph({
              text: "I/O modules, ligne principale",
              style: "GAL1",
            }),
          ],
          shading: {
            type: ShadingType.SOLID,
            color: COLORA,
          },
          columnSpan: 3,
        }),
        new TableCell({
          children: [
            new Paragraph({
              text: "I/O modules, ligne principale",
              style: "GAL1",
            }),
          ],
          shading: {
            type: ShadingType.SOLID,
            color: COLORA,
          },
          columnSpan: 3,
        }),
        new TableCell({
          children: [
            new Paragraph({
              text: "I/O modules, ligne principale",
              style: "GAL1",
            }),
          ],
          shading: {
            type: ShadingType.SOLID,
            color: COLORA,
          },
          columnSpan: 3,
        }),
      ],
    });
  }
  console.log("compressorList", compressorList);

  return false;
}
