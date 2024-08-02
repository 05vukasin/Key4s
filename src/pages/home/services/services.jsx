import { useTranslation } from "react-i18next";

import styles from "./services.module.css";

import Services1 from "../../../assets/icons/services1.svg";
import Services2 from "../../../assets/icons/services2.svg";
import Services3 from "../../../assets/icons/services3.svg";

import Right from "../../../assets/icons/right.svg";
import { Link } from "react-router-dom";

const iconList = [Services1, Services2, Services3];

const Services = () => {
  const { t, i18n } = useTranslation();

  const list = t("home.services.list", { returnObjects: true });

  return (
    <div className={`${styles.section} container-narrow`}>
      <div className={styles.title}>
        {t("home.services.titleP1")} <span>{t("home.services.titleP2")}</span>
      </div>
      <div className={styles.description}>{t("home.services.description")}</div>

      <div className={styles.list}>
        {list.map((item, index) => (
          <div className={styles.item}>
            <div>
              <img className={styles.icon} src={iconList[index]} alt="" />
              <div className={styles.itemTitle}>{item.title}</div>
              <div className={styles.itemInfo}>{item.info}</div>
            </div>

            <Link to={`${item.link}`} className={styles.button}>
              <img src={Right} alt="" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
