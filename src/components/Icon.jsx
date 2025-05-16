import PropTypes from "prop-types";
import styles from "./Icon.module.css";

const Icon = ({ name, size = "medium", color = "default", ...props }) => (
  <span
    className={`${styles.icon} ${styles[size]} ${styles[color]}`}
    aria-label={`Icon: ${name}`}
    role="img"
    {...props}
  >
    <svg className={styles.svg}>
      <use href={`${import.meta.env.BASE_URL}icons.sprite.svg#${name}`} />
    </svg>
  </span>
);

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["small", "medium", "large", "xlarge"]),
  color: PropTypes.oneOf(["default", "accent", "secondary"]),
};

export default Icon;
