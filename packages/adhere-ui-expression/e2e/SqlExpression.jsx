import { useDebounceFn } from 'ahooks';
import React, { useState } from 'react';

import Expression from '../src/index';
import { filterKeywords } from './data';

import '../src/index.less';

export default () => {
  const [value, setValue] = useState('');
  const [quickTipDataSource, setQuickTipDataSource] = useState([]);

  const { run: onContinuousTextChange } = useDebounceFn(
    (text) => {
      setQuickTipDataSource(filterKeywords(text));
    },
    { wait: 150 },
  );

  return (
    <div style={{ padding: 24, maxWidth: 720 }}>
      <Expression
        placeholder="SQL 表达式"
        operators={Expression.SqlOptions}
        allowClear
        value={value}
        onChange={setValue}
        onContinuousTextChange={onContinuousTextChange}
        quickTipDataSource={quickTipDataSource}
      />
    </div>
  );
};
