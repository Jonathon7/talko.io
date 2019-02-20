import React, { Component } from "react";
import styles from "./docsModal.module.scss";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/languages/hljs/javascript";
import docco from "react-syntax-highlighter/dist/styles/hljs/github";

export default class DocsModal extends Component {
  componentDidMount() {
    SyntaxHighlighter.registerLanguage("javascript", js);
  }
  render() {
    let codeString = `
  function() {
    console.log("Hello")
  }

  function() {
    console.log("Hi")
  }

  class Talko {
    constructor(name) {
      this.name = name;
    }
  }
  `;

    let npm = "npm install talko-react --save";
    let npmServer = "npm install talko-server --save";
    return (
      <div className={styles.modalCont}>
        <div className={styles.directions}>
          <h1>Getting Started</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
            laudantium error similique,{" "}
            <i className={styles.code}> &lt;canvas&gt;</i> adipisci autem modi
            voluptates placeat molestias quasi veniam fugit facere, optio cum
            illo ea! Cupiditate laudantium possimus natus. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Est, laudantium error similique,
            adipisci autem modi voluptates placeat molestias quasi veniam fugit
            facere, optio cum illo ea! Cupiditate laudantium possimus natus.
          </p>
          <SyntaxHighlighter language="text" style={docco} wrapLines={true}>
            {npm}
          </SyntaxHighlighter>
          <SyntaxHighlighter
            language="javascript"
            style={docco}
            wrapLines={true}
          >
            {codeString}
          </SyntaxHighlighter>
        </div>
        <div className={styles.directions}>
          <h1>Setting Up the Server</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
            laudantium error similique, adipisci autem modi voluptates placeat
            molestias quasi veniam fugit facere, optio cum illo ea! Cupiditate
            laudantium possimus natus. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Est, laudantium error similique, adipisci autem
            modi voluptates placeat molestias quasi veniam fugit facere, optio
            cum illo ea! Cupiditate laudantium possimus natus.
          </p>
          <SyntaxHighlighter language="text" style={docco} wrapLines={true}>
            {npmServer}
          </SyntaxHighlighter>
          <SyntaxHighlighter
            language="javascript"
            style={docco}
            wrapLines={true}
          >
            {codeString}
          </SyntaxHighlighter>
        </div>
      </div>
    );
  }
}

// &lt;HTML&gt; displays <HTML>
