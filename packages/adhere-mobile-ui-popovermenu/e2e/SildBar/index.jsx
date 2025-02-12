import { FileOutline } from 'antd-mobile-icons';
import React from 'react';

import { MobileTabs } from '@baifendian/adhere';

import PopoverMenu from '../../src';

import '../../src/index.less';

const { SideTabs } = MobileTabs;

function Title({ children }) {
  return (
    <PopoverMenu
      popoverProps={{
        placement: 'right',
      }}
      direction="horizontal"
      items={[
        {
          key: '1',
          icon: <FileOutline />,
          text: 'Menu1',
          // disabled: true,
          onClick: () =>
            new Promise((resolve) => {
              alert(1);
              resolve();
            }),
          isLeaf: true,
        },
        {
          key: '2',
          icon: <FileOutline />,
          text: 'Menu2',
          isLeaf: true,
        },
        {
          key: '3',
          icon: <FileOutline />,
          text: 'Menu3',
          isLeaf: false,
          // disabled: true,
          items: [
            {
              key: '3.1',
              icon: <FileOutline />,
              text: 'Menu3.1',
              isLeaf: true,
              onClick: () =>
                new Promise((resolve) => {
                  alert(1);
                  resolve();
                }),
            },
            {
              key: '3.2',
              icon: <FileOutline />,
              text: 'Menu3.2',
              isLeaf: true,
              onClick: () =>
                new Promise((resolve) => {
                  alert(1);
                  resolve();
                }),
            },
            {
              key: '3.3',
              icon: <FileOutline />,
              text: 'Menu3.3',
              isLeaf: true,
            },
          ],
        },
      ]}
    >
      {children}
    </PopoverMenu>
  );
}

export default () => {
  return (
    <SideTabs
      activeKey="1"
      items={Array.from({ length: 6 })
        .fill(0)
        .map((item, _index) => ({
          key: `${_index + 1}`,
          title: (
            <Title>
              <span>选项卡{_index + 1}</span>
            </Title>
          ),
          children: <div>{_index + 1}</div>,
        }))}
    />
  );
};
