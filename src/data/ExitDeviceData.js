// ExitDeviceData.js
import { Images } from "../images/images";

const roseTrims = [
  ", 28-N-LL, 28-D-LL, 28-C-LL, 28-L-LL, 814-HTB, 814-GTB, 810-HTB, 810-GTB, 802-HTB, 802-GTB, 28-K-OB, 28-C-OB, 28-L-OB, 866-TP, 814-TP",
  "28-K-LL",
  "28-D-LL",
  "28-C-LL",
  "28-L-LL",
  "814-HTB",
  "HTB",
  "814-GTB",
  "GTB",
  "814",
  "810-HTB",
  "810-GTB",
  "810",
  "T1",
  "T2",
  "T3",
  "NE",
  "WE",
  "L",
  "G",
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
  "PTB",
  "FLL",
  "FLW",
  "MAL",
  "STS",
  "PSB",
  "FSL",
  "FSW",
  "MSL",
  "862",
];
const leverTrims = [
  "MB",
  "NF",
  "NI",
  "NS",
  "NU",
  "NJ",
  "ND",
  "ME",
  "MF",
  "MG",
  "MI",
  "MW",
  "NF",
  "MN",
  "MY",
  "MC",
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

export const ExitDevices = {
  Narrow80: [
    {
      device: "8300",

      title: "(12-)8300 Mortise Exit (04, 10, 13, 15, 40, 43, 44)",
      image: Images.narrowMortise8300, // Use Images object reference
      functions:
        "8304, 8310, 8313, 8315, 8340, 8343, 8344, Narrow, Narrow 80 Series, Narrow 80, 908, C908, 815, 815 Strike, 908 Strike, C908 Strike, 815 Open Back Strike, ET, ET Trim, 700 ET, Narrow, Exit, Device, Narrow Exit, Narrow Exit Device, Narrow Mortise, Mortise, Narrow Mortise Exit, Narrow Mortise Exit Device, 8300, 80 series, 80, Classroom, Class-Room, class, room, class room, Night Latch, Night, Latch, Store-Room, Passage",
      MechOptions:
        "12, 14, 16, 19, 23, 31, 36, 37, AD, WD, MD, HC, WS, 43, 49, 76, 85, 86, 87, GL, PL, LD, SG, TB, NB, CPC, 5CH",
      ElecOptions: "53, 54, 55, 56, 56-HK, HK, 58, 59, AL, BC, BC-59",
      CylOptions:
        "10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      railSizes: "E, F, J, G",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V",
      finishes:
        "03, US03, 04, US04, US09, 09, US10, 10, 10B, 10BE, 10BL, US14, US15, 20D, 26D, 26, 32, 32D, BSP, WSP, 605, 606, 611, 612, 613, 613E, 613L, 618, 619, 624, 625, 626, 629, 630",
      trims:trimsString,
      warning: "If using thumbpiece trim go to TP Trim section",

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055927",
      text: "View Mounting Template Doc# 4310-E",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055932",
      text1: "View (59-) Mounting Template Doc# 4458-C",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055922",
      text2: "View Trim Template (700 ET) Doc# 4277-18",
      link4: "https://storage.googleapis.com/aa-americas/dam/AADSS1055931",
      text4: "View 908/C908 Strike Standard Template Doc# 3908-Y",
      link5: "https://storage.googleapis.com/aa-americas/dam/AADSS1055930",
      text5: "View 815 Open Back Strike Template Doc# 4192-H",
      link6: "https://storage.googleapis.com/aa-americas/dam/AADSS1055898",
      text6: "View Narrow Raceway Template Doc# 4568-C",
    },
    {
      device: "8300",

      title: "(12-)8300 Mortise Exit (75, 76)",
      image: Images.narrowMortise8300, // Use Images object reference
      functions:
        "8373, 8374, 8375, 8376, Narrow, Narrow 80 Series, Narrow 80, 908, C908, 815, 815 Strike, 908 Strike, C908 Strike, 815 Open Back Strike, ET, ET Trim, 700 ET, Narrow, Exit, Device, Narrow Exit, Narrow Exit Device, Narrow Mortise, Mortise, Narrow Mortise Exit, Narrow Mortise Exit Device, 8300, 80 series, 80, Fail Safe, Fail Secure, Safe, Secure, Fail, 773, 774, 775, 776, Electrified Trim, Electrified",
      MechOptions:
        "12, 14, 16, 19, 23, 31, 36, 37, AD, WD, MD, HC, WS, 43, 49, 76, 85, 86, 87, GL, PL, LD, SG, TB, NB, CPC, 5CH",
      ElecOptions: "53, 54, 55, 56, 56-HK, HK, 58, 59, AL, BC, BC-59",
      CylOptions:
        "10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      railSizes: "E, F, J, G",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V",
      finishes:
        "03, US03, 04, US04, US09, 09, US10, 10, 10B, 10BE, 10BL, US14, US15, 20D, 26D, 26, 32, 32D, BSP, WSP, 605, 606, 611, 612, 613, 613E, 613L, 618, 619, 624, 625, 626, 629, 630",
      trims:trimsString,
      warning: "If using thumbpiece trim go to TP Trim section",

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055927",
      text: "View Mounting Template Doc# 4310-E",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055932",
      text1: "View (59-) Mounting Template Doc# 4458-C",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055928",
      text2: "View Trim Template (54-)(700 ET) Doc# 4314-T",
      link4: "https://storage.googleapis.com/aa-americas/dam/AADSS1055931",
      text4: "View 908/C908 Strike Standard Template Doc# 3908-Y",
      link5: "https://storage.googleapis.com/aa-americas/dam/AADSS1055930",
      text5: "View 815 Open Back Strike Template Doc# 4192-H",
      link6: "https://storage.googleapis.com/aa-americas/dam/AADSS1055898",
      text6: "View Narrow Raceway Template Doc# 4568-C",
    },
    {
      device: "8300",

      title: "8300 Thumbpiece Trims (04, 10, 28, 63)",
      functions:
        "8304, 8310, 8328, 8363, Narrow, Narrow 80 Series, Narrow 80, Exit, Device, Narrow Exit, Narrow Exit Device, Narrow Mortise, Mortise, Narrow Mortise Exit, Narrow Mortise Exit Device, 8300, 80 series, 80, thumbpiece, thumb, piece, thumbpiece trims, PTB, STS, MAL, FLL, FLW",
      MechOptions:
        "12, 14, 16, 19, 23, 31, 36, 37, AD, WD, MD, HC, WS, 43, 49, 76, 85, 86, 87, GL, PL, LD, SG, TB, NB, CPC, 5CH",
      ElecOptions: "53, 54, 55, 56, 56-HK, HK, 58, 59, AL, BC, BC-59",
      CylOptions:
        "10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      railSizes: "E, F, J, G",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V",
      finishes:
        "03, US03, 04, US04, US09, 09, US10, 10, 10B, 10BE, 10BL, US14, US15, 20D, 26D, 26, 32, 32D, BSP, WSP, 605, 606, 611, 612, 613, 613E, 613L, 618, 619, 624, 625, 626, 629, 630",
      trims:trimsString,
      image: Images.thumbpieceTrims,

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055887",
      text: "View FLL/FLW Trim Template (810, 814, 828, 866) Doc# 4257-D",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055888",
      text1: "View MAL Trim Template (810, 814, 828, 866) Doc# 4024-L",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055891",
      text2: "View PTB Trim Template (810, 814, 828, 866) Doc# 4221-E",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1055920",
      text3: "View STS Strim Template Doc# (810, 814, 828, 866) 4020-F",
    },
    {
      device: "MD8400",

      title: "(12-)(NB-)MD8400 (06, 10, 13, 15, 40, 43, 46)",
      functions:
        "8406, 8410, 8413, 8415, 8440, 8443, 8446, Narrow, Narrow 80 Series, Narrow 80, 80, 80 series, series, 650, 652, 606, 650 Strike, 652 Strike, 606 Strike, ET, ET Trim, 700 ET, Narrow, Narrow CVR, Narrow CVR Exit, Narrow CVR Exit Device, CVR, Exit, Device, 8400, Narrow CVR Device, 100 Aux, 100, 106, 113, Metal, Door, Metal Door, NB, Vertical Rods, Concealed Vertical Rod, Rods, Vertical, Classroom, Class-Room, class, room, class room, StoreRoom, Store Room, Store-Room, Passage",
      MechOptions:
        "12, 14, 16, 19, 23, 31, 36, 37, AD, WD, MD, HC, WS, 43, 49, 76, 85, 86, 87, GL, PL, LD, SG, TB, NB, CPC, 5CH",
      ElecOptions: "53, 54, 55, 56, 56-HK, HK, 58, 59, AL, BC, BC-59",
      CylOptions:
        "10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      railSizes: "E, F, J, G",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V, V",
      finishes:
        "03, US03, 04, US04, US09, 09, US10, 10, 10B, 10BE, 10BL, US14, US15, 20D, 26D, 26, 32, 32D, BSP, WSP, 605, 606, 611, 612, 613, 613E, 613L, 618, 619, 624, 625, 626, 629, 630",
      trims:trimsString,
      image: Images.narrowCVR8400,

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055945",
      text: "View Mounting Template (Metal Door) Doc# 4447-J",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055940",
      text1: "View Trim Template (700-4 ET) Doc# 4448-J",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055943",
      text2: "View 650/652/606 Standard Strike Template Doc# 4449-G",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1055952",
      text3: "View 106/113 Auxiliary Trim Doc# 4212-D",
      link4: "https://storage.googleapis.com/aa-americas/dam/AADSS1055898",
      text4: "View Narrow Raceway Template Doc# 4568-C",
    },
    {
      device: "MD8400",

      title: "(12-)(NB-)MD8400 (73, 74)",
      functions:
        "8473, 8474, Narrow, Narrow 80 Series, Narrow 80, 80, 80 series, series, 650, 652, 606, 650 Strike, 652 Strike, 606 Strike, Electrified, Electrified Trim, ET, ET Trim, 700 ET, Narrow, Narrow CVR, Narrow CVR Exit, Narrow CVR Exit Device, CVR, Exit, Device, 8400, Narrow CVR Device, 100 Aux, 100, 106, 113, Metal, Door, Metal Door, NB, Vertical Rods, Concealed Vertical Rod, Rods, Vertical",
      MechOptions:
        "12, 14, 16, 19, 23, 31, 36, 37, AD, WD, MD, HC, WS, 43, 49, 76, 85, 86, 87, GL, PL, LD, SG, TB, NB, CPC, 5CH",
      ElecOptions: "53, 54, 55, 56, 56-HK, HK, 58, 59, AL, BC, BC-59",
      CylOptions:
        "10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      railSizes: "E, F, J, G",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V",
      finishes:
        "03, US03, 04, US04, US09, 09, US10, 10, 10B, 10BE, 10BL, US14, US15, 20D, 26D, 26, 32, 32D, BSP, WSP, 605, 606, 611, 612, 613, 613E, 613L, 618, 619, 624, 625, 626, 629, 630",
      trims:trimsString,
      image: Images.narrowCVR8400,

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055945",
      text: "View Mounting Template (Metal Door) Doc# 4447-J",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055936",
      text1: "View Trim Template (54-)(700-4 ET) Doc# 4467-F",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055943",
      text2: "View 650/652/606 Standard Strike Template Doc# 4449-G",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1055952",
      text3: "View 106/113 Auxiliary Trim Doc# 4212-D",
      link4: "https://storage.googleapis.com/aa-americas/dam/AADSS1055898",
      text4: "View Narrow Raceway Template Doc# 4568-C",
    },
    {
      device: "AD8400",

      title: "(12-)(NB-)AD8400 (06, 10, 13, 15, 40, 43, 46)",
      functions:
        "8406, 8410, 8413, 8415, 8440, 8443, 8446, Narrow, Narrow 80 Series, Narrow 80, 80, 80 series, series, 640, Strike, 640 Strike, ET, ET Trim, 700 ET, Narrow, Narrow CVR, Narrow CVR Exit, Narrow CVR Exit Device, CVR, Exit, Device, 8400, Narrow CVR Device, 100 Aux, 100, 106, 113, Metal, Door, Metal Door, NB, Vertical Rods, Concealed Vertical Rod, Rods, Vertical, Classroom, Class-Room, class, room, class room, StoreRoom, Store Room, Store-Room, Passage",
      MechOptions:
        "12, 14, 16, 19, 23, 31, 36, 37, AD, WD, MD, HC, WS, 43, 49, 76, 85, 86, 87, GL, PL, LD, SG, TB, NB, CPC, 5CH",
      ElecOptions: "53, 54, 55, 56, 56-HK, HK, 58, 59, AL, BC, BC-59",
      CylOptions:
        "10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      railSizes: "E, F, J, G",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V",
      finishes:
        "03, US03, 04, US04, US09, 09, US10, 10, 10B, 10BE, 10BL, US14, US15, 20D, 26D, 26, 32, 32D, BSP, WSP, 605, 606, 611, 612, 613, 613E, 613L, 618, 619, 624, 625, 626, 629, 630",
      trims:trimsString,
      image: Images.narrowCVR8400,

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055941",
      text: "View Mounting Template (Aluminum Door) Doc# 4312-K",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055940",
      text1: "View Trim Template (700-4 ET) Doc# 4448-J",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055939",
      text2: "View 640 Standard Strike Template Doc# 4649-A",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1055952",
      text3: "View 106/113 Auxiliary Trim Doc# 4212-D",
      link4: "https://storage.googleapis.com/aa-americas/dam/AADSS1055898",
      text4: "View Narrow Raceway Template Doc# 4568-C",
    },
    {
      device: "AD8400",

      title: "(12-)(NB-)AD8400 (73, 74)",
      functions:
        "8473, 8474, Narrow, Narrow 80 Series, Narrow 80, 80, 80 series, series, 640, Strike, 640 Strike, Electrified, Electrified Trim, ET, ET Trim, 700 ET, Narrow, Narrow CVR, Narrow CVR Exit, Narrow CVR Exit Device, CVR, Exit, Device, 8400, Narrow CVR Device, 100 Aux, 100, 106, 113, Metal, Door, Metal Door, NB, Vertical Rods, Concealed Vertical Rod, Rods, Vertical",
      MechOptions:
        "12, 14, 16, 19, 23, 31, 36, 37, AD, WD, MD, HC, WS, 43, 49, 76, 85, 86, 87, GL, PL, LD, SG, TB, NB, CPC, 5CH",
      ElecOptions: "53, 54, 55, 56, 56-HK, HK, 58, 59, AL, BC, BC-59",
      CylOptions:
        "10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      railSizes: "E, F, J, G",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V",
      finishes:
        "03, US03, 04, US04, US09, 09, US10, 10, 10B, 10BE, 10BL, US14, US15, 20D, 26D, 26, 32, 32D, BSP, WSP, 605, 606, 611, 612, 613, 613E, 613L, 618, 619, 624, 625, 626, 629, 630",
      trims:trimsString,
      image: Images.narrowCVR8400,

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055941",
      text: "View Mounting Template (Aluminum Door) Doc# 4312-K",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055936",
      text1: "View Trim Template (54-)(700-4 ET) Doc# 4467-F",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055939",
      text2: "View 640 Standard Strike Template Doc# 4649-A",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1055952",
      text3: "View 106/113 Auxiliary Trim Doc# 4212-D",
      link4: "https://storage.googleapis.com/aa-americas/dam/AADSS1055898",
      text4: "View Narrow Raceway Template Doc# 4568-C",
    },
    {
      device: "8500",

      title: "(12-)8500 Rim Exit (04, 10, 40, 44)",
      functions:
        "8504, 8510, 8540, 8544, Narrow, Narrow 80 Series, Narrow 80, 80, 80 series, series, 649 Strike, 649, Strike, 656, 656 Strike, 657, 657 Strike, Narrow, Rim, Exit, Narrow Rim, Narrow Rim Exit, Narrow Rim Exit Device, 8500, 700 ET, ET, ET Trim , 700 ET Trim, 704, 710, 740, 744, Narrow Exit Device, Narrow Exit, Exit, Exit only, Night, Latch, Night Latch",
      MechOptions:
        "12, 14, 16, 19, 23, 31, 36, 37, AD, WD, MD, HC, WS, 43, 49, 76, 85, 86, 87, GL, PL, LD, SG, TB, NB, CPC, 5CH",
      ElecOptions: "53, 54, 55, 56, 56-HK, HK, 58, 59, AL, BC, BC-59",
      CylOptions:
        "10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      railSizes: "E, F, J, G",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V",
      finishes:
        "03, US03, 04, US04, US09, 09, US10, 10, 10B, 10BE, 10BL, US14, US15, 20D, 26D, 26, 32, 32D, BSP, WSP, 605, 606, 611, 612, 613, 613E, 613L, 618, 619, 624, 625, 626, 629, 630",
      trims:trimsString,
      image: Images.narrowRimExit8500,

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055909",
      text: "View 04 Cylinder/Exit Only Mounting Template (Any Door) Doc# 4645-E",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055922",
      text1: "View Trim Template (700 ET) Doc# 4277-18",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055911",
      text2: "View 657 Standard Strike Template Doc# 4308-B",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1056012",
      text3: "View 656 Mullion Strike Template Doc# 4715-B",
      link4: "https://storage.googleapis.com/aa-americas/dam/AADSS1055896",
      text4: "View 649 Standard (12-) Strike Template Doc# 4004-K",
      link5: "https://storage.googleapis.com/aa-americas/dam/AADSS1055898",
      text5: "View Narrow Raceway Template Doc# 4568-C",
    },
    {
      device: "8500",

      title: "(12-)8500 Rim Exit (06, 13, 15, 43, 46)",
      functions:
        "8506, 8513, 8515, 8543, 8546, Narrow, Narrow 80 Series, Narrow 80, 80, 80 series, series, 649 Strike, 649, Strike, 656, 656 Strike, 657, 657 Strike, Narrow, Rim, Exit, Device, Narrow Rim, Exit Device, Narrow Rim Exit, Narrow Rim Exit Device, 700, 700 ET, ET, ET Trim, 700 ET Trim, 700-8, 706-8, 715-8, 713-8, 743-8, 746-8, Classroom, Class-Room, class, room, class room, StoreRoom, Store Room, Store-Room, Passage",
      MechOptions:
        "12, 14, 16, 19, 23, 31, 36, 37, AD, WD, MD, HC, WS, 43, 49, 76, 85, 86, 87, GL, PL, LD, SG, TB, NB, CPC, 5CH",
      ElecOptions: "53, 54, 55, 56, 56-HK, HK, 58, 59, AL, BC, BC-59",
      CylOptions:
        "10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      railSizes: "E, F, J, G",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V",
      finishes:
        "03, US03, 04, US04, US09, 09, US10, 10, 10B, 10BE, 10BL, US14, US15, 20D, 26D, 26, 32, 32D, BSP, WSP, 605, 606, 611, 612, 613, 613E, 613L, 618, 619, 624, 625, 626, 629, 630",
      trims:trimsString,
      image: Images.narrowRimExit8500,

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055910",
      text: "View Mounting Template (Any Door) Doc# 4645-E",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055900",
      text1: "View Trim Template (700-8 ET) Doc# 4414-H",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055911",
      text2: "View 657 Standard Strike Template Doc# 4308-B",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1056012",
      text3: "View 656 Mullion Strike Template Doc# 4715-B",
      link4: "https://storage.googleapis.com/aa-americas/dam/AADSS1055896",
      text4: "View 649 Standard (12-) Strike Template Doc# 4004-K",
      link5: "https://storage.googleapis.com/aa-americas/dam/AADSS1055898",
      text5: "View Narrow Raceway Template Doc# 4568-C",
    },
    {
      device: "8500",

      title: "(12-)8500 Rim Exit (73, 74)",
      functions:
        "8573, 8574, Narrow, Narrow 80 Series, Narrow 80, 80, 80 series, series, 649 Strike, 649, Strike, 656, 656 Strike, 657, 657 Strike, Narrow, Rim, Exit, Device, Narrow Rim, Exit Device, Narrow Rim Exit, Narrow Rim Exit Device, 700, 700 ET, ET, ET Trim, 700 ET Trim, 700-8, 773-7, 774-8, Electrified, Trim, Electrified Trim, Fail Safe, Fail Secure, Fail, Safe, Secure",
      MechOptions:
        "12, 14, 16, 19, 23, 31, 36, 37, AD, WD, MD, HC, WS, 43, 49, 76, 85, 86, 87, GL, PL, LD, SG, TB, NB, CPC, 5CH",
      ElecOptions: "53, 54, 55, 56, 56-HK, HK, 58, 59, AL, BC, BC-59",
      CylOptions:
        "10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      railSizes: "E, F, J, G",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V",
      finishes:
        "03, US03, 04, US04, US09, 09, US10, 10, 10B, 10BE, 10BL, US14, US15, 20D, 26D, 26, 32, 32D, BSP, WSP, 605, 606, 611, 612, 613, 613E, 613L, 618, 619, 624, 625, 626, 629, 630",
      trims:trimsString,
      image: Images.narrowRimExit8500,

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055910",
      text: "View Mounting Template (Any Door) Doc# 4645-E",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055899",
      text1: "View Trim Template (700-8 ET) Doc# 4529-C",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055911",
      text2: "View 657 Standard Strike Template Doc# 4308-B",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1056012",
      text3: "View 656 Mullion Strike Template Doc# 4715-B",
      link4: "https://storage.googleapis.com/aa-americas/dam/AADSS1055896",
      text4: "View 649 Standard (12-) Strike Template Doc# 4004-K",
      link5: "https://storage.googleapis.com/aa-americas/dam/AADSS1055898",
      text5: "View Narrow Raceway Template Doc# 4568-C",
    },
    {
      device: "AD8500",

      title: "(12-)(WS-)AD8500 Rim Exit (04, 10, 40, 44)",
      functions:
        "8504, 8510, 8540, 8544, Narrow, Narrow 80 Series, Narrow 80, 80, 80 series, series, 649 Strike, 649, Strike, 656, 656 Strike, 657, 657 Strike, Narrow, Rim, Exit, Narrow Rim, Narrow Rim Exit, Narrow Rim Exit Device, 8500, 700 ET, ET, ET Trim , 700 ET Trim, 704, 710, 740, 744, Narrow Exit Device, Narrow Exit, Exit, Exit only, Night, Latch, Night Latch",
      MechOptions:
        "12, 14, 16, 19, 23, 31, 36, 37, AD, WD, MD, HC, WS, 43, 49, 76, 85, 86, 87, GL, PL, LD, SG, TB, NB, CPC, 5CH",
      ElecOptions: "53, 54, 55, 56, 56-HK, HK, 58, 59, AL, BC, BC-59",
      CylOptions:
        "10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      railSizes: "E, F, J, G",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V",
      finishes:
        "03, US03, 04, US04, US09, 09, US10, 10, 10B, 10BE, 10BL, US14, US15, 20D, 26D, 26, 32, 32D, BSP, WSP, 605, 606, 611, 612, 613, 613E, 613L, 618, 619, 624, 625, 626, 629, 630",
      trims:trimsString,
      image: Images.narrowRimExit8500,

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055909",
      text: "View 04 Cylinder/Exit Only Mounting Template (Aluminum Door) Doc# 4645-E",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055922",
      text1: "View Trim Template (700 ET) Doc# 4277-18",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055911",
      text2: "View 657 Standard Strike Template Doc# 4308-B",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1056012",
      text3: "View 656 Mullion Strike Template Doc# 4715-B",
      link4: "https://storage.googleapis.com/aa-americas/dam/AADSS1055896",
      text4: "View 649 Standard (12-) Strike Template Doc# 4004-K",
      link5: "https://storage.googleapis.com/aa-americas/dam/AADSS1055898",
      text5: "View Narrow Raceway Template Doc# 4568-C",
    },
    {
      device: "AD8500",

      title: "(12-)(WS-)AD8500 Rim Exit (06, 13, 15, 43, 46)",
      functions:
        "8506, 8513, 8515, 8543, 8546, Narrow, Narrow 80 Series, Narrow 80, 80, 80 series, series, 649 Strike, 649, Strike, 656, 656 Strike, 657, 657 Strike, Aluminum, Door, Aluminum Door, Narrow, Rim, Exit, Device, Narrow Rim, Exit Device, Narrow Rim Exit, Narrow Rim Exit Device, 700, 700 ET, ET, ET Trim, 700 ET Trim, 700-8, 706-8, 715-8, 713-8, 743-8, 746-8, Classroom, Class-Room, class, room, class room, StoreRoom, Store Room, Store-Room, Passage",
      MechOptions:
        "12, 14, 16, 19, 23, 31, 36, 37, AD, WD, MD, HC, WS, 43, 49, 76, 85, 86, 87, GL, PL, LD, SG, TB, NB, CPC, 5CH",
      ElecOptions: "53, 54, 55, 56, 56-HK, HK, 58, 59, AL, BC, BC-59",
      CylOptions:
        "10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      railSizes: "E, F, J, G",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V",
      finishes:
        "03, US03, 04, US04, US09, 09, US10, 10, 10B, 10BE, 10BL, US14, US15, 20D, 26D, 26, 32, 32D, BSP, WSP, 605, 606, 611, 612, 613, 613E, 613L, 618, 619, 624, 625, 626, 629, 630",
      trims:trimsString,
      image: Images.narrowRimExit8500,

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055910",
      text: "View Mounting Template (Aluminum Door) Doc# 4645-E",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055900",
      text1: "View Trim Template (700-8 ET) Doc# 4414-H",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055911",
      text2: "View 657 Standard Strike Template Doc# 4308-B",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1056012",
      text3: "View 656 Mullion Strike Template Doc# 4715-B",
      link4: "https://storage.googleapis.com/aa-americas/dam/AADSS1055896",
      text4: "View 649 Standard (12-) Strike Template Doc# 4004-K",
      link5: "https://storage.googleapis.com/aa-americas/dam/AADSS1055898",
      text5: "View Narrow Raceway Template Doc# 4568-C",
    },
    {
      device: "AD8500",

      title: "(12-)(WS-)AD8500 Rim Exit (73, 74)",
      functions:
        "8573, 8574, Narrow, Narrow 80 Series, Narrow 80, 80, 80 series, series, 649 Strike, 649, Strike, 656, 656 Strike, 657, 657 Strike, Aluminum, Door, Aluminum Door, Narrow, Rim, Exit, Device, Narrow Rim, Exit Device, Narrow Rim Exit, Narrow Rim Exit Device, 700, 700 ET, ET, ET Trim, 700 ET Trim, 700-8, 773-7, 774-8, Electrified, Trim, Electrified Trim, Fail Safe, Fail Secure, Fail, Safe, Secure",
      MechOptions:
        "12, 14, 16, 19, 23, 31, 36, 37, AD, WD, MD, HC, WS, 43, 49, 76, 85, 86, 87, GL, PL, LD, SG, TB, NB, CPC, 5CH",
      ElecOptions: "53, 54, 55, 56, 56-HK, HK, 58, 59, AL, BC, BC-59",
      CylOptions:
        "10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      railSizes: "E, F, J, G",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V",
      finishes:
        "03, US03, 04, US04, US09, 09, US10, 10, 10B, 10BE, 10BL, US14, US15, 20D, 26D, 26, 32, 32D, BSP, WSP, 605, 606, 611, 612, 613, 613E, 613L, 618, 619, 624, 625, 626, 629, 630",
      trims:trimsString,
      image: Images.narrowRimExit8500,

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055910",
      text: "View Mounting Template (Aluminum Door) Doc# 4645-E",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055899",
      text1: "View Trim Template (54-)(700-8 ET) Doc# 4529-C",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055911",
      text2: "View 657 Standard Strike Template Doc# 4308-B",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1056012",
      text3: "View 656 Mullion Strike Template Doc# 4715-B",
      link4: "https://storage.googleapis.com/aa-americas/dam/AADSS1055896",
      text4: "View 649 Standard (12-) Strike Template Doc# 4004-K",
      link5: "https://storage.googleapis.com/aa-americas/dam/AADSS1055898",
      text5: "View Narrow Raceway Template Doc# 4568-C",
    },
  ],
  Wide80: [
    {
      device: "WD8600",

      title: "WD8600 CVR Exit (06, 10, 13, 15, 40, 43, 46)",
      image: Images.wideCVR,
      functions:
        "8606, 8610, 8613, 8615, 8640, 8643, 8646, Wide, Wide 80 Series, Wide 80, 80, 80 series, series, 650, 606, Strike, 650 Strike, 606 Strike, Wide, CVR, Exit, Device, Wide CVR, Wide CVR Exit Device, Wide CVR Exit, 700-4, 700-4 ET, ET Trim, ET, Trim, 100 Aux, Auxiliary, Control, Aux Control, Auxiliary Control, 106, 106 Aux, 113, 113 Aux, NB, Vertical Rods, Concealed Vertical Rod, Rods, Vertical, WD, Wood Door, Wood, WD8600, 59, 59-, Delayed, Egress, Delayed Egress, Classroom, Class-Room, class, room, class room, StoreRoom, Store Room, Store-Room, Passage",
      MechOptions:
        "12, 14, 16, 19, 23, 31, 36, 37, AD, WD, MD, HC, WS, 43, 49, 76, 85, 86, 87, GL, PL, LD, SG, TB, NB, CPC, 5CH",
      ElecOptions: "53, 54, 55, 56, 56-HK, HK, 58, 59, AL, BC, BC-59",
      CylOptions:
        "10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      railSizes: "E, F, J, G",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V",
      finishes:
        "03, US03, 04, US04, US09, 09, US10, 10, 10B, 10BE, 10BL, US14, US15, 20D, 26D, 26, 32, 32D, BSP, WSP, 605, 606, 611, 612, 613, 613E, 613L, 618, 619, 624, 625, 626, 629, 630",
      trims:trimsString,
      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055955",
      text: "View Wood Door Mounting Template Doc# 4431-J",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055955",
      text1:
        "View (59- Delayed Egress) Hollow Metal Door Mounting Template Doc# 4455-D",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055953",
      text2: "View Trim Template (700-4 ET) Doc# 4436-E",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1055943",
      text3: "View 650/606 Strike Template Doc# 4449-G",
      link4: "https://storage.googleapis.com/aa-americas/dam/AADSS1055952",
      text4: "View 106/113 Auxiliary Trim Doc# 4212-D",
      link5: "https://storage.googleapis.com/aa-americas/dam/AADSS1055972",
      text5: "View Wide EM Raceway Template Doc# 4569-C",
    },
    {
      device: "WD8600",

      title: "WD8600 CVR Exit (73,74)",
      image: Images.wideCVR,
      functions:
        "8673, 8674, Wide, Wide 80 Series, Wide 80, 80, 80 series, series, 650, 606, Strike, 650 Strike, 606 Strike, Wide, CVR, Exit, Device, Wide CVR, Wide CVR Exit Device, Wide CVR Exit, 700-4, 700-4 ET, ET Trim, ET, Trim, 100 Aux, Auxiliary, Control, Aux Control, Auxiliary Control, 106, 106 Aux, 113, 113 Aux, NB, Vertical Rods, Concealed Vertical Rod, Rods, Vertical, WD, Wood Door, Wood, WD8600, 59, 59-, Delayed, Egress, Delayed Egress, Electrified, Trim, ET, Trim, ET Trim, Electrified Trim, 773-4, 774-4, 773, 774",
      MechOptions:
        "12, 14, 16, 19, 23, 31, 36, 37, AD, WD, MD, HC, WS, 43, 49, 76, 85, 86, 87, GL, PL, LD, SG, TB, NB, CPC, 5CH",
      ElecOptions: "53, 54, 55, 56, 56-HK, HK, 58, 59, AL, BC, BC-59",
      CylOptions:
        "10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      railSizes: "E, F, J, G",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V",
      finishes:
        "03, US03, 04, US04, US09, 09, US10, 10, 10B, 10BE, 10BL, US14, US15, 20D, 26D, 26, 32, 32D, BSP, WSP, 605, 606, 611, 612, 613, 613E, 613L, 618, 619, 624, 625, 626, 629, 630",
      trims:trimsString,
      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055955",
      text: "View Wood Door Mounting Template Doc# 4431-J",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055955",
      text1:
        "View (59- Delayed Egress) Hollow Metal Door Mounting Template Doc# 4455-D",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055936",
      text2: "View Trim Template (54-)(700-4 ET) Doc# 4467-F",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1055943",
      text3: "View 650/606 Strike Template Doc# 4449-G",
      link4: "https://storage.googleapis.com/aa-americas/dam/AADSS1055952",
      text4: "View 106/113 Auxiliary Trim Doc# 4212-D",
      link5: "https://storage.googleapis.com/aa-americas/dam/AADSS1055972",
      text5: "View Wide EM Raceway Template Doc# 4569-C",
    },
    {
      device: "MD8600",

      title: "(12-)MD8600 CVR Exit (06, 10, 13, 15, 40, 43, 46)",
      image: Images.wideCVR,
      functions:
        "8606, 8610, 8613, 8615, 8640, 8643, 8646, Wide, Wide 80 Series, Wide 80, 80, 80 series, series, 650, 606, Strike, 650 Strike, 606 Strike, Wide, CVR, Exit, Device, Wide CVR, Wide CVR Exit Device, Wide CVR Exit, 700-4, 700-4 ET, ET Trim, ET, Trim, 100 Aux, Auxiliary, Control, Aux Control, Auxiliary Control, 106, 106 Aux, 113, 113 Aux, NB, Vertical Rods, Concealed Vertical Rod, Rods, Vertical, MD, Metal Door, Metal, MD8600, 59, 59-, Delayed, Egress, Delayed Egress, Classroom, Class-Room, class, room, class room, StoreRoom, Store Room, Store-Room, Passage",
      MechOptions:
        "12, 14, 16, 19, 23, 31, 36, 37, AD, WD, MD, HC, WS, 43, 49, 76, 85, 86, 87, GL, PL, LD, SG, TB, NB, CPC, 5CH",
      ElecOptions: "53, 54, 55, 56, 56-HK, HK, 58, 59, AL, BC, BC-59",
      CylOptions:
        "10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      railSizes: "E, F, J, G",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V",
      finishes:
        "03, US03, 04, US04, US09, 09, US10, 10, 10B, 10BE, 10BL, US14, US15, 20D, 26D, 26, 32, 32D, BSP, WSP, 605, 606, 611, 612, 613, 613E, 613L, 618, 619, 624, 625, 626, 629, 630",
      trims:trimsString,
      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055949",
      text: "View Hollow Metal Door Mounting Template Doc# 4445-J",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055948",
      text1:
        "View (59- Delayed Egress) Hollow Metal Door Mounting Template Doc# 4455-D",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055940",
      text2: "View Trim Template (700-4 ET) Doc# 4448-J",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1055943",
      text3: "View 650/606 Strike Template Doc# 4449-G",
      link4: "https://storage.googleapis.com/aa-americas/dam/AADSS1055952",
      text4: "View 106/113 Auxiliary Trim Doc# 4212-D",
      link5: "https://storage.googleapis.com/aa-americas/dam/AADSS1055972",
      text5: "View Wide EM Raceway Template Doc# 4569-C",
    },
    {
      device: "MD8600",

      title: "(12-)MD8600 CVR Exit (73,74)",
      image: Images.wideCVR,
      functions:
        "8673, 8674, Wide, Wide 80 Series, Wide 80, 80, 80 series, series, 650, 606, 650 Strike, 606 Strike, Strike CVR, Exit, Device, Wide CVR, Wide CVR Exit Device, Wide CVR Exit, 700-4, 700-4 ET, ET Trim, ET, Trim, 100 Aux, Auxiliary, Control, Aux Control, Auxiliary Control, 106, 106 Aux, 113, 113 Aux, NB, Vertical Rods, Concealed Vertical Rod, Rods, Vertical, MD, Metal Door, Metal, MD8600, 59, 59-, Delayed, Egress, Delayed Egress, Electrified, ET, ET Trim, 773-4, 773, 774-4, 774",
      MechOptions:
        "12, 14, 16, 19, 23, 31, 36, 37, AD, WD, MD, HC, WS, 43, 49, 76, 85, 86, 87, GL, PL, LD, SG, TB, NB, CPC, 5CH",
      ElecOptions: "53, 54, 55, 56, 56-HK, HK, 58, 59, AL, BC, BC-59",
      CylOptions:
        "10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      railSizes: "E, F, J, G",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V",
      finishes:
        "03, US03, 04, US04, US09, 09, US10, 10, 10B, 10BE, 10BL, US14, US15, 20D, 26D, 26, 32, 32D, BSP, WSP, 605, 606, 611, 612, 613, 613E, 613L, 618, 619, 624, 625, 626, 629, 630",
      trims:trimsString,
      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055949",
      text: "View Hollow Metal Door Mounting Template Doc# 4445-J",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055948",
      text1:
        "View (59- Delayed Egress) Hollow Metal Door Mounting Template Doc# 4455-D",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055940",
      text2: "View Trim Template (54-)(700-4 ET) Doc# 4467-F",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1055943",
      text3: "View 650/606 Strike Template Doc# 4449-G",
      link4: "https://storage.googleapis.com/aa-americas/dam/AADSS1055952",
      text4: "View 106/113 Auxiliary Trim Doc# 4212-D",
      link5: "https://storage.googleapis.com/aa-americas/dam/AADSS1055972",
      text5: "View Wide EM Raceway Template Doc# 4569-C",
    },
    {
      device: "AD8600",

      title: "AD8600 CVR Exit (06, 10, 13, 15, 40, 43, 46)",
      image: Images.wideCVR,
      functions:
        "8606, 8610, 8613, 8615, 8640, 8643, 8646, Wide, Wide 80 Series, Wide 80, 80, 80 series, series, 650, 606, 650 Strike, 606 Strike, Strike, CVR, Exit, Device, Wide CVR, Wide CVR Exit Device, Wide CVR Exit, 700-4, 700-4 ET, ET Trim, ET, Trim, 100 Aux, Auxiliary, Control, Aux Control, Auxiliary Control, 106, 106 Aux, 113, 113 Aux, NB, Vertical Rods, Concealed Vertical Rod, Rods, Vertical, AD, Aluminum Door, Aluminum, AD8600, 59, 59-, Delayed, Egress, Delayed Egress, Classroom, Class-Room, class, room, class room, StoreRoom, Store Room, Store-Room, Passage",
      MechOptions:
        "12, 14, 16, 19, 23, 31, 36, 37, AD, WD, MD, HC, WS, 43, 49, 76, 85, 86, 87, GL, PL, LD, SG, TB, NB, CPC, 5CH",
      ElecOptions: "53, 54, 55, 56, 56-HK, HK, 58, 59, AL, BC, BC-59",
      CylOptions:
        "10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      railSizes: "E, F, J, G",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V",
      finishes:
        "03, US03, 04, US04, US09, 09, US10, 10, 10B, 10BE, 10BL, US14, US15, 20D, 26D, 26, 32, 32D, BSP, WSP, 605, 606, 611, 612, 613, 613E, 613L, 618, 619, 624, 625, 626, 629, 630",
      trims:trimsString,
      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055938",
      text: "View Aluminum Door Mounting Template Doc# 4661-A",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055948",
      text1:
        "View (59- Delayed Egress) Hollow Metal Door Mounting Template Doc# 4455-D",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055953",
      text2: "View Trim Template (700-4 ET) Doc# 4448-J",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1055943",
      text3: "View 650/606 Strike Template Doc# 4449-G",
      link4: "https://storage.googleapis.com/aa-americas/dam/AADSS1055952",
      text4: "View 106/113 Auxiliary Trim Doc# 4212-D",
      link5: "https://storage.googleapis.com/aa-americas/dam/AADSS1055972",
      text5: "View Wide EM Raceway Template Doc# 4569-C",
    },
    {
      device: "AD8600",

      title: "AD8600 CVR Exit (73,74)",
      image: Images.wideCVR,
      functions:
        "8673,8674, Wide, Wide 80 Series, Wide 80, 80, 80 series, series, 650, 606, 650 Strike, 606 Strike, CVR, Exit, Device, Wide CVR, Wide CVR Exit Device, Wide CVR Exit, 700-4, 700-4 ET, ET Trim, ET, Trim, 100 Aux, Auxiliary, Control, Aux Control, Auxiliary Control, 106, 106 Aux, 113, 113 Aux, NB, Vertical Rods, Concealed Vertical Rod, Rods, Vertical, AD, Aluminum Door, Aluminum, AD8600, 59, 59-, Delayed, Egress, Delayed Egress, Electrified, ET, ET Trim, 773-4, 773, 774-4, 774",
      MechOptions:
        "12, 14, 16, 19, 23, 31, 36, 37, AD, WD, MD, HC, WS, 43, 49, 76, 85, 86, 87, GL, PL, LD, SG, TB, NB, CPC, 5CH",
      ElecOptions: "53, 54, 55, 56, 56-HK, HK, 58, 59, AL, BC, BC-59",
      CylOptions:
        "10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      railSizes: "E, F, J, G",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V",
      finishes:
        "03, US03, 04, US04, US09, 09, US10, 10, 10B, 10BE, 10BL, US14, US15, 20D, 26D, 26, 32, 32D, BSP, WSP, 605, 606, 611, 612, 613, 613E, 613L, 618, 619, 624, 625, 626, 629, 630",
      trims:trimsString,
      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055938",
      text: "View Aluminum Door Mounting Template Doc# 4661-A",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055936",
      text2: "View ET Trim Template (54-)(700-4) Doc# 4467-F",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055948",
      text1:
        "View (59- Delayed Egress) Hollow Metal Door Mounting Template Doc# 4455-D",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1055943",
      text3: "View 650/606 Strike Template Doc# 4449-G",
      link4: "https://storage.googleapis.com/aa-americas/dam/AADSS1055952",
      text4: "View 106/113 Auxiliary Trim Doc# 4212-D",
      link5: "https://storage.googleapis.com/aa-americas/dam/AADSS1055972",
      text5: "View Wide EM Raceway Template Doc# 4569-C",
    },
    {
      device: "LP8600",

      title: "LP/LR/LS 8600 Template Form",
      functions:
        "LP8606, LR8606, LS8606, LP8610, LR8610, LS8610, LP8613, LR8613, LS8613, LP8615, LR8615, LS8615, LP8640, LR8640, LS8640, LP8643, LR8643, LS8643, LP8646, LR8646, LS8646, LP8673, LR8673, LS8673, LP8674, LR8674, LS8674, Wide, Wide 80 Series, Wide 80, 80, 80 series, series, LP/LR, LP, LR, LS, Concealed, Mortise, CVR",
      MechOptions:
        "12, 14, 16, 19, 23, 31, 36, 37, AD, WD, MD, HC, WS, 43, 49, 76, 85, 86, 87, GL, PL, LD, SG, TB, NB, CPC, 5CH",
      ElecOptions: "53, 54, 55, 56, 56-HK, HK, 58, 59, AL, BC, BC-59",
      CylOptions:
        "10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      railSizes: "E, F, J, G",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V",
      finishes:
        "03, US03, 04, US04, US09, 09, US10, 10, 10B, 10BE, 10BL, US14, US15, 20D, 26D, 26, 32, 32D, BSP, WSP, 605, 606, 611, 612, 613, 613E, 613L, 618, 619, 624, 625, 626, 629, 630",
      trims:trimsString,
      image: Images.LS8600CVRMortise,

      link: "https://www.sargentlock.com/en/standalone/lp8600-template",
      text: "View Template Request Form (Door Manufacturers Only)",
    },
    {
      device: "8700",

      title: "8700 SVR Exit (06, 10, 13, 15, 40, 43, 46, 73, 74)",
      image: Images.wideSVR,
      functions:
        "8706, 8710, 8713, 8715, 8740, 8743, 8746, 8773, 8774, Wide, Wide 80 Series, Wide 80, 80, 80 series, series, 646, 624, 655, 648, 653, 646 Strike, 624 Strike, 655 Strike, 648 Strike, 653 Strike, SVR, SVR Exit, SVR Exit Device, Exit, Device, Exit Device, Surface Vertical Rod, Surface, Vertical, Rod, Vertical Rod, Surface Rod, 8700, ET, Trim, ET Trim, 700 ET, Electrified Trim, Electrified, 773, 774",
      MechOptions:
        "12, 14, 16, 19, 23, 31, 36, 37, AD, WD, MD, HC, WS, 43, 49, 76, 85, 86, 87, GL, PL, LD, SG, TB, CPC, 5CH",
      ElecOptions: "53, 54, 55, 56, 56-HK, HK, 58, 59, AL, BC, BC-59",
      CylOptions:
        "10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      railSizes: "E, F, J, G",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V",
      finishes:
        "03, US03, 04, US04, US09, 09, US10, 10, 10B, 10BE, 10BL, US14, US15, 20D, 26D, 26, 32, 32D, BSP, WSP, 605, 606, 611, 612, 613, 613E, 613L, 618, 619, 624, 625, 626, 629, 630",
      trims:trimsString,
      warning: "If using thumbpiece trim go to TP Trim section",

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055958",
      text: "View 8700 Mounting Template (Any Door) Doc# 4289-H",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055922",
      text1: "View Trim Template (700 ET) Doc# 4277-18",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055928",
      text2: "View Trim Template (54-)(773 & 774 ET) Doc# 4314-T",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1055956",
      text3: "View 646/624/655 Standard Strike Template Doc# 4009-H",
      link4: "https://storage.googleapis.com/aa-americas/dam/AADSS1055963",
      text4: "View 648 Alt Top Strike Template Doc# 4225-C",
      link5: "https://storage.googleapis.com/aa-americas/dam/AADSS1234418",
      text5: "View 653 Alt Bottom Strike Template Doc# MEDT21",
      link6: "https://storage.googleapis.com/aa-americas/dam/AADSS1055962",
      text6: "View 306/313 Auxiliary Trim Doc# 4214-F",
      link7: "https://storage.googleapis.com/aa-americas/dam/AADSS1055972",
      text7: "View Wide EM Raceway Template Doc# 4569-C",
    },
    {
      device: "8700",

      title: "12-8700 SVR Exit (06, 10, 13, 15, 40, 43, 46, 73, 74)",
      image: Images.wideSVR,
      functions:
        "8706, 8710, 8713, 8715, 8740, 8743, 8746, 8773, 8774, Wide, Wide 80 Series, Wide 80, 80, 80 series, series, 646, 624, 655, 648, 653, Strike, 646 Strike, 624 Strike, 655 Strike, 648 Strike, 653 Strike, SVR, SVR Exit, SVR Exit Device, Exit, Device, Exit Device, Surface Vertical Rod, Surface, Vertical, Rod, Vertical Rod, Surface Rod, 8700, ET, Trim, ET Trim, 700 ET, Electrified Trim, Electrified, 773, 774",
      MechOptions:
        "12, 14, 16, 19, 23, 31, 36, 37, AD, WD, MD, HC, WS, 43, 49, 76, 85, 86, 87, GL, PL, LD, SG, TB, CPC, 5CH",
      ElecOptions: "53, 54, 55, 56, 56-HK, HK, 58, 59, AL, BC, BC-59",
      CylOptions:
        "10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      railSizes: "E, F, J, G",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V",
      finishes:
        "03, US03, 04, US04, US09, 09, US10, 10, 10B, 10BE, 10BL, US14, US15, 20D, 26D, 26, 32, 32D, BSP, WSP, 605, 606, 611, 612, 613, 613E, 613L, 618, 619, 624, 625, 626, 629, 630",
      trims:trimsString,
      warning: "If using thumbpiece trim go to TP Trim section",

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055958",
      text: "View 12-8700 Mounting Template (Any Door) Doc# 4297-H",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055922",
      text1: "View Trim Template (700 ET) Doc# 4277-18",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055928",
      text2: "View Trim Template (54-)(773 & 774 ET) Doc# 4314-T",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1055956",
      text3: "View 646/624/655 Standard Strike Template Doc# 4009-H",
      link4: "https://storage.googleapis.com/aa-americas/dam/AADSS1055963",
      text4: "View 648 Alt Top Strike Template Doc# 4225-C",
      link5: "https://storage.googleapis.com/aa-americas/dam/AADSS1234418",
      text5: "View 653 Alt Bottom Strike Template Doc# MEDT21",
      link6: "https://storage.googleapis.com/aa-americas/dam/AADSS1055962",
      text6: "View 306/313 Auxiliary Trim Doc# 4214-F",
      link7: "https://storage.googleapis.com/aa-americas/dam/AADSS1055972",
      text7: "View Wide EM Raceway Template Doc# 4569-C",
    },
    {
      device: "8700",

      title:
        "(12-)(HC, HC4, FM)8700 SVR Exit (06, 10, 13, 15, 40, 43, 46, 73, 74)",
      image: Images.wideSVR,
      functions:
        "8706, 8710, 8713, 8715, 8740, 8743, 8746, 8773, 8774, Wide, Wide 80 Series, Wide 80, 80, 80 series, series, 653, 654, 655, 659, Strike, 653 Strike, 654 Srike, 655 Strike, 659 Strike, SVR, SVR Exit, SVR Exit Device, Exit, Device, Exit Device, Surface Vertical Rod, Surface, Vertical, Rod, Vertical Rod, Surface Rod, 8700, ET, Trim, ET Trim, 700 ET, Electrified Trim, Electrified, 773, 774",
      MechOptions:
        "12, 14, 16, 19, 23, 31, 36, 37, AD, WD, MD, HC, WS, 43, 49, 76, 85, 86, 87, GL, PL, LD, SG, TB, CPC, 5CH",
      ElecOptions: "53, 54, 55, 56, 56-HK, HK, 58, 59, AL, BC, BC-59",
      CylOptions:
        "10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      railSizes: "E, F, J, G",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V",
      finishes:
        "03, US03, 04, US04, US09, 09, US10, 10, 10B, 10BE, 10BL, US14, US15, 20D, 26D, 26, 32, 32D, BSP, WSP, 605, 606, 611, 612, 613, 613E, 613L, 618, 619, 624, 625, 626, 629, 630",
      trims:trimsString,
      warning: "If using thumbpiece trim go to TP Trim section",

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055970",
      text: "View (12-)(HC, HC4, FM)8700 Mounting Template (Any Door) Doc# 4462-G",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055922",
      text1: "View Trim Template (700 ET) Doc# 4277-18",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055928",
      text2: "View Trim Template (54-)(773 & 774 ET) Doc# 4314-T",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1055956",
      text3:
        "View 653/654/659/655 Standard Top&Bottom Strike Template Doc# 4296-G",
      link4: "https://storage.googleapis.com/aa-americas/dam/AADSS1055962",
      text4: "View 306/313 Auxiliary Trim Doc# 4214-F",
      link5: "https://storage.googleapis.com/aa-americas/dam/AADSS1055972",
      text5: "View Wide EM Raceway Template Doc# 4569-C",
    },
    {
      device: "8700",

      title: "8700 Thumbpiece Trims (10, 28, 62, 63)",
      functions:
        "8710, 8728, 8762, 8763, Wide, Wide 80 Series, Wide 80, 80, 80 series, series, SVR, SVR Exit, SVR Exit Device, Exit, Device, Exit Device, Surface Vertical Rod, Surface, Vertical, Rod, Vertical Rod, Surface Rod, 8700, Thumb, Piece, Trim, Thumbpiece, PTB, STS, MAL, FLW, FLL",
      MechOptions:
        "12, 14, 16, 19, 23, 31, 36, 37, AD, WD, MD, HC, WS, 43, 49, 76, 85, 86, 87, GL, PL, LD, SG, TB, CPC, 5CH",
      ElecOptions: "53, 54, 55, 56, 56-HK, HK, 58, 59, AL, BC, BC-59",
      CylOptions:
        "10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      railSizes: "E, F, J, G",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V",
      finishes:
        "03, US03, 04, US04, US09, 09, US10, 10, 10B, 10BE, 10BL, US14, US15, 20D, 26D, 26, 32, 32D, BSP, WSP, 605, 606, 611, 612, 613, 613E, 613L, 618, 619, 624, 625, 626, 629, 630",
      trims:trimsString,
      image: Images.thumbpieceTrims,

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055887",
      text: "View FLL/FLW Trim Template (810, 828, 866) Doc# 4257-D",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055888",
      text1: "View MAL Trim Template (810, 828, 866) Doc# 4024-L",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055891",
      text2: "View PTB Trim Template (810, 828, 866) Doc# 4221-E",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1055920",
      text3: "View STS Strim Template Doc# (810, 828, 866) 4020-F",
    },
    {
      device: "NB-8700",

      title: "(12-)NB-8700 (06, 13, 15, 43, 46)",
      functions:
        "8706, 8713, 8715, 8743, 8746, Wide, Wide 80 Series, Wide 80, 80, 80 series, series, 653, 654, 655, 659, Strike, 653 Strike, 654 Srike, 655 Strike, 659 Strike, SVR, SVR Exit, SVR Exit Device, Exit, Device, Exit Device, Surface Vertical Rod, Surface, Vertical, Rod, Vertical Rod, Surface Rod, 8700, ET, Trim, ET Trim, 700 ET, 700-8 NB, NB8700, No Bottom, Less Bottom Rod, Less, Bottom, Rod, LBR, Class, Room, Classroom, Store, Storeroom, Store-Room, Passage",
      MechOptions:
        "12, 14, 16, 19, 23, 31, 36, 37, AD, WD, MD, HC, WS, 43, 49, 76, 85, 86, 87, GL, PL, LD, SG, TB, NB, CPC, 5CH",
      ElecOptions: "53, 54, 55, 56, 56-HK, HK, 58, 59, AL, BC, BC-59",
      CylOptions:
        "10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      railSizes: "E, F, J, G",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V",
      finishes:
        "03, US03, 04, US04, US09, 09, US10, 10, 10B, 10BE, 10BL, US14, US15, 20D, 26D, 26, 32, 32D, BSP, WSP, 605, 606, 611, 612, 613, 613E, 613L, 618, 619, 624, 625, 626, 629, 630",
      trims:trimsString,
      image: Images.wideNBSVR,

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055969",
      text: "View Single Door Mounting Template (Any Material) Doc# 4553-C",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055967",
      text1: "View Double Door Mounting Template (Any Material) Doc# 4559-G",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055900",
      text2: "View Trim Template (700-8 ET) Doc# 4414-H",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1055956",
      text3:
        "View 653/654/659/655 Standard Top&Bottom Strike Template Doc# 4296-G",
      link4: "https://storage.googleapis.com/aa-americas/dam/AADSS1055966",
      text4: "View NB306/NB313 Auxiliary Trim Doc# 4583-A",
      link5: "https://storage.googleapis.com/aa-americas/dam/AADSS1055972",
      text5: "View Wide EM Raceway Template Doc# 4569-C",
    },
    {
      device: "NB-8700",

      title: "(12-)NB-8700 (10, 40)",
      functions:
        "8710, 8740, Wide, Wide 80 Series, Wide 80, 80, 80 series, series, 653, 654, 655, 659, Strike, 653 Strike, 654 Srike, 655 Strike, 659 Strike, Wide, Wide Exit Device, Wide Exit, SVR, SVR Exit, SVR Exit Device, Exit, Device, Exit Device, Surface Vertical Rod, Surface, Vertical, Rod, Vertical Rod, Surface Rod, 8700, ET, Trim, ET Trim, 700 ET, 700-8 NB, NB8700, No Bottom, Less Bottom Rod, Less, Bottom, Rod, LBR, Exit Only, Exit, Only",
      MechOptions:
        "12, 14, 16, 19, 23, 31, 36, 37, AD, WD, MD, HC, WS, 43, 49, 76, 85, 86, 87, GL, PL, LD, SG, TB, NB, CPC, 5CH",
      ElecOptions: "53, 54, 55, 56, 56-HK, HK, 58, 59, AL, BC, BC-59",
      CylOptions:
        "10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      railSizes: "E, F, J, G",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V",
      finishes:
        "03, US03, 04, US04, US09, 09, US10, 10, 10B, 10BE, 10BL, US14, US15, 20D, 26D, 26, 32, 32D, BSP, WSP, 605, 606, 611, 612, 613, 613E, 613L, 618, 619, 624, 625, 626, 629, 630",
      trims:trimsString,
      image: Images.wideNBSVR,

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055969",
      text: "View Single Door Mounting Template (Any Material) Doc# 4553-C",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055967",
      text1: "View Double Door Mounting Template (Any Material) Doc# 4559-G",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055922",
      text2: "View Trim Template (700 ET) Doc# 4277-18",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1055956",
      text3:
        "View 653/654/659/655 Standard Top&Bottom Strike Template Doc# 4296-G",
      link4: "https://storage.googleapis.com/aa-americas/dam/AADSS1055966",
      text4: "View NB306/NB313 Auxiliary Trim Doc# 4583-A",
      link5: "https://storage.googleapis.com/aa-americas/dam/AADSS1055972",
      text5: "View Wide EM Raceway Template Doc# 4569-C",
    },
    {
      device: "NB-8700",

      title: "(12-)NB-8700 (73, 74)",
      functions:
        "8773, 8774, Wide, Wide 80 Series, Wide 80, 80, 80 series, series, 653, 654, 655, 659, Strike, 653 Strike, 654 Srike, 655 Strike, 659 Strike, Wide, Wide Exit Device, Wide Exit, SVR, SVR Exit, SVR Exit Device, Exit, Device, Exit Device, Surface Vertical Rod, Surface, Vertical, Rod, Vertical Rod, Surface Rod, 8700, ET, Trim, ET Trim, 700 ET, 700-8 NB, NB8700, No Bottom, Less Bottom Rod, Less, Bottom, Rod, LBR, Electrified, 773, 774, 773-4, 774-4",
      MechOptions:
        "12, 14, 16, 19, 23, 31, 36, 37, AD, WD, MD, HC, WS, 43, 49, 76, 85, 86, 87, GL, PL, LD, SG, TB, NB, CPC, 5CH",
      ElecOptions: "53, 54, 55, 56, 56-HK, HK, 58, 59, AL, BC, BC-59",
      CylOptions:
        "10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      railSizes: "E, F, J, G",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V",
      finishes:
        "03, US03, 04, US04, US09, 09, US10, 10, 10B, 10BE, 10BL, US14, US15, 20D, 26D, 26, 32, 32D, BSP, WSP, 605, 606, 611, 612, 613, 613E, 613L, 618, 619, 624, 625, 626, 629, 630",
      trims:trimsString,
      image: Images.wideNBSVR,

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055969",
      text: "View Single Door Mounting Template (Any Material) Doc# 4553-C",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055967",
      text1: "View Double Door Mounting Template (Any Material) Doc# 4559-G",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055968",
      text2: "View Trim Template (54-)(700-8) Doc# 4714-A",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1055956",
      text3:
        "View 653/654/659/655 Standard Top&Bottom Strike Template Doc# 4296-G",
      link4: "https://storage.googleapis.com/aa-americas/dam/AADSS1055966",
      text4: "View NB306/NB313 Auxiliary Trim Doc# 4583-A",
      link5: "https://storage.googleapis.com/aa-americas/dam/AADSS1055972",
      text5: "View Wide EM Raceway Template Doc# 4569-C",
    },
    {
      device: "8800",
      title: "(12-)(WS-)8800 (04, 10, 40, 44)",
      image: Images.wideStileRim,
      functions:
        "8804, 8810, 8840, 8844, Wide, Wide 80 Series, Wide 80, 80, 80 series, series, 649, Strike, 649 Strike, 644, 644 Strike, Night, Latch, Night Latch, Rim, Rim Exit, Wide Rim Exit, 8800, Rim Exit Device, Exit Device, Exit Only, Night Latch, Night, Latch, Only, WS8800, 128800, 12-8800, 12 8800, 12-WS-8800, 12-WS8800, 12 WS 8800, ",
      MechOptions:
        "12, 14, 16, 19, 23, 31, 36, 37, AD, WD, MD, HC, WS, 43, 76, 85, 86, 87, GL, PL, LD, SG, TB, NB, CPC, 5CH",
      ElecOptions: "53, 54, 55, 56, 56-HK, HK, 58, 59, AL, BC, BC-59",
      CylOptions:
        "10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      railSizes: "E, F, J, G",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V",
      finishes:
        "03, US03, 04, US04, US09, 09, US10, 10, 10B, 10BE, 10BL, US14, US15, 20D, 26D, 26, 32, 32D, BSP, WSP, 605, 606, 611, 612, 613, 613E, 613L, 618, 619, 624, 625, 626, 629, 630",
      trims:trimsString,
      warning: (
        <>
          ↓ For cylinder only Application ↓ <br />
          use Mounting Template Hole 2
        </>
      ),
      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055914",
      text: "View Mounting Template (Any Material) Doc# 4415-H",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055922",
      text1: "View Trim Template (700 ET) Doc# 4277-18",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055896",
      text2: "View 649 Strike Template (Single Door) Doc# 4004-K",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1055897",
      text3:
        "View 649 Standard Strike Template (Double Door W/ Mullion) Doc# 4300-E",
      link4: "https://storage.googleapis.com/aa-americas/dam/AADSS1055986",
      text4:
        "View 644 Alternate Strike Template (Double Door No Mullion) Doc# 3996-C",
      link5: "https://storage.googleapis.com/aa-americas/dam/AADSS1055972",
      text5: "View Wide EM Raceway Template Doc# 4569-C",
    },

    {
      device: "8800",

      title: "(12-)(WS-)8800 (06, 13, 15, 43, 46)",
      image: Images.wideStileRim,
      functions:
        "8806, 8813, 8815, 8843, 8846, Wide, Wide 80 Series, Wide 80, 80, 80 series, series, 649, Strike, 649 Strike, 644, 644 Strike, Rim, Rim Exit, Wide Rim Exit, 8800, Rim Exit Device, Exit Device, Device, Wide Stile, Stile, Wide Rim Exit Device, WS8800, 128800, 12-8800, 12 8800, 12-WS-8800, 12-WS8800, 12 WS 8800, 12WS8800, Class, Room, Classroom, Store, Storeroom, Store-Room",
      MechOptions:
        "12, 14, 16, 19, 23, 31, 36, 37, AD, WD, MD, HC, WS, 43, 76, 85, 86, 87, GL, PL, LD, SG, TB, NB, CPC, 5CH",
      ElecOptions: "53, 54, 55, 56, 56-HK, HK, 58, 59, AL, BC, BC-59",
      CylOptions:
        "10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      railSizes: "E, F, J, G",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V",
      finishes:
        "03, US03, 04, US04, US09, 09, US10, 10, 10B, 10BE, 10BL, US14, US15, 20D, 26D, 26, 32, 32D, BSP, WSP, 605, 606, 611, 612, 613, 613E, 613L, 618, 619, 624, 625, 626, 629, 630",
      trims:trimsString,
      warning: "If using thumbpiece trim go to TP Trim section",

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055914",
      text: "View Mounting Template (Any Material) Doc# 4415-H",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055900",
      text1: "View Trim Template (700-8 ET) Doc# 4414-H",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055896",
      text2: "View 649 Strike Template (Single Door) Doc# 4004-K",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1055897",
      text3:
        "View 649 Standard Strike Template (Double Door W/ Mullion) Doc# 4300-E",
      link4: "https://storage.googleapis.com/aa-americas/dam/AADSS1055986",
      text4:
        "View 644 Alternate Strike Template (Double Door No Mullion) Doc# 3996-C",
      link5: "https://storage.googleapis.com/aa-americas/dam/AADSS1055972",
      text5: "View Wide EM Raceway Template Doc# 4569-C",
    },
    {
      device: "8800",

      title: "(12-)(WS-)8800 (16, 28, 63, 66)",
      image: Images.wideStileRim,
      functions:
        "8816, 8828, 8863, 8866, Wide, Wide 80 Series, Wide 80, 80, 80 series, series, 649, Strike, 649 Strike, 644, 644 Strike, Rim, Rim Exit, Wide Rim Exit, 8800, Rim Exit Device, Exit Device, Device, Wide Stile, Stile, Wide Rim Exit Device, WS8800, 128800, 12-8800, 12 8800, 12-WS-8800, 12-WS8800, 12 WS 8800, 12WS8800, Class, Room, Classroom, Store, Storeroom, Store-Room",
      MechOptions:
        "12, 14, 16, 19, 23, 31, 36, 37, AD, WD, MD, HC, WS, 43, 49, 76, 85, 86, 87, GL, PL, LD, SG, TB, NB, CPC, 5CH",
      ElecOptions: "53, 54, 55, 56, 56-HK, HK, 58, 59, AL, BC, BC-59",
      CylOptions:
        "10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      railSizes: "E, F, J, G",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V",
      finishes:
        "03, US03, 04, US04, US09, 09, US10, 10, 10B, 10BE, 10BL, US14, US15, 20D, 26D, 26, 32, 32D, BSP, WSP, 605, 606, 611, 612, 613, 613E, 613L, 618, 619, 624, 625, 626, 629, 630",
      trims:trimsString,
      warning: "If using thumbpiece trim go to TP Trim section",

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055921",
      text: "View Mounting Template (Any Material) Doc# 4415-H",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055900",
      text1: "View Trim Template (700-8 ET) Doc# 4414-H",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055896",
      text2: "View 649 Strike Template (Single Door) Doc# 4004-K",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1055897",
      text3:
        "View 649 Standard Strike Template (Double Door W/ Mullion) Doc# 4300-E",
      link4: "https://storage.googleapis.com/aa-americas/dam/AADSS1055986",
      text4:
        "View 644 Alternate Strike Template (Double Door No Mullion) Doc# 3996-C",
      link5: "https://storage.googleapis.com/aa-americas/dam/AADSS1055972",
      text5: "View Wide EM Raceway Template Doc# 4569-C",
    },
    {
      device: "8800",

      title: "(12-)(WS-)8800 (73, 74, 75, 76)",
      image: Images.wideStileRim,
      functions:
        "8873, 8874, 8875, 8876, Wide, Wide 80 Series, Wide 80, 80, 80 series, series, 649, Strike, 649 Strike, 644, 644 Strike, Rim, Rim Exit, Wide Rim Exit, 8800, Rim Exit Device, Exit Device, Device, Wide Stile, Stile, Wide Rim Exit Device, WS8800, 128800, 12-8800, 12 8800, 12-WS-8800, 12-WS8800, 12 WS 8800, 12WS8800, Electrified, Trim, ELectrified Trim, 773, 774, 775, 776, 773-8, 774-8, 775-8, 776-8",
      MechOptions:
        "12, 14, 16, 19, 23, 31, 36, 37, AD, WD, MD, HC, WS, 43, 76, 85, 86, 87, GL, PL, LD, SG, TB, NB, CPC, 5CH",
      ElecOptions: "53, 54, 55, 56, 56-HK, HK, 58, 59, AL, BC, BC-59",
      CylOptions:
        "10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      railSizes: "E, F, J, G",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V",
      finishes:
        "03, US03, 04, US04, US09, 09, US10, 10, 10B, 10BE, 10BL, US14, US15, 20D, 26D, 26, 32, 32D, BSP, WSP, 605, 606, 611, 612, 613, 613E, 613L, 618, 619, 624, 625, 626, 629, 630",
      trims:trimsString,
      warning: "If using thumbpiece trim go to TP Trim section",

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055914",
      text: "View Mounting Template (Any Material) Doc# 4415-H",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055915",
      text1: "View Electrified Trim Template (54-)(700-8 ET) Doc# 4530",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055896",
      text2: "View 649 Strike Template (Single Door) Doc# 4004-K",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1055897",
      text3:
        "View 649 Standard Strike Template (Double Door W/ Mullion) Doc# 4300-E",
      link4: "https://storage.googleapis.com/aa-americas/dam/AADSS1055986",
      text4:
        "View 644 Alternate Strike Template (Double Door No Mullion) Doc# 3996-C",
      link5: "https://storage.googleapis.com/aa-americas/dam/AADSS1055972",
      text5: "View Wide EM Raceway Template Doc# 4569-C",
    },
    {
      device: "8800",
      title: "(12-)HC8800 (04, 10, 40, 44)",
      image: Images.wideStileRim,
      functions:
        "8804, 8810, 8840, 8844, Wide, Wide 80 Series, Wide 80, 80, 80 series, series, 649, Strike, 649 Strike, Rim, Rim Exit, Wide Rim Exit, 8800, Rim Exit Device, Exit Device, Device, Wide Stile, Stile, Wide Rim Exit Device, HC8800, 12HC8800, 12-HC-8800, 12HC-8800, 12-HC8800, HC 8800, 12 HC 8800, 12HC 8800, Exit Only, Night Latch, Night, Latch, Only",
      MechOptions:
        "12, 14, 16, 19, 23, 31, 36, 37, AD, WD, MD, HC, WS, 43, 76, 85, 86, 87, GL, PL, LD, SG, TB, NB, CPC, 5CH",
      ElecOptions: "53, 54, 55, 56, 56-HK, HK, 58, 59, AL, BC, BC-59",
      CylOptions:
        "10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      railSizes: "E, F, J, G",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V",
      finishes:
        "03, US03, 04, US04, US09, 09, US10, 10, 10B, 10BE, 10BL, US14, US15, 20D, 26D, 26, 32, 32D, BSP, WSP, 605, 606, 611, 612, 613, 613E, 613L, 618, 619, 624, 625, 626, 629, 630",
      trims:trimsString,
      warning: (
        <>
          ↓ For cylinder only Application ↓ <br />
          use Mounting Template Hole 2
        </>
      ),

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055914",
      text: "View Mounting Template (Any Material) Doc# 4415-H",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055894",
      text1: "View 700 ET Trim Template Doc# 4465",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1055896",
      text3: "View 649 Strike Template (Single Door) Doc# 4004-K",
      link4: "https://storage.googleapis.com/aa-americas/dam/AADSS1055897",
      text4:
        "View 649 Standard Strike Template (Double Door W/ Mullion) Doc# 4300-E",
      link5: "https://storage.googleapis.com/aa-americas/dam/AADSS1055972",
      text5: "View Wide EM Raceway Template Doc# 4569-C",
    },
    {
      device: "8800",
      title: "(12-)HC8800 (06, 13, 15, 43 46)",
      image: Images.wideStileRim,
      functions:
        "8806, 8813, 8815, 8843, 8846, 80, 80 series, series, Wide, Wide 80 Series, Wide 80, 649, Strike, 649 Strike, Rim, Rim Exit, Wide Rim Exit, 8800, Rim Exit Device, Exit Device, Device, Wide Stile, Stile, Wide Rim Exit Device, HC8800, 12HC8800, 12-HC-8800, 12HC-8800, 12-HC8800, HC 8800, 12 HC 8800, 12HC 8800, Class, Room, Classroom, Store, Storeroom, Store-Room, ",
      MechOptions:
        "12, 14, 16, 19, 23, 31, 36, 37, AD, WD, MD, HC, WS, 43, 76, 85, 86, 87, GL, PL, LD, SG, TB, NB, CPC, 5CH",
      ElecOptions: "53, 54, 55, 56, 56-HK, HK, 58, 59, AL, BC, BC-59",
      CylOptions:
        "10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      railSizes: "E, F, J, G",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V",
      finishes:
        "03, US03, 04, US04, US09, 09, US10, 10, 10B, 10BE, 10BL, US14, US15, 20D, 26D, 26, 32, 32D, BSP, WSP, 605, 606, 611, 612, 613, 613E, 613L, 618, 619, 624, 625, 626, 629, 630",
      trims:trimsString,
      warning: "If using thumbpiece trim go to TP Trim section",

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055914",
      text: "View Mounting Template (Any Material) Doc# 4415-H",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055895",
      text1: "View 700-8 ET Trim Template Doc# 4463",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1055896",
      text3: "View 649 Strike Template (Single Door) Doc# 4004-K",
      link4: "https://storage.googleapis.com/aa-americas/dam/AADSS1055897",
      text4:
        "View 649 Standard Strike Template (Double Door W/ Mullion) Doc# 4300-E",
      link5: "https://storage.googleapis.com/aa-americas/dam/AADSS1055972",
      text5: "View Wide EM Raceway Template Doc# 4569-C",
    },
    {
      device: "8800",
      title: "(12-)HC8800 (75, 76)",
      image: Images.wideStileRim,
      functions:
        "8875, 8876, 80, 80 series, series, Rim, Rim Exit, Wide, Wide 80 Series, Wide 80, Wide Rim Exit, 8800, 649, Strike, 649 Strike, Rim Exit Device, Exit Device, Device, Wide Stile, Stile, Wide Rim Exit Device, HC8800, 12HC8800, 12-HC-8800, 12HC-8800, 12-HC8800, HC 8800, 12 HC 8800, 12HC 8800, Electrified, Trim, ELectrified Trim, 773, 774, 775, 776, 773-8, 774-8, 775-8, 776-8",
      MechOptions:
        "12, 14, 16, 19, 23, 31, 36, 37, AD, WD, MD, HC, WS, 43, 76, 85, 86, 87, GL, PL, LD, SG, TB, NB, CPC, 5CH",
      ElecOptions: "53, 54, 55, 56, 56-HK, HK, 58, 59, AL, BC, BC-59",
      CylOptions:
        "10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      railSizes: "E, F, J, G",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V",
      finishes:
        "03, US03, 04, US04, US09, 09, US10, 10, 10B, 10BE, 10BL, US14, US15, 20D, 26D, 26, 32, 32D, BSP, WSP, 605, 606, 611, 612, 613, 613E, 613L, 618, 619, 624, 625, 626, 629, 630",
      trims:trimsString,
      warning: "If using thumbpiece trim go to TP Trim section",

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055914",
      text: "View Mounting Template (Any Material) Doc# 4415-H",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055915",
      text1: "View Electrified Trim Template (54-)(700-8 ET) Doc# 4530",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055896",
      text2: "View 649 Strike Template (Single Door) Doc# 4004-K",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1055897",
      text3:
        "View 649 Standard Strike Template (Double Door W/ Mullion) Doc# 4300-E",
    },
    {
      device: "8800",

      title: "8800 Thumbpiece Trims (04, 10, 28, 63, 66)",
      functions:
        "8804, 8810, 8828, 8863, 8866, 80, 80 series, series, Wide, Wide 80 Series, Wide 80, Thumb, Piece, Trims, ThumbPiece, Thumb Piece, Thumbpiece Trims, Night Latch, Night, Latch, Classroom, Class Room, Class-Room, Intruder, Classroom Intruder, PTB, STS, MAL, FLL, FLW, PSB, MSL, FSL, FSW",
      MechOptions:
        "12, 14, 16, 19, 23, 31, 36, 37, AD, WD, MD, HC, WS, 43, 49, 76, 85, 86, 87, GL, PL, LD, SG, TB, NB, CPC, 5CH",
      ElecOptions: "53, 54, 55, 56, 56-HK, HK, 58, 59, AL, BC, BC-59",
      CylOptions:
        "10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      railSizes: "E, F, J, G",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V",
      finishes:
        "03, US03, 04, US04, US09, 09, US10, 10, 10B, 10BE, 10BL, US14, US15, 20D, 26D, 26, 32, 32D, BSP, WSP, 605, 606, 611, 612, 613, 613E, 613L, 618, 619, 624, 625, 626, 629, 630",
      trims:trimsString,
      image: Images.thumbpieceTrims,

      warning:
        'NOTE: FSL, FSW, MSL & PSB trims are same as others but the cylinder is located 3/8"(9mm) lower',
      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055887",
      text: "View FLL/FLW Trim Template (810, 814, 828, 866) Doc# 4257-D",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055888",
      text1: "View MAL Trim Template (810, 814, 828, 866) Doc# 4024-L",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055891",
      text2: "View PTB Trim Template (810, 814, 828, 866) Doc# 4221-E",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1055920",
      text3: "View STS Strim Template Doc# (810, 814, 828, 866) 4020-F",
      link4: "https://storage.googleapis.com/aa-americas/dam/AADSS1055890",
      text4: "View PSB/FSW/FSL Trim Template (814) Doc# 4546",
      link5: "https://storage.googleapis.com/aa-americas/dam/AADSS1055889",
      text5: "View MSL Trim Template (814) Doc# 4545",
    },
    {
      device: "8900",

      title: "(12-)(WS-)8900 (04, 06, 10, 13, 15, 16, 40, 43, 44)",
      image: Images.wideMortise,
      functions:
        "8904, 8906, 8910, 8913, 8915, 8916, 8940, 8943, 8944, Wide, Wide 80 Series, Wide 80, 80, 80 series, series, 908, C908, 815, 815 Strike, 908 Strike, C908 Strike, 815 Open Back Strike, Wide, Wide Mortise, Wide Mortise Exit, Wide Mortise Exit Device, Exit, Device, Exit Device, Mortise Exit, Mortise Exit Device, 700 ET, ET, ET Trim, Trim, Delayed Egress, Classroom, Class, Room, Class Room, Class-Room, Storeroom, Store Room, Store-room, passage, Exit, Only, Exit Only, 8900, 12-8900, 12 8900, 128900, WS8900, WS-8900, WS 8900, 12-WS-8900, 12-WS8900, 12WS-8900, 12 WS 8900",
      MechOptions:
        "12, 14, 16, 19, 23, 31, 36, 37, AD, WD, MD, HC, WS, 43, 49, 76, 85, 86, 87, GL, PL, LD, SG, TB, NB, CPC, 5CH",
      ElecOptions: "53, 54, 55, 56, 56-HK, HK, 58, 59, AL, BC, BC-59",
      CylOptions:
        "10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      railSizes: "E, F, J, G",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V",
      finishes:
        "03, US03, 04, US04, US09, 09, US10, 10, 10B, 10BE, 10BL, US14, US15, 20D, 26D, 26, 32, 32D, BSP, WSP, 605, 606, 611, 612, 613, 613E, 613L, 618, 619, 624, 625, 626, 629, 630",
      trims:trimsString,
      warning: "If using thumbpiece trim go to TP Trim section",

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055934",
      text: "View 8900 Mounting Template (Any Material) Doc# 4290-J",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055929",
      text1: "View Mortise Case Template (Any Material) Doc# 4709-3",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055932",
      text2: "View (59-)Mortise Case Template (Any Material) Doc# 4458-C",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1055922",
      text3: "View Trim Template (700 ET) Doc# 4277-18",
      link4: "https://storage.googleapis.com/aa-americas/dam/AADSS1055931",
      text4: "View 908/C908 Strike Standard Template Doc# 3908-Y",
      link5: "https://storage.googleapis.com/aa-americas/dam/AADSS1055930",
      text5: "View 815 Open Back Strike Template Doc# 4192-H",
      link6: "https://storage.googleapis.com/aa-americas/dam/AADSS1055972",
      text6: "View Wide EM Raceway Template Doc# 4569-C",
    },
    {
      device: "8900",

      title: "(12-)(WS-)8900 (75, 76)",
      image: Images.wideMortise,
      functions:
        "8975, 8976, Wide, Wide 80 Series, Wide 80, 80, 80 series, series, 908, C908, 815, 908 Strike, C908 Strike, 815 Open Back Strike, Wide, Wide Mortise, Wide Mortise Exit, Wide Mortise Exit Device, Exit, Device, Exit Device, Mortise Exit, Mortise Exit Device, 700 ET, ET, ET Trim, Trim, Delayed Egress, Electrified, Electrified Trim, 775, 776, 8900, 12-8900, 12 8900, 128900, WS8900, WS-8900, WS 8900, 12-WS-8900, 12-WS8900, 12WS-8900, 12 WS 8900",
      MechOptions:
        "12, 14, 16, 19, 23, 31, 36, 37, AD, WD, MD, HC, WS, 43, 49, 76, 85, 86, 87, GL, PL, LD, SG, TB, NB, CPC, 5CH",
      ElecOptions: "53, 54, 55, 56, 56-HK, HK, 58, 59, AL, BC, BC-59",
      CylOptions:
        "10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      railSizes: "E, F, J, G",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V",
      finishes:
        "03, US03, 04, US04, US09, 09, US10, 10, 10B, 10BE, 10BL, US14, US15, 20D, 26D, 26, 32, 32D, BSP, WSP, 605, 606, 611, 612, 613, 613E, 613L, 618, 619, 624, 625, 626, 629, 630",
      trims:trimsString,
      warning: "If using thumbpiece trim go to TP Trim section",

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055934",
      text: "View 8900 Mounting Template (Any Material) Doc# 4290-J",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055929",
      text1: "View Mortise Case Template (Any Mateial) Doc# 4709-3",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055932",
      text2: "View (59-)Mortise Case Template (Any Metarial) Doc# 4458-C",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1055928",
      text3: "View Trim Template (54-)(700 ET) Doc# 4314-T",
      link4: "https://storage.googleapis.com/aa-americas/dam/AADSS1055931",
      text4: "View 908/C908 Strike Standard Template Doc# 3908-Y",
      link5: "https://storage.googleapis.com/aa-americas/dam/AADSS1055930",
      text5: "View 815 Open Back Strike Template Doc# 4192-H",
      link6: "https://storage.googleapis.com/aa-americas/dam/AADSS1055972",
      text6: "View Wide EM Raceway Template Doc# 4569-C",
    },
    {
      device: "8900",

      title: "8900 Thumbpiece Trims (04, 10, 28, 63, 66)",
      functions:
        "8904, 8910, 8928, 8963, 8966, Wide, Wide 80 Series, Wide 80, 80, 80 series, series, Thumb, Piece, Thumbpiece, Thumbpiece Trims, Thumbpiece Trim, PTB, STS, FLL, FLW, MAL, Night, Latch, Night Latch, Exit, Only, Exit Only, 8900, 12-8900, 12 8900, 128900, WS8900, WS-8900, WS 8900, 12-WS-8900, 12-WS8900, 12WS-8900, 12 WS 8900",
      MechOptions:
        "12, 14, 16, 19, 23, 31, 36, 37, AD, WD, MD, HC, WS, 43, 49, 76, 85, 86, 87, GL, PL, LD, SG, TB, NB, CPC, 5CH",
      ElecOptions: "53, 54, 55, 56, 56-HK, HK, 58, 59, AL, BC, BC-59",
      CylOptions:
        "10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      railSizes: "E, F, J, G",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V",
      finishes:
        "03, US03, 04, US04, US09, 09, US10, 10, 10B, 10BE, 10BL, US14, US15, 20D, 26D, 26, 32, 32D, BSP, WSP, 605, 606, 611, 612, 613, 613E, 613L, 618, 619, 624, 625, 626, 629, 630",
      trims:trimsString,
      image: Images.thumbpieceTrims,

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055887",
      text: "View FLL/FLW Trim Template (810, 814, 828, 866) Doc# 4257-D",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055888",
      text1: "View MAL Trim Template (810, 814, 828, 866) Doc# 4024-L",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055891",
      text2: "View PTB Trim Template (810, 814, 828, 866) Doc# 4221-E",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1055920",
      text3: "View STS Strim Template Doc# (810, 814, 828, 866) 4020-F",
    },
  ],
  NarrowPE80: [
    {
      device: "PE8300",

      title: "(12-)PE8300 Narrow Mortise Exit (All Functions)",
      functions:
        "PE8304, PE8306, PE8310, PE8313, PE8315, Narrow PE Series, Narrow PE80 Series, PE8340, PE8343, PE8344, PE8346, PE8373, PE8374, PE8375, PE8376, 908, C908, 815, 908 Strike, C908 Strike, 815 Strike, 815 Open Back Strike, ET, ET Trim, 700 ET, Narrow, Exit, Device, Narrow Exit, Narrow Exit Device, Narrow Mortise, Mortise, Narrow Mortise Exit, Narrow Mortise Exit Device, Narrow PE Exit Device, Narrow PE, 8300, PE8300, PE80 series, PE80, PE, PE80 Series, PE Series, Classroom, Class-Room, class, room, class room, Night Latch, Night, Latch, Store-Room, Passage",
      MechOptions:
        "12, HK, FM, HC, WS, LC, 16, LD, AD, MD, WD, 31, OL, 36, TB, CPC, SG, 18, 49, 14, GL, NB, PL, 5CH, 23, 76, 85, 86, 87",
      ElecOptions:
        "AL, 53, W53, 54, W54, 55, W55, 55-ERM, ERM, W55-ERM, W55, 56, 56-HK, 58, 59, WH",
      CylOptions:
        "10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      railSizes: "E, F, J, G",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V",
      finishes:
        "03, US03, 04, US04, US09, 09, US10, 10, 10B, 10BE, 10BL, US14, US15, 20D, 26D, 26, 32, 32D, BSP, WSP, 605, 606, 611, 612, 613, 613E, 613L, 618, 619, 624, 625, 626, 629, 630",
        trims:trimsString,

      image: Images.narrowPE80Mortise,

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1238416",
      text: "View Wood Door Mounting Template Doc# MEDT46",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1238415",
      text1: "View Metal/Aluminum Door Mounting Template Doc# MEDT45",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1238390",
      text2: "View Trim Template (700 ET) Doc# MEDT20",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1055928",
      text3: "View Electrified Trim Template Doc# 4314-T",
      link4: "https://storage.googleapis.com/aa-americas/dam/AADSS1238420",
      text4: "View C908/908 Strike Template Doc# MEDT50",
      link5: "https://storage.googleapis.com/aa-americas/dam/AADSS1238419",
      text5: "View 815 Strike Template Doc# MEDT49",
      link6: "https://storage.googleapis.com/aa-americas/dam/AADSS1238383",
      text6: "View Narrow EM Raceway Template Doc# MEDT8",
    },
    {
      device: "PE8400",

      title: "(12-) PE8400 CVR Exit (All Functions)",
      functions:
        "PE8406, PE8410, PE8413, PE8415, PE8440, Narrow PE Series, Narrow PE80 Series, PE8443, PE8446, PE8473, PE8474, PE80 series, PE80, PE, PE80 Series, PE Series, 640, 652, 640 Strike, 652 Strike, ET, ET Trim, 700 ET, Narrow, Narrow CVR, Narrow CVR Exit, Narrow CVR Exit Device, CVR, Exit, Device, PE8400, 8400, PE80, PE, Narrow CVR Device, 100 Aux, 100, 106, 113, P100, P100 Aux, P106, P113, MD, WD, AD, Wood, Aluminum, Wood Door, ALuminum Door, Metal, Door, Metal Door, NB, Vertical Rods, Concealed Vertical Rod, Rods, Vertical, Classroom, Class-Room, class, room, class room, StoreRoom, Store Room, Store-Room, Passage",
        MechOptions:
        "12, HK, FM, HC, WS, LC, 16, LD, AD, MD, WD, 31, OL, 36, TB, CPC, SG, 18, 49, 14, GL, NB, PL, 5CH, 23, 76, 85, 86, 87",
      ElecOptions:
        "AL, 53, W53, 54, W54, 55, W55, 55-ERM, ERM, W55-ERM, W55, 56, 56-HK, 58, 59, WH",
      CylOptions:
        "10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      railSizes: "E, F, J, G",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V",
      finishes:
        "03, US03, 04, US04, US09, 09, US10, 10, 10B, 10BE, 10BL, US14, US15, 20D, 26D, 26, 32, 32D, BSP, WSP, 605, 606, 611, 612, 613, 613E, 613L, 618, 619, 624, 625, 626, 629, 630",
        trims:trimsString,

      image: Images.narrowPECVR,

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1238403",
      text: "View Wood Door Mounting Template Doc# MEDT33",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1238376",
      text1: "View Aluminum Door Mounting Template Doc# MEDT1",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1238378",
      text2: "View Metal Door Mounting Template Doc# MEDT3",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1238418",
      text3: "View Trim Template Doc# MEDT48",
      link4: "https://storage.googleapis.com/aa-americas/dam/AADSS1238381",
      text4: "View 640 Standard Strike Template Doc# MEDT6",
      link5: "https://storage.googleapis.com/aa-americas/dam/AADSS1238384",
      text5: "View 652 Standard Strike Template Doc# MEDT9",
      link6: "https://storage.googleapis.com/aa-americas/dam/AADSS1238383",
      text6: "View Narrow EM Raceway Template Doc# MEDT8",
    },
    {
      device: "PE8500",

      title: "(12-)PE8500 Narrow Rim Exit (04, 10, 40, 44 Functions)",
      functions:
        "PE8504, PE8510, PE8540, PE8544, PE80 series, Narrow PE Series, Narrow PE80 Series, PE80, PE, PE80 Series, PE Series, Narrow, Rim, Exit, Narrow Rim, Narrow Rim Exit, Narrow Rim Exit Device, 8500, PE8500, PE80, Narrow PE, Narrow PE Exit Device, Narrow PE Exit, PE, 700 ET, ET, ET Trim , 700 ET Trim, 704, 710, 740, 744, WEL, NEL, WE, NE, Narrow Exit Device, Narrow Exit, Exit, Exit only, Night, Latch, Night Latch",
        MechOptions:
        "12, HK, FM, HC, WS, LC, 16, LD, AD, MD, WD, 31, OL, 36, TB, CPC, SG, 18, 49, 14, GL, NB, PL, 5CH, 23, 76, 85, 86, 87",
      ElecOptions:
        "AL, 53, W53, 54, W54, 55, W55, 55-ERM, ERM, W55-ERM, W55, 56, 56-HK, 58, 59, WH",
      CylOptions:
        "10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      railSizes: "E, F, J, G",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V",
      finishes:
        "03, US03, 04, US04, US09, 09, US10, 10, 10B, 10BE, 10BL, US14, US15, 20D, 26D, 26, 32, 32D, BSP, WSP, 605, 606, 611, 612, 613, 613E, 613L, 618, 619, 624, 625, 626, 629, 630",
        trims:trimsString,

      image: Images.narrowPE8500,

      warning:
        "NOTE: For 10 Function Just OMIT Cylinder hole from 2nd Template",
      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1238405",
      text: "View (04 Function) Cylinder only Inside Mounting Template Doc# MEDT35",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1238406",
      text1:
        "View (04 Function) with ET Trim Inside Mounting Template Doc# MEDT41 ",
      link6: "https://storage.googleapis.com/aa-americas/dam/AADSS1238383",
      text6: "View Narrow EM Raceway Template Doc# MEDT8",
    },
    {
      device: "PE8500",

      title:
        "(12-)PE8500 Narrow Rim Exit (06, 13, 15, 43, 46, 73, 74 Functions)",
      functions:
        "8506, 8513, 8515, 8543, 8546, 8573, 8574, PE8506, PE8513, PE8515, PE8543, PE8546, PE8573, PE8574, Narrow PE Series, Narrow PE80 Series, PE80 series, PE80, PE, PE80 Series, PE Series, PE8500, 8500, Narrow, Rim, Exit, Device, Narrow Rim, Exit Device, Narrow Rim Exit, Narrow Rim Exit Device, P700, P700 ET, ET, ET Trim, P700 ET Trim, P700-8, P706-8, P715-8, P713-8, P743-8, P746-8, Classroom, Class-Room, class, room, class room, StoreRoom, Store Room, Store-Room, Passage",
        MechOptions:
        "12, HK, FM, HC, WS, LC, 16, LD, AD, MD, WD, 31, OL, 36, TB, CPC, SG, 18, 49, 14, GL, NB, PL, 5CH, 23, 76, 85, 86, 87",
      ElecOptions:
        "AL, 53, W53, 54, W54, 55, W55, 55-ERM, ERM, W55-ERM, W55, 56, 56-HK, 58, 59, WH",
      CylOptions:
        "10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      railSizes: "E, F, J, G",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V",
      finishes:
        "03, US03, 04, US04, US09, 09, US10, 10, 10B, 10BE, 10BL, US14, US15, 20D, 26D, 26, 32, 32D, BSP, WSP, 605, 606, 611, 612, 613, 613E, 613L, 618, 619, 624, 625, 626, 629, 630",
        trims:trimsString,

      image: Images.narrowPE8500,

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1238392",
      text: "View Inside Mounting Template Doc# MEDT22",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1238391",
      text1: "View Outside Trim Template Doc# MEDT20",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1238411",
      text2: "View (54-)(P773-8/P774-8) Electrified Trim Template Doc# MEDT41",
      link6: "https://storage.googleapis.com/aa-americas/dam/AADSS1238383",
      text6: "View Narrow EM Raceway Template Doc# MEDT8",
    },
    {
      device: "PE8500",

      title: "PE8500 Strikes",
      image: Images.narrowPE8500,
      functions:
        "Strike, Strikes, PE80 series, Wide PE Series, Wide PE80 Series, PE80, PE, PE80 Series, PE Series, 656 Strike, 657 Strike, 649 Strike, 658 Strike, 613 Strike, 642 Strike, 644 Strike, 656, 657, 649, 658, 613, 642, 644",

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1246741",
      text: "View 656 Standard Strike Template (Double Door/Mullion) Doc# MEDT74",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1238407",
      text1: "View 657 Standard Strike Template Doc# MEDT37",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1238408",
      text2:
        "View 649 Standard (12-) Strike Template (Single Door) Doc# MEDT38",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1238410",
      text3: "View 658 Standard Strike (650A Mullions) Template Doc# MEDT40",
      link4: "https://storage.googleapis.com/aa-americas/dam/AADSS1246740",
      text4: "View 613 Optional Strike Template Doc# MEDT73",
      link5: "https://storage.googleapis.com/aa-americas/dam/AADSS1246738",
      text5: "View 642 Optional Strike Template Doc# MEDT71",
      link6: "https://storage.googleapis.com/aa-americas/dam/AADSS1246739",
      text6:
        "View 644 Optional Strike Template (Double Door Without Mullion) Doc# MEDT72",
      link7: "https://storage.googleapis.com/aa-americas/dam/AADSS1055897",
      text7:
        "View 649 Optional Strike Template (Double Door With Mullion) Doc# 4300-E",
    },
  ],
  WidePE80: [
    {
      device: "PE8600",

      title: "(12-) PE8600 CVR Exit  (Wood Door)",
      functions:
        "PE8606, PE8610, PE8613, PE8615, PE8640, PE8643, PE8646, PE8673, PE8674, Wide PE Series, Wide PE80 Series, PE80 series, PE80, PE, PE80 Series, PE Series, Wood, WD, Wood Door, WD8600, PEWD8600, WD PE 8600, PE WD 8600, 650, 650 Strike, 652, 652 Strike, 100 Aux, P100 Aux, 106, 113, P113, P106, Wide, PE, Wide PE, Wide PE Exit, Wide PE Exit Device, Wide CVR, CVR, Wide CVR Exit Device, Storeroom, Store Room, Store-Room, Store, Room, Class, Room, Classroom, Class Room, Class-Room, Passage, ELectrified Trim, Electrified",
        MechOptions:
        "12, HK, FM, HC, WS, LC, 16, LD, AD, MD, WD, 31, OL, 36, TB, CPC, SG, 18, 49, 14, GL, NB, PL, 5CH, 23, 76, 85, 86, 87",
      ElecOptions:
        "AL, 53, W53, 54, W54, 55, W55, 55-ERM, ERM, W55-ERM, W55, 56, 56-HK, 58, 59, WH",
      CylOptions:
        "10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      railSizes: "E, F, J, G",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V",
      finishes:
        "03, US03, 04, US04, US09, 09, US10, 10, 10B, 10BE, 10BL, US14, US15, 20D, 26D, 26, 32, 32D, BSP, WSP, 605, 606, 611, 612, 613, 613E, 613L, 618, 619, 624, 625, 626, 629, 630",
        trims:trimsString,

      image: Images.widePECVR,

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1238403",
      text: "View Mounting Template (Wood Door) Doc# MEDT33",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1238418",
      text1: "View Trim Template (Any Material) Doc# MEDT48",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1238421",
      text2: "View (54-) Electrified ET Trim Template (73 & 74) Doc# MEDT51",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1238384",
      text3: "View 650/652 Standard Strike Template Doc# MEDT9",
      link4: "https://storage.googleapis.com/aa-americas/dam/AADSS1238382",
      text4: "View 106/113 Auxiliary Control Template Doc# MEDT7",
      link5: "https://storage.googleapis.com/aa-americas/dam/AADSS1238389",
      text5: "View Wide EM Wiring Raceway Template Doc# MEDT17",
    },
    {
      device: "PE8600",

      title: "(12-) PE8600 CVR Exit  (Metal Door)",
      functions:
        "PE8606, PE8610, PE8613, PE8615, PE8640, PE8643, PE8646, PE8673, PE8674, Wide PE Series, Wide PE80 Series, PE80 series, PE80, PE, PE80 Series, PE Series, Metal, MD, Metal Door, MD8600, PEMD8600, MD PE 8600, PE MD 8600, 650, 650 Strike, 652, 652 Strike, 100 Aux, P100 Aux, 106, 113, P113, P106, Wide, PE, Wide PE, Wide PE Exit, Wide PE Exit Device, Wide CVR, CVR, Wide CVR Exit Device, Storeroom, Store Room, Store-Room, Store, Room, Class, Room, Classroom, Class Room, Class-Room, Passage, ELectrified Trim, Electrified",
        MechOptions:
        "12, HK, FM, HC, WS, LC, 16, LD, AD, MD, WD, 31, OL, 36, TB, CPC, SG, 18, 49, 14, GL, NB, PL, 5CH, 23, 76, 85, 86, 87",
      ElecOptions:
        "AL, 53, W53, 54, W54, 55, W55, 55-ERM, ERM, W55-ERM, W55, 56, 56-HK, 58, 59, WH",
      CylOptions:
        "10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      railSizes: "E, F, J, G",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V",
      finishes:
        "03, US03, 04, US04, US09, 09, US10, 10, 10B, 10BE, 10BL, US14, US15, 20D, 26D, 26, 32, 32D, BSP, WSP, 605, 606, 611, 612, 613, 613E, 613L, 618, 619, 624, 625, 626, 629, 630",
        trims:trimsString,

      image: Images.widePECVR,

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1238379",
      text: "View Mounting Template (Metal Door) Doc# MEDT4",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1238418",
      text1: "View Trim Template (Any Material) Doc# MEDT48",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1238421",
      text2: "View (54-) Electrified ET Trim Template (73 & 74) Doc# MEDT51",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1238384",
      text3: "View 650/652 Standard Strike Template Doc# MEDT9",
      link4: "https://storage.googleapis.com/aa-americas/dam/AADSS1238382",
      text4: "View 106/113 Auxiliary Control Template Doc# MEDT7",
      link5: "https://storage.googleapis.com/aa-americas/dam/AADSS1238389",
      text5: "View Wide EM Wiring Raceway Template Doc# MEDT17",
    },
    {
      device: "PE8600",

      title: "(12-) PE8600 CVR Exit (Aluminum Door)",
      functions:
        "PE8606, PE8610, PE8613, PE8615, PE8640, PE8643, PE8646, PE8673, PE8674, Wide PE Series, Wide PE80 Series, PE80 series, PE80, PE, PE80 Series, PE Series, Aluminum, AD, Aluminum Door, AD8600, PEAD8600, AD PE 8600, PE AD 8600, 640, 640 Strike, 606, 606 Strike, 100 Aux, P100 Aux, 106, 113, P113, P106, Wide, PE, Wide PE, Wide PE Exit, Wide PE Exit Device, Wide CVR, CVR, Wide CVR Exit Device, Storeroom, Store Room, Store-Room, Store, Room, Class, Room, Classroom, Class Room, Class-Room, Passage, Electrified Trim, Electrified",
        MechOptions:
        "12, HK, FM, HC, WS, LC, 16, LD, AD, MD, WD, 31, OL, 36, TB, CPC, SG, 18, 49, 14, GL, NB, PL, 5CH, 23, 76, 85, 86, 87",
      ElecOptions:
        "AL, 53, W53, 54, W54, 55, W55, 55-ERM, ERM, W55-ERM, W55, 56, 56-HK, 58, 59, WH",
      CylOptions:
        "10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      railSizes: "E, F, J, G",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V",
      finishes:
        "03, US03, 04, US04, US09, 09, US10, 10, 10B, 10BE, 10BL, US14, US15, 20D, 26D, 26, 32, 32D, BSP, WSP, 605, 606, 611, 612, 613, 613E, 613L, 618, 619, 624, 625, 626, 629, 630",
        trims:trimsString,

      image: Images.widePECVR,

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1238377",
      text: "View Mounting Template (Aluminum Door) Doc# MEDT4",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1238418",
      text1: "View Trim Template (Any Material) Doc# MEDT48",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1238421",
      text2: "View (54-) Electrified ET Trim Template (73 & 74) Doc# MEDT51",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1238381",
      text3: "View 640 Standard Strike Template Doc# MEDT6",
      link4: "https://storage.googleapis.com/aa-americas/dam/AADSS1238384",
      text4: "View 606 Optional Bottom Strike Template",
      link5: "https://storage.googleapis.com/aa-americas/dam/AADSS1238382",
      text5: "View 106/113 Auxiliary Control Template Doc# MEDT7",
      link6: "https://storage.googleapis.com/aa-americas/dam/AADSS1238389",
      text6: "View Wide EM Wiring Raceway Template Doc# MEDT17",
    },
    {
      device: "PE8700",

      title: "(12-) PE8700 SVR Exit",
      functions:
        "PE8706, PE8710, PE8713, PE8715, PE8740, PE8743, PE8746, PE8773, PE8774, Wide PE Series, Wide PE80 Series, PE80 series, PE80, PE, PE80 Series, PE Series, 646, 624, 655, Strike, 646 Strike, 624 Strike, 655 Strike, PE, Wide PE, PE80, PE80 Series, Wide PE, Wide PE Exit Devce, Wide PE Exit, Wide SVR, Wide SVR Device, Wide SVR Exit, SVR, SVR Exit Device, 300 Aux, 306, 313, P306, P313, Wide PE 8700, Wide PE8700, PE, PE8700, 8700, WE, NE, WE Trim, NE Trim, Storeroom, Store Room, Store-Room, Store,  Room, Class, Room, Classroom, Class Room, Class-Room, Passage, Electrified Trim, Electrified, P700",
        MechOptions:
        "12, HK, FM, HC, WS, LC, 16, LD, AD, MD, WD, 31, OL, 36, TB, CPC, SG, 18, 49, 14, GL, PL, 5CH, 23, 76, 85, 86, 87",
      ElecOptions:
        "AL, 53, W53, 54, W54, 55, W55, 55-ERM, ERM, W55-ERM, W55, 56, 56-HK, 58, 59, WH",
      CylOptions:
        "10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      railSizes: "E, F, J, G",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V",
      finishes:
        "03, US03, 04, US04, US09, 09, US10, 10, 10B, 10BE, 10BL, US14, US15, 20D, 26D, 26, 32, 32D, BSP, WSP, 605, 606, 611, 612, 613, 613E, 613L, 618, 619, 624, 625, 626, 629, 630",
        trims:trimsString,

      image: Images.widePESVR,
      warning: "If using thumbpiece trim go to TP Trim section",

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1238386",
      text: "View Mounting Template Doc# MEDT12",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1238390",
      text1: "View Trim Template (P700 ET Trim) Doc# MEDT19",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1238402",
      text2: "View (54-) Electrified ET Trim Template (73 & 74) Doc# MEDT32",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1238395",
      text3: "View 646/624/655 Standard Top/Bottom Strike Template Doc# MEDT24",
      link4: "https://storage.googleapis.com/aa-americas/dam/AADSS1055962",
      text4: "View 306/313 Auxiliary Control Template Doc# 4214",
      link5: "https://storage.googleapis.com/aa-americas/dam/AADSS1238389",
      text5: "View Wide EM Wiring Raceway Template Doc# MEDT17",
    },
    {
      device: "PE8700",

      title: "(12-)(HC)(FM) PE8700 SVR Exit",
      functions:
        "PE8706, PE8710, PE8713, PE8715, PE8740, PE8743, PE8746, PE8773, PE8774, Wide PE Series, Wide PE80 Series, PE80 series, PE80, PE, PE80 Series, PE Series, 8706, 8710, 8713, 8715, 8740, 8743, 8746, 8773, 8774, 659, 655, 653, Strike, 659 Strike, 655 Strike, 653 Strike, SVR, SVR Exit, SVR Exit Device, Exit, Device, Exit Device, Surface Vertical Rod, Surface, Vertical, Rod, Vertical Rod, Surface Rod, 8700, PE8700, WE, WE Trim, NE, NE Trim, ET, Trim, ET Trim, P700, Electrified Trim, Electrified, P773, P774",
        MechOptions:
        "12, HK, FM, HC, WS, LC, 16, LD, AD, MD, WD, 31, OL, 36, TB, CPC, SG, 18, 49, 14, GL, PL, 5CH, 23, 76, 85, 86, 87",
      ElecOptions:
        "AL, 53, W53, 54, W54, 55, W55, 55-ERM, ERM, W55-ERM, W55, 56, 56-HK, 58, 59, WH",
      CylOptions:
        "10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      railSizes: "E, F, J, G",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V",
      finishes:
        "03, US03, 04, US04, US09, 09, US10, 10, 10B, 10BE, 10BL, US14, US15, 20D, 26D, 26, 32, 32D, BSP, WSP, 605, 606, 611, 612, 613, 613E, 613L, 618, 619, 624, 625, 626, 629, 630",
        trims:trimsString,

      image: Images.widePESVR,
      warning: "If using thumbpiece trim go to TP Trim section",

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1238388",
      text: "View Mountting Template Doc# MEDT14",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1238390",
      text1: "View Trim Template (P700 ET Trim) Doc# MEDT19",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1238402",
      text2: "View (54-) Electrified ET Trim Template (73 & 74) Doc# MEDT32",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1238396",
      text3: "View 659 Standard Top Strike Template Doc# MEDT26",
      link4: "https://storage.googleapis.com/aa-americas/dam/AADSS1234418",
      text4: "View 653/655 Standard Bottom Strike Template Doc# MEDT21",
      link5: "https://storage.googleapis.com/aa-americas/dam/AADSS1055962",
      text5: "View 306/313 Auxiliary Control Template Doc# 4214",
      link6: "https://storage.googleapis.com/aa-americas/dam/AADSS1238389",
      text6: "View Wide EM Wiring Raceway Template Doc# MEDT17",
    },
    {
      device: "PE8700",

      title: "PE8700 Thumbpiece Trims (10, 28, 62, 63)",
      functions:
        "PE8710, PE8728, PE8762, PE8763, Wide PE Series, Wide PE80 Series, PTB, STS, MAL, FLW, FLL, PE, Wide, PE80 series, PE80, PE, PE80 Series, PE Series, Wide PE, ThumbPiece, Thumb, Piece, Trims, Thumbpiece Trims, Thumbpiece trim, Pull, PE, PE8700, 8700, ",
        MechOptions:
        "12, HK, FM, HC, WS, LC, 16, LD, AD, MD, WD, 31, OL, 36, TB, CPC, SG, 18, 49, 14, GL, PL, 5CH, 23, 76, 85, 86, 87",
      ElecOptions:
        "AL, 53, W53, 54, W54, 55, W55, 55-ERM, ERM, W55-ERM, W55, 56, 56-HK, 58, 59, WH",
      CylOptions:
        "10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      railSizes: "E, F, J, G",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V",
      finishes:
        "03, US03, 04, US04, US09, 09, US10, 10, 10B, 10BE, 10BL, US14, US15, 20D, 26D, 26, 32, 32D, BSP, WSP, 605, 606, 611, 612, 613, 613E, 613L, 618, 619, 624, 625, 626, 629, 630",
        trims:trimsString,

      image: Images.thumbpieceTrims,

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055888",
      text: "View MAL Trim Template (810, 828, 866) Doc# 4024-L",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055887",
      text1: "View FLL/FLW Trim Template (810, 828, 866) Doc# 4257-D",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055891",
      text2: "View PTB Trim Template (810, 828, 866) Doc# 4221-E",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1055892",
      text3: "View STS Trim Template (810, 828, 866) Doc# 4021-G",
    },
    {
      device: "NB-PE8700",

      title: "(12-) NB-PE8700 SVR Exit",
      functions:
        "PE8706, PE8710, PE8713, PE8715, PE8740, PE8743, PE8746, PE8773, PE8774, Wide PE Series, Wide PE80 Series, PE80 series, PE80, PE, PE80 Series, PE Series, 8706, 8710, 8713, 8715, 8740, 8743, 8746, 8773, 8774, 659, 655, 653, Strike, 659 Strike, 655 Strike, 653 Strike, SVR, SVR Exit, SVR Exit Device, Exit, Device, Exit Device, Surface Vertical Rod, Surface, Vertical, Rod, Vertical Rod, Surface Rod, 8700, PE8700, WE, WE Trim, NE, NE Trim, ET, Trim, ET Trim, P700, Electrified Trim, Electrified, P773, P774",
        MechOptions:
        "12, HK, FM, HC, WS, LC, 16, LD, AD, MD, WD, 31, OL, 36, TB, CPC, SG, 18, 49, 14, GL, NB, PL, 5CH, 23, 76, 85, 86, 87",
      ElecOptions:
        "AL, 53, W53, 54, W54, 55, W55, 55-ERM, ERM, W55-ERM, W55, 56, 56-HK, 58, 59, WH",
      CylOptions:
        "10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      railSizes: "E, F, J, G",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V",
      finishes:
        "03, US03, 04, US04, US09, 09, US10, 10, 10B, 10BE, 10BL, US14, US15, 20D, 26D, 26, 32, 32D, BSP, WSP, 605, 606, 611, 612, 613, 613E, 613L, 618, 619, 624, 625, 626, 629, 630",
      trims:
        "NEP, WEP, NEL, WEL, NEJ, WEJ, NEF, WEF, NEE, WEE, WEB, NEB, WEA, NEA, WEY, NEY, WES, NES, WER, NER, WEG, NEG, NEC, WEC, WEWG, NEWG, WERGM, NERGM, NEREM, WEREM, NERCM, WERCM, NERAW, WERAW, WERAS, NERAS, NERAM, WERAM, NERAL, WERAL, WERAG, NERAG, WENU, NENU, WENJ, NENJ, NENF, WENF, WEND, NEND, WEMZ, NEMZ, WEMW, NEMW, NEMV, WEMV, WEMU, NEMU, WEMT, NEMT, NEMS, WEMS, NEMQ, WEMQ, NEMP, WEMP, WEMO, NEMO, NEMN, WEMN, WEMM, NEMM, WEMJ, NEMJ, NEMI, WEMI, NEMH, WEMH, WEMG, NEMG, NEMF, WEMF, NEME, WEME, WEMD, NEMD, NEMB, WEMB, NEMA, WEMA, NEH018, WEH018, NEH017, WEH017, NEH016, WEH016, NEH015, WEH015, NEH011, WEH011, NEH008, WEH008, WEH007, NEH007, WEH006, NEH006, WEH005, NEH005, NEH004, WEH004, NEH003, WEH003, NEH002, NEH001, WEH002, WEH001, NEGT, WEGT, 862, 863, 864, FSL, MSL, STS, FSW, PSB, FLL, FLW, PTB, MAL, 821, 824, 826, 827",
      
      image: Images.widePENBSVR,

      warning: "If using thumbpiece trim go to TP Trim section",

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1238387",
      text: "View Mounting Template Doc# MEDT13",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1238390",
      text1: "View Trim Template Doc# MEDT19",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1238402",
      text2: "View (54-) Electrified ET Trim Template (73 & 74) Doc# MEDT32",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1234418",
      text3: "View 646 Standard Top Strike Template Doc# MEDT21",
      link4: "https://storage.googleapis.com/aa-americas/dam/AADSS1055962",
      text4: "View 306/313 Auxiliary Control Template Doc# 4214",
      link5: "https://storage.googleapis.com/aa-americas/dam/AADSS1238389",
      text5: "View Wide EM Wiring Raceway Template Doc# MEDT17",
    },
    {
      device: "NB-PE8700",

      title: "Thumbpiece Trims (10, 28, 62, 63)",
      functions:
        "PE8710, PE8728, PE8762, PE8763, PE80 series, Wide PE Series, Wide PE80 Series, PE80, PE, PE80 Series, PE Series, PTB, STS, MAL, FLW, FLL, PE, Wide, PE80, Wide PE, ThumbPiece, Thumb, Piece, Trims, Thumbpiece Trims, Thumbpiece trim, Pull, PE, PE8700, 8700, ",
        MechOptions:
        "12, HK, FM, HC, WS, LC, 16, LD, AD, MD, WD, 31, OL, 36, TB, CPC, SG, 18, 49, 14, GL, NB, PL, 5CH, 23, 76, 85, 86, 87",
      ElecOptions:
        "AL, 53, W53, 54, W54, 55, W55, 55-ERM, ERM, W55-ERM, W55, 56, 56-HK, 58, 59, WH",
      CylOptions:
        "10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      railSizes: "E, F, J, G",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V",
      finishes:
        "03, US03, 04, US04, US09, 09, US10, 10, 10B, 10BE, 10BL, US14, US15, 20D, 26D, 26, 32, 32D, BSP, WSP, 605, 606, 611, 612, 613, 613E, 613L, 618, 619, 624, 625, 626, 629, 630",
        trims:trimsString,

      image: Images.thumbpieceTrims,

      warning:
        'NOTE: FSL, FSW, MSL & PSB trims are same as others but the cylinder is located 3/8"(9mm) lower',
      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055888",
      text: "View MAL Trim Template (810, 828, 866) Doc# 4024-L",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055887",
      text1: "View FLL/FLW Trim Template (810, 828, 866) Doc# 4257-D",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055891",
      text2: "View PTB Trim Template (810, 828, 866) Doc# 4221-E",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1055892",
      text3: "View STS Trim Template (810, 828, 866) Doc# 4021-G",
    },
    {
      device: "PE8800",

      title: "(12-) PE8800 Rim Exit (04, 10, 40, 44)",
      functions:
        "PE8804, PE8810, PE8840, PE8844, PE80 series, Wide PE Series, Wide PE80 Series, PE80, PE, PE80 Series, PE Series, Wide PE, PE80, Wide PE Exit, Wide PE Exit Device, Wide Rim Exit, Wide PE Rim Exit, Wide 8800, 8800, PE8800, Wide, Night Latch, Exit Only, Night, Latch, Only, Exit, PE88, Raceway",
        MechOptions:
        "12, HK, FM, HC, WS, LC, 16, LD, AD, MD, WD, 31, OL, 36, TB, CPC, SG, 18, 49, 14, GL, NB, PL, 5CH, 23, 76, 85, 86, 87",
      ElecOptions:
        "AL, 53, W53, 54, W54, 55, W55, 55-ERM, ERM, W55-ERM, W55, 56, 56-HK, 58, 59, WH",
      CylOptions:
        "10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      railSizes: "E, F, J, G",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V",
      finishes:
        "03, US03, 04, US04, US09, 09, US10, 10, 10B, 10BE, 10BL, US14, US15, 20D, 26D, 26, 32, 32D, BSP, WSP, 605, 606, 611, 612, 613, 613E, 613L, 618, 619, 624, 625, 626, 629, 630",
        trims:trimsString,

      image: Images.widePERim,

      warning:
        "For cylinder only template, focus on top right cutout dimensions and focus on CL reference points when using W/ MEDT44 ",
      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1238414",
      text: "View Mounting Template Doc# MEDT44",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055909",
      text1: "View 04 Cylinder Only Template Doc# 4307-G",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1238390",
      text2: "View Trim Template Doc# MEDT19",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1238389",
      text3: "View Wide EM Wiring Raceway Template Doc# MEDT17",
    },
    {
      device: "PE8800",

      title: "(12-) PE8800 Rim Exit (06, 13, 15, 43, 46, 73, 74, 75, 76)",
      functions:
        "PE8806, PE8813, PE8815, PE8843, PE8846, PE8873, PE8874, PE8875, PE8876, Wide PE Series, Wide PE80 Series, PE80 series, PE80, PE, PE80 Series, PE Series, Wide PE, PE80, Wide PE Exit, Wide PE Exit Device, Wide Rim Exit, Wide PE Rim Exit, Wide 8800, 8800, PE8800, Wide, Exit, PE88, Raceway, Class, Room, Store, Storeroom, Classroom, Store Room, Store-Room, Class-Room, Class Room, Passage, Electrified, ET, Eclectrified Trim, 773, 774, 775, 776, 773-8, 774-8, 775-8, 776-8",
        MechOptions:
        "12, HK, FM, HC, WS, LC, 16, LD, AD, MD, WD, 31, OL, 36, TB, CPC, SG, 18, 49, 14, GL, NB, PL, 5CH, 23, 76, 85, 86, 87",
      ElecOptions:
        "AL, 53, W53, 54, W54, 55, W55, 55-ERM, ERM, W55-ERM, W55, 56, 56-HK, 58, 59, WH",
      CylOptions:
        "10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      railSizes: "E, F, J, G",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V",
      finishes:
        "03, US03, 04, US04, US09, 09, US10, 10, 10B, 10BE, 10BL, US14, US15, 20D, 26D, 26, 32, 32D, BSP, WSP, 605, 606, 611, 612, 613, 613E, 613L, 618, 619, 624, 625, 626, 629, 630",
        trims:trimsString,

      image: Images.widePERim,

      warning: "ET with Cross Spindle + Electrified Trims ",
      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1238414",
      text: "View Mounting Template Doc# MEDT44",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1238391",
      text1: "View P700-8 Trim Template Doc# MEDT20",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1238397",
      text2: "View (54-) Electrified ET Trim Template Doc# MEDT27",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1238389",
      text3: "View Wide EM Wiring Raceway Template Doc# MEDT17",
    },
    {
      device: "PE8800",

      title: "(12-)(HC-)(WS-) PE8800 Rim Exit (16, 28, 63, 66)",
      functions:
        "PE8816, PE8828, PE8863, PE8866, Wide PE Series, Wide PE80 Series, PE80 series, PE80, PE, PE80 Series, PE Series,",
        MechOptions:
        "12, HK, FM, HC, WS, LC, 16, LD, AD, MD, WD, 31, OL, 36, TB, CPC, SG, 18, 49, 14, GL, NB, PL, 5CH, 23, 76, 85, 86, 87",
      ElecOptions:
        "AL, 53, W53, 54, W54, 55, W55, 55-ERM, ERM, W55-ERM, W55, 56, 56-HK, 58, 59, WH",
      CylOptions:
        "10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      railSizes: "E, F, J, G",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V",
      finishes:
        "03, US03, 04, US04, US09, 09, US10, 10, 10B, 10BE, 10BL, US14, US15, 20D, 26D, 26, 32, 32D, BSP, WSP, 605, 606, 611, 612, 613, 613E, 613L, 618, 619, 624, 625, 626, 629, 630",
        trims:trimsString,

      image: Images.widePERim,

      warning: "If using thumbpiece trim go to TP Trim section",
      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1238413",
      text: "View Mounting Template (16, 28, 63, 66 Bell Housing) Doc# MEDT43",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1238390",
      text1: "View Trim Template (716) Doc# MEDT19",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1238389",
      text2: "View Wide EM Wiring Raceway Template Doc# MEDT17",
    },
    {
      device: "PE8800",

      title: "PE8800 Thumbpiece Trims (04, 10, 28, 63, 66)",
      functions:
        "PE8804, PE8810, PE8828, PE8863, PE8866, PE80 series, Wide PE Series, Wide PE80 Series, PE80, PE, PE80 Series, PE Series, Thumb, Piece, Trim, Thumbpiece Trim, Thumbpiece, PTB, STS, MAL, FLW, FLL, PSB, FSW, FSL, MSL",
        MechOptions:
        "12, HK, FM, HC, WS, LC, 16, LD, AD, MD, WD, 31, OL, 36, TB, CPC, SG, 18, 49, 14, GL, NB, PL, 5CH, 23, 76, 85, 86, 87",
      ElecOptions:
        "AL, 53, W53, 54, W54, 55, W55, 55-ERM, ERM, W55-ERM, W55, 56, 56-HK, 58, 59, WH",
      CylOptions:
        "10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      railSizes: "E, F, J, G",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V",
      finishes:
        "03, US03, 04, US04, US09, 09, US10, 10, 10B, 10BE, 10BL, US14, US15, 20D, 26D, 26, 32, 32D, BSP, WSP, 605, 606, 611, 612, 613, 613E, 613L, 618, 619, 624, 625, 626, 629, 630",
        trims:trimsString,

      image: Images.thumbpieceTrims,

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055888",
      text: "View MAL Trim Template (810, 814, 828, 866) Doc# 4024-L",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055887",
      text1: "View FLL/FLW Trim Template (810, 814, 828, 866) Doc# 4257-D",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055891",
      text2: "View PTB Trim Template (810, 814, 828, 866) Doc# 4221-E",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1055892",
      text3: "View STS Trim Template (810, 814, 828, 866) Doc# 4021-G",
      link4: "https://storage.googleapis.com/aa-americas/dam/AADSS1055890",
      text4: "View PSB/FSL/FSW Trim Template (814) Doc# 4546",
      link5: "https://storage.googleapis.com/aa-americas/dam/AADSS1055889",
      text5: "View MSL Trim Template (814) Doc# 4545",
    },
    {
      device: "PE8800",

      title: "PE8800 Strikes",
      image: Images.widePERim,
      functions:
        "Strike, Wide PE Series, Wide PE80 Series, PE80 series, PE80, PE, PE80 Series, PE Series, 649, 649 Strike, 658 Strike, 658, 613, 613 Strike, 642 Strike, 642, 644, 644 Strike",

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1238408",
      text: "View 649 Standard Strike Template Doc# MEDT38",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1238410",
      text1: "View 658 Standard Strike (W/ 650A Mullion) Template Doc# MEDT40",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1246740",
      text2: "View 613 Optional Strike Template Doc# MEDT73",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1246738",
      text3: "View 642 Optional Strike Template Doc# MEDT71",
      link4: "https://storage.googleapis.com/aa-americas/dam/AADSS1246739",
      text4: "View 644 Strike Template (Double Door No Mullion) Doc# MEDT72",
      link5: "https://storage.googleapis.com/aa-americas/dam/AADSS1246741",
      text5:
        "View 656 Strike Template (Double Door W/ 980 Mullion) Doc# MEDT74",
    },
    {
      device: "PE8900",

      title: "(12-)(WS-) PE8900 Mortise Exit",
      functions:
        "PE8904, 8904, PE8906, 8906, PE8910, 8910, PE8913, 8913, PE8915, 8915, PE8916, 8916, PE8940, 8940, PE8943, 8943, PE8944, 8944, PE8946, 8946, PE8973, 8973, PE8974, 8974, PE8975, 8975, PE8976, 8976, Wide PE Series, Wide PE80 Series, PE, Wide PE, PE80 series, PE80, PE, PE80 Series, PE Series, Wide PE80, Wide Exit, Exit, Wide, Wide Exit Device, Exit Device, Device, 8900 PE8900, Wide MOrtise, Wide Mortise Exit, Wide Mortise Exit Device, Wide PE Mortise Exit, Wide PE Mortise Exit Device, 908, C908, 815, 908 Strike, C908 Strike, 815 Strike, 815 Open Strike, 815 Open Back Strike",
        MechOptions:
        "12, HK, FM, HC, WS, LC, 16, LD, AD, MD, WD, 31, OL, 36, TB, CPC, SG, 18, 49, 14, GL, NB, PL, 5CH, 23, 76, 85, 86, 87",
      ElecOptions:
        "AL, 53, W53, 54, W54, 55, W55, 55-ERM, ERM, W55-ERM, W55, 56, 56-HK, 58, 59, WH",
      CylOptions:
        "10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      railSizes: "E, F, J, G",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V",
      finishes:
        "03, US03, 04, US04, US09, 09, US10, 10, 10B, 10BE, 10BL, US14, US15, 20D, 26D, 26, 32, 32D, BSP, WSP, 605, 606, 611, 612, 613, 613E, 613L, 618, 619, 624, 625, 626, 629, 630",
        trims:trimsString,

      image: Images.widePE80Mortise,

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1238412",
      text: "View Mounting Template Doc# MEDT42",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1238390",
      text1: "View Trim Template Doc# MEDT19",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1238402",
      text2: "View (54-) Electrified ET Trim Template Doc# MEDT32",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1238420",
      text3: "View 908/C908 Standard Strike Template Doc# MEDT50",
      link4: "https://storage.googleapis.com/aa-americas/dam/AADSS1238419",
      text4: "View 815 Optional Strike Template Doc# MEDT49",
      link5: "https://storage.googleapis.com/aa-americas/dam/AADSS1238389",
      text5: "View Wide EM Wiring Raceway Template Doc# MEDT17",
    },
    {
      device: "PE8900",

      title: "PE8900 Thumbpiece Trims",
      functions:
        "PE8904, PE8910, PE8928, PE8963, PE8966, Wide PE Series, Wide PE80 Series, PE80 series, PE80, PE, PE80 Series, PE Series, MAL, FLL, FLW, STS, PTB, Thumb, Piece, Trim, Thumbpiece, Thumb-Piece, Thumbpiece Trim, Thumb-Piece Trim",
        MechOptions:
        "12, HK, FM, HC, WS, LC, 16, LD, AD, MD, WD, 31, OL, 36, TB, CPC, SG, 18, 49, 14, GL, NB, PL, 5CH, 23, 76, 85, 86, 87",
      ElecOptions:
        "AL, 53, W53, 54, W54, 55, W55, 55-ERM, ERM, W55-ERM, W55, 56, 56-HK, 58, 59, WH",
      CylOptions:
        "10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      railSizes: "E, F, J, G",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V",
      finishes:
        "03, US03, 04, US04, US09, 09, US10, 10, 10B, 10BE, 10BL, US14, US15, 20D, 26D, 26, 32, 32D, BSP, WSP, 605, 606, 611, 612, 613, 613E, 613L, 618, 619, 624, 625, 626, 629, 630",
        trims:trimsString,

      image: Images.thumbpieceTrims,

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055888",
      text: "View MAL Trim Template (810, 814, 828, 866) Doc# 4024-L",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055887",
      text1: "View FLL/FLW Trim Template (810, 814, 828, 866) Doc# 4257-D",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055891",
      text2: "View PTB Trim Template (810, 814, 828, 866) Doc# 4221-E",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1055892",
      text3: "View STS Trim Template (810, 814, 828, 866) Doc# 4021-G",
    },
  ],
  Narrow90: [
    {
      device: "9400",

      title: "(12-) 9400 (04, 10)",
      functions:
        "9404, 9410, 9400, 90 Series, Narrow 90 Series, 90, Narrow, CVR, Narrow CVR, Narrow CVR Exit Device, Exit, Device, Exit Device, Narrow CVR Exit, Concealed, Concealed Vertical Rod, Narrow Concealed Vertical Rod, Narrow Concealed Vertical Rod Exit Device, Night Latch, Exit Only, Night, Latch, Only, 704, 710, 704 ET, 710 ET",
        MechOptions:
        "12, 14, 23, 31, 36, 37, 42, 76, 85, 86, 87, CPC, SG, TB",
      ElecOptions:
        "54",
      CylOptions:
        "10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      railSizes: "E, F, J, G",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V",
      finishes:
        "03, US03, 04, US04, US09, 09, US10, 10, 10B, 10BE, 10BL, US14, US15, 20D, 26D, 26, 32, 32D, BSP, WSP, 605, 606, 611, 612, 613, 613E, 613L, 618, 619, 624, 625, 626, 629, 630",
        trims:trimsString,

      image: Images.narrowCVR9400,

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055979",
      text: "View Mounting Template (Metal Doors) Doc# 4580",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055978",
      text1: "View Cylinder Application (04 Function) Mounting Template Doc# 54581",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055977",
      text2: "View Bracket Mounting Template (Metal Doors) Doc# 4579",
      link3: 'https://storage.googleapis.com/aa-americas/dam/AADSS1055922',
      text3: 'View Trim Template (700 ET) Doc# 4277',
    },
  ],
  Wide90: [
    {
      device: "9700",

      title: "12-9700 SVR Exit (All Functions)",
      functions:
        "9706, 9710, 9713, 9715, 9728, 9763, 9773, 9774, Wide, Wide 90 Series, 90 Series, 90, Wide SVR, Surface, Surface Vertical Rod, Vertical Rods, Rods, Wide Rod Device, 9700, Wide ROd Exit Device, Wide SVR Exit Device, Exit Device, Exit, Device, SVR, Vertical Rod, Class, Room, Store, Storeroom, Classroom, Store Room, Store-Room, Class-Room, Class Room, Passage, Electrified, ET, Eclectrified Trim, 773, 774",
        MechOptions:
        "12, 14, 23, 31, 36, 37, 42, 76, 85, 86, 87, CPC, SG, TB",
      ElecOptions:
        "54",
      CylOptions:
        "10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      railSizes: "E, F, J, G",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V",
      finishes:
        "03, US03, 04, US04, US09, 09, US10, 10, 10B, 10BE, 10BL, US14, US15, 20D, 26D, 26, 32, 32D, BSP, WSP, 605, 606, 611, 612, 613, 613E, 613L, 618, 619, 624, 625, 626, 629, 630",
        trims:trimsString,

      image: Images.crossWideSVR,

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055982",
      text: "View Mounting Template Doc# 4046-L",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055922",
      text1: "View Trim Template (700 ET) Doc# 4277-18",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055928",
      text2: "View 773 & 774 Trim Template (54-)700 ET Template Doc# 4314-T",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1055962",
      text3: "View 306/313 Aux Control Template Doc# 4214-F",
      link4: "https://storage.googleapis.com/aa-americas/dam/AADSS1055956",
      text4: "View Standard 646, 624, 655 Strike Template Doc# 4009-H",
      link5: "https://storage.googleapis.com/aa-americas/dam/AADSS1055963",
      text5:
        "View 648 Alternate Strike (Transom Panel Application) Template Doc# 4225-C",
      link6: "https://storage.googleapis.com/aa-americas/dam/AADSS1234418",
      text6: "View 653 Alternate Bottom Strike for 12-9700",
      link7: "",
      text7: "",
    },
    {
      device: "9700",

      title: "(13-)(14-)(16-)9700 SVR Exit (All Functions)",
      functions:
        "9706, 9710, 9713, 9715, 9728, 9763, 9773, 9774, cross, crossbar, cross-bar, 300 Aux, 306 Aux, 313 Aux, 306, 313, Strike, 646, 624, 655, 646 Strike, 624 Strike, 655 Strike, Wide, Wide 90 Series, 90 Series, 90, Wide SVR, Surface, Surface Vertical Rod, Vertical Rods, Rods, Wide Rod Device, 9700, Wide ROd Exit Device, Wide SVR Exit Device, Exit Device, Exit, Device, SVR, Vertical Rod, Class, Room, Store, Storeroom, Classroom, Store Room, Store-Room, Class-Room, Class Room, Passage, Electrified, ET, Eclectrified Trim, 773, 774",
        MechOptions:
        "12, 14, 23, 31, 36, 37, 42, 76, 85, 86, 87, CPC, SG, TB",
      ElecOptions:
        "54",
      CylOptions:
        "10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      railSizes: "E, F, J, G",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V",
      finishes:
        "03, US03, 04, US04, US09, 09, US10, 10, 10B, 10BE, 10BL, US14, US15, 20D, 26D, 26, 32, 32D, BSP, WSP, 605, 606, 611, 612, 613, 613E, 613L, 618, 619, 624, 625, 626, 629, 630",
        trims:trimsString,

      image: Images.crossWideSVR,

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055981",
      text: "View Mounting Template Doc# 4010-J",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055922",
      text1: "View Trim Template (700 ET) Doc# 4277-18",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055928",
      text2: "View 773 & 774 Trim Template (54-)700 ET Template Doc# 4314-T",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1055962",
      text3: "View 306/313 Aux Control Template Doc# 4214-F",
      link4: "https://storage.googleapis.com/aa-americas/dam/AADSS1055956",
      text4: "View Standard 646, 624, 655 Strike Template Doc# 4009-H",
      link5: "https://storage.googleapis.com/aa-americas/dam/AADSS1055963",
      text5:
        "View 648 Alternate Strike (Transom Panel Application) Template Doc# 4225-C",
      link6: "https://storage.googleapis.com/aa-americas/dam/AADSS1234418",
      text6: "View 653 Alternate Bottom Strike for 12-9700 Doc# MEDT21",
      link7: "",
      text7: "",
    },
    {
      device: "9700",

      title: "Thumbpiece Trims (10, 28, 63)",
      functions:
        "9710, 9728, 9763, Thumb, Piece, Trim, ThumbPiece, Thumb-Piece, Thumb Piece, Thumb Piece Trim, MAL, FLL, FLW, PTB, STS",
        MechOptions:
        "12, 14, 23, 31, 36, 37, 42, 76, 85, 86, 87, CPC, SG, TB",
      ElecOptions:
        "54",
      CylOptions:
        "10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      railSizes: "E, F, J, G",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V",
      finishes:
        "03, US03, 04, US04, US09, 09, US10, 10, 10B, 10BE, 10BL, US14, US15, 20D, 26D, 26, 32, 32D, BSP, WSP, 605, 606, 611, 612, 613, 613E, 613L, 618, 619, 624, 625, 626, 629, 630",
        trims:trimsString,

      image: Images.thumbpieceTrims,

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055888",
      text: "View MAL Trim Template (810, 828, 866) Doc# 4024-L",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055887",
      text1: "View FLL/FLW Trim Template (810, 828, 866) Doc# 4257-D",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055891",
      text2: "View PTB Trim Template (810, 828, 866) Doc# 4221-E",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1055892",
      text3: "View STS Trim Template (810, 828, 866) Doc# 4021-G",
    },
    {
      device: "9800",

      title: "(12-)9800 Wide Rim Exit",
      functions:
        "9804, 9810, 9813, 9815, 9873. 9874, 9875, 9876, 90, 90 series, wide 90 series, cross, crossbar, cross-bar, Wide Rim, Wide Rim Exit, Wide Rim Exit Device, Wide Exit Device, Wide Exit, Exit, Device, Store, Class, Room, Classroom, Storeroom, Store Room, Class Room, Store-room, class-room, passage, electrified Trim, Electrified, trim, ET, 700 ET, 700",
        MechOptions:
        "12, 14, 23, 31, 36, 37, 42, 76, 85, 86, 87, CPC, SG, TB",
      ElecOptions:
        "54",
      CylOptions:
        "10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      railSizes: "E, F, J, G",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V",
      finishes:
        "03, US03, 04, US04, US09, 09, US10, 10, 10B, 10BE, 10BL, US14, US15, 20D, 26D, 26, 32, 32D, BSP, WSP, 605, 606, 611, 612, 613, 613E, 613L, 618, 619, 624, 625, 626, 629, 630",
        trims:trimsString,

      image: Images.crossWideRim,

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055984",
      text: "View Mounting Template Doc# 4207-J",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055922",
      text1: "View Trim Template (700 ET) Doc# 4277-18",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055928",
      text2: "View Electrified Trim Template (54-)700 ET Template Doc# 4314-T",
      link4: "https://storage.googleapis.com/aa-americas/dam/AADSS1055922",
      text4: "View 649 Standard Strike Template (Single Door) Doc# 4004-K",
      link5: "https://storage.googleapis.com/aa-americas/dam/AADSS1055985",
      text5: "View 613 Alternate Strike Template Doc# 3995-F",
      link6: "https://storage.googleapis.com/aa-americas/dam/AADSS1056005",
      text6: "View 642 Alternate Strike Template Doc# 4007-E",
      link7: "https://storage.googleapis.com/aa-americas/dam/AADSS1234418",
      text7: "View 644 Alternate Strike Template Doc# 3996-C",
    },
    {
      device: "9800",

      title: "Thumbpiece Trims (04, 10, 28, 63)",
      functions:
        "9804, 9810, 9828, 9863, Thumb, Piece, Trim, ThumbPiece, Thumb-Piece, Thumb Piece, Thumb Piece Trim, MAL, FLL, FLW, PTB, STS",
        MechOptions:
        "12, 14, 23, 31, 36, 37, 42, 76, 85, 86, 87, CPC, SG, TB",
      ElecOptions:
        "54",
      CylOptions:
        "10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      railSizes: "E, F, J, G",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V",
      finishes:
        "03, US03, 04, US04, US09, 09, US10, 10, 10B, 10BE, 10BL, US14, US15, 20D, 26D, 26, 32, 32D, BSP, WSP, 605, 606, 611, 612, 613, 613E, 613L, 618, 619, 624, 625, 626, 629, 630",
        trims:trimsString,

      image: Images.thumbpieceTrims,

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055888",
      text: "View MAL Trim Template (810, 814, 828, 866) Doc# 4024-L",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055887",
      text1: "View FLL/FLW Trim Template (810, 814, 828, 866) Doc# 4257-D",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055891",
      text2: "View PTB Trim Template (810, 814, 828, 866) Doc# 4221-E",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1055892",
      text3: "View STS Trim Template (810, 814, 828, 866) Doc# 4021-G",
    },

    {
      device: "9900",

      title: "(12-)9900 Wide Mortise Exit",
      functions:
        "9904, 9910, 9913, 9915, 9973, 9974, 9975, 9976, 90, 90 Series, 90 Seriex Exit, 90 Series Exit Device, Exit, Device, Exit Device, Wide, Wide Exit, Wide Exit Device, Wide Mortise Exit Device, 90 series mortise exit, 90 series mortise exit device, mortise exit device, Store, Class, Room, Classroom, Storeroom, Store Room, Class Room, Store-room, class-room, passage, electrified Trim, Electrified, trim, ET, 700 ET, 700",
        MechOptions:
        "12, 14, 23, 31, 36, 37, 42, 76, 85, 86, 87, CPC, SG, TB",
      ElecOptions:
        "54",
      CylOptions:
        "10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      railSizes: "E, F, J, G",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V",
      finishes:
        "03, US03, 04, US04, US09, 09, US10, 10, 10B, 10BE, 10BL, US14, US15, 20D, 26D, 26, 32, 32D, BSP, WSP, 605, 606, 611, 612, 613, 613E, 613L, 618, 619, 624, 625, 626, 629, 630",
        trims:trimsString,

      image: Images.crossWideMortise,

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055990",
      text: "View Mounting Template Doc# 4011-G",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055922",
      text1: "View Trim Template (700 ET) Doc# 4277-18",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055928",
      text2:
        "View (73 & 74 Function) Trim Template (54-)700 ET Template Doc# 4314-T",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1055922",
      text3: "View C908 Standard Strike Template (Single Door) Doc# 3908-Y",
      link4: "https://storage.googleapis.com/aa-americas/dam/AADSS1055930",
      text4: "View 815 Open Back Alternate Strike Template Doc# 4192-H",
      link5: "https://storage.googleapis.com/aa-americas/dam/AADSS1056005",
      text5: "View 642 Alternate Strike Template Doc# 4007-E",
      link6: "https://storage.googleapis.com/aa-americas/dam/AADSS1234418",
      text6: "View 644 Alternate Strike Template Doc# 3996-C",
    },
    {
      device: "9900",

      title: "Thumbpiece Trims (04, 10, 28, 63)",
      functions:
        "9904, 9910, 9928, 9963, Thumb, Piece, Trim, ThumbPiece, Thumb-Piece, Thumb Piece, Thumb Piece Trim, MAL, FLL, FLW, PTB, STS",
        MechOptions:
        "12, 14, 23, 31, 36, 37, 42, 76, 85, 86, 87, CPC, SG, TB",
      ElecOptions:
        "54",
      CylOptions:
        "10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      railSizes: "E, F, J, G",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V",
      finishes:
        "03, US03, 04, US04, US09, 09, US10, 10, 10B, 10BE, 10BL, US14, US15, 20D, 26D, 26, 32, 32D, BSP, WSP, 605, 606, 611, 612, 613, 613E, 613L, 618, 619, 624, 625, 626, 629, 630",
        trims:trimsString,

      image: Images.thumbpieceTrims,

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055888",
      text: "View MAL Trim Template (810, 814, 828, 866) Doc# 4024-L",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055887",
      text1: "View FLL/FLW Trim Template (810, 814, 828, 866) Doc# 4257-D",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055891",
      text2: "View PTB Trim Template (810, 814, 828, 866) Doc# 4221-E",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1055892",
      text3: "View STS Trim Template (810, 814, 828, 866) Doc# 4021-G",
    },
  ],
  Wide20: [
    {
      device: "2727",

      title: "(12-) 2727 SVR Exit",
      functions:
        "2727, GTB, HTB, 646 Strike, 646, 653 Strike, 653, 655 Strike, 655, Strike, 20, Series, SVR, 20 Series, 20 Series SVR, 20 Series Exit Device, Exit, Device, Surface Vertical Rod, Surface Vertical Rod Exit Device, SVR Exit Device",
        MechOptions:
        "12, LD",
      ElecOptions:
        "54",
      CylOptions:
        "10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, SF, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      railSizes: "E, F, J, G",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V",
      finishes:
        "03, US03, 04, US04, US10, 10, 10B, 10BE, 26D, BSP, WSP, 605, 606, 612, 613, 613E, 624, 626, EB, ED, EN, EP, EAB",
        trims:trimsString,

      image: Images.Exit2727,

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055991",
      text: "View Mounting Template with Knob or Lever Trim Doc# 4301-G",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1056001",
      text1: "View LL Lever Trim Template Doc# 4485-D",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055965",
      text2: "View 646/653/655 Strike Template Doc# 4413-B",
      link3: "https://www.sargentlock.com/en/view-pdf?id=AADSS1056004&page=1",
      text3: "View HTB/GTB Trim Template",
    },
    {
      device: "2828",

      title: "(12-)2828 Rim Exit",
      functions:
        "2828, GTB, HTB, Rim, Exit, Rim Exit Device, Rim Exit, 20 Series, 20, series, 20 series rim, ",
        MechOptions:
        "12, LD",
      ElecOptions:
        "54",
      CylOptions:
        "10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, SF, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      railSizes: "E, F, J, G",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V",
      finishes:
        "03, US03, 04, US04, US10, 10, 10B, 10BE, 26D, BSP, WSP, 605, 606, 612, 613, 613E, 624, 626, EB, ED, EN, EP, EAB",
        trims:trimsString,

      image: Images.Exit2828,

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1056003",
      text: "View Mounting Template with HTB or GTB pull Doc# 4302-D",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1056002",
      text1: "View Knob or Lever Trim Template Doc# 4304-F",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1056001",
      text2: "View LL Lever Trim Template Doc# 4485-D",
      link3: "https://www.sargentlock.com/en/view-pdf?id=AADSS1056004&page=1",
      text3: "View HTB/GTB Trim Template",
    },
    {
      device: "2828",

      title: "20 Series Strikes",
      functions:
        "2828, 649 , 649 Strike, Strike, 613, 613 Strike, 644, 644 Strike, 642, 642 Strike, Strikes, Strike",
        MechOptions:
        "12, LD",
      ElecOptions:
        "54",
      CylOptions:
        "10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, SF, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      railSizes: "E, F, J, G",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V",
      finishes:
        "03, US03, 04, US04, US10, 10, 10B, 10BE, 26D, BSP, WSP, 605, 606, 612, 613, 613E, 624, 626, EB, ED, EN, EP, EAB",
        trims:trimsString,

      image: Images.strikes2828,

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055896",
      text: "View 649 Standard Strike Template Doc# 4004-K",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055985",
      text1: "View 613 Alternative Strike Template Doc# 3995-F",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055986",
      text2: "View 644 Alternative Strike Template Doc# 3996-C",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1056005",
      text3: "View 642 Alternative Strike Template Doc# 4007-E",
    },
  ],
  Wide30: [
    {
      device: "3727",

      title: "3727 SVR Exit Device",
      functions:
        "3737, GTB, HTB, SVR, SVR Exit, SVR Exit Device, Exit, Device, Surface Vertical Rod, Exit Device, 646, 646 Strike, 653, 653 Strike, 655, 655 Strike, 30, 30 series, 30 series Exit, 30 series exit device",
        MechOptions:
        "12, LD, 16, NB",
      ElecOptions:
        "55",
      CylOptions:
        "10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, SF, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      railSizes: "E, F, J, G",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V",
      finishes:
        "03, US03, 04, US04, US10, 10, 10B, 10BE, 26D, BSP, WSP, 605, 606, 612, 613, 613E, 624, 626, EB, ED, EN, EP, EAB",
        trims:trimsString,

      image: Images.Exit2727,

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055991",
      text: "View Mounting Template with Knob or Lever Trim Doc# 4301-G",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1056001",
      text1: "View LL Lever Trim Template Doc# 4485-D",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055965",
      text2: "View 646/653/655 Strike Template Doc# 4413-B",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1055956",
      text3: "View 624 Alternative Strike Template Doc# 4009-H",
      link4: "https://www.sargentlock.com/en/view-pdf?id=AADSS1056004&page=1",
      text4: "View HTB/GTB Trim Template",
    },
    {
      device: "3828",

      title: "(12-)3828 Rim Exit Device",
      functions:
        "3828, GTB, HTB, 30, 30 series, 30 series exit, 30 series exit device, 30 series rim exit, rim, exit, device, Rim Exit, Rim exit device",
        MechOptions:
        "12, LD, 16, NB",
      ElecOptions:
        "55",
      CylOptions:
        "10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, SF, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      railSizes: "E, F, J, G",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V",
      finishes:
        "03, US03, 04, US04, US10, 10, 10B, 10BE, 26D, BSP, WSP, 605, 606, 612, 613, 613E, 624, 626, EB, ED, EN, EP, EAB",
        trims:trimsString,

      image: Images.Exit3828,

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1056004",
      text: "View Mounting Template with HTB/GTB Trim Doc# 4287-E",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1056002",
      text1: "View Mounting Template with Knob or Lever trim Doc# 4304-F",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1056001",
      text2: "View LL Lever Trim Template Doc# 4485-D",
      link3: "https://www.sargentlock.com/en/view-pdf?id=AADSS1056004&page=1",
      text3: "View HTB/GTB Trim Template",
    },
    {
      device: "3828",

      title: "30 series Strikes",
      functions: "3838, 3727",
      MechOptions:
      "12, LD, 16, NB",
    ElecOptions:
      "55",
    CylOptions:
      "10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, SF, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
    railSizes: "E, F, J, G",
    handing: "LHR, LH, LHRB, RHR, RH, RHRB",
    voltage: "12V, 24V, 12 V, 24 V",
    finishes:
      "03, US03, 04, US04, US10, 10, 10B, 10BE, 26D, BSP, WSP, 605, 606, 612, 613, 613E, 624, 626, EB, ED, EN, EP, EAB",
      trims:trimsString,

      image: Images.strikes3828,

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055896",
      text: "View 649 Standard Strike Template Doc# 4004-K",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055985",
      text1: "View 613 Alternative Strike Template Doc# 3995-F",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055986",
      text2: "View 644 Alternative Strike Template Doc# 3996-C",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1056005",
      text3: "View 642 Alternative Strike Template Doc# 4007-E",
    },
  ],
  KP80: [
    {
      device: 'KP80',

      title: 'KP 8800 Rim Exit Device',
      image: Images.wideStileRim,
      functions: "8877, 8878, KP8877, KP8878, Fail, Secure, Safe",
      MechOptions:
      "KP, 12, 16, 19, 23, 25, 29, 36, 37, 41, 75, 76, 77, 85, 86, 87, CPC, SG, 18, WR, FW",
    CylOptions:
      "BR, KD, LC, 30, SF, YC, YC-7P, YRC, SC, SE, 10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
    railSizes: "E, F, J, G",
    handing: "LHR, LH, LHRB, RHR, RH, RHRB",
    voltage: "12V, 24V, 12 V, 24 V",
    finishes:
      "03, US03, 04, US04, US09, 09, US10, 10, 10B, 10BE, 10BL, US14, US15, 20D, 26D, 26, 32, 32D, BSP, WSP, 605, 606, 611, 612, 613, 613E, 613L, 618, 619, 624, 625, 626, 629, 630",
      trims:trimsString,


      link: 'https://storage.googleapis.com/aa-americas/dam/AADSS1055594',
      text: 'View Metal and Wood Doors Mounting Template Doc# 4474',
      link1: 'https://storage.googleapis.com/aa-americas/dam/AADSS1054957',
      text1: 'View Full Device Installation Instructions Doc# A7137',
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
    {
      device: 'KP80',

      title: 'KP 8900 Mortise Exit Device',
      image: Images.wideMortise,
      functions: "8977, 8978, KP8977, KP8978, Fail, Secure, Safe",
      MechOptions:
      "KP, 12, 16, 19, 23, 25, 29, 36, 37, 41, 75, 76, 77, 85, 86, 87, CPC, SG, 18, WR, FW",
    CylOptions:
      "BR, KD, LC, 30, SF, YC, YC-7P, YRC, SC, SE, 10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
    railSizes: "E, F, J, G",
    handing: "LHR, LH, LHRB, RHR, RH, RHRB",
    voltage: "12V, 24V, 12 V, 24 V",
    finishes:
      "03, US03, 04, US04, US09, 09, US10, 10, 10B, 10BE, 10BL, US14, US15, 20D, 26D, 26, 32, 32D, BSP, WSP, 605, 606, 611, 612, 613, 613E, 613L, 618, 619, 624, 625, 626, 629, 630",
      trims:trimsString,

      link: 'https://storage.googleapis.com/aa-americas/dam/AADSS1055595',
      text: 'View Metal and Wood Doors Mounting Template Doc# 4477',
      link1: 'https://storage.googleapis.com/aa-americas/dam/AADSS1054957',
      text1: 'View Full Device Installation Instructions Doc# A7137',
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
  KPPE80: [
    {
      device: 'KPPE80',

      title: 'KP PE8800 Rim Exit Device',
      image: Images.wideStileRim,
      functions: "8877, 8878, KP8877, KP8878, KP, PE, PE8878, PE8877, Fail, Secure, Safe",
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


      link: 'https://storage.googleapis.com/aa-americas/dam/AADSS1238428',
      text: 'View Metal and Wood Doors Mounting Template Doc# MEDT58',
      link1: 'https://storage.googleapis.com/aa-americas/dam/AADSS1054957',
      text1: 'View Full Device Installation Instructions Doc# A7137',
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
    {
      device: 'KPPE80',

      title: 'KP PE8900 Mortise Exit Device',
      image: Images.wideMortise,
      functions: "8977, 8978, KP8977, KP8978, KP, PE, PE8977, PE8978, Fail, Secure, Safe",
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

      link: 'https://storage.googleapis.com/aa-americas/dam/AADSS1238429',
      text: 'View Metal and Wood Doors Mounting Template Doc# MEDT59',
      link1: 'https://storage.googleapis.com/aa-americas/dam/AADSS1054957',
      text1: 'View Full Device Installation Instructions Doc# A7137',
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
};
