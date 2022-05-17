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
  const lineUp = arr[1].filter((e) => e[2]);
  console.log("lineUp", lineUp);
  //const textTable = arr[0].Infos.TEXTS.NI;
  const tag = arr[0].tag;
  //const size = 8;
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
                text: `Description modules compresseur: ${tag}`,
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
  for (const item of lineUp) {
    const moduleRef = item[0];
    const type = item[2];
    const size = item[3];
    const textTable = arr[0].Infos.TEXTS[type];
    const firstRow = new TableRow({
      children: [
        new TableCell({
          children: [
            new Paragraph({
              text: moduleRef,
              style: "GAL2",
            }),
          ],
          shading: {
            type: ShadingType.SOLID,
            color: COLORB,
          },
        }),
      ],
    });
    table.root.push(firstRow);
    //
    for (let i = 0; i < size; i++) {
      const row = new TableRow({
        children: [
          new TableCell({
            children: [
              new Paragraph({
                text: `Voie n°${i}`,
                style: "GAL3",
              }),
            ],
          }),
          new TableCell({
            children: [
              new Paragraph({
                text: textTable[i],
                style: "GAL3",
              }),
            ],
          }),
        ],
      });
      table.root.push(row);
    }
  }
  return table;
}
