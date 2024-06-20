import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

const socialIcons = [
  { icon: <FaGithub />, path: "" },
  { icon: <FaLinkedin />, path: "" },
  { icon: <CiMail />, path: "" },
];

const Icons = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socialIcons.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Icons;
