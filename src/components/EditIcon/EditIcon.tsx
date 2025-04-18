import React from 'react';
import styles from './EditIcon.module.css';
import { GoPencil } from "react-icons/go";

const EditIcon: React.FC = () => {
  return (
    <GoPencil className={styles["edit-icon"]} />
  )
}

export default EditIcon
