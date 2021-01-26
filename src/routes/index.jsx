import React from "react";
import { HashRouter, Route } from "react-router-dom";
import AnimatedSwitch from "./AnimatedSwitch";
import routes from "./routes";

export default function Routes() {
  return (
    <HashRouter>
      <AnimatedSwitch>
        {routes.map((route) => (
          <Route exact key={route.path} {...route} />
        ))}
      </AnimatedSwitch>
    </HashRouter>
  );
}
