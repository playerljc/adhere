import React from 'react';

import { Revolving } from '@baifendian/adhere';

/**
 * 速度测试用例
 * 展示不同切换速度的轮播图效果
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
      speed={500}
      delay={1000}
      loop={true}
    />
  );
};
