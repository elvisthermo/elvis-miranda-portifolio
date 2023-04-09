/* eslint-disable @next/next/no-sync-scripts */
import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import GlobalStyles from "../styles/global";
import Skills from "./components/Skills";
import "animate.css";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SocialLinks from "./components/SocialLinks";
import Contact from "./components/Contact";
import Presentation from "./components/Presentation";
import About from "./components/About";

function LanguageSelector(): JSX.Element {
  const { i18n } = useTranslation();
  const changeLanguage = (event: { target: { value: string | undefined } }) => {
    i18n.changeLanguage(event.target.value);
  };
  return (
    <select
      id="selectLanguage"
      onChange={changeLanguage}
      defaultValue={i18n.language}
    >
      <option value="en">English</option>
      <option value="pt">Português</option>
    </select>
  );
}

export default function Home() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const knowledgeRef = useRef(null);
  const contactRef = useRef(null);
  const { t } = useTranslation();

  const [isVisible, setIsVisible] = useState(false);

  function onScroll() {
    showBackToTopButtonOnScroll();

    activateMenuAtCurrentSection(homeRef.current);
    activateMenuAtCurrentSection(aboutRef.current);
    activateMenuAtCurrentSection(knowledgeRef.current);
    activateMenuAtCurrentSection(projectsRef.current);
    activateMenuAtCurrentSection(contactRef.current);
  }

  function activateMenuAtCurrentSection(section: any): void {
    const targetLine = scrollY + innerHeight / 2;
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop;
    const sectionEndsAt = sectionTop + sectionHeight;
    const sectionEndPassedTargetLine = sectionEndsAt <= targetLine;

    const sectionBoundaries =
      sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine;

    const sectionId = section.getAttribute("id");
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`);

    if (menuElement) {
      menuElement.classList.remove("active");
      if (sectionBoundaries) {
        menuElement.classList.add("active");
      }
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    onScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleScroll() {
    const top = window.pageYOffset || document.documentElement.scrollTop;
    setIsVisible(top > 100);

    const navigation = document.querySelector("#navigation");

    if (navigation) {
      if (scrollY > 0) {
        navigation.classList.add("scroll");
      } else {
        navigation.classList.remove("scroll");
      }
    }
  }

  function showBackToTopButtonOnScroll() {
    const backToTopButton = document.querySelector("#backToTopButton");

    if (backToTopButton) {
      if (scrollY > 550) {
        console.log("add show");
        backToTopButton.classList.add("show");
      } else {
        console.log("remove show");
        backToTopButton.classList.remove("show");
      }
    }
  }

  // Função para alternar o menu entre visível e oculto

  useEffect(() => {
    function openMenu() {
      const openBtns = document.querySelectorAll(".open");
      openBtns.forEach((e) => {
        e.addEventListener("click", () => {
          document.body.classList.add("menu-expanded");
        });
      });
    }

    function closeMenu() {
      const closeBtns = document.querySelectorAll(".close");
      closeBtns.forEach((e) => {
        e.addEventListener("click", () => {
          document.body.classList.remove("menu-expanded");
        });
      });
    }
    openMenu();
    closeMenu();

    const toggle = document.querySelector("#sw-checkbox");
    if (toggle) {
      toggle.addEventListener("change", () => {
        document.body.classList.toggle("light-mode");
      });
      return () => {
        toggle.removeEventListener("change", () => {
          document.body.classList.toggle("light-mode");
        });
      };
    }
  }, []);

  return (
    <>
      <Header></Header>
      <body>
        <nav id="navigation">
          <div className="wrapper">
            <a className="logo close" href="#home">
              {" "}
              Elvisthermo{" "}
            </a>

            <div className="menu">
              <ul>
                <li>
                  <a id="aboutNav" className="close" href="#about">
                    {t("about")}
                  </a>
                </li>
                <li>
                  <a id="projectsNav" className="close" href="#experiences">
                    {t("experiences")}
                  </a>
                </li>
                <li>
                  <a id="knowledgeNav" className="close" href="#knowledge">
                    {t("knowledge")}
                  </a>
                </li>
                <li>
                  <a id="contactNav" className="close" href="#contact">
                    {t("contactme")}
                  </a>
                </li>
              </ul>

              <SocialLinks></SocialLinks>
              <ul className="languages">
                <LanguageSelector></LanguageSelector>
              </ul>
            </div>

            <button
              aria-expanded="false"
              aria-label="Abrir menu"
              className="open-menu open"
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 20H30"
                  stroke="#00856F"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10 12H30"
                  stroke="#00856F"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18 28L30 28"
                  stroke="#00856F"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>

            <button
              aria-expanded="true"
              aria-label="Fechar menu"
              className="close-menu close"
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30 10L10 30M10 10L30 30"
                  stroke="#FFFAF1"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </nav>

        <section id="home" ref={homeRef}>
          <Presentation></Presentation>
        </section>

        <section id="about" ref={aboutRef}>
          <About></About>
        </section>

        <section id="experiences" ref={projectsRef}>
          <div className="wrapper">
            <header>
              <h2>{t("experiences")}</h2>
            </header>
            <div className="content">
              <Experience></Experience>
            </div>
          </div>
        </section>

        <section id="knowledge" ref={knowledgeRef}>
          <div className="wrapper">
            <header>
              <h2>{t("knowledge")}</h2>
            </header>
            <div className="content">
              <Skills></Skills>
            </div>
          </div>
        </section>

        <section id="contact" ref={contactRef}>
          <Contact></Contact>
        </section>

        <Footer></Footer>

        <a
          id="backToTopButton"
          className="show"
          title="Voltar ao topo"
          href="#home"
          style={{ display: isVisible ? "block" : "none" }}
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="20" cy="20" r="20" fill="#00856F" />
            <path
              d="M20 27V13"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13 20L20 13L27 20"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>

        <div id="toggle">
          <input type="checkbox" id="sw-checkbox" />
          <label htmlFor="sw-checkbox" title="Mudar tema">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="20"
              height="20"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="20"
              height="20"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z"
                fill="rgba(255,255,255,1)"
              />
            </svg>
          </label>
        </div>
        <GlobalStyles />
      </body>
    </>
  );
}
