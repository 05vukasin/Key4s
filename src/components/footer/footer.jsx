import { useTranslation } from "react-i18next";
import styles from "./footer.module.css";

import Logo from "../../assets/logo/logo-white.svg";

import Phone from "../../assets/icons/phone-blue.svg";
import Email from "../../assets/icons/email-blue.svg";
import Location from "../../assets/icons/location-blue.svg";

import Youtube from "../../assets/icons/youtube.svg";
import Whatsapp from "../../assets/icons/whatsapp.svg";
import Twitter from "../../assets/icons/twitter.svg";
import Google from "../../assets/icons/google.svg";

const Footer = () => {
  const { t } = useTranslation();

  const servicesList = t("footer.services.list", { returnObjects: true });

  const currentYear = new Date().getFullYear();

  return (
    <div className={styles.section}>
      <div className="container-narrow">
        <div className={styles.infoTop}>
          <img src={Logo} alt="" />

          <div className={styles.item}>
            <img src={Phone} alt="" />

            <div>
              <a href="https://api.whatsapp.com/send/?phone=381652700040&text&type=phone_number&app_absent=0">
                +381 65 27 00 040
              </a>
              <br />
              <a href="tel:+381692700550">+381 69 27 00 550</a>
            </div>
          </div>

          <div className={styles.item}>
            <img src={Email} alt="" />

            <div>
              <a href="mailto:office@key4s.eu">office@key4s.eu</a>
              <br />
              <a href="mailto:podrska@key4s.eu">podrska@key4s.eu</a>
            </div>
          </div>

          <div className={styles.item}>
            <img src={Location} alt="" />

            <div>
              <a
                href="https://www.google.com/maps/place/Key4s+doo/@44.7882055,20.439526,15z/data=!4m5!3m4!1s0x0:0xc9f6e05df948697a!8m2!3d44.7882055!4d20.439526?sa=X&ved=2ahUKEwjFvPCQrrr8AhV7hf0HHQrPARIQ_BJ6BAhPEAg&coh=164777&entry=tt&shorturl=1"
                target="_blank"
              >
                Andre Nikolića 1-3, I {t("footer.location")} <br /> 11040
                Beograd - Savski venac
              </a>
            </div>
          </div>
        </div>
        <div className={styles.list}>
          <div className={styles.itemContent}>
            <div className={styles.itemTitle}>{t("footer.about.title")}</div>
            <div className={styles.itemText}>{t("footer.about.text")}</div>

            <div className={styles.success}>Your Key for success!</div>
          </div>
          <div className={styles.itemContent}>
            <div className={styles.itemTitle}>{t("footer.services.title")}</div>
            <div className={styles.itemText}>
              {servicesList.map((item) => (
                <p>{item}</p>
              ))}
            </div>
          </div>
          <div className={styles.itemContent}>
            <div className={styles.itemTitle}>{t("footer.network.title")}</div>
            <div className={styles.networkList}>
              <a
                href="https://www.youtube.com/watch?v=uN0JHPkO5C8&list=PL0M9og3b1IbzbS5o_CzvMlkHj9VzZqt3v&ab_channel=Key4SLTD"
                className={styles.networkItem}
                target="_blank"
              >
                <img src={Youtube} alt="" />
                <p>Youtube</p>
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=381652700040&text&type=phone_number&app_absent=0"
                className={styles.networkItem}
                target="_blank"
              >
                <img src={Whatsapp} alt="" />
                <p>Whatsapp</p>
              </a>
              <a
                href="https://twitter.com/key4s_srb/"
                className={styles.networkItem}
                target="_blank"
              >
                <img src={Twitter} alt="" />
                <p>Twitter</p>
              </a>
              <a
                href="https://www.google.com/maps/place/Key4s+DOO/@44.7882055,20.439526,15z/data=!4m6!3m5!1s0x475a7041a1a09df7:0xc9f6e05df948697a!8m2!3d44.7882083!4d20.4395444!16s%2Fg%2F11bwkhmgcf?entry=ttu"
                className={styles.networkItem}
                target="_blank"
              >
                <img src={Google} alt="" />
                <p>Google</p>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.copyright}>
          <p>© Copyright 2014 - {currentYear} | Key4s | All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
