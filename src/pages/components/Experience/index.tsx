import { useTranslation } from "react-i18next";
import styled from "styled-components";

export function Experience() {
  const { t } = useTranslation();

  return (
    <div className="cards">
      {t("jobs", { returnObjects: true }).map((job,index) => (
        <div className="card" key={index}>
          <h3>{t(`${job.title}`)}</h3>
          <h3>{t(`${job.subtitle}`)}</h3>
          <div className="wrapper"></div>
          <p>{t(`${job.date}`)}</p>
          <p>{t(`${job.description}`)}</p>
        </div>
      ))}
    </div>
  );
}
