import React from 'react';

import Surnames from '../src/index';

import '../src/index.less';
import './index.less';
import { getDataSource, getIndexesProps } from './mockData';

export default () => {
  const indexes = getIndexesProps();
  const dataSource = getDataSource();

  return (
    <div style={{ display: 'flex', gap: 24, padding: 16, flexWrap: 'wrap' }}>
      <div>
        <div style={{ marginBottom: 8 }}>position=top</div>
        <div className="WrapperWide">
          <Surnames
            position="top"
            style={{ border: '1px solid #ccc', height: '100%' }}
            indexes={indexes}
            dataSource={dataSource}
          />
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8 }}>position=bottom</div>
        <div className="WrapperWide">
          <Surnames
            position="bottom"
            style={{ border: '1px solid #ccc', height: '100%' }}
            indexes={indexes}
            dataSource={dataSource}
          />
        </div>
      </div>
    </div>
  );
};
