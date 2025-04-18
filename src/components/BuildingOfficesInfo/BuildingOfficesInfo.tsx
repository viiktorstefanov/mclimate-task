import React from "react";
import styles from "./BuildingOfficesInfo.module.css";

type BuildingOfficesInfoProps = {
    officesCount: number;
};

const BuildingOfficesInfo: React.FC<BuildingOfficesInfoProps> = ( { officesCount } ) => {
  return (
    <div className={styles["floor-info-item"]}>
      <img
        src="/assets/images/icon_appartment.svg"
        alt="appartment"
        className={styles['icon']}
        loading="lazy"
      />
      <span>Offices: {officesCount}</span>
    </div>
  );
};

export default BuildingOfficesInfo;
