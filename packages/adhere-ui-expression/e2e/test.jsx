import debounce from 'lodash.debounce';
import React, { useRef, useState } from 'react';

import Expression from '../src/index';

import '../src/index.less';
import './index.less';

export default () => {
  const ref = useRef();
  const [value, setValue] = useState('');

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
    <div className="wrap" style={{ marginLeft: 200 }}>
      <div>
        <button
          onClick={() => {
            setValue(ref.current.getValue());
          }}
        >
          获取
        </button>
      </div>

      <div>
        <Expression.View value={value} />
      </div>

      <Expression
        ref={ref}
        allowClear
        placeholder="请输入表达式"
        operatorClassName={() => 'blob'}
        textClassName={() => 'blob'}
        onContinuousTextChange={onContinuousTextChange}
        quickTipDataSource={quickTipDataSource}
      />
    </div>
  );
};
