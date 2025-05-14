import NavigationBar from "../components/NavigationBar";
import MediaCard from "../components/MediaCard";
import PrimaryButton from "../components/PrimaryButton";

const EcommercePage = () => (
  <div>
    <NavigationBar
      items={[
        { id: 1, label: "Home", url: "/", icon: "home" },
        { id: 2, label: "Shop", url: "/shop", icon: "cart" },
      ]}
    />
    <MediaCard title="Product" icon="cart" description="Buy now!" />
    <PrimaryButton icon="add">Add to Cart</PrimaryButton>
  </div>
);

export default EcommercePage;
