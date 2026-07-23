import { Button } from 'antd';
import { useDebounceFn } from 'ahooks';
import React, { useRef, useState } from 'react';

import Expression from '../src/index';
import { filterKeywords } from './data';

import '../src/index.less';

export default () => {
  const ref = useRef();
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
      <div style={{ marginBottom: 12, display: 'flex', gap: 8 }}>
        <Button
          type="primary"
          onClick={() => {
            setValue(ref.current?.getValue?.() ?? '');
          }}
        >
          获取值
        </Button>
        <Button
          onClick={() => {
            ref.current?.clear?.();
            setValue('');
          }}
        >
          清空
        </Button>
      </div>

      <div style={{ marginBottom: 12 }}>
        View：
        <Expression.View value={value} />
      </div>

      <Expression
        ref={ref}
        allowClear
        placeholder="请输入表达式（空格弹出运算符）"
        value={value}
        onChange={setValue}
        onContinuousTextChange={onContinuousTextChange}
        quickTipDataSource={quickTipDataSource}
      />
    </div>
  );
};
