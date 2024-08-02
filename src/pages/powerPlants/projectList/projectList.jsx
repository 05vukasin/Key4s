import { useTranslation } from "react-i18next";
import styles from "./projectList.module.css";

import Icon from "../../../assets/icons/youtubeBlue.svg";
import { caseList, projects } from "../../../assets/list/projects";
import ProjectItem from "../projectItem/projectItem";

const ProjectList = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.section}>
      <div className="container-narrow">
        <div className={styles.topWrapper}>
          <p>{t("powerPlant.project.text")}</p>
          <a
            href="https://www.youtube.com/watch?v=uN0JHPkO5C8&list=PL0M9og3b1IbzbS5o_CzvMlkHj9VzZqt3v"
            target="_blank"
            className={styles.button}
          >
            <img src={Icon} alt="" />
            KEY4S
          </a>
        </div>

        <div className={styles.list}>
          {projects.map((item) => (
            <ProjectItem item={item} />
          ))}
        </div>

        <div>
          <h2>{t("powerPlant.project.caseTitle")}</h2>
        </div>
        <div className={styles.list}>
          {caseList.map((item) => (
            <ProjectItem item={item} />
          ))}
        </div>
        <div className={styles.numText}>
          <p>
            {t("powerPlant.project.numTextP1")}{" "}
            <span>{t("powerPlant.project.numTextP2")}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
