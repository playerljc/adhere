import React from 'react';

import GlobalIndicator from '../src';

import '../src/index.less';

export default () => {
  return (
    <div>
      <button
        onClick={() => {
          GlobalIndicator.show(document.body, '', undefined, 'default');
        }}
      >
        打开
      </button>
    </div>
  );
};
