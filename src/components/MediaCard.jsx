import PropTypes from "prop-types";
import Icon from "./Icon";
import styles from "./MediaCard.module.css";

const MediaCard = ({ title, icon, description }) => (
  <div className={styles.card}>
    {icon && <Icon name={icon} size="large" color="accent" />}
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

MediaCard.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  description: PropTypes.string.isRequired,
};

export default MediaCard;
