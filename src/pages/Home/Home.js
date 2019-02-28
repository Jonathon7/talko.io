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
          <p>Easily Deployable Live Chat Components Built for React</p>
        </div>
        <div className={styles.featuresCont}>
          <div className={styles.feature}>
            <h1>Uses Socket.io</h1>
            <p>
              The foundation of this application, socket.io was the choice for
              its ease of set up, and who’s features lends itself perfectly to
              the task of creating a distributable React tool able to be
              installed by a React developer by providing both server-side and
              client-side components with similar APIs.
            </p>
          </div>
          <div className={styles.feature}>
            <h1>Uses Styled Components</h1>
            <p>
              Much like React Components themselves, Styled Components allow an
              alternate, more intuitive application of CSS to React that
              enhances readability while decreasing complexity by allowing
              smaller, more independent and reusable components.
            </p>
          </div>
          <div className={styles.feature}>
            <h1>Built With React</h1>
            <p>
              When an open source application is desired, and less interaction
              with a back end, with responsiveness is required, React is a must
              with its SPA Architecture. React.js, is a comprehensive JavaScript
              library for building user interfaces changing the way developers
              think about front-end development.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
