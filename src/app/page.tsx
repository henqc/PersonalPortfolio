import Bio from "@/components/Bio";
import Icons from "@/components/Icons";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import Home from "@/components/Home";

export default function Portfolio() {
  return (
    <div className="flex flex-col items-center pb-3 pl-20 pr-20 bg-gray">
      <Nav />
      <Home />
      <Bio />
      <Projects />
      <Icons />
    </div>
  );
}
