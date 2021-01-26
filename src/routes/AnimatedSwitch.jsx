import React from "react";
import { Switch, withRouter } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./AnimatedSwitch.less";

const ANIMATION_MAP = {
  PUSH: "forward",
  POP: "back",
};

const AnimatedSwitch = withRouter(({ location, children, history }) => {
  return (
    <TransitionGroup
      className={"router-wrapper"}
      childFactory={(child) =>
        React.cloneElement(child, { classNames: ANIMATION_MAP[history.action] })
      }
    >
      <CSSTransition timeout={1500} key={location.pathname}>
        <Switch location={location}>{children}</Switch>
      </CSSTransition>
    </TransitionGroup>
  );
});

export default AnimatedSwitch;
