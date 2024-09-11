import { Button } from 'antd';
import React from 'react';

import { ContextMenu } from '@baifendian/adhere';

import { contextMenuData } from '../MenuData';

export default () => {
  return (
    <Button
      type="primary"
      onClick={(e) => {
        ContextMenu.open([].concat(contextMenuData), {
          width: 200,
          x: e.clientX,
          y: e.clientY,
          maskClosable: true,
          handler: (id, attribute) => {
            // folder 添加目录
            // addpageabove 向上添加页面
            // addpagebelow 向下添加页面
            // subpage 添加子页面
            // delete 删除
            // rename 重命名
          },
        });
      }}
    >
      点击弹出
    </Button>
  );
};
