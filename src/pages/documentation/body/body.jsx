import { useTranslation } from "react-i18next";
import styles from "./body.module.css";

import Apr from "../../../assets/images/documentation/apr.jpg";
import Book from "../../../assets/images/documentation/knjiga_standarda.jpg";
import Logo from "../../../assets/images/documentation/logo.jpg";
import Data from "../../../assets/images/documentation/podaci.png";
import Partner from "../../../assets/images/documentation/partner.png";

const images = [Logo, Book, Partner, Apr, Data];

const Body = () => {
  const { t } = useTranslation();

  const items = t("documentation.items", { returnObjects: true });

  return (
    <div>
      <div className={styles.header}>{t(`documentation.header`)}</div>

      <div className="container-narrow">
        <div className={styles.group}>
          {items.map((item, index) => (
            <a href={item.link} className={styles.card} target="_blank">
              <img src={images[index]} alt="" />

              <p>{item.desc1}</p>
              <p>{item.desc2}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
