import React from 'react';

import { Revolving } from '@baifendian/adhere';

/**
 * 向左轮播测试用例
 * 展示水平向左滚动的轮播图效果
 */
export default () => {
  const items = Array.from({ length: 10 }).map((_, index) => ({
    key: `${index + 1}`,
    children: <span>Slide {index + 1}</span>,
  }));

  return (
    <Revolving
      direction="left"
      styleWrapper={{ height: 50 }}
      items={items}
      speed={1000}
      delay={2000}
      loop={true}
    />
  );
};
