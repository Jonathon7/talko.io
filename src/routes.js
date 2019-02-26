import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Docs from "./pages/Docs/Docs";
import { UserList } from "talko-react";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/docs" component={Docs} />
    <Route path="/rep" component={UserList} />
  </Switch>
);
