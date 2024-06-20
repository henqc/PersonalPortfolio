import Image from "next/image";
import Icons from "@/components/Icons";
import Photo from "@/components/Photo";

export default function Home() {
  return (
    <div id="home" className="section">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="flex flex-col gap-3 text-center xl:text-left font-robotoSlab">
            <span className="text-xl">Software Developer</span>
            <h1 className="h2 font-gambarino">
              Hello I&apos;m <br />{" "}
              <span className="h1 gradient-text text-transparent animate-gradient">
                Henry Chen
              </span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white">
              A freelance front-end developer and web designer helping startups
              all around the world gain their unfair advantage. world gain their
              unfair advantage.
            </p>
          </div>
          <div>
            <Photo />
          </div>
        </div>
      </div>
    </div>
  );
}
