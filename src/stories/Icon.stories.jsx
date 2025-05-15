import { Icon } from "../components/Icon";
import "../index.css";

export default {
  title: "Components/Icon",
  component: Icon,
  argTypes: {
    name: {
      control: "select",
      options: [
        "account",
        "account-box",
        "account-check",
        "account-circle",
        "account-circle-outline",
        "cart",
        "add",
        "home",
        "menu",
        "twitter",
        "facebook",
      ],
    },
    size: {
      control: "select",
      options: ["small", "medium", "large", "xlarge"],
    },
    color: {
      control: "select",
      options: ["default", "accent", "secondary"],
    },
  },
};

const iconCategories = {
  actions: [
    "account",
    "account-box",
    "account-check",
    "account-circle",
    "account-circle-outline",
    "cart",
    "add",
  ],
  navigation: ["home", "menu"],
  social: ["twitter", "facebook"],
};

const Template = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: "account",
  size: "medium",
  color: "default",
};

export const AllIcons = () => (
  <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
    {Object.entries(iconCategories).map(([category, icons]) => (
      <div key={category}>
        <h3>{category}</h3>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {icons.map((name) => (
            <div key={name} style={{ textAlign: "center" }}>
              <Icon name={name} size="medium" color="default" />
              <div>{name}</div>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);
