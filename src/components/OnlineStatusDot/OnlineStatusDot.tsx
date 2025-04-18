import React from "react";
import styles from "./OnlineStatusDot.module.css";

type OnlineStatusDotProps = {
  dotWidth: string;
  dotHeight: string;
};

const OnlineStatusDot: React.FC<OnlineStatusDotProps> = ({
  dotWidth,
  dotHeight,
}) => {
  return (
    <div className={styles["device-status"]}>
      <span
        className={styles["status-dot"]}
        style={{
          width: dotWidth,
          height: dotHeight,
        }}
      ></span>
    </div>
  );
};

export default OnlineStatusDot;
