import { useTranslation } from "react-i18next";
import HeroTemplate from "../../components/heroTemplate/heroTemplate";

import Image from "../../assets/images/about.jpeg";
import Info from "./info/info";
import How from "./how/how";
import Cert from "./cert/cert";

const About = () => {
  const { t } = useTranslation();

  return (
    <div>
      <HeroTemplate title={t("about.hero.title")} image={Image} />

      <Info />

      <How />

      <Cert />
    </div>
  );
};

export default About;
