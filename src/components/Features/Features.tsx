import React from "react";
import styles from "./Features.module.css";
import { features } from "../../constants/features";
import FeatureCard from "../FeatureCard/FeatureCard";

const Features: React.FC = () => {
  return (
    <section className={styles.features}>
      <h2>MClimate empowers you in the path to your goals </h2>
      <div className={styles.featureCards}>
        {features.map((feature) => (
          <FeatureCard key={feature.header} feature={feature} />
        ))}
      </div>
    </section>
  );
};

export default Features;
