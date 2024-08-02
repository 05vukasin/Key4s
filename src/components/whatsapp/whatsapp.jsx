import styles from "./whatsapp.module.css";

import Icon from "../../assets/icons/whatsapp.svg";
import Icon2 from "../../assets/icons/google.svg";

const Whatsapp = ({ href, google }) => {
  return (
    <div>
      <a
        href={href}
        className={`${styles.icon} ${!google ? styles.hide : ""}`}
        target="_blank"
      >
        <img src={google ? Icon2 : Icon} alt="" />
      </a>
    </div>
  );
};

export default Whatsapp;
