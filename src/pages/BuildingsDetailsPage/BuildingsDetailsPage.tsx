import React, { useMemo } from "react";
import styles from "./BuildingsDetailsPage.module.css";
import { useParams } from "react-router-dom";
import BackButton from "../../components/BackButton/BackButton";
import Button from "../../components/Button/Button";
import BuildingImage from "../../components/BuildingImage/BuildingImage";
import BuildingLocation from "../../components/BuildingLocation/BuildingLocation";
import BuildingFloorInfo from "../../components/BuildingFloorInfo/BuildingFloorInfo";
import BuildingOfficesInfo from "../../components/BuildingOfficesInfo/BuildingOfficesInfo";
import BuildingRoomsInfo from "../../components/BuildingRoomsInfo/BuildingRoomsInfo";
import OnlineStatusDot from "../../components/OnlineStatusDot/OnlineStatusDot";
import BuildingDashboard from "../../components/BuildingDashboard/BuildingDashboard";
import { buildings } from "../../constants/buildings";

const BuildingsDetailsPage: React.FC = () => {
  const { buildingId } = useParams<{ buildingId: string }>();

  const building = useMemo(
    () => buildings.find((b) => b.id === Number(buildingId)),
    [buildingId]
  );

  const onlineDevices = useMemo(
    () => (building ? building.devices.filter((d) => d.status === "online").length : 0),
    [building]
  );

  const totalDevices = useMemo(
    () => (building ? building.devices.length : 0),
    [building]
  );

  return (
    <div className={styles.buildingsDetailsPage}>
      <div className={styles.header}>
        <BackButton />
        <Button text="Edit building" />
      </div>
      <div className={styles.title}>
        <h2>Building Dashboard</h2>
      </div>
      <div className={styles.buildingInfo}>
        <div className={styles.buildingImage}>
          <BuildingImage />
        </div>
        <div className={styles.buildingDetails}>
          <h2>{building!.name}</h2>
          <BuildingLocation buildingAdress={building!.address} />
          <div className={styles.buildingDetailsInfo}>
            <BuildingFloorInfo floorsCount={building!.floors.length} />
            <BuildingOfficesInfo officesCount={building!.offices.length} />
            <BuildingRoomsInfo roomsCount={building!.rooms.length} />
          </div>
        </div>
      </div>
      <div className={styles.buildingInfoDevices}>
        <div className={styles.box}>
          <h5>Online Devices</h5>
          <div className={styles.onlineDevices}>
            <OnlineStatusDot dotHeight="0.5rem" dotWidth="0.5rem" />
            <span>{onlineDevices}</span>
          </div>
        </div>
        <div className={styles.box}>
          <h5>Total Devices</h5>
          <div className={styles.onlineDevices}>
            <span>{totalDevices}</span>
          </div>
        </div>
      </div>
      <BuildingDashboard floorsCount={0} buildingId={buildingId!}/>
    </div>
  );
};

export default BuildingsDetailsPage;
