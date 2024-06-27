"use client";
import Bio from "@/components/Bio";
import Projects from "@/components/Projects";
import Home from "@/components/Home";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import SKillHeader from "@/components/SkillHeader";
import ProjetHeader from "@/components/ProjectsHeader";
import { useCallback, useEffect } from "react";
import Lenis from "lenis";
export default function Portfolio() {
  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);
  return (
    <div className="overflow-clip">
      <Home />
      <Bio />
      <SKillHeader />
      <Experience />
      <ProjetHeader />
      <Projects />
      <Contact />
    </div>
  );
}
