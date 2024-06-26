import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

const socialIcons = [
  {
    icon: <FaGithub className="text-xl xl:text-5xl" />,
    path: "https://github.com/henqc",
  },
  {
    icon: <FaLinkedin className="text-xl xl:text-5xl" />,
    path: "https://www.linkedin.com/in/henqc/",
  },
  {
    icon: <CiMail className="text-xl xl:text-5xl" />,
    path: "mailto:henryqc.cs@gmail.com?subject=Hello",
  },
];

const Icons = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socialIcons.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            className={iconStyles}
            target="_blank"
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Icons;
