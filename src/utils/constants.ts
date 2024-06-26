import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaAws,
  FaPython,
  FaJava,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
} from "react-icons/si";

export const navList = [
  {
    label: "About Me",
    path: "aboutme",
  },
  {
    label: "Skills",
    path: "skills",
  },
  {
    label: "Projects",
    path: "projects",
  },
];

export const projectList = [
  {
    title: "Runway",
    description:
      "An exclusive network of the top university students in business development and engineering",
    src: "/Runway.png",
    skills: ["Python", "R", "React"],
    link: "https://www.joinrunway.io/",
    color: "#27272c",
    num: "01.",
  },
  {
    title: "Green Whistle",
    description:
      "Empowering ethical insiders to confidentially expose environmental misconduct",
    src: "/GreenWhistle.png",
    skills: [
      "NextJS",
      "Tailwind",
      "NodeJS",
      "AWS Dynamo/S3/EC2",
      "Java Spring",
    ],
    link: "https://github.com/henqc/WhistleblowingApp",
    color: "#27272c",
    num: "02.",
  },
  {
    title: "SpotiRecc",
    description:
      "Effortlessly discover new music tailored to your Spotify tastes",
    src: "/SpotiRecc.png",
    skills: [
      "NextJS",
      "Tailwind",
      "NodeJS",
      "AWS Dynamo/S3/EC2",
      "Java Spring",
    ],
    link: "https://github.com/henqc/Spotify-Dash",
    color: "#27272c",
    num: "03.",
  },
  {
    title: "Movie Metrics",
    description:
      "Uncover cinematic insights and explore movie trends across the decades",
    src: "/MovieMetric.png",
    skills: [
      "NextJS",
      "Tailwind",
      "NodeJS",
      "AWS Dynamo/S3/EC2",
      "Java Spring",
    ],
    link: "https://github.com/henqc/plotly-dash",
    color: "#27272c",
    num: "04.",
  },
];

export const socialIcons = [
  {
    icon: "/github.svg",
    url: "https://github.com/henqc",
  },
  {
    icon: "/linkedin.svg",
    url: "https://www.linkedin.com/in/henqc/",
  },
  {
    icon: "/email.svg",
    url: "mailto:henryqc.cs@gmail.com?subject=hello",
  },
];

export const skills = [
  {
    icon: FaHtml5,
    name: "Html5",
  },
  {
    icon: FaCss3,
    name: "Css3",
  },
  {
    icon: FaJs,
    name: "Javascript",
  },
  {
    icon: FaReact,
    name: "ReactJs",
  },
  {
    icon: FaFigma,
    name: "Figma",
  },
  {
    icon: FaNodeJs,
    name: "NodeJs",
  },
  {
    icon: SiTypescript,
    name: "Typescript",
  },
  {
    icon: SiNextdotjs,
    name: "Nextjs",
  },
  {
    icon: SiTailwindcss,
    name: "Tailwind",
  },
  {
    icon: SiMongodb,
    name: "MongoDB",
  },
  {
    icon: FaAws,
    name: "AWS",
  },
  {
    icon: FaPython,
    name: "Python",
  },
  {
    icon: FaJava,
    name: "Java",
  },
];
