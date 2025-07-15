import type { IStyle } from './types';

/**
 * 移动几何图形的默认样式配置
 * @description 定义移动几何图形时的默认样式属性
 */
const defaultMoveGemStyle: IStyle = {
  /** 填充颜色 */
  fillStyle: '#eee',
  /** 描边颜色 */
  strokeStyle: '#ccc',
  /** 描边宽度 */
  lineWidth: 2,
  /** 虚线样式数组 */
  lineDash: [5, 4, 3],
  /** 虚线偏移量 */
  lineDashOffset: -1,
  /** 线条端点样式 */
  lineCap: 'round',
  /** 线条连接样式 */
  lineJoin: 'round',
  /** 全局透明度 */
  globalAlpha: 0.6,
};

export default defaultMoveGemStyle;
