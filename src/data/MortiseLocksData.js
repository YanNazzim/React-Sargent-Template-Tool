/* Device Images */
import { Images } from "../images/images";

const roseTrims = [
  "ALP",
  "BHW",
  "BHL",
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
  "LS",
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


/* MortiseLocksData.js */
export const MortiseLocks = {
  8200: [
    {
      device: "8200",
      title: "W/ Sectional Trims",
      image: Images.Mortise8200,
      functions:
        "8204, 8205, 8206, 8213, 8215, 8216, 8217, 8224, 8225, 8226, 8227, 8228, 8229, 8230, 8231, 8235, 8236, 8237, 8238, 8239, 8240, 8241, 8242, 8243, 8245, 8246, 8247, 8248, 8249, 8250, 8251, 8252, 8255, 8256, 8257, 8258, 8259, 8265, 8266, 8267, 8268, 8270, 8271, 8272, 8273, 82270, 82271, 82274, 82275, 82280, 82281, 82284, 82285",
        MechOptions:
        "1, 3, 23, WBS, OBS, 31, 36, 37, 49, 50, V10, V20, V30, V40, V50, V60, V01, V03, V04, V06, V11, V21, V33, V44, V54, V66, V10F, V20F, V01F, V11F, V21F, EMA, EMB, EMC, 68, 69, 74, 75, 76, 77, 85, 86, 87, AV, CPC, SG, LB, T1, T2, T3",
      ElecOptions: "56, DX, RX, LX, TL",
      CylOptions:
        "10, 10-21, 21, 22, 10-63, 11, 11-21, 11-60, 11-63, 51, 52, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 80, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, SF, BR, KD, 30, VC, YC, YRC, YRC-7P, YC-7P, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG1-78, 78, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      finishes:
        "03, US03, 10BE, 32D, 605, 613E, 630, 04, US04, 606, 09, US09, 611, 10, 612, US10, 10B, 613, 10BE, 613E, 10BL, 614, 14, US14, 618, 15, US15, 619, 20D, 624, 26, 625, 26D, BSP, WSP",
      trims: trimsString,

      text: "View Mounting Template Doc# 7057-30",
      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055660",
      text1: "View Rose Trim Template (CR, E, L, LN, O, SL, SN, TR) Doc# 4555",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1056022",
      text2: "View (50-) Mounting Template Doc# 7682-A",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1056033",
      text3: "View Thumbturn Template Doc# 7059-B",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1056032",
    },
    {
      device: "8200",
      title: "W/ Escutcheon Trims",
      image: Images.Mortise8200,
      functions:
        "8204, 8205, 8206, 8213, 8215, 8216, 8217, 8224, 8225, 8226, 8227, 8228, 8229, 8230, 8231, 8235, 8236, 8237, 8238, 8239, 8240, 8241, 8242, 8243, 8245, 8246, 8247, 8248, 8249, 8250, 8251, 8252, 8255, 8256, 8257, 8258, 8259, 8265, 8266, 8267, 8268, 8270, 8271, 8272, 8273, 82270, 82271, 82274, 82275, 82280, 82281, 82284, 82285",
        MechOptions:
        "1, 3, 23, WBS, OBS, 31, 36, 37, 49, 50, V10, V20, V30, V40, V50, V60, V01, V03, V04, V06, V11, V21, V33, V44, V54, V66, V10F, V20F, V01F, V11F, V21F, EMA, EMB, EMC, 68, 69, 74, 75, 76, 77, 85, 86, 87, AV, CPC, SG, LB, T1, T2, T3",
      ElecOptions: "56, DX, RX, LX, TL",
      CylOptions:
        "10, 10-21, 21, 22, 10-63, 11, 11-21, 11-60, 11-63, 51, 52, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 80, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, SF, BR, KD, 30, VC, YC, YRC, YRC-7P, YC-7P, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG1-78, 78, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      finishes:
        "03, US03, 10BE, 32D, 605, 613E, 630, 04, US04, 606, 09, US09, 611, 10, 612, US10, 10B, 613, 10BE, 613E, 10BL, 614, 14, US14, 618, 15, US15, 619, 20D, 624, 26, 625, 26D, BSP, WSP",
      trims: trimsString,

      text: "View Mounting Template Doc# 7057-30",
      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055660",
      text1:
        "View LE1, LE3, LW1, CE, TE, KE1, KE3, KW1 Trim Template Doc# 7052-E",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1056024",
      warning: "",
      text2: "View LE2, LE4, KE2, KE4 Trim Template Doc# 7053-D",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1056025",
      text3: "View LS & KS Trim Template Doc# 7054-C",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1056043",
      text4: "View WT Trim Template Doc# 7055-B",
      link4: "https://storage.googleapis.com/aa-americas/dam/AADSS1056027",
    },
    {
      device: "8200",
      title: "8200 Strikes",
      image: Images.Strike82007800,

      warning:
        "Right Click on picture -> Open image in new tab to see more details",
      text: "Curved or Straight Lip Strikes Template Doc# 7063",
      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055593",
      text1:
        "78-0034 Deadbolt Strike 03, 20, 21, 22, and 23 Functions Template",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055661",
    },
    {
      device: "8200",
      title: "Roseless (R8200)",
      image: Images.MortiseRoselessTrim,
      functions:
        "8204, 8205, 8206, 8213, 8215, 8216, 8217, 8224, 8225, 8226, 8227, 8228, 8229, 8230, 8231, 8235, 8236, 8237, 8238, 8239, 8240, 8241, 8242, 8243, 8245, 8246, 8247, 8248, 8249, 8250, 8251, 8252, 8255, 8256, 8257, 8258, 8259, 8265, 8266, 8267, 8268, 8270, 8271, 8272, 8273, 82270, 82271, 82274, 82275, 82280, 82281, 82284, 82285",
        MechOptions:
        "1, 3, 23, WBS, OBS, 31, 36, 37, 49, 50, V10, V20, V30, V40, V50, V60, V01, V03, V04, V06, V11, V21, V33, V44, V54, V66, V10F, V20F, V01F, V11F, V21F, EMA, EMB, EMC, 68, 69, 74, 75, 76, 77, 85, 86, 87, AV, CPC, SG, LB, T1, T2, T3",
      ElecOptions: "56, DX, RX, LX, TL",
      CylOptions:
        "10, 10-21, 21, 22, 10-63, 11, 11-21, 11-60, 11-63, 51, 52, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 80, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, SF, BR, KD, 30, VC, YC, YRC, YRC-7P, YC-7P, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG1-78, 78, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      finishes:
        "03, US03, 10BE, 32D, 605, 613E, 630, 04, US04, 606, 09, US09, 611, 10, 612, US10, 10B, 613, 10BE, 613E, 10BL, 614, 14, US14, 618, 15, US15, 619, 20D, 624, 26, 625, 26D, BSP, WSP",
      trims: trimsString,

      text: "View Roseless Mortise Template Doc# 4647-B",
      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1056034",
    },

    {
      device: "8200",
      functions:
        "8270, 8271, 8272, 8273, 82270, 82271, 82274, 82275, 82280, 82281, 82284, 82285, NAC",
        MechOptions:
        "1, 3, 23, WBS, OBS, 31, 36, 37, 49, 50, V10, V20, V30, V40, V50, V60, V01, V03, V04, V06, V11, V21, V33, V44, V54, V66, V10F, V20F, V01F, V11F, V21F, EMA, EMB, EMC, 68, 69, 74, 75, 76, 77, 85, 86, 87, AV, CPC, SG, LB, T1, T2, T3",
      ElecOptions: "56, DX, RX, LX, TL",
      CylOptions:
        "10, 10-21, 21, 22, 10-63, 11, 11-21, 11-60, 11-63, 51, 52, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 80, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, SF, BR, KD, 30, VC, YC, YRC, YRC-7P, YC-7P, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG1-78, 78, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      finishes:
        "03, US03, 10BE, 32D, 605, 613E, 630, 04, US04, 606, 09, US09, 611, 10, 612, US10, 10B, 613, 10BE, 613E, 10BL, 614, 14, US14, 618, 15, US15, 619, 20D, 624, 26, 625, 26D, BSP, WSP",
      trims: trimsString,

      title: "8200 Elecrified Lock (70, 71, 72, 73, NAC)",
      image: Images.MortiseElectrified8200,
      warning: "Ensure proper wiring setup.",
      text: "View Lockbody Template (70, 71, 71, 72, 73, NAC Functions) Doc# 7065",
      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1056016",
      text1: "View Mounting Template (W/ Trim + Wiring) Doc# 7057",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055660",
    },
    {
      device: "8200",
      functions:
        "8220, 8221, 8222, 8224, 8225, 8226, 8228, 8229, 8230, 8239, 8240, 8241, 8243, 8245, 8246, 8247, 8250, 8251, 8252, PHR-NAC-82281",
        MechOptions:
        "1, 3, 23, WBS, OBS, 31, 36, 37, 49, 50, V10, V20, V30, V40, V50, V60, V01, V03, V04, V06, V11, V21, V33, V44, V54, V66, V10F, V20F, V01F, V11F, V21F, EMA, EMB, EMC, 68, 69, 74, 75, 76, 77, 85, 86, 87, AV, CPC, SG, LB, T1, T2, T3",
      ElecOptions: "56, DX, RX, LX, TL",
      CylOptions:
        "10, 10-21, 21, 22, 10-63, 11, 11-21, 11-60, 11-63, 51, 52, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 80, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, SF, BR, KD, 30, VC, YC, YRC, YRC-7P, YC-7P, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG1-78, 78, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      finishes:
        "03, US03, 10BE, 32D, 605, 613E, 630, 04, US04, 606, 09, US09, 611, 10, 612, US10, 10B, 613, 10BE, 613E, 10BL, 614, 14, US14, 618, 15, US15, 619, 20D, 624, 26, 625, 26D, BSP, WSP",
      trims: trimsString,

      title: "Sectional Indicator Packs",
      image: Images.MortiseIndicatorSA190,
      text: "View Mounting Template for SA190 Indicator",
      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1081720",
    },

    {
      device: "8200",
      functions:
        "8205, 8212, 8220, 8221, 8222, 8224, 8225, 8226, 8228, 8229, 8230, 8236, 8237, 8238, 8239, 8240, 8241, 8242, 8243, 8245, 8246, 8247, 8250, 8251, 8252, 8256, 8257, 8258, 8259, 8265, 8266, 8267, 8268, NAC-PHR-82281, NAC-PHR-82285",
        MechOptions:
        "1, 3, 23, WBS, OBS, 31, 36, 37, 49, 50, V10, V20, V30, V40, V50, V60, V01, V03, V04, V06, V11, V21, V33, V44, V54, V66, V10F, V20F, V01F, V11F, V21F, EMA, EMB, EMC, 68, 69, 74, 75, 76, 77, 85, 86, 87, AV, CPC, SG, LB, T1, T2, T3",
      ElecOptions: "56, DX, RX, LX, TL",
      CylOptions:
        "10, 10-21, 21, 22, 10-63, 11, 11-21, 11-60, 11-63, 51, 52, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 80, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, SF, BR, KD, 30, VC, YC, YRC, YRC-7P, YC-7P, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG1-78, 78, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      finishes:
        "03, US03, 10BE, 32D, 605, 613E, 630, 04, US04, 606, 09, US09, 611, 10, 612, US10, 10B, 613, 10BE, 613E, 10BL, 614, 14, US14, 618, 15, US15, 619, 20D, 624, 26, 625, 26D, BSP, WSP",
      trims: trimsString,

      title: "VN1 Escutcheon Indicator",
      image: Images.MortiseIndicatorVN1,
      text: "View Mounting Template for VN1 Escutcheon Indicator",
      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1081719",
    },
    {
      device: "8200",
      image: Images.Mortise8200BHW,
      functions:
        "8204, 8205, 8215, 8216, 8217, 8224, 8225, 8226, 8227, 8228, 8229, 8230, 8237, 8238, 8239, 8240, 8241, 8242, 8243, 8245, 8246, 8247, 8248, 8249, 8250, 8251, 8252, 8255, 8256, 8257, 8258, 8259, 8265, 8266, 8267, 8268, 8270, 8271, 8272, 8273, 82270, 82271, 82274, 82275, 82280, 82281, 82284, 82285",
        MechOptions:
        "1, 3, 23, WBS, OBS, 31, 36, 37, 49, 50, V10, V20, V30, V40, V50, V60, V01, V03, V04, V06, V11, V21, V33, V44, V54, V66, V10F, V20F, V01F, V11F, V21F, EMA, EMB, EMC, 68, 69, 74, 75, 76, 77, 85, 86, 87, AV, CPC, SG, LB, T1, T2, T3",
      ElecOptions: "56, DX, RX, LX, TL",
      CylOptions:
        "10, 10-21, 21, 22, 10-63, 11, 11-21, 11-60, 11-63, 51, 52, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 80, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, SF, BR, KD, 30, VC, YC, YRC, YRC-7P, YC-7P, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG1-78, 78, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      finishes:
        "03, US03, 10BE, 32D, 605, 613E, 630, 04, US04, 606, 09, US09, 611, 10, 612, US10, 10B, 613, 10BE, 613E, 10BL, 614, 14, US14, 618, 15, US15, 619, 20D, 624, 26, 625, 26D, BSP, WSP",
      trims: trimsString,

      title: "8200 W/ BHW Trim",

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1056030",
      text: "View BHW 8200 Template (Metal & Wood) Doc# 4711",
    },
    {
      device: "8200",
      image: Images.Mortise8200BHL,
      functions:
        "8204, 8205, 8215, 8216, 8217, 8224, 8225, 8226, 8227, 8228, 8229, 8230, 8236, 8237, 8238, 8239, 8240, 8241, 8242, 8243, 8245, 8246, 8247, 8248, 8249, 8250, 8251, 8252, 8255, 8256, 8257, 8258, 8259, 8265, 8266, 8267, 8268, 8270, 8271, 8272, 8273",
        MechOptions:
        "1, 3, 23, WBS, OBS, 31, 36, 37, 49, 50, V10, V20, V30, V40, V50, V60, V01, V03, V04, V06, V11, V21, V33, V44, V54, V66, V10F, V20F, V01F, V11F, V21F, EMA, EMB, EMC, 68, 69, 74, 75, 76, 77, 85, 86, 87, AV, CPC, SG, LB, T1, T2, T3",
      ElecOptions: "56, DX, RX, LX, TL",
      CylOptions:
        "10, 10-21, 21, 22, 10-63, 11, 11-21, 11-60, 11-63, 51, 52, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 80, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, SF, BR, KD, 30, VC, YC, YRC, YRC-7P, YC-7P, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG1-78, 78, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      finishes:
        "03, US03, 10BE, 32D, 605, 613E, 630, 04, US04, 606, 09, US09, 611, 10, 612, US10, 10B, 613, 10BE, 613E, 10BL, 614, 14, US14, 618, 15, US15, 619, 20D, 624, 26, 625, 26D, BSP, WSP",
      trims: trimsString,

      title: "8200 W/ BHL Trim",

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1056029",
      text: "View BHL 8200 Template (Metal & Wood) Doc# 4745",
    },
    {
      device: "8200",
      image: Images.ALP8200,
      functions:
        "8204, 8205, 8206, 8213, 8215, 8216, 8217, 8224, 8225, 8226, 8227, 8228, 8229, 8230, 8231, 8235, 8236, 8237, 8238, 8239, 8240, 8241, 8242, 8243, 8245, 8246, 8247, 8248, 8249, 8250, 8251, 8252, 8255, 8256, 8257, 8258, 8259, 8265, 8266, 8267, 8268, 8270, 8271, 8272, 8273",
        MechOptions:
        "1, 3, 23, WBS, OBS, 31, 36, 37, 49, 50, V10, V20, V30, V40, V50, V60, V01, V03, V04, V06, V11, V21, V33, V44, V54, V66, V10F, V20F, V01F, V11F, V21F, EMA, EMB, EMC, 68, 69, 74, 75, 76, 77, 85, 86, 87, AV, CPC, SG, LB, T1, T2, T3",
      ElecOptions: "56, DX, RX, LX, TL",
      CylOptions:
        "10, 10-21, 21, 22, 10-63, 11, 11-21, 11-60, 11-63, 51, 52, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 80, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, SF, BR, KD, 30, VC, YC, YRC, YRC-7P, YC-7P, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG1-78, 78, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      finishes:
        "03, US03, 10BE, 32D, 605, 613E, 630, 04, US04, 606, 09, US09, 611, 10, 612, US10, 10B, 613, 10BE, 613E, 10BL, 614, 14, US14, 618, 15, US15, 619, 20D, 624, 26, 625, 26D, BSP, WSP",
      trims: trimsString,

      title: "8200 W/ ALP Trim",

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1056029",
      text: "View ALP 8200 Template (Metal & Wood) Doc# 4745",
    },
  ],
  9200: [
    {
      device: "9200",
      image: Images.Mortise9200,
      functions:
        "9204, 9205, 9206, 9237, 9255, 9224, 9225, 9235, 9243, 9245, 9250, 9216, 9217, 9238, 9259, 9226, 9239, 9240, 9241, 9249, 9215, 9265, 9266, 9203, 9220, 9221, 9222, 9223, Mortise Lock, Mortise",
        MechOptions:
        "3, 23, WBS, OBS, 31, 36, 37, 67, 68, 69, 74, 75, 76, 77, 85, 86, 87, AV, M, CPC, SG, LB, T1, T2, T3",
      ElecOptions: "56, DX, RX, LX, TL",
      CylOptions:
        "10, 10-21, 21, 22, 10-63, 11, 11-21, 11-60, 11-63, 51, 52, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 80, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, SF, BR, KD, 30, VC, YC, YRC, YRC-7P, YC-7P, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG1-78, 78, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      finishes:
        "03, US03, 10BE, 32D, 605, 613E, 630, 04, US04, 606, 09, US09, 611, 10, 612, US10, 10B, 613, 10BE, 613E, 10BL, 614, 14, US14, 618, 15, US15, 619, 20D, 624, 26, 625, 26D, BSP, WSP",
      trims: trimsString,

      title: "9200 W/ Rose",

      text: "View Lockbody Mounting Template Doc# 4482",
      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1056041",
      text1: "View Rose Trim Template (CR, E, L, LN, O, SL, SN, TR) Doc# 4555",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1056022",
    },
    {
      device: "9200",

      title: "9200 W/ Escutcheon Trims",
      functions:
        "9204, 9205, 9206, 9237, 9255, 9224, 9225, 9235, 9243, 9245, 9250, 9216, 9217, 9238, 9259, 9226, 9239, 9240, 9241, 9249, 9215, 9265, 9266, 9203, 9220, 9221, 9222, 9223, Mortise Lock, Mortise",
        MechOptions:
        "3, 23, WBS, OBS, 31, 36, 37, 67, 68, 69, 74, 75, 76, 77, 85, 86, 87, AV, M, CPC, SG, LB, T1, T2, T3",
      ElecOptions: "56, DX, RX, LX, TL",
      CylOptions:
        "10, 10-21, 21, 22, 10-63, 11, 11-21, 11-60, 11-63, 51, 52, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 80, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, SF, BR, KD, 30, VC, YC, YRC, YRC-7P, YC-7P, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG1-78, 78, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      finishes:
        "03, US03, 10BE, 32D, 605, 613E, 630, 04, US04, 606, 09, US09, 611, 10, 612, US10, 10B, 613, 10BE, 613E, 10BL, 614, 14, US14, 618, 15, US15, 619, 20D, 624, 26, 625, 26D, BSP, WSP",
      trims: trimsString,

      image: Images.MortiseEscutcheon9200,
      text: "View Metal and Wood Doors Mounting Template Doc# 7057",
      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055660",
      text1: "Escutcheon Trim (CE, LE1, TE) Exposed Screws Template Doc# 4556",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1056042",
      text2: "Escutcheon Trim (LE2) Concealed Screws Template Doc# 4557",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1056023",
      text3:
        "Escutcheon Trim (WT) AV Anti-Vandal Trim Option Surface Applied Template Doc# 4558",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1056021",
      text4:
        "Escutcheon Trim (LE1, LE3, LW1, CE, TE, KE1, KE3, KW1) Exposed Screws Template Doc# 7052",
      link4: "https://storage.googleapis.com/aa-americas/dam/AADSS1056024",
      text5:
        "Escutcheon Trim (LE2, LE4, KE2, KE4) Concealed Screws Template Doc# 7053",
      link5: "https://storage.googleapis.com/aa-americas/dam/AADSS1056025",
      text6:
        "Security Escutcheon Trim (LS and KS) (Security Screws) Spanner Head Template",
      link6: "https://storage.googleapis.com/aa-americas/dam/AADSS1056043",
    },
    {
      device: "9200",

      title: "9200 Mortise Lock - Electrified",
      image: Images.Mortise9200,
      functions: "9270, 9271, 9272, 9273",
      MechOptions:
      "3, 23, WBS, OBS, 31, 36, 37, 67, 68, 69, 74, 75, 76, 77, 85, 86, 87, AV, M, CPC, SG, LB, T1, T2, T3",
    ElecOptions: "56, DX, RX, LX, TL",
    CylOptions:
      "10, 10-21, 21, 22, 10-63, 11, 11-21, 11-60, 11-63, 51, 52, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 80, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, SF, BR, KD, 30, VC, YC, YRC, YRC-7P, YC-7P, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG1-78, 78, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
    finishes:
      "03, US03, 10BE, 32D, 605, 613E, 630, 04, US04, 606, 09, US09, 611, 10, 612, US10, 10B, 613, 10BE, 613E, 10BL, 614, 14, US14, 618, 15, US15, 619, 20D, 624, 26, 625, 26D, BSP, WSP",
    trims: trimsString,

      text: "View Mounting Template (70, 71, 71, 72, 73, NAC Functions) Doc# 7065",
      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1056016",
      text1: "Curved or Straight Lip Strikes (M-)9200 Template Doc# 7063",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055593",
      text2:
        "78-0034 Deadbolt Strike (M-)9200 03, 20, 21, 22, and 23 Functions Template Doc# 7064",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055661",
      warning: "",
    },
    {
      device: "9200",

      title: "9200 Strikes",
      image: Images.Strikes9200,

      text: "Curved or Straight Lip Strikes (M-)9200 Template Doc# 7063",
      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055593",
      text1:
        "78-0034 Deadbolt Strike (M-)9200 03, 20, 21, 22, and 23 Functions Template",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055661",
    },
    {
      device: "9200",

      image: Images.Mortise8200BHW,
      functions:
        "9215, 9265, 9266, 9204, 9205, 9237, 9255, 9224, 9225, 9243, 9245, 9250, 9216, 9217, 9238, 9259, 9226, 9239, 9240, 9241, 9249, 9270, 9271, 9272, 9273, Mortise Lock, Mortise",
        MechOptions:
        "3, 23, WBS, OBS, 31, 36, 37, 67, 68, 69, 74, 75, 76, 77, 85, 86, 87, AV, M, CPC, SG, LB, T1, T2, T3",
      ElecOptions: "56, DX, RX, LX, TL",
      CylOptions:
        "10, 10-21, 21, 22, 10-63, 11, 11-21, 11-60, 11-63, 51, 52, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 80, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, SF, BR, KD, 30, VC, YC, YRC, YRC-7P, YC-7P, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG1-78, 78, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      finishes:
        "03, US03, 10BE, 32D, 605, 613E, 630, 04, US04, 606, 09, US09, 611, 10, 612, US10, 10B, 613, 10BE, 613E, 10BL, 614, 14, US14, 618, 15, US15, 619, 20D, 624, 26, 625, 26D, BSP, WSP",
      trims: trimsString,

      title: "9200 W/ BHW Trim",

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1056030",
      text: "View BHW 9200 Template (Metal & Wood) Doc# 4711",
    },
    {
      device: "9200",

      image: Images.BHD9200,
      functions:
        "9215, 9265, 9266, 9204, 9205, 9206, 9237, 9255, 9224, 9225, 9235, 9243, 9245, 9250, 9216, 9217, 9238, 9259, 9226, 9239, 9240, 9241, 9249, 9270, 9271, 9272, 9273, Mortise Lock, Mortise",
        MechOptions:
        "3, 23, WBS, OBS, 31, 36, 37, 67, 68, 69, 74, 75, 76, 77, 85, 86, 87, AV, M, CPC, SG, LB, T1, T2, T3",
      ElecOptions: "56, DX, RX, LX, TL",
      CylOptions:
        "10, 10-21, 21, 22, 10-63, 11, 11-21, 11-60, 11-63, 51, 52, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 80, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, SF, BR, KD, 30, VC, YC, YRC, YRC-7P, YC-7P, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG1-78, 78, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      finishes:
        "03, US03, 10BE, 32D, 605, 613E, 630, 04, US04, 606, 09, US09, 611, 10, 612, US10, 10B, 613, 10BE, 613E, 10BL, 614, 14, US14, 618, 15, US15, 619, 20D, 624, 26, 625, 26D, BSP, WSP",
      trims: trimsString,

      title: "9200 W/ BHD Trim",

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1056029",
      text: "View BHD 9200 Template (Metal & Wood) Doc# 4745",
    },
  ],
  M9200: [
    {
      device: "M9200",
      image: Images.MortiseM9200,
      functions:
        "M-9204, M9204, M-9205, M9205, M-9206, M9206, M-9237, M9237, M-9255, M9255, M-9224, M9224, M-9225, M9225, M-9235, M9235, M-9243, M9243, M-9245, M9245, M-9217, M9217, M-9238, M9238, M-9239, M9239, M-9240, M9240, M-9203, M9203, M-9220, M9220, M-9221, M9221, M-9222, M9222, M-9223, M9223, ",
        MechOptions:
        "3, 23, WBS, OBS, 31, 36, 37, 67, 68, 69, 74, 75, 76, 77, 85, 86, 87, AV, M, CPC, SG, LB, T1, T2, T3",
      ElecOptions: "56, DX, RX, LX, TL",
      CylOptions:
        "10, 10-21, 21, 22, 10-63, 11, 11-21, 11-60, 11-63, 51, 52, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 80, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, SF, BR, KD, 30, VC, YC, YRC, YRC-7P, YC-7P, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG1-78, 78, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      finishes:
        "03, US03, 10BE, 32D, 605, 613E, 630, 04, US04, 606, 09, US09, 611, 10, 612, US10, 10B, 613, 10BE, 613E, 10BL, 614, 14, US14, 618, 15, US15, 619, 20D, 624, 26, 625, 26D, BSP, WSP",
      trims: trimsString,

      title: "M9200",

      text: "View Mounting Template Doc# 4483",
      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1056039",
      text1: "View Rose Trim Template (L, LN, SN, and SL) Doc# 4513",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1056040",
      text2: "Curved or Straight Lip Strikes (M-)9200 Template Doc# 7063",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055593",
      text3:
        "78-0034 Deadbolt Strike (M-)9200 03, 20, 21, 22, and 23 Functions Template Doc# 7064",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1055661",
    },
    {
      device: "M9200",
      MechOptions:
      "3, 23, WBS, OBS, 31, 36, 37, 67, 68, 69, 74, 75, 76, 77, 85, 86, 87, AV, M, CPC, SG, LB, T1, T2, T3",
    ElecOptions: "56, DX, RX, LX, TL",
    CylOptions:
      "10, 10-21, 21, 22, 10-63, 11, 11-21, 11-60, 11-63, 51, 52, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 80, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, SF, BR, KD, 30, VC, YC, YRC, YRC-7P, YC-7P, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG1-78, 78, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
    finishes:
      "03, US03, 10BE, 32D, 605, 613E, 630, 04, US04, 606, 09, US09, 611, 10, 612, US10, 10B, 613, 10BE, 613E, 10BL, 614, 14, US14, 618, 15, US15, 619, 20D, 624, 26, 625, 26D, BSP, WSP",
    trims: trimsString,

      title: "M9200 Strikes",
      image: Images.Strikes9200,

      text: "Curved or Straight Lip Strikes (M-)9200 Template Doc# 7063",
      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055593",
      text1:
        "78-0034 Deadbolt Strike (M-)9200 03, 20, 21, 22, and 23 Functions Template",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055661",
    },
  ],
  7800: [
    {
      device: "7800",

      title: "W/ Sectional",
      image: Images.Mortise7800,
      functions:
        "7804, 7805, 7806, 7813, 7815, 7816, 7817, 7824, 7825, 7826, 7827, 7828, 7829, 7830, 7831, 7835, 7836, 7837, 7838, 7839, 7840, 7841, 7842, 7843, 7845, 7846, 7847, 7848, 7849, 7850, 7851, 7852, 7855, 7856, 7857, 7858, 7859, 7865, 7866, 7867, 7868, 7870, 7871, 7872, 7873, 78270, 78271, 78274, 78275, 78280, 78281, 78284, 78285",
        MechOptions:
        "1, 3, 23, WBS, OBS, 31, 36, 37, 49, 50, V10, V20, V30, V40, V50, V60, V01, V03, V04, V06, V11, V21, V33, V44, V54, V66, V10F, V20F, V01F, V11F, V21F, EMA, EMB, EMC, 68, 69, 74, 75, 76, 77, 85, 86, 87, AV, CPC, SG, LB, T1, T2, T3",
      ElecOptions: "56, DX, RX, LX, TL",
      CylOptions:
        "10, 10-21, 21, 22, 10-63, 11, 11-21, 11-60, 11-63, 51, 52, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 80, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, SF, BR, KD, 30, VC, YC, YRC, YRC-7P, YC-7P, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG1-78, 78, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      finishes:
        "03, US03, 10BE, 32D, 605, 613E, 630, 04, US04, 606, 09, US09, 611, 10, 612, US10, 10B, 613, 10BE, 613E, 10BL, 614, 14, US14, 618, 15, US15, 619, 20D, 624, 26, 625, 26D, BSP, WSP",
      trims: trimsString,

      warning: "",
      text: "View Metal and Wood Doors Mounting Template Doc# 7057",
      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055660",
      text1: "View Rose Trim Template (CR, E, L, LN, O, SL, SN, TR) Doc# 4555",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1056022",
      text2: "View (50-) Mounting Template Doc# 7682-A",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1056033",
      text3:
        "View 78-0034 Deadbolt Strike Template (03, 20, 21, 22, 23 Functions) Doc# 7064-C",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1055661",
      text4: "View Thumbturn Template Doc# 7059-B",
      link4: "https://storage.googleapis.com/aa-americas/dam/AADSS1056032",
    },
    {
      device: "7800",

      title: "W/ Escutcheon",
      image: Images.Mortise7800,
      functions:
        "7804, 7805, 7806, 7813, 7815, 7816, 7817, 7824, 7825, 7826, 7827, 7828, 7829, 7830, 7831, 7835, 7836, 7837, 7838, 7839, 7840, 7841, 7842, 7843, 7845, 7846, 7847, 7848, 7849, 7850, 7851, 7852, 7855, 7856, 7857, 7858, 7859, 7865, 7866, 7867, 7868, 7870, 7871, 7872, 7873, 78270, 78271, 78274, 78275, 78280, 78281, 78284, 78285",
        MechOptions:
        "1, 3, 23, WBS, OBS, 31, 36, 37, 49, 50, V10, V20, V30, V40, V50, V60, V01, V03, V04, V06, V11, V21, V33, V44, V54, V66, V10F, V20F, V01F, V11F, V21F, EMA, EMB, EMC, 68, 69, 74, 75, 76, 77, 85, 86, 87, AV, CPC, SG, LB, T1, T2, T3",
      ElecOptions: "56, DX, RX, LX, TL",
      CylOptions:
        "10, 10-21, 21, 22, 10-63, 11, 11-21, 11-60, 11-63, 51, 52, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 80, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, SF, BR, KD, 30, VC, YC, YRC, YRC-7P, YC-7P, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG1-78, 78, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      finishes:
        "03, US03, 10BE, 32D, 605, 613E, 630, 04, US04, 606, 09, US09, 611, 10, 612, US10, 10B, 613, 10BE, 613E, 10BL, 614, 14, US14, 618, 15, US15, 619, 20D, 624, 26, 625, 26D, BSP, WSP",
      trims: trimsString,

      text: "View Metal and Wood Doors Mounting Template Doc# 7057",
      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055660",
      text1: "Escutcheon Trim (CE, LE1, TE) Exposed Screws Template Doc# 4556",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1056042",
      text2: "Escutcheon Trim (LE2) Concealed Screws Template Doc# 4557",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1056023",
      text3:
        "Escutcheon Trim (WT) AV Anti-Vandal Trim Option Surface Applied Template Doc# 4558",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1056021",
      text4:
        "Escutcheon Trim (LE1, LE3, LW1, CE, TE, KE1, KE3, KW1) Exposed Screws Template Doc# 7052",
      link4: "https://storage.googleapis.com/aa-americas/dam/AADSS1056024",
      text5:
        "Escutcheon Trim (LE2, LE4, KE2, KE4) Concealed Screws Template Doc# 7053",
      link5: "https://storage.googleapis.com/aa-americas/dam/AADSS1056025",
      text6:
        "Security Escutcheon Trim (LS and KS) (Security Screws) Spanner Head Template",
      link6: "https://storage.googleapis.com/aa-americas/dam/AADSS1056043",
    },
    {
      device: "7800",

      title: "7800 Strikes",
      image: Images.Strike82007800,

      text: "Curved or Straight Lip Strikes (M-)9200 Template Doc# 7063",
      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055593",
      text1:
        "78-0034 Deadbolt Strike (M-)9200 03, 20, 21, 22, and 23 Functions Template Doc# 7064",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055661",
    },
    {
      device: "7800",

      functions:
        "7805, 7812, 7820, 7821, 7822, 7824, 7825, 7826, 7828, 7829, 7830, 7836, 7837, 7838, 7839, 7840, 7841, 7842, 7843, 7845, 7846, 7847, 7850, 7851, 7852, 7856, 7857, 7858, 7859, 7865, 7866, 7867, 7868",
        MechOptions:
        "1, 3, 23, WBS, OBS, 31, 36, 37, 49, 50, V10, V20, V30, V40, V50, V60, V01, V03, V04, V06, V11, V21, V33, V44, V54, V66, V10F, V20F, V01F, V11F, V21F, EMA, EMB, EMC, 68, 69, 74, 75, 76, 77, 85, 86, 87, AV, CPC, SG, LB, T1, T2, T3",
      ElecOptions: "56, DX, RX, LX, TL",
      CylOptions:
        "10, 10-21, 21, 22, 10-63, 11, 11-21, 11-60, 11-63, 51, 52, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 80, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, SF, BR, KD, 30, VC, YC, YRC, YRC-7P, YC-7P, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG1-78, 78, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      finishes:
        "03, US03, 10BE, 32D, 605, 613E, 630, 04, US04, 606, 09, US09, 611, 10, 612, US10, 10B, 613, 10BE, 613E, 10BL, 614, 14, US14, 618, 15, US15, 619, 20D, 624, 26, 625, 26D, BSP, WSP",
      trims: trimsString,

      title: "Sectional Indicator Packs",
      image: Images.MortiseIndicatorSA190,
      text: "View Mounting Template for SA190 Indicator",
      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1081720",
    },

    {
      device: "7800",

      functions:
        "7805, 7812, 7820, 7821, 7822, 7824, 7825, 7826, 7828, 7829, 7830, 7836, 7837, 7838, 7839, 7840, 7841, 7842, 7843, 7845, 7846, 7847, 7850, 7851, 7852, 7856, 7857, 7858, 7859, 7865, 7866, 7867, 7868, Mortise, Mortise Lock, PT, BHW",
        MechOptions:
        "1, 3, 23, WBS, OBS, 31, 36, 37, 49, 50, V10, V20, V30, V40, V50, V60, V01, V03, V04, V06, V11, V21, V33, V44, V54, V66, V10F, V20F, V01F, V11F, V21F, EMA, EMB, EMC, 68, 69, 74, 75, 76, 77, 85, 86, 87, AV, CPC, SG, LB, T1, T2, T3",
      ElecOptions: "56, DX, RX, LX, TL",
      CylOptions:
        "10, 10-21, 21, 22, 10-63, 11, 11-21, 11-60, 11-63, 51, 52, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 80, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, SF, BR, KD, 30, VC, YC, YRC, YRC-7P, YC-7P, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG1-78, 78, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      finishes:
        "03, US03, 10BE, 32D, 605, 613E, 630, 04, US04, 606, 09, US09, 611, 10, 612, US10, 10B, 613, 10BE, 613E, 10BL, 614, 14, US14, 618, 15, US15, 619, 20D, 624, 26, 625, 26D, BSP, WSP",
      trims: trimsString,

      title: "VN1 Escutcheon Indicator",
      image: Images.MortiseIndicatorVN1,
      text: "View Mounting Template for VN1 Indicator",
      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1081719",
    },
    {
      device: "7800",

      image: Images.PT7800,
      functions:
        "7815, 7865, 7804, 7837, 7824, 7843, 7845, 7850, 7816, 7817, 7826, Mortise, Mortise Lock, PT, BHW",
        MechOptions:
        "1, 3, 23, WBS, OBS, 31, 36, 37, 49, 50, V10, V20, V30, V40, V50, V60, V01, V03, V04, V06, V11, V21, V33, V44, V54, V66, V10F, V20F, V01F, V11F, V21F, EMA, EMB, EMC, 68, 69, 74, 75, 76, 77, 85, 86, 87, AV, CPC, SG, LB, T1, T2, T3",
      ElecOptions: "56, DX, RX, LX, TL",
      CylOptions:
        "10, 10-21, 21, 22, 10-63, 11, 11-21, 11-60, 11-63, 51, 52, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 80, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, SF, BR, KD, 30, VC, YC, YRC, YRC-7P, YC-7P, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG1-78, 78, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      finishes:
        "03, US03, 10BE, 32D, 605, 613E, 630, 04, US04, 606, 09, US09, 611, 10, 612, US10, 10B, 613, 10BE, 613E, 10BL, 614, 14, US14, 618, 15, US15, 619, 20D, 624, 26, 625, 26D, BSP, WSP",
      trims: trimsString,

      title: "7800 W/ PT Trim",

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1056049",
      text: "View Mounting Template (Metal & Wood) Doc# 4512",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055660",
      text1: "View PT Trim Template Doc# 7057",
    },
    // No Electrified option for 7800
  ],
};
