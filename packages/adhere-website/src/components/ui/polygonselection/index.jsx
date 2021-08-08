import React, { useState, useRef } from 'react';

import Props from '@/lib/Props';
import FunctionProps from '@/lib/FunctionProps';
import Playground from '@/lib/Playground';

export default () => {
  return (
    <div className="Page">
      <h1>PolygonSelection</h1>
      <p>多功能选区</p>
      <ul>
        <li>- 圆形区域</li>
        <li>- 菱形区域</li>
        <li>- 多边形区域</li>
        <li>- 矩形形区域</li>
        <li>- 五角星区域</li>
        <li>- 三角形区域</li>
      </ul>


    </div>
  );
};
