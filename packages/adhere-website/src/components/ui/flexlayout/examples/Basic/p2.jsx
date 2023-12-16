import React from 'react';

import { FlexLayout, Space } from '@baifendian/adhere';

const { Fixed, Auto } = FlexLayout;

export default () => {
  return (
    <>
      <FlexLayout style={{ height: 500, border: '1px solid #ccc' }}>
        <Fixed>fixed1</Fixed>
        <Fixed>fixed2</Fixed>
        <Auto>auto1</Auto>
        <Fixed>fixed3</Fixed>
        <Auto>auto2</Auto>
        <Fixed>fixed4</Fixed>
      </FlexLayout>

      <Space direction="vertical" />

      <FlexLayout direction="horizontal" style={{ height: 200, border: '1px solid #ccc' }}>
        <Fixed>fixed1</Fixed>
        <Fixed>fixed2</Fixed>
        <Auto>auto1</Auto>
        <Fixed>fixed3</Fixed>
        <Auto>auto2</Auto>
        <Fixed>fixed4</Fixed>
      </FlexLayout>
    </>
  );
};
