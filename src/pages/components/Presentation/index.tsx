import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";

const Presentation = () => {
  const { t } = useTranslation();

  return (
    <div className="wrapper">
      <div className="col-a">
        <header>
          <h4>{t("hw")} 👋🏾🌎</h4>
          <h1>{t("presentation")},</h1>
        </header>
        <div className="content">
          <p className="line typing">{t("title")}.</p>
          <a
            className="button animate__animated animate__bounceInLeft"
            href="#contact"
          >
            {" "}
            {t("contactme")}{" "}
          </a>
        </div>
      </div>

      <div className="col-b">
        <Image
          className="animate__animated animate__zoomIn"
          src="/assets/images/darksouls.jpg"
          alt="Imagem de dois persongens do darksouls."
          width={380}
          height={380}
        />
      </div>
    </div>
  );
};

export default Presentation;
