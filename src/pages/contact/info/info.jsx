import styles from "./info.module.css";

import Phone from "../../../assets/icons/phone-blue.svg";
import Email from "../../../assets/icons/email-blue.svg";
import Location from "../../../assets/icons/location-blue.svg";

import Youtube from "../../../assets/icons/youtubeBlue.svg";
import Instagram from "../../../assets/icons/instagramBlue.svg";
import Twitter from "../../../assets/icons/twitterBlue.svg";
import Google from "../../../assets/icons/googleBlue.svg";
import { useTranslation } from "react-i18next";
import Button from "../../../components/button/button";

const Info = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.section}>
      <div className="container-narrow">
        <div className={styles.group}>
          <div className={styles.left}>
            <div>
              <div className={styles.groupTitle}>
                {t("contact.info.title1")}
              </div>
              <div>
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
              </div>
            </div>
            <div className={styles.social}>
              <div className={styles.groupTitle}>
                {t("contact.info.title3")}
              </div>

              <div className={styles.networkList}>
                <a
                  href="https://www.google.com/maps/place/Key4s+DOO/@44.7882055,20.439526,15z/data=!4m6!3m5!1s0x475a7041a1a09df7:0xc9f6e05df948697a!8m2!3d44.7882083!4d20.4395444!16s%2Fg%2F11bwkhmgcf?entry=ttu"
                  className={styles.networkItem}
                  target="_blank"
                >
                  <img src={Google} alt="" />
                </a>
                <a
                  href="https://www.instagram.com/key4s_doo/"
                  className={styles.networkItem}
                  target="_blank"
                >
                  <img src={Instagram} alt="" />
                </a>
                <a
                  href="https://twitter.com/key4s_srb/"
                  className={styles.networkItem}
                  target="_blank"
                >
                  <img src={Twitter} alt="" />
                </a>
                <a
                  href="https://www.youtube.com/watch?v=uN0JHPkO5C8&list=PL0M9og3b1IbzbS5o_CzvMlkHj9VzZqt3v&ab_channel=Key4SLTD"
                  className={styles.networkItem}
                  target="_blank"
                >
                  <img src={Youtube} alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.groupTitle}>{t("contact.info.title2")}</div>
            <div className={styles.rightText}>
              {t("contact.info.formText1")}
            </div>
            <br />
            <div className={styles.rightText}>
              {t("contact.info.formText2")}
            </div>

            <div className={styles.form}>
              <div className={styles.row}>
                <div className={styles.inputWrapper}>
                  <div className={styles.inputLabel}>
                    {t("contact.info.input1")}
                  </div>
                  <input type="text" placeholder={t("contact.info.input1")} />
                </div>
                <div className={styles.inputWrapper}>
                  <div className={styles.inputLabel}>
                    {t("contact.info.input2")}
                  </div>
                  <input type="text" placeholder={t("contact.info.input2")} />
                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.inputWrapper}>
                  <div className={styles.inputLabel}>
                    {t("contact.info.input3")}
                  </div>
                  <input type="text" placeholder={t("contact.info.input3")} />
                </div>
                <div className={styles.inputWrapper}>
                  <div className={styles.inputLabel}>
                    {t("contact.info.input4")}
                  </div>
                  <input type="text" placeholder={t("contact.info.input4")} />
                </div>
              </div>

              <div className={styles.fullRow}>
                <div className={styles.inputWrapper}>
                  <div className={styles.inputLabel}>
                    {t("contact.info.input5")}
                  </div>
                  <textarea
                    rows={5}
                    type="text"
                    placeholder={t("contact.info.input5")}
                  />
                </div>

                <Button>{t("contact.info.button")}</Button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d22653.094948678765!2d20.439544!3d44.788208!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7041a1a09df7%3A0xc9f6e05df948697a!2sKey4s%20DOO!5e0!3m2!1sen!2sus!4v1714311039580!5m2!1sen!2sus"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Info;
