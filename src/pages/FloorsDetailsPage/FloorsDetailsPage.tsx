import React, { useMemo } from 'react';
import styles from './FloorsDetailsPage.module.css';

import { useParams } from 'react-router-dom';
import { buildings } from '../../constants/buildings';
import Button from '../../components/Button/Button';
import BackButton from '../../components/BackButton/BackButton';
import FloorImage from '../../components/FloorImage/FloorImage';
import BuildingLocation from '../../components/BuildingLocation/BuildingLocation';
import BuildingOfficesInfo from '../../components/BuildingOfficesInfo/BuildingOfficesInfo';
import BuildingRoomsInfo from '../../components/BuildingRoomsInfo/BuildingRoomsInfo';
import BuildingInfo from '../../components/BuildingInfo/BuildingInfo';
import FloorDashboard from '../../components/FloorDashboard/FloorDashboard';

const FloorsDetailsPage: React.FC = () => {

  const { buildingId } = useParams<{ buildingId: string }>();

   const building = useMemo(
      () => buildings.find((b) => b.id === Number(buildingId)),
      [buildingId]
    );

  return (
    <div className={styles.floorsDetailsPage}>
      <div className={styles.header}>
        <BackButton />
        <Button text="Edit floor" />
      </div>

      <div className={styles.title}>
        <h2>Floor Dashboard</h2>
      </div>

      <div className={styles.floorInfo}>
        <div className={styles.floorImage}>
          <FloorImage />
        </div>
        <div className={styles.floorDetails}>
          <h2>Floor 1</h2>
          <BuildingInfo buildName={building!.name} />
          <div className={styles.floorDetailsInfo}>
            <BuildingOfficesInfo officesCount={building!.offices.length} />
            <BuildingRoomsInfo roomsCount={building!.rooms.length} />
          </div>
        </div>
      </div>

      <FloorDashboard devicesCount={0} buildingId={buildingId!}/>
    </div>
  )
}

export default FloorsDetailsPage;
