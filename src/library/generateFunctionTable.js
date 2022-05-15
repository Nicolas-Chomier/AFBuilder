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
export function generateFunctionTable(obj, arr) {
  const content = sortElementByType(obj);
  console.log("content", content);
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
  for (const item of arr) {
    for (const module of item) {
      const type = module[2];
      if (type) {
        const moduleHead = module[0];
        const wayNbs = module[3];
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
          const rl = GetTextForFunctionTable(content, type, 0);
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

function GetTextForFunctionTable(content, type) {
  const textList = content[type];
  const emptyContent = ["Libre", ""];
  if (textList.length !== 0) {
    const item = textList.shift();
    return item;
  } else {
    return emptyContent;
  }
}

//* Fill object named shape with tag and element text table
function sortElementByType(obj) {
  // The base
  const shape0 = { NI: [], NO: [], AI: [], AO: [], TI: [] }; //! this have to match whith productSheet content
  const slots = obj.ProjectInfos.reservedSlots;
  const shape = sortReservedSlotsByType(slots, shape0);
  for (const item of obj.ElementInfos) {
    // Only non Openair element
    if (item.Infos.OPENAIR === false) {
      const elem = item.Infos.TEXTS;
      for (const [key, value] of Object.entries(elem)) {
        // Push only texts
        if (value.length !== 0) {
          for (const text of value) {
            shape[key].push([item.tag, text]);
          }
        }
      }
    }
  }
  return shape;
}

//* Fill object named shape with tag and element text table
function sortReservedSlotsByType(slot, shape) {
  // The base
  //const shape = { NI: [], NO: [], AI: [], AO: [], TI: [] }; //! this have to match whith productSheet content
  const reservedSlotsText = "Emplacement réservé";
  const reservecSlotsTag = "...";
  for (const [key, value] of Object.entries(slot)) {
    for (let i = 0; i < value; i++) {
      shape[key].push([reservecSlotsTag, reservedSlotsText]);
    }
  }
  return shape;
}
