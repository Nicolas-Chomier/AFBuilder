import {
  Table,
  TableRow,
  TableCell,
  ShadingType,
  Paragraph,
  WidthType,
} from "docx";

//* Build Legend Table according choosen technology
//? moduleTechnologie => STRING
export function getModuleLegendTable(moduleTechnologie) {
  //! (MODICON TM3 MODULE TECHNOLOGY ONLY)
  if (moduleTechnologie === "TM3SE") {
    const result = ModiconTm3LegendTable();
    return result;
  }
  //! (XXX MODULE TECHNOLOGY ONLY)
  else if (moduleTechnologie === "XXX") {
    const result = XXX();
    return result;
  }
  //
  else {
    console.log("ERROR getCompressorModuleList");
    return false;
  }
}

//! (MODICON TM3 MODULE TECHNOLOGY ONLY)
// Method which build Modicon TM3 legends table
function ModiconTm3LegendTable() {
  const COLORA = "C5CAE9";
  const result = new Table({
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
                text: "Légende",
                style: "GAL2",
              }),
            ],
            shading: {
              type: ShadingType.SOLID,
              color: COLORA,
            },
          }),
          new TableCell({
            children: [
              new Paragraph({
                text: "Référence",
                style: "GAL2",
              }),
            ],
            shading: {
              type: ShadingType.SOLID,
              color: COLORA,
            },
          }),
          new TableCell({
            children: [
              new Paragraph({
                text: "Définition",
                style: "GAL2",
              }),
            ],
            shading: {
              type: ShadingType.SOLID,
              color: COLORA,
            },
          }),
        ],
      }),
      new TableRow({
        children: [
          new TableCell({
            children: [
              new Paragraph({
                text: "MOD1",
                style: "GAL3",
              }),
            ],
          }),
          new TableCell({
            children: [
              new Paragraph({
                text: "TM3DI16G",
                style: "GAL3",
              }),
            ],
          }),
          new TableCell({
            children: [
              new Paragraph({
                text: "16 NI",
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
                text: "MOD2",
                style: "GAL3",
              }),
            ],
          }),
          new TableCell({
            children: [
              new Paragraph({
                text: "TM3DI8G",
                style: "GAL3",
              }),
            ],
          }),
          new TableCell({
            children: [
              new Paragraph({
                text: "8 NI",
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
                text: "MOD3",
                style: "GAL3",
              }),
            ],
          }),
          new TableCell({
            children: [
              new Paragraph({
                text: "TM3DQ16TG",
                style: "GAL3",
              }),
            ],
          }),
          new TableCell({
            children: [
              new Paragraph({
                text: "16 NO",
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
                text: "MOD4",
                style: "GAL3",
              }),
            ],
          }),
          new TableCell({
            children: [
              new Paragraph({
                text: "TM3DQ8TG",
                style: "GAL3",
              }),
            ],
          }),
          new TableCell({
            children: [
              new Paragraph({
                text: "8 NO",
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
                text: "MOD5",
                style: "GAL3",
              }),
            ],
          }),
          new TableCell({
            children: [
              new Paragraph({
                text: "TM3AI8G",
                style: "GAL3",
              }),
            ],
          }),
          new TableCell({
            children: [
              new Paragraph({
                text: "8 AI",
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
                text: "MOD6",
                style: "GAL3",
              }),
            ],
          }),
          new TableCell({
            children: [
              new Paragraph({
                text: "TM3AQ4G",
                style: "GAL3",
              }),
            ],
          }),
          new TableCell({
            children: [
              new Paragraph({
                text: "4 AO",
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
                text: "MOD7",
                style: "GAL3",
              }),
            ],
          }),
          new TableCell({
            children: [
              new Paragraph({
                text: "TM3TI4G",
                style: "GAL3",
              }),
            ],
          }),
          new TableCell({
            children: [
              new Paragraph({
                text: "4 TI",
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
                text: "MODH",
                style: "GAL3",
              }),
            ],
          }),
          new TableCell({
            children: [
              new Paragraph({
                text: "TM3AM6G",
                style: "GAL3",
              }),
            ],
          }),
          new TableCell({
            children: [
              new Paragraph({
                text: "4 AI & 2 AO",
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
                text: "MOD0",
                style: "GAL3",
              }),
            ],
          }),
          new TableCell({
            children: [
              new Paragraph({
                text: "TM3BCCO",
                style: "GAL3",
              }),
            ],
          }),
          new TableCell({
            children: [
              new Paragraph({
                text: "CANOpen Slave",
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
                text: "MOD8",
                style: "GAL3",
              }),
            ],
          }),
          new TableCell({
            children: [
              new Paragraph({
                text: "TM3XTRA1",
                style: "GAL3",
              }),
            ],
          }),
          new TableCell({
            children: [
              new Paragraph({
                text: "Module Extension =>",
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
                text: "MOD9",
                style: "GAL3",
              }),
            ],
          }),
          new TableCell({
            children: [
              new Paragraph({
                text: "TM3XREC1",
                style: "GAL3",
              }),
            ],
          }),
          new TableCell({
            children: [
              new Paragraph({
                text: "Module Extension <=",
                style: "GAL3",
              }),
            ],
          }),
        ],
      }),
    ],
  });
  return result;
}

//! (XXX MODULE TECHNOLOGY ONLY)
// Method which build XXX legends table
function XXX() {
  return false;
}
