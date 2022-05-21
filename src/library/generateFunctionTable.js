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
export function generateFunctionTable(
  projectSlots,
  hmiSetUp,
  moduleSetUp,
  elementList
) {
  // Screen with no I/O return simple text
  let hmiFunctionTable = new Paragraph({
    text: "Cet IHM ne possède pas d'entrées et de sorties.",
    style: "STD",
  });
  // Determine if choosen screen have native I/O
  const native = hmiSetUp[0].reduce((a, b) => a + b[3], 0);
  const ReEngineeredContent = sortElementByType(projectSlots, elementList);
  if (native !== 0) {
    hmiFunctionTable = buildFunctionTable(ReEngineeredContent, hmiSetUp);
  }
  const moduleFunctionTable = buildFunctionTable(
    ReEngineeredContent,
    moduleSetUp
  );
  return [hmiFunctionTable, moduleFunctionTable];
}
//* Fill model0 with [tag,text] for each elements from main element list
function sortElementByType(projectSlots, elementList) {
  const modele0 = { NI: [], NO: [], AI: [], AO: [], TI: [] }; //! this have to match whith productSheet content
  const modele = sortReservedSlotsByType(projectSlots, modele0);
  const nonOpenAirElement = elementList.filter((e) => !e.Infos.OPENAIR);
  for (const item of nonOpenAirElement) {
    for (const [key, value] of Object.entries(item.Infos.TEXTS)) {
      // Push only texts
      if (value.length !== 0) {
        for (const text of value) {
          modele[key].push([item.tag, text]);
        }
      }
    }
  }
  return modele;
}
//* Fill object named shape with tag and element text table
function sortReservedSlotsByType(slot, shape) {
  const reservedSlotsText = "Emplacement réservé";
  const reservecSlotsTag = "";
  for (const [key, value] of Object.entries(slot)) {
    for (let i = 0; i < value; i++) {
      shape[key].push([reservedSlotsText, reservecSlotsTag]);
    }
  }
  return shape;
}
//*
function buildFunctionTable(ReEngineeredContent, hmiSetUp) {
  // Table creation whith first row title
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
                text: "Assignation des I/O",
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
  for (const item of hmiSetUp) {
    for (const module of item) {
      const type = module[2]; // AI, NI ...
      if (type) {
        const moduleHead = module[0]; // Module reference
        const wayNbs = module[3]; // Nbs of module's Input/Output
        // 2e row whith module name (table sub title)
        const row = new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph({
                  text: moduleHead,
                  style: "GAL2",
                }),
              ],
              shading: {
                type: ShadingType.SOLID,
                color: COLORB,
              },
              columnSpan: 3,
            }),
          ],
        });
        table.root.push(row);
        for (let i = 0; i < wayNbs; i++) {
          const rl = GetTextForFunctionTable(ReEngineeredContent, type);
          const tag = rl[0];
          const text = rl[1];
          const modRow = new TableRow({
            children: [
              new TableCell({
                children: [new Paragraph(`Voie n°${i}`)],
              }),
              new TableCell({
                children: [new Paragraph(tag)],
              }),
              new TableCell({
                children: [new Paragraph(text)],
              }),
            ],
          });
          table.root.push(modRow);
        }
      }
    }
  }
  return table;
}
//*
function GetTextForFunctionTable(ReEngineeredContent, type) {
  const textList = ReEngineeredContent[type];
  const emptyContent = ["Libre", ""];
  if (textList.length !== 0) {
    // Shift !!
    const item = textList.shift();
    return item;
  } else {
    return emptyContent;
  }
}
