import { useTranslation } from "react-i18next";
import HeroTemplate from "../../components/heroTemplate/heroTemplate";

import Image from "../../assets/images/recom.png";
import Info from "./info/info";

const Partner = () => {
  const { t } = useTranslation();

  return (
    <div>
      <HeroTemplate title={t("partner.hero.title")} image={Image} />

      <Info />
    </div>
  );
};

export default Partner;
