import About from "@/components/aboutSection/about";
import Intro from "@/components/introSection/intro";
import Projects from "@/components/projectsSection/projects";

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center py-36 sm:py-34 w-full">
        <Intro />
        <About />
        <Projects />
      </main>
    </>
  );
}
