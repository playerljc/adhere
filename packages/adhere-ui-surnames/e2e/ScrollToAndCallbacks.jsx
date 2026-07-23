import { Button, Space } from 'antd';
import React, { useRef, useState } from 'react';

import Surnames from '../src/index';

import '../src/index.less';
import './index.less';
import { getDataSource, getIndexesProps } from './mockData';

export default () => {
  const ref = useRef();
  const [logs, setLogs] = useState([]);

  const pushLog = (text) => {
    setLogs((prev) => [text, ...prev].slice(0, 8));
  };

  return (
    <div style={{ padding: 16 }}>
      <Space wrap style={{ marginBottom: 12 }}>
        <Button type="primary" onClick={() => ref.current?.scrollTo('Z')}>
          scrollTo Z
        </Button>
        <Button onClick={() => ref.current?.scrollTo('A')}>scrollTo A</Button>
        <Button onClick={() => ref.current?.scrollTo('G')}>scrollTo G</Button>
      </Space>

      <div className="Wrapper" style={{ marginBottom: 12 }}>
        <Surnames
          ref={ref}
          style={{ border: '1px solid #ccc', height: '100%' }}
          indexes={getIndexesProps()}
          dataSource={getDataSource()}
          onBeforeScroll={(name) => {
            pushLog(`onBeforeScroll: ${name}`);
          }}
          onScroll={(name) => {
            pushLog(`onScroll: ${name}`);
          }}
        />
      </div>

      <pre style={{ padding: 12, background: '#f5f5f5', minHeight: 120 }}>
        {logs.length ? logs.join('\n') : 'callback logs...'}
      </pre>
    </div>
  );
};
