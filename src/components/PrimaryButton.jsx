import PropTypes from "prop-types";
import Icon from "./Icon";
import styles from "./PrimaryButton.module.css";

const PrimaryButton = ({ icon, children, ...props }) => (
  <button className={styles.button} {...props}>
    {icon && <Icon name={icon} size="medium" color="default" />}
    {children}
  </button>
);

PrimaryButton.propTypes = {
  icon: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default PrimaryButton;
