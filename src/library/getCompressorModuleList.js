//* Build module list according choosen technology
//? elemList => Raw element list choosen on front, like [{...},{...}]
//? moduleTechnologie => STRING
export function getCompressorModuleList(elemList, moduleTechnologie) {
  //! (MODICON TM3 MODULE TECHNOLOGY ONLY)
  if (moduleTechnologie === "TM3SE") {
    const result = ModiconTm3(elemList);
    return result;
  }
  //! (XXX MODULE TECHNOLOGY ONLY)
  else if (moduleTechnologie === "XXX") {
    const result = XXX(elemList);
    return result;
  }
  //
  else {
    console.log("ERROR getCompressorModuleList");
    return false;
  }
}

//! (MODICON TM3 MODULE TECHNOLOGY ONLY)
// Method which build Modicon TM3 modules list for open air compressor only
function ModiconTm3(elemList) {
  const l = [];
  const TM3BCCO = ["TM3BCCO", "IM5", false, false, "0"];
  const TM3DI8G = ["TM3DI8G", "IM2", "NI", 8, "2"];
  const TM3DQ8TG = ["TM3DQ8TG", "IM2", "NO", 8, "4"];
  //const TM3AI8G = ["TM3AI8G", "IM3", "AI", 8, "5"];
  //const TM3AQ4G = ["TM3AQ4G", "IM4", "AO", 4, "6"];
  const TM3AM6G = ["TM3AM6G", "IM8", "Hybride", 6, "H"];
  // MODICON TM3 line up module attribution for : Fixed speed compressor
  const fsc = [TM3BCCO, TM3DI8G, TM3DQ8TG];
  // MODICON TM3 line up module attribution for : Variable speed compressor
  const vsc = [TM3BCCO, TM3DI8G, TM3DQ8TG, TM3AM6G];
  // MODICON TM3 line up module attribution for : Variable speed centrifugal compressor
  const vscc = [TM3BCCO, TM3DI8G, TM3DQ8TG, TM3AM6G];
  // Build the compressor mega list
  const compressorList = elemList.filter((e) => e.Infos.OPENAIR);
  for (const item of compressorList) {
    if (item.Infos.IO.AI === 3) {
      l.push([item, vscc]);
    } else if (item.Infos.IO.AI === 2) {
      l.push([item, vsc]);
    } else {
      l.push([item, fsc]);
    }
  }
  return l;
}

//! (XXX MODULE TECHNOLOGY ONLY)
// Method which build XXX modules list for open air compressor only
function XXX(elemList) {
  return false;
}
