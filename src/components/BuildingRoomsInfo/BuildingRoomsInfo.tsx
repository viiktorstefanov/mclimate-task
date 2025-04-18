import React from 'react';
import styles from './BuildingRoomsInfo.module.css';

type BuildingRoomsInfoProps = {
    roomsCount: number;
};


const BuildingRoomsInfo: React.FC<BuildingRoomsInfoProps> = ( { roomsCount }) => {
  return (
    <div className={styles["floor-info-item"]}>
    <img
      src="/assets/images/icon_door.svg"
      alt="arrow"
      className={styles['icon']}
      loading="lazy"
    />
    <span>Rooms: {roomsCount}</span>
  </div>
  )
}

export default BuildingRoomsInfo;
