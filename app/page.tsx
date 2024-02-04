import About from "@/components/about";
import Intro from "@/components/intro";
import Projects from "@/components/projects";

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
