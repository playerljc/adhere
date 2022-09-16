import React from 'react';

import { FieldTimeOutlined, GithubOutlined } from '@ant-design/icons';
import { Link } from '@ctsj/router';

import PackageJSON from '../../../../../package.json';

import styles from './index.less';

export default () => {
  return (
    <ul className={styles.Wrap}>
      <li className={styles.Item}>
        <dl>
          <dt>相关资源</dt>
          <dd>
            <ul className={styles.ItemList}>
              <li className={styles.ItemListItem}>
                自主研发
                <ul>
                  <li>
                    <a href="http://49.232.163.126:8084/" target="_blank" rel="noopener noreferrer">
                      adherev
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/playerljc/CTSJ-BUILD"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      CTSJ-BUILD
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/playerljc/CTSJ-BUILDV"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      CTSJ-BUILDV
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/playerljc/CTSJ-STATE"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      CTSJ-STATE
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/playerljc/CTSJ-ROUTER"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      CTSJ-ROUTER
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/playerljc/CTSJ-VuexGenerator"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      CTSJ-VuexGenerator
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/playerljc/CTSJ-React-SSR"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      CTSJ-React-SSR
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/playerljc/CTSJ-DOC"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      CTSJ-DOC
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/playerljc/CTSJ-DvaGenerator"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      CTSJ-DvaGenerator
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/playerljc/WebViewJavascriptBridge"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      WebViewJavascriptBridge
                    </a>
                  </li>
                </ul>
              </li>
              <li className={styles.ItemListItem}>
                模板工程
                <ul>
                  <li>
                    <a
                      href="https://gitee.com/playerljc/ReactPro/tree/adhere"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ReactPro(G1)
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://gitee.com/playerljc/ReactPro/tree/polyfill"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ReactPro(G1)(支持IE)
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://gitee.com/playerljc/ReactPro/tree/adhere-webpack5-js-ssr"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ReactPro(G1)(SSR)
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://gitee.com/playerljc/AntPro"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      AntPro(G1)
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://git.baifendian.com/dongxu.guo/ReactWeb"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ReactWeb(G3)
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://git.baifendian.com/bo.li/Percent_Vue_Admin.git"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      PercentVue(G3)
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://gitee.com/playerljc/VuePro"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      VuePro(G1)
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </dd>
        </dl>
      </li>
      <li className={styles.Item}>
        <dl>
          <dt>帮助</dt>
          <dd>
            <ul className={styles.ItemList}>
              <li className={styles.ItemListItem}>
                <a href={PackageJSON.repository.url} target="_blank" rel="noopener noreferrer">
                  <GithubOutlined />
                  <span className={styles.ItemListItemText}>Gitlib</span>
                </a>
              </li>
              <li className={styles.ItemListItem}>
                <Link to="/adhere/changelog">
                  <FieldTimeOutlined />
                  <span className={styles.ItemListItemText}>更新日志</span>
                </Link>
              </li>
            </ul>
          </dd>
        </dl>
      </li>
    </ul>
  );
};
