import React from "react";

import { FooterContainer } from "./styles";
import { useTranslation } from "react-i18next";
import SocialLinks from "../SocialLinks";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <footer>
      <div className="wrapper">
        <div className="col-a">
          <a className="logo" href="#home">
            {" "}
            ElvisThermo{" "}
          </a>

          <p>
            {t("footerText")} <br />
            {t("footerDescription")}
          </p>
        </div>

        <div className="col-b">
          <SocialLinks></SocialLinks>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
