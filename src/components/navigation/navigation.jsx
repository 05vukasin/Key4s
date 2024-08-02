import styles from "./navigation.module.css";

import Email from "../../assets/icons/email.svg";
import Phone from "../../assets/icons/phone.svg";
import SRB from "../../assets/icons/sr-flag.svg";
import EN from "../../assets/icons/uk-flag.svg";

import Logo from "../../assets/logo/logo.svg";

import Dropdown from "../../assets/icons/dropdown.svg";
import Close from "../../assets/icons/close.svg";
import Bar from "../../assets/icons/bar.svg";
import { useEffect, useState } from "react";

import { useTranslation } from "react-i18next";

import { Link, useLocation } from "react-router-dom";

const language = {
  sr: {
    text: "Srpski",
    image: SRB,
  },
  en: {
    text: "English",
    image: EN,
  },
};

const dropdown = (
  <svg viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg" fill="#fff">
    <path d="m31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1l-128.6 128.7c-7.8 7.8-20.5 7.8-28.3 0l-128.6-128.7c-12.6-12.6-3.7-34.1 14.1-34.1z" />
  </svg>
);

const Navigation = () => {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState("sr");

  const [openMenu, setOpenMenu] = useState(false);

  const [subOpen1, setSubOpen1] = useState(false);
  const [subOpen2, setSubOpen2] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const currentLanguage = i18n.language;

    if (location.pathname.includes("/en/")) {
      setLang((prev) => {
        const lang = "en";

        i18n.changeLanguage(lang);

        return lang;
      });
    } else {
      setLang(currentLanguage);
    }
  }, []);

  const changeLanguage = () => {
    setLang((prev) => {
      const lang = prev === "sr" ? "en" : "sr";

      i18n.changeLanguage(lang);

      return lang;
    });
  };

  const list = t("nav.list", { returnObjects: true });
  const subList1 = t("nav.subList1", { returnObjects: true });
  const subList2 = t("nav.subList2", { returnObjects: true });

  return (
    <div className={styles.navigation}>
      <div className={styles.header}>
        <div className="container">
          <div className={styles.leftWrapper}>
            <a
              href="https://api.whatsapp.com/send/?phone=381652700040&text&type=phone_number&app_absent=0"
              className={styles.itemWrapper}
              target="_blank"
            >
              <img src={Phone} alt="" />
              <p>+381 65 27 00 040</p>
            </a>
            <a href="mailto:office@key4s.eu" className={styles.itemWrapper}>
              <img src={Email} alt="" />
              <p>office@key4s.eu</p>
            </a>
          </div>
          <div className={styles.rightWrapper}>
            <div className={styles.languageWrapper}>
              <div className={styles.languageLeft}>
                <img src={language[lang].image} alt="" />
                <p>{language[lang].text}</p>
              </div>

              <img className={styles.dropdown} src={Dropdown} alt="" />
            </div>

            <div className={styles.dropdownWrapper}>
              <div
                className={`${styles.languageWrapper} ${styles.languageWrapper2}`}
                onClick={changeLanguage}
              >
                <div className={styles.languageLeft}>
                  <img
                    src={language[lang === "sr" ? "en" : "sr"].image}
                    alt=""
                  />
                  <p>{language[lang === "sr" ? "en" : "sr"].text}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav className={styles.navigationWrapper}>
        <div className="container">
          <div className={styles.topNavWrapper}>
            <Link to={"/"} onClick={() => setOpenMenu(false)}>
              <img src={Logo} alt="" />
            </Link>

            <div
              className={styles.navIcon}
              onClick={() => setOpenMenu((prev) => !prev)}
            >
              {openMenu ? <img src={Close} alt="" /> : <img src={Bar} alt="" />}
            </div>
          </div>

          <div
            className={`${openMenu ? styles.openMenu : ""} ${styles.navList}`}
          >
            <Link
              to={
                lang === "sr"
                  ? "/solarne-elektrane"
                  : "/en/construction-of-solar-power-plants"
              }
              onClick={() => setOpenMenu(false)}
            >
              {list[0]}
            </Link>
            <div>
              <div onClick={() => setSubOpen1((prev) => !prev)}>
                {list[1]} {dropdown}
              </div>
              <div
                className={`${styles.subListWrapper} ${
                  subOpen1 ? styles.subOpen : ""
                }`}
              >
                <div className={styles.subList}>
                  {subList1.map((item, index) => (
                    <Link
                      to={
                        index === 0
                          ? lang === "sr"
                            ? "/podrska-solarne-elektrane"
                            : "/en/support-for-solar-power-plants"
                          : lang === "sr"
                          ? "/razvojni-projekti-key4s"
                          : "/en/development-projects"
                      }
                      onClick={() => setOpenMenu(false)}
                    >
                      <p>{item}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <div onClick={() => setSubOpen2((prev) => !prev)}>
                {list[2]} {dropdown}
              </div>
              <div
                className={`${styles.subListWrapper} ${
                  subOpen2 ? styles.subOpen : ""
                }`}
              >
                <div className={styles.subList}>
                  {subList2.map((item, index) => (
                    <>
                      {index === 2 ? (
                        <a href={`/ref.pdf`}>
                          {" "}
                          <p>{item}</p>
                        </a>
                      ) : (
                        <Link
                          to={
                            index === 0
                              ? lang === "sr"
                                ? "/solarne-elektrane-o-nama"
                                : "/en/about-us"
                              : index === 1
                              ? lang === "sr"
                                ? "/dokumentacija-key4s"
                                : "/en/documentation"
                              : "/"
                          }
                          onClick={() => setOpenMenu(false)}
                        >
                          <p>{item}</p>
                        </Link>
                      )}
                    </>
                  ))}
                </div>
              </div>
            </div>
            <Link
              to={lang === "sr" ? "/partner" : "/en/partner"}
              onClick={() => setOpenMenu(false)}
            >
              {list[3]}
            </Link>
            <Link
              to={lang === "sr" ? "/kontakt-key4s" : "/en/contact"}
              onClick={() => setOpenMenu(false)}
            >
              {list[4]}
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
