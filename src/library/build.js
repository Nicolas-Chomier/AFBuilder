import { functionalAnalysis } from "./Methods/functionalAnalysis";
import { quotation } from "./Methods/quotation";

//* collects information and launch document functions
export async function build(rawObjInfo = {}, rawObjElem = [], nbs = 0) {
  // Check content of given argument, throw an error if screen ref and elements does not exist.
  const sl1 = rawObjElem.length <= 0 ? false : true;
  const sl2 = rawObjInfo.ScreenID;
  if (sl1 && sl2) {
    // Remove duplicate (tag is unique)
    const elements = removeDuplicate(rawObjElem);
    // Add number of elements present in project
    const size = Object.keys(elements).length;
    rawObjInfo["elemntNbs"] = size;
    // Get elements information
    for (const value of Object.values(elements)) {
      const elementModule = await import(`../data/sheets/${value.id}.js`);
      value["Infos"] = elementModule.productSheet;
    }
    // Get screen informations from data sheets
    const screenModule = await import(
      `../data/sheets/${rawObjInfo.ScreenID}.js`
    );
    const ScreenInfos = screenModule.productSheet;
    // Build final dataset to send at document functions
    const dataSet = {};
    dataSet["ProjectInfos"] = rawObjInfo;
    dataSet["ScreenInfos"] = ScreenInfos;
    dataSet["ElementInfos"] = elements;
    if (nbs === 0) {
      // Print AF
      functionalAnalysis(dataSet);
      return false;
    } else {
      // Print Quotation
      quotation(dataSet);
      return false;
    }
  } else {
    const errorMessage = "Select element and/or screen please !";
    alert(errorMessage);
    return false;
  }
}
//* Delete duplicate from components array (only tag is unique)
function removeDuplicate(array = []) {
  const uniqueObjects = [
    ...new Map(array.map((item) => [item.tag, item])).values(),
  ];
  return uniqueObjects;
}
