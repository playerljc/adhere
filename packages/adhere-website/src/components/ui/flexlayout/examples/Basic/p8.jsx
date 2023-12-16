import { Button } from 'antd';
import React from 'react';

import { FlexLayout } from '@baifendian/adhere';

const { BackLayout } = FlexLayout;

export default (props) => {
  return (
    <BackLayout
      topToolBarItems={[<Button key="add">新增</Button>]}
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
      history={props.history}
      backTitle="返回"
    >
      Main
    </BackLayout>
  );
};
