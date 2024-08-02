import { useTranslation } from "react-i18next";
import styles from "./invest.module.css";

const Invest = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.section}>
      <div className={`container-narrow ${styles.content}`}>
        <div className={styles.label}>{t("home.invest.label")}</div>
        <div className={styles.title}>{t("home.invest.title")}</div>
        <div className={styles.subtitle}>{t("home.invest.subtitle")}</div>
        <div className={styles.line1}>{t("home.invest.line1")}</div>
        <div className={styles.text}>
          {t("home.invest.line2")}
          <br />
          <br />
          {t("home.invest.line3")}
        </div>
      </div>
    </div>
  );
};

export default Invest;
