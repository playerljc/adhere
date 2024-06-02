import { useUpdate } from 'ahooks';
import { FileOutline } from 'antd-mobile-icons';
import React from 'react';

import { MobilePopoverMenu, MobileTabs } from '@baifendian/adhere';

const { Tabs } = MobileTabs;

function Title({ children }) {
  const update = useUpdate();

  return (
    <MobilePopoverMenu
      popoverProps={{
        onVisibleChange: (visible) => {
          setTimeout(() => {
            update();
          }, 300);
        },
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
