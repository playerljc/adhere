import React from 'react';

import { FlexLayout, Space } from '@baifendian/adhere';

import styles from './base.less';

const { Fixed, Auto } = FlexLayout;

export default () => {
  return (
    <>
      <FlexLayout className={styles.Wrapper2} style={{ border: '1px solid #ccc' }}>
        <Fixed>fixed1</Fixed>
        <Fixed>fixed2</Fixed>
        <Auto>auto1</Auto>
        <Fixed>fixed3</Fixed>
        <Auto>auto2</Auto>
        <Fixed>fixed4</Fixed>
      </FlexLayout>

      <Space direction="vertical" />

      <FlexLayout
        direction="horizontal"
        className={styles.Wrapper}
        style={{ border: '1px solid #ccc' }}
      >
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
