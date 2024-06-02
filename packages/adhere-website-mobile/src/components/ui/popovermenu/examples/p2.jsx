import { Button } from 'antd-mobile';
import { FileOutline } from 'antd-mobile-icons';
import React from 'react';

import { MobilePopoverMenu } from '@baifendian/adhere';

export default () => {
  return (
    <MobilePopoverMenu
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
      <Button>点击我</Button>
    </MobilePopoverMenu>
  );
};
