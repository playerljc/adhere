import { Button, message } from 'antd';
import React, { useMemo } from 'react';

import Hooks from '../src';

const { useHistoryBack } = Hooks;

/**
 * useHistoryBack
 * @description 智能返回（mock history）
 */
export default () => {
  const history = useMemo(
    () => ({
      push: (path) => message.info(`history.push(${path})`),
      replace: (path) => message.info(`history.replace(${path})`),
      goBack: () => message.info('history.goBack()'),
    }),
    [],
  );

  const { back } = useHistoryBack(history, '/current', '/fallback');

  return (
    <div style={{ padding: 24 }}>
      <Button type="primary" onClick={() => back()}>
        back
      </Button>
    </div>
  );
};
