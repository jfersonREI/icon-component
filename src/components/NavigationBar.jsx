import PropTypes from "prop-types";
import Icon from "./Icon";
import PrimaryButton from "./PrimaryButton";
import styles from "./NavigationBar.module.css";

const NavigationBar = ({ items }) => (
  <nav className={styles.nav}>
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.icon && <Icon name={item.icon} size="medium" color="default" />}
          <a href={item.url}>{item.label}</a>
        </li>
      ))}
    </ul>
    <PrimaryButton>Sign Up</PrimaryButton>
  </nav>
);

NavigationBar.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      icon: PropTypes.string,
    })
  ).isRequired,
};

export default NavigationBar;
