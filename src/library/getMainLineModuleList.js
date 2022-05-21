//* Build module list according choosen technology
//? IO => {NI:x,NO:y ...}
//? moduleTechnologie => STRING
export function getMainLineModuleList(IO, moduleTechnologie) {
  //! (MODICON TM3 MODULE TECHNOLOGY ONLY)
  if (moduleTechnologie === "TM3SE") {
    const mt3 = modiconTm3Obj(IO);
    const mt3l0 = modiconTm3LineUp(mt3);
    const mt3l1 = split(mt3l0);
    const result = insert(mt3l1);
    return result;
  }
  //! (XXX MODULE TECHNOLOGY ONLY)
  else if (moduleTechnologie === "XXX") {
    const result = XXX(IO);
    return result;
  }
  //
  else {
    console.log("ERROR getMainLineModuleList");
    return false;
  }
}

//! (MODICON TM3 MODULE TECHNOLOGY ONLY)
// Method which calculate the Modicon TM3 module SetUp according IOList
function modiconTm3Obj(IO) {
  // Empty shape ATTENTION item order is important for drwing the line up
  let mt3 = {
    // Numerical
    TM3DI16G: { qtty: 0, img: "IM1", type: "NI", cpty: 16, legend: "1" },
    TM3DI8G: { qtty: 0, img: "IM2", type: "NI", cpty: 8, legend: "2" },
    TM3DQ16TG: { qtty: 0, img: "IM1", type: "NO", cpty: 16, legend: "3" },
    TM3DQ8TG: { qtty: 0, img: "IM2", type: "NO", cpty: 8, legend: "4" },
    // Analog
    TM3AI8G: { qtty: 0, img: "IM3", type: "AI", cpty: 8, legend: "5" },
    TM3AQ4G: { qtty: 0, img: "IM4", type: "AO", cpty: 4, legend: "6" },
    TM3AM6G: { qtty: 0, img: "IM8", type: "Hybride", cpty: 6, legend: "H" },
    // Temperature
    TM3TI4G: { qtty: 0, img: "IM3", type: "TI", cpty: 4, legend: "7" },
    // Slave
    TM3BCCO: { qtty: 0, img: "IM5", type: false, cpty: 14, legend: "0" },
    // Extension
    TM3XTRA1: { qtty: 0, img: "IM6", type: false, cpty: 1, legend: "8" },
    TM3XREC1: { qtty: 0, img: "IM7", type: false, cpty: 1, legend: "9" },
  };
  let modNbs = 0; // Nbs of module
  let restOfModule = 0;
  // Fill Numeric Input 16 and 8 slots
  const restOfTM3DI16G = IO.NI % mt3.TM3DI16G.cpty;
  mt3.TM3DI16G.qtty += Math.floor(IO.NI / mt3.TM3DI16G.cpty);
  if (restOfTM3DI16G > mt3.TM3DI8G.cpty) {
    mt3.TM3DI16G.qtty += 1;
  } else if (restOfTM3DI16G <= mt3.TM3DI8G.cpty && restOfTM3DI16G !== 0) {
    mt3.TM3DI8G.qtty += 1;
  }
  // Fill Numeric Output 16 and 8 slots
  const restOfTM3DQ16TG = IO.NO % mt3.TM3DQ16TG.cpty;
  mt3.TM3DQ16TG.qtty += Math.floor(IO.NO / mt3.TM3DQ16TG.cpty);
  if (restOfTM3DQ16TG > mt3.TM3DQ8TG.cpty) {
    mt3.TM3DQ16TG.qtty += 1;
  } else if (restOfTM3DQ16TG <= mt3.TM3DQ8TG.cpty && restOfTM3DQ16TG !== 0) {
    mt3.TM3DQ8TG.qtty += 1;
  }
  // Fill Analog Input 8 slots
  const restOfTM3AI8G = IO.AI % mt3.TM3AI8G.cpty;
  mt3.TM3AI8G.qtty += Math.floor(IO.AI / mt3.TM3AI8G.cpty);
  if (restOfTM3AI8G !== 0) {
    mt3.TM3AI8G.qtty += 1;
  }
  // Fill Analog Output 4 slots
  const restOfTM3AQ4G = IO.AO % mt3.TM3AQ4G.cpty;
  mt3.TM3AQ4G.qtty += Math.floor(IO.AO / mt3.TM3AQ4G.cpty);
  if (restOfTM3AQ4G !== 0) {
    mt3.TM3AQ4G.qtty += 1;
  }
  // Fill Temperature Input 4 slots
  const restOfTM3TI4G = IO.TI % mt3.TM3TI4G.cpty;
  mt3.TM3TI4G.qtty += Math.floor(IO.TI / mt3.TM3TI4G.cpty);
  if (restOfTM3TI4G !== 0) {
    mt3.TM3TI4G.qtty += 1;
  }
  // Determine how much TMBCCO and link module are needed in this set up
  for (const value of Object.values(mt3)) {
    modNbs += value.qtty;
  }
  restOfModule = modNbs % mt3.TM3BCCO.cpty;
  if (restOfModule > 0) {
    if (restOfModule <= 7) {
      mt3.TM3BCCO.qtty += Math.floor(modNbs / mt3.TM3BCCO.cpty) + 1;
      mt3.TM3XTRA1.qtty += Math.floor(modNbs / mt3.TM3BCCO.cpty);
      mt3.TM3XREC1.qtty += Math.floor(modNbs / mt3.TM3BCCO.cpty);
    } else {
      mt3.TM3BCCO.qtty += Math.floor(modNbs / mt3.TM3BCCO.cpty) + 1;
      mt3.TM3XTRA1.qtty += Math.floor(modNbs / mt3.TM3BCCO.cpty) + 1;
      mt3.TM3XREC1.qtty += Math.floor(modNbs / mt3.TM3BCCO.cpty) + 1;
    }
  }
  return mt3;
}
// Method which build list of "MODULE"
function modiconTm3LineUp(obj) {
  // Build array of "img"
  let l = [];
  for (const [key, item] of Object.entries(obj)) {
    for (let i = 0; i < item.qtty; i++) {
      if (item.type) l.push([key, item.img, item.type, item.cpty, item.legend]);
    }
  }
  return l;
}
// Method which split "MODULE" array to build 2D list according MODICON TM3 specificity
function split(arr) {
  const l = [];
  // Emptying given table to fill sub table which match with proface specificity
  while (arr.length !== 0) {
    const l1 = [];
    for (let i = 0; i < 14; ++i) {
      // Remove first item of main table to push it inside new list
      const item = arr.shift();
      l1.push(item);
    }
    l.push(l1.filter(Boolean)); // filter remove undifined value
  }
  return l;
}
// Method which insert special "MODULE" to 2D list, according MODICON TM3 specificity
function insert(mtx) {
  // Manual conception for module description list
  const TM3BCCO = ["TM3BCCO", "IM5", false, false, "0"];
  const TM3XTRA1 = ["TM3XTRA1", "IM6", false, false, "8"];
  const TM3XREC1 = ["TM3XREC1", "IM7", false, false, "9"];
  let l = [];
  // Insert special module description list from matrix rows to main list
  for (const list of mtx) {
    if (list.length > 7) {
      list.splice(0, 0, TM3BCCO);
      list.splice(8, 0, TM3XTRA1, TM3XREC1);
    } else {
      list.splice(0, 0, TM3BCCO);
    }
  }
  // Order special module according provider specificity
  for (const item of mtx) {
    if (item.slice(0, 9).length !== 0) {
      l.push(item.slice(0, 9));
    }
    if (item.slice(9).length !== 0) {
      l.push(item.slice(9));
    }
  }
  return l;
}

//! (XXX MODULE TECHNOLOGY ONLY)
// Method which Build XXX
function XXX(oil) {
  return false;
}
