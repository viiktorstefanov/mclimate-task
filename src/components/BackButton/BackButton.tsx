import React from "react";
import styles from "./BackButton.module.css";
import { useNavigate } from "react-router-dom";
import { MdArrowBackIos } from "react-icons/md";

const BackButton: React.FC = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(-1);
  };

  return <div className={styles.button} onClick={onClick}><MdArrowBackIos /> back</div>;
};

export default BackButton;
