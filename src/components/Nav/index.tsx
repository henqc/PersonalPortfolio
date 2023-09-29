import { navList } from "@/utils/constants";

export default function Nav() {
  return (
    <div className="flex gap-20 mt-5">
      {navList.map((navElement: any) => {
        return (
          <a href={navElement.path} key={navElement.label}>
            {navElement.label}
          </a>
        );
      })}
    </div>
  );
}
