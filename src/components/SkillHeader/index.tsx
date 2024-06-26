import { fadein } from "@/utils/fadein";
import { motion } from "framer-motion";

export default function SkillHeader() {
  return (
    <div className="flex justify-center items-center flex-col gap-10">
      <motion.div
        variants={fadein({ direction: "up" })}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }}
        className="font-gambarino h01"
      >
        What I Use <span className="text-blue font-bold">/</span>{" "}
        <sup>(13)</sup>
      </motion.div>
    </div>
  );
}
