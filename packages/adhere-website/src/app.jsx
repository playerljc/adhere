import NProgress from 'nprogress';
import React from 'react';

import { SearchTable } from '@baifendian/adhere';

import Header from '@/lib/Header';
import RouterListen from '@/lib/Router/listen';

import styles from './app.less';

const { SearchAndPaginParams } = SearchTable;

/**
 * App
 * @class App
 * @classdesc App
 */
class App extends React.PureComponent {
  constructor(props) {
    super(props);

    NProgress.inc();
  }

  componentDidMount() {
    debugger;
    // searchTable注册页面变化事件
    RouterListen.on(SearchAndPaginParams.RouterListen);

    // 路由发布订阅初始化
    RouterListen.init(this);

    NProgress.done();
  }

  componentWillUnmount() {
    RouterListen.destroy();
  }

  getSnapshotBeforeUpdate() {
    NProgress.inc();
  }

  componentDidUpdate() {
    NProgress.done();
  }

  render() {
    const { children } = this.props;

    return (
      <div className={styles.App}>
        <div className={styles.Fixed}>
          <Header />
        </div>
        <div className={styles.Auto}>{children}</div>
      </div>
    );
  }
}

export default App;
