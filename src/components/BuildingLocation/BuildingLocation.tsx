import React from 'react';
import styles from './BuildingLocation.module.css';

import { MdPlace } from "react-icons/md";

type BuildingLocationProps = {
    buildingAdress: string;
};

const BuildingLocation: React.FC<BuildingLocationProps> = ({ buildingAdress}) => {
  return (
    <p className={styles.location}>
            <MdPlace className={styles.icon} />
            <span>{buildingAdress}</span>
    </p>
  )
}

export default BuildingLocation
