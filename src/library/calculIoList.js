//* Calcul final IOList used to generate I/O setup module
export function calculIoList(obj) {
  const elem = obj.ElementInfos;
  const slots = obj.ProjectInfos.reservedSlots;
  const coef = obj.ProjectInfos.Coef;
  const plcSlot = obj.ScreenInfos.IO;
  const modelBase = { NI: 0, NO: 0, AI: 0, AO: 0, TI: 0 };
  // Add all non openair elem IOList to modelBase
  for (const item of elem) {
    for (const [key, value] of Object.entries(item.Infos.IO)) {
      modelBase[key] += value;
    }
  }
  // Multiply each modelBase key whith coef
  for (const [key, value] of Object.entries(modelBase)) {
    modelBase[key] = Math.round(value * coef);
  }
  // Add to modelBase amount of reserved slots
  for (const [key, value] of Object.entries(slots)) {
    modelBase[key] += value;
  }
  // Soustract native PLC Input Output to modelBase
  for (const [key, value] of Object.entries(plcSlot)) {
    modelBase[key] -= value;
  }
  // If modelBase value are under 0 pass it to 0
  for (const [key, value] of Object.entries(modelBase)) {
    if (value < 0) {
      modelBase[key] = 0;
    }
  }
  return modelBase;
}
