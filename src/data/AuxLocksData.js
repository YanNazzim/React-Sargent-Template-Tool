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

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1086890", // Primary link
      text: "View Mounting Template Doc# 4263", // Link text
    },
    // Add more locks if needed
  ],
   8200 : [
    {
      device: '8200 Deadbolt',

      image: DB8200,
      title: '8200 Deadbolt',

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055660", // Primary link
      text: "View Mounting Template Doc# 7057", // Link text
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055593",
      text1: "View Curved & Straight Lip Strike Template Doc# 7063",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055661",
      text2: "View 78-0034 Deadbolt Strike Template Doc# 7064",
    }
  ],
  9200 : [
    {
      device: '9200 Deadbolt',

      image: DB8200,
      title: '9200 Deadbolt',

      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055660", // Primary link
      text: "View Mounting Template Doc# 7057", // Link text
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1055593",
      text1: "View Curved & Straight Lip Strike Template Doc# 7063",
      link2: "https://storage.googleapis.com/aa-americas/dam/AADSS1055661",
      text2: "View 78-0034 Deadbolt Strike Template Doc# 7064",
    }
  ],
  4870: [
    {
      device: '4870 Deadbolt',

      image: DB4870,
      title: '4870 Deadbolt',

      link: 'https://storage.googleapis.com/aa-americas/dam/AADSS1055682',
      text: 'View Mounting Template Doc# 4241',
      link1: 'https://storage.googleapis.com/aa-americas/dam/AADSS1055685',
      text1: 'View 7710 Strike Template (28-) Doc# 4242',
      link2: 'https://storage.googleapis.com/aa-americas/dam/AADSS1055683',
      text2: 'View Deadbolt Strike Template Doc# 4236',
      link3: 'https://storage.googleapis.com/aa-americas/dam/AADSS1055686',
      text3: 'View 7730 Strike Template Doc# 3960',
      
    }
  ],
  480: [
    {
      device: '480 Deadbolt',

      image: DB480,
      title: '480 Deadbolt',

      link: 'https://storage.googleapis.com/aa-americas/dam/AADSS1055654',
      text: 'View (20-) Mounting Template Doc# 4348',
      link1: 'https://storage.googleapis.com/aa-americas/dam/AADSS1055656',
      text1: 'View 404 Strike Template Doc# 4240',
      link2: 'https://storage.googleapis.com/aa-americas/dam/AADSS1055655',
      text2: 'View 400 Curved Lip Strike Template Doc# 4239',
      link3: 'https://storage.googleapis.com/aa-americas/dam/AADSS1055657',
      text3: 'View 408 Strike Template Doc# 4238',
      
    }
  ],
  460: [
    {
      device: '460 Deadbolt',

      image: DB460,
      title: '460 Deadbolt',

      link: 'https://storage.googleapis.com/aa-americas/dam/AADSS1206693',
      text: 'View Mounting Template Doc# 4755',
      link1: 'https://storage.googleapis.com/aa-americas/dam/AADSS1055656',
      text1: 'View 404 Strike Template Doc# 4240',
      
    }
  ],
};
