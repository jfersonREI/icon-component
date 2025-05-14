import NavigationBar from "../components/NavigationBar";
import MediaCard from "../components/MediaCard";

const BlogPage = () => (
  <div>
    <NavigationBar
      items={[
        { id: 1, label: "Home", url: "/", icon: "home" },
        { id: 2, label: "Blog", url: "/blog", icon: "menu" },
      ]}
    />
    <MediaCard
      title="Blog Post"
      icon="facebook"
      description="Lorem ipsum dolor sit amet."
    />
  </div>
);

export default BlogPage;
