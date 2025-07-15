import type { IStyle } from './types';

/**
 * 修改时控制点的默认样式配置
 * @description 定义修改几何图形时控制点（锚点）的默认样式属性
 */
const defaultAnchorStyle: IStyle = {
  /** 填充颜色 */
  fillStyle: '#ddd',
  /** 描边颜色 */
  strokeStyle: '#fff',
  /** 描边宽度 */
  lineWidth: 2,
  /** 线条端点样式 */
  lineCap: 'round',
  /** 线条连接样式 */
  lineJoin: 'round',
  /** 虚线样式数组 */
  lineDash: [5, 4, 3],
  /** 虚线偏移量 */
  lineDashOffset: -1,
  /** 全局透明度 */
  globalAlpha: 1,
};

export default defaultAnchorStyle;
