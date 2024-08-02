import styles from "./info.module.css";

import Panel from "../../../assets/images/panel.jpg";
import { useTranslation } from "react-i18next";
import Button from "../../../components/button/button";

const Info = () => {
  const { t } = useTranslation();

  return (
    <div className={`${styles.section} container-narrow`}>
      <div className={styles.content}>
        <div className={styles.title}>{t("home.info.title")}</div>
        <div className={styles.subtitle}>{t("home.info.subtitle")}</div>
        <div className={styles.text}>
          {t("home.info.textP1")}
          <br />
          <br />
          {t("home.info.textP2")}
        </div>
        <Button href={t("home.info.link")} target="_self">
          {t("home.info.button")}
        </Button>
      </div>

      <img src={Panel} alt="" />
    </div>
  );
};

export default Info;
