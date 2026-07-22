import React from 'react';

import { RevolvingTable } from '../../src';

import { createColumns, createDataSource } from './mock';

import '../../src/index.less';

/** revolvingConfig：循环、可视行数、间距、速度、自动播放等 */
export default () => {
  const columns = createColumns({ withEllipsis: true });
  const manyRows = createDataSource(15);
  const fewRows = createDataSource(3);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <div style={{ marginBottom: 8, fontWeight: 600 }}>
          数据充足自动 loop · slidesPerView=4 · delay=2000 · speed=800
        </div>
        <RevolvingTable
          style={{ height: 280 }}
          parity
          columns={columns}
          dataSource={manyRows}
          revolvingConfig={{
            slidesPerView: 4,
            spaceBetween: 12,
            speed: 800,
            autoplay: {
              delay: 2000,
              pauseOnMouseEnter: true,
              disableOnInteraction: false,
            },
          }}
        />
      </div>

      <div>
        <div style={{ marginBottom: 8, fontWeight: 600 }}>
          数据不足一屏 · 显式 loop=false（仅滚轮切换，不循环）
        </div>
        <RevolvingTable
          style={{ height: 280 }}
          columns={columns}
          dataSource={fewRows}
          revolvingConfig={{
            loop: false,
            slidesPerView: 5,
            spaceBetween: 8,
            autoplay: false,
          }}
        />
      </div>
    </div>
  );
};
