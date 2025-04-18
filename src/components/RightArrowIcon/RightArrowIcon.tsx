import React from "react";
import styles from "./RightArrowIcon.module.css";
import { Link } from "react-router-dom";

type RightArrowIconProps = {
    route: string;
};

const RightArrow: React.FC<RightArrowIconProps> = ( { route }) => {
  return (
    <Link to={route}>
      <img
        src="assets/images/2849833_arrows_navigation_forward_arrow_right_icon.svg"
        alt="arrow"
        className={styles.icon}
        loading="lazy"
      />
    </Link>
  );
};

export default RightArrow;
