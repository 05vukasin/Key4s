import HeroTemplate from "../../components/heroTemplate/heroTemplate";

import Image from "../../assets/images/project.jpeg";
import { useTranslation } from "react-i18next";
import Area from "./area/area";
import Video from "./video/video";
import Whatsapp from "../../components/whatsapp/whatsapp";

const Project = () => {
  const { t } = useTranslation();

  return (
    <div>
      <HeroTemplate title={t("project.hero.title")} image={Image} />
      <Area />
      <Video />

      <Whatsapp href="https://g.co/kgs/sta8vuc" google />
    </div>
  );
};

export default Project;
