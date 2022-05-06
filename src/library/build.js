import { PayloadConstructor } from "../library/Class/PayloadConstructor";
import { functionalAnalysis } from "./Methods/functionalAnalysis";
import { quotation } from "./Methods/quotation";

//* Build document needed, by calling lot of methods
export function build(rawObjInfo = {}, rawObjElem = [], nbs = 0) {
  if (rawObjElem.length !== 0) {
    // Class instantiation
    const Pc = new PayloadConstructor();
    const payLoad = Pc.buildFinalDataSet(rawObjInfo, rawObjElem);
    if (nbs === 0) {
      // Print AF
      const printAf = functionalAnalysis(payLoad);
      return printAf;
    } else {
      // Print Quotation
      const printQts = quotation(payLoad);
      return printQts;
    }
  } else {
    alert("Choose an element please !");
    return false;
  }
}
