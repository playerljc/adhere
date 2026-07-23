import React from 'react';

import Split from '../src/index';

import '../src/index.less';

export default () => {
  return (
    <div style={{ padding: 16 }}>
      <p>段落1段落1段落1段落1段落1段落1段落1段落1</p>
      <Split direction="vertical" />
      <p>段落2段落2段落2段落2段落2段落2段落2段落2</p>
    </div>
  );
};
