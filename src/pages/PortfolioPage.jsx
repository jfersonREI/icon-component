import NavigationBar from "../components/NavigationBar";
import MediaCard from "../components/MediaCard";
import PrimaryButton from "../components/PrimaryButton";

const PortfolioPage = () => (
  <div>
    <NavigationBar
      items={[
        { id: 1, label: "Home", url: "/", icon: "home" },
        { id: 2, label: "Projects", url: "/projects", icon: "menu" },
      ]}
    />
    <MediaCard
      title="Project Showcase"
      icon="twitter"
      description="Check out my latest work!"
    />
    <PrimaryButton icon="add">View Project</PrimaryButton>
  </div>
);

export default PortfolioPage;
