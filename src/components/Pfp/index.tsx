import Image from "next/image";

export default function Pfp() {
  return (
    <div>
      <Image
        className="rounded-full"
        alt=""
        src={"/pfp.jpg"}
        width={300}
        height={300}
      ></Image>
    </div>
  );
}
