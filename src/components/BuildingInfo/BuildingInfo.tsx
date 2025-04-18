import React from 'react';
import styles from './BuildingInfo.module.css';

type BuildingInfoProps = {
    buildName: string;
};

const BuildingInfo: React.FC<BuildingInfoProps> = ( { buildName }) => {
  return (
    <div className={styles["build-info-item"]}>
    <img
      src="/assets/images/commercial-building.svg"
      alt="building"
      className={styles['icon']}
      loading="lazy"
    />
    <span>{buildName}</span>
  </div>
  )
}

export default BuildingInfo
