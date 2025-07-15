import AutoComplete from './AutoComplete';

// 导出类型定义
export type {
  AutoCompleteComponent,
  AutoCompleteProps,
  TreeAutoCompleteProps,
  IAutoComplete,
  UseCommon,
  UseCommonParams,
  UseCommonReturn,
  TreeTransformConfig,
  OptionType,
  TreeNodeType,
} from './types';

// 导出组件
export { default as TreeAutoComplete } from './TreeAutoComplete';
export default AutoComplete;
