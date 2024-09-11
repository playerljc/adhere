import colors from './colors';
import merge from './merge';
import options from './options';

export default {
  // 对象合并
  merge,
  // 配置
  options,
  // 颜色
  colors,
} as const;
