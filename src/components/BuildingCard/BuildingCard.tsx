import React, { useMemo } from "react";
import styles from "./BuildingCard.module.css";

import { Device, Floor, Office, Room } from "../../constants/building.types";
import BuildingHeader from "../BuildingHeader/BuildingHeader";
import EditIcon from "../EditIcon/EditIcon";
import BuildingLocation from "../BuildingLocation/BuildingLocation";
import RightArrow from "../RightArrowIcon/RightArrowIcon";
import LineDivider from "../LineDivider/LineDivider";
import BuildingFloorInfo from "../BuildingFloorInfo/BuildingFloorInfo";
import BuildingOfficesInfo from "../BuildingOfficesInfo/BuildingOfficesInfo";
import BuildingImage from "../BuildingImage/BuildingImage";
import BuildingRoomsInfo from "../BuildingRoomsInfo/BuildingRoomsInfo";
import BuildingDevicesInfo from "../BuildingDevicesInfo/BuildingDevicesInfo";
import BuildingOnlineDevices from "../BuildingOnlineDevices/BuildingOnlineDevices";

type BuildingCardProps = {
  building: {
    id: number;
    name: string;
    address: string;
    floors: Floor[];
    offices: Office[];
    rooms: Room[];
    devices: Device[];
  };
};

const BuildingCard: React.FC<BuildingCardProps> = ({ building }) => {
  const onlineDevicesCount = useMemo(() => {
    return building.devices.filter((device) => device.status === "online")
      .length;
  }, [building.devices]);

  return (
    <div className={styles["build-card"]}>
      <div className={styles["card"]}>
        <div className={styles["building-img-wrapper"]}>
          <BuildingImage />
        </div>
        <div className={styles["card-wrapper"]}>
          <div className={styles["card-title"]}>
            <BuildingHeader buildingName={building.name} />
            <EditIcon />
          </div>
          <div className={styles["card-subtitle"]}>
            <BuildingLocation buildingAdress={building.address} />
            <LineDivider />
          </div>

          <div className={styles["card-content"]}>
            <div className={styles["card-content-info"]}>
              <BuildingFloorInfo floorsCount={building.floors.length} />
              <BuildingOfficesInfo officesCount={building.offices.length} />
              <BuildingRoomsInfo roomsCount={building.rooms.length} />
              <BuildingDevicesInfo devicesCount={building.devices.length} />
              <BuildingOnlineDevices onlineDevicesCount={onlineDevicesCount}/>
            </div>
            <RightArrow route={`/buildings/${building.id}`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildingCard;
