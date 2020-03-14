import React from "react";
import {createMemoryHistory} from "history";
import {Route, Router, Switch} from "react-router-dom";

// pages for this product
import HomePage from "./HomePage";
import EpisodePage from "./EpisodePage";
import AboutPage from "./AboutPage";


let hist = createMemoryHistory();

export default () => (
  <Router history={hist}>
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/episodes" component={EpisodePage} />
    </Switch>
  </Router>
);