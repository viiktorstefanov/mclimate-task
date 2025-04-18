import React from 'react';
import styles from './FooterMenuColumn.module.css';
import { Link } from 'react-router-dom';

type FooterMenuColumnProps = {
    menu: {
        header: string;
        links: { url: string; title: string }[];
    };
}

const FooterMenuColumn: React.FC<FooterMenuColumnProps> = ( { menu }) => {
  return (
    <div className={styles["footer-column"]} key={menu.header}>
          <h3 className={styles["footer-menu-header"]}>{menu.header}</h3>
          <ul className={styles["footer-menu-list"]}>
            {menu.links.map((link) => (
              <li className={styles["footer-menu-list-item"]} key={link.url}>
                <Link
                  to={link.url}
                  className={styles["footer-menu-list-item-link"]}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
    </div>
  )
}

export default FooterMenuColumn
