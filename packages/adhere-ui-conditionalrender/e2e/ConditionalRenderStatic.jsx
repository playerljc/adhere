import { Button, Space } from 'antd';
import React, { useState } from 'react';

import ConditionalRender from '../src/index';

export default () => {
  const [ok, setOk] = useState(true);

  const text = ConditionalRender.conditionalRender({
    conditional: ok,
    match: 'match 文本',
    noMatch: 'noMatch 文本',
  });

  const elements = [
    <ConditionalRender key="a" conditional>
      <span>A (true)</span>
    </ConditionalRender>,
    <ConditionalRender key="b" conditional={false}>
      <span>B (false, 无 noMatch)</span>
    </ConditionalRender>,
    <ConditionalRender key="c" conditional={false} noMatch={<span>C noMatch</span>}>
      <span>C (false, 有 noMatch)</span>
    </ConditionalRender>,
    <div key="d">D 普通节点</div>,
  ];

  const filtered = ConditionalRender.conditionalArr(elements);
  const notEmpty = ConditionalRender.conditionalNotEmptyArr([1, null, 2, undefined, 3]);

  return (
    <div style={{ padding: 16 }}>
      <Space style={{ marginBottom: 16 }}>
        <Button type="primary" onClick={() => setOk((v) => !v)}>
          切换 conditionalRender
        </Button>
      </Space>
      <div style={{ marginBottom: 12 }}>
        <strong>conditionalRender:</strong> {text}
      </div>
      <div style={{ marginBottom: 12 }}>
        <strong>conditionalArr:</strong>
        <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>{filtered}</div>
      </div>
      <div>
        <strong>conditionalNotEmptyArr:</strong> {JSON.stringify(notEmpty)}
      </div>
    </div>
  );
};
