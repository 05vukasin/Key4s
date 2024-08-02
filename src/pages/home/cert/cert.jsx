import { useTranslation } from "react-i18next";
import styles from "./cert.module.css";

const certList = [
  {
    text: "ISO 9001:2015",
    link: "QEO_Rev.0_Key4S_Cert-1",
  },
  {
    text: "ISO 14001:2015",
    link: "QEO_Rev.0_Key4S_Cert-2",
  },
  {
    text: "ISO/IEC 27001:2013",
    link: "ISPIMS_Rev.0_Key4S_Cert-1",
  },
  {
    text: "ISO 21001:2018",
    link: "22-M-0020_Rev.0_Key4S",
  },
  {
    text: "ISO 45001:2018",
    link: "QEO_Rev.0_Key4S_Cert-3",
  },
  {
    text: "ISO 50001:2018",
    link: "22-En-0014_Rev.0_Key4S",
  },
  {
    text: "ISO/IEC 27701:2019",
    link: "ISPIMS_Rev.0_Key4S_Cert-2",
  },
];

const Cert = () => {
  const { t } = useTranslation();

  return (
    <div className={`${styles.section} container-narrow`}>
      <div className={styles.title}>{t("home.cert.title")}</div>
      <div className={styles.text}>
        {t("home.cert.textP1")}
        <br />
        <br />
        {t("home.cert.textP2")}
      </div>

      <div className={styles.list}>
        {certList.map((cert) => (
          <a
            href={`/certificates/${cert.link}.pdf`}
            rel="noopener noreferrer"
            target="_blank"
          >
            {cert.text}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Cert;
