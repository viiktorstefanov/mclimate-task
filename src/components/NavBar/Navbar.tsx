import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";

const Navbar: React.FC = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to={"/"}>
          <img
            className={styles["img-logo"]}
            src="/assets/images/logo.png"
            alt="logo"
          />
        </Link>
      </div>
      <ul className={styles.navLinks}>
        {isAuthenticated && (
          <>
            <Link to={"/buildings"}>Buildings</Link>
            <Link to={"/buildings/1"}>Buildings Dashboard</Link>
            <Link to={"buildings/floors/1"}>Floor Dashboard</Link>
            <Link className={styles.logout} to={"/auth/logout"}>Logout</Link>
          </>
        )}
        {!isAuthenticated && <Link to={"/auth/login"}>Login</Link>}
      </ul>
    </nav>
  );
};

export default Navbar;
