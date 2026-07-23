import { Button } from 'antd';
import React from 'react';

import FlexLayout from '../src/index';

import '../src/index.less';
import './index.less';

export default () => {
  return (
    <div className="wrap">
      <FlexLayout.ToolBarLayout
        style={{ height: '100%', border: '1px solid #d9d9d9' }}
        topToolBarItems={[
          <Button key="add" type="primary">
            新增
          </Button>,
          <Button key="export">导出</Button>,
        ]}
        bottomToolBarItems={[
          <Button key="save" type="primary">
            保存
          </Button>,
          <Button key="cancel">取消</Button>,
        ]}
      >
        <div className="panel">Main Content</div>
      </FlexLayout.ToolBarLayout>
    </div>
  );
};
