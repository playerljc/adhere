import React from 'react';

import { Revolving } from '@baifendian/adhere';

/**
 * 延迟测试用例
 * 展示不同自动播放延迟时间的轮播图效果
 */
export default () => {
  const items = Array.from({ length: 10 }).map((_, index) => ({
    key: `${index + 1}`,
    children: <span>Slide {index + 1}</span>,
  }));

  return (
    <Revolving
      direction="top"
      styleWrapper={{ height: 50 }}
      items={items}
      speed={1000}
      delay={3000}
      loop={true}
    />
  );
};
