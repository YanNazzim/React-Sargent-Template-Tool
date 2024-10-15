import { Images } from "../images/images";

export const CylindersData = {
  Rim: {
    title: "Rim Cylinders",
    mainImage: Images.CylRim,
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
    mainImage: Images.CylMortise,

    sections: [
      {
        heading: "Sizes",
        image: Images.CylMortiseSizes,
        texts: [],
        table: {
          headers: ["Part#","Size in Inches", "Size in mm "],
          rows: [
            [" #41 ",' 1 1/8" ', " 29 mm "],
            [" #42 ",' 1 1/4" ', " 32 mm "],
            [" #43 ",' 1 3/8" ', " 35 mm "],
            [" #44 ",' 1 1/2" ', " 38 mm "],
            [" #46 ",' 1 3/4" ', " 44 mm "],
            [" #48 ",' 2" ', " 51 mm "],
            [" #50 ",' 2 1/4" ', " 57 mm "],
            [" #52 ",' 1 1/2" ', " 64 mm "],
            [" #54 ",' 1 3/4" ', " 70 mm "],
            [" #56 ",' 3" ', " 76 mm "],



          ],
        },
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
    ],
  },
  Bored: {
    title: "Bored Locks Cylinders (KIK/KIL)",
    mainImage: Images.CylBored,

    sections: [
      {
        heading: "All Standard Key In Lever Cylinders",
        image: Images.CylAllRegBored,
        texts: [""],
      },
      {
        heading: "LFIC Key in Lever Cylinders",
        image: Images.CylBoredLFIC,
        texts: [""],
      },
      {
        heading: "SFIC Key in Lever Cylinders",
        image: Images.CylBoredSFIC,
        texts: [""],
      },
    ],
  },
  SFIC: {
    title: "Small Format Interchangable Core (SFIC)",

    sections: [
      {
        heading: "7300B Core",
        image: Images.CylCoreSFIC,
        texts: [""],
      },
      {
        heading: "SFIC Core with Mortise Housing",
        image: Images.CylHousingSFIC,
        texts: [""],
        table: {
          headers: ["Length","Keyed Core", "Disposable Core", "Construction Keyed Core"],
          rows: [
            [' 1-3/8" ',"73-43", "70-43", "72-43"],
            [' 1-3/4" ',"73-46", "70-46", "72-46"],
          ],
        },
      },
      {
        heading: 'Key Blanks/Cut Keys',
        image: Images.CylSFICKeyblanks,
        texts: [''],

      },
    ],
  },
  LFIC: {
    title: 'Large Format Interchangable Core (LFIC)',

    sections: [
      {
        heading: "6300 Core",
        image: Images.CylCoreLFIC,
        texts: [""],
      },
      {
        heading: "LFIC Core W/ Mortise Housing",
        image: Images.CylLFIC,
        texts: [""],
        table: {
          headers: ["Length","Keyed Core", "Disposable Core", "Construction Keyed Core"],
          rows: [
            [' 1-1/4" ',"63-42", "60-42", "64-42"],
            [' 1-3/8" ',"63-43", "60-43", "64-43"],
            [' 1-1/2" ',"63-44", "60-44", "64-44"],
            [' 1-3/4" ',"63-46", "60-46", "64-46"],
          ],
        },
      },
    ],
  },
  Degree: {
    title: 'Degree Security Cylinders',

    sections: [
      {
        heading: "Degree Cylinder Details",
        image: Images.CylDegreeFixedCore,
        texts: [""],
        table: {
          headers: ["Type","Degree Level", "Cylinder Size", "Came(s)"],
          rows: [
            ['Degree Mortise Cylinders',"DG1-, DG2- or DG3-", '41 (1-1/8"), 42 (1-1/4"), 43 (1-3/8"), 44 (1-1/2"), 46 (1-3/4")', "Std, 101,104,105,106,112 & 113"],
            [' 1-3/8" ',"63-43", "60-43", "64-43"],
            [' 1-1/2" ',"63-44", "60-44", "64-44"],
            [' 1-3/4" ',"63-46", "60-46", "64-46"],
          ],
        },
      },
      {
        heading: "Degree LFIC Details",
        image: Images.CylDegreeLFIC,
        texts: [""],
        table: {
          headers: ["Length","Keyed Core", "Disposable Core", "Construction Keyed Core"],
          rows: [
            [' 1-1/4" ',"63-42", "60-42", "64-42"],
            [' 1-3/8" ',"63-43", "60-43", "64-43"],
            [' 1-1/2" ',"63-44", "60-44", "64-44"],
            [' 1-3/4" ',"63-46", "60-46", "64-46"],
          ],
        },
      },
    ],
  }
  // Other cylinder types...
};
