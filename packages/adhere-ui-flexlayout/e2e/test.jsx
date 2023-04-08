import React from 'react';

import FlexLayout from '../src/index';

import '../src/index.less';

const { Fixed, Auto } = FlexLayout;

export default () => (
  <FlexLayout style={{ border: '1px solid #ccc' }} gutter={20} direction="horizontal">
    <Fixed span={12}>Fixed</Fixed>
    <Fixed span={12}>Fixed</Fixed>
    <Fixed span={8}>Fixed</Fixed>
    <Fixed span={8}>Fixed</Fixed>
    <Fixed span={8}>Fixed</Fixed>
    <Fixed span={6}>Fixed</Fixed>
    <Fixed span={6}>Fixed</Fixed>
    <Fixed span={6}>Fixed</Fixed>
    <Auto>Auto</Auto>
  </FlexLayout>
);
