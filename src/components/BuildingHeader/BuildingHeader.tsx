import React from "react";
import styles from "./BuildingHeader.module.css";

type BuildingHeaderProps = {
    buildingName: string;
    
};

const BuildingHeader: React.FC<BuildingHeaderProps> = ( { buildingName } ) => {
  return (
      <h2 className={styles.buildingHeader}>{buildingName}</h2>
  );
};

export default BuildingHeader;
