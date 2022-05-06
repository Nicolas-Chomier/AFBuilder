import {
  Table,
  TableRow,
  TableCell,
  ShadingType,
  Paragraph,
  TextRun,
  UnderlineType,
  HeadingLevel,
  AlignmentType,
  WidthType,
  ImageRun,
} from "docx";
import { Packer, Document } from "docx";
import { saveAs } from "file-saver";
import { Buffer } from "buffer";

export function functionalAnalysis(obj = {}) {
  console.log("Print ! AF", obj);
  const doc = new Document({
    creator: "Clippy",
    title: "Sample Document",
    description: "A brief example of using docx",
    styles: {},
    sections: [
      {
        children: [
          new Paragraph({
            text: "Test heading1, bold and italicized",
            heading: HeadingLevel.HEADING_1,
          }),
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
