import { Dayjs } from 'dayjs';
import React, { ReactNode } from 'react';
/**
 * 支持的日期值类型
 */
export type DateValue = string | number | Date | Dayjs | null | undefined;
/**
 * 支持的国际化语言类型
 */
export type LocaleType = 'zh' | 'en' | 'ar' | 'pt' | string;
/**
 * 基础日期显示组件属性
 */
export interface BaseDateDisplayProps {
    /** 日期值 */
    value?: DateValue;
    /** 国际化语言 */
    locale?: LocaleType;
}
/**
 * 格式化日期显示组件属性
 */
export interface DateDisplayProps extends BaseDateDisplayProps {
    /** 日期格式字符串 */
    format?: string;
}
/**
 * 相对时间显示组件属性
 */
export interface RelativeTimeDisplayProps extends BaseDateDisplayProps {
    /** 是否使用当前时间作为参考点 */
    now?: boolean;
}
/**
 * 字典格式化组件属性
 */
export interface DictDateDisplayProps {
    /** 日期值 */
    value?: DateValue;
    /** 第一个分隔符 */
    split1?: string;
    /** 第二个分隔符 */
    split2?: string;
    /** 错误时显示的UI */
    errorUI?: ReactNode | null;
}
/**
 * 字典格式化函数类型
 */
export type DictFormatFunction = (split1: string, split2: string) => string;
/**
 * 组件集合类型
 */
export interface DateDisplayComponents {
    dayjs: typeof import('dayjs');
    setGlobalLocale: (locale: LocaleType) => void;
    DateDisplay: React.FC<DateDisplayProps> & {
        toString: (props: DateDisplayProps) => string;
    };
    DateDisplayFromNow: React.FC<RelativeTimeDisplayProps> & {
        toString: (props: RelativeTimeDisplayProps) => string;
    };
    DateDisplayToNow: React.FC<RelativeTimeDisplayProps> & {
        toString: (props: RelativeTimeDisplayProps) => string;
    };
    [key: string]: any;
}
/**
 * 本地化格式类型
 */
export type LocalizationFormat = 'LT' | 'LTS' | 'L' | 'LL' | 'LLL' | 'LLLL' | 'l' | 'll' | 'lll' | 'llll' | 'L LTS' | 'L LT' | 'l LTS' | 'l LT';
