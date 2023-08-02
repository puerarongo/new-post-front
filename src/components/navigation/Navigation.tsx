import React from "react";
import { NavLink } from "react-router-dom";
import svgPath from "../../helpers/svgPath";
import styles from "./Navigation.module.css";

const Navigation: React.FC = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo__container}>
          <NavLink to="/">
            <svg className={styles.svg__logo} aria-label="Main app logo">
              <use href={svgPath.poshta + "#poshta"}></use>
            </svg>
          </NavLink>
        </div>
        <div className={styles.nav__container}>
          <NavLink
            to="/"
            className={styles.link}
            aria-label="Navigation link to home page"
          >
            Головна
          </NavLink>
          <NavLink
            to="/departments"
            className={styles.link}
            aria-label="Navigation link to departments page"
          >
            Відділення
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
