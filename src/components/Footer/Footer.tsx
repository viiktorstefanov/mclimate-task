import React from "react";
import styles from "./Footer.module.css";
import FooterMenuColumn from "../FooterMenuColumn/FooterMenuColumn";
import FooterLogoColumn from "../FooterLogoColumn/FooterLogoColumn";
import { footerMenuData } from "../../constants/footer";

const Footer: React.FC = () => {

  return (
    <footer className={styles.footer}>
      <FooterLogoColumn />

      {footerMenuData.map((menu) => (
        <FooterMenuColumn menu={menu} key={menu.header}/>
      ))}
    </footer>
  );
};

export default Footer;
