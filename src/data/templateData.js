// src/data/templateData.js
import narrowMortise from "../images/NarrowMortiseExit (8300).png";
import WideCVR from '../images/WideCVR.png'

export const exitDeviceTemplates = {

  // NARROW

  8300: [
    {
      title: "8300 Mortise Exit (All Functions except 75, 76)",
      image: narrowMortise,

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055927",
      text: "View Mounting Template",

      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055922",
      text2: "View Trim Template (700 ET)",

      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1055931",
      text3: "View Standard Strike Template (C908)",

      link4: "https://storage.googleapis.com/aa-americas/dam/AADSS1055930",
      text4: "View Alt Strike Template (815 Open back)",
    },
    {
      title: "8375 or 8376 Mortise Exit",
      image: narrowMortise,

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055927",
      text: "View Mounting Template",

      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055928",
      text2: "View Trim Template [(54-) 775, 776 ET)",

      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1055931",
      text3: "View Standard Strike Template (C908)",

      link4: "https://storage.googleapis.com/aa-americas/dam/AADSS1055930",
      text4: "View Alt Strike Template (815 Open back)",
    },
    {
      title: "59-8300 Delayed Egress Mortise Exit",
      image: narrowMortise,

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055932",
      text: "View Mounting Template",

      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055922",
      text2: "View Trim Template (700 ET)",

      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1055931",
      text3: "View Standard Strike Template (C908)",

      link4: "https://storage.googleapis.com/aa-americas/dam/AADSS1055930",
      text4: "View Alt Strike Template (815 Open back)",
    },
  ],
  8400: [
    {
      title: "8400 Rim Exit",
      image: "/images/8400.png",
      link: "/templates/8400.pdf",
    },
  ],
  8500: [
    {
      title: "8500 Rim Exit",
      image: "/images/8400.png",
      link: "/templates/8400.pdf",
    },
  ],
  9400: [
    {
      title: "9400 CVR Exit",
      image: "/images/8400.png",
      link: "/templates/8400.pdf",
    },
  ],

  // WIDE

  8600: [
    {
      title: "WD8600 CVR Exit",
      image: WideCVR,

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055955",
      text: "View Wood Door Mounting Template Doc# 4431J",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055953",
      text2: "View Trim Template Doc# 4436E",
      link3: "https://storage.googleapis.com/aa-americas/dam/AADSS1055943",
      text3: "View Strike Template Doc# 4449G",
      link4: "https://storage.googleapis.com/aa-americas/dam/AADSS1055952",
      text4: "View 106/113 Auxiliary Trim Doc# 4433A",
      link5: "https://storage.googleapis.com/aa-americas/dam/AADSS1055972",
      text5: "View EM Raceway Template Doc# 4569C",
    },
  ],
  // Add more series for exit devices
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
  // Add more series for mortise locks
};
