import React from 'react';

import GlobalIndicator from '../src';

import '../src/index.less';

/**
 * ShowOnBody
 * @description 在 document.body 上显示指示器（由原 test.jsx 重命名）
 */
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
