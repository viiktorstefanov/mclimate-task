import React from "react";
import styles from "./BuildingFloorInfo.module.css";

type BuildingFloorInfoProps = {
  floorsCount: number;
};

const BuildingFloorInfo: React.FC<BuildingFloorInfoProps> = ({
  floorsCount,
}) => {
  return (
    <div className={styles["floor-info-item"]}>
      <img
        src="/assets/images/icon_floor.svg"
        alt="floor-icon"
        className={styles['icon']}
        loading="lazy"
      />
      <span>Floors: {floorsCount}</span>
    </div>
  );
};

export default BuildingFloorInfo;
