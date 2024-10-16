import { Images } from "../images/images";

export const CylindersData = {
  Rim: {
    title: "Rim Cylinders",
    mainImage: Images.CylRim,
    sections: [
      {
        heading: "Rosette",
        image: Images.Cyl97Rosette,
        metadata: 'Rim, Cylinder, Rim Cylinder, Cylinders, Rim Cylinders, Rosettes, 97 Rosette, 97 Rose',
        texts: [
          "Order Using #97 x Finish",
          "Used with Cylnder only Application (8504, 8804)",
          "04 function W/ ET Trim dont use rosette",
        ],
      },

      {
        heading: "Parts",
        image: Images.CylRimParts,
        metadata: 'Rim, Rim Parts, Rim Cylinder, Rim Cylinder Parts, 34, Rim parts, Rim Cylinder Parts',

        texts: [],
      },
      {
        heading: "Schlage Keyways",
        image: Images.CylSchlageKeyway,
        metadata: 'Competitor, Schlage, Keyway, Schlage Keyway, Schlage C, Schlage E, Rim, Rim Cylinder, 34, SC-34, SE-34',
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
        metadata: 'Mortise Sizing, Mortise Sizes, Sizes, Sizing, Mortise, ',
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
        metadata: 'Parts, Mortise Parts, Mortise, ',
        texts: [""],
      },
      {
        heading: "Cams",
        image: Images.CylCams,
        metadata: 'Cams, Mortise, Mortise Cams, Mortise Cam, Cam, Standard, 105, 22-standard, 22, 22-105, 115',
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
        metadata: 'C11-1, C11-2, C10X-1, 31-C10X-1, C10X-1E, 31-C10X-1E, C10X-2, C10X-3, 31-C10X-3, C10-1, C10-2, C10-3, C8X-1, C6-1, C6-1B, C6-2, C6-2B, C480-1, C480-2, C480-3, C750-1, C1655-1, 4101',
      },
      {
        heading: "LFIC Key in Lever Cylinders",
        image: Images.CylBoredLFIC,
        texts: [""],
        metadata: '6300, 10-6300, DG1-6300, DG2-6300, DG3-6300, LFIC, Large, Format, Large Format, Interchangable, Core, Interchangable Core, Large Format Interchangable Core',
      },
      {
        heading: "SFIC Key in Lever Cylinders",
        image: Images.CylBoredSFIC,
        texts: [""],
        metadata: '7300B, 7P-7300B, 11-7300B, SFIC, Small, Format, Interchangable, Core, Small Format, Interchangable Core, Small Format Interchangable Core',
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
        metadata: 'SFIC, 73-, 7300B,7300, Small, Format, Interchangable, Core, Small Format, Interchangable Core, Small Format Interchangable Core',

      },
      {
        heading: "SFIC Core with Mortise Housing",
        image: Images.CylHousingSFIC,
        texts: [""],
        metadata: 'SFIC, 73-, 7300B,7300, Small, Format, Interchangable, Core, Small Format, Interchangable Core, Small Format Interchangable Core, 70-43, 73-43, 70-46, 73-46, 43, 46',
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
        metadata: 'Keys, Key, Blank, Key Blank, Blanks, Control Keye, Master Key, Master, Control',

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
        metadata: 'LFIC, Large, Format, Interchangable, Core, Large Format Interchangable Core, ',
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
      {
        heading: "LFIC Cams",
        image: Images.CylLFICCams,
        texts: [""],
        metadata: 'Cams, Cam, LFIC, 105, 115, 101, 106, 112, 113, Standard, ',
      },
      {
        heading: 'Key Blanks/Cut Keys',
        image: Images.CylKeyBlanks,
        texts: [''],
        metadata: 'Keys, Key, Blank, Key Blank, Blanks, Control Keye, Master Key, Master, Control',

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
        metadata: 'DG1, DG2, DG3, DG1-, DG2-, DG3-, Degree, DG Cylinder, Cylinder, Deg, Degree 1, Degree 2, Degree3, Rim, Rim Cylinder, 34',

        table: {
          headers: ["Type","Degree Level", "Cylinder Size", "Came(s)"],
          rows: [
            ['Degree Mortise Cylinders',"DG1-, DG2- or DG3-", '41 (1-1/8"), 42 (1-1/4"), 43 (1-3/8"), 44 (1-1/2"), 46 (1-3/4")', "Std, 101,104,105,106,112 & 113"],
            ['Expose Plug DG Mortise Cylinders (78-)" ',"DG1-", '41 (1-1/8") 42 (1-1/4") 43 (1-3/8")', "Standard or 105"],
            ['Hotel Function DG Mortise Cylinders (50-)',"DG1", '43 (1-3/8") 44 (1-1/2")', "115 Only"],
          ],
        },
      },
      {
        heading: "Degree Rim Cylinder Details",
        image: Images.CylDegreeRim,
        texts: [""],
        metadata: 'DG1, DG2, DG3, DG1-, DG2-, DG3-, Degree, DG Cylinder, Cylinder, Deg, Degree 1, Degree 2, Degree3, Rim, Rim Cylinder, 34',
    
      },
      {
        heading: "Degree LFIC Details",
        image: Images.CylDegreeLFIC,
        texts: [""],
        metadata: 'DG1, DG2, DG3, DG1-, DG2-, DG3-, Degree, DG Cylinder, Cylinder, Deg, Degree 1, Degree 2, Degree3, Rim, Rim Cylinder, 34',

        table: {
          headers: ["Length","Degree Level", "Keyed Core", "Disposable Core", "Construction Keyed Core"],
          rows: [
            [' 1-1/4" ', "DG1-, DG2- DG3-", "63-42", "60-42", "64-42"],
            [' 1-1/2" ', "DG1-, DG2- DG3-", "63-44", "60-44", "64-44"],
            [' 1-3/4" ', "DG1-, DG2- DG3-", "63-46", "60-46", "64-46"],
          ],
        },
      },
      {
        heading: "Degree Cam Details",
        image: Images.CylDegreeCams,
        metadata: 'cams, Degree, DG1, DG2, DG3',
        texts: [""],

      },
      {
        heading: "Degree Bored Lock Cylinder Details",
        image: Images.CylDegreeBored,
        metadata: 'C11-1, C11-2, C10X-1, C10X-2, C10-1, C10-2, C8-1, C8-2, C8X-1, C6-1, C7600-1, Bored Locks, Cylinder, Bored, KIL, KIK, DG1, DG2, DG3, 42, 43, 44, 46, DG-, DG-6300, 6300',
        texts: [""],

      },

    ],
  },
  KESO: {
    title: 'KESO F1',
    sections: [
      {
        heading: "KESO F1 Mortise Cylinder Details",
        image: Images.CylKESOMortise,
        texts: [""],
      },
      {
        heading: "KESO F1 Rim Cylinder Details",
        image: Images.CylKESORim,
        texts: [""],
      },
      {
        heading: "KESO F1 Bored Lock Cylinder Details",
        image: Images.CylKESOBored,
        texts: [""],
      },
      {
        heading: "KESO F1 Cam Details",
        image: Images.CylKESOCams,
        metadata: 'cams',

        texts: [""],
      },

    ],
  }
  // Other cylinder types...
};
