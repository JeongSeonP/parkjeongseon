"use client";

import { ProjectData, linkIcons } from "@/lib/myProjects";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { FaRegHandPointUp } from "react-icons/fa6";
import { SiNotion } from "react-icons/si";

export default function ProjectItem({ project }: { project: ProjectData }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "0.6 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      className="relative max-w-xl bg-gray-200 dark:bg-gray-700 hover:bg-gray-200/70  rounded-md  border border-gray-300 dark:border-gray-500"
      ref={ref}
      style={{
        scale: scaleProgress,
      }}
    >
      <article
        className="flex flex-col justify-center items-center px-5 sm:px-16 py-6"
        key={project.name}
      >
        <div className="text-lg font-bold text-slate-700 dark:text-indigo-200 mb-3">
          {project.name}
        </div>
        <div className="bg-indigo-400 text-zinc-100 text-xs font-bold rounded-full py-0.5 px-3 mb-3">
          {project.type}
        </div>
        <p className="text-sm font-bold mb-3">{project.desc}</p>
        <a
          href={project.notionLink}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center bg-white dark:bg-slate-800 p-3 rounded-md mb-3 shadow"
        >
          <SiNotion />
          <div className="ml-1 text-sm font-bold">
            <div>기능구현과 트러블슈팅 상세페이지</div>
          </div>
          <div className="absolute -left-6 rotate-90">
            <FaRegHandPointUp
              size={20}
              className="animate-bounce text-indigo-500 dark:text-indigo-400"
            />
          </div>
        </a>
        <div className="absolute flex gap-2 -top-2 right-1 sm:top-2 sm:right-10">
          {project.relatedLink.map((link) => (
            <a
              key={link.title}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white border dark:text-slate-800  rounded-full text-sm font-bold mt-3"
            >
              {linkIcons[link.title]}
              <span className="sr-only">{link.linkName}</span>
              <span className="hidden absolute -top-5 left-2 group-hover:block z-[888]  bg-slate-300 py-0.5 px-1 rounded-lg text-xs font-medium whitespace-nowrap">
                {link.linkName}
              </span>
            </a>
          ))}
        </div>
        <ul className="flex flex-wrap gap-2 mb-3">
          {project.techStack.map((tech) => (
            <li
              key={tech}
              className="px-2 py-0.5 rounded-full  text-xs font-medium text-zinc-100 bg-slate-600 dark:bg-slate-900"
            >
              {tech}
            </li>
          ))}
        </ul>
        <div>
          <Image
            src={project.thumbnail}
            alt="프로젝트썸네일"
            width={project.thumbnailType === "mobile" ? 150 : 400}
            height={400}
            className="w-auto"
          />
        </div>
      </article>
    </motion.div>
  );
}
