import QuickRangeDate from './QuickRangeDate';

// 导出类型
export type {
  DateType,
  DateValue,
  ConfigItem,
  QuickRangeDateChange,
  QuickRangeDateProps,
  QuickRangeDateComponent,
} from './types';

// 导出工具函数
export {
  sync,
  stringValue,
  getLabel,
  numberToDayjs,
  datesToNumbers,
  getValueEntityByStringValue,
  getDataRangeByValue,
  isCustomByType,
} from './QuickRangeDate';

// 导出默认组件
export default QuickRangeDate;
