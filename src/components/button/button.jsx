import styles from "./button.module.css";

import { Link } from "react-router-dom";

const Button = ({ children, onClick, href, target = "_blank" }) => {
  return (
    <Link className={styles.button} onClick={onClick} to={href} target={target}>
      {children}
    </Link>
  );
};

export default Button;
