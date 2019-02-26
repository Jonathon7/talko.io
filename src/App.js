import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { UserList } from "talko-react";
import routes from "./routes";

class App extends Component {
  render() {
    return <Router>{routes}</Router>;
  }
}

export default App;
