import React, { Component } from "react";
import styles from "./docsModal.module.scss";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/languages/hljs/javascript";
import css from "react-syntax-highlighter/dist/languages/hljs/css";
import jsx from "react-syntax-highlighter/dist/esm//languages/prism/jsx";
import docco from "react-syntax-highlighter/dist/styles/hljs/github";
import { Chat } from "talko-react";

export default class DocsModal extends Component {
  componentDidMount() {
    SyntaxHighlighter.registerLanguage("javascript", js);
    SyntaxHighlighter.registerLanguage("css", css);
  }

  render() {
    let css = `
    .chat {
      position: fixed;
      bottom: 0;
      right: 100px;
    }
    `;

    let chatImport = `
    import { Chat } from "talko-react";
    `;

    let chat = `
    <Chat
     theme="light"
     profileImage={userImage}
     title="Our very best coder!"
     name="John Thummel"
     headerTitle="Support Chat"
    />
    `;

    let repImport = `
    import { UserList } from "talko-react";
    `;

    let npm = "npm install talko-react --save";
    let npmServer = "npm install talko-server --save";
    return (
      <div>
        <div className={styles.modalCont}>
          <div className={styles.directions}>
            <h1>Getting Started</h1>
            <p>
              In this guide, we will setup our components in a React application
              and also configure a Node server to handle our socket connections.
            </p>
            <SyntaxHighlighter language="text" style={docco} wrapLines={true}>
              {npm}
            </SyntaxHighlighter>
            <p>
              There are two components you can import from this package. The{" "}
              <i className={styles.code}>&lt;Chat /&gt;</i> and the{" "}
              <i className={styles.code}>&lt;UserList /&gt;</i> components.
            </p>
            <p>
              Import the Chat component wherever you want it to be displayed and
              apply the following css styles
            </p>
            <SyntaxHighlighter language="js" style={docco} wrapLines={true}>
              {chatImport}
            </SyntaxHighlighter>
            <SyntaxHighlighter language="css" style={docco} wrapLines={true}>
              {css}
            </SyntaxHighlighter>
            <p>
              This keeps the chat component at the bottom of the page. This
              component accepts five props. The first one is a theme, you can
              choose to use either a dark or a light theme. Just set theme to
              either dark or light. It also accepts a profile image for the
              representative, a title for his job position, a name, and a header
              title which is the text at the top of the modal.
            </p>
            <SyntaxHighlighter language="js" style={docco}>
              {chat}
            </SyntaxHighlighter>
            <h1>The Representative Component</h1>
            <p>
              This component is intended to be used by the representatives in a
              company. Since it is a full view component you can make it a route
              or render it any place you want.
            </p>
            <SyntaxHighlighter language="js" style={docco}>
              {repImport}
            </SyntaxHighlighter>
            <p>
              This component allows you to have chats with mulitple customers
              and navigate between conversations with tabs.
            </p>
          </div>
          <div className={styles.directions}>
            <h1>Setting Up the Server</h1>
            <p>
              In this guide, we will integrate our chat components in a React
              application and an
            </p>
            <SyntaxHighlighter language="text" style={docco} wrapLines={true}>
              {npmServer}
            </SyntaxHighlighter>
          </div>
        </div>
        <div style={{ position: "fixed", bottom: "0px", right: "10vw" }}>
          <Chat theme="light" name="jon" />
        </div>
      </div>
    );
  }
}

// &lt;HTML&gt; displays <HTML>
