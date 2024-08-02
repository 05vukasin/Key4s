import HeroTemplate from "../../components/heroTemplate/heroTemplate";

import Image from "../../assets/images/support.jpeg";
import Info from "./info/info";
import { useTranslation } from "react-i18next";
import Whatsapp from "../../components/whatsapp/whatsapp";

const Support = () => {
  const { t } = useTranslation();

  return (
    <div>
      <HeroTemplate title={t("support.hero.title")} image={Image} />

      <Info />

      <Whatsapp href="tel:+381692700550" />
    </div>
  );
};

export default Support;
