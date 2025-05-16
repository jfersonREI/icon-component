import React from "react";
import { useEffect, useState } from "react";
import Icon from "./components/Icon";
import styles from "./App.module.css";
import "./index.css";

class ErrorBoundary extends React.Component {
  state = { error: null };

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    if (this.state.error) {
      return (
        <div className={styles.container}>
          <h1 className={styles.title}>Error Rendering Icons</h1>
          <p style={{ color: "red", textAlign: "center" }}>
            {this.state.error.message}
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}

const App = () => {
  const icons = [
    { name: "account", size: "small", color: "default" },
    { name: "account-box", size: "medium", color: "accent" },
    { name: "account-check", size: "large", color: "secondary" },
    { name: "account-circle", size: "xlarge", color: "default" },
    { name: "account-circle-outline", size: "small", color: "accent" },
    { name: "cart", size: "medium", color: "secondary" },
    { name: "add", size: "large", color: "default" },
    { name: "home", size: "xlarge", color: "accent" },
    { name: "menu", size: "small", color: "secondary" },
    { name: "truck", size: "medium", color: "default" },
  ];

  useEffect(() => {
    console.log("App rendered with icons:", icons);
    fetch("./icons.sprite.svg")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.text();
      })
      .then((data) => console.log("Sprite loaded:", data.slice(0, 200)))
      .catch((err) => console.error("Sprite fetch error:", err.message));
  }, []);

  return (
    <ErrorBoundary>
      <div className={styles.container}>
        <h1 className={styles.title}>Icon Showcase</h1>
        <div className={styles.grid}>
          {icons.map((icon, index) => {
            console.log(`Rendering icon: ${icon.name}`);
            return (
              <div key={index} className={styles.card}>
                <Icon name={icon.name} size={icon.size} color={icon.color} />
                <p className={styles.name}>{icon.name}</p>
                <p className={styles.details}>
                  {icon.size} / {icon.color}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default App;
