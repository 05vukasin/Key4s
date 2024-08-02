import React, { useEffect, useRef, useState } from "react";

import styles from "./hero.module.css";

import Image1 from "../../../assets/images/slider-01.jpg";
import Image2 from "../../../assets/images/slider-02.jpg";
import Image3 from "../../../assets/images/slider-03.jpg";
import Image4 from "../../../assets/images/slider-04.jpg";
import Image5 from "../../../assets/images/slider-05.jpg";
import Image6 from "../../../assets/images/slider-06.jpg";

import { useTranslation } from "react-i18next";
import Button from "../../../components/button/button";

import Youtube from "../../../assets/icons/youtube.svg";

import ImageSlider1 from "../../../assets/images/img1.jpeg";
import ImageSlider2 from "../../../assets/images/img2.jpeg";
import ImageSlider3 from "../../../assets/images/img3.jpeg";
import ImageSlider4 from "../../../assets/images/img4.jpeg";
import ImageSlider5 from "../../../assets/images/img5.jpeg";
import ImageSlider6 from "../../../assets/images/img6.jpeg";

import { Link } from "react-router-dom";

// import Swiper core and required modules
import { Navigation, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const imageSlider = [
  ImageSlider1,
  ImageSlider2,
  ImageSlider3,
  ImageSlider4,
  ImageSlider5,
  ImageSlider6,
];

const imageBg = [Image1, Image2, Image3, Image4, Image5, Image6];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const [resizeWidth, setResizeWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setResizeWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const sliders = t("home.hero.sliders", { returnObjects: true });
  const imageSliderList = t("home.hero.imageSlider", { returnObjects: true });

  const swiperRef = useRef(null);

  const slideNext = () => {
    if (swiperRef.current !== null) {
      swiperRef.current.slideNext();
    }
  };

  const slidePrev = () => {
    if (swiperRef.current !== null) {
      swiperRef.current.slidePrev();
    }
  };

  const handleIndex = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className={styles.hero}>
      {imageBg.map((image, index) => (
        <img
          key={index}
          src={image}
          alt=""
          style={{ opacity: index === activeIndex ? 1 : 0 }}
        />
      ))}

      <div className={styles.bgWrapper}></div>

      <div className={`${styles.content} container`}>
        <div>
          {sliders.map((content, index) => (
            <>
              {index === activeIndex && (
                <div>
                  <div className={styles.title}>{content.title}</div>
                  <ul className={styles.list}>
                    {content.list.map((item) => (
                      <li>{item}</li>
                    ))}
                  </ul>

                  <Button href={`${content.link}`} target="_self">
                    {t("home.hero.button1")}
                  </Button>
                </div>
              )}
            </>
          ))}

          <div className={styles.buttons}>
            <Button
              href={
                currentLanguage === "sr"
                  ? "/solarne-elektrane"
                  : "/en/construction-of-solar-power-plants"
              }
              target="_self"
            >
              {t("home.hero.button2")}
            </Button>
            <Button
              href="https://www.youtube.com/watch?v=uN0JHPkO5C8&list=PL0M9og3b1IbzbS5o_CzvMlkHj9VzZqt3v&ab_channel=Key4SLTD"
              target={"_blank"}
            >
              <img src={Youtube} alt="" />
              {t("home.hero.button3")}
            </Button>
          </div>
        </div>

        <div className={styles.swiperWrapper}>
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={3}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            loop
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            className={styles.imageSlider}
            onRealIndexChange={(swiperCore) => {
              handleIndex(swiperCore.realIndex);
            }}
          >
            {imageSlider.map((image, index) => (
              <SwiperSlide
                style={{
                  backgroundImage: `url(${image})`,
                  height:
                    index === activeIndex
                      ? resizeWidth > 1000
                        ? "400px"
                        : "120px"
                      : "",
                }}
              >
                <div className={styles.imageWrapper}>
                  <p>{imageSliderList[index].title}</p>
                  <p>{imageSliderList[index].location}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-button-prev" onClick={slidePrev}></div>
          <div className="swiper-button-next" onClick={slideNext}></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
