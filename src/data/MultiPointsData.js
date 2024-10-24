import { Images } from "../images/images";

const roseTrims = [
  "ER",
  "ES",
  "ET",
  "EC",
  "E",
  "CO",
  "O",
  "TO",
  "E2",
  "E4",
  "LN",
  "CR",
  "TR",
  "E3",
  "CE",
  "TE",
  "LE1",
  "LE2",
  "LE3",
  "LE4",
  "LW1",
  "LS",
  "WT",
];
const leverTrims = [
  "MB",
  "ME",
  "MF",
  "MG",
  "MI",
  "MW",
  "NF",
  "MN",
  "MH",
  "MS",
  "MU",
  "MV",
  "NU",
  "WG",
  "MD",
  "MJ",
  "MP",
  "ND",
  "NJ",
  "MA",
  "MQ",
  "MT",
  "MM",
  "MO",
  "MZ",
  "GT",
  "H015",
  "H016",
  "H017",
  "H018",
  "RCM",
  "RAL",
  "REM",
  "RAM",
  "RAS",
  "RAG",
  "RGM",
  "H001",
  "H002",
  "H003",
  "H004",
  "H005",
  "H006",
  "H007",
  "H008",
  "H011",
];
const simpleLevers = [
  "A",
  "B",
  "L",
  "E",
  "F",
  "J",
  "P",
  "W",
  "R",
  "G",
  "S",
  "Y",
];

const allTrims = [];

// Add rose and lever combinations
roseTrims.forEach((rose) => {
  leverTrims.forEach((lever) => {
    allTrims.push(`${rose}${lever}`);
  });
});

// Add simple levers with roses
roseTrims.forEach((rose) => {
  simpleLevers.forEach((lever) => {
    allTrims.push(`${rose}${lever}`);
  });
});

// Add roses and levers on their own
allTrims.push(...roseTrims);
allTrims.push(...leverTrims);
allTrims.push(...simpleLevers);

// Join the resulting array into a single string for the trims field
const trimsString = allTrims.join(", ");

export const MultiPoints = {
  7000: [
    {
      device: "7000",
      image: Images.MP7000,
      title: "Standard (NB)(WD)(MD)(ELR) 7000",
      functions:
        "700106, 700113, 700115, 700143, 700146, 700173, 700174, 700606, 700613, 700615, 700673, 700674, 701006, 701013, 701015, 701073, 701074, 701306, 701313. 701315. 701343. 701346, 701616, 704043, 704046, 704315, 704340, 704343, 704346, 707306, 707313, 707315, 707373, 707374, 707406, 707413, 707415, 707473, 707474, 7000, WD7000, NB7000, WDNB7000, WD-NB-7000, WD-NB7000, WDNB-7000",
      MechOptions:
        "12, HC, WS, 31, 36, 37, 75, 76, 77, 85, 86, 87, 88, CPC, SG, NB, WD",
      ElecOptions: "53, 54, 55, ELR",
      CylOptions:
        "10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 51, 52, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 80, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, SF, BR, KD, 30, VC, YC, YRC, YRC-7P, YC-7P, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      finishes:
        "03, US03, 10BE, 32D, 605, 613E, 630, 04, US04, 606, 09, US09, 611, 10, 612, US10, 10B, 613, 10BE, 613E, 10BL, 614, 14, US14, 618, 15, US15, 619, 20D, 624, 26, 625, 26D, BSP, WSP",
      trims: trimsString,
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V, V",
      text: "View Metal Door Mounting Template Doc# 4582",
      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1056046",
      text1: "View Wood Door Mounting Template Doc# 4624",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1056047",
    },
  ],

  6100: [
    {
      device: "6100",
      title: "FM6100 ",
      image: Images.MP6100,
      functions: "6101, 6113, FM6101, FM6113",
      MechOptions: "36, 75, 76, 77, 85, 86, 87, CPC, SG",
      ElecOptions: "53, 54, 55, ELR",
      CylOptions:
        "Std, 10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 51, 52, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 80, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, SF, BR, KD, 30, VC, YC, YRC, YRC-7P, YC-7P, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      finishes:
        "03, US03, 10BE, 32D, 605, 613E, 630, 04, US04, 606, 09, US09, 611, 10, 612, US10, 10B, 613, 10BE, 613E, 10BL, 614, 14, US14, 618, 15, US15, 619, 20D, 624, 26, 625, 26D, BSP, WSP",
      trims: trimsString,
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V, V",
      text: "View Template Form (Ceco Door StormPro® 361 or Curries StormPro® 361 doors and frames)",
      link: "https://www.sargentlock.com/en/standalone/fm6100-template",
    },
  ],

  7300: [
    {
      device: "7300",
      title: "7300, FM7300, BL7300",
      image: Images.MP7300,
      functions:
        "7305, 7337, 7389, 7356, 7318, FM7318, BL7318, 7325, FM7325, BL7325, 7324, BL7324, 7327, 7326, BL7326, 7341, FM7341, BL7341, 7339, FM7339, BL7339, 7349, FM7349, BL7349, 7340, FM7340, BL7340, 7338, 7390, 7301, FM7301, BL7301, 7365, 7314, 7366, FM7366, BL7366, 7319, 7368, BL7368, 7300",
      MechOptions: "36, 75, 76, 77, 85, 86, 87, CPC, SG",
      ElecOptions: "53, 54, 55, ELR",
      CylOptions:
        "Std, 10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 51, 52, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 80, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, SF, BR, KD, 30, VC, YC, YRC, YRC-7P, YC-7P, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      finishes:
        "03, US03, 10BE, 32D, 605, 613E, 630, 04, US04, 606, 09, US09, 611, 10, 612, US10, 10B, 613, 10BE, 613E, 10BL, 614, 14, US14, 618, 15, US15, 619, 20D, 624, 26, 625, 26D, BSP, WSP",
      thumbturns:
        "130KB, 130KT, 130LB, 130KA, 130KC, t1, t2, t3, standard, 130LT, 130LC",
      trims: trimsString,
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V, V",

      text: "View Standard 7300 Template Form (Ceco Door Medallion, Curries 747 doors and frames)",
      link: "https://www.sargentlock.com/en/standalone/7300-template",
      text1:
        "View FM7300 Template Form (Ceco Door StormPro® 361 or Curries StormPro® 361 doors and frames)",
      link1: "https://www.sargentlock.com/en/standalone/fm7300-template",
      text2:
        "View BL7300 Template Form (Ceco and Curries Multi-Solution Opening doors and frames)",
      link2: "https://www.sargentlock.com/en/standalone/bl7300-template",
    },
  ],
};
