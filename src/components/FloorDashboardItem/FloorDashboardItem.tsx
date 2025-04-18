import React from 'react';
import styles from './FloorDashboardItem.module.css';

type FloorDashboardItemProps = {
    label: string;
    className?: string;
};

const FloorDashboardItem: React.FC<FloorDashboardItemProps> = ({ label, className }) => {
  return (
    <span className={`${styles.item} ${className && label === 'Offices' ? styles[className] || className : ''}`}>
    {label}
  </span>
  )
};

export default FloorDashboardItem;
