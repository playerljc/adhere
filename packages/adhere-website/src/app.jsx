import React from 'react';
import classNames from 'classnames';

import leanJSON from '../../../lerna.json';
import packageJSON from '../../../package.json';
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
          <div className={classNames(styles.Fixed)}>
            <a href={`${window.location.origin}`}>
              <h2>adhere({`v${leanJSON.version}`})</h2>
            </a>
          </div>
          <div className={styles.Auto}>
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
        <div className={styles.Auto}>{children}</div>
      </div>
    );
  }
}

export default App;
