import React, { FC } from 'react';
import Resource from '@baifendian/adhere-util-resource';

import { SpinProps } from './types';

const selectorPrefix = 'adhere-ui-spin';

const Spin: FC<SpinProps> = (props) => {
  const {
    spinning = false,
    text = '',
    zIndex = Resource.Dict.value.ResourceNormalMaxZIndex.value,
  } = props;

  return spinning ? (
    <div className={selectorPrefix} style={{ zIndex: zIndex }}>
      <span className={`${selectorPrefix}-dot`}>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
      </span>
      <div className={`${selectorPrefix}-text`}>{text}</div>
    </div>
  ) : null;
};

export default Spin;
