import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const About = () => {
  const { t } = useTranslation();
  return (
    <div className="wrapper">
      <div className="col-a">
        <header>
          <h2>{t("about")}</h2>
        </header>
        <div className="content">
          <p>{t("myDescription")}</p>
        </div>
      </div>

      <div className="col-b">
        <img
          src="/assets/images/elvisthermo.png"
          className="selfImage"
          alt="Imagem de Elvis Thermo de camisa Preta florida com fundo roxo"
        />
      </div>
    </div>
  );
};

export default About;
