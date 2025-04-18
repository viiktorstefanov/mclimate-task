import React from "react";
import styles from './FooterLogoColumn.module.css';
import { socialMediaData } from "../../constants/footer";
import { Link } from "react-router-dom";

const FooterLogoColumn: React.FC = () => {

    const currentYear = new Date().getFullYear();

  return (
    <div className={styles["logo-menu"]}>
      <img
        src="/assets/images/logo-grey.svg"
        alt="logo"
        className={styles["logo-img"]}
      />
      <p className={styles["footer-copyright"]}>
        &copy; {currentYear}. All rights reserved.
      </p>
      <div className={styles["social-media"]}>
        {socialMediaData.map((item: { img: string; url: string }) => (
          <Link to={item.url} key={item.url}>
            <img src={item.img} alt={item.url} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FooterLogoColumn;
