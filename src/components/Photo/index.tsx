import Image from "next/image";

export default function Photo() {
  return (
    <div className="w-full h-full relative">
      <div className="w-[298px] h-[298px] xl:w-[350px] xl:h-[450px]">
        <Image
          src="/profile.jpeg"
          priority
          quality={100}
          fill
          alt=""
          className="object-contain rounded-[25px] xl:w-[350px] xl:h-[450px]"
        />
      </div>
    </div>
  );
}
