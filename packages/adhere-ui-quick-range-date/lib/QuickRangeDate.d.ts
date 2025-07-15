import dayjs from 'dayjs';
import React from 'react';
import type { DateType, DateValue, QuickRangeDateComponent } from './types';
/**
 * 判断是否为自定义类型
 * @param type - 日期类型
 * @returns 是否为自定义类型
 */
export declare const isCustomByType: (type?: DateType) => boolean;
/**
 * 同步日期值，确保 start 和 end 字段存在
 * @param dateValue - 日期值对象
 * @returns 同步后的日期值对象，如果输入为空则返回 undefined
 */
export declare function sync(dateValue: DateValue | undefined): DateValue | undefined;
/**
 * 将日期值转换为字符串
 * @param dateValue - 日期值对象
 * @returns 字符串表示，如果输入为空则返回 undefined
 */
export declare const stringValue: (dateValue: DateValue | undefined) => string | undefined;
/**
 * 将数字时间戳转换为 dayjs 对象数组
 * @param dateValue - 时间戳数组 [start, end]
 * @returns dayjs 对象数组，如果输入无效则返回 null
 */
export declare const numberToDayjs: (dateValue: [number | undefined, number | undefined]) => [dayjs.Dayjs, dayjs.Dayjs] | null;
/**
 * 将 dayjs 对象数组转换为数字时间戳数组
 * @param _value - dayjs 对象数组或空值
 * @returns 时间戳数组 [start, end]
 */
export declare const datesToNumbers: (_value: [dayjs.Dayjs, dayjs.Dayjs] | null | undefined) => [number | undefined, number | undefined];
/**
 * 根据字符串值获取日期实体
 * @param stringValue - 字符串值，格式为 "type,value"
 * @returns 日期实体对象
 */
export declare const getValueEntityByStringValue: (stringValue: string) => {
    type: DateType;
    value: number;
};
/**
 * 根据日期类型和值获取时间范围
 * @param type - 日期类型
 * @param typeValue - 时间单位数量
 * @returns 时间范围数组 [start, end]
 */
export declare const getDataRangeByValue: (type: DateType, typeValue: number) => [number | undefined, number | undefined];
/**
 * 获取日期类型对应的标签
 * @param params - 包含类型和值的参数对象
 * @returns 标签内容
 */
export declare const getLabel: ({ type, value }: {
    type: DateType;
    value?: number;
}) => React.ReactNode;
/**
 * 快速日期范围选择器组件
 */
declare const QuickRangeDate: QuickRangeDateComponent;
export default QuickRangeDate;
