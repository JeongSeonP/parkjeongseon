import { FaGithub, FaGlobe } from "react-icons/fa6";
import nextJavaTimeImg from "@/public/assets/next-java-time.png";
import saveGameImg from "@/public/assets/save-game.jpg";
import { StaticImageData } from "next/image";

export const myProjects = [
  {
    name: "NEXT JAVA TIME",
    type: "개인 프로젝트",
    desc: "카카오로컬API를 활용하여 카페 리뷰와 평가를 공유하고 찾아볼 수 있는 공간입니다. 기존에 Vite+React기반으로 만들었던 것을 Next.js app router기반으로 마이그레이션한 프로젝트입니다.",
    notionLink:
      "https://fierce-catfish-3a3.notion.site/NEXT-JAVA-TIME-2f4faf81b04e45bea7367863514640ac?pvs=4",
    relatedLink: [
      {
        title: "github",
        linkName: "github 링크",
        href: "https://github.com/JeongSeonP/next-java-time",
      },
      {
        title: "website",
        linkName: "배포 링크",
        href: "https://next-java-time.vercel.app/",
      },
    ],
    techStack: [
      "Next.js",
      "React",
      "Typescript",
      "React-Query",
      "Firebase",
      "Tailwind",
    ],
    thumbnail: nextJavaTimeImg,
    thumbnailType: "web",
  },
  {
    name: "SAVE GAME",
    type: "팀 프로젝트 (BE 3명/FE 3명)",
    desc: "소비 절약을 위한 챌린지 참여를 통해 서로의 지출을 공유하며 절약에 대한 동기부여를 제공하는 서비스입니다. 지출가계부를 작성하여, 챌린지 기간 동안 챌린지방에서 나와 참여멤버들의 지출내역을 함께 비교하고 현재 순위를 확인할 수 있으며 목표금액 초과시에는 탈락되기도 합니다.",
    notionLink:
      "https://fierce-catfish-3a3.notion.site/SAVE-GAME-105e50542f48488bb5e23953d5d30370?pvs=4",
    relatedLink: [
      {
        title: "github",
        linkName: "github 링크",
        href: "https://github.com/save-game/frontend",
      },
    ],
    techStack: [
      "React",
      "Vite",
      "Typescript",
      "Recoil",
      "React-Router-Dom",
      "React-Query",
      "React-Chartjs",
      "Firebase",
      "Styled-Component",
      "Tailwind",
    ],
    thumbnail: saveGameImg,
    thumbnailType: "mobile",
  },
];

export type ProjectData = {
  name: string;
  type: string;
  desc: string;
  notionLink: string;
  relatedLink: {
    title: "github" | "website";
    linkName: string;
    href: string;
  }[];
  techStack: string[];
  thumbnail: StaticImageData;
  thumbnailType: "web" | "mobile";
};

export const linkIcons = {
  github: <FaGithub size={30} />,
  website: <FaGlobe size={30} />,
} as const;
