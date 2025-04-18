import React from "react";
import styles from "./BuildingOnlineDevices.module.css";
import OnlineStatusDot from "../OnlineStatusDot/OnlineStatusDot";

type BuildingOnlineDevicesProps = {
    onlineDevicesCount: number;
};

const BuildingOnlineDevices: React.FC<BuildingOnlineDevicesProps> = ( { onlineDevicesCount }) => {
  return (
    <div className={styles["online-status"]}>
      <OnlineStatusDot dotHeight="1.2rem" dotWidth="1.2rem" />
      <span>Online devices: {onlineDevicesCount}</span>
    </div>
  );
};

export default BuildingOnlineDevices;
