import Image from "next/image";

export default function Bio() {
  return (
    <div className="flex flex-col items-center mt-36 w-full">
      <div className="flex flex-row gap-8">
        <Image
          className=""
          alt=""
          src={"/filledstar.svg"}
          width={35}
          height={35}
        ></Image>
        <div className=" text-8xl font-gambarino">About Me</div>
        <Image
          className=""
          alt=""
          src={"/filledstar.svg"}
          width={35}
          height={35}
        ></Image>
      </div>
      <div className="mt-20 flex flex-row justify-between w-full">
        <Image
          className=""
          alt=""
          src={"/profile.jpeg"}
          width={650}
          height={800}
        ></Image>
        <div className="">
          <div>A brief look into my life</div>
        </div>
      </div>
    </div>
  );
}
