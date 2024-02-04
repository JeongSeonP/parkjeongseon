"use client";

import React from "react";
import { ProjectData, myProjects } from "@/lib/myProjects";
import ProjectItem from "./projectItem";
import useSetMenuInView from "@/hooks/useSetMenuInView";

export default function Projects() {
  const observeThreshold = 0.3;
  const observeTarget = useSetMenuInView("Projects", observeThreshold);
  return (
    <section
      ref={observeTarget}
      className="w-11/12 mx-auto text-center pb-16 scroll-mt-36"
      id="projects"
    >
      <div className="relative mb-10">
        <div className="mx-auto bg-slate-200 dark:bg-cyan-950 blur-lg w-44 h-16 rounded-full" />
        <h2 className="absolute inset-0  flex items-center justify-center h-16 font-bold text-xl">
          My Projects
        </h2>
      </div>
      <div className="flex flex-col items-center justify-center  text-center gap-8">
        {(myProjects as ProjectData[]).map((project: ProjectData) => (
          <React.Fragment key={project.name}>
            <ProjectItem project={project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
