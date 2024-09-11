import React from 'react';

import CurrencySymbol from '../src';

import '../src/index.less';

export default () => {
  return (
    <CurrencySymbol
      amount={19999}
      danger
      symbolSize="large"
      align="bottom"
      // isUseAnimation
      // code={CurrencySymbol.currencies.HKD}
    />
  );
};
