import React from 'react';

import { Revolving } from '@baifendian/adhere';

/**
 * 向下轮播测试用例
 * 展示垂直向下滚动的轮播图效果
 */
export default () => {
  const items = Array.from({ length: 10 }).map((_, index) => ({
    key: `${index + 1}`,
    children: <span>Slide {index + 1}</span>,
  }));

  return (
    <Revolving
      direction="bottom"
      styleWrapper={{ height: 50 }}
      items={items}
      speed={1000}
      delay={2000}
      loop={true}
    />
  );
};
