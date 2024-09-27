/* Device Images */
import Mortise8200 from "../images/Mortise Lock.png";
import Mortise8200Electric from '../images/MortiseElectrified8200.png'

export const MortiseLocks = {
  8200: [
    {
      device: "Standard",
      functions: '8204, 8205, 8206, 8213, 8215, 8216, 8217, 8224, 8225, 8226, 8227, 8228, 8229, 8230, 8231, 8235, 8236, 8237, 8238, 8239, 8240, 8241, 8242, 8243, 8245, 8246, 8247, 8248, 8249, 8250, 8251, 8252, 8255, 8256, 8257, 8258, 8259, 8265, 8266, 8267, 8268',
      title: "W/ Sectional Trims",
      image: Mortise8200,
      text: "View Mounting Template Doc# 7057",
      link: "https://storage.googleapis.com/aa-americas/dam/AADSS1055660",
      text1: "View Mounting Template (Functions 70, 71, 72, 73) Doc# 7065-10",
      link1: "https://storage.googleapis.com/aa-americas/dam/AADSS1056016",
      text2: "Installation Guide",
      link2: "/templates/8200-installation-guide.pdf",
    },
    {
      device: "Standard",
      functions: '8204, 8205, 8206, 8213, 8215, 8216, 8217, 8224, 8225, 8226, 8227, 8228, 8229, 8230, 8231, 8235, 8236, 8237, 8238, 8239, 8240, 8241, 8242, 8243, 8245, 8246, 8247, 8248, 8249, 8250, 8251, 8252, 8255, 8256, 8257, 8258, 8259, 8265, 8266, 8267, 8268',
      title: "W/ Escutcheon Trims",
      image: Mortise8200,
      text: "Download Template",
      link: "/templates/8200-standard-template.pdf",
      warning: "",
      text1: "Wiring Diagram",
      link1: "/templates/8200-wiring-diagram.pdf",
      text2: "Installation Guide",
      link2: "/templates/8200-installation-guide.pdf",
    },

    {
      device: "Electrified",
      functions: '8270, 8271, 8272, 8273, 82270, 82271, 82274, 82275, 82280, 82281, 82284, 82285',
      title: "8200 Mortise Lock - Electrified",
      image: Mortise8200Electric,
      text: "Download Electrified Template",
      link: "/templates/8200-electrified-template.pdf",
      warning: "Ensure proper wiring setup.",
      text1: "Electrification Guide",
      link1: "/templates/8200-electrification-guide.pdf",
    },
  ],
  9200: [
    {
      device: "Standard",
      title: "9200 Mortise Lock - Standard",
      image: "/images/9200Standard.png",
      text: "Download Template",
      link: "/templates/9200-standard-template.pdf",
      warning: "",
      text1: "Installation Guide",
      link1: "/templates/9200-installation-guide.pdf",
    },
    {
      device: "Electrified",
      title: "9200 Mortise Lock - Electrified",
      image: "/images/9200Electrified.png",
      text: "Download Electrified Template",
      link: "/templates/9200-electrified-template.pdf",
      warning: "",
      text1: "Wiring Diagram",
      link1: "/templates/9200-wiring-diagram.pdf",
    },
  ],
  7800: [
    {
      device: "Standard",
      title: "7800 Mortise Lock - Standard",
      image: "/images/7800Standard.png",
      text: "Download Template",
      link: "/templates/7800-standard-template.pdf",
      warning: "",
      text1: "Installation Guide",
      link1: "/templates/7800-installation-guide.pdf",
    },
    // No Electrified option for 7800
  ],
};
