/**
 * Class regrouping methods only used to clean, filter, parse, and build raw information from react FrontEnd to BackEnd logic.
 */
export class PayloadConstructor {
  //* Regroup project information with choosen elements list
  //? obj = object infos from frontEnd (all information and datas choosen on landing page)
  //? array = array of object filled with elements choosen from landing page (elements whish list)
  buildFinalDataSet(obj = {}, array = []) {
    // Remove duplicate (tag is unique)
    const arrayWithOutDuplicate = this.removeDuplicate(array);
    // Deconstruct array to object and fill it with element
    const objElemFilledWithExternalDatas = this.fillMainDataSet(
      arrayWithOutDuplicate
    );
    const size = Object.keys(objElemFilledWithExternalDatas).length;
    // Deconstruct "object info" to payload and add to it "size"
    const payLoad = { ...obj };
    // Number of element in "objElemFilledWithExternalDatas" (whishList)
    payLoad["nbs"] = size;
    // Merge elements list with project infos
    for (const [key, value] of Object.entries(objElemFilledWithExternalDatas)) {
      payLoad[key] = value;
    }
    return payLoad;
  }
  //* Extract infos from sheets and fill new object whith it
  fillMainDataSet(array) {
    const result = { ...array };
    for (const value of Object.values(result)) {
      import(`../../data/sheets/${value.id}.js`)
        .catch((e) => {
          console.log("error", e);
        })
        .then(({ productSheet }) => {
          value["name"] = productSheet.name;
          value["infos"] = productSheet.infos;
          value["Labels"] = productSheet.Labels;
          value["IO"] = productSheet.IO;
          value["Text"] = productSheet.Text;
          value["AF"] = productSheet.AF;
          value["FAULTS"] = productSheet.FAULTS;
          value["FunctionBloc"] = productSheet.FunctionBloc;
        });
    }
    return result;
  }
  //* Delete duplicate from components array (only tag is unique)
  removeDuplicate(array = []) {
    const uniqueObjects = [
      ...new Map(array.map((item) => [item.tag, item])).values(),
    ];
    return uniqueObjects;
  }
}
