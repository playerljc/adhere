import React from 'react';

import Surnames from '../src/index';

import '../src/index.less';
import './index.less';
import { getDataSource, getIndexesProps } from './mockData';

export default () => {
  const indexes = getIndexesProps();
  const dataSource = getDataSource();

  return (
    <div style={{ display: 'flex', gap: 24, padding: 16 }}>
      <div>
        <div style={{ marginBottom: 8 }}>position=right (default)</div>
        <div className="Wrapper">
          <Surnames
            style={{ border: '1px solid #ccc', height: '100%' }}
            indexes={indexes}
            dataSource={dataSource}
          />
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8 }}>position=left</div>
        <div className="Wrapper">
          <Surnames
            position="left"
            style={{ border: '1px solid #ccc', height: '100%' }}
            indexes={indexes}
            dataSource={dataSource}
          />
        </div>
      </div>
    </div>
  );
};
