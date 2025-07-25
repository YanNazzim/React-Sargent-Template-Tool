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
  "BB",
  "BJ",
  "BL",
  "BP",
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
        "8304, 8310, 8313, 8315, 8340, 8343, 8344",
      MechOptions:
        "12, 14, 16, 19, 23, 31, 36, 37, AD, WD, MD, HC, WS, 43, 49, 76, 85, 86, 87, GL, PL, LD, SG, TB, NB, CPC, 5CH",
      ElecOptions: "53, 54, 55, 56, 56-HK, HK, 58, 59, AL, BC, BC-59",
      metadata: "Narrow, Narrow 80 Series, Narrow 80, 908, C908, 815, 815 Strike, 908 Strike, C908 Strike, 815 Open Back Strike, ET, ET Trim, 700 ET, Narrow, Exit, Device, Narrow Exit, Narrow Exit Device, Narrow Mortise, Mortise, Narrow Mortise Exit, Narrow Mortise Exit Device, 8300, 80 series, 80, Classroom, Class-Room, class, room, class room, Night Latch, Night, Latch, Store-Room, Passage",
      CylOptions:
        "10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      railSizes: "E, F, J, G",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V",
      finishes:
        "03, US03, 04, US04, US09, 09, US10, 10, 10B, 10BE, 10BL, US14, US15, 20D, 26D, 26, 32, 32D, BSP, WSP, 605, 606, 611, 612, 613, 613E, 613L, 618, 619, 624, 625, 626, 629, 630",
      trims: trimsString,
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
      text6:
        "View Narrow Electrical Options Wiring Template (AL, 53, 55, 56, etc) Doc# 4568-C",

      installation: [
        {
          device: "8300",
          title: "8300 Mounting Related Instructions",
          image: Images.narrowMortise8300,

          link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055317",
          text: "View (12)8300 Main Mounting Installation Instructions Doc# A6696",
          link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055352",
          text1:
            "View (12)8300 Through Bolt Application Installation Instructions Doc# A6257",
        },
        {
          device: "8300",
          title: "8300 Cylinder / Accessories Related Instructions",
          image: Images.narrowMortise8300,

          link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055333",
          text: "View 668 Glass Bead Shim Kit Installation Instructions Doc# A7411",
        },
        {
          device: "8300",
          title: "8300 Catalog / Parts Manual",
          image: Images.narrowMortise8300,

          link: "https://www.sargentlock.com/en/view-pdf?id=AADSS1004788&page=28",
          text: "View 80 Series Catalog (Page 28) Doc# 90641",

          link1:
            "https://www.sargentlock.com/en/view-pdf?id=AADSS1014876&page=3",
          text1: "View 80 Series Parts Manual (Page 3) Doc# A8231",
        },
      ],
    },
    {
      device: "8300",

      title: "(12-)8300 Mortise Exit (75, 76)",
      image: Images.narrowMortise8300, // Use Images object reference
      functions:
        "8373, 8374, 8375, 8376, ",
        metadata: "Narrow, Narrow 80 Series, Narrow 80, 908, C908, 815, 815 Strike, 908 Strike, C908 Strike, 815 Open Back Strike, ET, ET Trim, 700 ET, Narrow, Exit, Device, Narrow Exit, Narrow Exit Device, Narrow Mortise, Mortise, Narrow Mortise Exit, Narrow Mortise Exit Device, 8300, 80 series, 80, Fail Safe, Fail Secure, Safe, Secure, Fail, 773, 774, 775, 776, Electrified Trim, Electrified",
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
      trims: trimsString,
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
      text6:
        "View Narrow Electrical Options Wiring Template (AL, 53, 55, 56, etc) Doc# 4568-C",
    },
    {
      device: "8300",

      title: "8300 Thumbpiece Trims (04, 10, 28, 63)",
      functions:
        "8304, 8310, 8328, 8363, ",
        metadata: "Narrow, Narrow 80 Series, Narrow 80, Exit, Device, Narrow Exit, Narrow Exit Device, Narrow Mortise, Mortise, Narrow Mortise Exit, Narrow Mortise Exit Device, 8300, 80 series, 80, thumbpiece, thumb, piece, thumbpiece trims, PTB, STS, MAL, FLL, FLW",
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
      trims: trimsString,
      image: Images.thumbpieceTrims,

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055887",
      text: "View FLL/FLW Trim Template (810, 814, 828, 866) Doc# 4257-D",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055888",
      text1: "View MAL Trim Template (810, 814, 828, 866) Doc# 4024-L",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055891",
      text2: "View PTB Trim Template (810, 814, 828, 866) Doc# 4221-E",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1055920",
      text3: "View STS Strim Template (810, 814, 828, 866) Doc#  4020-F",
    },
    {
      device: "MD8400",

      title: "(12-)(NB-)MD8400 (06, 10, 13, 15, 40, 43, 46)",
      functions:
        "8406, 8410, 8413, 8415, 8440, 8443, 8446, ",
        metadata: "Narrow, Narrow 80 Series, Narrow 80, 80, 80 series, series, 650, 652, 606, 650 Strike, 652 Strike, 606 Strike, ET, ET Trim, 700 ET, Narrow, Narrow CVR, Narrow CVR Exit, Narrow CVR Exit Device, CVR, Exit, Device, 8400, Narrow CVR Device, 100 Aux, 100, 106, 113, Metal, Door, Metal Door, NB, Vertical Rods, Concealed Vertical Rod, Rods, Vertical, Classroom, Class-Room, class, room, class room, StoreRoom, Store Room, Store-Room, Passage",
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
      trims: trimsString,
      image: Images.narrowCVR8400,

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055945",
      text: "View Mounting Template (Metal Door) Doc# 4447-J",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055940",
      text1: "View Trim Template (700-4 ET) Doc# 4448-J",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055943",
      text2: "View 650/652/606 Standard Strike Template Doc# 4449-G",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1055937",
      text3: "View 106/113 Auxiliary Trim Doc# 4212-D",
      link4: "https://storage.googleapis.com/aa-americas/dam/AADSS1055898",
      text4:
        "View Narrow Electrical Options Wiring Template (AL, 53, 55, 56, etc) Doc# 4568-C",

      installation: [
        {
          device: "MD8400",
          title: "8400 Mounting Related Instructions",
          image: Images.narrowCVR8400,

          link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055344",
          text: "View (12)(NB)MD8400 Main Mounting Installation Instructions Doc# A6697",
          link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055352",
          text1:
            "View (12)(NB)MD8400 Through Bolt Application Installation Instructions Doc# A6257",
        },
        {
          device: "MD8400",
          title: "8400 Cylinder / Accessories Related Instructions",
          image: Images.narrowCVR8400,

          link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055333",
          text: "View 668 Glass Bead Shim Kit Installation Instructions Doc# A7955",
          link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055276",
          text1:
            "View 106/113 Aux Control Installation Instructions Doc# A5985",
        },
        {
          device: "MD8400",
          title: "MD8400 Catalog / Parts Manual",
          image: Images.narrowCVR8400,

          link: "https://www.sargentlock.com/en/view-pdf?id=AADSS1004788&page=30",
          text: "View 80 Series Catalog (Page 30) Doc# 90641",

          link1:
            "https://www.sargentlock.com/en/view-pdf?id=AADSS1014876&page=4",
          text1: "View 80 Series Parts Manual (Page 4) Doc# A8231",
        },
      ],
    },
    {
      device: "MD8400",

      title: "(12-)(NB-)MD8400 (73, 74)",
      functions:
        "8473, 8474, ",
        metadata: "Narrow, Narrow 80 Series, Narrow 80, 80, 80 series, series, 650, 652, 606, 650 Strike, 652 Strike, 606 Strike, Electrified, Electrified Trim, ET, ET Trim, 700 ET, Narrow, Narrow CVR, Narrow CVR Exit, Narrow CVR Exit Device, CVR, Exit, Device, 8400, Narrow CVR Device, 100 Aux, 100, 106, 113, Metal, Door, Metal Door, NB, Vertical Rods, Concealed Vertical Rod, Rods, Vertical",
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
      trims: trimsString,
      image: Images.narrowCVR8400,

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055945",
      text: "View Mounting Template (Metal Door) Doc# 4447-J",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055936",
      text1: "View Trim Template (54-)(700-4 ET) Doc# 4467-F",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055943",
      text2: "View 650/652/606 Standard Strike Template Doc# 4449-G",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1055937",
      text3: "View 106/113 Auxiliary Trim Doc# 4212-D",
      link4: "https://storage.googleapis.com/aa-americas/dam/AADSS1055898",
      text4:
        "View Narrow Electrical Options Wiring Template (AL, 53, 55, 56, etc) Doc# 4568-C",
    },
    {
      device: "AD8400",

      title: "(12-)(NB-)AD8400 (06, 10, 13, 15, 40, 43, 46)",
      functions:
        "8406, 8410, 8413, 8415, 8440, 8443, 8446 ",
        metadata: "Narrow, Narrow 80 Series, Narrow 80, 80, 80 series, series, 640, Strike, 640 Strike, ET, ET Trim, 700 ET, Narrow, Narrow CVR, Narrow CVR Exit, Narrow CVR Exit Device, CVR, Exit, Device, 8400, Narrow CVR Device, 100 Aux, 100, 106, 113, Metal, Door, Metal Door, NB, Vertical Rods, Concealed Vertical Rod, Rods, Vertical, Classroom, Class-Room, class, room, class room, StoreRoom, Store Room, Store-Room, Passage",
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
      trims: trimsString,
      image: Images.narrowCVR8400,

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055941",
      text: "View Mounting Template (Aluminum Door) Doc# 4312-K",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055940",
      text1: "View Trim Template (700-4 ET) Doc# 4448-J",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055939",
      text2: "View 640 Standard Strike Template Doc# 4649-A",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1055937",
      text3: "View 106/113 Auxiliary Trim Doc# 4212-D",
      link4: "https://storage.googleapis.com/aa-americas/dam/AADSS1055898",
      text4:
        "View Narrow Electrical Options Wiring Template (AL, 53, 55, 56, etc) Doc# 4568-C",
      installation: [
        {
          device: "AD8400",
          title: "8400 Mounting Related Instructions",
          image: Images.narrowCVR8400,

          link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055344",
          text: "View (12)(NB)MD8400 Main Mounting Installation Instructions Doc# A6697",
          link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055352",
          text1:
            "View (12)(NB)MD8400 Through Bolt Application Installation Instructions Doc# A6257",
        },
        {
          device: "AD8400",
          title: "8400 Cylinder / Accessories Related Instructions",
          image: Images.narrowCVR8400,

          link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055333",
          text: "View 668 Glass Bead Shim Kit Installation Instructions Doc# A7955",
          link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055276",
          text1:
            "View 106/113 Aux Control Installation Instructions Doc# A7955",
          link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055347",
          text2: "View 639/640 Strikes Installation Instructions Doc# A8037",
        },
        {
          device: "MD8400",
          title: "MD8400 Catalog / Parts Manual",
          image: Images.narrowCVR8400,

          link: "https://www.sargentlock.com/en/view-pdf?id=AADSS1004788&page=32",
          text: "View 80 Series Catalog (Page 32) Doc# 90641",

          link1:
            "https://www.sargentlock.com/en/view-pdf?id=AADSS1014876&page=8",
          text1: "View 80 Series Parts Manual (Page 8) Doc# A8231",
        },
      ],
    },
    {
      device: "AD8400",

      title: "(12-)(NB-)AD8400 (73, 74)",
      functions:
        "8473, 8474, ",
        metadata: "Narrow, Narrow 80 Series, Narrow 80, 80, 80 series, series, 640, Strike, 640 Strike, Electrified, Electrified Trim, ET, ET Trim, 700 ET, Narrow, Narrow CVR, Narrow CVR Exit, Narrow CVR Exit Device, CVR, Exit, Device, 8400, Narrow CVR Device, 100 Aux, 100, 106, 113, Metal, Door, Metal Door, NB, Vertical Rods, Concealed Vertical Rod, Rods, Vertical",
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
      trims: trimsString,
      image: Images.narrowCVR8400,

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055941",
      text: "View Mounting Template (Aluminum Door) Doc# 4312-K",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055936",
      text1: "View Trim Template (54-)(700-4 ET) Doc# 4467-F",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055939",
      text2: "View 640 Standard Strike Template Doc# 4649-A",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1055937",
      text3: "View 106/113 Auxiliary Trim Doc# 4212-D",
      link4: "https://storage.googleapis.com/aa-americas/dam/AADSS1055898",
      text4:
        "View Narrow Electrical Options Wiring Template (AL, 53, 55, 56, etc) Doc# 4568-C",
    },
    {
      device: "8500",

      title: "(12-)8500 Rim Exit (04, 10, 40, 44)",
      functions:
        "8504, 8510, 8540, 8544, ",
        metadata: "Narrow, Narrow 80 Series, Narrow 80, 80, 80 series, series, 649 Strike, 649, Strike, 656, 656 Strike, 657, 657 Strike, Narrow, Rim, Exit, Narrow Rim, Narrow Rim Exit, Narrow Rim Exit Device, 8500, 700 ET, ET, ET Trim , 700 ET Trim, 704, 710, 740, 744, Narrow Exit Device, Narrow Exit, Exit, Exit only, Night, Latch, Night Latch",
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
      trims: trimsString,
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
      text5:
        "View Narrow Electrical Options Wiring Template (AL, 53, 55, 56, etc) Doc# 4568-C",
      installation: [
        {
          device: "8500",
          title: "8500 Mounting Related Instructions",
          image: Images.narrowRimExit8500,
          link: "https://storage.googleapis.com/aa-americas/dam/AADSS1066698",
          text: "View (12)(AD)8500 Main Mounting Installation Instructions Doc# AA6699",
        },
        {
          device: "8500",
          title: "8500 Cylinder / Accessories Related Instructions",
          image: Images.narrowRimExit8500,

          link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055333",
          text: "View 668 Glass Bead Shim Kit Installation Instructions Doc# A7955",
          link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055362",
          text1: "View 604 Rub Strip Installation Instructions Doc# A8148",
        },
        {
          device: "8500",
          title: "8500 Catalog / Parts Manual",
          image: Images.narrowRimExit8500,

          link: "https://www.sargentlock.com/en/view-pdf?id=AADSS1004788&page=24",
          text: "View 80 Series Catalog (Page 24) Doc# 90641",

          link1:
            "https://www.sargentlock.com/en/view-pdf?id=AADSS1014876&page=10",
          text1: "View 80 Series Parts Manual (Page 10) Doc# A8231",
        },
      ],
    },
    {
      device: "8500",

      title: "(12-)8500 Rim Exit (06, 13, 15, 43, 46)",
      functions:
        "8506, 8513, 8515, 8543, 8546, ",
        metadata: 'Narrow, Narrow 80 Series, Narrow 80, 80, 80 series, series, 649 Strike, 649, Strike, 656, 656 Strike, 657, 657 Strike, Narrow, Rim, Exit, Device, Narrow Rim, Exit Device, Narrow Rim Exit, Narrow Rim Exit Device, 700, 700 ET, ET, ET Trim, 700 ET Trim, 700-8, 706-8, 715-8, 713-8, 743-8, 746-8, Classroom, Class-Room, class, room, class room, StoreRoom, Store Room, Store-Room, Passage',
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
      trims: trimsString,
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
      text5:
        "View Narrow Electrical Options Wiring Template (AL, 53, 55, 56, etc) Doc# 4568-C",
    },
    {
      device: "8500",

      title: "(12-)8500 Rim Exit (73, 74)",
      functions:
        "8573, 8574, ",
        metadata: 'Narrow, Narrow 80 Series, Narrow 80, 80, 80 series, series, 649 Strike, 649, Strike, 656, 656 Strike, 657, 657 Strike, Narrow, Rim, Exit, Device, Narrow Rim, Exit Device, Narrow Rim Exit, Narrow Rim Exit Device, 700, 700 ET, ET, ET Trim, 700 ET Trim, 700-8, 773-7, 774-8, Electrified, Trim, Electrified Trim, Fail Safe, Fail Secure, Fail, Safe, Secure',
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
      trims: trimsString,
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
      text5:
        "View Narrow Electrical Options Wiring Template (AL, 53, 55, 56, etc) Doc# 4568-C",
    },
    {
      device: "AD8500",

      title: "(12-)(WS-)AD8500 Rim Exit (04, 10, 40, 44)",
      functions:
        "8504, 8510, 8540, 8544, ",
        metadata: "Narrow, Narrow 80 Series, Narrow 80, 80, 80 series, series, 649 Strike, 649, Strike, 656, 656 Strike, 657, 657 Strike, Narrow, Rim, Exit, Narrow Rim, Narrow Rim Exit, Narrow Rim Exit Device, 8500, 700 ET, ET, ET Trim , 700 ET Trim, 704, 710, 740, 744, Narrow Exit Device, Narrow Exit, Exit, Exit only, Night, Latch, Night Latch",
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
      trims: trimsString,
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
      text5:
        "View Narrow Electrical Options Wiring Template (AL, 53, 55, 56, etc) Doc# 4568-C",

      installation: [
        {
          device: "AD8500",
          title: "8500 Mounting Related Instructions",
          image: Images.narrowRimExit8500,
          link: "https://storage.googleapis.com/aa-americas/dam/AADSS1066698",
          text: "View (12)(AD)8500 Main Mounting Installation Instructions Doc# AA6699",
        },
        {
          device: "AD8500",
          title: "8500 Cylinder / Accessories Related Instructions",
          image: Images.narrowRimExit8500,

          link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055333",
          text: "View 668 Glass Bead Shim Kit Installation Instructions Doc# A7955",
          link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055362",
          text1: "View 604 Rub Strip Installation Instructions Doc# A8148",
        },
        {
          device: "AD8500",
          title: "AD8500 Catalog / Parts Manual",
          image: Images.narrowRimExit8500,

          link: "https://www.sargentlock.com/en/view-pdf?id=AADSS1004788&page=24",
          text: "View 80 Series Catalog (Page 24) Doc# 90641",

          link1:
            "https://www.sargentlock.com/en/view-pdf?id=AADSS1014876&page=10",
          text1: "View 80 Series Parts Manual (Page 10) Doc# A8231",
        },
      ],
    },
    {
      device: "AD8500",

      title: "(12-)(WS-)AD8500 Rim Exit (06, 13, 15, 43, 46)",
      functions:
        "8506, 8513, 8515, 8543, 8546, ",
        metadata: "Narrow, Narrow 80 Series, Narrow 80, 80, 80 series, series, 649 Strike, 649, Strike, 656, 656 Strike, 657, 657 Strike, Aluminum, Door, Aluminum Door, Narrow, Rim, Exit, Device, Narrow Rim, Exit Device, Narrow Rim Exit, Narrow Rim Exit Device, 700, 700 ET, ET, ET Trim, 700 ET Trim, 700-8, 706-8, 715-8, 713-8, 743-8, 746-8, Classroom, Class-Room, class, room, class room, StoreRoom, Store Room, Store-Room, Passage",
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
      trims: trimsString,
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
      text5:
        "View Narrow Electrical Options Wiring Template (AL, 53, 55, 56, etc) Doc# 4568-C",
    },
    {
      device: "AD8500",

      title: "(12-)(WS-)AD8500 Rim Exit (73, 74)",
      functions:
        "8573, 8574, ",
        metadata: "Narrow, Narrow 80 Series, Narrow 80, 80, 80 series, series, 649 Strike, 649, Strike, 656, 656 Strike, 657, 657 Strike, Aluminum, Door, Aluminum Door, Narrow, Rim, Exit, Device, Narrow Rim, Exit Device, Narrow Rim Exit, Narrow Rim Exit Device, 700, 700 ET, ET, ET Trim, 700 ET Trim, 700-8, 773-7, 774-8, Electrified, Trim, Electrified Trim, Fail Safe, Fail Secure, Fail, Safe, Secure",
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
      trims: trimsString,
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
      text5:
        "View Narrow Electrical Options Wiring Template (AL, 53, 55, 56, etc) Doc# 4568-C",
    },
  ],
  Wide80: [
    {
      device: "WD8600",

      title: "WD8600 CVR Exit (06, 10, 13, 15, 40, 43, 46)",
      image: Images.wideCVR,
      functions:
        "8606, 8610, 8613, 8615, 8640, 8643, 8646, ",
        metadata: "Wide, Wide 80 Series, Wide 80, 80, 80 series, series, 650, 606, Strike, 650 Strike, 606 Strike, Wide, CVR, Exit, Device, Wide CVR, Wide CVR Exit Device, Wide CVR Exit, 700-4, 700-4 ET, ET Trim, ET, Trim, 100 Aux, Auxiliary, Control, Aux Control, Auxiliary Control, 106, 106 Aux, 113, 113 Aux, NB, Vertical Rods, Concealed Vertical Rod, Rods, Vertical, WD, Wood Door, Wood, WD8600, 59, 59-, Delayed, Egress, Delayed Egress, Classroom, Class-Room, class, room, class room, StoreRoom, Store Room, Store-Room, Passage",
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
      trims: trimsString,
      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055955",
      text: "View Wood Door Mounting Template Doc# 4431-J",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055954",
      text1:
        "View Wood Door Mounting Template (NB - NO BOTTOM ROD) Doc# 4565-B",

      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055955",
      text2:
        "View (59- Delayed Egress) Hollow Metal Door Mounting Template Doc# 4455-D",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1055953",
      text3: "View Trim Template (700-4 ET) Doc# 4436-E",
      link4: "https://storage.googleapis.com/aa-americas/dam/AADSS1055943",
      text4: "View 650/606 Strike Template Doc# 4449-G",
      link5: "https://storage.googleapis.com/aa-americas/dam/AADSS1055952",
      text5: "View 106/113 Auxiliary Trim Doc# 4433-A",
      link6: "https://storage.googleapis.com/aa-americas/dam/AADSS1055972",
      text6:
        "View Wide Electrical Options Wiring Template (AL, 53, 55, 56, etc) Doc# 4569-C",

      installation: [
        {
          device: "WD8600",
          title: "WD8600 Mounting Related Instructions",
          image: Images.wideCVR,

          link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055329",
          text: "View (12)(NB)WD8600 Main Mounting Installation Instructions Doc# A3937",
        },
        {
          device: "WD8600",
          title: "WD8600 Cylinder / Accessories Related Instructions",
          image: Images.wideCVR,

          link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055276",
          text: "View 106/113 Aux Control Installation Instructions Doc# A5985",
        },
        {
          device: "WD8600",
          title: "WD8600 Catalog / Parts Manual",
          image: Images.narrowRimExit8500,

          link: "https://www.sargentlock.com/en/view-pdf?id=AADSS1004788&page=22",
          text: "View 80 Series Catalog (Page 22) Doc# 90641",

          link1:
            "https://www.sargentlock.com/en/view-pdf?id=AADSS1014876&page=16",
          text1: "View 80 Series Parts Manual (Page 16) Doc# A8231",
        },
      ],
    },
    {
      device: "WD8600",

      title: "WD8600 CVR Exit (73,74)",
      image: Images.wideCVR,
      functions:
        "8673, 8674, ",
        metadata: "Wide, Wide 80 Series, Wide 80, 80, 80 series, series, 650, 606, Strike, 650 Strike, 606 Strike, Wide, CVR, Exit, Device, Wide CVR, Wide CVR Exit Device, Wide CVR Exit, 700-4, 700-4 ET, ET Trim, ET, Trim, 100 Aux, Auxiliary, Control, Aux Control, Auxiliary Control, 106, 106 Aux, 113, 113 Aux, NB, Vertical Rods, Concealed Vertical Rod, Rods, Vertical, WD, Wood Door, Wood, WD8600, 59, 59-, Delayed, Egress, Delayed Egress, Electrified, Trim, ET, Trim, ET Trim, Electrified Trim, 773-4, 774-4, 773, 774",
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
      trims: trimsString,
      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055955",
      text: "View Wood Door Mounting Template Doc# 4431-J",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055954",
      text1:
        "View Wood Door Mounting Template (NB - NO BOTTOM ROD) Doc# 4565-B",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055955",
      text2:
        "View (59- Delayed Egress) Hollow Metal Door Mounting Template Doc# 4455-D",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1055936",
      text3: "View Trim Template (54-)(700-4 ET) Doc# 4467-F",
      link4: "https://storage.googleapis.com/aa-americas/dam/AADSS1055943",
      text4: "View 650/606 Strike Template Doc# 4449-G",
      link5: "https://storage.googleapis.com/aa-americas/dam/AADSS1055952",
      text5: "View 106/113 Auxiliary Trim Doc# 4433-A",
      link6: "https://storage.googleapis.com/aa-americas/dam/AADSS1055972",
      text6:
        "View Wide Electrical Options Wiring Template (AL, 53, 55, 56, etc) Doc# 4569-C",
    },
    {
      device: "MD8600",

      title: "(12-)MD8600 CVR Exit (06, 10, 13, 15, 40, 43, 46)",
      image: Images.wideCVR,
      functions:
        "8606, 8610, 8613, 8615, 8640, 8643, 8646, ",
        metadata: "Wide, Wide 80 Series, Wide 80, 80, 80 series, series, 650, 606, Strike, 650 Strike, 606 Strike, Wide, CVR, Exit, Device, Wide CVR, Wide CVR Exit Device, Wide CVR Exit, 700-4, 700-4 ET, ET Trim, ET, Trim, 100 Aux, Auxiliary, Control, Aux Control, Auxiliary Control, 106, 106 Aux, 113, 113 Aux, NB, Vertical Rods, Concealed Vertical Rod, Rods, Vertical, MD, Metal Door, Metal, MD8600, 59, 59-, Delayed, Egress, Delayed Egress, Classroom, Class-Room, class, room, class room, StoreRoom, Store Room, Store-Room, Passage",
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
      trims: trimsString,
      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055949",
      text: "View Hollow Metal Door Mounting Template Doc# 4445-J",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055949",
      text1:
        "View Hollow Metal Door Mounting Template (NB - NO BOTTOM ROD) Doc# 4566-A",

      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055948",
      text2:
        "View (59- Delayed Egress) Hollow Metal Door Mounting Template Doc# 4455-D",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1055940",
      text3: "View Trim Template (700-4 ET) Doc# 4448-J",
      link4: "https://storage.googleapis.com/aa-americas/dam/AADSS1055943",
      text4: "View 650/606 Strike Template Doc# 4449-G",
      link5: "https://storage.googleapis.com/aa-americas/dam/AADSS1055937",
      text5: "View 106/113 Auxiliary Trim Doc# 4212-D",
      link6: "https://storage.googleapis.com/aa-americas/dam/AADSS1055972",
      text6:
        "View Wide Electrical Options Wiring Template (AL, 53, 55, 56, etc) Doc# 4569-C",

      installation: [
        {
          device: "MD8600",
          title: "MD8600 Mounting Related Instructions",
          image: Images.wideCVR,

          link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055345",
          text: "View (12)(NB)MD8600 Main Mounting Installation Instructions Doc# A7002",
        },
        {
          device: "MD8600",
          title: "MD8600 Cylinder / Accessories Related Instructions",
          image: Images.wideCVR,

          link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055276",
          text: "View 106/113 Aux Control Installation Instructions Doc# A5985",
        },
        {
          device: "MD8600",
          title: "MD8600 Catalog / Parts Manual",
          image: Images.wideCVR,

          link: "https://www.sargentlock.com/en/view-pdf?id=AADSS1004788&page=18",
          text: "View 80 Series Catalog (Page 18) Doc# 90641",

          link1:
            "https://www.sargentlock.com/en/view-pdf?id=AADSS1014876&page=12",
          text1: "View 80 Series Parts Manual (Page 12) Doc# A8231",
        },
      ],
    },
    {
      device: "MD8600",

      title: "(12-)MD8600 CVR Exit (73,74)",
      image: Images.wideCVR,
      functions:
        "8673, 8674, ",
        metadata: "Wide, Wide 80 Series, Wide 80, 80, 80 series, series, 650, 606, 650 Strike, 606 Strike, Strike CVR, Exit, Device, Wide CVR, Wide CVR Exit Device, Wide CVR Exit, 700-4, 700-4 ET, ET Trim, ET, Trim, 100 Aux, Auxiliary, Control, Aux Control, Auxiliary Control, 106, 106 Aux, 113, 113 Aux, NB, Vertical Rods, Concealed Vertical Rod, Rods, Vertical, MD, Metal Door, Metal, MD8600, 59, 59-, Delayed, Egress, Delayed Egress, Electrified, ET, ET Trim, 773-4, 773, 774-4, 774",
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
      trims: trimsString,
      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055949",
      text: "View Hollow Metal Door Mounting Template Doc# 4445-J",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055949",
      text1:
        "View Hollow Metal Door Mounting Template (NB - NO BOTTOM ROD) Doc# 4566-A",

      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055948",
      text2:
        "View (59- Delayed Egress) Hollow Metal Door Mounting Template Doc# 4455-D",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1055940",
      text3: "View Trim Template (54-)(700-4 ET) Doc# 4467-F",
      link4: "https://storage.googleapis.com/aa-americas/dam/AADSS1055943",
      text4: "View 650/606 Strike Template Doc# 4449-G",
      link5: "https://storage.googleapis.com/aa-americas/dam/AADSS1055937",
      text5: "View 106/113 Auxiliary Trim Doc# 4212-D",
      link6: "https://storage.googleapis.com/aa-americas/dam/AADSS1055972",
      text6:
        "View Wide Electrical Options Wiring Template (AL, 53, 55, 56, etc) Doc# 4569-C",
    },
    {
      device: "AD8600",

      title: "AD8600 CVR Exit (06, 10, 13, 15, 40, 43, 46)",
      image: Images.wideCVR,
      functions:
        "8606, 8610, 8613, 8615, 8640, 8643, 8646, ",
        metadata: "Wide, Wide 80 Series, Wide 80, 80, 80 series, series, 650, 606, 650 Strike, 606 Strike, Strike, CVR, Exit, Device, Wide CVR, Wide CVR Exit Device, Wide CVR Exit, 700-4, 700-4 ET, ET Trim, ET, Trim, 100 Aux, Auxiliary, Control, Aux Control, Auxiliary Control, 106, 106 Aux, 113, 113 Aux, NB, Vertical Rods, Concealed Vertical Rod, Rods, Vertical, AD, Aluminum Door, Aluminum, AD8600, 59, 59-, Delayed, Egress, Delayed Egress, Classroom, Class-Room, class, room, class room, StoreRoom, Store Room, Store-Room, Passage",
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
      trims: trimsString,
      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055938",
      text: "View Aluminum Door Mounting Template Doc# 4661-A",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055948",
      text1:
        "View (59- Delayed Egress) Hollow Metal Door Mounting Template Doc# 4455-D",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055940",
      text2: "View Trim Template (700-4 ET) Doc# 4448-J",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1055943",
      text3: "View 650/606 Strike Template Doc# 4449-G",
      link4: "https://storage.googleapis.com/aa-americas/dam/AADSS1055937",
      text4: "View 106/113 Auxiliary Trim Doc# 4212-D",
      link5: "https://storage.googleapis.com/aa-americas/dam/AADSS1055972",
      text5:
        "View Wide Electrical Options Wiring Template (AL, 53, 55, 56, etc) Doc# 4569-C",
      installation: [
        {
          device: "AD8600",
          title: "AD8600 Mounting Related Instructions",
          image: Images.wideCVR,

          link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055345",
          text: "View (12)(NB)AD8600 Main Mounting Installation Instructions Doc# A7002",
        },
        {
          device: "AD8600",
          title: "AD8600 Cylinder / Accessories Related Instructions",
          image: Images.wideCVR,

          link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055276",
          text: "View 106/113 Aux Control Installation Instructions Doc# A5985",
        },
        {
          device: "AD8600",
          title: "AD8600 Catalog / Parts Manual",
          image: Images.wideCVR,

          link: "https://www.sargentlock.com/en/view-pdf?id=AADSS1004788&page=20",
          text: "View 80 Series Catalog (Page 20) Doc# 90641",

          link1:
            "https://www.sargentlock.com/en/view-pdf?id=AADSS1014876&page=20",
          text1: "View 80 Series Parts Manual (Page 20) Doc# A8231",
        },
      ],
    },
    {
      device: "AD8600",

      title: "AD8600 CVR Exit (73,74)",
      image: Images.wideCVR,
      functions:
        "8673,8674, ",
        metadata: "Wide, Wide 80 Series, Wide 80, 80, 80 series, series, 650, 606, 650 Strike, 606 Strike, CVR, Exit, Device, Wide CVR, Wide CVR Exit Device, Wide CVR Exit, 700-4, 700-4 ET, ET Trim, ET, Trim, 100 Aux, Auxiliary, Control, Aux Control, Auxiliary Control, 106, 106 Aux, 113, 113 Aux, NB, Vertical Rods, Concealed Vertical Rod, Rods, Vertical, AD, Aluminum Door, Aluminum, AD8600, 59, 59-, Delayed, Egress, Delayed Egress, Electrified, ET, ET Trim, 773-4, 773, 774-4, 774",
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
      trims: trimsString,
      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055938",
      text: "View Aluminum Door Mounting Template Doc# 4661-A",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055936",
      text2: "View ET Trim Template (54-)(700-4) Doc# 4467-F",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055948",
      text1:
        "View (59- Delayed Egress) Hollow Metal Door Mounting Template Doc# 4455-D",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1055943",
      text3: "View 650/606 Strike Template Doc# 4449-G",
      link4: "https://storage.googleapis.com/aa-americas/dam/AADSS1055937",
      text4: "View 106/113 Auxiliary Trim Doc# 4212-D",
      link5: "https://storage.googleapis.com/aa-americas/dam/AADSS1055972",
      text5:
        "View Wide Electrical Options Wiring Template (AL, 53, 55, 56, etc) Doc# 4569-C",
    },
    {
      device: "LP8600",

      title: "LP/LR/LS 8600 Template Form",
      functions:
        "LP8606, LR8606, LS8606, LP8610, LR8610, LS8610, LP8613, LR8613, LS8613, LP8615, LR8615, LS8615, LP8640, LR8640, LS8640, LP8643, LR8643, LS8643, LP8646, LR8646, LS8646, LP8673, LR8673, LS8673, LP8674, LR8674, LS8674, ",
        metadata: "Wide, Wide 80 Series, Wide 80, 80, 80 series, series, LP/LR, LP, LR, LS, Concealed, Mortise, CVR",
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
      trims: trimsString,
      image: Images.LS8600CVRMortise,

      link: "https://www.sargentlock.com/en/standalone/lp8600-template",
      text: "View Template Request Form (Door Manufacturers Only)",
      installation: [
        {
          device: "LP8600",
          title: "LP/LR/LS 8600 Mounting Related Instructions",
          image: Images.wideCVR,

          link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055354",
          text: "(12-)LP8600 x (12-)LR8600, (12-)LS8600 CTL CVR Low Profile Double Egress and Double Doors, Single Door Installation Instructions Doc# A7393",
        },
      ],
    },
    {
      device: "8700",

      title: "8700 SVR Exit (06, 10, 13, 15, 40, 43, 46, 73, 74)",
      image: Images.wideSVR,
      functions:
        "8706, 8710, 8713, 8715, 8740, 8743, 8746, 8773, 8774, ",
        metadata: "Wide, Wide 80 Series, Wide 80, 80, 80 series, series, 646, 624, 655, 648, 653, 646 Strike, 624 Strike, 655 Strike, 648 Strike, 653 Strike, SVR, SVR Exit, SVR Exit Device, Exit, Device, Exit Device, Surface Vertical Rod, Surface, Vertical, Rod, Vertical Rod, Surface Rod, 8700, ET, Trim, ET Trim, 700 ET, Electrified Trim, Electrified, 773, 774",
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
      trims: trimsString,
      warning: "If using thumbpiece trim go to TP Trim section",

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055961",
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
      text7:
        "View Wide Electrical Options Wiring Template (AL, 53, 55, 56, etc) Doc# 4569-C",
      installation: [
        {
          device: "8700",
          title: "8700 Mounting Related Instructions",
          image: Images.wideSVR,

          link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055361",
          text: "View (STD, 12, HC, HC4)8700 Main Mounting Installation Instructions Doc# A6701",
          link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1064525",
          text1:
            "View (12)FM8700 Main Mounting Installation Instructions Doc# A7827",
        },
        {
          device: "8700",
          title: "8700 Cylinder / Accessory Related Instructions",
          image: Images.wideSVR,

          link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055351",
          text: "View 306/313 Aux Control Installation Instructions Doc# A5978",
        },
        {
          device: "8700",
          title: "8700 Catalog / Parts Manual",
          image: Images.wideSVR,

          link: "https://www.sargentlock.com/en/view-pdf?id=AADSS1004788&page=14",
          text: "View 80 Series Catalog (Page 14) Doc# 90641",

          link1:
            "https://www.sargentlock.com/en/view-pdf?id=AADSS1014876&page=26",
          text1: "View 80 Series Parts Manual (Page 26) Doc# A8231",
        },
      ],
    },
    {
      device: "8700",

      title: "12-8700 SVR Exit (06, 10, 13, 15, 40, 43, 46, 73, 74)",
      image: Images.wideSVR,
      functions:
        "8706, 8710, 8713, 8715, 8740, 8743, 8746, 8773, 8774, ",
        metadata: "Wide, Wide 80 Series, Wide 80, 80, 80 series, series, 646, 624, 655, 648, 653, Strike, 646 Strike, 624 Strike, 655 Strike, 648 Strike, 653 Strike, SVR, SVR Exit, SVR Exit Device, Exit, Device, Exit Device, Surface Vertical Rod, Surface, Vertical, Rod, Vertical Rod, Surface Rod, 8700, ET, Trim, ET Trim, 700 ET, Electrified Trim, Electrified, 773, 774",
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
      trims: trimsString,
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
      text7:
        "View Wide Electrical Options Wiring Template (AL, 53, 55, 56, etc) Doc# 4569-C",
    },
    {
      device: "8700",

      title:
        "(12-)(HC, HC4, FM)8700 SVR Exit (06, 10, 13, 15, 40, 43, 46, 73, 74)",
      image: Images.wideSVR,
      functions:
        "8706, 8710, 8713, 8715, 8740, 8743, 8746, 8773, 8774, ",
        metadata: "Wide, Wide 80 Series, Wide 80, 80, 80 series, series, 653, 654, 655, 659, Strike, 653 Strike, 654 Srike, 655 Strike, 659 Strike, SVR, SVR Exit, SVR Exit Device, Exit, Device, Exit Device, Surface Vertical Rod, Surface, Vertical, Rod, Vertical Rod, Surface Rod, 8700, ET, Trim, ET Trim, 700 ET, Electrified Trim, Electrified, 773, 774",
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
      trims: trimsString,
      warning: "If using thumbpiece trim go to TP Trim section",

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055970",
      text: "View (12-)(HC, HC4, FM)8700 Mounting Template (Any Door) Doc# 4462-G",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055922",
      text1: "View Trim Template (700 ET) Doc# 4277-18",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055928",
      text2: "View Trim Template (54-)(773 & 774 ET) Doc# 4314-T",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1055957",
      text3:
        "View 653/654/659/655 Standard Top&Bottom Strike Template Doc# 4296-G",
      link4: "https://storage.googleapis.com/aa-americas/dam/AADSS1055962",
      text4: "View 306/313 Auxiliary Trim Doc# 4214-F",
      link5: "https://storage.googleapis.com/aa-americas/dam/AADSS1055972",
      text5:
        "View Wide Electrical Options Wiring Template (AL, 53, 55, 56, etc) Doc# 4569-C",
    },
    {
      device: "8700",

      title: "8700 Thumbpiece Trims (10, 28, 62, 63)",
      functions:
        "8710, 8728, 8762, 8763, ",
        metadata: "Wide, Wide 80 Series, Wide 80, 80, 80 series, series, SVR, SVR Exit, SVR Exit Device, Exit, Device, Exit Device, Surface Vertical Rod, Surface, Vertical, Rod, Vertical Rod, Surface Rod, 8700, Thumb, Piece, Trim, Thumbpiece, PTB, STS, MAL, FLW, FLL",
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
      trims: trimsString,
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
      device: "NB-8700 OLD",

      title: "(12-)NB-8700 (06, 13, 15, 43, 46)",
      functions:
        "8706, 8713, 8715, 8743, 8746, ",
        metadata: "NB8706, NB8713, NB8715, NB8743, NB8746, Wide, Wide 80 Series, Wide 80, 80, 80 series, series, 653, 654, 655, 659, Strike, 653 Strike, 654 Srike, 655 Strike, 659 Strike, SVR, SVR Exit, SVR Exit Device, Exit, Device, Exit Device, Surface Vertical Rod, Surface, Vertical, Rod, Vertical Rod, Surface Rod, 8700, ET, Trim, ET Trim, 700 ET, 700-8 NB, NB8700, No Bottom, Less Bottom Rod, Less, Bottom, Rod, LBR, Class, Room, Classroom, Store, Storeroom, Store-Room, Passage",
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
      trims: trimsString,
      image: Images.wideNBSVR,

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055969",
      text: "View NB8700 Mounting Template (Single Door) Doc# 4553",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055967",
      text1: "View NB8700 Mounting Template (Double Door) Doc# 4559",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055900",
      text2: "View Trim Template (700-8 ET) Doc# 4414",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1055956",
      text3: "View 646/624/655 Standard Strike Template Doc# 4009-H",
      link4: "https://storage.googleapis.com/aa-americas/dam/AADSS1055963",
      text4: "View 648 Alt Top Strike Template Doc# 4225-C",
      link6: "https://storage.googleapis.com/aa-americas/dam/AADSS1055966",
      text6: "View NB306/NB313 Auxiliary Template Doc# 4583",
      link7: "https://storage.googleapis.com/aa-americas/dam/AADSS1055972",
      text7:
        "View Wide Electrical Options Wiring Template (AL, 53, 55, 56, etc) Doc# 4569-C",

      installation: [
        {
          device: "NB-8700 OLD",
          title: "NB8700 Mounting Related Instructions",
          image: Images.wideNBSVR,

          link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055330",
          text: "View (STD, NB, 12, HC, HC4)8700 Main Mounting Installation Instructions Doc# A7617",
          link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055351",
          text1:
            "View NBB306/NB313 Aux Control Installation Instructions Doc# A7830",
        },
        {
          device: "NB-8700 OLD",
          title: "8700 Catalog / Parts Manual",
          image: Images.wideNBSVR,

          link: "https://www.sargentlock.com/en/view-pdf?id=AADSS1004788&page=16",
          text: "View 80 Series Catalog (Page 16) Doc# 90641",

          link1:
            "https://www.sargentlock.com/en/view-pdf?id=AADSS1014876&page=35",
          text1: "View 80 Series Parts Manual (Page 35) Doc# A8231",
        },
      ],
    },
    {
      device: "NB-8700 OLD",

      title: "(12-)NB-8700 (73, 74)",
      functions:
        "8773, 8774, NB8773, NB8774, Wide, ",
        metadata: "Wide 80 Series, Wide 80, 80, 80 series, series, 653, 654, 655, 659, Strike, 653 Strike, 654 Srike, 655 Strike, 659 Strike, Wide, Wide Exit Device, Wide Exit, SVR, SVR Exit, SVR Exit Device, Exit, Device, Exit Device, Surface Vertical Rod, Surface, Vertical, Rod, Vertical Rod, Surface Rod, 8700, ET, Trim, ET Trim, 700 ET, 700-8 NB, NB8700, No Bottom, Less Bottom Rod, Less, Bottom, Rod, LBR, Electrified, 773, 774",
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
      trims: trimsString,
      image: Images.wideNBSVR,

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055969",
      text: "View NB8700 Mounting Template (Single Door) Doc# 4553",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055967",
      text1: "View NB8700 Mounting Template (Double Door) Doc# 4559",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055968",
      text2: "View Trim Template ((54-)700 ET - 73/74 function) Doc# 4714",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1055956",
      text3: "View 646/624/655 Standard Strike Template Doc# 4009-H",
      link4: "https://storage.googleapis.com/aa-americas/dam/AADSS1055963",
      text4: "View 648 Alt Top Strike Template Doc# 4225-C",
      link6: "https://storage.googleapis.com/aa-americas/dam/AADSS1055966",
      text6: "View NB306/NB313 Auxiliary Template Doc# 4583",
      link7: "https://storage.googleapis.com/aa-americas/dam/AADSS1055972",
      text7:
        "View Wide Electrical Options Wiring Template (AL, 53, 55, 56, etc) Doc# 4569-C",
    },
    {
      device: "NB-8700 NEW",

      title: "(12-)NB-8700 (06, 13, 15, 43, 46)",
      functions:
        "8706, 8713, 8715, 8743, 8746, NB8706, NB8713, NB8715, NB8743, NB8746, ",
        metadata: "Wide, Wide 80 Series, Wide 80, 80, 80 series, series, 653, 654, 655, 659, Strike, 653 Strike, 654 Srike, 655 Strike, 659 Strike, SVR, SVR Exit, SVR Exit Device, Exit, Device, Exit Device, Surface Vertical Rod, Surface, Vertical, Rod, Vertical Rod, Surface Rod, 8700, ET, Trim, ET Trim, 700 ET, 700-8 NB, NB8700, No Bottom, Less Bottom Rod, Less, Bottom, Rod, LBR, Class, Room, Classroom, Store, Storeroom, Store-Room, Passage",
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
      trims: trimsString,
      image: Images.wideNBSVR,

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1238387",
      text: "View NB8700 Mounting Template (Any Door) Doc# MEDT13",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055922",
      text1: "View Trim Template (700 ET) Doc# 4277-18",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1055956",
      text3: "View 646/624/655 Standard Strike Template Doc# 4009-H",
      link4: "https://storage.googleapis.com/aa-americas/dam/AADSS1055963",
      text4: "View 648 Alt Top Strike Template Doc# 4225-C",
      link6: "https://storage.googleapis.com/aa-americas/dam/AADSS1055962",
      text6: "View 306/313 Auxiliary Template Doc# 4214-F",
      link7: "https://storage.googleapis.com/aa-americas/dam/AADSS1055972",
      text7:
        "View Wide Electrical Options Wiring Template (AL, 53, 55, 56, etc) Doc# 4569-C",

      installation: [
        {
          device: "NB-8700 NEW",
          title: "8700 Mounting Related Instructions",
          image: Images.wideNBSVR,

          link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055361",
          text: "View (STD, NB, 12, HC, HC4)8700 Main Mounting Installation Instructions Doc# A6701",
          link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055351",
          text1:
            "View 306/313 Aux Control Installation Instructions Doc# A5978",
        },
        {
          device: "NB-8700 NEW",
          title: "8700 Catalog / Parts Manual",
          image: Images.wideNBSVR,

          link: "https://www.sargentlock.com/en/view-pdf?id=AADSS1004788&page=16",
          text: "View 80 Series Catalog (Page 16) Doc# 90641",

          link1:
            "https://www.sargentlock.com/en/view-pdf?id=AADSS1014876&page=26",
          text1: "View 80 Series Parts Manual (Page 26) Doc# A8231",
        },
      ],
    },
    {
      device: "NB-8700 NEW",

      title: "(12-)NB-8700 (73, 74)",
      functions:
        "8773, 8774, NB8773, NB8774, ",
        metadata: "Wide, Wide 80 Series, Wide 80, 80, 80 series, series, 653, 654, 655, 659, Strike, 653 Strike, 654 Srike, 655 Strike, 659 Strike, Wide, Wide Exit Device, Wide Exit, SVR, SVR Exit, SVR Exit Device, Exit, Device, Exit Device, Surface Vertical Rod, Surface, Vertical, Rod, Vertical Rod, Surface Rod, 8700, ET, Trim, ET Trim, 700 ET, 700-8 NB, NB8700, No Bottom, Less Bottom Rod, Less, Bottom, Rod, LBR, Electrified, 773, 774",
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
      trims: trimsString,
      image: Images.wideNBSVR,

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1238387",
      text: "View NB8700 Mounting Template (Any Door) Doc# MEDT13",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055928",
      text2: "View Trim Template (54-)(773 & 774 ET) Doc# 4314-T",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1055956",
      text3:
        "View 653/654/659/655 Standard Top&Bottom Strike Template Doc# 4296-G",
      link6: "https://storage.googleapis.com/aa-americas/dam/AADSS1055962",
      text6: "View 306/313 Auxiliary Template Doc# 4214-F",
      link7: "https://storage.googleapis.com/aa-americas/dam/AADSS1055972",
      text7:
        "View Wide Electrical Options Wiring Template (AL, 53, 55, 56, etc) Doc# 4569-C",
    },
    {
      device: "NB-8700 NEW",

      title: "NB-8700 Thumbpiece Trims (10, 28, 62, 63)",
      functions:
        "8710, 8728, 8762, 8763, ",
        metadata: "Wide, Wide 80 Series, Wide 80, 80, 80 series, series, SVR, SVR Exit, SVR Exit Device, Exit, Device, Exit Device, Surface Vertical Rod, Surface, Vertical, Rod, Vertical Rod, Surface Rod, 8700, Thumb, Piece, Trim, Thumbpiece, PTB, STS, MAL, FLW, FLL",
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
      trims: trimsString,
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
      device: "8800",

      title: "8888 and 88 Series Rose/Lever Trims (88-KL, 88-DL, 88-CL, 88-LL)",
      functions:
        "8888, 88-KL, 88-DL, 88-CL, 88-LL",
      MechOptions:
        "12, 14, 16, 19, 23, 31, 36, 37, AD, WD, MD, HC, WS, 43, 49, 76, 85, 86, 87, GL, PL, LD, SG, TB, NB, CPC, 5CH",
      ElecOptions: "53, 54, 55, 56, 56-HK, HK, 58, 59, AL, BC, BC-59",
      CylOptions:
        "10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      railSizes: "E, F, J, G",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V",
      metadata: "80 series, series, Wide, Wide 80 Series, Wide 80, Thumb, Piece, Trims, ThumbPiece, Thumb Piece, Thumbpiece Trims, Night Latch, Night, Latch, Classroom, Class Room, Class-Room, Intruder, Classroom Intruder, PTB, STS, MAL, FLL, FLW, PSB, MSL, FSL, FSW",
      finishes:
        "03, US03, 04, US04, US09, 09, US10, 10, 10B, 10BE, 10BL, US14, US15, 20D, 26D, 26, 32, 32D, BSP, WSP, 605, 606, 611, 612, 613, 613E, 613L, 618, 619, 624, 625, 626, 629, 630",
      trims: trimsString,
      image: Images.roselever88,

      link: "https://www.sargentlock.com/en/view-pdf?id=AADSS1055926&page=1",
      text: "View (12-)8888 Rim Exit Template with prep for rose/lever trim Doc# 4429",
      link1: "https://www.sargentlock.com/en/view-pdf?id=AADSS1055916&page=1",
      text1: "View 88 Series Rose/Lever Trim Template (Outside Prep) Doc# 4428",

    },
        {
      device: "8800",

      title: "8800 Thumbpiece Trims (04, 10, 28, 63, 66)",
      functions:
        "8804, 8810, 8828, 8863, 8866, 80, 80 series, series, ",
        metadata: "Wide, Wide 80 Series, Wide 80, Thumb, Piece, Trims, ThumbPiece, Thumb Piece, Thumbpiece Trims, Night Latch, Night, Latch, Classroom, Class Room, Class-Room, Intruder, Classroom Intruder, PTB, STS, MAL, FLL, FLW, PSB, MSL, FSL, FSW",
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
      trims: trimsString,
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
      device: "8800",
      title: "(12-)(WS-)8800 (04, 10, 40, 44)",
      image: Images.wideStileRim,
      functions:
        "8804, 8810, 8840, 8844, ",
        metadata: "Wide, Wide 80 Series, Wide 80, 80, 80 series, series, 649, Strike, 649 Strike, 644, 644 Strike, Night, Latch, Night Latch, Rim, Rim Exit, Wide Rim Exit, 8800, Rim Exit Device, Exit Device, Exit Only, Night Latch, Night, Latch, Only, WS8800, 128800, 12-8800, 12 8800, 12-WS-8800, 12-WS8800, 12 WS 8800, ",
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
      trims: trimsString,
      warning: (
        <>
          ↓ For cylinder only Application ↓ <br />
          use Mounting Template Hole 2
        </>
      ),
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
      text5:
        "View Wide Electrical Options Wiring Template (AL, 53, 55, 56, etc) Doc# 4569-C",
      installation: [
        {
          device: "8800",
          title: "8800 Mounting Related Instructions",
          image: Images.wideStileRim,

          link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055349",
          text: "View (12-)(WS)(HC-)8800, (12-)8888 Wide Stile Rim Installation Instructions Doc# A6770",
          link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055341",
          text1:
            "View (12-)8800 Wide Stile Rim 16, 28, 63, & 66 Functions Installation Instructions Doc# A6703",
        },
        {
          device: "8800",
          title: "8800 Cylinder / Accessory Related Instructions",
          image: Images.wideStileRim,

          link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055356",
          text: "View 814 FSL, MSL, PSB Pull Trim (Night Latch) Installation Instructions Doc# A5025",
          link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055309",
          text1:
            "View Anti-Vandal Pull Trim Installation Instructions Doc# A5030",
          link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055301",
          text2:
            "View 862, 863, 864 Pull Trim INstallation Instructions Doc# A7474",
          link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1055269",
          text3: "View PTB Pull Trim Installation Instruction Doc# A5851",
        },
        {
          device: "8800",
          title: "8800 Catalog / Parts Manual",
          image: Images.wideStileRim,

          link: "https://www.sargentlock.com/en/view-pdf?id=AADSS1004788&page=10",
          text: "View 80 Series Catalog (Page 10) Doc# 90641",

          link1:
            "https://www.sargentlock.com/en/view-pdf?id=AADSS1014876&page=46",
          text1: "View 80 Series Parts Manual (Page 46) Doc# A8231",
        },
      ],
    },

    {
      device: "8800",

      title: "(12-)(WS-)8800 (06, 13, 15, 43, 46)",
      image: Images.wideStileRim,
      functions:
        "8806, 8813, 8815, 8843, 8846, ",
        metadata: "Wide, Wide 80 Series, Wide 80, 80, 80 series, series, 649, Strike, 649 Strike, 644, 644 Strike, Rim, Rim Exit, Wide Rim Exit, 8800, Rim Exit Device, Exit Device, Device, Wide Stile, Stile, Wide Rim Exit Device, WS8800, 128800, 12-8800, 12 8800, 12-WS-8800, 12-WS8800, 12 WS 8800, 12WS8800, Class, Room, Classroom, Store, Storeroom, Store-Room",
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
      trims: trimsString,
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
      text5:
        "View Wide Electrical Options Wiring Template (AL, 53, 55, 56, etc) Doc# 4569-C",
    },
    {
      device: "8800",

      title: "(12-)(WS-)8800 (16, 28, 63, 66)",
      image: Images.wideStileRim,
      functions:
        "8816, 8828, 8863, 8866, ",
        metadata: "Wide, Wide 80 Series, Wide 80, 80, 80 series, series, 649, Strike, 649 Strike, 644, 644 Strike, Rim, Rim Exit, Wide Rim Exit, 8800, Rim Exit Device, Exit Device, Device, Wide Stile, Stile, Wide Rim Exit Device, WS8800, 128800, 12-8800, 12 8800, 12-WS-8800, 12-WS8800, 12 WS 8800, 12WS8800, Class, Room, Classroom, Store, Storeroom, Store-Room",
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
      trims: trimsString,
      warning: "If using thumbpiece trim go to TP Trim section",

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055921",
      text: "View Mounting Template (Any Material) Doc# 4285_11",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055896",
      text2: "View 649 Strike Template (Single Door) Doc# 4004-K",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1055897",
      text3:
        "View 649 Standard Strike Template (Double Door W/ Mullion) Doc# 4300-E",
      link4: "https://storage.googleapis.com/aa-americas/dam/AADSS1055986",
      text4:
        "View 644 Alternate Strike Template (Double Door No Mullion) Doc# 3996-C",
      link5: "https://storage.googleapis.com/aa-americas/dam/AADSS1055972",
      text5:
        "View Wide Electrical Options Wiring Template (AL, 53, 55, 56, etc) Doc# 4569-C",
    },
    {
      device: "8800",

      title: "(12-)(WS-)8800 (73, 74, 75, 76)",
      image: Images.wideStileRim,
      functions:
        "8873, 8874, 8875, 8876, ",
        metadata: "Wide, Wide 80 Series, Wide 80, 80, 80 series, series, 649, Strike, 649 Strike, 644, 644 Strike, Rim, Rim Exit, Wide Rim Exit, 8800, Rim Exit Device, Exit Device, Device, Wide Stile, Stile, Wide Rim Exit Device, WS8800, 128800, 12-8800, 12 8800, 12-WS-8800, 12-WS8800, 12 WS 8800, 12WS8800, Electrified, Trim, ELectrified Trim, 773, 774, 775, 776, 773-8, 774-8, 775-8, 776-8",
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
      trims: trimsString,
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
      text5:
        "View Wide Electrical Options Wiring Template (AL, 53, 55, 56, etc) Doc# 4569-C",
    },
    {
      device: "8800",
      title: "(12-)HC8800 (04, 10, 40, 44)",
      image: Images.wideStileRim,
      functions:
        "8804, 8810, 8840, 8844, ",
        metadata: "Wide, Wide 80 Series, Wide 80, 80, 80 series, series, 649, Strike, 649 Strike, Rim, Rim Exit, Wide Rim Exit, 8800, Rim Exit Device, Exit Device, Device, Wide Stile, Stile, Wide Rim Exit Device, HC8800, 12HC8800, 12-HC-8800, 12HC-8800, 12-HC8800, HC 8800, 12 HC 8800, 12HC 8800, Exit Only, Night Latch, Night, Latch, Only",
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
      trims: trimsString,
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
      text5:
        "View Wide Electrical Options Wiring Template (AL, 53, 55, 56, etc) Doc# 4569-C",
    },
    {
      device: "8800",
      title: "(12-)HC8800 (06, 13, 15, 43 46)",
      image: Images.wideStileRim,
      functions:
        "8806, 8813, 8815, 8843, 8846, 80, 80 series, series, ",
        metadata: "Wide, Wide 80 Series, Wide 80, 649, Strike, 649 Strike, Rim, Rim Exit, Wide Rim Exit, 8800, Rim Exit Device, Exit Device, Device, Wide Stile, Stile, Wide Rim Exit Device, HC8800, 12HC8800, 12-HC-8800, 12HC-8800, 12-HC8800, HC 8800, 12 HC 8800, 12HC 8800, Class, Room, Classroom, Store, Storeroom, Store-Room, ",
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
      trims: trimsString,
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
      text5:
        "View Wide Electrical Options Wiring Template (AL, 53, 55, 56, etc) Doc# 4569-C",
    },
    {
      device: "8800",
      title: "(12-)HC8800 (75, 76)",
      image: Images.wideStileRim,
      functions:
        "8875, 8876, ",
        metadata: "80, 80 series, series, Rim, Rim Exit, Wide, Wide 80 Series, Wide 80, Wide Rim Exit, 8800, 649, Strike, 649 Strike, Rim Exit Device, Exit Device, Device, Wide Stile, Stile, Wide Rim Exit Device, HC8800, 12HC8800, 12-HC-8800, 12HC-8800, 12-HC8800, HC 8800, 12 HC 8800, 12HC 8800, Electrified, Trim, ELectrified Trim, 773, 774, 775, 776, 773-8, 774-8, 775-8, 776-8",
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
      trims: trimsString,
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
      device: "8900",

      title: "(12-)(WS-)8900 (04, 06, 10, 13, 15, 16, 40, 43, 44)",
      image: Images.wideMortise,
      functions:
        "8904, 8906, 8910, 8913, 8915, 8916, 8940, 8943, 8944, ",
        metadata: "Wide, Wide 80 Series, Wide 80, 80, 80 series, series, 908, C908, 815, 815 Strike, 908 Strike, C908 Strike, 815 Open Back Strike, Wide, Wide Mortise, Wide Mortise Exit, Wide Mortise Exit Device, Exit, Device, Exit Device, Mortise Exit, Mortise Exit Device, 700 ET, ET, ET Trim, Trim, Delayed Egress, Classroom, Class, Room, Class Room, Class-Room, Storeroom, Store Room, Store-room, passage, Exit, Only, Exit Only, 8900, 12-8900, 12 8900, 128900, WS8900, WS-8900, WS 8900, 12-WS-8900, 12-WS8900, 12WS-8900, 12 WS 8900",
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
      trims: trimsString,
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
      text6:
        "View Wide Electrical Options Wiring Template (AL, 53, 55, 56, etc) Doc# 4569-C",

      installation: [
        {
          device: "8900",
          title: "8900 Mounting Related Instructions",
          image: Images.wideMortise,

          link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055332",
          text: "View (12)(WS)8900 Wide Stile Mortise Installation Instructions Doc# A6705",
        },
        {
          device: "8900",
          title: "8900 Cylinder / Accessory Related Instructions",
          image: Images.wideMortise,

          link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055309",
          text: "View Anti Vandal Pull Trim Installation Instructions Doc# A5030",
        },
        {
          device: "8900",
          title: "8900 Catalog / Parts Manual",
          image: Images.wideMortise,

          link: "https://www.sargentlock.com/en/view-pdf?id=AADSS1004788&page=12",
          text: "View 80 Series Catalog (Page 12) Doc# 90641",

          link1:
            "https://www.sargentlock.com/en/view-pdf?id=AADSS1014876&page=89",
          text1: "View 80 Series Parts Manual (Page 89) Doc# A8231",
        },
      ],
    },
    {
      device: "8900",

      title: "(12-)(WS-)8900 (73, 74, 75, 76)",
      image: Images.wideMortise,
      functions:
        "8973, 8974, 8975, 8976 ",
        metadata: "Wide, Wide 80 Series, Wide 80, 80, 80 series, series, 908, C908, 815, 908 Strike, C908 Strike, 815 Open Back Strike, Wide, Wide Mortise, Wide Mortise Exit, Wide Mortise Exit Device, Exit, Device, Exit Device, Mortise Exit, Mortise Exit Device, 700 ET, ET, ET Trim, Trim, Delayed Egress, Electrified, Electrified Trim, 775, 776, 8900, 12-8900, 12 8900, 128900, WS8900, WS-8900, WS 8900, 12-WS-8900, 12-WS8900, 12WS-8900, 12 WS 8900",
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
      trims: trimsString,
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
      text6:
        "View Wide Electrical Options Wiring Template (AL, 53, 55, 56, etc) Doc# 4569-C",
    },
    {
      device: "8900",

      title: "8900 Thumbpiece Trims (04, 10, 28, 63, 66)",
      functions:
        "8904, 8910, 8928, 8963, 8966, ",
        metadata: "Wide, Wide 80 Series, Wide 80, 80, 80 series, series, Thumb, Piece, Thumbpiece, Thumbpiece Trims, Thumbpiece Trim, PTB, STS, FLL, FLW, MAL, Night, Latch, Night Latch, Exit, Only, Exit Only, 8900, 12-8900, 12 8900, 128900, WS8900, WS-8900, WS 8900, 12-WS-8900, 12-WS8900, 12WS-8900, 12 WS 8900",
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
      trims: trimsString,
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
        "PE8304, PE8306, PE8310, PE8313, PE8315, ",
        metadata: "Narrow PE Series, Narrow PE80 Series, PE8340, PE8343, PE8344, PE8346, PE8373, PE8374, PE8375, PE8376, 908, C908, 815, 908 Strike, C908 Strike, 815 Strike, 815 Open Back Strike, ET, ET Trim, 700 ET, Narrow, Exit, Device, Narrow Exit, Narrow Exit Device, Narrow Mortise, Mortise, Narrow Mortise Exit, Narrow Mortise Exit Device, Narrow PE Exit Device, Narrow PE, 8300, PE8300, PE80 series, PE80, PE, PE80 Series, PE Series, Classroom, Class-Room, class, room, class room, Night Latch, Night, Latch, Store-Room, Passage",
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
      trims: trimsString,

      image: Images.narrowPE80Mortise,

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1238416",
      text: "View Wood Door Mounting Template Doc# MEDT46",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1238415",
      text1: "View Metal/Aluminum Door Mounting Template Doc# MEDT45",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1238390",
      text2: "View Trim Template (700 ET) Doc# MEDT20",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1238402",
      text3: "View Electrified Trim Template Doc# MEDT32",
      link4: "https://storage.googleapis.com/aa-americas/dam/AADSS1238420",
      text4: "View C908/908 Strike Template Doc# MEDT50",
      link5: "https://storage.googleapis.com/aa-americas/dam/AADSS1238419",
      text5: "View 815 Strike Template Doc# MEDT49",
      link6: "https://storage.googleapis.com/aa-americas/dam/AADSS1238383",
      text6:
        "View Narrow Electrical Options Wiring Template (AL, 53, 55, 56, etc) Doc# MEDT8",
      installation: [
        {
          device: "PE8300",
          title: "PE8300 Mounting Related Instructions",
          image: Images.narrowPE80Mortise,

          link: "https://storage.googleapis.com/aa-americas/dam/AADSS1234580",
          text: "(12-)PE8300 Narrow Stile Mortise Installation Instructions Doc# A8303",
        },
      ],
    },
    {
      device: "PE8400",

      title: "(12-) PE8400 CVR Exit (All Functions)",
      functions:
        "PE8406, PE8410, PE8413, PE8415, PE8440, ",
        metadata: "Narrow PE Series, Narrow PE80 Series, PE8443, PE8446, PE8473, PE8474, PE80 series, PE80, PE, PE80 Series, PE Series, 640, 652, 640 Strike, 652 Strike, ET, ET Trim, 700 ET, Narrow, Narrow CVR, Narrow CVR Exit, Narrow CVR Exit Device, CVR, Exit, Device, PE8400, 8400, PE80, PE, Narrow CVR Device, 100 Aux, 100, 106, 113, P100, P100 Aux, P106, P113, MD, WD, AD, Wood, Aluminum, Wood Door, ALuminum Door, Metal, Door, Metal Door, NB, Vertical Rods, Concealed Vertical Rod, Rods, Vertical, Classroom, Class-Room, class, room, class room, StoreRoom, Store Room, Store-Room, Passage",
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
      trims: trimsString,

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
      text6:
        "View Narrow Electrical Options Wiring Template (AL, 53, 55, 56, etc) Doc# MEDT8",
      installation: [
        {
          device: "PE8400",
          title: "PE8400 Mounting Related Instructions",
          image: Images.narrowPECVR,

          link: "https://storage.googleapis.com/aa-americas/dam/AADSS1234590",
          text: "(12-)(MD)(AD)PE8400 Narrow Stile CVR Installation Instructions Doc# A8306",
          link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1234586",
          text1:
            "(WD-)P106 and (WD-)P113 Auxiliary Control Installation Instructions Doc# A8309",
        },
      ],
    },
    {
      device: "PE8500",

      title: "(12-)PE8500 Narrow Rim Exit (04, 10, 40, 44 Functions)",
      functions:
        "PE8504, PE8510, PE8540, PE8544, ",
        metadata: "PE80 series, Narrow PE Series, Narrow PE80 Series, PE80, PE, PE80 Series, PE Series, Narrow, Rim, Exit, Narrow Rim, Narrow Rim Exit, Narrow Rim Exit Device, 8500, PE8500, PE80, Narrow PE, Narrow PE Exit Device, Narrow PE Exit, PE, 700 ET, ET, ET Trim , 700 ET Trim, 704, 710, 740, 744, WEL, NEL, WE, NE, Narrow Exit Device, Narrow Exit, Exit, Exit only, Night, Latch, Night Latch",
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
      trims: trimsString,

      image: Images.narrowPE8500,

      warning: (
        <>
          10 function WITHOUT trim -&gt; Template 1 Omit Cylinder hole
          <br />
          10 function WITH Dummy trim -&gt; Template 2 Omit Cylinder Hole
        </>
      ),
      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1238405",
      text: "View (04 Function) Cylinder only Inside Mounting Template Doc# MEDT35",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1238406",
      text1:
        "View (04 Function) with ET Trim Inside Mounting Template Doc# MEDT36 ",
      link6: "https://storage.googleapis.com/aa-americas/dam/AADSS1238383",
      text6:
        "View Narrow Electrical Options Wiring Template (AL, 53, 55, 56, etc) Doc# MEDT8",
      installation: [
        {
          device: "PE8500",
          title: "PE8500 Mounting Related Instructions",
          image: Images.narrowPE8500,

          link: "https://storage.googleapis.com/aa-americas/dam/AADSS1234578",
          text: "(12-)(AD)PE8500 Installation Instructions Doc# A8302",
          link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055362",
          text1: "604 Rub Strip Installation Instructions Doc# A8148",
        },
      ],
    },
    {
      device: "PE8500",

      title:
        "(12-)PE8500 Narrow Rim Exit (06, 13, 15, 43, 46, 73, 74 Functions)",
      functions:
        "8506, 8513, 8515, 8543, 8546, 8573, 8574, PE8506, PE8513, PE8515, PE8543, PE8546, PE8573, PE8574, ",
        metadata: "Narrow PE Series, Narrow PE80 Series, PE80 series, PE80, PE, PE80 Series, PE Series, PE8500, 8500, Narrow, Rim, Exit, Device, Narrow Rim, Exit Device, Narrow Rim Exit, Narrow Rim Exit Device, P700, P700 ET, ET, ET Trim, P700 ET Trim, P700-8, P706-8, P715-8, P713-8, P743-8, P746-8, Classroom, Class-Room, class, room, class room, StoreRoom, Store Room, Store-Room, Passage",
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
      trims: trimsString,

      image: Images.narrowPE8500,

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1238392",
      text: "View Inside Mounting Template Doc# MEDT22",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1238391",
      text1: "View Outside Trim Template Doc# MEDT20",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1238411",
      text2: "View (54-)(P773-8/P774-8) Electrified Trim Template Doc# MEDT41",
      link6: "https://storage.googleapis.com/aa-americas/dam/AADSS1238383",
      text6:
        "View Narrow Electrical Options Wiring Template (AL, 53, 55, 56, etc) Doc# MEDT8",
    },
    {
      device: "PE8500",

      title: "PE8500 Strikes",
      image: Images.narrowPE8500,
      metadata:
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
        "PE8606, PE8610, PE8613, PE8615, PE8640, PE8643, PE8646, PE8673, PE8674, ",
        metadata: "Wide PE Series, Wide PE80 Series, PE80 series, PE80, PE, PE80 Series, PE Series, Wood, WD, Wood Door, WD8600, PEWD8600, WD PE 8600, PE WD 8600, 650, 650 Strike, 652, 652 Strike, 100 Aux, P100 Aux, 106, 113, P113, P106, Wide, PE, Wide PE, Wide PE Exit, Wide PE Exit Device, Wide CVR, CVR, Wide CVR Exit Device, Storeroom, Store Room, Store-Room, Store, Room, Class, Room, Classroom, Class Room, Class-Room, Passage, ELectrified Trim, Electrified",
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
      trims: trimsString,

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
      text5:
        "View Wide Electrical Options Wiring Template (AL, 53, 55, 56, etc) Doc# MEDT17",
      installation: [
        {
          device: "PE8600",
          title: "PE8600 Mounting Related Instructions",
          image: Images.widePECVR,

          link: "https://storage.googleapis.com/aa-americas/dam/AADSS1234584",
          text: "(12-)(MD)(AD)PE8600 Wide Stile CVR Installation Instructions Doc# A8305",
          link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1234588",
          text1:
            "(12-)(WD)(NB-)PE8600 Wide Stile CVR Installation Instructions Doc# A8315",
          link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1234586",
          text2:
            "(WD-)P106 and (WD-)P113 Auxiliary Control Installation Instructions Doc# A8309",
          link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1055347",
          text3: "(AD) 639/640 Strikes Installation Instructions Doc# A8037",
        },
      ],
    },
    {
      device: "PE8600",

      title: "(12-) PE8600 CVR Exit  (Metal Door)",
      functions:
        "PE8606, PE8610, PE8613, PE8615, PE8640, PE8643, PE8646, PE8673, PE8674, ",
        metadata: "Wide PE Series, Wide PE80 Series, PE80 series, PE80, PE, PE80 Series, PE Series, Metal, MD, Metal Door, MD8600, PEMD8600, MD PE 8600, PE MD 8600, 650, 650 Strike, 652, 652 Strike, 100 Aux, P100 Aux, 106, 113, P113, P106, Wide, PE, Wide PE, Wide PE Exit, Wide PE Exit Device, Wide CVR, CVR, Wide CVR Exit Device, Storeroom, Store Room, Store-Room, Store, Room, Class, Room, Classroom, Class Room, Class-Room, Passage, ELectrified Trim, Electrified",
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
      trims: trimsString,

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
      text5:
        "View Wide Electrical Options Wiring Template (AL, 53, 55, 56, etc) Doc# MEDT17",
    },
    {
      device: "PE8600",

      title: "(12-) PE8600 CVR Exit (Aluminum Door)",
      functions:
        "PE8606, PE8610, PE8613, PE8615, PE8640, PE8643, PE8646, PE8673, PE8674, ",
        metadata: "Wide PE Series, Wide PE80 Series, PE80 series, PE80, PE, PE80 Series, PE Series, Aluminum, AD, Aluminum Door, AD8600, PEAD8600, AD PE 8600, PE AD 8600, 640, 640 Strike, 606, 606 Strike, 100 Aux, P100 Aux, 106, 113, P113, P106, Wide, PE, Wide PE, Wide PE Exit, Wide PE Exit Device, Wide CVR, CVR, Wide CVR Exit Device, Storeroom, Store Room, Store-Room, Store, Room, Class, Room, Classroom, Class Room, Class-Room, Passage, Electrified Trim, Electrified",
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
      trims: trimsString,

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
      text6:
        "View Wide Electrical Options Wiring Template (AL, 53, 55, 56, etc) Doc# MEDT17",
    },
    {
      device: "PE8700",

      title: "(12-) PE8700 SVR Exit",
      functions:
        "PE8706, PE8710, PE8713, PE8715, PE8740, PE8743, PE8746, PE8773, PE8774, ",
        metadata: "Wide PE Series, Wide PE80 Series, PE80 series, PE80, PE, PE80 Series, PE Series, 646, 624, 655, Strike, 646 Strike, 624 Strike, 655 Strike, PE, Wide PE, PE80, PE80 Series, Wide PE, Wide PE Exit Devce, Wide PE Exit, Wide SVR, Wide SVR Device, Wide SVR Exit, SVR, SVR Exit Device, 300 Aux, 306, 313, P306, P313, Wide PE 8700, Wide PE8700, PE, PE8700, 8700, WE, NE, WE Trim, NE Trim, Storeroom, Store Room, Store-Room, Store,  Room, Class, Room, Classroom, Class Room, Class-Room, Passage, Electrified Trim, Electrified, P700",
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
      trims: trimsString,

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
      text5:
        "View Wide Electrical Options Wiring Template (AL, 53, 55, 56, etc) Doc# MEDT17",
      installation: [
        {
          device: "PE8700",
          title: "PE8700 Mounting Related Instructions",
          image: Images.widePESVR,

          link: "https://storage.googleapis.com/aa-americas/dam/AADSS1234592",
          text: "(12-)(HC-)(HC4-)PE8700 Wide Stile SVR Installation Instructions Doc# A8307",
          link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1234594",
          text1:
            "(12-)FM-PE8700 Wide Stile SVR Installation Instructions Doc# A8319",
          link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055351",
          text2:
            "306 and 313 Auxiliary Control Installation Instructions Doc# A5978",
          link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1234596",
          text3: "Shim Kit (FM-PE8700) Installation Instructions Doc# A8338",
        },
      ],
    },
    {
      device: "PE8700",

      title: "(12-)(HC)(FM) PE8700 SVR Exit",
      functions:
        "PE8706, PE8710, PE8713, PE8715, PE8740, PE8743, PE8746, PE8773, PE8774, ",
        metadata: "Wide PE Series, Wide PE80 Series, PE80 series, PE80, PE, PE80 Series, PE Series, 8706, 8710, 8713, 8715, 8740, 8743, 8746, 8773, 8774, 659, 655, 653, Strike, 659 Strike, 655 Strike, 653 Strike, SVR, SVR Exit, SVR Exit Device, Exit, Device, Exit Device, Surface Vertical Rod, Surface, Vertical, Rod, Vertical Rod, Surface Rod, 8700, PE8700, WE, WE Trim, NE, NE Trim, ET, Trim, ET Trim, P700, Electrified Trim, Electrified, P773, P774",
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
      trims: trimsString,

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
      text6:
        "View Wide Electrical Options Wiring Template (AL, 53, 55, 56, etc) Doc# MEDT17",
    },
    {
      device: "PE8700",

      title: "PE8700 Thumbpiece Trims (10, 28, 62, 63)",
      functions:
        "PE8710, PE8728, PE8762, PE8763, ",
        metadata: "Wide PE Series, Wide PE80 Series, PTB, STS, MAL, FLW, FLL, PE, Wide, PE80 series, PE80, PE, PE80 Series, PE Series, Wide PE, ThumbPiece, Thumb, Piece, Trims, Thumbpiece Trims, Thumbpiece trim, Pull, PE, PE8700, 8700, ",
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
      trims: trimsString,

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
        "PE8706, PE8710, PE8713, PE8715, PE8740, PE8743, PE8746, PE8773, PE8774, NB8706, NB8710, NB8713, NB8715, NB8740, NB8743, NB8746, NB8773, NB8774, ",
        metadata: "Wide PE Series, Wide PE80 Series, PE80 series, PE80, PE, PE80 Series, PE Series, 8706, 8710, 8713, 8715, 8740, 8743, 8746, 8773, 8774, 659, 655, 653, Strike, 659 Strike, 655 Strike, 653 Strike, SVR, SVR Exit, SVR Exit Device, Exit, Device, Exit Device, Surface Vertical Rod, Surface, Vertical, Rod, Vertical Rod, Surface Rod, 8700, PE8700, WE, WE Trim, NE, NE Trim, ET, Trim, ET Trim, P700, Electrified Trim, Electrified, P773, P774",
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
      text5:
        "View Wide Electrical Options Wiring Template (AL, 53, 55, 56, etc) Doc# MEDT17",
      installation: [
        {
          device: "PE8700",
          title: "NB-PE8700 Mounting Related Instructions",
          image: Images.widePESVR,
          warning:
            "NB uses same parts as standard. Just omit bottom prep during installation",

          link: "https://storage.googleapis.com/aa-americas/dam/AADSS1234592",
          text: "(12-)(HC-)(HC4-)PE8700 Wide Stile SVR Installation Instructions Doc# A8307",
          link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055351",
          text2:
            "306 and 313 Auxiliary Control Installation Instructions Doc# A5978",
        },
      ],
    },
    {
      device: "NB-PE8700",

      title: "Thumbpiece Trims (10, 28, 62, 63)",
      functions:
        "PE8710, PE8728, PE8762, PE8763, PE80 series, ",
        metadata: "Wide PE Series, Wide PE80 Series, PE80, PE, PE80 Series, PE Series, PTB, STS, MAL, FLW, FLL, PE, Wide, PE80, Wide PE, ThumbPiece, Thumb, Piece, Trims, Thumbpiece Trims, Thumbpiece trim, Pull, PE, PE8700, 8700, ",
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
      trims: trimsString,

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
        "PE8804, PE8810, PE8840, PE8844, PE80 series, ",
        metadata: "Wide PE Series, Wide PE80 Series, PE80, PE, PE80 Series, PE Series, Wide PE, PE80, Wide PE Exit, Wide PE Exit Device, Wide Rim Exit, Wide PE Rim Exit, Wide 8800, 8800, PE8800, Wide, Night Latch, Exit Only, Night, Latch, Only, Exit, PE88, Raceway",
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
      trims: trimsString,

      image: Images.widePERim,

      warning:
        "For cylinder only template, focus on top right cutout dimensions and focus on CL reference points when using W/ MEDT44 ",
      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1238414",
      text: "View Mounting Template Doc# MEDT44",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1238390",
      text2: "View Trim Template Doc# MEDT19",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1238389",
      text3:
        "View Wide Electrical Options Wiring Template (AL, 53, 55, 56, etc) Doc# MEDT17",
      installation: [
        {
          device: "PE8800",
          title: "PE8800 Mounting Related Instructions",
          image: Images.widePERim,

          link: "https://storage.googleapis.com/aa-americas/dam/AADSS1234574",
          text: "(12-)(WS)PE8800 Wide Stile Rim Installation Instructions Doc# A8301",
          link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1246385",
          text2:
            "(12-)PE8800 Wide Stile Rim 16, 28, 63, and 66 Functions Installation Instructions Doc# A8296",
          link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1055316",
          text3:
            "(12-)HC8800, (12-)HC-PE8800 Wide Stile Rim Installation Instructions Doc# A7683",
          link4: "https://storage.googleapis.com/aa-americas/dam/AADSS1055309",
          text4: "Anti-Vandal Pull Trim Installation Instructions Doc# A5030",
          link5: "https://storage.googleapis.com/aa-americas/dam/AADSS1234576",
          text5:
            "93 Decorative, Static Pushbar and 95 Active Dummy Rail for PE80 Series PE8800 Wide Stile Rim Installation Instructions Doc# A8320",
        },
      ],
    },
    {
      device: "PE8800",

      title: "(12-) PE8800 Rim Exit (06, 13, 15, 43, 46, 73, 74, 75, 76)",
      functions:
        "PE8806, PE8813, PE8815, PE8843, PE8846, PE8873, PE8874, PE8875, PE8876, ",
        metadata: "Wide PE Series, Wide PE80 Series, PE80 series, PE80, PE, PE80 Series, PE Series, Wide PE, PE80, Wide PE Exit, Wide PE Exit Device, Wide Rim Exit, Wide PE Rim Exit, Wide 8800, 8800, PE8800, Wide, Exit, PE88, Raceway, Class, Room, Store, Storeroom, Classroom, Store Room, Store-Room, Class-Room, Class Room, Passage, Electrified, ET, Eclectrified Trim, 773, 774, 775, 776, 773-8, 774-8, 775-8, 776-8",
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
      trims: trimsString,

      image: Images.widePERim,

      warning: "ET with Cross Spindle + Electrified Trims ",
      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1238414",
      text: "View Mounting Template Doc# MEDT44",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1238391",
      text1: "View P700-8 Trim Template Doc# MEDT20",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1238397",
      text2: "View (54-) Electrified ET Trim Template Doc# MEDT27",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1238389",
      text3:
        "View Wide Electrical Options Wiring Template (AL, 53, 55, 56, etc) Doc# MEDT17",
    },
    {
      device: "PE8800",

      title: "(12-)(HC-)(WS-) PE8800 Rim Exit (16, 28, 63, 66)",
      functions:
        "PE8816, PE8828, PE8863, PE8866, ",
        metadata: "Wide PE Series, Wide PE80 Series, PE80 series, PE80, PE, PE80 Series, PE Series,",
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
      trims: trimsString,

      image: Images.widePERim,

      warning: "If using thumbpiece trim go to TP Trim section",
      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1238413",
      text: "View Mounting Template (16, 28, 63, 66 Bell Housing) Doc# MEDT43",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1238390",
      text1: "View Trim Template (716) Doc# MEDT19",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1238389",
      text2:
        "View Wide Electrical Options Wiring Template (AL, 53, 55, 56, etc) Doc# MEDT17",
    },
    {
      device: "PE8800",

      title: "PE8800 Thumbpiece Trims (04, 10, 28, 63, 66)",
      functions:
        "PE8804, PE8810, PE8828, PE8863, PE8866, PE80 series, ",
        metadata: "Wide PE Series, Wide PE80 Series, PE80, PE, PE80 Series, PE Series, Thumb, Piece, Trim, Thumbpiece Trim, Thumbpiece, PTB, STS, MAL, FLW, FLL, PSB, FSW, FSL, MSL",
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
      trims: trimsString,

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
      metadata:
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
        "PE8904, 8904, PE8906, 8906, PE8910, 8910, PE8913, 8913, PE8915, 8915, PE8916, 8916, PE8940, 8940, PE8943, 8943, PE8944, 8944, PE8946, 8946, PE8973, 8973, PE8974, 8974, PE8975, 8975, PE8976, 8976, ",
        metadata: "Wide PE Series, Wide PE80 Series, PE, Wide PE, PE80 series, PE80, PE, PE80 Series, PE Series, Wide PE80, Wide Exit, Exit, Wide, Wide Exit Device, Exit Device, Device, 8900 PE8900, Wide MOrtise, Wide Mortise Exit, Wide Mortise Exit Device, Wide PE Mortise Exit, Wide PE Mortise Exit Device, 908, C908, 815, 908 Strike, C908 Strike, 815 Strike, 815 Open Strike, 815 Open Back Strike",
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
      trims: trimsString,

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
      text5:
        "View Wide Electrical Options Wiring Template (AL, 53, 55, 56, etc) Doc# MEDT17",
    },
    {
      device: "PE8900",

      title: "PE8900 Thumbpiece Trims",
      functions:
        "PE8904, PE8910, PE8928, PE8963, PE8966, ",
        metadata: "Wide PE Series, Wide PE80 Series, PE80 series, PE80, PE, PE80 Series, PE Series, MAL, FLL, FLW, STS, PTB, Thumb, Piece, Trim, Thumbpiece, Thumb-Piece, Thumbpiece Trim, Thumb-Piece Trim",
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
      trims: trimsString,

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
        "9404, 9410, 9400, ",
        metadata: "90 Series, Narrow 90 Series, 90, Narrow, CVR, Narrow CVR, Narrow CVR Exit Device, Exit, Device, Exit Device, Narrow CVR Exit, Concealed, Concealed Vertical Rod, Narrow Concealed Vertical Rod, Narrow Concealed Vertical Rod Exit Device, Night Latch, Exit Only, Night, Latch, Only, 704, 710, 704 ET, 710 ET",
      MechOptions: "12, 14, 23, 31, 36, 37, 42, 76, 85, 86, 87, CPC, SG, TB",
      ElecOptions: "54",
      CylOptions:
        "10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      railSizes: "E, F, J, G",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V",
      finishes:
        "03, US03, 04, US04, US09, 09, US10, 10, 10B, 10BE, 10BL, US14, US15, 20D, 26D, 26, 32, 32D, BSP, WSP, 605, 606, 611, 612, 613, 613E, 613L, 618, 619, 624, 625, 626, 629, 630",
      trims: trimsString,

      image: Images.narrowCVR9400,

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055979",
      text: "View Mounting Template (Metal Doors) Doc# 4580",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055978",
      text1:
        "View Cylinder Application (04 Function) Mounting Template Doc# 54581",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055977",
      text2: "View Bracket Mounting Template (Metal Doors) Doc# 4579",

      installation: [
        {
          device: "9400",
          title: "9400 Mounting Related Instructions",
          image: Images.narrowCVR9400,

          link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055348",
          text: "View 9400 Main Mounting Installation Instructions Doc# A7828",
          link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055355",
          text1: "View Trim Installation instructions Doc# A6374",
          link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055338",
          text2: "View Freewheeling Trim Installation instructions Doc# A6374",
          link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1055365",
          text3: "View Crossbar Assembly Installation Instructions Doc# MEMN4",
        },
        {
          device: "9400",
          title: "9400 Cylinder / Accessories Related Instructions",
          image: Images.narrowCVR9400,

          link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055300",
          text: "View 607 Locking Slide Replacement Kit for 90 Series Installation Instructions Doc# A7411",
          link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1054796",
          text1:
            "View 6300 Series Large Format Interchangeable Cores (LFIC) Cylinder Removal and Installation Instructions Doc# A5634",
          link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1054787",
          text2:
            "View Keso F1 170 Series (Mortise Cylinders) and 164 (Rim Cylinders) Removable Cylinder Installation Instructions Doc# A5687",
          link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1235473",
          text3:
            "View 90 Series ElectroLynx® Retrofit Kit Installation Instructions Doc# A7738",
        },
      ],
    },
  ],
  Wide90: [
    {
      device: "9700",

      title: "12-9700 SVR Exit (All Functions)",
      functions:
        "9706, 9710, 9713, 9715, 9728, 9763, 9773, 9774, ",
        metadata: "Wide, Wide 90 Series, 90 Series, 90, Wide SVR, Surface, Surface Vertical Rod, Vertical Rods, Rods, Wide Rod Device, 9700, Wide ROd Exit Device, Wide SVR Exit Device, Exit Device, Exit, Device, SVR, Vertical Rod, Class, Room, Store, Storeroom, Classroom, Store Room, Store-Room, Class-Room, Class Room, Passage, Electrified, ET, Eclectrified Trim, 773, 774",
      MechOptions: "12, 14, 23, 31, 36, 37, 42, 76, 85, 86, 87, CPC, SG, TB",
      ElecOptions: "54",
      CylOptions:
        "10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      railSizes: "E, F, J, G",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V",
      finishes:
        "03, US03, 04, US04, US09, 09, US10, 10, 10B, 10BE, 10BL, US14, US15, 20D, 26D, 26, 32, 32D, BSP, WSP, 605, 606, 611, 612, 613, 613E, 613L, 618, 619, 624, 625, 626, 629, 630",
      trims: trimsString,

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

      installation: [
        {
          device: "9700",
          title: "9700 Mounting Related Instructions",
          image: Images.crossWideSVR,

          link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055350",
          text: "View (12)9700 Main Mounting Installation Instructions Doc# A7828",
          link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055355",
          text1: "View Trim Installation instructions Doc# A6374",
          link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055338",
          text2: "View Freewheeling Trim Installation instructions Doc# A6374",
          link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1055365",
          text3: "View Crossbar Assembly Installation Instructions Doc# MEMN4",
        },
        {
          device: "9700",
          title: "9700 Cylinder / Accessories Related Instructions",
          image: Images.crossWideSVR,

          link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055300",
          text: "View 607 Locking Slide Replacement Kit for 90 Series Installation Instructions Doc# A7411",
          link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1054796",
          text1:
            "View 6300 Series Large Format Interchangeable Cores (LFIC) Cylinder Removal and Installation Instructions Doc# A5634",
          link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1054787",
          text2:
            "View Keso F1 170 Series (Mortise Cylinders) and 164 (Rim Cylinders) Removable Cylinder Installation Instructions Doc# A5687",
          link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1235473",
          text3:
            "View 90 Series ElectroLynx® Retrofit Kit Installation Instructions Doc# A7738",
          link4: "https://storage.googleapis.com/aa-americas/dam/AADSS1055284",
          text4:
            "View Flush Panel Mounting Strikes Installation Instructions Doc# MEMN1",
          link5: "https://storage.googleapis.com/aa-americas/dam/AADSS1055366",
          text5:
            "View Flush Panel Top Strikes Installation Instructions Doc# MEMN6",
          link6: "https://storage.googleapis.com/aa-americas/dam/AADSS1202287",
          text6:
            "View 570 and 571 Rod Connector/Extension Kits for 90 Series SVR Installation Instructions Doc# A6737",
        },
      ],
    },
    {
      device: "9700",

      title: "(13-)(14-)(16-)9700 SVR Exit (All Functions)",
      functions:
        "9706, 9710, 9713, 9715, 9728, 9763, 9773, 9774, ",
        metadata: "cross, crossbar, cross-bar, 300 Aux, 306 Aux, 313 Aux, 306, 313, Strike, 646, 624, 655, 646 Strike, 624 Strike, 655 Strike, Wide, Wide 90 Series, 90 Series, 90, Wide SVR, Surface, Surface Vertical Rod, Vertical Rods, Rods, Wide Rod Device, 9700, Wide ROd Exit Device, Wide SVR Exit Device, Exit Device, Exit, Device, SVR, Vertical Rod, Class, Room, Store, Storeroom, Classroom, Store Room, Store-Room, Class-Room, Class Room, Passage, Electrified, ET, Eclectrified Trim, 773, 774",
      MechOptions: "12, 14, 23, 31, 36, 37, 42, 76, 85, 86, 87, CPC, SG, TB",
      ElecOptions: "54",
      CylOptions:
        "10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      railSizes: "E, F, J, G",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V",
      finishes:
        "03, US03, 04, US04, US09, 09, US10, 10, 10B, 10BE, 10BL, US14, US15, 20D, 26D, 26, 32, 32D, BSP, WSP, 605, 606, 611, 612, 613, 613E, 613L, 618, 619, 624, 625, 626, 629, 630",
      trims: trimsString,

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
        "9710, 9728, 9763, ",
        metadata: "Thumb, Piece, Trim, ThumbPiece, Thumb-Piece, Thumb Piece, Thumb Piece Trim, MAL, FLL, FLW, PTB, STS",
      MechOptions: "12, 14, 23, 31, 36, 37, 42, 76, 85, 86, 87, CPC, SG, TB",
      ElecOptions: "54",
      CylOptions:
        "10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      railSizes: "E, F, J, G",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V",
      finishes:
        "03, US03, 04, US04, US09, 09, US10, 10, 10B, 10BE, 10BL, US14, US15, 20D, 26D, 26, 32, 32D, BSP, WSP, 605, 606, 611, 612, 613, 613E, 613L, 618, 619, 624, 625, 626, 629, 630",
      trims: trimsString,

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
        "9804, 9810, 9813, 9815, 9873. 9874, 9875, 9876, ",
        metadata: "90, 90 series, wide 90 series, cross, crossbar, cross-bar, Wide Rim, Wide Rim Exit, Wide Rim Exit Device, Wide Exit Device, Wide Exit, Exit, Device, Store, Class, Room, Classroom, Storeroom, Store Room, Class Room, Store-room, class-room, passage, electrified Trim, Electrified, trim, ET, 700 ET, 700",
      MechOptions: "12, 14, 23, 31, 36, 37, 42, 76, 85, 86, 87, CPC, SG, TB",
      ElecOptions: "54",
      CylOptions:
        "10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      railSizes: "E, F, J, G",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V",
      finishes:
        "03, US03, 04, US04, US09, 09, US10, 10, 10B, 10BE, 10BL, US14, US15, 20D, 26D, 26, 32, 32D, BSP, WSP, 605, 606, 611, 612, 613, 613E, 613L, 618, 619, 624, 625, 626, 629, 630",
      trims: trimsString,

      image: Images.crossWideRim,

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055984",
      text: "View Mounting Template Doc# 4207-J",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055922",
      text1: "View Trim Template (700 ET) Doc# 4277-18",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055928",
      text2: "View Electrified Trim Template (54-)700 ET Template Doc# 4314-T",
      link4: "https://storage.googleapis.com/aa-americas/dam/AADSS1055896",
      text4: "View 649 Standard Strike Template (Single Door) Doc# 4004-K",
      link5: "https://storage.googleapis.com/aa-americas/dam/AADSS1055985",
      text5: "View 613 Alternate Strike Template Doc# 3995-F",
      link6: "https://storage.googleapis.com/aa-americas/dam/AADSS1056005",
      text6: "View 642 Alternate Strike Template Doc# 4007-E",
      link7: "https://storage.googleapis.com/aa-americas/dam/AADSS1234418",
      text7: "View 644 Alternate Strike Template Doc# 3996-C",

      installation: [
        {
          device: "9800",
          title: "9800 Mounting Related Instructions",
          image: Images.crossWideRim,

          link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055367",
          text: "View (12)9800 Main Mounting Installation Instructions Doc# A7828",
          link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055355",
          text1: "View Trim Installation instructions Doc# A6374",
          link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055338",
          text2: "View Freewheeling Trim Installation instructions Doc# A6374",
          link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1055365",
          text3: "View Crossbar Assembly Installation Instructions Doc# MEMN4",
        },
        {
          device: "9800",
          title: "9800 Cylinder / Accessories Related Instructions",
          image: Images.crossWideRim,

          link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055300",
          text: "View 607 Locking Slide Replacement Kit for 90 Series Installation Instructions Doc# A7411",
          link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1054796",
          text1:
            "View 6300 Series Large Format Interchangeable Cores (LFIC) Cylinder Removal and Installation Instructions Doc# A5634",
          link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1054787",
          text2:
            "View Keso F1 170 Series (Mortise Cylinders) and 164 (Rim Cylinders) Removable Cylinder Installation Instructions Doc# A5687",
          link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1235473",
          text3:
            "View 90 Series ElectroLynx® Retrofit Kit Installation Instructions Doc# A7738",
        },
        {
          device: "9800",
          title: "9800 Mullion Related Instructions",
          image: Images.L980,

          link: "https://storage.googleapis.com/aa-americas/dam/AADSS1173182",
          text: "View 650A Installation Instructions Doc# A6580",
          link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055266",
          text1: "View L980 Installation Instructions Doc# A7102",
          link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055256",
          text2: "View (12-)HC980/HD980 Installation Instructions Doc# A5885",
          link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1055265",
          text3: "View L980S/12-L980 Installation Instructions Doc# A7111",
          link4: "https://storage.googleapis.com/aa-americas/dam/AADSS1055258",
          text4: "View EL980 Installation Instructions Doc# A7195",
          link5: "https://storage.googleapis.com/aa-americas/dam/AADSS1055263",
          text5: "View 980S/12-980 Installation Instructions Doc# A7688",
          link6: "https://storage.googleapis.com/aa-americas/dam/AADSS1055262",
          text6: "View (12-)HC-L980 Installation Instructions Doc# A7962",
          link7: "https://storage.googleapis.com/aa-americas/dam/AADSS1055255",
          text7:
            "View 12-HD980 STABALIZER Installation Instructions Doc# A7826",
          link8: "https://storage.googleapis.com/aa-americas/dam/AADSS1055285",
          text8: "View 651 STABALIZER Installation Instructions Doc# A6581",
        },
      ],
    },
    {
      device: "9800",

      title: "Thumbpiece Trims (04, 10, 28, 63)",
      functions:
        "9804, 9810, 9828, 9863, ",
        metadata: "Thumb, Piece, Trim, ThumbPiece, Thumb-Piece, Thumb Piece, Thumb Piece Trim, MAL, FLL, FLW, PTB, STS",
      MechOptions: "12, 14, 23, 31, 36, 37, 42, 76, 85, 86, 87, CPC, SG, TB",
      ElecOptions: "54",
      CylOptions:
        "10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      railSizes: "E, F, J, G",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V",
      finishes:
        "03, US03, 04, US04, US09, 09, US10, 10, 10B, 10BE, 10BL, US14, US15, 20D, 26D, 26, 32, 32D, BSP, WSP, 605, 606, 611, 612, 613, 613E, 613L, 618, 619, 624, 625, 626, 629, 630",
      trims: trimsString,

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
        "9904, 9910, 9913, 9915, 9973, 9974, 9975, 9976, ",
        metadata: "90, 90 Series, 90 Seriex Exit, 90 Series Exit Device, Exit, Device, Exit Device, Wide, Wide Exit, Wide Exit Device, Wide Mortise Exit Device, 90 series mortise exit, 90 series mortise exit device, mortise exit device, Store, Class, Room, Classroom, Storeroom, Store Room, Class Room, Store-room, class-room, passage, electrified Trim, Electrified, trim, ET, 700 ET, 700",
      MechOptions: "12, 14, 23, 31, 36, 37, 42, 76, 85, 86, 87, CPC, SG, TB",
      ElecOptions: "54",
      CylOptions:
        "10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      railSizes: "E, F, J, G",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V",
      finishes:
        "03, US03, 04, US04, US09, 09, US10, 10, 10B, 10BE, 10BL, US14, US15, 20D, 26D, 26, 32, 32D, BSP, WSP, 605, 606, 611, 612, 613, 613E, 613L, 618, 619, 624, 625, 626, 629, 630",
      trims: trimsString,

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
        "9904, 9910, 9928, 9963, ",
        metadata: "Thumb, Piece, Trim, ThumbPiece, Thumb-Piece, Thumb Piece, Thumb Piece Trim, MAL, FLL, FLW, PTB, STS",
      MechOptions: "12, 14, 23, 31, 36, 37, 42, 76, 85, 86, 87, CPC, SG, TB",
      ElecOptions: "54",
      CylOptions:
        "10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      railSizes: "E, F, J, G",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V",
      finishes:
        "03, US03, 04, US04, US09, 09, US10, 10, 10B, 10BE, 10BL, US14, US15, 20D, 26D, 26, 32, 32D, BSP, WSP, 605, 606, 611, 612, 613, 613E, 613L, 618, 619, 624, 625, 626, 629, 630",
      trims: trimsString,

      image: Images.thumbpieceTrims,

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055888",
      text: "View MAL Trim Template (810, 814, 828, 866) Doc# 4024-L",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055887",
      text1: "View FLL/FLW Trim Template (810, 814, 828, 866) Doc# 4257-D",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055891",
      text2: "View PTB Trim Template (810, 814, 828, 866) Doc# 4221-E",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1055892",
      text3: "View STS Trim Template (810, 814, 828, 866) Doc# 4021-G",

      installation: [
        {
          device: "9800",
          title: "9800 Mounting Related Instructions",
          image: Images.crossWideRim,

          link: "https://storage.googleapis.com/aa-americas/dam/AADSS1182247",
          text: "View (12)9900 Main Mounting Installation Instructions Doc# A7828",
          link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055355",
          text1: "View Trim Installation instructions Doc# A6374",
          link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055338",
          text2: "View Freewheeling Trim Installation instructions Doc# A6374",
          link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1055365",
          text3: "View Crossbar Assembly Installation Instructions Doc# MEMN4",
        },
        {
          device: "9800",
          title: "9800 Cylinder / Accessories Related Instructions",
          image: Images.crossWideRim,

          link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055300",
          text: "View 607 Locking Slide Replacement Kit for 90 Series Installation Instructions Doc# A7411",
          link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1054796",
          text1:
            "View 6300 Series Large Format Interchangeable Cores (LFIC) Cylinder Removal and Installation Instructions Doc# A5634",
          link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1054787",
          text2:
            "View Keso F1 170 Series (Mortise Cylinders) and 164 (Rim Cylinders) Removable Cylinder Installation Instructions Doc# A5687",
          link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1235473",
          text3:
            "View 90 Series ElectroLynx® Retrofit Kit Installation Instructions Doc# A7738",
        },
      ],
    },
  ],
  Wide20: [
    {
      device: "2727",

      title: "(12-) 2727 SVR Exit",
      functions:
        "2727, ",
        metadata: "GTB, HTB, 646 Strike, 646, 653 Strike, 653, 655 Strike, 655, Strike, 20, Series, SVR, 20 Series, 20 Series SVR, 20 Series Exit Device, Exit, Device, Surface Vertical Rod, Surface Vertical Rod Exit Device, SVR Exit Device",
      MechOptions: "12, LD",
      ElecOptions: "54",
      CylOptions:
        "10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, SF, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      railSizes: "E, F, J, G",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V",
      finishes:
        "03, US03, 04, US04, US10, 10, 10B, 10BE, 26D, BSP, WSP, 605, 606, 612, 613, 613E, 624, 626, EB, ED, EN, EP, EAB",
      trims: trimsString,

      image: Images.Exit2727,

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055991",
      text: "View Mounting Template with Knob or Lever Trim Doc# 4301-G",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1056001",
      text1: "View LL Lever Trim Template Doc# 4485-D",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055965",
      text2: "View 646/653/655 Strike Template Doc# 4413-B",
      link3: "https://www.sargentlock.com/en/view-pdf?id=AADSS1056004&page=1",
      text3: "View HTB/GTB Trim Template",

      installation: [
        {
          device: "2727",
          title: "2727 only Related Installation Instructions",
          image: Images.Exit2727,

          link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055274",
          text: "View Standard Installation Instructions Doc# A6187",
          link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055299",
          text1: "View Fire Rated (12-) Installation Instructions Doc# A6524",
        },
        {
          device: "2828",
          title: "2828 only Related Installation Instructions",
          image: Images.Exit2828,

          link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055277",
          text: "View Main Installation Instructions Doc# A6386",
          link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055263",
          text1:
            "View 980S/12-980 Mullion Installation Instructions Doc# A7688",
          link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055265",
          text2:
            "View L980S/12-L980 Mullion Installation Instructions Doc# A7111",
          link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1055266",
          text3:
            "View L980 (Aluminum) Mullion Installation Instructions Doc# A7102",
          link4: "https://storage.googleapis.com/aa-americas/dam/AADSS1055266",
          text4: "View EL980 Mullion Installation Instructions Doc# A7195",
          link5: "https://storage.googleapis.com/aa-americas/dam/AADSS1055358",
          text5: "View 601 Shim Kit Installation Instructions Doc# A7967",
        },
        {
          device: "2727",
          title: "Trim Related Installation Instructions",
          image: Images.Exit2727,

          link: "https://storage.googleapis.com/aa-americas/dam/AADSS1192859",
          text: "View 28 Series Lever and Rose Trim for 20 and 30 Series 2727/2828, 3727/3828 Rim, SVR Installation Instructions Doc# A7274",
          link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055357",
          text1:
            "View Thumbpiece Outside Trim for 20 and 30 Series Exit Devices Installation Instructions Doc# A7369",
        },
        {
          device: "2727",
          title: "Shared between 2727/2828 Installation Instructions",
          image: Images.Exit2727,

          link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055334",
          text: "View Through Bolt Application Installation Instructions Doc# A6190",
          link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055298",
          text1:
            "View Glass Bead Shim Kit Installation Instructions Doc# A7004",
          link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055298",
          text2:
            "View Glass Bead Shim Kit Installation Instructions Doc# A7004",
          link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1054796",
          text3:
            "View 6300 Series Large Format Interchangeable Cores (LFIC) Cylinder Removal and Installation Instructions Doc# A5634",
          link4: "https://storage.googleapis.com/aa-americas/dam/AADSS1055284",
          text4: "View Mounting Strikes Installation Instructions Doc# MEMN1",
          link5: "https://storage.googleapis.com/aa-americas/dam/AADSS1055366",
          text5:
            "View Flush Panel Top Strike Installation Instructions Doc# MEMN6",
        },
      ],
    },
    {
      device: "2828",

      title: "(12-)2828 Rim Exit",
      functions:
        "2828, ",
        metadata: "GTB, HTB, Rim, Exit, Rim Exit Device, Rim Exit, 20 Series, 20, series, 20 series rim, ",
      MechOptions: "12, LD",
      ElecOptions: "54",
      CylOptions:
        "10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, SF, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      railSizes: "E, F, J, G",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V",
      finishes:
        "03, US03, 04, US04, US10, 10, 10B, 10BE, 26D, BSP, WSP, 605, 606, 612, 613, 613E, 624, 626, EB, ED, EN, EP, EAB",
      trims: trimsString,

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
        "2828, ",
        metadata: "649 , 649 Strike, Strike, 613, 613 Strike, 644, 644 Strike, 642, 642 Strike, Strikes, Strike",
      MechOptions: "12, LD",
      ElecOptions: "54",
      CylOptions:
        "10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, SF, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      railSizes: "E, F, J, G",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V",
      finishes:
        "03, US03, 04, US04, US10, 10, 10B, 10BE, 26D, BSP, WSP, 605, 606, 612, 613, 613E, 624, 626, EB, ED, EN, EP, EAB",
      trims: trimsString,

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
      device: "30Series",

      title: "3727 SVR Exit Device",
      functions:
        "3737, ",
        metadata: "GTB, HTB, SVR, SVR Exit, SVR Exit Device, Exit, Device, Surface Vertical Rod, Exit Device, 646, 646 Strike, 653, 653 Strike, 655, 655 Strike, 30, 30 series, 30 series Exit, 30 series exit device",
      MechOptions: "12, LD, 16, NB",
      ElecOptions: "55",
      CylOptions:
        "10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, SF, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      railSizes: "E, F, J, G",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V",
      finishes:
        "03, US03, 04, US04, US10, 10, 10B, 10BE, 26D, BSP, WSP, 605, 606, 612, 613, 613E, 624, 626, EB, ED, EN, EP, EAB",
      trims: trimsString,

      image: Images.Exit3727,

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
      installation: [
        {
          device: "30Series",
          title: "30 Series Device/Mullion Instructions",
          image: Images.Exit3727,

          link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055253",
          text: "View (12-)3727, (12-)NB3727 Wide Stile SVR Installation Instructions Doc# A7426",
          link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055310",
          text1:
            "View 3828 Wide Stile Rim Installation Instructions Doc# A7424",
          link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055263",
          text2:
            "View 980S and 12-980 Steel Mullions for 30 Series Exit Devices Installation Instructions Doc# A7688",
          link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1055266",
          text3:
            "View L980 Mullion for 30 Series Exit Devices Installation Instructions Doc# A7102",
          link4: "https://storage.googleapis.com/aa-americas/dam/AADSS1055265",
          text4:
            "View L980S and 12-L980 Steel Mullions for 30 Series Exit Devices Installation Instructions Doc# A7111",
          link5: "https://storage.googleapis.com/aa-americas/dam/AADSS1055258",
          text5:
            "View EL980 Electric Lockable Non Fire-Rated Mullion for 30 Series Exit Devices Installation Instructions Doc# A7195",
        },
        {
          device: "30Series",
          title: "30 Series Trim Instructions",
          image: Images.Exit3727,

          link: "https://storage.googleapis.com/aa-americas/dam/AADSS1192859",
          text: "View 28 Series Lever and Rose Trim for 30 Series 3727/3828 SVR/Rim Installation Instructions Doc# A7274",
          link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055357",
          text1:
            "View Thumbpiece Outside Trim for 30 Series Exit Devices Installation Instructions Doc# A7369",
          link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1054796",
          text2:
            "View 6300 Series Large Format Interchangeable Cores (LFIC) Cylinder Removal and Installation Instructions Doc# A5634",
        },
        {
          device: "30Series",
          title: "30 Series Accessories Instructions",
          image: Images.Exit3727,

          link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055286",
          text: "View End Cap Mounting Plate for 30 Series Exit Devices Installation Instructions Doc# A5027",
          link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055298",
          text1:
            "View Glass Bead Shim Kit for 30 Series Exit Devices Installation Instructions Doc# A7004",
          link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055358",
          text2:
            "View 601 Shim Kit Rectangular Steel Mullions for 30 Series Exit Devices Installation Instructions Doc# A7967",
          link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1055284",
          text3:
            "View Exit Device Mounting Strikes Installation Instructions Doc# MEMN1",
          link4: "https://storage.googleapis.com/aa-americas/dam/AADSS1055366",
          text4:
            "View Mounting Flush Panel Top Strike Installation Instructions Doc# MEMN6",
        },
        {
          device: "30Series",
          title: "30 Series Parts/Catalog",
          image: Images.Exit3727,

          link: "https://storage.googleapis.com/aa-americas/dam/AADSS1062108",
          text: "View 20/30 Series Parts Manual Doc# A8273",
          link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1004786",
          text1: "View 30 Series Catalog Doc# 90126",
        },
      ],
    },
    {
      device: "30Series",

      title: "(12-)3828 Rim Exit Device",
      functions:
        "3828, ",
        metadata: "GTB, HTB, 30, 30 series, 30 series exit, 30 series exit device, 30 series rim exit, rim, exit, device, Rim Exit, Rim exit device",
      MechOptions: "12, LD, 16, NB",
      ElecOptions: "55",
      CylOptions:
        "10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, SF, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      railSizes: "E, F, J, G",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V",
      finishes:
        "03, US03, 04, US04, US10, 10, 10B, 10BE, 26D, BSP, WSP, 605, 606, 612, 613, 613E, 624, 626, EB, ED, EN, EP, EAB",
      trims: trimsString,

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
      MechOptions: "12, LD, 16, NB",
      ElecOptions: "55",
      CylOptions:
        "10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, SF, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      railSizes: "E, F, J, G",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V",
      finishes:
        "03, US03, 04, US04, US10, 10, 10B, 10BE, 26D, BSP, WSP, 605, 606, 612, 613, 613E, 624, 626, EB, ED, EN, EP, EAB",
      trims: trimsString,

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
  "KP 80": [
    {
      device: "KP8800",

      title: "KP 8800 Rim Exit Device",
      image: Images.wideStileRim,
      functions: "8877, 8878, KP8877, KP8878, ",
      metadata: "Fail, Secure, Safe, KP Series, 80 Series, KP Series 80, KP 80 Series, KP 80 Series Exit Device, KP 80 Series Rim Exit Device",
      MechOptions:
        "KP, 12, 16, 19, 23, 25, 29, 36, 37, 41, 75, 76, 77, 85, 86, 87, CPC, SG, 18, WR, FW",
      ElecOptions: "91, IPV, BIPS, IKPV, BIKPS, BCP, BCKP, DIPS, DIKPS, B, MB",
      CylOptions:
        "BR, KD, LC, 30, SF, YC, YC-7P, YRC, SC, SE, 10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      railSizes: "E, F, J, G",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V",
      finishes:
        "03, US03, 04, US04, US09, 09, US10, 10, 10B, 10BE, 10BL, US14, US15, 20D, 26D, 26, 32, 32D, BSP, WSP, 605, 606, 611, 612, 613, 613E, 613L, 618, 619, 624, 625, 626, 629, 630",
      trims: trimsString,

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055594",
      text: "View Metal and Wood Doors Mounting Template Doc# 4474",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1054957",
      text1: "View Full Device Installation Instructions Doc# A7137",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1054988",
      text2:
        "View 52-2847 Weather Seal Conduit Installation Instructions Doc# A7721",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1055024",
      text3:
        "View Door Position Switch (Frame) Installation Instructions Doc# A7983",
      link4: "https://storage.googleapis.com/aa-americas/dam/AADSS1055023",
      text4:
        "View Door Position Switch (Frame) Installation Instructions Doc# A8005",
      link5: "https://storage.googleapis.com/aa-americas/dam/AADSS1179497",
      text5:
        "View Controller Replacement 52-6085 Installation Instructions Doc# A8288",
      link6: "https://storage.googleapis.com/aa-americas/dam/AADSS1179499",
      text6:
        "View Weatherization Kit 52-6084 Installation Instructions Doc# A8289",
    },
    {
      device: "KP8900",

      title: "KP 8900 Mortise Exit Device",
      image: Images.wideMortise,
      functions: "8977, 8978, KP8977, KP8978, ",
      metadata: "Fail, Secure, Safe, Mortise, KP Series, 80 Series",
      MechOptions:
        "KP, 12, 16, 19, 23, 25, 29, 36, 37, 41, 75, 76, 77, 85, 86, 87, CPC, SG, 18, WR, FW",
      ElecOptions: "91, IPV, BIPS, IKPV, BIKPS, BCP, BCKP, DIPS, DIKPS, B, MB",
      CylOptions:
        "BR, KD, LC, 30, SF, YC, YC-7P, YRC, SC, SE, 10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      railSizes: "E, F, J, G",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V",
      finishes:
        "03, US03, 04, US04, US09, 09, US10, 10, 10B, 10BE, 10BL, US14, US15, 20D, 26D, 26, 32, 32D, BSP, WSP, 605, 606, 611, 612, 613, 613E, 613L, 618, 619, 624, 625, 626, 629, 630",
      trims: trimsString,

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055595",
      text: "View Metal and Wood Doors Mounting Template Doc# 4477",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1054957",
      text1: "View Full Device Installation Instructions Doc# A7137",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1054988",
      text2:
        "View 52-2847 Weather Seal Conduit Installation Instructions Doc# A7721",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1055024",
      text3:
        "View Door Position Switch (Frame) Installation Instructions Doc# A7983",
      link4: "https://storage.googleapis.com/aa-americas/dam/AADSS1055023",
      text4:
        "View Door Position Switch (Frame) Installation Instructions Doc# A8005",
      link5: "https://storage.googleapis.com/aa-americas/dam/AADSS1179497",
      text5:
        "View Controller Replacement 52-6085 Installation Instructions Doc# A8288",
      link6: "https://storage.googleapis.com/aa-americas/dam/AADSS1179499",
      text6:
        "View Weatherization Kit 52-6084 Installation Instructions Doc# A8289",
    },
  ],
  "KP PE80": [
    {
      device: "KPPE8800",

      title: "KP PE8800 Rim Exit Device",
      image: Images.wideStileRim,
      functions:
        "8877, 8878, KP8877, KP8878, ",
        metadata: "KP, PE, PE8878, PE8877, Fail, Secure, Safe, KP Series, PE Series",
      MechOptions:
        "KP, 12, 16, 19, 23, 25, 29, 36, 37, 41, 75, 76, 77, 85, 86, 87, CPC, SG, 18, WR, FW",
      ElecOptions: "91, IPV, BIPS, IKPV, BIKPS, BCP, BCKP, DIPS, DIKPS, B, MB",
      CylOptions:
        "BR, KD, LC, 30, SF, YC, YC-7P, YRC, SC, SE, 10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      railSizes: "E, F, J, G",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V",
      finishes:
        "03, US03, 04, US04, US09, 09, US10, 10, 10B, 10BE, 10BL, US14, US15, 20D, 26D, 26, 32, 32D, BSP, WSP, 605, 606, 611, 612, 613, 613E, 613L, 618, 619, 624, 625, 626, 629, 630",
      trims: trimsString,

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1238428",
      text: "View Metal and Wood Doors Mounting Template Doc# MEDT58",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1054957",
      text1: "View Full Device Installation Instructions Doc# A7137",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1054988",
      text2:
        "View 52-2847 Weather Seal Conduit Installation Instructions Doc# A7721",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1055024",
      text3:
        "View Door Position Switch (Frame) Installation Instructions Doc# A7983",
      link4: "https://storage.googleapis.com/aa-americas/dam/AADSS1055023",
      text4:
        "View Door Position Switch (Hinge) Installation Instructions Doc# A8005",
      link5: "https://storage.googleapis.com/aa-americas/dam/AADSS1179497",
      text5:
        "View Controller Replacement 52-6085 Installation Instructions Doc# A8288",
      link6: "https://storage.googleapis.com/aa-americas/dam/AADSS1179499",
      text6:
        "View Weatherization Kit 52-6084 Installation Instructions Doc# A8289",
    },
    {
      device: "KPPE8900",

      title: "KP PE8900 Mortise Exit Device",
      image: Images.wideMortise,
      functions:
        "8977, 8978, KP8977, KP8978, ",
        metadata: "KP, PE, PE8977, PE8978, Fail, Secure, Safe, KP Series, PE Series",
      MechOptions:
        "KP, 12, 16, 19, 23, 25, 29, 36, 37, 41, 75, 76, 77, 85, 86, 87, CPC, SG, 18, WR, FW",
      ElecOptions: "91, IPV, BIPS, IKPV, BIKPS, BCP, BCKP, DIPS, DIKPS, B, MB",
      CylOptions:
        "BR, KD, LC, 30, SF, YC, YC-7P, YRC, SC, SE, 10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      railSizes: "E, F, J, G",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V",
      finishes:
        "03, US03, 04, US04, US09, 09, US10, 10, 10B, 10BE, 10BL, US14, US15, 20D, 26D, 26, 32, 32D, BSP, WSP, 605, 606, 611, 612, 613, 613E, 613L, 618, 619, 624, 625, 626, 629, 630",
      trims: trimsString,

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1238412",
      text: "View Mounting Template Doc# MEDT42",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1238429",
      text1: "View IN Series Trim Template Doc# MEDT59",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1054957",
      text2: "View Full Device Installation Instructions Doc# A7137",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1054988",
      text3:
        "View 52-2847 Weather Seal Conduit Installation Instructions Doc# A7721",
      link4: "https://storage.googleapis.com/aa-americas/dam/AADSS1055024",
      text4:
        "View Door Position Switch (Frame) Installation Instructions Doc# A7983",
      link5: "https://storage.googleapis.com/aa-americas/dam/AADSS1055023",
      text5:
        "View Door Position Switch (Hinge) Installation Instructions Doc# A8005",
      link6: "https://storage.googleapis.com/aa-americas/dam/AADSS1179497",
      text6:
        "View Controller Replacement 52-6085 Installation Instructions Doc# A8288",
      link7: "https://storage.googleapis.com/aa-americas/dam/AADSS1179499",
      text7:
        "View Weatherization Kit 52-6084 Installation Instructions Doc# A8289",
    },
  ],
  "IN 80": [
    {
      device: "IN8800",

      title: "IN (100, 120, 220) 8800 Rim",
      functions: "8877, 8878, ",
      metadata: "Fail, Secure, Safe, IN Series, 100, 120, 220",
      image: Images.IN120Rim,

      MechOptions:
        "IN120, IN, 100, 120, 220, 29, WBS, 20, 23, 25, 36, 37, 41, 75, 76, 77, 85, 86, 87, CPC, SG, T1, T2, T3, FW, KD, EA",
      ElecOptions:
        "AL, 53, W53, 54, W54, 55, W55, 55-ERM, ERM, W55-ERM, W55, 56, 56-HK, 58, 59, WH",
      CylOptions:
        "BR, KD, LC, 30, SF, YC, YC-7P, YRC, SC, SE, 10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      railSizes: "E, F, J, G",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V",
      finishes:
        "03, US03, 04, US04, US09, 09, US10, 10, 10B, 10BE, 10BL, US14, US15, 20D, 26D, 26, 32, 32D, BSP, WSP, 605, 606, 611, 612, 613, 613E, 613L, 618, 619, 624, 625, 626, 629, 630",
      trims: trimsString,

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1177255",
      text: "View Metal and Wood Door Mounting Template Doc# 4714",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1177257",
      text1:
        "View Von Duprin 98/99Mounting Template (Metal and Wood) Doc# 4734",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1066679",
      text2: "View Main Installation Instructions Doc# A8185",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1254871",
      text3:
        "View 98/99 Von Durpin Retrofit Instalation Instructions Doc# A8229",
      link4: "https://storage.googleapis.com/aa-americas/dam/AADSS1055024",
      text4:
        "View Door Position Switch (Frame) Installation Instructions Doc# A7983",
      link5: "https://storage.googleapis.com/aa-americas/dam/AADSS1055023",
      text5:
        "View Door Position Switch (Hinge) Installation Instructions Doc# A8005",
      link6: "https://storage.googleapis.com/aa-americas/dam/AADSS1190724",
      text6:
        "View IN120 and Passport 1000 P2 Series WiFi-Enabled Products (91-) Hard Powering Instructions Doc# WFMN10A",
    },
    {
      device: "IN8900",

      title: "IN (100, 120, 220) 8900 Mortise",
      functions: "8977, 8978, ",
      metadata: "Fail, Secure, Safe, IN Series, 100, 120, 220",
      image: Images.IN120Mortise,

      MechOptions:
        "IN120, IN, 100, 120, 220, 29, WBS, 20, 23, 25, 36, 37, 41, 75, 76, 77, 85, 86, 87, CPC, SG, T1, T2, T3, FW, KD, EA",
      ElecOptions:
        "AL, 53, W53, 54, W54, 55, W55, 55-ERM, ERM, W55-ERM, W55, 56, 56-HK, 58, 59, WH",
      CylOptions:
        "BR, KD, LC, 30, SF, YC, YC-7P, YRC, SC, SE, 10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      railSizes: "E, F, J, G",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V",
      finishes:
        "03, US03, 04, US04, US09, 09, US10, 10, 10B, 10BE, 10BL, US14, US15, 20D, 26D, 26, 32, 32D, BSP, WSP, 605, 606, 611, 612, 613, 613E, 613L, 618, 619, 624, 625, 626, 629, 630",
      trims: trimsString,

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1177256",
      text: "View Mounting Template (Metal and Wood) Doc# 4717",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1066679",
      text2: "View Main Installation Instructions Doc# A8185",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1254871",
      text3:
        "View 98/99 Von Durpin Retrofit Instalation Instructions Doc# A8229",
      link4: "https://storage.googleapis.com/aa-americas/dam/AADSS1055024",
      text4:
        "View Door Position Switch (Frame) Installation Instructions Doc# A7983",
      link5: "https://storage.googleapis.com/aa-americas/dam/AADSS1055023",
      text5:
        "View Door Position Switch (Hinge) Installation Instructions Doc# A8005",
      link6: "https://storage.googleapis.com/aa-americas/dam/AADSS1190724",
      text6:
        "View IN120 and Passport 1000 P2 Series WiFi-Enabled Products (91-) Hard Powering Instructions Doc# WFMN10A",
    },
  ],
  "IN PE80": [
    {
      device: "INPE8600",

      title: "IN120 PE8600 CVR",
      functions: "8678, PE8678",
      metadata: "PE, Fail, Secure, Safe, IN Series, 100, 120, 220",
      image: Images.IN120,

      MechOptions:
        "IN120, IN, 100, 120, 220, 29, WBS, 20, 23, 25, 36, 37, 41, 75, 76, 77, 85, 86, 87, CPC, SG, T1, T2, T3, FW, KD, EA",
      ElecOptions: "91, IPV, BIPS, IKPV, BIKPS, BCP, BCKP, DIPS, DIKPS, B, MB",
      CylOptions:
        "BR, KD, LC, 30, SF, YC, YC-7P, YRC, SC, SE, 10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      railSizes: "E, F, J, G",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V",
      finishes:
        "03, US03, 04, US04, US09, 09, US10, 10, 10B, 10BE, 10BL, US14, US15, 20D, 26D, 26, 32, 32D, BSP, WSP, 605, 606, 611, 612, 613, 613E, 613L, 618, 619, 624, 625, 626, 629, 630",
      trims: trimsString,

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1238403",
      text: "View Standard Device Mounting Template (Wood) Doc# MEDT3",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1238379",
      text1: "View Standard Device Mounting Template (Metal) Doc# MEDT4",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1238438",
      text2: "View IN Series Trim Template (STD/EA Option) Doc# MEDT68",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1238382",
      text3: "View P106/P113 Aux Control Template Doc# MEDT7",
      link4: "https://storage.googleapis.com/aa-americas/dam/AADSS1238384",
      text4: "View 650/652 Strike Template Doc# MEDT9",
      link5: "https://storage.googleapis.com/aa-americas/dam/AADSS1254871",
      text5:
        "View 98/99 Von Durpin Retrofit Instalation Instructions Doc# A8229",
      link6: "https://storage.googleapis.com/aa-americas/dam/AADSS1055024",
      text6:
        "View Door Position Switch (Frame) Installation Instructions Doc# A7983",
      link7: "https://storage.googleapis.com/aa-americas/dam/AADSS1055023",
      text7:
        "View Door Position Switch (Hinge) Installation Instructions Doc# A8005",
      link8: "https://storage.googleapis.com/aa-americas/dam/AADSS1190724",
      text8:
        "View IN120 and Passport 1000 P2 Series WiFi-Enabled Products (91-) Hard Powering Instructions Doc# WFMN10A",
    },
    {
      device: "INPE8700",

      title: "IN120 PE8700 SVR",
      functions: "8778, PE8778",
      metadata: "PE, Fail, Secure, Safe, IN Series, 100, 120, 220",
      image: Images.IN120,

      MechOptions:
        "IN120, IN, 100, 120, 220, 29, WBS, 20, 23, 25, 36, 37, 41, 75, 76, 77, 85, 86, 87, CPC, SG, T1, T2, T3, FW, KD, EA",
      ElecOptions: "91, IPV, BIPS, IKPV, BIKPS, BCP, BCKP, DIPS, DIKPS, B, MB",
      CylOptions:
        "BR, KD, LC, 30, SF, YC, YC-7P, YRC, SC, SE, 10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      railSizes: "E, F, J, G",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V",
      finishes:
        "03, US03, 04, US04, US09, 09, US10, 10, 10B, 10BE, 10BL, US14, US15, 20D, 26D, 26, 32, 32D, BSP, WSP, 605, 606, 611, 612, 613, 613E, 613L, 618, 619, 624, 625, 626, 629, 630",
      trims: trimsString,

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1238386",
      text: "View Standard Mounting Template (Metal and Wood Door) Doc# MEDT12",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1238387",
      text1:
        "View Fire Rated (12-) Mounting Template (Metal and Wood) Doc# MEDT13",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1238439",
      text2: "View IN Series Trim Template Doc# MEDT69",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1238401",
      text3: "View 648 Top Strike Template Doc# MEDT31",
      link4: "https://storage.googleapis.com/aa-americas/dam/AADSS1238400",
      text4: "View 624/655 Bottom Strike Template Doc# MEDT30",
      link5: "https://storage.googleapis.com/aa-americas/dam/AADSS1055962",
      text5: "View 306/313 Auxiliary Control Template Doc# 4214",
      link6: "https://storage.googleapis.com/aa-americas/dam/AADSS1066679",
      text6: "View Main Installation Instructions Doc# A8185",
      link7: "https://storage.googleapis.com/aa-americas/dam/AADSS1254871",
      text7:
        "View 98/99 Von Durpin Retrofit Instalation Instructions Doc# A8229",
      link8: "https://storage.googleapis.com/aa-americas/dam/AADSS1055024",
      text8:
        "View Door Position Switch (Frame) Installation Instructions Doc# A7983",
      link9: "https://storage.googleapis.com/aa-americas/dam/AADSS1055023",
      text9:
        "View Door Position Switch (Hinge) Installation Instructions Doc# A8005",
      link10: "https://storage.googleapis.com/aa-americas/dam/AADSS1190724",
      text10:
        "View IN120 and Passport 1000 P2 Series WiFi-Enabled Products (91-) Hard Powering Instructions Doc# WFMN10A",
    },
    {
      device: "INPE8800",

      title: "IN120 PE8800 Rim",
      functions: "8877, 8878, PE8877, PE8878",
      metadata: "PE, Fail, Secure, Safe, IN Series, 100, 120, 220",
      image: Images.IN120,

      MechOptions:
        "IN120, IN, 100, 120, 220, 29, WBS, 20, 23, 25, 36, 37, 41, 75, 76, 77, 85, 86, 87, CPC, SG, T1, T2, T3, FW, KD, EA",
      ElecOptions: "91, IPV, BIPS, IKPV, BIKPS, BCP, BCKP, DIPS, DIKPS, B, MB",
      CylOptions:
        "BR, KD, LC, 30, SF, YC, YC-7P, YRC, SC, SE, 10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      railSizes: "E, F, J, G",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V",
      finishes:
        "03, US03, 04, US04, US09, 09, US10, 10, 10B, 10BE, 10BL, US14, US15, 20D, 26D, 26, 32, 32D, BSP, WSP, 605, 606, 611, 612, 613, 613E, 613L, 618, 619, 624, 625, 626, 629, 630",
      trims: trimsString,

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1238414",
      text: "View Mounting Template (Any Material) Doc# MEDT44",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1238423",
      text1: "View IN Series Trim Template (Metal and Wood) Doc# MEDT53",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1066679",
      text2: "View Main Installation Instructions Doc# A8185",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1254871",
      text3:
        "View 98/99 Von Durpin Retrofit Instalation Instructions Doc# A8229",
      link4: "https://storage.googleapis.com/aa-americas/dam/AADSS1055024",
      text4:
        "View Door Position Switch (Frame) Installation Instructions Doc# A7983",
      link5: "https://storage.googleapis.com/aa-americas/dam/AADSS1055023",
      text5:
        "View Door Position Switch (Hinge) Installation Instructions Doc# A8005",
      link6: "https://storage.googleapis.com/aa-americas/dam/AADSS1190724",
      text6:
        "View IN120 and Passport 1000 P2 Series WiFi-Enabled Products (91-) Hard Powering Instructions Doc# WFMN10A",
    },
    {
      device: "INPE8900",

      title: "IN120 PE8900 Mortise",
      functions: "8977, 8978, PE8977, ",
      metadata: "PE, Fail, Secure, Safe, IN Series, 100, 120, 220",
      image: Images.IN120,

      MechOptions:
        "IN120, IN, 100, 120, 220, 29, WBS, 20, 23, 25, 36, 37, 41, 75, 76, 77, 85, 86, 87, CPC, SG, T1, T2, T3, FW, KD, EA",
      ElecOptions: "91, IPV, BIPS, IKPV, BIKPS, BCP, BCKP, DIPS, DIKPS, B, MB",
      CylOptions:
        "BR, KD, LC, 30, SF, YC, YC-7P, YRC, SC, SE, 10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      railSizes: "E, F, J, G",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V",
      finishes:
        "03, US03, 04, US04, US09, 09, US10, 10, 10B, 10BE, 10BL, US14, US15, 20D, 26D, 26, 32, 32D, BSP, WSP, 605, 606, 611, 612, 613, 613E, 613L, 618, 619, 624, 625, 626, 629, 630",
      trims: trimsString,

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1238412",
      text: "View Mounting Template (Any Material) Doc# 4714",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1217883",
      text1: "View IN Series Trim Template (Metal and Wood) Doc# MEDT54",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1238420",
      text2: "View 908/C908 Strike Template Doc# MEDT50",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1238419",
      text3: "View 815 Open Back Strike Template Doc# MEDT49",
      link4: "https://storage.googleapis.com/aa-americas/dam/AADSS1066679",
      text4: "View Main Installation Instructions Doc# A8185",
      link5: "https://storage.googleapis.com/aa-americas/dam/AADSS1254871",
      text5:
        "View 98/99 Von Durpin Retrofit Instalation Instructions Doc# A8229",
      link6: "https://storage.googleapis.com/aa-americas/dam/AADSS1055024",
      text6:
        "View Door Position Switch (Frame) Installation Instructions Doc# A7983",
      link7: "https://storage.googleapis.com/aa-americas/dam/AADSS1055023",
      text7:
        "View Door Position Switch (Hinge) Installation Instructions Doc# A8005",
      link8: "https://storage.googleapis.com/aa-americas/dam/AADSS1190724",
      text8:
        "View IN120 and Passport 1000 P2 Series WiFi-Enabled Products (91-) Hard Powering Instructions Doc# WFMN10A",
    },
  ],
  "SN 80": [
    {
      device: "SN8600",
      title: "SN Series 8600 CVR Exit (200, 210)",
      functions: "8673, 8674, 8606, 8610, 8613, 8646, 8640, 8643, ",
      metadata: "Fail, Secure, Safe, SN Series, 200, 210",
      image: Images.SN200ET,

      MechOptions:
        "SN, 210, 200, SN200, SN210, 12, 14, 16, LD, 19, 23, 25, 29, 36, 37, 41, 43, 75, 76, 77, 85, 86, 87, CPC, SG, NB, PL, TB, HC, HC4, WS, FW",
      ElecOptions:
        "03, 0E, 04, 0D, 0F, 0G, 0H91, IPV, BIS, BIKS, BIPS, BIKPS, FIKPS, FIPS, BIPS, IKPV, BIKPS, BCP, BCKP, DIPS, DIKPS, B, MB",
      CylOptions:
        "47, BR, KD, LC, 30, SF, YC, YC-7P, YRC, SC, SE, 10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      railSizes: "E, F, J, G",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V",
      finishes:
        "03, US03, 04, US04, US09, 09, US10, 10, 10B, 10BE, 10BL, US14, US15, 20D, 26D, 26, 32, 32D, BSP, WSP, 605, 606, 611, 612, 613, 613E, 613L, 618, 619, 624, 625, 626, 629, 630",
      trims: trimsString,

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055627",
      text: "View SN Series for Metal and Wood Doors Template Doc# 4704",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1217883",
      text1:
        "View SN Series with 56- Electric Latch Retraction Installation Instructions Doc# A8284",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055024",
      text2:
        "View Door Position Switch (Frame) Installation Instructions Doc# A7983",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1055023",
      text3:
        "View Door Position Switch (Hinge) Installation Instructions Doc# A8005",
    },
    {
      device: "SN8700",
      title: "SN Series 8700 SVR Exit (200, 210)",
      functions: "8773, 8774, 8706, 8710, 8713, 8746, 8740, 8743, ",
      metadata: "Fail, Secure, Safe, SN Series, 200, 210",
      image: Images.SN200ET,

      MechOptions:
        "SN, 210, 200, SN200, SN210, 12, 14, 16, LD, 19, 23, 25, 29, 36, 37, 41, 43, 75, 76, 77, 85, 86, 87, CPC, SG, NB, PL, TB, HC, HC4, WS, FW",
      ElecOptions:
        "03, 0E, 04, 0D, 0F, 0G, 0H91, IPV, BIS, BIKS, BIPS, BIKPS, FIKPS, FIPS, BIPS, IKPV, BIKPS, BCP, BCKP, DIPS, DIKPS, B, MB",
      CylOptions:
        "47, BR, KD, LC, 30, SF, YC, YC-7P, YRC, SC, SE, 10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      railSizes: "E, F, J, G",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V",
      finishes:
        "03, US03, 04, US04, US09, 09, US10, 10, 10B, 10BE, 10BL, US14, US15, 20D, 26D, 26, 32, 32D, BSP, WSP, 605, 606, 611, 612, 613, 613E, 613L, 618, 619, 624, 625, 626, 629, 630",
      trims: trimsString,

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055628",
      text: "View SN Series for Metal and Wood Doors ((NB)8700 NEW STYLE) Template Doc# 4705",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055630",
      text1:
        "View SN Series for Metal and Wood Doors (NB8700 OLD STYLE) Template Doc# 4706",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1217883",
      text2:
        "View SN Series with 56- Electric Latch Retraction Installation Instructions Doc# A8284",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1055024",
      text3:
        "View Door Position Switch (Frame) Installation Instructions Doc# A7983",
      link4: "https://storage.googleapis.com/aa-americas/dam/AADSS1055023",
      text4:
        "View Door Position Switch (Hinge) Installation Instructions Doc# A8005",
    },
    {
      device: "SN8800",
      title: "SN Series 8800 Rim Exit (200, 210)",
      functions:
        "8873, 8874, 8875, 8876, 8804, 8806, 8810, 8813, 8844, 8846, 8843",
      metadata: "Fail, Secure, Safe, SN Series, 200, 210",
      image: Images.SN200ET,

      MechOptions:
        "SN, 210, 200, SN200, SN210, 12, 14, 16, LD, 19, 23, 25, 29, 36, 37, 41, 43, 75, 76, 77, 85, 86, 87, CPC, SG, NB, PL, TB, HC, HC4, WS, FW",
      ElecOptions:
        "03, 0E, 04, 0D, 0F, 0G, 0H91, IPV, BIS, BIKS, BIPS, BIKPS, FIKPS, FIPS, BIPS, IKPV, BIKPS, BCP, BCKP, DIPS, DIKPS, B, MB",
      CylOptions:
        "47, BR, KD, LC, 30, SF, YC, YC-7P, YRC, SC, SE, 10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      railSizes: "E, F, J, G",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V",
      finishes:
        "03, US03, 04, US04, US09, 09, US10, 10, 10B, 10BE, 10BL, US14, US15, 20D, 26D, 26, 32, 32D, BSP, WSP, 605, 606, 611, 612, 613, 613E, 613L, 618, 619, 624, 625, 626, 629, 630",
      trims: trimsString,

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1086701",
      text: "View SN Series for Metal and Wood Doors Template Doc# 4707",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1217883",
      text1:
        "View SN Series with 56- Electric Latch Retraction Installation Instructions Doc# MEDT54",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055024",
      text2:
        "View Door Position Switch (Frame) Installation Instructions Doc# A7983",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1055023",
      text3:
        "View Door Position Switch (Hinge) Installation Instructions Doc# A8005",
    },
    {
      device: "SN8900",
      title: "SN Series 8900 Mortise Exit (200, 210)",
      functions:
        "8973, 8974, 8975, 8976, 8904, 8906, 8910, 8913, 8944, 8946, 8943",
      metadata: "Fail, Secure, Safe, SN Series, 200, 210",
      image: Images.SN200ET,

      MechOptions:
        "SN, 210, 200, SN200, SN210, 12, 14, 16, LD, 19, 23, 25, 29, 36, 37, 41, 43, 75, 76, 77, 85, 86, 87, CPC, SG, NB, PL, TB, HC, HC4, WS, FW",
      ElecOptions:
        "03, 0E, 04, 0D, 0F, 0G, 0H91, IPV, BIS, BIKS, BIPS, BIKPS, FIKPS, FIPS, BIPS, IKPV, BIKPS, BCP, BCKP, DIPS, DIKPS, B, MB",
      CylOptions:
        "47, BR, KD, LC, 30, SF, YC, YC-7P, YRC, SC, SE, 10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      railSizes: "E, F, J, G",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V",
      finishes:
        "03, US03, 04, US04, US09, 09, US10, 10, 10B, 10BE, 10BL, US14, US15, 20D, 26D, 26, 32, 32D, BSP, WSP, 605, 606, 611, 612, 613, 613E, 613L, 618, 619, 624, 625, 626, 629, 630",
      trims: trimsString,

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055629",
      text: "View SN Series for Metal and Wood Doors Template Doc# 4708",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1217883",
      text1:
        "View SN Series with 56- Electric Latch Retraction Installation Instructions Doc# MEDT54",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055024",
      text2:
        "View Door Position Switch (Frame) Installation Instructions Doc# A7983",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1055023",
      text3:
        "View Door Position Switch (Hinge) Installation Instructions Doc# A8005",
    },
  ],
  "SN PE80": [
    {
      device: "SNPE8600",
      title: "SN Series PE8600 CVR Exit",
      image: Images.SNPE8600,
      functions:
        "8673, 8674, 8606, 8610, 8613, 8646, 8640, 8643, PE, PE8673, PE8674, PE8606, PE8610, PE8613, PE8646, PE8640, PE8643",
      metadata: "PE, Fail, Secure, Safe, SN Series, 200, 210",

      MechOptions:
        "SN, 210, 200, SN200, SN210, 12, 14, 16, LD, 19, 23, 25, 29, 36, 37, 41, 43, 75, 76, 77, 85, 86, 87, CPC, SG, NB, PL, TB, HC, HC4, WS, FW",
      ElecOptions:
        "03, 0E, 04, 0D, 0F, 0G, 0H91, IPV, BIS, BIKS, BIPS, BIKPS, FIKPS, FIPS, BIPS, IKPV, BIKPS, BCP, BCKP, DIPS, DIKPS, B, MB",
      CylOptions:
        "47, BR, KD, LC, 30, SF, YC, YC-7P, YRC, SC, SE, 10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      railSizes: "E, F, J, G",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V",
      finishes:
        "03, US03, 04, US04, US09, 09, US10, 10, 10B, 10BE, 10BL, US14, US15, 20D, 26D, 26, 32, 32D, BSP, WSP, 605, 606, 611, 612, 613, 613E, 613L, 618, 619, 624, 625, 626, 629, 630",
      trims: trimsString,

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1238404",
      text: "View SN Series for Metal and Wood Doors Template Doc# MEDT34",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1217883",
      text1:
        "View SN Series with 56- Electric Latch Retraction Installation Instructions Doc# MEDT54",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055024",
      text2:
        "View Door Position Switch (Frame) Installation Instructions Doc# A7983",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1055023",
      text3:
        "View Door Position Switch (Hinge) Installation Instructions Doc# A8005",
    },
    {
      device: "SNPE8700",
      title: "SN Series PE8600 CVR Exit",
      image: Images.SNPETRIM,
      functions:
        "8773, 8774, 8706, 8710, 8713, 8746, 8740, 8743, PE, PE8773, PE8674, PE8706, PE8670, PE8713, PE8746, PE8740, PE8743",
      metadata: "PE, Fail, Secure, Safe, SN Series, 200, 210",
      MechOptions:
        "SN, 210, 200, SN200, SN210, 12, 14, 16, LD, 19, 23, 25, 29, 36, 37, 41, 43, 75, 76, 77, 85, 86, 87, CPC, SG, NB, PL, TB, HC, HC4, WS, FW",
      ElecOptions:
        "03, 0E, 04, 0D, 0F, 0G, 0H91, IPV, BIS, BIKS, BIPS, BIKPS, FIKPS, FIPS, BIPS, IKPV, BIKPS, BCP, BCKP, DIPS, DIKPS, B, MB",
      CylOptions:
        "47, BR, KD, LC, 30, SF, YC, YC-7P, YRC, SC, SE, 10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      railSizes: "E, F, J, G",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V",
      finishes:
        "03, US03, 04, US04, US09, 09, US10, 10, 10B, 10BE, 10BL, US14, US15, 20D, 26D, 26, 32, 32D, BSP, WSP, 605, 606, 611, 612, 613, 613E, 613L, 618, 619, 624, 625, 626, 629, 630",
      trims: trimsString,

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1238385",
      text: "View SN Series for Metal and Wood Doors Template (PE8700) Doc# MEDT11",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1238425",
      text1:
        "View SN Series for Metal and Wood Doors Template (NB-PE8700) Doc# MEDT55",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1217883",
      text2:
        "View SN Series with 56- Electric Latch Retraction Installation Instructions Doc# MEDT54",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1055024",
      text3:
        "View Door Position Switch (Frame) Installation Instructions Doc# A7983",
      link4: "https://storage.googleapis.com/aa-americas/dam/AADSS1055023",
      text4:
        "View Door Position Switch (Hinge) Installation Instructions Doc# A8005",
    },
    {
      device: "SNPE8800",
      title: "SN Series PE8800 Rim Exit",
      image: Images.SNPETRIM,
      functions:
        "8873, 8874, 8875, 8876, 8804, 8806, 8810, 8813, 8844, 8846, 8843, PE, PE8873, PE8874, PE8875, PE8876, PE8804, PE8806, PE8810, PE8813, PE8840, PE8843, PE8844, PE8846",
      metadata: "PE, Fail, Secure, Safe, SN Series, 200, 210",
      MechOptions:
        "SN, 210, 200, SN200, SN210, 12, 14, 16, LD, 19, 23, 25, 29, 36, 37, 41, 43, 75, 76, 77, 85, 86, 87, CPC, SG, NB, PL, TB, HC, HC4, WS, FW",
      ElecOptions:
        "03, 0E, 04, 0D, 0F, 0G, 0H91, IPV, BIS, BIKS, BIPS, BIKPS, FIKPS, FIPS, BIPS, IKPV, BIKPS, BCP, BCKP, DIPS, DIKPS, B, MB",
      CylOptions:
        "47, BR, KD, LC, 30, SF, YC, YC-7P, YRC, SC, SE, 10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      railSizes: "E, F, J, G",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V",
      finishes:
        "03, US03, 04, US04, US09, 09, US10, 10, 10B, 10BE, 10BL, US14, US15, 20D, 26D, 26, 32, 32D, BSP, WSP, 605, 606, 611, 612, 613, 613E, 613L, 618, 619, 624, 625, 626, 629, 630",
      trims: trimsString,

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1238440",
      text: "View SN Series for Metal and Wood Doors Template Doc# MEDT56",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1217883",
      text1:
        "View SN Series with 56- Electric Latch Retraction Installation Instructions Doc# MEDT54",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055024",
      text2:
        "View Door Position Switch (Frame) Installation Instructions Doc# A7983",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1055023",
      text3:
        "View Door Position Switch (Hinge) Installation Instructions Doc# A8005",
    },
    {
      device: "SNPE8900",
      title: "SN Series PE8900 Mortise Exit",
      image: Images.SNPE8900,
      functions:
        "8973, 8974, 8975, 8976, 8904, 8906, 8910, 8913, 8944, 8946, 8943, PE, PE8973, PE8974, PE8975, PE8976, PE8904, PE8906, PE8910, PE8913, PE8940, PE8943, PE8944, PE8946",
      metadata: "PE, Fail, Secure, Safe, SN Series, 200, 210",
      MechOptions:
        "SN, 210, 200, SN200, SN210, 12, 14, 16, LD, 19, 23, 25, 29, 36, 37, 41, 43, 75, 76, 77, 85, 86, 87, CPC, SG, NB, PL, TB, HC, HC4, WS, FW",
      ElecOptions:
        "03, 0E, 04, 0D, 0F, 0G, 0H91, IPV, BIS, BIKS, BIPS, BIKPS, FIKPS, FIPS, BIPS, IKPV, BIKPS, BCP, BCKP, DIPS, DIKPS, B, MB",
      CylOptions:
        "47, BR, KD, LC, 30, SF, YC, YC-7P, YRC, SC, SE, 10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, BR, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      railSizes: "E, F, J, G",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V",
      finishes:
        "03, US03, 04, US04, US09, 09, US10, 10, 10B, 10BE, 10BL, US14, US15, 20D, 26D, 26, 32, 32D, BSP, WSP, 605, 606, 611, 612, 613, 613E, 613L, 618, 619, 624, 625, 626, 629, 630",
      trims: trimsString,

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1238427",
      text: "View SN Series for Metal and Wood Doors Template Doc# MEDT57",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1217883",
      text1:
        "View SN Series with 56- Electric Latch Retraction Installation Instructions Doc# MEDT54",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055024",
      text2:
        "View Door Position Switch (Frame) Installation Instructions Doc# A7983",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1055023",
      text3:
        "View Door Position Switch (Hinge) Installation Instructions Doc# A8005",
    },
  ],
};
