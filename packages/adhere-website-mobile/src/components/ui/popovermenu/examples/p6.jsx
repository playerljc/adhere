import { FileOutline } from 'antd-mobile-icons';
import React from 'react';

import { MobilePopoverMenu, MobileTabs } from '@baifendian/adhere';

const { SideTabs } = MobileTabs;

function Title({ children }) {
  return (
    <MobilePopoverMenu
      popoverProps={{
        placement: 'right',
      }}
      direction="horizontal"
      items={[
        {
          key: '1',
          icon: <FileOutline />,
          text: 'Menu1',
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
    </MobilePopoverMenu>
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
