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
    sections: [
      {
        heading: "Rosettes",
        image: "path_to_image_of_rosettes",
        texts: ["Text 1 for Rosettes", "Text 2 for Rosettes"],
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
