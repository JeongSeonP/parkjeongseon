import { FaGithub } from "react-icons/fa6";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { TbNotebook } from "react-icons/tb";

export const profileDatas = [
  {
    name: "finchblue8@gmail.com",
    href: "mailto:finchblue8@gmail.com",
    icon: <HiOutlineEnvelope size={20} />,
  },
  {
    name: "Blog",
    href: "https://makeitdawn.tistory.com",
    icon: <TbNotebook size={20} />,
  },
  {
    name: "Github",
    href: "https://github.com/JeongSeonP",
    icon: <FaGithub size={20} />,
  },
] as const;
