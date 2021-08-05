import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./SideNav.module.scss";
import Logo from "../../Assets/Logo.png";
import { ReactComponent as Dashboard } from "../../Assets/dashboard.svg";

function SideNav({ onClick }) {
  const location = useLocation().pathname;
  const styleHandler = (link) => {
    if (location === link) {
      return styles.activeLinksContainer;
    } else {
      return styles.linksContainer;
    }
  };

  return (
    <div
      style={location === "/" ? { display: "none" } : { display: "block" }}
    >
      <div className={styles.mainContainer}>
        <div className={styles.logoContainer}>
          <img src={Logo} alt="logo" width="100%" />
          <i class="fas fa-times" onClick={onClick}></i>
        </div>
        <div className={styles.menuContainer}>
          <Link to="/dashboard" className={styleHandler("/dashboard")}>
            <div className={styles.iconContainer}>
              <Dashboard className={styles.icon} width="100%" />
            </div>
            <div className={styles.linkContainer}>
              <p className={styles.link}>Dashboard</p>
            </div>
          </Link>
        </div>
        <div className={styles.menuContainer}>
          <Link to="/setting" className={styleHandler("/setting")}>
            <div className={styles.iconContainer}>
              <Dashboard className={styles.icon} width="100%" />
            </div>
            <div className={styles.linkContainer}>
              <p className={styles.link}>Settings</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SideNav;
