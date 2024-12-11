import { SloganData } from "@/components/slogan";
import Phone from "@/assets/icons/Phone.svg";
import Envelope from "@/assets/icons/Envelope.svg";
import Whatsapp from "@/assets/icons/Whatsapp.svg";
import Message from "@/assets/icons/Message.svg";
interface SlogansDataInterface {
  techStudio: SloganData[];
  mediaEngine: SloganData[];
  contactUs: SloganData[];
}

const slogansData: SlogansDataInterface = {
  techStudio: [
    {
      id: 1,
      tags: true,
      numberOfTags: 3,
    },
    {
      id: 2,
      tags: false,
      numberOfTags: 3,
    },
    { id: 3, tags: false, numberOfTags: 3 },
  ],
  mediaEngine: [
    {
      id: 1,
      tags: true,
      numberOfTags: 3,
    },
    {
      id: 2,
      tags: false,
      numberOfTags: 3,
    },
    { id: 3, tags: false, numberOfTags: 3 },
  ],
  contactUs: [
    {
      id: 1,
      tags: false,
      buttonsLink: [
        { title: "Phone", icon: Phone, link: "#" },
        { title: "Email", icon: Envelope, link: "#" },
        { title: "Whatsapp", icon: Whatsapp, link: "#" },
      ],
    },
    {
      id: 2,
      tags: false,
      buttonsLink: [
        { title: "Get In Touch", icon: Message, link: "#" },
      ],
    },
  ],
};

export default slogansData;
