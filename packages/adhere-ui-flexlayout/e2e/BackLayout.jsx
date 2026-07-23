import { Button, message } from 'antd';
import React, { useMemo } from 'react';

import FlexLayout from '../src/index';

import '../src/index.less';
import './index.less';

export default () => {
  const history = useMemo(
    () => ({
      push: (path) => message.info(`history.push(${path})`),
      replace: (path) => message.info(`history.replace(${path})`),
      goBack: () => message.info('history.goBack()'),
    }),
    [],
  );

  return (
    <div className="wrap">
      <FlexLayout.BackLayout
        style={{ height: '100%', border: '1px solid #d9d9d9' }}
        history={history}
        backPath="/"
        backTitle="返回"
        topToolBarItems={[
          <Button key="add" type="primary">
            新增
          </Button>,
        ]}
        bottomToolBarItems={[
          <Button key="ok" type="primary">
            确定
          </Button>,
        ]}
      >
        <div className="panel">BackLayout Main</div>
      </FlexLayout.BackLayout>
    </div>
  );
};
