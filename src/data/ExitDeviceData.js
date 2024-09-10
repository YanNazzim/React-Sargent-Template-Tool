// ExitDeviceData.js
import wideCVR from "../images/WideCVR.png";
import wideStileRim from "../images/Wide Rim Exit (8800).png";
import wideSVR from "../images/WideSVR.png";
import wideNBSVR from "../images/WideNBSVR.png";
import wideMortise from "../images/WideMortise.png";
import wideLP8600 from "../images/LP8600 CVR Mortise.png";
import wideLS8600 from "../images/LS8600 CVR Mortise.png";
import crossWideRim from "../images/crossWideRim.png";
import crossWideSVR from "../images/crossWideSVR.png";
import crossWideMortise from "../images/crossWideMortise.png";
import narrowMortise from "../images/NarrowMortiseExit (8300).png";
import narrowCVR from "../images/NarrowCVR.png";
import narrowRim from "../images/Narrow Rim Exit (8500).png";
import narrowCVR9400 from "../images/narrowCVR 9400.png";

export const ExitDevices = {
  Narrow80: [
    {
      device: "8300",

      title: "(12-)8300 Mortise Exit (04, 10, 15, 40, 43, 44)",
      image: narrowMortise,
      functions: "(8304, 8310, 8315, 8340, 8343, 8344)",

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

      title: "(12-)8300 Mortise Exit (73, 74, 75, 76)",
      image: narrowMortise,
      functions: "(8373, 8374, 8375, 8376)",

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
      device: "MD8400",

      title: "(12-)(NB-)MD8400 (06, 10, 13, 40, 43, 46)",
      functions: "(8406, 8410, 8413, 8440, 8443, 8446)",
      image: narrowCVR,

      link: 'https://storage.googleapis.com/aa-americas/dam/AADSS1055945',
      text: 'View Mounting Template (Metal Door) Doc# 4447-J',
      link1: 'https://storage.googleapis.com/aa-americas/dam/AADSS1055940',
      text1: 'View Trim Template (700-4 ET) Doc# 4448-J',
      link2: 'https://storage.googleapis.com/aa-americas/dam/AADSS1055943',
      text2: 'View 650/652/606 Standard Strike Template Doc# 4449-G',
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1055952",
      text3: "View 106/113 Auxiliary Trim Doc# 4212-D",
      link4: "https://storage.googleapis.com/aa-americas/dam/AADSS1055898",
      text4: "View Narrow Raceway Template Doc# 4568-C",
    },
    {
      device: "MD8400",

      title: "(12-)(NB-)MD8400 (73, 74)",
      functions: "(8473, 8474)",
      image: narrowCVR,

      link: 'https://storage.googleapis.com/aa-americas/dam/AADSS1055945',
      text: 'View Mounting Template (Metal Door) Doc# 4447-J',
      link1: 'https://storage.googleapis.com/aa-americas/dam/AADSS1055936',
      text1: 'View Trim Template (54-)(700-4 ET) Doc# 4467-F',
      link2: 'https://storage.googleapis.com/aa-americas/dam/AADSS1055943',
      text2: 'View 650/652/606 Standard Strike Template Doc# 4449-G',
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1055952",
      text3: "View 106/113 Auxiliary Trim Doc# 4212-D",
      link4: "https://storage.googleapis.com/aa-americas/dam/AADSS1055898",
      text4: "View Narrow Raceway Template Doc# 4568-C",
    },
    {
      device: "AD8400",

      title: "(12-)(NB-)AD8400 (06, 10, 13, 40, 43, 46)",
      functions: "(8406, 8410, 8413, 8440, 8443, 8446)",
      image: narrowCVR,

      link: 'https://storage.googleapis.com/aa-americas/dam/AADSS1055941',
      text: 'View Mounting Template (Aluminum Door) Doc# 4312-K',
      link1: 'https://storage.googleapis.com/aa-americas/dam/AADSS1055940',
      text1: 'View Trim Template (700-4 ET) Doc# 4448-J',
      link2: 'https://storage.googleapis.com/aa-americas/dam/AADSS1055939',
      text2: 'View 640 Standard Strike Template Doc# 4649-A',
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1055952",
      text3: "View 106/113 Auxiliary Trim Doc# 4212-D",
      link4: "https://storage.googleapis.com/aa-americas/dam/AADSS1055898",
      text4: "View Narrow Raceway Template Doc# 4568-C",
    },
    {
      device: "AD8400",

      title: "(12-)(NB-)AD8400 (73, 74)",
      functions: "(8473, 8474)",
      image: narrowCVR,

      link: 'https://storage.googleapis.com/aa-americas/dam/AADSS1055941',
      text: 'View Mounting Template (Aluminum Door) Doc# 4312-K',
      link1: 'https://storage.googleapis.com/aa-americas/dam/AADSS1055936',
      text1: 'View Trim Template (54-)(700-4 ET) Doc# 4467-F',
      link2: 'https://storage.googleapis.com/aa-americas/dam/AADSS1055939',
      text2: 'View 640 Standard Strike Template Doc# 4649-A',
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1055952",
      text3: "View 106/113 Auxiliary Trim Doc# 4212-D",
      link4: "https://storage.googleapis.com/aa-americas/dam/AADSS1055898",
      text4: "View Narrow Raceway Template Doc# 4568-C",
    },
    {
      device: "8500",

      title: "(12-)8500 Rim Exit (04, 10, 40, 44)",
      functions: "(8504, 8510, 8540, 8544)",
      functions1: "(8506, 8513, 8515, 8543, 8546, 8573, 8574)",
      image: narrowRim,

      link: 'https://storage.googleapis.com/aa-americas/dam/AADSS1055909',
      text: 'View 04 Cylinder/Exit Only Mounting Template (Aluminum Door) Doc# 4645-E',
      link1: 'https://storage.googleapis.com/aa-americas/dam/AADSS1055922',
      text1: 'View Trim Template (700 ET) Doc# 4277-18',
      link2: 'https://storage.googleapis.com/aa-americas/dam/AADSS1055911',
      text2: 'View 657 Standard Strike Template Doc# 4308-B',
      link3: 'https://storage.googleapis.com/aa-americas/dam/AADSS1056012',
      text3: 'View 656 Mullion Strike Template Doc# 4715-B',
      link4: 'https://storage.googleapis.com/aa-americas/dam/AADSS1055896',
      text4: 'View 649 Standard (12-) Strike Template Doc# 4004-K',
      link5: "https://storage.googleapis.com/aa-americas/dam/AADSS1055898",
      text5: "View Narrow Raceway Template Doc# 4568-C",
    },
    {
      device: "8500",

      title: "(12-)8500 Rim Exit (06, 13, 15, 43, 46)",
      functions1: "(8506, 8513, 8515, 8543, 8546, 8573, 8574)",
      image: narrowRim,

      link: 'https://storage.googleapis.com/aa-americas/dam/AADSS1055910',
      text: 'View Mounting Template (Aluminum Door) Doc# 4645-E',
      link1: 'https://storage.googleapis.com/aa-americas/dam/AADSS1055900',
      text1: 'View Trim Template (700-8 ET) Doc# 4414-H',
      link2: 'https://storage.googleapis.com/aa-americas/dam/AADSS1055911',
      text2: 'View 657 Standard Strike Template Doc# 4308-B',
      link3: 'https://storage.googleapis.com/aa-americas/dam/AADSS1056012',
      text3: 'View 656 Mullion Strike Template Doc# 4715-B',
      link4: 'https://storage.googleapis.com/aa-americas/dam/AADSS1055896',
      text4: 'View 649 Standard (12-) Strike Template Doc# 4004-K',
      link5: "https://storage.googleapis.com/aa-americas/dam/AADSS1055898",
      text5: "View Narrow Raceway Template Doc# 4568-C",
    },
    {
      device: "8500",

      title: "(12-)8500 Rim Exit (73, 74)",
      functions1: "(8573, 8574)",
      image: narrowRim,

      link: 'https://storage.googleapis.com/aa-americas/dam/AADSS1055910',
      text: 'View Mounting Template (Aluminum Door) Doc# 4645-E',
      link1: 'https://storage.googleapis.com/aa-americas/dam/AADSS1055899',
      text1: 'View Trim Template (700-8 ET) Doc# 4529-C',
      link2: 'https://storage.googleapis.com/aa-americas/dam/AADSS1055911',
      text2: 'View 657 Standard Strike Template Doc# 4308-B',
      link3: 'https://storage.googleapis.com/aa-americas/dam/AADSS1056012',
      text3: 'View 656 Mullion Strike Template Doc# 4715-B',
      link4: 'https://storage.googleapis.com/aa-americas/dam/AADSS1055896',
      text4: 'View 649 Standard (12-) Strike Template Doc# 4004-K',
      link5: "https://storage.googleapis.com/aa-americas/dam/AADSS1055898",
      text5: "View Narrow Raceway Template Doc# 4568-C",
    },
    {
      device: "AD8500",

      title: "(12-)(WS-)AD8500 Rim Exit (04, 10, 40, 44)",
      functions: "(8504, 8510, 8540, 8544)",
      image: narrowRim,

      link: 'https://storage.googleapis.com/aa-americas/dam/AADSS1055909',
      text: 'View 04 Cylinder/Exit Only Mounting Template (Aluminum Door) Doc# 4645-E',
      link1: 'https://storage.googleapis.com/aa-americas/dam/AADSS1055922',
      text1: 'View Trim Template (700 ET) Doc# 4277-18',
      link2: 'https://storage.googleapis.com/aa-americas/dam/AADSS1055911',
      text2: 'View 657 Standard Strike Template Doc# 4308-B',
      link3: 'https://storage.googleapis.com/aa-americas/dam/AADSS1056012',
      text3: 'View 656 Mullion Strike Template Doc# 4715-B',
      link4: 'https://storage.googleapis.com/aa-americas/dam/AADSS1055896',
      text4: 'View 649 Standard (12-) Strike Template Doc# 4004-K',
      link5: "https://storage.googleapis.com/aa-americas/dam/AADSS1055898",
      text5: "View Narrow Raceway Template Doc# 4568-C",
    },
    {
      device: "AD8500",

      title: "(12-)(WS-)AD8500 Rim Exit (06, 13, 15, 43, 46)",
      functions: "(8506, 8513, 8515, 8543, 8546, 8573, 8574)",
      image: narrowRim,

      link: 'https://storage.googleapis.com/aa-americas/dam/AADSS1055910',
      text: 'View Mounting Template (Aluminum Door) Doc# 4645-E',
      link1: 'https://storage.googleapis.com/aa-americas/dam/AADSS1055900',
      text1: 'View Trim Template (700-8 ET) Doc# 4414-H',
      link2: 'https://storage.googleapis.com/aa-americas/dam/AADSS1055911',
      text2: 'View 657 Standard Strike Template Doc# 4308-B',
      link3: 'https://storage.googleapis.com/aa-americas/dam/AADSS1056012',
      text3: 'View 656 Mullion Strike Template Doc# 4715-B',
      link4: 'https://storage.googleapis.com/aa-americas/dam/AADSS1055896',
      text4: 'View 649 Standard (12-) Strike Template Doc# 4004-K',
      link5: "https://storage.googleapis.com/aa-americas/dam/AADSS1055898",
      text5: "View Narrow Raceway Template Doc# 4568-C",
    },
    {
      device: "AD8500",

      title: "(12-)(WS-)AD8500 Rim Exit (73, 74)",
      functions: "(8573, 8574)",
      image: narrowRim,

      link: 'https://storage.googleapis.com/aa-americas/dam/AADSS1055910',
      text: 'View Mounting Template (Aluminum Door) Doc# 4645-E',
      link1: 'https://storage.googleapis.com/aa-americas/dam/AADSS1055899',
      text1: 'View Trim Template (54-)(700-8 ET) Doc# 4529-C',
      link2: 'https://storage.googleapis.com/aa-americas/dam/AADSS1055911',
      text2: 'View 657 Standard Strike Template Doc# 4308-B',
      link3: 'https://storage.googleapis.com/aa-americas/dam/AADSS1056012',
      text3: 'View 656 Mullion Strike Template Doc# 4715-B',
      link4: 'https://storage.googleapis.com/aa-americas/dam/AADSS1055896',
      text4: 'View 649 Standard (12-) Strike Template Doc# 4004-K',
      link5: "https://storage.googleapis.com/aa-americas/dam/AADSS1055898",
      text5: "View Narrow Raceway Template Doc# 4568-C",
    },
  ],
  Wide80: [
    {
      device: "WD8600",

      title: "WD8600 CVR Exit (06, 10, 13, 15, 40, 43, 46)",
      image: wideCVR,
      functions: '(8606, 8610, 8613, 8615, 8640, 8643, 8646)',


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
      image: wideCVR,
      functions: '(8673, 8674)',


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
      image: wideCVR,
      functions: '(8606, 8610, 8613, 8615, 8640, 8643, 8646)',

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055955",
      text: "View Hollow Metal Door Mounting Template Doc# 4445-J",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055955",
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
      image: wideCVR,
      functions: '(8673,8674)',

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055955",
      text: "View Hollow Metal Door Mounting Template Doc# 4445-J",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055955",
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
      image: wideCVR,
      functions: "(8606, 8610, 8613, 8615, 8640, 8643, 8646)",

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055938",
      text: "View Aluminum Door Mounting Template Doc# 4661-A",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055955",
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
      image: wideCVR,
      functions: "(8673,8674)",

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055938",
      text: "View Aluminum Door Mounting Template Doc# 4661-A",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055936",
      text2: "View ET Trim Template (54-)(700-4) Doc# 4467-F",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055955",
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

      title: "LP8600 & LR8600",
      functions: "(ALL Functions)",
      image: wideLP8600,
    },
    {
      device: "LS8600",

      title: "LS8600",
      functions: "(ALL Functions)",
      image: wideLS8600,
    },
    {
      device: "8700",

      title: "8700 SVR Exit (All Functions)",
      image: wideSVR,
      functions: "(8706, 8710, 8713, 8715, 8740, 8743, 8746, 8773, 8774)",


      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055958",
      text: "View 8700 Mounting Template (Any Door) Doc# 4289-H",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055922",
      text1: "View Trim Template (700 ET) Doc# 4277-18",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055922",
      text2: "View Trim Template (773 & 774 ET) Doc# 4314-T",
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

      title: "12-8700 SVR Exit (All Functions)",
      image: wideSVR,
      functions: "(8706, 8710, 8713, 8715, 8740, 8743, 8746, 8773, 8774)",

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055958",
      text: "View 12-8700 Mounting Template (Any Door) Doc# 4297-H",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055922",
      text1: "View Trim Template (700 ET) Doc# 4277-18",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055922",
      text2: "View Trim Template (773 & 774 ET) Doc# 4314-T",
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
        "(12-)(HC, HC4, FM)8700 SVR Exit (All Functions)",
      image: wideSVR,
      functions: "(8706, 8710, 8713, 8715, 8740, 8743, 8746, 8773, 8774)",

      link: "https://www.sargentlock.com/en/view-pdf?url=https%3A%2F%2Fstorage.googleapis.com%2Faa-americas%2Fdam%2FAADSS1055970&page=1&data=%7B%22account%22%3A%7B%22raw%22%3A%5B%22Shared+%3E+Marketing+%3E+US+%3E+Sargent%22%2C%22Shared+%3E+Marketing+%3E+US%22%2C%22Shared+%3E+Marketing%22%2C%22Shared%22%5D%7D%2C%22asset_type%22%3A%7B%22raw%22%3A%22Document%22%7D%2C%22asset_sub_type%22%3A%7B%22raw%22%3A%22Template%22%7D%2C%22title%22%3A%7B%22raw%22%3A%22SARGENT+80+Series+%2812-%29HC8700%2C+%2812-%29HC4-8700%2C+%2812-%29FM8700+Wide+Stile+SVR+Template%22%2C%22snippet%22%3A%22SARGENT+80+Series+%2812-%29HC8700%2C+%2812-%29HC4-%3Cem%3E8700%3C%2Fem%3E%2C+%2812-%29FM8700+Wide+Stile+SVR+Template%22%7D%2C%22body_content%22%3A%7B%22raw%22%3A%2213%2F32%5C%22%5Cn1+19%2F32%5C%22%5Cn1+3%2F8%5C%22%5Cn2+63%2F64%5C%22%5Cn15%2F16%5C%22%5Cn1+17%2F32%5C%22%5Cn5+25%2F32%5C%22%5Cn1+1%2F2%5C%22%5Cn1+1%2F4%5C%22%5Cn6+11%2F16%5C%22%5CnCUT-OUT+1%5Cn3%2F8%5C%22+TOP+MOUNTING%5CnHOLE+FOR+ET+TRIM%5CnIF+USED%5CnWIDER%2C+VERTICAL+C%5CnL+IS+2+3%2F4%5C%22+FROM%5CnCENTER+OF+BEVEL%22%2C%22snippet%22%3A%2213%2F32%26quot%3B%5Cn1+19%2F32%26quot%3B%5Cn1+3%2F8%26quot%3B%5Cn2+63%2F64%26quot%3B%5Cn15%2F16%26quot%3B%5Cn1+17%2F32%26quot%3B%5Cn5+25%2F32%26quot%3B%5Cn1+1%2F2%26quot%3B%5Cn1+1%2F4%26quot%3B%5Cn6+11%2F16%26quot%3B%5CnCUT-OUT+1%5Cn3%2F8%26quot%3B+TOP%22%7D%2C%22image%22%3A%7B%22raw%22%3A%22https%3A%2F%2Fik.imagekit.io%2Ftwr9df4sfpl%2Fdam%2Fdam%2FAADSS1055970-web%22%7D%2C%22url%22%3A%7B%22raw%22%3A%22https%3A%2F%2Fstorage.googleapis.com%2Faa-americas%2Fdam%2FAADSS1055970%22%7D%2C%22discontinued%22%3A%7B%22raw%22%3A%5B%22All%22%2C%22No%22%5D%7D%2C%22tags_pim%22%3A%7B%22raw%22%3A%5B%22Push+Pad%22%5D%7D%2C%22title_dam%22%3A%7B%22raw%22%3A%22AADSS1055970%22%7D%2C%22extension%22%3A%7B%22raw%22%3A%22application%2Fpdf%22%7D%2C%22type%22%3A%7B%22raw%22%3A%22Template%22%7D%2C%22document_profile%22%3A%7B%22raw%22%3A%22PIMAsset%22%7D%2C%22pim_path_id%22%3A%7B%22raw%22%3A%224462%22%2C%22snippet%22%3A%224462%22%7D%2C%22product_brand%22%3A%7B%22raw%22%3A%5B%22SARGENT%22%5D%7D%2C%22product_category%22%3A%7B%22raw%22%3A%5B%22Push+Pad%22%5D%7D%2C%22product_type%22%3A%7B%22raw%22%3A%5B%22Exit+Devices%22%5D%7D%2C%22product_subtype%22%3A%7B%22raw%22%3A%22Push+Pad%22%7D%2C%22product_series%22%3A%7B%22raw%22%3A%5B%2280+Series%22%5D%7D%2C%22author%22%3A%7B%22raw%22%3A%22kparadis%22%7D%2C%22revision%22%3A%7B%22raw%22%3A%221%22%7D%2C%22created_at%22%3A%7B%22raw%22%3A%222018-07-11T08%3A36%3A00-04%3A00%22%7D%2C%22updated_at%22%3A%7B%22raw%22%3A%222018-07-11T08%3A36%3A00-04%3A00%22%7D%2C%22brand_document_revision%22%3A%7B%22raw%22%3A%2204%2F2017%22%7D%2C%22processed_at%22%3A%7B%22raw%22%3A%222024-08-09T16%3A16%3A41-04%3A00%22%7D%2C%22exclude_from_aem_search%22%3A%7B%22raw%22%3A%5B%22All%22%5D%7D%2C%22country%22%3A%7B%22raw%22%3A%22United+States%3BCanada%22%7D%2C%22language%22%3A%7B%22raw%22%3A%22English%22%7D%2C%22sort_order%22%3A%7B%22raw%22%3A%2200000%22%7D%2C%22id%22%3A%7B%22raw%22%3A%22AADSS1055970%22%7D%2C%22_meta%22%3A%7B%22id%22%3A%22AADSS1055970%22%2C%22engine%22%3A%22americas-marketing-dam%22%2C%22score%22%3A20.71886%7D%7D",
      text: "View (12-)(HC, HC4, FM)8700 Mounting Template (Any Door) Doc# 4462-G",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055922",
      text1: "View Trim Template (700 ET) Doc# 4277-18",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055922",
      text2: "View Trim Template (773 & 774 ET) Doc# 4314-T",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1055956",
      text3:
        "View 653/654/659/655 Standard Top&Bottom Strike Template Doc# 4296-G",
      link4: "https://storage.googleapis.com/aa-americas/dam/AADSS1055962",
      text4: "View 306/313 Auxiliary Trim Doc# 4214-F",
      link5: "https://storage.googleapis.com/aa-americas/dam/AADSS1055972",
      text5: "View Wide EM Raceway Template Doc# 4569-C",
    },
    {
      device: "NB-8700",

      title: "(12-)NB-8700 (06, 13, 15, 43, 46)",
      functions: "(8706, 8713, 8715, 8743, 8746)",
      image: wideNBSVR,

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
      functions: "(8710, 8740)",
      image: wideNBSVR,

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
      functions: "(8773, 8774)",
      image: wideNBSVR,

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
      image: wideStileRim,
      functions: "(8806, 8813, 8815, 8843, 8846)",

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055914",
      text: "View Mounting Template (Any Material) Doc# 4415-H",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055922",
      text1: "View Trim Template (700 ET) Doc# 4277-18",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055922",
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
      image: wideStileRim,
      functions: "(8806, 8813, 8815, 8843, 8846)",

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055914",
      text: "View Mounting Template (Any Material) Doc# 4415-H",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055900",
      text1: "View Trim Template (700-8 ET) Doc# 4414-H",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055922",
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
      image: wideStileRim,
      functions: "(8873, 8874, 8875, 8876)",

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055914",
      text: "View Mounting Template (Any Material) Doc# 4415-H",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055968",
      text1: "View Trim Template (54-)(700-8 ET) Doc# 4714",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055922",
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
      device: "8900",

      title: "(12-)(WS-)8900 (04, 06, 10, 13, 15, 16, 40, 44)",
      image: wideMortise,
      functions: "(8904, 8906, 8910, 8913, 8915, 8916, 8940, 8944)",

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055934",
      text: "View 8900 Mounting Template (Any Material) Doc# 4290-J",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055929",
      text1: "View Mortise Case Template (Any Metarial) Doc# 4709-3",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055932",
      text2: "View (59-)Mortise Case Template (Any Metarial) Doc# 4458-C",
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

      title: "(12-)(WS-)8900 (73, 74, 75, 76)",
      image: wideMortise,
      functions: "(8973, 8974, 8975, 8976)",

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055934",
      text: "View 8900 Mounting Template (Any Material) Doc# 4290-J",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055929",
      text1: "View Mortise Case Template (Any Metarial) Doc# 4709-3",
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
  ],
  NarrowPE80: [
    {
      device: "PE8500",

      title: "PE8500 Narrow Rim",
      functions: "(8804, 8810, 8840, 8844)",
      functions2: "(8806, 8813, 8815, 8843, 8846, 8873, 8874, 8875, 8876)",
      image: wideStileRim,
    },
  ],
  Narrow90: [
    {
      title: "9400",
      functions: "(ALL Functions)",
      image: narrowCVR9400,
    },
  ],
  Wide90: [
    {
      title: "9700 Wide SVR Exit",
      functions: "(ALL Functions)",
      image: crossWideSVR,
    },
    {
      title: "9800 Wide Rim Exit",
      functions: "(ALL Functions)",
      image: crossWideMortise,
    },
    {
      title: "9900 Wide Mortise Exit",
      functions: "(ALL Functions)",
      image: crossWideRim,
    },
  ],
};

export const mortiseLockTemplates = {
  8210: [
    {
      title: "8210 Mortise Lock",
      image: "/images/8210.png",
      link: "/templates/8210.pdf",
    },
    // Add more templates for 8210 series
  ],
};