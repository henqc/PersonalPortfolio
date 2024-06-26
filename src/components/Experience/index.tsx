import { skills } from "@/utils/constants";
import { useScroll, motion, MotionValue, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Experience() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const Slider = (prop: {
    left: string;
    progress: MotionValue<number>;
    direction: string;
  }) => {
    const { left, progress, direction } = prop;
    const dir = direction === "left" ? -1 : 1;
    const x = useTransform(progress, [0, 1], [-400 * dir, 400 * dir]);
    return (
      <motion.div
        id="logos-slide"
        style={{ left, x }}
        className="flex flex-row relative whitespace-nowrap"
      >
        <Slide />
        <Slide />
      </motion.div>
    );
  };

  const Slide = () => {
    return (
      <div className="flex flex-row relative whitespace-nowrap">
        {skills.map((skill, index) => {
          return (
            <div key={index} className="">
              <div className="w-[80px] h-[80px] xl:w-[150px] xl:h-[150px] bg-[#27272c] flex justify-center items-center rounded-xl group mr-[10px] xl:mr-[30px]">
                <div className="text-6xl group-hover:text-blue transition-all duration-300">
                  {<skill.icon />}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div id="skills" className="section">
      <div className="h-full px-0">
        <div ref={container} className="flex flex-col gap-4">
          <Slider left="-55%" progress={scrollYProgress} direction={"left"} />
          <Slider left="-15%" progress={scrollYProgress} direction={"right"} />
          <Slider left="-40%" progress={scrollYProgress} direction={"left"} />
        </div>
      </div>
    </div>
  );
}
