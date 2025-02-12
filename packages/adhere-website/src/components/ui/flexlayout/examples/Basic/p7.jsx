import { Button } from 'antd';
import React from 'react';

import { FlexLayout } from '@baifendian/adhere';

const { ToolBarLayout } = FlexLayout;

export default () => {
  return (
    <ToolBarLayout
      topToolBarItems={[
        <Button type="primary" key="add">
          添加
        </Button>,
        <Button type="primary" key="remove">
          删除
        </Button>,
        <Button type="primary" key="update">
          修改
        </Button>,
      ]}
      bottomToolBarItems={[
        <Button type="primary" key="add">
          添加
        </Button>,
        <Button type="primary" key="remove">
          删除
        </Button>,
        <Button type="primary" key="update">
          修改
        </Button>,
      ]}
    >
      Main
    </ToolBarLayout>
  );
};
