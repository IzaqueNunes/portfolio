import { AboutCardType } from "@/components/AboutCard";
import { ProjectCardType } from "@/components/ProjectCard";

import Email from "../assets/icons/email.svg";
import Linkedin from "../assets/icons/Linkedin.svg";
import Git from "../assets/icons/git.svg";

import Projeto1 from "../assets/images/projeto1.png";
import Projeto2 from "../assets/images/projeto2.png";
import Projeto3 from "../assets/images/projeto3.png";
import { ProgressBarType } from "@/components/ProgressBar";

export const ABOUT_CARDS: AboutCardType[] = [
  {
    id: "01",
    image: Linkedin,
    title: "Linkedin",
    link: "/",
  },
  {
    id: "02",
    image: Git,
    title: "Github",
    link: "/",
  },
  {
    id: "03",
    image: Email,
    title: "E-mail",
    link: "/",
  },
];

export const PROJECT_CARDS: ProjectCardType[] = [
  {
    id: "01",
    title: "Aplicativo musical",
    image: Projeto1,
    description:
      "Aplicativo musical feito com React Native e Nativewind. Aplicando também a ferramenta Expo-av para trabalhar com reprodução de áudios. Acesse o repositório para mais informações e imagens do projeto.",
  },
  {
    id: "02",
    title: "Landing page para oficina mecânica",
    image: Projeto2,
    description:
      "Site responsivo, aplicando o Wordpress como CMS de desenvolvimento em todo o processo, aplicando boas práticas de responsividade, bem como design interativo com o usuário.",
  },
  {
    id: "03",
    title: "Interface baseada no Spotify",
    image: Projeto3,
    description:
      "Para fim didático recriei a interface do Spotify, utilizando Typescript como linguagem, NextJs como framework React, e o TailwindCSS como lib de estilização. Projeto totalmente sem ligação com a empresa Spotify.",
  },
];

export const PROGRESS_BAR: ProgressBarType[] = [
  {
    id: "01",
    title: "ReactJS",
    level: "Avançado",
    percentage: "4/5",
  },
  {
    id: "02",
    title: "Typescript",
    level: "Avançado",
    percentage: "4/5",
  },
  {
    id: "03",
    title: "TailwindCSS",
    level: "Avançado",
    percentage: "4/5",
  },
  {
    id: "04",
    title: "React Native",
    level: "Intermediário",
    percentage: "3/5",
  },
  {
    id: "05",
    title: "NextJS",
    level: "Intermediário",
    percentage: "3/5",
  },
  {
    id: "06",
    title: "ChakraUI",
    level: "Intermediário",
    percentage: "3/5",
  },
];
