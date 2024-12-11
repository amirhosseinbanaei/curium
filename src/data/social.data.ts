import X from "@/assets/icons/X.svg";
import Github from "@/assets/icons/Github.svg";
import Youtube from "@/assets/icons/Youtube.svg";
import Linkedin from "@/assets/icons/Linkedin.svg";
import Instagram from "@/assets/icons/Instagram.svg";

interface SocialsData {
  title: string;
  icon: any;
  href: string;
}

const socialsData: SocialsData[] = [
  { title: "Instagram", icon: Instagram, href: "#" },
  { title: "X", icon: X, href: "#" },
  { title: "Youtube", icon: Youtube, href: "#" },
  { title: "Linkedin", icon: Linkedin, href: "#" },
];

export const personsSocialsData: { [keyof: string]: SocialsData[] } = {
  "user-1": [
    { title: "Linkedin", icon: Linkedin, href: "#" },
    { title: "Instagram", icon: Instagram, href: "#" },
    { title: "X", icon: X, href: "#" }
  ],
  "user-2": [
    { title: "Linkedin", icon: Linkedin, href: "#" },
    { title: "Github", icon: Github, href: "https://github.com/amirhosseinbanaei" },
    { title: "Instagram", icon: Instagram, href: "#" },
    { title: "X", icon: X, href: "#" },
  ],
};

export default socialsData;
