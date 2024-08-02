import { useTranslation } from "react-i18next";
import styles from "./info.module.css";

import Image from "../../../assets/images/sse.jpeg";
import Button from "../../../components/button/button";

const Info = () => {
  const { t } = useTranslation();

  const list = t("support.func.list", { returnObjects: true });

  return (
    <div className={styles.section}>
      <div className="container-narrow">
        <div className={styles.title}>
          {t("support.info.titleP1")}
          <span> {t("support.info.titleP2")}</span>
        </div>

        <div className={styles.info}>
          <img src={Image} alt="" />

          <div>
            <div className={styles.infoTitle}>
              {t("support.info.infoTitle")}
            </div>
            <div className={styles.infoText}>{t("support.info.infoText")}</div>

            <Button>{t("support.info.button")}</Button>
          </div>
        </div>

        <div>
          <div className={styles.funcTitle}>
            <span>{t("support.func.titleP1")} </span>
            {t("support.func.titleP2")}
          </div>

          <ul className={styles.funcList}>
            {list.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Info;
