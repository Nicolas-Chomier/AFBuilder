import {
  Table,
  TableRow,
  TableCell,
  ShadingType,
  Paragraph,
  TextRun,
  HeadingLevel,
  AlignmentType,
  LevelFormat,
  WidthType,
  ImageRun,
} from "docx";
import { Packer, Document } from "docx";
import { saveAs } from "file-saver";
import { Buffer } from "buffer";
// Home methods
import { generateCmdTable } from "./generateCmdTable";
import { generateFaultTable } from "./generateFaultTable";
import { generateOverAllFaultTable } from "./generateOverAllFaultTable";
import { calculIoList } from "./calculIoList";
import { getMainLineModuleList } from "./getMainLineModuleList";
import { getCompressorModuleList } from "./getCompressorModuleList";
import { generateFunctionTable } from "./generateFunctionTable";
import { getModuleLegendTable } from "./getModuleLegendTable";
import { generateOpenAirFunctionTable } from "./generateOpenAirFunctionTable";
import { buildPlcNativeIOListTable } from "./buildPlcNativeIOListTable";
// Images
import { CCOULEUR } from "../data/images/CCOULEUR.js";
import { IRV } from "../data/images/IRV.js";
import { IWV } from "../data/images/IWV.js";
import { ALARMES } from "../data/images/ALARMES.js";
// Constante declaration
const TITRE1 = "4774EC";
const TITRE2 = "4BA9EA";
const TITRE3 = "4BEAC3";
//const WHITE = "FFFFFF";
const DARKGREY = "F1F1F1";
const GREY = "878787";
const BLACK = "000000";
const SOFTBLUE = "C5CAE9";
//+ Go!
export async function functionalAnalysis(obj = {}) {
  // Basical variable declaration
  const core = [];
  const moduleTechnologie = "TM3SE"; //obj.ProjectInfos.Techno
  const elementList = obj.ElementInfos;
  const reservedSlots = obj.ProjectInfos.reservedSlots;
  // Image for choosen HMI
  const hmiImgObj = await import(`../data/images/${obj.ScreenInfos.PIC}.js`);
  const hmiImg = hmiImgObj[obj.ScreenInfos.PIC];
  // Get PLC with native I/O set up
  const hmiSetUp = buildPlcNativeIOListTable(obj);
  // Module set up
  const IOlist = calculIoList(obj); // {NI:xx,NO:yy, ...}
  const moduleSetUp = getMainLineModuleList(IOlist, moduleTechnologie);
  // Legend table for choosen module
  const usedModulesLegendTable = getModuleLegendTable(moduleTechnologie);
  // Open Air
  const compressorModuleLineUpList = getCompressorModuleList(
    elementList,
    moduleTechnologie
  );
  // Get function table for IHM and Module (if exist)
  const result = generateFunctionTable(
    reservedSlots,
    hmiSetUp,
    moduleSetUp,
    elementList
  );
  const functionTableForIhm = result[0];
  const functionTableForModules = result[1];
  // Function Bloc
  let FB001 = false;
  //+ Chapter 1: "Pr??sentation du document"
  core.push(
    new Paragraph({
      text: "Pr??sentation du document",
      heading: HeadingLevel.HEADING_1,
    }),
    new Paragraph({
      children: [
        new TextRun({
          text: "Ce document d??finit les ??l??ments et les principes de fonctionnement de l'ensemble du lot automatisme pour le projet :",
        }),
        new TextRun({
          text: ` ${obj.ProjectInfos.ProjectName}.`,
          bold: true,
        }),
      ],
      style: "STD",
    }),
    new Paragraph({
      text: "Documents de r??f??rences",
      heading: HeadingLevel.HEADING_2,
    }),
    new Paragraph({
      text: "Cette analyse fonctionnelle est r??alis??e sur la base des documents suivants.",
      style: "STD",
    }),
    new Table({
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
                  text: "Document de r??f??rence",
                  style: "GAL1",
                }),
              ],
              shading: {
                type: ShadingType.SOLID,
                color: DARKGREY,
              },
              columnSpan: 3,
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph({
                  text: "Titre",
                  style: "GAL2",
                }),
              ],
              shading: {
                type: ShadingType.SOLID,
                color: GREY,
              },
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: "Label",
                  style: "GAL2",
                }),
              ],
              shading: {
                type: ShadingType.SOLID,
                color: GREY,
              },
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: "Version",
                  style: "GAL2",
                }),
              ],
              shading: {
                type: ShadingType.SOLID,
                color: GREY,
              },
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph({
                  text: "Analyse Fonctionnelle Process",
                  style: "GAL3",
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: "",
                  style: "GAL3",
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: "",
                  style: "GAL3",
                }),
              ],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph({
                  text: "Sp??cifications technique IHM",
                  style: "GAL3",
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: `${obj.ScreenInfos.HMI.Ref}-SPECIFICATIONS`,
                  style: "GAL3",
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: "NONE",
                  style: "GAL3",
                }),
              ],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph({
                  text: "Sp??cifications technique CPU",
                  style: "GAL3",
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: `${obj.ScreenInfos.PLC.Ref}-SPECIFICATIONS`,
                  style: "GAL3",
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: "NONE",
                  style: "GAL3",
                }),
              ],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph({
                  text: "",
                  style: "GAL3",
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: "",
                  style: "GAL3",
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: "",
                  style: "GAL3",
                }),
              ],
            }),
          ],
        }),
      ],
    })
  );
  //+ Chapter 2: "Abr??viations"
  core.push(
    new Paragraph({
      text: "Informations connexes",
      heading: HeadingLevel.HEADING_1,
      pageBreakBefore: true,
    }),
    // Abbr??viations table
    new Paragraph({
      text: "Abr??viations",
      heading: HeadingLevel.HEADING_2,
    }),
    new Table({
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
                  text: "Abr??viations",
                  style: "GAL2",
                }),
              ],
              shading: {
                type: ShadingType.SOLID,
                color: SOFTBLUE,
              },
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: "Nom complet",
                  style: "GAL2",
                }),
              ],
              shading: {
                type: ShadingType.SOLID,
                color: SOFTBLUE,
              },
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: "Description",
                  style: "GAL2",
                }),
              ],
              shading: {
                type: ShadingType.SOLID,
                color: SOFTBLUE,
              },
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph({
                  text: "ATMP",
                  style: "GAL3",
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: "Atmospheric Pressure",
                  style: "GAL3",
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: "1 Bar",
                  style: "GAL3",
                }),
              ],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph({
                  text: "MES",
                  style: "GAL3",
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: "Message",
                  style: "GAL3",
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: "Message / information",
                  style: "GAL3",
                }),
              ],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph({
                  text: "TMA",
                  style: "GAL3",
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: "Technical Major Fault",
                  style: "GAL3",
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: "D??faut technique entrainant l'arr??t de l'installation",
                  style: "GAL3",
                }),
              ],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph({
                  text: "TMI",
                  style: "GAL3",
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: "Technical Minor Fault",
                  style: "GAL3",
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: "D??faut technique sans arr??t de l'installation",
                  style: "GAL3",
                }),
              ],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph({
                  text: "PMA",
                  style: "GAL3",
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: "Process Major Fault",
                  style: "GAL3",
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: "D??passement de seuil dans le processus avec un impact sur la qualit?? du produit",
                  style: "GAL3",
                }),
              ],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph({
                  text: "PMI",
                  style: "GAL3",
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: "Process Minor Fault",
                  style: "GAL3",
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: "D??passement de seuil dans le processus sans impact sur la qualit?? du produit",
                  style: "GAL3",
                }),
              ],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph({
                  text: "DI",
                  style: "GAL3",
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: "Digital Input",
                  style: "GAL3",
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: "Input 1 or 0",
                  style: "GAL3",
                }),
              ],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph({
                  text: "DO",
                  style: "GAL3",
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: "Digital Output",
                  style: "GAL3",
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: "Output 1 or 0",
                  style: "GAL3",
                }),
              ],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph({
                  text: "AI",
                  style: "GAL3",
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: "Analog Input",
                  style: "GAL3",
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: "Entr??es analogiques 4-20mA",
                  style: "GAL3",
                }),
              ],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph({
                  text: "TI",
                  style: "GAL3",
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: "Temperature Input",
                  style: "GAL3",
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: "Entr??e sp??ciales (PT100 + Thermocouple)",
                  style: "GAL3",
                }),
              ],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph({
                  text: "AO",
                  style: "GAL3",
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: "Analog Output",
                  style: "GAL3",
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: "Sortie analogique 4-20mA",
                  style: "GAL3",
                }),
              ],
            }),
          ],
        }),
      ],
    })
  );
  if (moduleSetUp.length !== 0) {
    core.push(
      new Paragraph({
        text: `Description des modules: "${obj.ScreenInfos.CIO}"`,
        heading: HeadingLevel.HEADING_2,
      }),
      usedModulesLegendTable
    );
  }
  //+ Chapter 3: "Architecture de l'installation"
  core.push(
    new Paragraph({
      text: "Architecture de l'installation",
      heading: HeadingLevel.HEADING_1,
      pageBreakBefore: true,
    }),
    new Paragraph({
      text: "IHM, CPU & CANOpen",
      heading: HeadingLevel.HEADING_2,
    }),
    new Paragraph({
      children: [
        new TextRun({
          text: `Cette installation est g??r??e par un dispositif de marque ${obj.ScreenInfos.BRAND}, install?? dans l'armoire de commande sous la r??f??rence: `,
        }),
        new TextRun({
          text: "REF ARMOIRE DE COMMANDE",
          bold: true,
        }),
        new TextRun({
          break: 2,
          text: "L'ensemble est compos?? d'un: ",
        }),
      ],
      style: "STD",
    }),
    new Paragraph({
      text: "Interface Homme Machine (IHM), comprenant les ??l??ments suivants:",
      heading: HeadingLevel.HEADING_3,
    })
  );
  // Write Device infos
  obj.ScreenInfos.HMI.Devices.map((x) =>
    core.push(
      new Paragraph({
        text: x,
        bullet: {
          level: 0,
        },
        style: "STD",
      })
    )
  );
  core.push(
    new Paragraph({
      text: "Contr??leur logique programmable (PLC), comprenant les ??l??ments suivants:",
      heading: HeadingLevel.HEADING_3,
    })
  );
  obj.ScreenInfos.PLC.Devices.map((x) =>
    core.push(
      new Paragraph({
        text: x,
        bullet: {
          level: 0,
        },
        style: "STD",
      })
    )
  );
  core.push(
    new Paragraph({
      text: "Carte Ma??tre int??gr?? pour protocole CAN-OPEN, avec le profile suivant:",
      heading: HeadingLevel.HEADING_3,
    })
  );
  obj.ScreenInfos.CAN.Devices.map((x) =>
    core.push(
      new Paragraph({
        text: x,
        bullet: {
          level: 0,
        },
        style: "STD",
      })
    )
  );
  core.push(
    new Paragraph({
      text: "",
    }),
    new Paragraph({
      text: `La communication avec les diff??rents ??l??ments du projet s'effectue gr??ce ?? des modules d'entr??es/sorties ${obj.ScreenInfos.CIO}, sous le protocole de communication "CANOpen".`,
      style: "STD",
    }),
    new Paragraph({
      text: "Autres protocoles de communications",
      heading: HeadingLevel.HEADING_2,
    }),
    new Paragraph({
      text: "NONE",
      style: "STD",
    })
  );
  for (const value of Object.values(obj.ElementInfos)) {
    const prot = value.Infos.PROTOCOLE;
    if (prot) {
      core.push(
        new Paragraph({
          children: [
            new TextRun({
              text: "L'??l??ment ",
            }),
            new TextRun({
              text: value.tag,
              bold: true,
            }),
            new TextRun({
              text: " utilise le protocole: ",
            }),
            new TextRun({
              text: prot,
              bold: true,
            }),
          ],
          bullet: {
            level: 0,
          },
          style: "STD",
        })
      );
    }
  }
  //+ Chapter 4: "Architecture r??seaux"
  core.push(
    new Paragraph({
      text: "Architecture r??seaux",
      heading: HeadingLevel.HEADING_1,
    }),
    new Paragraph({
      text: "NONE",
      style: "STD",
    })
  );
  //+ Chapter 5: "Configuration et information logiciel"
  core.push(
    new Paragraph({
      text: "Configuration et information logiciel",
      heading: HeadingLevel.HEADING_1,
      pageBreakBefore: true,
    }),
    new Paragraph({
      text: "Information logiciel ",
      heading: HeadingLevel.HEADING_2,
    }),
    new Paragraph({
      children: [
        new TextRun({
          text: "La programmation du API est effectu??e avec le logiciel: ",
        }),
        new TextRun({
          text: "GP-Pro EX 4.09 SP1",
          bold: true,
        }),
        new TextRun({
          text: "Version du produit : ",
          break: 1,
        }),
        new TextRun({
          text: "V4.09.350 (derni??re version)",
          bold: true,
        }),
        new TextRun({
          text: "Date de version: ",
          break: 1,
        }),
        new TextRun({
          text: "01/02/2022",
          bold: true,
        }),
      ],
      style: "STD",
    }),
    new Paragraph({
      text: "Configuration logiciel ",
      heading: HeadingLevel.HEADING_2,
    }),
    new Paragraph({
      text: "NONE",
      style: "STD",
    })
  );
  //+ Chapter 6: "Configuration et information IHM"
  core.push(
    new Paragraph({
      text: "Configuration et information IHM",
      heading: HeadingLevel.HEADING_1,
      pageBreakBefore: true,
    }),
    new Paragraph({
      text: "Information IHM",
      heading: HeadingLevel.HEADING_2,
    }),
    new Paragraph({
      children: [
        new TextRun({
          text: `IHM ${obj.ScreenInfos.HMI.Denomination}, r??f??rence: `,
        }),
        new TextRun({
          text: `${obj.ScreenInfos.HMI.Ref}`,
          bold: true,
        }),
      ],
      style: "STD",
    }),
    new Paragraph({
      text: "Mots de passes et niveaux d'acc??s",
      heading: HeadingLevel.HEADING_3,
    }),
    new Table({
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
                  text: "Tableau des niveaux d'acc??s",
                  style: "GAL1",
                }),
              ],
              shading: {
                type: ShadingType.SOLID,
                color: DARKGREY,
              },
              columnSpan: 4,
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph({
                  text: "Nom",
                  style: "GAL2",
                }),
              ],
              shading: {
                type: ShadingType.SOLID,
                color: GREY,
              },
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: "Niveau",
                  style: "GAL2",
                }),
              ],
              shading: {
                type: ShadingType.SOLID,
                color: GREY,
              },
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: "Permissions",
                  style: "GAL2",
                }),
              ],
              shading: {
                type: ShadingType.SOLID,
                color: GREY,
              },
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: "Mot de passe",
                  style: "GAL2",
                }),
              ],
              shading: {
                type: ShadingType.SOLID,
                color: GREY,
              },
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph({
                  text: "Utilisateur",
                  style: "GAL3",
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: "0",
                  style: "GAL3",
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: "Visualisation",
                  style: "GAL3",
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: "0",
                  style: "GAL3",
                }),
              ],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph({
                  text: "Op??rateur",
                  style: "GAL3",
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: "1",
                  style: "GAL3",
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: "Marche / Arr??t de l'installation et acquittement des alarmes",
                  style: "GAL3",
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: "1",
                  style: "GAL3",
                }),
              ],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph({
                  text: "Administrateur",
                  style: "GAL3",
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: "2",
                  style: "GAL3",
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: "Marche / Arr??t de l'installation, acquittement des alarmes, param??trage de l'installation, acc??s ?? la vue du syst??me.",
                  style: "GAL3",
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: "2",
                  style: "GAL3",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    new Paragraph({
      text: "Image de l'IHM choisi",
      heading: HeadingLevel.HEADING_3,
    }),
    new Paragraph({
      children: [
        new ImageRun({
          data: Buffer.from(hmiImg, "base64"),
          transformation: {
            width: 320,
            height: 240,
          },
        }),
      ],
    }),
    new Paragraph({
      text: "Configuration IHM",
      heading: HeadingLevel.HEADING_2,
    }),
    new Paragraph({
      text: "Connexion des ??l??ments aux entr??es et sorties natives de l'IHM",
      heading: HeadingLevel.HEADING_3,
    }),
    functionTableForIhm
  );
  //+ Chapter 7: "Configuration et information API"
  core.push(
    new Paragraph({
      text: "Configuration et information API",
      heading: HeadingLevel.HEADING_1,
      pageBreakBefore: true,
    }),
    new Paragraph({
      text: "Information API",
      heading: HeadingLevel.HEADING_2,
    }),
    new Paragraph({
      children: [
        new TextRun({
          text: `API ${obj.ScreenInfos.PLC.Denomination}, r??f??rence: `,
        }),
        new TextRun({
          text: `${obj.ScreenInfos.PLC.Ref}`,
          bold: true,
        }),
      ],
      style: "STD",
    }),
    new Paragraph({
      text: "Configuration API",
      heading: HeadingLevel.HEADING_2,
    })
  );
  if (moduleSetUp.length !== 0) {
    // Drawing the module line up
    for (const table of moduleSetUp) {
      const legendForLineUp = new Paragraph({
        children: [],
        style: "STD",
      });
      const drawingForLineUp = new Paragraph({
        children: [],
      });
      for (const item of table) {
        const leg = item[4];
        const img = item[1];
        // Dynamic import of image
        const modImg = await import(`../data/images/${img}.js`);
        // Get base64 str only
        const moduleImgBase64 = modImg[img];
        legendForLineUp.root.push(
          new TextRun({
            text: `MOD${leg}_ `,
          })
        );
        drawingForLineUp.root.push(
          new ImageRun({
            data: Buffer.from(moduleImgBase64, "base64"),
            transformation: {
              width: 45,
              height: 120,
            },
          })
        );
      }
      const paragraphTitle = new Paragraph({
        text: `Agencement modules I/O, ${obj.ScreenInfos.BRAND}`,
        heading: HeadingLevel.HEADING_3,
      });
      const moduleTitle = new Paragraph({
        text: "Connexion des ??l??ments aux modules d'entr??es et sorties",
        heading: HeadingLevel.HEADING_3,
      });
      core.push(
        paragraphTitle,
        legendForLineUp,
        drawingForLineUp,
        moduleTitle,
        functionTableForModules
      );
    }
  } else {
    core.push(
      new Paragraph({
        text: "Aucun module d'entr??es et sorties utilis??s dans cette installation.",
        style: "STD",
      })
    );
  }
  //+ Chapter 8: "Code couleurs"
  core.push(
    new Paragraph({
      text: "Code couleurs",
      heading: HeadingLevel.HEADING_1,
      pageBreakBefore: true,
    }),
    new Paragraph({
      text: "R??sum?? / vue IHM",
      heading: HeadingLevel.HEADING_2,
    }),
    new Paragraph({
      children: [
        new ImageRun({
          data: Buffer.from(CCOULEUR, "base64"),
          transformation: {
            width: 400,
            height: 310,
          },
        }),
      ],
    }),
    new Paragraph({
      text: "Affichage num??rique",
      heading: HeadingLevel.HEADING_2,
    }),
    new Paragraph({
      children: [
        new TextRun({
          text: "Diff??rents types de variables analogiques sont pr??sents sur les diff??rentes vues.",
        }),
        new TextRun({
          text: "Pour certaines, il est seulement possible de visualiser la valeur, pour d'autres, il est possible d'entrer une valeur.",
          break: 1,
        }),
        new TextRun({
          text: "Valeur en lecture et en ??criture:",
          bold: true,
          break: 1,
        }),
      ],
      style: "STD",
    }),
    new Paragraph({
      children: [
        new ImageRun({
          data: Buffer.from(IWV, "base64"),
          transformation: {
            width: 60,
            height: 30,
          },
        }),
      ],
    }),
    new Paragraph({
      children: [
        new TextRun({
          text: "Valeur en lecture seule:",
          bold: true,
        }),
      ],
      style: "STD",
    }),
    new Paragraph({
      children: [
        new ImageRun({
          data: Buffer.from(IRV, "base64"),
          transformation: {
            width: 60,
            height: 30,
          },
        }),
      ],
    }),
    new Paragraph({
      text: "Alarmes et d??fauts",
      heading: HeadingLevel.HEADING_2,
    }),
    new Paragraph({
      children: [
        new ImageRun({
          data: Buffer.from(ALARMES, "base64"),
          transformation: {
            width: 450,
            height: 310,
          },
        }),
      ],
    }),
    new Paragraph({
      text: "Explications",
      heading: HeadingLevel.HEADING_3,
    }),
    new Paragraph({
      children: [
        new TextRun({
          text: "Les alarmes qui ont disparu sont indiqu??es en blanc.",
        }),
        new TextRun({
          text: "La date et l'heure de d??clenchement de l'alarme sont indiqu??es ?? gauche.",
          break: 1,
        }),
        new TextRun({
          text: "Le nombre de fois que l'alarme a ??t?? d??clench??e est indiqu?? ?? droite du texte.",
          break: 1,
        }),
        new TextRun({
          text: "La suppression d'une alarme disparue se fait en s??lectionnant la ligne concern??e puis en appuyant sur le bouton 'Supprimer' (niveau 1 requis).",
          break: 1,
        }),
        new TextRun({
          text: "Pour supprimer toutes les alarmes disparues, s??lectionnez la table des alarmes et appuyez sur le bouton 'Supprimer tout' (niveau 1 requis).",
          break: 1,
        }),
      ],
      style: "STD",
    })
  );
  //+ Chapter 9: "Bloc de fonctions"
  for (const elem of obj.ElementInfos) {
    if (elem.Infos.FB === "FB001") {
      FB001 = true;
    }
  }
  if (FB001) {
    const b64Img = await import("../data/images/VUEFB001.js");
    core.push(
      new Paragraph({
        text: "Description du bloc de fonctions FB001",
        heading: HeadingLevel.HEADING_1,
        pageBreakBefore: true,
      }),
      new Paragraph({
        text: "Description g??n??rale",
        heading: HeadingLevel.HEADING_2,
      }),
      new Paragraph({
        text: "Il s'agit d'une installation enti??rement personnalis??e, cependant certains ??l??ments sont identiques, pour eux nous utiliserons la m??thode de programmation par blocs fonctionnels (FB).L'instrumentation sera g??r??e par des blocs standardis??s, afin d'assurer une homog??n??isation de la programmation. Ce chapitre pr??sente leurs fonctionnalit??s.",
        style: "STD",
      }),
      new Paragraph({
        text: "Bloc de fonctions 'Mesures analogiques'",
        heading: HeadingLevel.HEADING_2,
      }),
      new Paragraph({
        text: "Le bloc de fonctions FB001 est utilis?? pour: ",
        style: "STD",
      }),
      new Paragraph({
        text: "Afficher la valeur mesur??e ?? partir d'un signal ??lectrique (4-20mA ou 0-10V).",
        bullet: {
          level: 0,
        },
        style: "STD",
      }),
      new Paragraph({
        text: "D??finir l'??chelle de la valeur mesur??e.",
        bullet: {
          level: 0,
        },
        style: "STD",
      }),
      new Paragraph({
        text: "Filtrer la valeur mesur??e.",
        bullet: {
          level: 0,
        },
        style: "STD",
      }),
      new Paragraph({
        text: "Ajouter un d??calage (offset) qui peut corriger une d??rivation potentielle.",
        bullet: {
          level: 0,
        },
        style: "STD",
      }),
      new Paragraph({
        text: "Forcer une valeur ?? effectuer des tests.",
        bullet: {
          level: 0,
        },
        style: "STD",
      }),
      new Paragraph({
        text: "G??rer l'affichage et les ??chelles des courbes.",
        bullet: {
          level: 0,
        },
        style: "STD",
      }),
      new Paragraph({
        text: "D??tecter une panne du capteur.",
        bullet: {
          level: 0,
        },
        style: "STD",
      }),
      new Paragraph({
        text: "M??moriser 4 seuils d'alarmes et un d??faut de capteur.",
        bullet: {
          level: 0,
        },
        style: "STD",
      }),
      new Paragraph({
        text: "La gestion de 4 seuils d'alarmes, chaque seuil peut ??tre activ?? ou d??sactiv?? via le panneau (ces seuils sont utilis??s pour le diagnostic, ils ne sont pas utilis??s pour le processus, toutes les alarmes sont temporis??es).",
        bullet: {
          level: 0,
        },
        style: "STD",
      }),
      new Paragraph({
        text: "R??cup??rer les param??tres d'usine.",
        bullet: {
          level: 0,
        },
        style: "STD",
      }),
      new Paragraph({
        text: "Gestion et description des d??fauts",
        heading: HeadingLevel.HEADING_3,
      }),
      new Table({
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
                    text: "Tableau des d??fauts",
                    style: "GAL1",
                  }),
                ],
                shading: {
                  type: ShadingType.SOLID,
                  color: DARKGREY,
                },
                columnSpan: 4,
              }),
            ],
          }),
          new TableRow({
            children: [
              new TableCell({
                children: [
                  new Paragraph({
                    text: "Label",
                    style: "GAL2",
                  }),
                ],
                shading: {
                  type: ShadingType.SOLID,
                  color: GREY,
                },
              }),
              new TableCell({
                children: [
                  new Paragraph({
                    text: "D??signation",
                    style: "GAL2",
                  }),
                ],
                shading: {
                  type: ShadingType.SOLID,
                  color: GREY,
                },
              }),
              new TableCell({
                children: [
                  new Paragraph({
                    text: "Type",
                    style: "GAL2",
                  }),
                ],
                shading: {
                  type: ShadingType.SOLID,
                  color: GREY,
                },
              }),
              new TableCell({
                children: [
                  new Paragraph({
                    text: "Effet",
                    style: "GAL2",
                  }),
                ],
                shading: {
                  type: ShadingType.SOLID,
                  color: GREY,
                },
              }),
            ],
          }),
          new TableRow({
            children: [
              new TableCell({
                children: [
                  new Paragraph({
                    text: "def_signal_[TAG]",
                    style: "GAL3",
                  }),
                ],
              }),
              new TableCell({
                children: [
                  new Paragraph({
                    text: "D??faut du capteur",
                    style: "GAL3",
                  }),
                ],
              }),
              new TableCell({
                children: [
                  new Paragraph({
                    text: "TMI",
                    style: "GAL3",
                  }),
                ],
              }),
              new TableCell({
                children: [
                  new Paragraph({
                    text: "Afficher un avertissement",
                    style: "GAL3",
                  }),
                ],
              }),
            ],
          }),
          new TableRow({
            children: [
              new TableCell({
                children: [
                  new Paragraph({
                    text: "def_SL_[TAG]",
                    style: "GAL3",
                  }),
                ],
              }),
              new TableCell({
                children: [
                  new Paragraph({
                    text: "D??faut seuil bas",
                    style: "GAL3",
                  }),
                ],
              }),
              new TableCell({
                children: [
                  new Paragraph({
                    text: "PMI",
                    style: "GAL3",
                  }),
                ],
              }),
              new TableCell({
                children: [
                  new Paragraph({
                    text: "Afficher un avertissement",
                    style: "GAL3",
                  }),
                ],
              }),
            ],
          }),
          new TableRow({
            children: [
              new TableCell({
                children: [
                  new Paragraph({
                    text: "def_SLL_[TAG]",
                    style: "GAL3",
                  }),
                ],
              }),
              new TableCell({
                children: [
                  new Paragraph({
                    text: "D??faut seuil tr??s bas",
                    style: "GAL3",
                  }),
                ],
              }),
              new TableCell({
                children: [
                  new Paragraph({
                    text: "PMA",
                    style: "GAL3",
                  }),
                ],
              }),
              new TableCell({
                children: [
                  new Paragraph({
                    text: "Ramener l'installation ?? l'??tat par d??faut",
                    style: "GAL3",
                  }),
                ],
              }),
            ],
          }),
          new TableRow({
            children: [
              new TableCell({
                children: [
                  new Paragraph({
                    text: "def_SH_[TAG]",
                    style: "GAL3",
                  }),
                ],
              }),
              new TableCell({
                children: [
                  new Paragraph({
                    text: "D??faut seuil haut",
                    style: "GAL3",
                  }),
                ],
              }),
              new TableCell({
                children: [
                  new Paragraph({
                    text: "PMI",
                    style: "GAL3",
                  }),
                ],
              }),
              new TableCell({
                children: [
                  new Paragraph({
                    text: "Afficher un avertissement",
                    style: "GAL3",
                  }),
                ],
              }),
            ],
          }),
          new TableRow({
            children: [
              new TableCell({
                children: [
                  new Paragraph({
                    text: "def_SHH_[TAG]",
                    style: "GAL3",
                  }),
                ],
              }),
              new TableCell({
                children: [
                  new Paragraph({
                    text: "D??faut seuil tr??s haut",
                    style: "GAL3",
                  }),
                ],
              }),
              new TableCell({
                children: [
                  new Paragraph({
                    text: "PMA",
                    style: "GAL3",
                  }),
                ],
              }),
              new TableCell({
                children: [
                  new Paragraph({
                    text: "Ramener l'installation ?? l'??tat par d??faut",
                    style: "GAL3",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      new Paragraph({
        text: "Vue IHM FB001",
        heading: HeadingLevel.HEADING_3,
      }),
      new Paragraph({
        children: [
          new ImageRun({
            data: Buffer.from(b64Img.VUEFB001, "base64"),
            transformation: {
              width: 450,
              height: 310,
            },
          }),
        ],
      }),
      new Paragraph({
        text: "Description",
        heading: HeadingLevel.HEADING_3,
      }),
      new Paragraph({
        children: [
          new TextRun({
            text: "N??1:  ",
            bold: true,
          }),
          new TextRun({
            text: " Bouton poussoir d'activation du d??faut du capteur [TAG]",
          }),
          new TextRun({
            text: "N??2:  ",
            break: 1,
            bold: true,
          }),
          new TextRun({
            text: " Affichage de la mesure [TAG]",
          }),
          new TextRun({
            text: "N??3:  ",
            break: 1,
            bold: true,
          }),
          new TextRun({
            text: " R??glage de la temporisation avant d??faut [TAG]",
          }),
          new TextRun({
            text: "N??4:  ",
            break: 1,
            bold: true,
          }),
          new TextRun({
            text: " M??morisation du d??faut [TAG]",
          }),
          new TextRun({
            text: "N??5:  ",
            break: 1,
            bold: true,
          }),
          new TextRun({
            text: " Indication lumineuse du d??faut [TAG]",
          }),
          new TextRun({
            text: "N??6:  ",
            break: 1,
            bold: true,
          }),
          new TextRun({
            text: " Bouton d'activation de for??age [TAG]",
          }),
          new TextRun({
            text: "N??7:  ",
            break: 1,
            bold: true,
          }),
          new TextRun({
            text: " Indication de la valeur forc??e [TAG]",
          }),
          new TextRun({
            text: "N??8:  ",
            break: 1,
            bold: true,
          }),
          new TextRun({
            text: " Indicateur valeur forc??e [TAG]",
          }),
          new TextRun({
            text: "N??9:  ",
            break: 1,
            bold: true,
          }),
          new TextRun({
            text: " Activation d??faut SHH [TAG]",
          }),
          new TextRun({
            text: "N??10:  ",
            break: 1,
            bold: true,
          }),
          new TextRun({
            text: " R??glage SHH [TAG]",
          }),
          new TextRun({
            text: "N??11:  ",
            break: 1,
            bold: true,
          }),
          new TextRun({
            text: " Temporisation du d??faut de signal SHH [TAG]",
          }),
          new TextRun({
            text: "N??12:  ",
            break: 1,
            bold: true,
          }),
          new TextRun({
            text: " M??morisation du d??faut SHH [TAG]",
          }),
          new TextRun({
            text: "N??13:  ",
            break: 1,
            bold: true,
          }),
          new TextRun({
            text: " Indication lumineuse SHH [TAG]",
          }),
          new TextRun({
            text: "N??14:  ",
            break: 1,
            bold: true,
          }),
          new TextRun({
            text: " Activation d??faut SH [TAG]",
          }),
          new TextRun({
            text: "N??15:  ",
            break: 1,
            bold: true,
          }),
          new TextRun({
            text: " R??glage SH [TAG]",
          }),
          new TextRun({
            text: "N??16:  ",
            break: 1,
            bold: true,
          }),
          new TextRun({
            text: " Temporisation du d??faut de signal SH [TAG]",
          }),
          new TextRun({
            text: "N??17:  ",
            break: 1,
            bold: true,
          }),
          new TextRun({
            text: " M??morisation du d??faut SH [TAG]",
          }),
          new TextRun({
            text: "N??18:  ",
            break: 1,
            bold: true,
          }),
          new TextRun({
            text: " Indication lumineuse SH [TAG]",
          }),
          new TextRun({
            text: "N??19:  ",
            break: 1,
            bold: true,
          }),
          new TextRun({
            text: " Activation d??faut SL [TAG]",
          }),
          new TextRun({
            text: "N??20:  ",
            break: 1,
            bold: true,
          }),
          new TextRun({
            text: " R??glage SL [TAG]",
          }),
          new TextRun({
            text: "N??21:  ",
            break: 1,
            bold: true,
          }),
          new TextRun({
            text: " Temporisation du d??faut de signal SL [TAG]",
          }),
          new TextRun({
            text: "N??22:  ",
            break: 1,
            bold: true,
          }),
          new TextRun({
            text: " M??morisation du d??faut SL [TAG]",
          }),
          new TextRun({
            text: "N??23:  ",
            break: 1,
            bold: true,
          }),
          new TextRun({
            text: " Indication lumineuse SL [TAG]",
          }),
          new TextRun({
            text: "N??24:  ",
            break: 1,
            bold: true,
          }),
          new TextRun({
            text: " Activation d??faut SLL [TAG]",
          }),
          new TextRun({
            text: "N??25:  ",
            break: 1,
            bold: true,
          }),
          new TextRun({
            text: " R??glage SLL [TAG]",
          }),
          new TextRun({
            text: "N??26:  ",
            break: 1,
            bold: true,
          }),
          new TextRun({
            text: " Temporisation du d??faut de signal SLL [TAG]",
          }),
          new TextRun({
            text: "N??27:  ",
            break: 1,
            bold: true,
          }),
          new TextRun({
            text: " M??morisation du d??faut SLL [TAG]",
          }),
          new TextRun({
            text: "N??28:  ",
            break: 1,
            bold: true,
          }),
          new TextRun({
            text: " Indication lumineuse SLL [TAG]",
          }),
          new TextRun({
            text: "N??29:  ",
            break: 1,
            bold: true,
          }),
          new TextRun({
            text: " R??glages de l'??chelle MAX [TAG]",
          }),
          new TextRun({
            text: "N??30:  ",
            break: 1,
            bold: true,
          }),
          new TextRun({
            text: " R??glages de l'??chelle MIN [TAG]",
          }),
        ],
        style: "STD",
      })
    );
  }
  //+ Chapter 10: "Fonctionnement de l'installation"
  core.push(
    new Paragraph({
      text: "Fonctionnement de l'installation",
      heading: HeadingLevel.HEADING_1,
      pageBreakBefore: true,
    }),
    new Paragraph({
      text: "=======================================================================================================================================================================================",
      style: "STD",
    })
  );
  //+ Chapter 11: "Open Air"
  if (obj.ProjectInfos.OpenAir && compressorModuleLineUpList.length !== 0) {
    core.push(
      new Paragraph({
        text: "Open Air",
        heading: HeadingLevel.HEADING_1,
        pageBreakBefore: true,
      }),
      new Paragraph({
        children: [
          new TextRun({
            text: "Chez ",
          }),
          new TextRun({
            text: "Dalkia Air Solution ",
            bold: true,
          }),
          new TextRun({
            text: "nous concevons et d??ployons notre propre syst??me de s??quenceur, ce chapitre d??tail et explique son architecture et son fonctionnement.",
          }),
        ],
        style: "STD",
      }),
      new Paragraph({
        text: "Conception et architecture interne",
        heading: HeadingLevel.HEADING_2,
      })
    );
    // Drawing the module line up
    for (const item of compressorModuleLineUpList) {
      const lineUp = item[1];
      const title = item[0]["tag"];
      const titleForLineUp = new Paragraph({
        text: `Agencement modules I/O, compresseur: ${title}`,
        heading: HeadingLevel.HEADING_3,
      });
      const legendForLineUp = new Paragraph({
        children: [],
        style: "STD",
      });
      const drawingForLineUp = new Paragraph({
        children: [],
      });
      for (const item of lineUp) {
        const leg = item[4];
        const img = item[1];
        // Dynamic import of image
        const modImg = await import(`../data/images/${img}.js`);
        // Get base64 str only
        const moduleImgBase64 = modImg[img];
        legendForLineUp.root.push(
          new TextRun({
            text: `MOD${leg}_ `,
          })
        );
        drawingForLineUp.root.push(
          new ImageRun({
            data: Buffer.from(moduleImgBase64, "base64"),
            transformation: {
              width: 45,
              height: 120,
            },
          })
        );
      }
      // I/O table attribution and function
      //! Cr??er une fonction qui retourne le tableau des IO (cf exemple)
      const textTableTitle = new Paragraph({
        text: "Connexion des ??l??ments aux modules d'entr??es et sorties",
        heading: HeadingLevel.HEADING_3,
      });
      const result = generateOpenAirFunctionTable(item);
      core.push(
        titleForLineUp,
        legendForLineUp,
        drawingForLineUp,
        textTableTitle,
        result
      );
    }
    // I/O table attribution and function for open air
  }
  //+ Chapter 12: "D??finitions des objets"
  core.push(
    new Paragraph({
      text: "D??finitions des objets",
      heading: HeadingLevel.HEADING_1,
      pageBreakBefore: true,
    })
  );
  for (const elem of obj.ElementInfos) {
    // Get PINS table
    const pinsObj = elem.Infos.PINS;
    // Build CMD table
    const commandTable = generateCmdTable(elem);
    // Build FAULT table
    const faultTable = generateFaultTable(elem);
    // Push Title and introduction texte
    core.push(
      new Paragraph({
        text: `${elem.Infos.NAME}, Tag N?? ${elem.tag}`,
        heading: HeadingLevel.HEADING_2,
      }),
      new Paragraph({
        text: "Informations",
        heading: HeadingLevel.HEADING_3,
      }),
      new Paragraph({
        text: `${elem.Infos.INFO}`,
        style: "STD",
      }),
      new Paragraph({
        text: "Tous les ??l??ments dessin??s sur le P&ID avec cette ??tiquette sont trait??s de la m??me mani??re :",
        style: "STD",
      })
    );
    // Push different label from PINS table
    for (const [key, value] of Object.entries(pinsObj)) {
      core.push(
        new Paragraph({
          children: [
            new TextRun({
              text: `<${key}>`,
              bold: true,
            }),
            new TextRun({
              text: " = ",
            }),
            new TextRun({
              text: value,
            }),
          ],
          style: "STD",
        })
      );
    }
    core.push(
      // Push titles and commande tables
      new Paragraph({
        text: "Commande(s)",
        heading: HeadingLevel.HEADING_3,
      }),
      commandTable,
      // Push titles and fault tables
      new Paragraph({
        text: "D??faut(s)",
        heading: HeadingLevel.HEADING_3,
      }),
      faultTable
    );
  }
  //+ Chapter 13: "Gestion des alarmes"
  core.push(
    new Paragraph({
      text: "Gestion des alarmes",
      heading: HeadingLevel.HEADING_1,
      pageBreakBefore: true,
    }),
    new Paragraph({
      text: "Introduction",
      heading: HeadingLevel.HEADING_2,
    }),
    new Paragraph({
      text: "La gestion de la s??curit?? partage quatre niveaux de d??fauts. Toutes les familles de d??fauts, lorsqu'elles sont d??clench??es, d??clenchent une synth??se et un message de d??faut sur l'??cran des alarmes de l'IHM. Une demande d'acquittement permet d'acquitter et de r??initialiser le d??faut. Les alarmes sont class??es en 2 cat??gories : ",
      style: "STD",
    }),
    new Paragraph({
      text: "D??faut mineur (TMI & PMI)",
      heading: HeadingLevel.HEADING_3,
    }),
    new Paragraph({
      text: "Alerte sans impact imm??diat sur la capacit?? du syst??me ?? assurer les fonctions principales du processus ou lorsque l'??tat d'une mesure s'approche des limites ultimes d'un processus. Sans traitement, une alarme mineure peut conduire ?? une alarme majeure du fait de l'??volution du ph??nom??ne. Ce type d'alarme peut ??tre trait?? en quelques jours et permet d'??viter les alarmes majeures.",
      style: "STD",
    }),
    new Paragraph({
      text: "D??faut majeur (TMA & PMA)",
      heading: HeadingLevel.HEADING_3,
    }),
    new Paragraph({
      text: "??tat d'un ??quipement le rendant inop??rant ou ??tat d'une mesure ayant d??pass?? les sp??cifications ultimes d'un processus. Ce type d'alarme doit ??tre trait?? comme une urgence afin d'??viter une perte de production et/ou un risque d'endommagement des ??quipements.",
      style: "STD",
    }),
    new Paragraph({
      text: "Liste des d??fauts",
      heading: HeadingLevel.HEADING_2,
    })
  );
  for (const elem of obj.ElementInfos) {
    const oaTable = generateOverAllFaultTable(elem);
    core.push(oaTable);
  }
  //* Document structure & style
  const doc = new Document({
    creator: "NCR",
    title: "Draft",
    description: "AF Draft",
    styles: {
      default: {
        heading1: {
          run: {
            size: 32,
            bold: false,
            italics: false,
            color: TITRE1,
            font: "Calibri",
            /* underline: {}, */
          },
          paragraph: {
            spacing: {
              before: 120,
              after: 120,
            },
          },
        },
        heading2: {
          run: {
            size: 28,
            bold: false,
            italics: false,
            color: TITRE2,
            font: "Calibri",
            /* underline: {}, */
          },
          paragraph: {
            spacing: {
              before: 180,
              after: 20,
            },
          },
        },
        heading3: {
          run: {
            size: 24,
            bold: false,
            italics: false,
            color: TITRE3,
            font: "Calibri",
            underline: {},
          },
          paragraph: {
            spacing: {
              before: 175,
              after: 20,
            },
          },
        },
        listParagraph: {
          run: {
            color: BLACK,
          },
        },
      },
      paragraphStyles: [
        {
          // GREY array title (line 1)
          id: "GAL1",
          name: "GAL1",
          basedOn: "Normal",
          next: "Normal",
          run: {
            size: 20,
            bold: true,
            italics: false,
            color: BLACK,
            font: "Calibri",
          },
          paragraph: {
            spacing: {
              line: 276,
            },
            indent: {
              left: 0,
            },
          },
        },
        {
          // GREY array line 2
          id: "GAL2",
          name: "GAL2",
          basedOn: "Normal",
          next: "Normal",
          run: {
            size: 20,
            bold: true,
            italics: false,
            color: BLACK,
            font: "Calibri",
          },
          paragraph: {
            spacing: {
              line: 276,
            },
            indent: {
              left: 0,
            },
          },
        },
        {
          // Normal / Standard style
          id: "GAL3",
          name: "GAL3",
          basedOn: "Normal",
          next: "Normal",
          run: {
            size: 20,
            bold: false,
            italics: false,
            color: BLACK,
            font: "Calibri",
          },
          paragraph: {
            spacing: {
              before: 10,
              after: 10,
              line: 276,
            },
            indent: {
              left: 0,
            },
          },
        },
        {
          // Normal / Standard style
          id: "BOLD",
          name: "BOLD",
          basedOn: "Normal",
          next: "Normal",
          run: {
            size: 20,
            bold: true,
            italics: false,
            color: BLACK,
            font: "Calibri",
          },
          paragraph: {
            spacing: {
              before: 0,
              after: 0,
              line: 276,
            },
            indent: {
              left: 0,
            },
          },
        },
        {
          // Normal / Standard style only for table design
          id: "STDTABLE",
          name: "STDTABLE",
          basedOn: "Normal",
          next: "Normal",
          run: {
            size: 20,
            bold: false,
            italics: false,
            color: BLACK,
            font: "Calibri",
          },
          paragraph: {
            spacing: {
              before: 0,
              after: 0,
              line: 276,
            },
            indent: {
              left: 0,
            },
          },
        },
        {
          // Normal / Standard style
          id: "STD",
          name: "STD",
          basedOn: "Normal",
          next: "Normal",
          run: {
            size: 20,
            bold: false,
            italics: false,
            color: BLACK,
            font: "Calibri",
          },
          paragraph: {
            spacing: {
              before: 10,
              after: 0,
              line: 276,
            },
            indent: {
              left: 0,
            },
          },
        },
      ],
    },
    numbering: {
      config: [
        {
          reference: "my-crazy-numbering",
          levels: [
            {
              level: 0,
              format: LevelFormat.LOWER_LETTER,
              text: "%1)",
              alignment: AlignmentType.LEFT,
            },
          ],
        },
      ],
    },
    sections: [{ children: core }],
  });
  //* Print document
  Packer.toBlob(doc).then((blob) => {
    saveAs(blob, "Draft.docx");
  });
  return false;
}
