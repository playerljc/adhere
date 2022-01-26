import React from 'react';

import Header from '@/lib/Header';

import styles from './app.less';

/**
 * App
 * @class App
 * @classdesc App
 */
class App extends React.PureComponent {
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
