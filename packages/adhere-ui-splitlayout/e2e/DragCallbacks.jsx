import { FlexLayout } from '@baifendian/adhere';
import React, { useState } from 'react';

import SplitLayout from '../src/index';

import 'antd/dist/reset.css';

import '../src/index.less';
import './index.less';

const { Fixed, Auto } = FlexLayout;

export default () => {
  const [logs, setLogs] = useState([]);

  const pushLog = (name, params) => {
    setLogs((prev) =>
      [`${name}: delta=${params?.delta ?? '-'}, targetSize=${params?.targetSize ?? '-'}`, ...prev].slice(
        0,
        10,
      ),
    );
  };

  return (
    <div style={{ padding: 16 }}>
      <FlexLayout direction="horizontal" style={{ height: 240, border: '1px solid #ccc' }}>
        <Fixed style={{ width: 160, background: '#e6f4ff' }}>Fixed</Fixed>
        <SplitLayout
          minSize={80}
          maxSize="70%"
          onCanDrag={(p) => pushLog('onCanDrag', p)}
          onDragStarted={(p) => pushLog('onDragStarted', p)}
          onChange={(p) => pushLog('onChange', p)}
          onDragFinished={(p) => pushLog('onDragFinished', p)}
          onOut={(p) => pushLog('onOut', p)}
        />
        <Auto style={{ background: '#f6ffed' }}>Auto — drag the splitter</Auto>
      </FlexLayout>
      <pre style={{ marginTop: 12, padding: 12, background: '#f5f5f5', minHeight: 160 }}>
        {logs.length ? logs.join('\n') : 'drag callback logs...'}
      </pre>
    </div>
  );
};
