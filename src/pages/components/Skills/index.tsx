import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
interface Jobs{
   cards: Cards[];
}

interface Cards{ 
  title:string;
  url: string;
}

const Skills = () => {
  const { t } = useTranslation();
  const cardsjobs:Cards[] =   [
    {
      title: "HTML5",
      url: "/assets/images/html.png",
    },
    {
      title: "CSS3",
      url: "/assets/images/css.png",
    },
    {
      title: "JavaScript",
      url: "/assets/images/js.png",
    },
    {
      title: "Java",
      url: "/assets/images/java.png",
    },
    {
      title: "Typescript",
      url: "/assets/images/ts.png",
    },
    {
      title: "Node.js",
      url: "/assets/images/node.png",
    },
    {
      title: "Nest.js",
      url: "/assets/images/NestJS.png",
    },
    {
      title: "NextJS",
      url: "/assets/images/nextjs.png",
    },
    {
      title: "Quarkus",
      url: "/assets/images/quarkuscom.png",
    },
    {
      title: "Spring Boot",
      url: "/assets/images/spring-logo.png",
    },
    {
      title: "Go",
      url: "/assets/images/golang.png",
    },
    {
      title: "C#",
      url: "/assets/images/csharp.png",
    },
    {
      title: "Git",
      url: "/assets/images/git.png",
    },
    {
      title: "Docker",
      url: "/assets/images/docker.png",
    },
    {
      title: "D3.js",
      url: "/assets/images/d3js.png",
    },
    {
      title: "Karma.js",
      url: "/assets/images/karma.png",
    },
    {
      title: "ReactJs",
      url: "/assets/images/reactjs.png",
    },
    {
      title: "Angular",
      url: "/assets/images/angular.png",
    },
    {
      title: "Electron",
      url: "/assets/images/electron.png",
    },
    {
      title: "Kubernets",
      url: "/assets/images/kubernets.png",
    },
  ]
  return (
    <div className="cards">
      {cardsjobs.map((card, index) => (
        <div className="card animate__animated animate__bounceInLeft" key={index}>
          <Image 
          width={100}
          height={100}
          src={card.url} 
          alt={`${t("skillsAlt")} ${card.title}`} />
          <h3>{card.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default Skills;
