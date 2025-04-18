import React from "react";
import styles from "./Button.module.css";
import { IconType } from "react-icons";

type ButtonProps = {
  text: string;
  onClick?: () => void;
  icon?: IconType;
};

const Button: React.FC<ButtonProps> = ({ text, onClick, icon: Icon }) => {
  return (
    <button className={styles.customBtn} onClick={onClick}>
      {Icon && <Icon />}
      {text}
    </button>
  );
};

export default Button;
