import React from "react";
import styles from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import svgPath from "../../helpers/svgPath";

const Navigation: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo__container}>
        <svg className={styles.svg__logo}>
          <use href={svgPath.poshta + "#poshta"}></use>
        </svg>
      </div>
      <div className={styles.nav__container}>
        <NavLink to="/" className={styles.link}>
          Головна
        </NavLink>
        <NavLink to="/departments" className={styles.link}>
          Відділення
        </NavLink>
      </div>
    </header>
  );
};

export default Navigation;
