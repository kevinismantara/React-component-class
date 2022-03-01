import * as React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { HomeContainer } from "./pages/Home";
import { App } from "./App";

const rootElement = document.getElementById("root");
render(
  <React.StrictMode>
    <BrowserRouter>
      <App>
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route component={HomeContainer} />
        </Switch>
      </App>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);
