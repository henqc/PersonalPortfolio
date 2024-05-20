import Bio from "@/components/Bio";
import Icons from "@/components/Icons";
import Nav from "@/components/Nav";
import Pfp from "@/components/Pfp";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-10 pb-3 pl-20 pr-20 bg-gray">
      <Nav />
      <Pfp />
      <Bio />
      <Projects />
      <Icons />
    </div>
  );
}
