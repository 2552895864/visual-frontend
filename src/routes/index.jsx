import React from "react";
import { HashRouter, Route } from "react-router-dom";
import { LangProvider } from "@/context/locale";
import { useLocale } from "@/hooks";
import Mask from "./Mask";
import AnimatedSwitch from "./AnimatedSwitch";
import routes from "./routes";

export default function Routes() {
  return (
    <LangProvider value={useLocale()}>
      <HashRouter>
        <AnimatedSwitch>
          {routes.map((route) => (
            <Route exact key={route.path} {...route} />
          ))}
        </AnimatedSwitch>
        <Mask />
      </HashRouter>
    </LangProvider>
  );
}
