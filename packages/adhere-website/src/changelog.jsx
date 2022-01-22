import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import changeLog from '../../adhere/changelog/CHANGELOG.md';

import styles from './changelog.less';

export default () => {
  return (
    <div className={styles.Wrap}>
      <ReactMarkdown children={changeLog} remarkPlugins={[remarkGfm]} />
    </div>
  );
};
