import HeroTemplate from "../../components/heroTemplate/heroTemplate";

import Image from "../../assets/images/contact.jpeg";
import { useTranslation } from "react-i18next";
import Info from "./info/info";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div>
      <HeroTemplate image={Image} title={t("contact.hero.title")} />

      <Info />
    </div>
  );
};

export default Contact;
