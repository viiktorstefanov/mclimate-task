import React from "react";
import styles from "./BuildingImage.module.css";

const BuildingImage: React.FC = () => {
  return (
    <img
      src="/assets/images/commercial-building.svg"
      alt="commercial-building"
      className={styles["building-img"]}
    />
  );
};

export default BuildingImage;
