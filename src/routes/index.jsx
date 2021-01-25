import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import routes from "./routes";

export default function Routes() {
  return (
    <HashRouter>
      <Switch>
        {routes.map((route) => (
          <Route key={route.path} {...route} />
        ))}
      </Switch>
    </HashRouter>
  );
}
