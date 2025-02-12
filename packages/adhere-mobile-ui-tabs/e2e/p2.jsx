import React from 'react';

import MobileTabs from '../src';

import '../src/index.less';

const { CapsuleTabs } = MobileTabs;

export default () => (
  <CapsuleTabs
    defaultActiveKey="1"
    items={[
      {
        key: '1',
        title: 'Espresso',
        children: <div>1</div>,
      },
      {
        key: '2',
        title: 'Coffee Latte',
        children: <div>2</div>,
      },
      {
        key: '3',
        title: 'Cappuccino',
        children: <div>3</div>,
      },
      {
        key: '4',
        title: 'Americano',
        children: <div>4</div>,
      },
      {
        key: '5',
        title: 'Flat White',
        children: <div>5</div>,
      },
      {
        key: '6',
        title: 'Caramel Macchiato',
        children: <div>6</div>,
      },
      {
        key: '7',
        title: 'Cafe Mocha',
        children: <div>7</div>,
      },
    ]}
  />
);
