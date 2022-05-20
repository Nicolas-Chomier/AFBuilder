//* Create special list of fake module list to be the same result like mainModuleLineUpList to be used with generateFunctionTable
export function buildPlcNativeIOListTable(obj) {
  let l = [];
  // Get PLC ref
  const plcRef = obj.ScreenInfos.PLC.Ref;
  // Get I/O of choosen screen
  const nativeIO = obj.ScreenInfos.IO;
  // Build Table of table for each type of input output on the choosen screen, each table contain usefull infos
  for (const [key, value] of Object.entries(nativeIO)) {
    const name = `${plcRef}, types natifs : ${key}`;
    // Create a fake module list to be compatible with "generateFunctionTable"
    const fakeMod = [name, false, key, value, false];
    l.push(fakeMod);
  }
  return [l];
}
