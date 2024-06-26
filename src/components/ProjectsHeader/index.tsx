import { fadein } from "@/utils/fadein";
import { motion } from "framer-motion";

export default function ProjectsHeader() {
  return (
    <div className="flex justify-center items-center flex-col gap-10 mb-[96px]">
      <motion.div
        variants={fadein({ direction: "up" })}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }}
        className="font-gambarino h01"
      >
        Selected Works <span className="text-blue font-bold">/</span>{" "}
        <sup>(4)</sup>
      </motion.div>
    </div>
  );
}
