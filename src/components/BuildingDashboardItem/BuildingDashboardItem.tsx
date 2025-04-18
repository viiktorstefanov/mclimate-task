import React from 'react';
import styles from './BuildingDashboardItem.module.css';

type BuildingDashboardItemProps = {
    label: string;
    className?: string;
};

const BuildingDashboardItem: React.FC<BuildingDashboardItemProps> = ({ label, className }) => {
  return (
    <span className={`${styles.item} ${className && label === 'Floors' ? styles[className] || className : ''}`}>
      {label}
    </span>
  );
};

export default BuildingDashboardItem;
