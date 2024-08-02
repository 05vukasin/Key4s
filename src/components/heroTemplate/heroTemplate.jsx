import styles from "./heroTemplate.module.css";

const HeroTemplate = ({ title, image }) => {
  return (
    <div
      className={styles.hero}
      style={{
        backgroundImage: `linear-gradient(
      rgba(69, 67, 67, 0.8),
      rgba(69, 67, 67, 0.8)
    ), url(${image})`,
      }}
    >
      <div className={styles.title}>{title}</div>
    </div>
  );
};

export default HeroTemplate;
