import React from "react";
import styles from "./BuildingDevicesInfo.module.css";

type BuildingDevicesInfoProps = {
  devicesCount: number;
};

const BuildingDevicesInfo: React.FC<BuildingDevicesInfoProps> = ({
  devicesCount,
}) => {
  return (
    <div className={styles["floor-info-item"]}>
      <img
        src="assets/images/2317836_chip_computer_cpu_device_frequency_icon.svg"
        alt="arrow"
        className={styles['icon']}
        loading="lazy"
      />
      <span>Devices: {devicesCount}</span>
    </div>
  );
};

export default BuildingDevicesInfo;
