import { socialIcons } from "@/utils/constants";
import Image from "next/image";

export default function Icons() {
  return (
    <div className="flex justify-center gap-5 items-center">
      {socialIcons.map((Icon: any) => {
        return (
          <a key={0} href={Icon.url} target="_redirect">
            <Image alt="" src={Icon.icon} width={30} height={30}></Image>
          </a>
        );
      })}
    </div>
  );
}
