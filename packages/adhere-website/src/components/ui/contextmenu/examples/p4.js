import { Button } from 'antd';
import React from 'react';

import { ContextMenu } from '@baifendian/adhere';

import cancelIcon from './images/cancel.svg';
import collapseIcon from './images/collapse.svg';
import entityIcon from './images/entity.svg';
import expandAllIcon from './images/expandAll.svg';
import expandOneIcon from './images/expandOne.svg';
import expandSameIcon from './images/expandSame.svg';
import hideIcon from './images/hide.svg';
import intoIcon from './images/into.svg';

export default () => {
  return (
    <Button
      type="primary"
      onClick={(e) => {
        ContextMenu.openCircular(
          {
            horizontal: false,
            background: '#7f92b8',
            backgroundHover: '#1a5eea',
            menus: [
              {
                title: '展开',
                id: 'articleExpandChildren',
                icon: cancelIcon,
                click: () => {},
              },
              {
                title: '收起',
                id: 'articleCollapseChildren',
                icon: collapseIcon,
                click: () => {},
              },
              {
                title: '下钻',
                id: 'drillDown',
                icon: intoIcon,
                click: () => {},
              },
              {
                title: '全部扩展',
                id: 'expandAll',
                icon: entityIcon,
                click: () => {},
              },
              {
                title: '实体扩展',
                id: 'entityExpand',
                icon: entityIcon,
                click: () => {},
              },
              {
                title: '同类型实体扩展',
                id: 'entityExpandByType',
                icon: expandSameIcon,
                menus: Array.from({ length: 6 }).map((t, _index) => ({
                  title: `menuitem${_index + 1}`,
                  icon: expandAllIcon,
                  id: _index + 1,
                  click: () => {},
                })),
              },
              {
                title: '文章扩展',
                id: 'articleExpand',
                icon: expandOneIcon,
                click: () => {},
              },
              {
                title: '取消扩展',
                id: 'cancelExpand',
                icon: cancelIcon,
                click: () => {},
              },
              {
                title: '隐藏实体',
                id: 'hideEntity',
                icon: hideIcon,
                click: () => {},
              },
            ],
          },
          {
            x: e.clientX,
            y: e.clientY,
          },
        );
      }}
    >
      点击弹出
    </Button>
  );
};
