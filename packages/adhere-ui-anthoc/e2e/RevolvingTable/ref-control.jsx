import { Button, Space } from 'antd';
import React, { useRef } from 'react';

import { RevolvingTable } from '../../src';

import { createColumns, createDataSource } from './mock';

import '../../src/index.less';

/** ref 转发 Swiper 实例：外部控制上一页 / 下一页 / 跳转 */
export default () => {
  const swiperRef = useRef(null);

  return (
    <div>
      <Space style={{ marginBottom: 12 }}>
        <Button
          onClick={() => {
            swiperRef.current?.swiper?.slidePrev();
          }}
        >
          上一行
        </Button>
        <Button
          type="primary"
          onClick={() => {
            swiperRef.current?.swiper?.slideNext();
          }}
        >
          下一行
        </Button>
        <Button
          onClick={() => {
            swiperRef.current?.swiper?.slideToLoop?.(0);
            swiperRef.current?.swiper?.slideTo?.(0);
          }}
        >
          回到顶部
        </Button>
        <Button
          onClick={() => {
            swiperRef.current?.swiper?.autoplay?.start();
          }}
        >
          开始自动播放
        </Button>
        <Button
          onClick={() => {
            swiperRef.current?.swiper?.autoplay?.stop();
          }}
        >
          停止自动播放
        </Button>
      </Space>

      <RevolvingTable
        ref={swiperRef}
        style={{ height: 300 }}
        parity
        columns={createColumns()}
        dataSource={createDataSource(12)}
        revolvingConfig={{
          slidesPerView: 5,
          spaceBetween: 8,
          autoplay: {
            delay: 2500,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          },
        }}
      />
    </div>
  );
};
