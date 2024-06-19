import { navList } from "@/utils/constants";
import "@/app/globals.css";

export default function Nav() {
  return (
    <div className="w-full h-20 flex flex-row justify-between">
      <div className="flex h-full text-blue justify-begin items-center font-gambarino text-4xl">
        HC
      </div>
      <div className="flex flex-row gap-20 items-center">
        <div className="flex justify-end gap-20 h-full items-center">
          {navList.map((navElement: any) => {
            return (
              <a href={navElement.path} key={navElement.label}>
                <div className="font-robotoSlab text-xl">
                  {navElement.label}
                </div>
              </a>
            );
          })}
        </div>
        <button className="font-robotoSlab text-xl rounded-full border px-7 h-12 border-blue">
          Get in Touch
        </button>
      </div>
    </div>
  );
}
