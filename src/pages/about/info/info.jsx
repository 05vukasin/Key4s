import styles from "./info.module.css";

import Logo from "../../../assets/logo/key4s-circle.svg";
import { useTranslation } from "react-i18next";

const Info = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.section}>
      <div className="container-narrow">
        <img src={Logo} alt="" />

        <div className={styles.textGroup}>
          <div className={styles.infoTitle}>{t("about.info.title1")}</div>
          <div className={styles.infoText}>
            <a
              href="https://gminfo.rs/e-fikasan-gornji-milanovac-4-6/"
              target="_blank"
            >
              {t("about.info.line1Link")}{" "}
            </a>
            {t("about.info.line1Rest")}
            <br />
            <br />
            {t("about.info.line2")}
            <br />
            <br />
            {t("about.info.line3")}
            <br />
            <br />
            {t("about.info.line4")}
            <br />
            <br />
            {t("about.info.line5")}
            <br />
            <br />
            {t("about.info.line6")}
          </div>
        </div>
        <div className={styles.textGroup}>
          <div className={styles.infoTitle}>{t("about.info.title2")}</div>
          <div className={styles.infoText}>
            {t("about.info.line7")}
            <br />
            <br />
            {t("about.info.line8")}
            <br />
            <br />
            {t("about.info.line9")}
            <br />
            <br />
            {t("about.info.line10")}
          </div>
        </div>
        <div className={styles.textGroup}>
          <div className={styles.infoTitle}>{t("about.info.title3")}</div>
          <div className={styles.infoText}>
            {t("about.info.line11")}
            <br />
            <br />
            {t("about.info.line12")}
            <br />
            <br />
            {t("about.info.line13")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
