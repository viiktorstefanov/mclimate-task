import React from "react";
import styles from "./HomePage.module.css";
import Hero from "../../components/Hero/Hero";
import Features from "../../components/Features/Features";

const HomePage: React.FC = () => {
  return (
    <div className={styles.homePage}>
      <Hero />
      <Features />
    </div>
  );
};

export default HomePage;
