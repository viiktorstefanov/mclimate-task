import React from "react";
import styles from "./FeatureCard.module.css";

type FeatureCardProps = {
  feature: {
    url: string;
    alt: string;
    header: string;
    description: string;
  };
};

const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => {
  return (
    <div className={styles.featureCard}>
      <img
        src={feature.url}
        alt={feature.alt}
        className={styles["card-img"]}
        loading="lazy"
      />
      <h3>{feature.header}</h3>
      <p>{feature.description}</p>
    </div>
  );
};

export default FeatureCard;
