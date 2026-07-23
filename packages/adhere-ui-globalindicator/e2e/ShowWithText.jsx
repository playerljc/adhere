import { Button } from 'antd';
import React from 'react';

import GlobalIndicator from '../src';

import '../src/index.less';

/**
 * ShowWithText
 * @description 带文案的全局遮罩，2 秒后自动 hide
 */
export default () => {
  return (
    <Button
      type="primary"
      onClick={() => {
        const el = GlobalIndicator.show(document.body, '全局的遮罩');

        setTimeout(() => {
          GlobalIndicator.hide(el);
        }, 2000);
      }}
    >
      显示遮罩
    </Button>
  );
};
