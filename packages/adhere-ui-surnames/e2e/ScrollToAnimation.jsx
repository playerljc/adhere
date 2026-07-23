import { Button, Space } from 'antd';
import React, { useRef } from 'react';

import Surnames from '../src/index';

import '../src/index.less';
import './index.less';
import { getDataSource, getIndexesProps } from './mockData';

export default () => {
  const ref = useRef();

  return (
    <div style={{ padding: 16 }}>
      <Space wrap style={{ marginBottom: 12 }}>
        <Button type="primary" onClick={() => ref.current?.scrollToAnimation('Z')}>
          滚动到底部 (动画)
        </Button>
        <Button onClick={() => ref.current?.scrollToAnimation('A')}>滚动到顶部 (动画)</Button>
        <Button type="primary" onClick={() => ref.current?.scrollToAnimation('M')}>
          滚动到 M (动画)
        </Button>
      </Space>

      <div className="Wrapper">
        <Surnames
          ref={ref}
          style={{ border: '1px solid #ccc', height: '100%' }}
          indexes={getIndexesProps()}
          dataSource={getDataSource()}
        />
      </div>
    </div>
  );
};
