import { useTranslation } from "react-i18next";

import styles from "./area.module.css";

import Image1 from "../../../assets/images/area1.png";
import Image2 from "../../../assets/images/area2.jpg";
import Image3 from "../../../assets/images/area3.png";

const images = [Image1, Image2, Image3];

const Area = () => {
  const { t } = useTranslation();

  const list = t("project.area.list", { returnObjects: true });

  return (
    <div className={styles.section}>
      <div className="container-narrow">
        <p className={styles.info}>{t("project.area.info")}</p>

        <div className={styles.cards}>
          {list.map((item, index) => (
            <div
              className={styles.card}
              style={{
                backgroundImage: `linear-gradient(
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.4)
    ), url(${images[index]})`,
              }}
            >
              <div>
                <div className={styles.itemTitle}>{item.title}</div>
                <div className={styles.itemInfo}>{item.info}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Area;
