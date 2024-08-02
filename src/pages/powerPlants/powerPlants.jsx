import HeroTemplate from "../../components/heroTemplate/heroTemplate";

import Image from "../../assets/images/power.jpg";
import { useTranslation } from "react-i18next";
import ProjectList from "./projectList/projectList";

const PowerPlants = () => {
  const { t } = useTranslation();
  return (
    <div>
      <HeroTemplate title={t("powerPlant.hero.title")} image={Image} />
      <ProjectList />
    </div>
  );
};

export default PowerPlants;
