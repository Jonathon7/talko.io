import React, { Component } from "react";
import styles from "./home.module.scss";
import Navbar from "../../components/Navbar/Navbar";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className={styles.header}>
          <div style={{ position: "absolute", left: 0 }} />
          <h1>Talko.io</h1>
          <p>A React Framework for Building Live Chat Components</p>
        </div>
        <div className={styles.featuresCont}>
          <div className={styles.feature}>
            <h1>Uses Socket.io</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Molestias a veniam nemo delectus et ipsum doloremque eaque!
              Aspernatur quae quidem expedita maxime omnis nihil quas id porro
              possimus illum! Magni.
            </p>
          </div>
          <div className={styles.feature}>
            <h1>Uses Styled Components</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Molestias a veniam nemo delectus et ipsum doloremque eaque!
              Aspernatur quae quidem expedita maxime omnis nihil quas id porro
              possimus illum! Magni.
            </p>
          </div>
          <div className={styles.feature}>
            <h1>Built With React</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Molestias a veniam nemo delectus et ipsum doloremque eaque!
              Aspernatur quae quidem expedita maxime omnis nihil quas id porro
              possimus illum! Magni.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
