import { Link, useParams } from "react-router-dom";
import { caseList, projects } from "../../../assets/list/projects";
import styles from "./projectTemplate.module.css";
import Button from "../../../components/button/button";
import { useTranslation } from "react-i18next";

import Position from "../../../assets/icons/position.svg";
import Power from "../../../assets/icons/power.svg";
import Whatsapp from "../../../components/whatsapp/whatsapp";

import { Navigation, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import ProjectItem from "../projectItem/projectItem";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

const ProjectTemplate = () => {
  const { t } = useTranslation();
  const { id } = useParams();

  const [slidesNum, setSlidesNum] = useState(3);

  let obj = projects.find((project) => project.id === id);

  if (obj === undefined) {
    obj = caseList.find((project) => project.id === id);
  }

  const sliderList = projects.filter((project) => project.top);

  const positionList = t("powerPlant.template.positionList", {
    returnObjects: true,
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) {
        setSlidesNum(1);
      } else if (window.innerWidth < 900) {
        setSlidesNum(2);
      } else {
        setSlidesNum(3);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!obj) return <></>;

  return (
    <>
      <Helmet>
        <title>{obj.name} - Key4s</title>
        <meta property="og:image" content={obj.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={obj.image} />
      </Helmet>

      <div>
        <div className={styles.topInfo}>
          <p className={styles.dir}>
            <Link to="/">home</Link> /{" "}
            <Link to="/solarne-elektrane">
              <Link to="/solarne-elektrane">
                {t("powerPlant.template.dirText")}
              </Link>
            </Link>{" "}
            / <span>{obj.title}</span>
          </p>
          <p className={styles.name}>{obj.title}</p>
        </div>

        <div className="container-narrow">
          <div className={`${styles.details}`}>
            <div className={styles.leftSide}>
              <div className={styles.imageWrapper}>
                <img src={obj.image} alt="" />
              </div>
            </div>
            <div>
              <div className={styles.buttonWrapper}>
                <Link to="/solarne-elektrane">
                  {t("powerPlant.template.dirText")}
                </Link>
                {obj.video && <Button href={obj.video}>POGLEDAJ VIDEO</Button>}
              </div>

              <h2>{obj.title}</h2>

              <div className={styles.detailsInfo}>
                <p>
                  {t("powerPlant.template.name")}: {obj.name}
                </p>

                <p>
                  {t("powerPlant.template.location")}: {obj.location}
                </p>

                <p>
                  {t("powerPlant.template.position")}:{" "}
                  {positionList[obj.position]}
                </p>

                <p>
                  {t("powerPlant.template.power")}: {obj.power}
                </p>

                <p>
                  {t("powerPlant.template.type")}: {obj.type}
                </p>

                {obj.num && (
                  <p>
                    {t("powerPlant.template.num")}: {obj.num}
                  </p>
                )}

                <p>
                  {t("powerPlant.template.inverter")}: {obj.inverter}
                </p>

                <div className={styles.mobButton}>
                  {obj.video && (
                    <Button href={obj.video}>POGLEDAJ VIDEO</Button>
                  )}
                </div>
              </div>

              <div className={styles.detailsFooter}>
                <div className={styles.footerItem}>
                  <img src={Position} alt="" />
                  <p>{positionList[obj.position]}</p>
                </div>
                <div className={styles.footerItem}>
                  <img src={Power} alt="" />
                  <p>{obj.power}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-narrow">
          <div className={styles.sliderWrapper}>
            <div className={styles.sliderTop}>
              <div className={styles.sliderTitle}>
                {t("powerPlant.template.sliderTitle")}
              </div>

              <Button href="/solarne-elektrane">
                {t("powerPlant.template.sliderButton")}
              </Button>
            </div>
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={20}
              slidesPerView={slidesNum}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              loop
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              className={styles.imageSlider}
            >
              {sliderList.map((item, index) => (
                <SwiperSlide>
                  <ProjectItem item={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      <Whatsapp href="https://api.whatsapp.com/send/?phone=381652700040&text&type=phone_number&app_absent=0" />
    </>
  );
};

export default ProjectTemplate;
