import React from 'react';

import DemoBlock from '@/lib/DemoBlock';

import CheckBox from './CheckBox';
import CheckList from './CheckList';
import Selector from './Selector';

export default () => (
  <DemoBlock>
    <DemoBlock.Item title="CheckList的AutoComplete">
      <CheckList />
    </DemoBlock.Item>

    <DemoBlock.Item title="Selector的AutoComplete">
      <Selector />
    </DemoBlock.Item>

    <DemoBlock.Item title="CheckBox的AutoComplete">
      <CheckBox />
    </DemoBlock.Item>
  </DemoBlock>
);
