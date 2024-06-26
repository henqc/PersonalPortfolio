import Image from "next/image";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { motion, useScroll, MotionValue, useTransform } from "framer-motion";
import Link from "next/link";

export default function Card(card: {
  i: number;
  title: string;
  description: string;
  src: string;
  skills: string[];
  link: string;
  color: string;
  num: string;
  progress: MotionValue<number>;
  range: number[];
  targetScale: number;
}) {
  const scale = useTransform(card.progress, card.range, [1, card.targetScale]);

  return (
    <div className="h-screen w-full flex items-center justify-center sticky top-0 mx-auto">
      <motion.div
        style={{
          scale,
          backgroundColor: card.color,
          top: `calc(${card.i * 25}px)`,
        }}
        className="w-full h-[600px] rounded-3xl flex flex-col xl:flex-row items-center justify-between p-10 relative"
      >
        <div className="flex flex-col xl:flex-row gap-4 xl:w-[40%] items-center xl:items-start">
          <div className="font-robotoSlab text-blue">{card.num}</div>
          <div className="flex flex-col gap-3 text-center xl:text-left font-robotoSlab">
            <div className="h3 font-gambarino mb-[20px] underline underline-offset-8 decoration-blue">
              {card.title}
            </div>
            <span className="font-robotoSlabLight leading-tight">
              {card.description}
            </span>

            <Link
              href={card.link}
              target="_blank"
              className="flex justify-center mb-[10px] xl:justify-normal xl:mb-0"
            >
              <button className="font-robotoSlab solid bg-blue w-[150px] h-[50px] rounded-[5px] text-left flex justify-between px-6 items-center hover:bg-[#387cd9]">
                Visit
                <ArrowForwardIcon />
              </button>
            </Link>
          </div>
        </div>
        <div className="w-[400px] h-[350px] xl:w-[55%] xl:h-[80%] relative overflow-hidden rounded-3xl">
          <Image
            src={card.src}
            priority
            quality={100}
            fill
            alt=""
            className="object-cover"
          />
        </div>
      </motion.div>
    </div>
  );
}
