import EcommercePage from "./pages/EcommercePage";
import BlogPage from "./pages/BlogPage";
import PortfolioPage from "./pages/PortfolioPage";
import "./index.css";

const App = () => (
  <div>
    <h1>Design System Demo</h1>
    <h2>E-commerce</h2>
    <EcommercePage />
    <h2>Blog</h2>
    <BlogPage />
    <h2>Portfolio</h2>
    <PortfolioPage />
  </div>
);

export default App;
