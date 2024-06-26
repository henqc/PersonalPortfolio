import { motion } from "framer-motion";
import { fadein } from "@/utils/fadein";

export default function Bio() {
  const boxVariants = {
    hidden: {
      width: 0,
    },
    visible: {
      width: "100%",
      padding: 10,
      transition: {
        duration: 0.5,
        delay: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div id="aboutme" className="section">
      <div className="container">
        <div className="flex items-center justify-center">
          <motion.div
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true, amount: "some" }}
            variants={boxVariants}
            className="w-full h-[500px] rounded-3xl  bg-[#27272c] overflow-hidden"
          >
            <div className="flex flex-col items-center relative py-10 px-[100px] gap-[100px]">
              <motion.div
                variants={fadein({ direction: "up", delay: 0.3 })}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.7 }}
                className="h2 font-gambarino text-white text-center underline underline-offset-[20px] decoration-blue"
              >
                About Me
              </motion.div>
              <div className="flex flex-col gap-4 font-robotoSlab text-center mx-auto">
                <motion.p
                  variants={fadein({ direction: "up", delay: 0.4 })}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: true, amount: 0.7 }}
                >
                  I&apos;m a passionate software developer currently studying
                  Computer Science at the University of Virginia, with a minor
                  in Data Science. I love using my coding skills to build
                  innovative projects that make a positive impact on
                  people&apos;s lives.
                </motion.p>
                <motion.p
                  variants={fadein({ direction: "up", delay: 0.5 })}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: true, amount: 0.7 }}
                >
                  When I&apos;m not immersed in writing code or learning about
                  the latest technologies, you can find me enjoying video games
                  or playing sports with friends. I believe in maintaining a
                  healthy work-life balance to bring my best self to every
                  project.
                </motion.p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
