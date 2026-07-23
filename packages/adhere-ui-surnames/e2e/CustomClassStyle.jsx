import React from 'react';

import Surnames from '../src/index';

import '../src/index.less';
import './index.less';
import { getDataSource, getIndexesProps } from './mockData';

export default () => {
  return (
    <div style={{ padding: 16 }}>
      <div className="Wrapper">
        <Surnames
          className="custom-surnames"
          style={{ border: '2px solid #1677ff', height: '100%', borderRadius: 4 }}
          indexClassName="custom-index"
          indexStyle={{ background: '#e6f4ff' }}
          contentClassName="custom-content"
          contentStyle={{ background: '#fafafa' }}
          indexes={getIndexesProps()}
          dataSource={getDataSource()}
        />
      </div>
    </div>
  );
};
