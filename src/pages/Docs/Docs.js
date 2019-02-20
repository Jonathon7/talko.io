import React, { Component } from "react";
import DocsNav from "../../components/DocsNav/DocsNav";
import styles from "./docs.module.scss";
import DocsModal from "../../components/DocsModal/DocsModal";
import TutorialLinks from "../../components/TutorialLinks/TutorialLinks";

export default class Docs extends Component {
  render() {
    return (
      <div>
        <DocsNav />
        <div className={styles.title}>
          <h1>Using Talko.io with React</h1>
        </div>
        <DocsModal />
      </div>
    );
  }
}
