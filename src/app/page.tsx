import Bio from "@/components/Bio";
import Icons from "@/components/Icons";
import Projects from "@/components/Projects";
import Home from "@/components/Home";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

export default function Portfolio() {
  return (
    <div className="overflow-hidden">
      <Home />

      {/* <Bio />
      <Experience />
      <Projects />
      <Contact />*/}
    </div>
  );
}
