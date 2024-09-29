// src/data/AuxLocksData.js
import SSL1 from "../images/Aux SSL1 Spring Latch.png";
import DB8200 from '../images/Aux 8200 Deadbolt.png'

export const AuxLocks = {
  SSL1: [
    {
      device: "SSL1", // Use 'Electrified' if applicable

      title: "SSL1 Spring Latch",
      image: SSL1, // Update to your image path

      link: "https://example.com/ssl1", // Primary link
      text: "More about SSL1", // Link text
      link1: "https://example.com/additional-link1",
      text1: "Additional Link 1",
      link2: "https://example.com/additional-link2",
      text2: "Additional Link 2",
    },
    // Add more locks if needed
  ],
   8200 : [
    {
      device: '8200 Deadbolt',

      image: DB8200,
      title: '8200 Deadbolt',

      link: "https://example.com/ssl1", // Primary link
      text: "More about 8200 Deadbolt", // Link text
      link1: "https://example.com/additional-link1",
      text1: "Additional Link 1",
      link2: "https://example.com/additional-link2",
      text2: "Additional Link 2",
    }
  ]
};
