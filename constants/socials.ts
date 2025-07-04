// constants/index.ts or socials.ts
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import type { ElementType } from "react"; // ✅ IMPORTANT

type Social = {
  name: string;
  link: string;
  icon: ElementType; // ✅ Tells TS it's a React component
};

export const SOCIALS: Social[] = [
  {
    name: "GitHub",
    link: "https://github.com/yourusername",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    link: "https://linkedin.com/in/yourusername",
    icon: FaLinkedin,
  },
  {
    name: "Twitter",
    link: "https://twitter.com/yourusername",
    icon: FaTwitter,
  },
];
