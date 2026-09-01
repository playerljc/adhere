import type { CascaderProps, SelectProps, TransferProps, TreeSelectProps } from 'antd';
import type { LabeledValue } from 'antd/es/select';
import React from 'react';
import type { ConfigProviderProps } from '@baifendian/adhere-ui-configprovider/es/types';
/**
 * createFactory
 * @description - 创建一个组件的包装
 * @param Component
 * @param defaultProps
 * @param override
 * @return {function(*)}
 */
export declare function createFactory<P>(Component: any, defaultProps: Partial<P>, override?: (props: Partial<P>) => Partial<P> | Promise<Partial<P>>): typeof Component & {
    defaultProps?: Partial<P>;
    override?: (props: Partial<P>) => Partial<P> | Promise<Partial<P>>;
};
/**
 * @typedef {ConfigProviderProps['media]} Media
 */
/**
 * getValue
 * @param {Media} media
 * @param {number} size
 * @return {string}
 */
export declare function getValue(media: ConfigProviderProps['media'], size: number | string): number | string;
/**
 * normalizeOptionFilterProp
 * @description 将 optionFilterProp（单个或数组）归一化为字段名数组，未传入时默认 'label'
 * @param optionFilterProp
 */
export declare function normalizeOptionFilterProp(optionFilterProp?: string | string[]): string[];
/**
 * buildSearchQueryParams
 * @description 服务器搜索场景下，根据 optionFilterProp 和关键字构造查询参数对象
 * 例如 optionFilterProp={['label','title']} + keyword='张三' -> { label: '张三', title: '张三' }
 * @param optionFilterProp
 * @param keyword
 */
export declare function buildSearchQueryParams(optionFilterProp: string | string[] | undefined, keyword?: string): Record<string, string> | undefined;
export declare function existsValueInLabeledValueOptions(value: string | number, options: LabeledValue[]): boolean;
export declare function isLabeledValue(val: LabeledValue): boolean;
export declare function checkLabeledValueExists(value: string | number | LabeledValue, options: LabeledValue[]): boolean;
export declare function getOptionsValue(value: SelectProps['value'], options: LabeledValue[]): any;
export declare function existsValueInSimpleTreeData({ value, treeData, valueAttr, }: {
    value: string;
    treeData: {
        value?: string | number;
    }[];
    valueAttr?: string;
}): boolean;
export declare function filterTreeValues(value: string | string[], treeData: any[], keyAttr: string): string | string[] | undefined;
export declare function filterCascaderValues(value: CascaderProps['value'], options: CascaderProps['options']): (string | number | null)[];
export declare function getTreeValue({ value, treeData, treeDataSimpleMode, }: {
    value: TreeSelectProps['value'];
    treeData: TreeSelectProps['treeData'];
    treeDataSimpleMode: TreeSelectProps['treeDataSimpleMode'];
}): any;
export declare function getCascaderValue({ value, options, }: {
    value: CascaderProps['value'];
    options: CascaderProps['options'];
}): (string | number | null)[] | undefined;
export declare function getTransferValue({ value, dataSource, }: {
    value: TransferProps['selectedKeys'];
    dataSource: TransferProps['dataSource'];
}): React.Key[] | undefined;
/**
 * GermanNumberFormatter
 * @description 德国数字格式化（千分位: `.`, 小数点: `,`）
 * @param {string | number} value - 要格式化的数值
 * @param {number} precision - 小数精度
 * @return {string}
 */
export declare function GermanNumberFormatter(value: string | number, precision?: number): string;
/**
 * GermanNumberParse
 * @description 解析德国格式的数字字符串
 * @param {string} value
 * @return {string}
 */
export declare function GermanNumberParse(value: string): string;
/**
 * USNumberFormatter
 * @description 美国/中国数字格式化（千分位: `,`, 小数点: `.`）
 * @param {string | number} value - 要格式化的数值
 * @param {number} precision - 小数精度
 * @return {string}
 */
export declare function USNumberFormatter(value: string | number, precision?: number): string;
/**
 * USNumberParse
 * @description 解析美国/中国格式的数字字符串
 * @param {string} value
 * @return {string}
 */
export declare function USNumberParse(value: string): string;
/**
 * FrenchNumberFormatter
 * @description 法国数字格式化（千分位: 空格, 小数点: `,`）
 * @param {string | number} value - 要格式化的数值
 * @param {number} precision - 小数精度
 * @return {string}
 */
export declare function FrenchNumberFormatter(value: string | number, precision?: number): string;
/**
 * FrenchNumberParse
 * @description 解析法国格式的数字字符串
 * @param {string} value
 * @return {string}
 */
export declare function FrenchNumberParse(value: string): string;
/**
 * InternationalNumberFormatter
 * @description 国际标准数字格式化（千分位: 空格, 小数点: `.`）
 * @param {string | number} value - 要格式化的数值
 * @param {number} precision - 小数精度
 * @return {string}
 */
export declare function InternationalNumberFormatter(value: string | number, precision?: number): string;
/**
 * InternationalNumberParse
 * @description 解析国际标准格式的数字字符串
 * @param {string} value
 * @return {string}
 */
export declare function InternationalNumberParse(value: string): string;
/** @deprecated 请使用 GermanNumberFormatter */
export declare const EuroNumberFormatter: typeof GermanNumberFormatter;
/** @deprecated 请使用 GermanNumberParse */
export declare const EuroNumberParse: typeof GermanNumberParse;
