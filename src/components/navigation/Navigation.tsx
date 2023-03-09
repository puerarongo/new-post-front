import React from "react";
import styles from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

const Navigation: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo__container}>logo</div>
      <div className={styles.nav__container}>
        <NavLink to="/" className={styles.link}>
          Home
        </NavLink>
        <NavLink to="/departments" className={styles.link}>
          Departments
        </NavLink>
      </div>
    </header>
  );
};

export default Navigation;
