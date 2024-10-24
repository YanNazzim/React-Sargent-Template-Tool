// src/data/AuxLocksData.js
import { Images } from "../images/images"; // Import the Images object

export const AuxLocks = {
  SSL1: [
    {
      device: "SSL1", // Use 'Electrified' if applicable
      title: "SSL1 Spring Latch",
      MechOptions: "",
      CylOptions:
        "std, 10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 80, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, SF, BR, KD, 30, VC, YC, YRC, YRC-7P, YC-7P, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      finishes:
        "03, US03, 04, US04, 10, US10, 10B, 10BE, 14, 15, US14, US15, 26, US26, 26D, BSP, WSP",

      image: Images.SSL1, // Update to use the Images object
      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1086890", // Primary link
      text: "View Mounting Template Doc# 4263", // Link text
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055593",
      text1: "View Curved & Straight Lip Strike Template Doc# 7063",
      link2: 'https://storage.googleapis.com/aa-americas/dam/AADSS1175905',
      text2: 'View Installation Instructions Doc# A7963',
    },
  ],
  8200: [
    {
      device: "8200",
      image: Images.Aux8200, // Update to use the Images object
      title: "8200 Deadbolt",
      functions:
        "8203, 8220, 8221, 8222, 8223, Deadbolt, DB, Deadlock, Classroom Deadlock, CLassroom",
      MechOptions: "1, 23, 28, 31, 36, 37, 74, LB, SG, WBS",
      CylOptions:
        "std, 10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 80, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, SF, BR, KD, 30, VC, YC, YRC, YRC-7P, YC-7P, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      finishes:
        "03, US03, 04, US04, 10, US10, 10B, 10BE, 10BL, 20D, 14, 15, US14, US15, 26, US26, 26D, 32, 32D, BSP, WSP",

      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V, V",
      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055660", // Primary link
      text: "View Mounting Template Doc# 7057", // Link text
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055593",
      text1: "View Curved & Straight Lip Strike Template Doc# 7063",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055661",
      text2: "View 78-0034 Deadbolt Strike Template Doc# 7064",
    },
  ],
  9200: [
    {
      device: "9200",
      image: Images.Aux8200, // Update to use the Images object
      title: "9200 Deadbolt",
      functions:
        "9203, 9220, 9221, 9222, 9223, Mortise, Deadlock, Deadbolt, DB, Clasroom, Classroom Deadlock",
      MechOptions: "1, 23, 28, 31, 36, 37, 74, LB, SG, WBS",
      CylOptions:
        "std, 10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 80, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, SF, BR, KD, 30, VC, YC, YRC, YRC-7P, YC-7P, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      finishes:
        "03, US03, 04, US04, 10, US10, 10B, 10BE, 10BL, 20D, 14, 15, US14, US15, 26, US26, 26D, 32, 32D, BSP, WSP",
      trims: "130W, 130LB",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V, V",

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055660", // Primary link
      text: "View Mounting Template Doc# 7057", // Link text
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055593",
      text1: "View Curved & Straight Lip Strike Template Doc# 7063",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055661",
      text2: "View 78-0034 Deadbolt Strike Template Doc# 7064",
    },
  ],
  4870: [
    {
      device: "4870",
      image: Images.Aux4870, // Update to use the Images object
      title: "4870 Deadbolt",
      functions:
        "4879, 4875, 4876, 4877, 4874, 4878, DB, Deadbolt, Single Cylinder, Single, Cylinder, Thumbturn, Thumb, Turn, Thumb Turn, ",
      MechOptions: "1, 23, 28, 31, 36, 37, 74, LB, SG, WBS",
      CylOptions:
        "std, 10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 80, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, SF, BR, KD, 30, VC, YC, YRC, YRC-7P, YC-7P, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      finishes:
        "03, US03, 04, US04, 10, US10, 10B, 10BE, 10BL, 20D, 14, 15, US14, US15, 26, US26, 26D, 32, 32D, BSP, WSP",
      trims: "130W, 130LB",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V, V",

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055682",
      text: "View Mounting Template Doc# 4241",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055685",
      text1: "View 7710 Strike Template (28-) Doc# 4242",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055683",
      text2: "View Deadbolt Strike Template Doc# 4236",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1055686",
      text3: "View 7730 Strike Template Doc# 3960",
    },
    {
      device: "4870",
      image: Images.Aux4870, // Update to use the Images object
      title: "4870 Deadbolt Installation Instructions",
      functions:
        "4879, 4875, 4876, 4877, 4874, 4878, DB, Deadbolt, Single Cylinder, Single, Cylinder, Thumbturn, Thumb, Turn, Thumb Turn, ",
      MechOptions: "1, 23, 28, 31, 36, 37, 74, LB, SG, WBS",
      CylOptions:
        "std, 10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 80, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, SF, BR, KD, 30, VC, YC, YRC, YRC-7P, YC-7P, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      finishes:
        "03, US03, 04, US04, 10, US10, 10B, 10BE, 10BL, 20D, 14, 15, US14, US15, 26, US26, 26D, 32, 32D, BSP, WSP",
      trims: "130W, 130LB",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V, V",

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1054630",
      text: "View Main Installation Instructions Doc# A5908",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1054626",
      text1: "View 130 Thumbturn and 184 Emergency Release Installation Instructions Doc# A5675",

    },
  ],
  480: [
    {
      device: "480",
      image: Images.Aux480, // Update to use the Images object
      title: "480 Deadbolt",
      functions:
        "489, 485, 486, 487, 484, Deadbolt, Deadlock, Dead bolt, DB, bolt, Single Cylinder, Double Cylinder, Single, Double, Cylinder, Indicator",
      MechOptions: "1, 16, 20, 48, 23, 28, 31, 36, 37, 74, LB, SG, WBS",
      CylOptions:
        "std, 10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 80, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, SF, BR, KD, 30, VC, YC, YRC, YRC-7P, YC-7P, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      finishes:
        "03, US03, 04, US04, 10, US10, 10B, 10BE, 10BL, 20D, 14, 15, US14, US15, 26, US26, 26D, 32, 32D, BSP, WSP",
      trims: "130W, 130LB",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V, V",

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055654",
      text: "View (20-) Mounting Template Doc# 4348",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055656",
      text1: "View 404 Strike Template Doc# 4240",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055655",
      text2: "View 400 Curved Lip Strike Template Doc# 4239",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1055657",
      text3: "View 408 Strike Template Doc# 4238",
    },
    {
      device: "480",
      image: Images.Aux480, // Update to use the Images object
      title: "480 Deadbolt Installation Instructions",
      functions:
        "489, 485, 486, 487, 484, Deadbolt, Deadlock, Dead bolt, DB, bolt, Single Cylinder, Double Cylinder, Single, Double, Cylinder, Indicator, SFIC, LFIC, Installation Instructions, Installation , Instructions",
      MechOptions: "1, 16, 20, 48, 23, 28, 31, 36, 37, 74, LB, SG, WBS",
      CylOptions:
        "std, 10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 80, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, SF, BR, KD, 30, VC, YC, YRC, YRC-7P, YC-7P, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      finishes:
        "03, US03, 04, US04, 10, US10, 10B, 10BE, 10BL, 20D, 14, 15, US14, US15, 26, US26, 26D, 32, 32D, BSP, WSP",
      trims: "130W, 130LB",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V, V",

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1054631",
      text: "View (20-)480 Series Single/Double Cylinder Installation Doc# A6668",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1054633",
      text1:
        "View 480 Single Cylinder (70-, 72-, 73-, SFIC) Installtion Instructions Doc# A6935",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1054632",
      text2:
        "View 480 Single Cylinder (60-, 63-, 64-, LFIC) Installtion Instructions Doc# A7439",
    },
  ],
  460: [
    {
      device: "460",
      image: Images.Aux460, // Update to use the Images object
      title: "460 Deadbolt",
      functions:
        "464, 465, 468, Deadbolt, Deadlock, Dead bolt, DB, bolt, Single Cylinder, Double Cylinder, Single, Double, Cylinder, Indicator, Installation Instructions, Installation , Instructions",
      MechOptions: "1, 16, 20, 48, 23, 28, 31, 36, 37, 74, LB, SG, WBS",
      CylOptions:
        "std, 10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 80, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, SF, BR, KD, 30, VC, YC, YRC, YRC-7P, YC-7P, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      finishes:
        "03, US03, 04, US04, 10, US10, 10B, 10BE, 10BL, 20D, 14, 15, US14, US15, 26, US26, 26D, 32, 32D, BSP, WSP",
      trims: "130W, 130LB",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V, V",

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1206693",
      text: "View Mounting Template Doc# 4755",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055656",
      text1: "View 404 Strike Template Doc# 4240",
    },
    {
      device: "460",
      image: Images.Aux460, // Update to use the Images object
      title: "460 Deadbolt Installation Instructions",
      functions:
        "464, 465, 468, Deadbolt, Deadlock, Dead bolt, DB, bolt, Single Cylinder, Double Cylinder, Single, Double, Cylinder, Indicator, Installation Instructions, Installation , Instructions",
      MechOptions: "1, 16, 20, 48, 23, 28, 31, 36, 37, 74, LB, SG, WBS",
      CylOptions:
        "std, 10, 10-21, 10-63, 11, 11-21, 11-60, 11-63, 11-64, 11-70-7P, 11-72-7P, 11-73-7P, 11-65-73-7P, 21, 22, 51, 52, 60, 63, 64, 70, 72, 73, 65, 7P, 65-73, 65-73-7P, 73-7P, 80, 81, 82, F1, F1-82, 83, F1-83, 124, 127, 84, BR, LC, SC, SE, SF, BR, KD, 30, VC, YC, YRC, YRC-7P, YC-7P, DG1, DG1-21, DG1-60, DG1-63, DG1-64, DG1-65, DG2, DG2-21, DG2-60, DG2-63, DG2-64, DG2-65, DG3, DG3-21, DG3-60, DG3-63, DG3-64, DG3-65, ",
      finishes:
        "03, US03, 04, US04, 10, US10, 10B, 10BE, 10BL, 20D, 14, 15, US14, US15, 26, US26, 26D, 32, 32D, BSP, WSP",
      trims: "130W, 130LB",
      handing: "LHR, LH, LHRB, RHR, RH, RHRB",
      voltage: "12V, 24V, 12 V, 24 V, V",

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1207837",
      text: "View 460 Series Single / Double / Indicator Installation Instructions Doc# 252006071",
    },
  ],
};
