import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <div className="text-blue-100 font-robotoSlab text-2xl mt-24">
        Hi, my name is
      </div>
      <div className="text-blue text-9xl font-gambarino">Henry Chen</div>
      <div className="flex flex-row">
        <div className="text-5xl font-robotoSlab w-3/5 leading-snug">
          A freelance front-end developer and web designer helping startups all
          around the world gain their unfair advantage.
        </div>
      </div>
    </div>
  );
}
