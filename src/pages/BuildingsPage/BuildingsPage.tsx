import React from 'react';
import styles from './BuildingsPage.module.css';

import BuildingCard from '../../components/BuildingCard/BuildingCard';
import { buildings } from '../../constants/buildings';
import Button from '../../components/Button/Button';
import { FaPlus } from "react-icons/fa6";

const BuildingsPage: React.FC = () => {
  
  return (
    <div className={styles.buildingsPage}>
       <div className={styles.header}>
        <h1>Buildings ({buildings.length})</h1>
        <Button text="Create new building" icon={FaPlus} />
      </div>
      {buildings.map((building) => (
        <BuildingCard key={building.id} building={building} />
      ))}
    </div>
  )
}

export default BuildingsPage;
