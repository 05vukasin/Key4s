import { useTranslation } from "react-i18next";
import styles from "./count.module.css";
import { Link } from "react-router-dom";

const Count = () => {
  const { t } = useTranslation();

  const list = t("home.count.list", { returnObjects: true });
  return (
    <div className={styles.section}>
      <div className={`container-narrow ${styles.list}`}>
        {list.map((item, index) => (
          <div className={styles.item}>
            <div className={styles.itemInfo}>
              <div className={styles.num}>
                {item.num}
                <span>{item.rest}</span>
              </div>
              <div className={styles.text}>{item.text}</div>
            </div>

            {index === 0 ? (
              <a className={styles.button} href="/ref.pdf">
                {item.button}
              </a>
            ) : (
              <Link to={`${item.link}`} className={styles.button}>
                {item.button}
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Count;
