import styles from "./info.module.css";

import Logo from "../../../assets/partners/logo5.png";
import { useTranslation } from "react-i18next";

const Info = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.section}>
      <div className="container-narrow">
        <img src={Logo} alt="" />

        <div className={styles.textGroup}>
          <div className={styles.infoTitle}>{t("partner.info.title1")}</div>
          <div className={styles.infoText}>
            <a href="https://recom-tech.com/sr-lt/" target="_blank">
              {t("partner.info.line1Link")}{" "}
            </a>
            {t("partner.info.line1Rest")}
            <br />
            <br />
            {t("partner.info.line2")}
            <br />
            <br />
            {t("partner.info.line3")}
          </div>
        </div>
        <div className={styles.textGroup}>
          <div className={styles.infoTitle}>{t("partner.info.title2")}</div>
          <div className={styles.infoText}>
            {t("partner.info.line4")}
            <br />
            <br />
            {t("partner.info.line5")}
            <br />
            <br />
            {t("partner.info.line6")}
          </div>
        </div>
        <div className={styles.textGroup}>
          <div className={styles.infoTitle}>{t("partner.info.title3")}</div>
          <div className={styles.infoText}>
            {t("partner.info.line7")}
            <br />
            <br />
            {t("partner.info.line8")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
