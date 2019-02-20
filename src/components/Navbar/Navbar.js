import React from "react";
import styles from "./navbar.module.scss";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

export default function Navbar() {
  return (
    <div className={styles.navCont}>
      <div className={styles.logo}>
        <img src={logo} alt="" />
      </div>
      <div className={styles.linksCont}>
        <Link to="/docs" className={styles.links}>
          Docs
        </Link>
        <Link to="/docs" className={styles.links}>
          Resources
        </Link>
        <Link to="/" className={styles.links}>
          Tutorial
        </Link>
      </div>
      <div className={styles.version}>
        <p>v1.0.8</p>
      </div>
    </div>
  );
}
