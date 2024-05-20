import { navList } from "@/utils/constants";
import "@/app/globals.css";

export default function Nav() {
  return (
    <div className="w-full h-20 flex flex-row justify-between">
      <div className="flex h-full text-blue justify-begin items-center font-gambarino text-4xl">
        HC
      </div>
      <div>
        <div className="flex justify-end gap-20 h-full items-center">
          {navList.map((navElement: any) => {
            return (
              <a href={navElement.path} key={navElement.label}>
                <div className="text-black font-robotoSlab text-xl">
                  {navElement.label}
                </div>
              </a>
            );
          })}
        </div>
        <button className="shadow-[inset_0_0_0_2px_#616467] text-black px-12 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200">
          Get in Touch
        </button>
      </div>
    </div>
  );
}
