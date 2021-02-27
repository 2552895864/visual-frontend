import React, { useState, useEffect } from "react";
import { Drawer } from "antd";
import classNames from "classnames";
import delay from "lodash/delay";
import { withRouter } from "react-router-dom";
import PubSub from "pubsub-js";
import menu from "@/routes/routes";
import { MENU_TITLE } from "@/constants";
import { pubsubKey, animate } from "@/config";

import styles from "./Menu.module.less";

const Menu = ({
  onClose,
  visible,
  history: { push },
  location: { pathname },
}) => {
  const [currentVisible, setCurrentVisible] = useState(visible);
  const onChangePage = (pathName) => {
    PubSub.publish(pubsubKey.leaveAnimateKey, true);
    setCurrentVisible(false);
    delay(() => {
      push(pathName);
    }, animate.duration * 2000);
  };

  useEffect(() => {
    setCurrentVisible(visible);
  }, [visible]);
  return (
    <Drawer
      className={styles.pageContainerMenu}
      placement="right"
      width={323}
      closable={false}
      onClose={onClose}
      visible={currentVisible}
      headerStyle={{ display: "none" }}
      bodyStyle={{ padding: 0 }}
      getContainer={false}
    >
      <div className={styles.title}>
        <div className={styles.titleContent}>{MENU_TITLE}</div>
      </div>
      <ul className={styles.menuList}>
        {menu.map((m) => (
          <li
            className={classNames(styles.menuItem, {
              [styles.menuItemSelected]: pathname === m.path,
            })}
            key={`${m.path}_${m.name}`}
            onClick={() => onChangePage(m.path)}
          >
            {m.name}
          </li>
        ))}
      </ul>
    </Drawer>
  );
};

export default withRouter(Menu);
