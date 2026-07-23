import React from 'react';

import CurrencySymbol from '../src';

import '../src/index.less';

export default () => {
  return (
    <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div>
        动画：
        <CurrencySymbol
          amount={19999}
          isUseAnimation
          countUpProps={{
            delay: 0.2,
            duration: 1.5,
          }}
        />
      </div>
      <div>
        danger + large：
        <CurrencySymbol amount={19999} danger symbolSize="large" />
      </div>
      <div>
        不加粗 / 无千分位：
        <CurrencySymbol amount={19999} bold={false} isUseKilo={false} />
      </div>
    </div>
  );
};
