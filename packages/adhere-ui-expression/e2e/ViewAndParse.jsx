import { Button } from 'antd';
import React, { useRef, useState } from 'react';

import Expression from '../src/index';

import '../src/index.less';

export default () => {
  const ref = useRef();
  const [value, setValue] = useState('');
  const [parsed, setParsed] = useState('');

  return (
    <div style={{ padding: 24, maxWidth: 720 }}>
      <div style={{ marginBottom: 12, display: 'flex', gap: 8 }}>
        <Button
          type="primary"
          onClick={() => {
            const html = ref.current?.getValue?.() ?? '';
            setValue(html);
            setParsed(
              Expression.parse(html, ({ nodeType, value: nodeValue }) => {
                if (nodeType === 1) {
                  return `[${nodeValue}]`;
                }
                return nodeValue ?? '';
              }),
            );
          }}
        >
          解析
        </Button>
        <Button
          onClick={() => {
            ref.current?.setValue?.(
              '<span class="text">name</span><span class="operator" contenteditable="false">AND</span><span class="text">age</span>',
            );
          }}
        >
          写入示例 HTML
        </Button>
      </div>

      <Expression
        ref={ref}
        allowClear
        disableQuickTip
        placeholder="输入后点击解析"
        value={value}
        onChange={setValue}
        onContinuousTextChange={() => {}}
      />

      <div style={{ marginTop: 16 }}>
        View：
        <Expression.View value={value} />
      </div>

      <div style={{ marginTop: 12, fontFamily: 'monospace' }}>parse: {parsed || '-'}</div>
    </div>
  );
};
