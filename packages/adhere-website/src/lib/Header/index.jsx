import React, { useState } from 'react';
import { Menu } from 'antd';
import { withRouter } from '@ctsj/router';
import packageJSON from '../../../../../package.json';

import styles from './index.less';

const MenuItemsConfig = [
  {
    name: '简介',
    key: '/adhere/introduction',
  },
  {
    name: '组件',
    key: '/adhere/component',
  },
  {
    name: 'Gallery',
    key: '/adhere/gallery',
  },
  {
    name: '更新日志',
    key: '/adhere/changelog',
  },
];

export default withRouter((props) => {
  const [menuSelectKeys, setMenuSelectKeys] = useState([getDefaultMenuSelectKey()]);

  function onMenuChange(e) {
    const { key, keyPath } = e;
    setMenuSelectKeys(keyPath);
    props.history.replace(key);
  }

  function getDefaultMenuSelectKey() {
    const { pathname } = window.location;

    const findMenuItemConfig = MenuItemsConfig.find(
      (menuItemConfig) => pathname.indexOf(menuItemConfig.key) !== -1,
    );

    return findMenuItemConfig ? findMenuItemConfig.key : '';
  }

  return (
    <div className={styles.Wrap}>
      <div className={styles.Fixed}>
        <a href={`${window.location.origin}`}>
          <h1 style={{ margin: 0 }}>adhere({`v${packageJSON.version}`})</h1>
        </a>
      </div>
      <div className={styles.Auto}>
        <Menu
          selectedKeys={menuSelectKeys}
          mode="horizontal"
          className={styles.Menu}
          onClick={onMenuChange}
        >
          {MenuItemsConfig.map((menuItemConfig) => (
            <Menu.Item key={menuItemConfig.key}>{menuItemConfig.name}</Menu.Item>
          ))}
        </Menu>
      </div>
      <div className={styles.Fixed}>
        <a href={packageJSON.repository.url}>
          <svg width="36" height="36" id="tanuki-logo">
            <path
              id="tanuki-right-ear"
              className="tanuki-shape"
              fill="#e24329"
              d="M2 14l9.38 9v-9l-4-12.28c-.205-.632-1.176-.632-1.38 0z"
            />
            <path
              id="tanuki-left-ear"
              className="tanuki-shape"
              fill="#e24329"
              d="M34 14l-9.38 9v-9l4-12.28c.205-.632 1.176-.632 1.38 0z"
            />
            <path
              id="tanuki-nose"
              className="tanuki-shape"
              fill="#e24329"
              d="M18,34.38 3,14 33,14 Z"
            />
            <path
              id="tanuki-right-eye"
              className="tanuki-shape"
              fill="#fc6d26"
              d="M18,34.38 11.38,14 2,14 6,25Z"
            />
            <path
              id="tanuki-left-eye"
              className="tanuki-shape"
              fill="#fc6d26"
              d="M18,34.38 24.62,14 34,14 30,25Z"
            />
            <path
              id="tanuki-right-cheek"
              className="tanuki-shape"
              fill="#fca326"
              d="M2 14L.1 20.16c-.18.565 0 1.2.5 1.56l17.42 12.66z"
            />
            <path
              id="tanuki-left-cheek"
              className="tanuki-shape"
              fill="#fca326"
              d="M34 14l1.9 6.16c.18.565 0 1.2-.5 1.56L18 34.38z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
});
