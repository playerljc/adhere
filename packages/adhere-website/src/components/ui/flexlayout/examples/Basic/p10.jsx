import React from 'react';

import { FlexLayout } from '@baifendian/adhere';

import style from '../../index.less';

const { Fixed } = FlexLayout;

export default () => {
  return (
    <FlexLayout direction="horizontal" gutter={[20, 0]}>
      <Fixed span={24} className={style.col}>
        <div className={style.inner}>col</div>
      </Fixed>

      <Fixed span={12} className={style.col}>
        <div className={style.inner}>col-12</div>
      </Fixed>
      <Fixed span={12} className={style.col}>
        <div className={style.inner}>col-12</div>
      </Fixed>

      <Fixed span={8} className={style.col}>
        <div className={style.inner}>col-8</div>
      </Fixed>
      <Fixed span={8} className={style.col}>
        <div className={style.inner}>col-8</div>
      </Fixed>
      <Fixed span={8} className={style.col}>
        <div className={style.inner}>col-8</div>
      </Fixed>

      <Fixed span={6} className={style.col}>
        <div className={style.inner}>col-6</div>
      </Fixed>
      <Fixed span={6} className={style.col}>
        <div className={style.inner}>col-6</div>
      </Fixed>
      <Fixed span={6} className={style.col}>
        <div className={style.inner}>col-6</div>
      </Fixed>
      <Fixed span={6} className={style.col}>
        <div className={style.inner}>col-6</div>
      </Fixed>
    </FlexLayout>
  );
};
