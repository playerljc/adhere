import type { RadioGroupProps } from 'antd';
import type { RangePickerProps } from 'antd/es/date-picker';
import type { CSSProperties, ReactNode } from 'react';
import type { NamedExoticComponent } from 'react';

import {
  datesToNumbers,
  getDataRangeByValue,
  getLabel,
  getValueEntityByStringValue,
  numberToDayjs,
  stringValue,
  sync,
} from './QuickRangeDate';

/**
 * 日期单位类型
 * 
 * 单位	缩写	详情
 * day	d	日
 * week	w	周
 * month	M	月
 * quarter	Q	季度 ( 依赖 QuarterOfYear 插件 )
 * year	y	年
 * hour	h	小时
 * minute	m	分钟
 * second	s	秒
 * millisecond	ms	毫秒
 * 
 * 前缀说明：
 * - a-: 过去时间 (past)
 * - b-: 未来时间 (future)
 * - custom: 自定义时间范围
 */
export type DateType =
  | 'a-d'   // 过去天数
  | 'a-w'   // 过去周数
  | 'a-M'   // 过去月数
  | 'a-Q'   // 过去季度数
  | 'a-y'   // 过去年数
  | 'a-h'   // 过去小时数
  | 'a-m'   // 过去分钟数
  | 'a-s'   // 过去秒数
  | 'a-ms'  // 过去毫秒数
  | 'b-d'   // 未来天数
  | 'b-w'   // 未来周数
  | 'b-M'   // 未来月数
  | 'b-Q'   // 未来季度数
  | 'b-y'   // 未来年数
  | 'b-h'   // 未来小时数
  | 'b-m'   // 未来分钟数
  | 'b-s'   // 未来秒数
  | 'b-ms'  // 未来毫秒数
  | 'custom'; // 自定义时间范围

/**
 * 日期值对象
 */
export interface DateValue {
  /** 日期类型 */
  type: DateType;
  /** 时间单位数量（仅用于预设类型，custom 类型时为空） */
  value?: number;
  /** 开始时间戳 */
  start?: number;
  /** 结束时间戳 */
  end?: number;
}

/**
 * 配置项
 */
export interface ConfigItem extends DateValue {
  /** 显示标签 */
  label?: ReactNode;
  /** 自定义渲染函数 */
  render?: (value?: DateValue) => ReactNode;
}

/**
 * 日期变化回调函数
 */
export type QuickRangeDateChange = (value: DateValue) => void;

/**
 * 快速日期范围选择器属性
 */
export interface QuickRangeDateProps {
  /** 自定义类名 */
  className?: string;
  /** 自定义样式 */
  style?: CSSProperties;
  /** 配置项数组 */
  config: ConfigItem[];
  /** 当前值 */
  value?: DateValue;
  /** 值变化回调 */
  onChange?: QuickRangeDateChange;
  /** 日期范围选择器属性 */
  rangePickerProps?: RangePickerProps;
  /** 单选组属性 */
  radioGroupProps?: RadioGroupProps;
  /** 自定义渲染函数 */
  children?: (params: {
    /** 默认渲染元素 */
    defaultElement: ReactNode;
    /** 当前值 */
    value?: DateValue;
    /** 值变化回调 */
    onChange?: QuickRangeDateChange;
  }) => ReactNode;
}

/**
 * 快速日期范围选择器组件类型
 */
export type QuickRangeDateComponent = NamedExoticComponent<QuickRangeDateProps> & {
  /** 同步日期值，确保 start 和 end 字段存在 */
  sync: typeof sync;
  /** 将日期值转换为字符串 */
  stringValue: typeof stringValue;
  /** 获取日期类型对应的标签 */
  getLabel: typeof getLabel;
  /** 将数字时间戳转换为 dayjs 对象 */
  numberToDayjs: typeof numberToDayjs;
  /** 将 dayjs 对象转换为数字时间戳 */
  datesToNumbers: typeof datesToNumbers;
  /** 根据字符串值获取日期实体 */
  getValueEntityByStringValue: typeof getValueEntityByStringValue;
  /** 根据日期类型和值获取时间范围 */
  getDataRangeByValue: typeof getDataRangeByValue;
};
