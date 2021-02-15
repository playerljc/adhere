import React from 'react';

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
          <div className={styles.Fixed}>
            <h2>adhere</h2>
          </div>
          <div className={styles.Auto} />
        </div>
        <div className={styles.Auto}>{children}</div>
      </div>
    );
  }
}

export default App;
