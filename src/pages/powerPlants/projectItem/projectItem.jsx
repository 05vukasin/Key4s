import { useTranslation } from "react-i18next";
import styles from "./projectItem.module.css";
import { Link } from "react-router-dom";

const ProjectItem = ({ item }) => {
  const { t, i18n } = useTranslation();

  const currentLanguage = i18n.language;

  return (
    <div
      className={styles.item}
      style={{
        backgroundImage: `linear-gradient(
          rgba(69, 67, 67, 0.4),
          rgba(69, 67, 67, 0.4)
        ), url(${item.image})`,
      }}
    >
      <p>{item.title}</p>

      <Link
        to={
          currentLanguage === "sr"
            ? `/solarne-elektrane/${item.id}`
            : `/en/construction-of-solar-power-plants/${item.id}`
        }
        className={styles.btn}
      >
        {t("powerPlant.project.itemButton")}
      </Link>
    </div>
  );
};

export default ProjectItem;
