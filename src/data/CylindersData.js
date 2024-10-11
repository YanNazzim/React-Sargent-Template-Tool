import { Images } from "../images/images";

export const CylindersData = {
  Rim: {
    title: "Rim Cylinders",
    sections: [
      {
        heading: "Rosette",
        image: Images.Cyl97Rosette,
        texts: [
          "Order Using #97 x Finish",
          "Used with Cylnder only Application (8504, 8804)",
          "04 function W/ ET Trim dont use rosette",
        ],
      },

      {
        heading: "Parts",
        image: Images.CylRimParts,

        texts: [],
      },
      {
        heading: "Schlage Keyways",
        image: Images.CylSchlageKeyway,
        texts: [
          "Image contains Finishes",
          "For Schlage 'C' -> SC-34",
          "For Schlage 'E' -> SE-34",
        ],
      },
      // Additional sections...
    ],
  },
  Mortise: {
    title: "Mortise Cylinders",

    sections: [
      {
        heading: "Sizes",
        image: Images.CylMortiseSizes,
        texts: [],
      },
      {
        heading: "Parts",
        image: Images.CylMortiseParts,
        texts: [""],
      },
      {
        heading: "Cams",
        image: Images.CylCams,
        texts: [],
      },
      // Additional sections...
    ],
  },
  Bored: {
    title: "KIL/KIK Cylinders",

    sections: [
      {
        heading: "All Standard Cylinders",
        image: Images.CylAllRegBored,
        texts: [""],
      },
    ],
  },
  SFIC: {
    title: "Small Format Interchangable Core",

    sections: [
      {
        heading: "7300B Core",
        image: Images.CylCoreSFIC,
        texts: [""],
      },
      {
        heading: "SFIC with housing",
        image: Images.CylHousingSFIC,
        texts: ['70-43 1-3/8"', '70-46  1-3/4"', '1-5/32" (29mm) diameter housing'],
      },
      {
        heading: 'Key Blanks/Cut Keys',
        image: Images.CylSFICKeyblanks,
        texts: [''],

      },
    ],
  },
  LFIC: {
    title: 'Large Format Interchangable Core',

    sections: [
      {
        heading: "6300 Core",
        image: Images.CylCoreLFIC,
        texts: [""],
      },
    ],
  },
  // Other cylinder types...
};
