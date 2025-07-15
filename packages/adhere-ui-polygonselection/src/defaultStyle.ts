import type { IStyle } from './types';

/**
 * 几何图形默认样式配置
 * @description 定义绘制几何图形时的默认样式属性
 */
const defaultStyle: IStyle = {
  /** 填充颜色 */
  fillStyle: '#eee',
  /** 描边颜色 */
  strokeStyle: '#ccc',
  /** 描边宽度 */
  lineWidth: 2,
  /** 线条端点样式 */
  lineCap: 'round',
  /** 线条连接样式 */
  lineJoin: 'round',
  /** 虚线样式数组 */
  lineDash: [],
  /** 虚线偏移量 */
  lineDashOffset: -1,
  /** 全局透明度 */
  globalAlpha: 1,
};

export default defaultStyle;
