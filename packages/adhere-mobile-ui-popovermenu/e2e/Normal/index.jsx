import { Button } from 'antd-mobile';
import { FileOutline } from 'antd-mobile-icons';
import React from 'react';

import PopoverMenu from '../../src';

import '../../src/index.less';

export default () => {
  return (
    <PopoverMenu
      direction="horizontal"
      maxCount={2}
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
      <Button>Trigger</Button>
    </PopoverMenu>
  );
};

/*import { Button, Popover } from 'antd-mobile';
import React from 'react';

export default () => {
  return (
    <Popover content="Hello World" trigger="click" placement="right">
      <Button>点我</Button>
    </Popover>
  );
};*/
