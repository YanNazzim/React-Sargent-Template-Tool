// src/data/BoredLocksData.js
import { Images } from "../images/images"; // Import the Images object

const roseTrims = [
  "ER",
  "ES",
  "ET",
  "EC",
  "E",
  "CO",
  "O",
  "G",
  "L",
  "K",
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

export const BoredLocks = {
  "11 Line": [
    {
      device: "11 Line",
      image: Images.Bored11, // Use Images object reference
      functions:
        "11G13, 11G15-3, 11U15, 11U65, 11U68, 11U93, 11U94, 11U94-2, 11G04, 11G05, 11G24, 11G37, 11G44, 11G50, 11G54, 11G16, 11G17, 11G30, 11G38, Bored, Cylindrical, KIL, KIK, Key In Knob, Key In Lever, 11 Line",
      MechOptions:
        "23, 25, 28, 31, 37, 41, 74, 75, 76, 77, 85, 86, 87, SG, CPC, SL, STC, WBS",
      CylOptions:
        "10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 80, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, SF, BR, KD, 30, VC, YC, YRC, YRC-7P, YC-7P, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      finishes:
        "03, US03, 04, US04, US09, 09, US10, 10, 10B, 10BE, 10BL, US14, US15, 20D, 26D, 26, 32, 32D, BSP, WSP, 605, 606, 611, 612, 613, 613E, 613L, 618, 619, 624, 625, 626, 629, 630",
      trims: trimsString,
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V, V",

      title: "11 Line",

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055639",
      text: "View Mounting Template Doc# 4527",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055640",
      text1: "View Mounting Template (93 & 94 Function) Doc# 4539 ",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055647",
      text2: "View 505 Full Lip Strike Template Doc# 4421",
      link4: "https://storage.googleapis.com/aa-americas/dam/AADSS1055642",
      text4: "View 800 Strike Template Doc# 4131",
      link5: "https://storage.googleapis.com/aa-americas/dam/AADSS1055641",
      text5: "View 808 Strike Template Doc# 4049",
    },
  ],
  "10X Line": [
    {
      device: "10X Line",
      image: Images.Bored10x, // Use Images object reference
      functions:
        "10XG04, 10XG05, 10XG07, 10XG08, 10XG24, 10XG37, 10XG44, 10XG50, 10XG63, 10XG53, 10XG54, 10XG60, 10XG16, 10XG17, 10XG26, 10XG30, 10XG38, 10XG13, 10XG14, 10XG15, 10XG15-3, 10XG64, 10XG65, 10XU65, 10XU66, 10XU68, 10XU93, 10XU94, 10XU94-2, Bored, Cylindrical, KIL, KIK, Key In Knob, Key In Lever",
      MechOptions:
        "23, 25, 28, 31, 37, 41, 74, 75, 76, 77, 85, 86, 87, SG, CPC, SL, STC, WBS, V30, V60, V03, V06, V33, V66, RPB",
      CylOptions:
        "10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 80, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, SF, BR, KD, 30, VC, YC, YRC, YRC-7P, YC-7P, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      finishes:
        "03, US03, 04, US04, US09, 09, US10, 10, 10B, 10BE, 10BL, US14, US15, 20D, 26D, 26, 32, 32D, BSP, WSP, 605, 606, 611, 612, 613, 613E, 613L, 618, 619, 624, 625, 626, 629, 630",
      trims: trimsString,
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V, V",

      title: "10X",

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1181919",
      text: "View Mounting Template Doc# A8294",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1218477",
      text1: "View Mounting Template (G70 & G71 Function) Doc# 4756 ",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1205071",
      text2: "View BHW Trim Template Doc# 4753",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1055647",
      text3: "View 505 Full Lip Strike Template Doc# 4421",
      link5: "https://storage.googleapis.com/aa-americas/dam/AADSS1055642",
      text5: "View 800 Strike Template Doc# 4131",
      link6: "https://storage.googleapis.com/aa-americas/dam/AADSS1055641",
      text6: "View 808 Strike Template Doc# 4049 ",
    },
    {
      device: '10X Line',

      title: 'KP 10X Line',
      image: Images.KP10X,
      functions: "77, 10XG77, KP8977, KP8978, KP, PE, PE8977, PE8978, Fail, Secure, Safe",
      MechOptions:
      "KP, 12, 16, 19, 23, 25, 29, 36, 37, 41, 75, 76, 77, 85, 86, 87, CPC, SG, 18, WR, FW",
    ElecOptions:
      "AL, 53, W53, 54, W54, 55, W55, 55-ERM, ERM, W55-ERM, W55, 56, 56-HK, 58, 59, WH",
    CylOptions:
      "BR, KD, LC, 30, SF, YC, YC-7P, YRC, SC, SE, 10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
    railSizes: "E, F, J, G",
    handing: "LHR, LH, LHRB, RHR, RH, RHRB",
    voltage: "12V, 24V, 12 V, 24 V",
    finishes:
      "03, US03, 04, US04, US09, 09, US10, 10, 10B, 10BE, 10BL, US14, US15, 20D, 26D, 26, 32, 32D, BSP, WSP, 605, 606, 611, 612, 613, 613E, 613L, 618, 619, 624, 625, 626, 629, 630",
      trims:trimsString,

      link: 'https://storage.googleapis.com/aa-americas/dam/AADSS1245557',
      text: 'View Metal and Wood Doors Mounting Template Doc# 4757',
      link1: 'https://storage.googleapis.com/aa-americas/dam/AADSS1230483',
      text1: 'View Full Device Installation Instructions Doc# A8355',
      link2: 'https://storage.googleapis.com/aa-americas/dam/AADSS1054988',
      text2: 'View 52-2847 Weather Seal Conduit Installation Instructions Doc# A7721',
      link3: 'https://storage.googleapis.com/aa-americas/dam/AADSS1055024',
      text3: 'View Door Position Switch (Frame) Installation Instructions Doc# A7983',
      link4: 'https://storage.googleapis.com/aa-americas/dam/AADSS1055023',
      text4: 'View Door Position Switch (Frame) Installation Instructions Doc# A8005',
      link5: 'https://storage.googleapis.com/aa-americas/dam/AADSS1179497',
      text5: 'View Controller Replacement 52-6085 Installation Instructions Doc# A8288',
      link6: 'https://storage.googleapis.com/aa-americas/dam/AADSS1179499',
      text6: 'View Weatherization Kit 52-6084 Installation Instructions Doc# A8289',
    },
  ],

  "8X Line": [
    {
      device: "8X Line",
      image: Images.Bored8x, // Use Images object reference
      functions:
        "8XG04, 8XG05, 8XG37, 8XU65, 8XG17, 8XG15, 8XG93, Bored, Cylindrical, KIL, KIK, Key In Knob, Key In Lever",
      MechOptions: "28, 36, 37, WBS",
      CylOptions:
        "10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 80, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, SF, BR, KD, 30, VC, YC, YRC, YRC-7P, YC-7P, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      finishes: "03, US03, 10BE, 32D, 605, 613E, 630",
      trims: trimsString,
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V, V",

      title: "8X",

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055651",
      text: "View Mounting Template (Metal & Wood) Doc# 4732",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055650",
      text1: "View Dummy Trim Template (Metal & Wood) Doc# 4733",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055647",
      text2: "View 505 Full Lip Strike Template Doc# 4421",
      link4: "https://storage.googleapis.com/aa-americas/dam/AADSS1055642",
      text4: "View 800 Strike Template Doc# 4131",
      link5: "https://storage.googleapis.com/aa-americas/dam/AADSS1055641",
      text5: "View 808 Strike Template Doc# 4049",
    },
  ],
  "7 Line": [
    {
      device: "7 Line",
      image: Images.Bored7, // Use Images object reference
      functions:
        "7G04, 7G05, 7G37, 7U15, 7G15-3, 7U65, 7U68, 7U93, 7U94, 7U94-2, Bored, Cylindrical, KIL, KIK, Key In Knob, Key In Lever",
      MechOptions:
        "1, 20, 14, 28, 36, 37, 74, 75, 76, 77, 85, 86, 87, FW, SG, CPC, WBS",
      CylOptions:
        "10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 80, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, SF, BR, KD, 30, VC, YC, YRC, YRC-7P, YC-7P, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      finishes:
        "03, US03, 10BE, 32D, 605, 613E, 630, 04, US04, 606, 09, US09, 611, 10, 612, US10, 10B, 613, 10BL, 614, 14, US14, 618, 15, US15, 619, 20D, 624, 26, 625, 26D, BSP, WSP",
      trims: trimsString,
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V, V",

      title: "7 Line",

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055645",
      text: "View Mounting Template (Metal & Wood) Doc# 4481",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055647",
      text2: "View 505 Full Lip Strike Template Doc# 4421",
      link4: "https://storage.googleapis.com/aa-americas/dam/AADSS1055642",
      text4: "View 800 Strike Template Doc# 4131",
      link5: "https://storage.googleapis.com/aa-americas/dam/AADSS1055641",
      text5: "View 808 Strike Template Doc# 4049",
    },
  ],
  "6500 Series": [
    {
      device: "6500 Series",
      image: Images.Bored6500, // Use Images object reference
      functions:
        "65G15-3, 65U15, 65U65, 65U93, 65U94, 65G04, 65G05, 65G37, Bored, Cylindrical, KIL, KIK, Key In Knob, Key In Lever",
      MechOptions: "20, 14, 28, 85, 86, 87",
      CylOptions:
        "10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 80, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, SF, BR, KD, 30, VC, YC, YRC, YRC-7P, YC-7P, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      finishes:
        "03, US03, 10BE, 32D, 605, 613E, 630, 04, US04, 606, 09, US09, 611, 10, 612, US10, 10B, 613, 10BL, 614, 14, US14, 618, 15, US15, 619, 20D, 624, 26, 625, 26D, BSP, WSP",
      trims: trimsString,
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V, V",

      title: "6500",

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055649",
      text: "View Mounting Template (Metal & Wood) Doc# 4430",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055647",
      text2: "View 505 Full Lip Strike Template Doc# 4421",
      link4: "https://storage.googleapis.com/aa-americas/dam/AADSS1055642",
      text4: "View 800 Strike Template Doc# 4131",
      link5: "https://storage.googleapis.com/aa-americas/dam/AADSS1055641",
      text5: "View 808 Strike Template Doc# 4049",
    },
  ],
  "6 Line": [
    {
      device: "6 Line",
      image: Images.Bored6, // Use Images object reference
      functions:
        "6U15, 6U65, 6U93, 6G04, 6G05, 6G37, Bored, Cylindrical, KIL, KIK, Key In Knob, Key In Lever",
      MechOptions: "14, 17, 24, 29, WBS",
      CylOptions:
        "10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 80, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, SF, BR, KD, 30, VC, YC, YRC, YRC-7P, YC-7P, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      finishes:
        "03, US03, 10BE, 32D, 605, 613E, 630, 04, US04, 606, 09, US09, 611, 10, 612, US10, 10B, 613, 10BL, 614, 14, US14, 618, 15, US15, 619, 20D, 624, 26, 625, 26D, BSP, WSP",
      trim: trimsString,
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V, V",

      title: "6 Line",

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055652",
      text: "View Mounting Template Doc# 4252",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1239453",
      text1: "View Mounting Template (93 & 94 Function) Doc# 4255 ",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055647",
      text2: "View 505 Full Lip Strike Template Doc# 4421",
      link4: "https://storage.googleapis.com/aa-americas/dam/AADSS1055642",
      text4: "View 800 Strike Template Doc# 4131",
      link5: "https://storage.googleapis.com/aa-americas/dam/AADSS1055641",
      text5: "View 808 Strike Template Doc# 4049",
    },
  ],
  "DL Series": [
    {
      device: "DL Series",
      image: Images.BoredDLSeries, // Use Images object reference
      functions: "DLU15, DLU15-3, DLU65, DLU93, DLU94, ",
      MechOptions: "12, 13, 14, 20, 28, 31, SG, TB, WBS",
      CylOptions:
        "10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 80, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, SF, BR, KD, 30, VC, YC, YRC, YRC-7P, YC-7P, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      finishes:
        "03, US03, 10BE, 32D, 605, 613E, 630, 04, US04, 606, 09, US09, 611, 10, 612, US10, 10B, 613, 10BE, 613E, 10BL, 614, 14, US14, 618, 15, US15, 619, 20D, 624, 26, 625, 26D, BSP, WSP",
      trims: trimsString,
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V, V",

      title: "DL",

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055646",
      text: "View DL Mounting Template Doc# 4584",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1066578",
      text1:
        "View DL Mounting Template (93, TB-93, and 94 Function) Doc# A7931 ",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055647",
      text2: "View 505 Full Lip Strike Template Doc# 4421",
      link4: "https://storage.googleapis.com/aa-americas/dam/AADSS1055642",
      text4: "View 800 Strike Template Doc# 4131",
      link5: "https://storage.googleapis.com/aa-americas/dam/AADSS1055641",
      text5: "View 808 Strike Template Doc# 4049",
    },
    {
      device: "DL Series",
      image: Images.BoredDLSeries, // Use Images object reference
      functions: "RDLU15, RDLU15-3, RDLU65, RDLU93, RDLU94, ",
      MechOptions: "12, 13, 14, 20, 28, 31, SG, TB, WBS",
      CylOptions:
        "10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 80, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, SF, BR, KD, 30, VC, YC, YRC, YRC-7P, YC-7P, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      finishes:
        "03, US03, 10BE, 32D, 605, 613E, 630, 04, US04, 606, 09, US09, 611, 10, 612, US10, 10B, 613, 10BE, 613E, 10BL, 614, 14, US14, 618, 15, US15, 619, 20D, 624, 26, 625, 26D, BSP, WSP",
      Trims: trimsString,
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V, V",

      title: "RDL",

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1058560",
      text: "View RDL Mounting Template Doc# 4646",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055648",
      text1: "View RDL Mounting Template (93 & 94 Function) Doc# 4666 ",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055647",
      text2: "View 505 Full Lip Strike Template Doc# 4421",
      link4: "https://storage.googleapis.com/aa-americas/dam/AADSS1055642",
      text4: "View 800 Strike Template Doc# 4131",
      link5: "https://storage.googleapis.com/aa-americas/dam/AADSS1055641",
      text5: "View 808 Strike Template Doc# 4049",
      // Add more attributes as needed
    },
  ],
  // Add more series and devices as needed
};
