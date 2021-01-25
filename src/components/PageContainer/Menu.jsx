import React from "react";
import { Drawer } from "antd";
import { withRouter } from "react-router-dom";

import menu from "@/routes/routes";

import styles from "./Menu.module.less";

const Menu = ({ onClose, visible, history: { push } }) => {
  const onChangePage = (pathName) => {
    push(pathName);
  };
  return (
    <Drawer
      className={styles.pageContainerMenu}
      placement="right"
      closable={false}
      onClose={onClose}
      visible={visible}
      headerStyle={{ display: "none" }}
      getContainer={false}
    >
      <ul>
        {menu.map((m) => (
          <li key={`${m.path}_${m.name}`} onClick={() => onChangePage(m.path)}>
            {m.name}
          </li>
        ))}
      </ul>
    </Drawer>
  );
};

export default withRouter(Menu);
