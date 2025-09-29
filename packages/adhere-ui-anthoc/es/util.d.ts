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
