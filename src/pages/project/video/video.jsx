import { useTranslation } from "react-i18next";
import styles from "./video.module.css";

const Video = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.section}>
      <div className="container-narrow">
        <div className={styles.title}>{t("project.video.title")}</div>

        <div className={styles.group}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/xAyvY7eukOQ"
            title="Poljoprivredno gazdinstvo Key4s Lunjevica - formiranje zasada lešnika 11. jun 2022. godine"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>

          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/-CsWxcmJaCA"
            title="Poljoprivredno gazdinstvo Key4s Lunjevica - formiranje zasada lešnika jul 2022. godine"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Video;
