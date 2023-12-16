import debounce from 'lodash.debounce';
import React, { useState } from 'react';

import { Expression } from '@baifendian/adhere';
import Sql from '@baifendian/adhere-ui-expression/es/operators/Sql';

export default () => {
  const [quickTipDataSource, setQuickTipDataSource] = useState([]);

  const onContinuousTextChange = debounce((text) => {
    const kws = ['java', 'c++', 'javascript', 'react', 'vue', 'spring'];

    if (!text) {
      setQuickTipDataSource([]);
    } else {
      setQuickTipDataSource(
        kws
          .filter((kw) => kw.includes(text))
          .map((t) => ({
            label: t,
            value: t,
          })),
      );
    }
  }, 150);
  return (
    <div>
      <Expression
        placeholder="请输入表达式"
        operators={Sql}
        allowClear
        onContinuousTextChange={onContinuousTextChange}
        quickTipDataSource={quickTipDataSource}
      />
    </div>
  );
};
