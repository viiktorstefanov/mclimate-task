import React from 'react';
import styles from './FloorDashboard.module.css';
import { Link } from 'react-router-dom';
import { floorDashboardItems } from '../../constants/floor-dashboard';
import FloorDashboardItem from '../FloorDashboardItem/FloorDashboardItem';

type FloorDashboardProps = {
    devicesCount: number;
    buildingId: string;
  };

const FloorDashboard: React.FC<FloorDashboardProps> = ( { devicesCount } ) => {
  return (
    <div className={styles.FloorDashboard}>
      <nav>
        {floorDashboardItems.map((item) => (
          <FloorDashboardItem
            key={item.label}
            label={item.label}
            className={"active"}
          />
        ))}
      </nav>
      <div className={styles.content}>
        <Link to={``}>
          <img
            className={styles.deviceImage}
            src="/assets/images/add-a-device.png"
            alt="device-image"
          />
        </Link>
        {devicesCount === 0 && (
          <p>There are no devices assigned to this building.</p>
        )}
      </div>
    </div>
  )
};

export default FloorDashboard;
