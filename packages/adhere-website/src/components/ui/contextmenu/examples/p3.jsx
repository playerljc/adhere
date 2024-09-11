import { Radio } from 'antd';
import React from 'react';

import { ContextMenu } from '@baifendian/adhere';

import { contextMenuData } from '../MenuData';

export default () => {
  return (
    <Radio.Group
      value="large"
      onChange={(e) => {
        e.preventDefault();

        ContextMenu.open([].concat(contextMenuData), {
          width: 200,
          x: e.nativeEvent.clientX,
          y: e.nativeEvent.clientY,
          maskClosable: true,
          handler: (id, attribute) => {
            // folder 添加目录
            // addpageabove 向上添加页面
            // addpagebelow 向下添加页面
            // subpage 添加子页面
            // delete 删除
            // rename 重命名
            alert(`${id},${attribute}`);
          },
        });
      }}
    >
      <Radio.Button value="file">File</Radio.Button>
      <Radio.Button value="edit">Edit</Radio.Button>
      <Radio.Button value="view">View</Radio.Button>
    </Radio.Group>
  );
};
