import React from "react";
import { Switch, withRouter } from "react-router-dom";
import "./AnimatedSwitch.less";

const ANIMATION_MAP = {
  PUSH: "forward",
  POP: "back",
};

const AnimatedSwitch = withRouter(({ location, children, history }) => {
  return <Switch location={location}>{children}</Switch>;
});

export default AnimatedSwitch;
