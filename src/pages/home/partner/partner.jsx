import { useTranslation } from "react-i18next";
import styles from "./partner.module.css";

import Partner1 from "../../../assets/partners/logo1.svg";
import Partner2 from "../../../assets/partners/logo2.svg";
import Partner3 from "../../../assets/partners/logo3.svg";
import Partner4 from "../../../assets/partners/logo4.svg";
import Partner5 from "../../../assets/partners/logo5.png";

const Partner = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.section}>
      <div className="container-narrow">
        <div className={styles.title}>{t("home.partner.title")}</div>
        <div className={styles.logos}>
          <img src={Partner5} alt="" />

          <img src={Partner3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Partner;
