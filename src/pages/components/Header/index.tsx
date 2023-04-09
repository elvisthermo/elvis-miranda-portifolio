/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/no-sync-scripts */
import React from "react";
import { useTranslation } from "react-i18next";

const Header: React.FC = () => {
  const { t } = useTranslation();

  return (
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />

      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="description"
        content="Portifólio de Elvis Miranda, desenvolvedor Fullstack"
      />
      <meta name="author" content="Elvis Thermo" />
      <meta
        property="og:description"
        content="Portifólio de Elvis Thermo Carvalho Miranda, desenvolvedor web Fullstack"
      />
      <meta
        property="og:image"
        content="./assets/images/imagem-de-lucyan-vestindo-camisa-social-branca-e-sorrindo-com-plantas-no-fundo.png"
      />
      <meta property="og:type" content="website" />
      <meta
        name="keywords"
        content="developer, programação, dev, desenvolvedor, programador, html, css, javascript, nodejs, reactjs, react, github, frontend, front-end"
      />
      <meta name="robots" content="index" />

      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans&family=Gemunu+Libre:wght@200&display=swap"
        rel="stylesheet"
      />

      <link
        rel="shortcut icon"
        href="./assets/icons/favicon.png"
        type="image/x-icon"
      />
      <script src="https://unpkg.com/scrollreveal"></script>
      <script type="module" src="./assets/js/main.js" defer></script>

      <title>Elvis / Portifólio</title>
    </head>
  );
};

export default Header;
