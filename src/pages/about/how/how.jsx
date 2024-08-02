import styles from "./how.module.css";

import Panel from "../../../assets/images/panel.jpg";
import { useTranslation } from "react-i18next";

const How = () => {
  const { t } = useTranslation();

  const list = t("about.how.list", { returnObjects: true });

  return (
    <div className={`${styles.section} container-narrow`}>
      <div>
        <div className={styles.content}>
          <div className={styles.title}>{t("about.how.title")}</div>
          <div className={styles.text}>
            <ol>
              {list.map((item) => (
                <li>
                  {item.map((i) => (
                    <p>{i}</p>
                  ))}
                </li>
              ))}
            </ol>
          </div>
        </div>
        <img src={Panel} alt="" />
      </div>
    </div>
  );
};

export default How;
