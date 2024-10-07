import { Images } from "../images/images";

export const CylindersData = {
  Rim: {
    title: "Rim Cylinders",
    tooltip: 'Right click on pictures to open in new tab<br />Tap & Hold on Mobile',
    sections: [
      {
        heading: "Rosette",
        image: Images.Cyl97Rosette,
        texts: [
          "Order Using #97 x Finish",
          "Used with Cylnder only Application (8504, 8804)",
        ],
      },

      {
        heading: "Parts",
        image: Images.CylRimParts,
        texts: [
          "Right Click on picture to open in new tab",
          "Tap + Hold if on Mobile",
        ],
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
    tooltip: 'Right click on pictures to open in new tab<br />Tap & Hold on Mobile',

    sections: [
      {
        heading: 'Sizes',
        image: Images.CylMortiseSizes,
        texts: [
          '#41 - 1-1/8"',
          '#42 - 1-1/4"',
          '#43 - 1-3/8"',
          '#44 - 1-1/2"',
          '#46 - 1-3/4"',
          '#48 - 2"',
          '#50 - 2-1/4"',
          '#52 - 2-1/2"',
          '#54 - 2-3/4"',
          '#56 - 3"',
        ]
      },
      {
        heading: "Parts",
        image: Images.CylMortiseParts,
        texts: [
          
        ],
      },
      {
        heading: "Cams",
        image: Images.CylCams,
        texts: ["Text 1 for Cams"],
      },
      // Additional sections...
    ],
  },
  // Other cylinder types...
};
