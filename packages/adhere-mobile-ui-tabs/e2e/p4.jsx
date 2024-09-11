import React from 'react';

import MobileTabs from '../src';

import '../src/index.less';

const { JumboTabs } = MobileTabs;

export default () => (
  <JumboTabs
    defaultActiveKey="1"
    items={[
      {
        key: '1',
        title: 'Espresso',
        description: '描述文案',
        children: <div>1</div>,
      },
      {
        key: '2',
        title: 'Coffee Latte',
        description: '描述文案',
        children: <div>2</div>,
      },
      {
        key: '3',
        title: 'Cappuccino',
        description: '描述文案',
        children: <div>3</div>,
      },
      {
        key: '4',
        title: 'Americano',
        description: '描述文案',
        children: <div>4</div>,
      },
      {
        key: '5',
        title: 'Flat White',
        description: '描述文案',
        children: <div>5</div>,
      },
      {
        key: '6',
        title: 'Caramel Macchiato',
        description: '描述文案',
        children: <div>6</div>,
      },
      {
        key: '7',
        title: 'Cafe Mocha',
        description: '描述文案',
        children: <div>7</div>,
      },
    ]}
  />
);
