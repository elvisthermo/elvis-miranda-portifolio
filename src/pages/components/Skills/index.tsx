import React from "react";
import styled from "styled-components";
import { FaCode, FaDesktop, FaMobile } from "react-icons/fa";
import { SkillIcon, SkillName, SkillSection } from "./styles";
import Image from "next/image";
import { cards } from "./data";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const { t } = useTranslation();


  return (
    <div className="cards">
      {cards.map((card, index) => (
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
