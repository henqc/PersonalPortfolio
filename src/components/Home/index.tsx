"use client";

import Image from "next/image";
import Icons from "@/components/Icons";
import Photo from "@/components/Photo";

import { motion } from "framer-motion";
import { fadein } from "@/utils/fadein";

export default function Home() {
  return (
    <div id="home" className="section bg-[#27272c]">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between">
          <div className="flex flex-col gap-3 text-center xl:text-left font-robotoSlab">
            <motion.span
              variants={fadein({ direction: "up", delay: 0.1 })}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="text-xl"
            >
              Software Developer
            </motion.span>
            <motion.h1
              variants={fadein({ direction: "up", delay: 0.2 })}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="h2 font-gambarino"
            >
              Hello I&apos;m <br />{" "}
              <motion.span
                variants={fadein({ direction: "up", delay: 0.3 })}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.7 }}
                className="h1 gradient-text text-transparent animate-gradient"
              >
                Henry Chen
              </motion.span>
            </motion.h1>
            <motion.p
              variants={fadein({ direction: "up", delay: 0.5 })}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="max-w-[500px] mb-9 text-white"
            >
              A passionate computer science student with an interest in
              full-stack development and artificial intelligence. Constantly
              learning, building, and pushing boundries.
            </motion.p>
          </div>
          <motion.div
            variants={fadein({ direction: "up", delay: 0.3 })}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
          >
            <Photo />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
