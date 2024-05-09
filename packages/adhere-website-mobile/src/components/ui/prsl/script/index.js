const fs = require('fs');
const path = require('path');

function code(name, des) {
  return `
import React from 'react';

import DemoBlock from '@/lib/DemoBlock';

import Normal from './examples/${name}';

export default () => (
  <DemoBlock style={{ height: '100%' }}>
    <DemoBlock.Item title="${des}" style={{ height: '100%', overflow: 'hidden' }}>
      <Normal />
    </DemoBlock.Item>
  </DemoBlock>
);

  `;
}

const config = [
  {
    name: 'ActionSheet.jsx',
    des: '使用ActionSheet进行操作',
  },
  {
    name: 'API.jsx',
    des: 'API方式使用',
  },
  {
    name: 'CustomSearchItem.jsx',
    des: '自定义查询项',
  },
  {
    name: 'CustomToolbarItem.jsx',
    des: '自定义工具栏项',
  },
  {
    name: 'DND.jsx',
    des: '排序模式',
  },
  {
    name: 'Extra.jsx',
    des: '扩展',
  },
  {
    name: 'GridView.jsx',
    des: '多列',
  },
  {
    name: 'List.jsx',
    des: '列表',
  },
  {
    name: 'Local.jsx',
    des: '本地数据',
  },
  {
    name: 'NoPaging.jsx',
    des: '无分页',
  },
  {
    name: 'Normal.jsx',
    des: '基本使用',
  },
  {
    name: 'Remote.jsx',
    des: '远程数据',
  },
  {
    name: 'SearchHistory.jsx',
    des: '查询历史',
  },
  {
    name: 'Selection.jsx',
    des: '选择模式',
  },
  {
    name: 'SwiperAction.jsx',
    des: '',
  },
];

const contextPath = path.join(__dirname, '../');

config.forEach((c) => {
  fs.writeFileSync(path.join(contextPath, c.name), code(c.name, c.des));

  const dirName = c.name.substring(0, c.name.lastIndexOf('.'));

  try {
    fs.mkdirSync(path.join(contextPath, 'examples', dirName));
  } catch (e) {}
  fs.writeFileSync(path.join(contextPath, 'examples', dirName, 'index.jsx'), '');
});
