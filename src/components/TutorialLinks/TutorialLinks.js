import React, { Component } from "react";
import styles from "./tutorialLinks.module.scss";
import github from "../../images/github.png";
import node from "../../images/nodejs.png";
import react from "../../images/reactjs.png";

export default class TutorialLinks extends Component {
  componentDidMount() {
    window.addEventListener("scroll", this.maximizeLogos);
  }

  logos = React.createRef();

  maximizeLogos = () => {
    window.requestAnimationFrame(() => {
      if (window.scrollY > 100) {
        this.logos.current.style.opacity = "1";
      } else {
        this.logos.current.style.opacity = "0";
      }
    });
  };

  render() {
    return (
      <div className={styles.linksCont} ref={this.logos}>
        <img src={github} alt="" className={styles.github} />
        <img src={node} alt="" className={styles.node} />
        <img src={react} alt="" className={styles.react} />
      </div>
    );
  }
}
