import ConditionalRender from './ConditionalRender';

// 导出主组件
export default ConditionalRender;

// 导出类型定义
export type {
  ConditionalRenderProps,
  ConditionalRenderComponent,
  ConditionalRenderShowProps,
  ConditionalRenderParams,
  ConditionalRenderFunctionStatic,
  ConditionalRenderArrayFunctionStatic,
  ConditionalNotEmptyArrFunctionStatic,
  Deal,
  DealResult,
} from './types';

// 导出工具函数
export { deal } from './Util';
