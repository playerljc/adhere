import { useUpdate } from 'ahooks';
import { FileOutline } from 'antd-mobile-icons';
// import { reduceMotion } from 'antd-mobile/es/utils/reduce-and-restore-motion';
import React, { useEffect } from 'react';

import { MobileTabs } from '@baifendian/adhere';

import PopoverMenu from '../../src';

import '../../src/index.less';

const { Tabs } = MobileTabs;

function Title({ children }) {
  const update = useUpdate();

  return (
    <PopoverMenu
      popoverProps={{
        onVisibleChange: (visible) => {
          setTimeout(() => {
            update();
          }, 300);
        },
      }}
      direction="horizontal"
      // maxCount={2}
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
  // useEffect(() => {
  //   reduceMotion();
  // }, []);

  return (
    <Tabs defaultActiveKey="1">
      <Tabs.Tab
        title={
          <Title>
            <span>Espresso</span>
          </Title>
        }
        key="1"
      >
        1
      </Tabs.Tab>
      <Tabs.Tab
        title={
          <Title>
            <span>Coffee Latte</span>
          </Title>
        }
        key="2"
      >
        2
      </Tabs.Tab>
      <Tabs.Tab
        title={
          <Title>
            <span>Cappuccino</span>
          </Title>
        }
        key="3"
      >
        3
      </Tabs.Tab>
      <Tabs.Tab
        title={
          <Title>
            <span>Americano</span>
          </Title>
        }
        key="4"
      >
        4
      </Tabs.Tab>
      <Tabs.Tab
        title={
          <Title>
            <span>Flat White</span>
          </Title>
        }
        key="5"
      >
        5
      </Tabs.Tab>
      <Tabs.Tab
        title={
          <Title>
            <span>Caramel Macchiato</span>
          </Title>
        }
        key="6"
      >
        6
      </Tabs.Tab>
      <Tabs.Tab
        title={
          <Title>
            <span>Cafe Mocha</span>
          </Title>
        }
        key="7"
      >
        7
      </Tabs.Tab>
    </Tabs>
  );
};
