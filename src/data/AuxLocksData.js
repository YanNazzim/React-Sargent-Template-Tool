// src/data/AuxLocksData.js
import SSL1 from "../images/Aux SSL1 Spring Latch.png";
import DB8200 from '../images/Aux 8200 Deadbolt.png'
import DB4870 from '../images/Aux 4870 Deadbolt.png'
import DB480 from '../images/Aux 480 Deadbolt.png'
import DB460 from '../images/Aux 460 Deadbolt.png'

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
  ],
  4870: [
    {
      device: '4870 Deadbolt',

      image: DB4870,
      title: '4870 Deadbolt',

      
      
    }
  ],
  480: [
    {
      device: '480 Deadbolt',

      image: DB480,
      title: '480 Deadbolt',

      
      
    }
  ],
  460: [
    {
      device: '460 Deadbolt',

      image: DB460,
      title: '460 Deadbolt',

      
      
    }
  ],
};
