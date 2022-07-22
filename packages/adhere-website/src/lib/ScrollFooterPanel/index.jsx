import React from 'react';

import Footer from '@/lib/Footer';

import styles from './index.less';

export default (props) => {
  return (
    <div className={styles.Wrap}>
      <div className={styles.Body}>{props.children}</div>
      <Footer />
    </div>
  );
};
