import Icon from "../components/Icon";

const iconCategories = {
  actions: ["cart", "add"],
  navigation: ["home", "menu"],
  social: ["twitter", "facebook"],
};

export default {
  title: "Components/Icon",
  component: Icon,
  argTypes: {
    name: {
      control: "select",
      options: Object.values(iconCategories).flat(),
    },
    size: {
      control: "select",
      options: ["small", "medium", "large", "xlarge"],
    },
    color: { control: "select", options: ["default", "accent", "secondary"] },
  },
};

const Template = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: "home",
  size: "medium",
  color: "default",
};

export const AllIcons = () => (
  <div>
    {Object.entries(iconCategories).map(([category, icons]) => (
      <div key={category}>
        <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gap: "16px",
          }}
        >
          {icons.map((name) => (
            <div key={name}>
              <Icon name={name} size="medium" />
              <p>{name}</p>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);
