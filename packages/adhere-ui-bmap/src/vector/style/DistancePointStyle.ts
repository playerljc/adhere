import { IGeometryStyle } from '../types';

/**
 * 修改的时候控制点的样式
 */
const AnchorStyle: IGeometryStyle = {
  fillStyle: '#fff',
  // 描边颜色
  strokeStyle: 'red',
  // 描边大小
  lineWidth: 6,
  lineCap: 'round',
  lineJoin: 'round',
  lineDash: [5, 4, 3],
  lineDashOffset: -1,
  globalAlpha: 1,
};

export default AnchorStyle;
