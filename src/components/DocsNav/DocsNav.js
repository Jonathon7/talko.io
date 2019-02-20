import React from "react";
import styles from "./docsNav.module.scss";
import { Link } from "react-router-dom";

export default function DocsNav() {
  return (
    <div className={styles.navCont}>
      <div className={styles.linksCont}>
        <Link to="/" className={styles.links}>
          Home
        </Link>
        <Link to="/" className={styles.links}>
          Home
        </Link>
        <Link to="/" className={styles.links}>
          Home
        </Link>
        <Link to="/" className={styles.links}>
          Home
        </Link>
      </div>
    </div>
  );
}
