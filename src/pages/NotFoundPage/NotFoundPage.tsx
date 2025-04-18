import React from "react";
import styles from "./NotFoundPage.module.css";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const NotFoundPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles["error-header"]}>404</h1>
      <h3 className={styles["error-msg"]}>
        Oops! The page you're looking for doesn't exist.
      </h3>
      <Link to="/" className={styles.link}>
      <FaArrowLeft className={styles.arrow}/>
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
