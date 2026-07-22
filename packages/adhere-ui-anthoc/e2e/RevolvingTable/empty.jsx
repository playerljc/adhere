import React from 'react';

import { RevolvingTable } from '../../src';

import { createColumns } from './mock';

import '../../src/index.less';

/** 空数据：默认 Empty + 自定义 renderEmpty */
export default () => {
  const columns = createColumns();

  return (
    <div style={{ display: 'flex', gap: 24 }}>
      <div style={{ flex: 1 }}>
        <div style={{ marginBottom: 8, fontWeight: 600 }}>默认空状态</div>
        <RevolvingTable
          style={{ height: 280, border: '1px solid #f0f0f0' }}
          columns={columns}
          dataSource={[]}
          revolvingConfig={{ slidesPerView: 4, loop: false }}
        />
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ marginBottom: 8, fontWeight: 600 }}>自定义 renderEmpty</div>
        <RevolvingTable
          style={{ height: 280, border: '1px solid #f0f0f0' }}
          columns={columns}
          dataSource={[]}
          revolvingConfig={{ slidesPerView: 4, loop: false }}
          renderEmpty={() => (
            <div
              style={{
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#8c8c8c',
                flexDirection: 'column',
                gap: 8,
              }}
            >
              <div style={{ fontSize: 14, fontWeight: 600, color: '#595959' }}>暂无数据</div>
              <div>请稍后刷新或调整筛选条件</div>
            </div>
          )}
        />
      </div>
    </div>
  );
};
