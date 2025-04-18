import React from 'react';
import styles from './FloorImage.module.css';

const FloorImage = () => {
  return (
    <img
      src="/assets/images/icon_floor.svg"
      alt="floor-image"
      className={styles["floor-img"]}
    />
  )
}

export default FloorImage;
