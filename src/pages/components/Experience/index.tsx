import { useTranslation } from "react-i18next";
import styled from "styled-components";
interface Job {
  title: string;
  subtitle: string;
  date: string;
  description:string;

}

export function Experience() {
  const { t } = useTranslation();

  const jobs = t("jobs", { returnObjects: true }) as Job[];

  return (
    <div className="cards">
      {jobs.map((job,index) => (
        <div className="card" key={`${job}-index`}>
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
