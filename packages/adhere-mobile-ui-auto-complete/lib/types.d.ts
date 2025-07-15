import type { SearchBarProps } from 'antd-mobile';
import type { CheckListValue } from 'antd-mobile/es/components/check-list/check-list';
import type { CSSProperties, ReactNode } from 'react';
import { NamedExoticComponent } from 'react';
import type { TreeSelectProps } from '@baifendian/adhere-mobile-ui-tree/es/types';
import TreeAutoComplete from './TreeAutoComplete';
/**
 * 数据记录的基础接口
 */
export interface DataRecord {
    [key: string]: any;
    key?: string;
    id?: string | number;
    value?: string | number;
    label?: string;
    title?: ReactNode;
    children?: DataRecord[];
    pId?: string | number;
}
/**
 * 自动完成组件的属性接口
 */
export interface AutoCompleteProps {
    /** 根容器的CSS类名 */
    className?: string;
    /** 根容器的内联样式 */
    style?: CSSProperties;
    /** 搜索栏的CSS类名 */
    searchBarClassName?: string;
    /** 搜索栏的内联样式 */
    searchBarStyle?: CSSProperties;
    /** 内容区域的CSS类名 */
    bodyClassName?: string;
    /** 内容区域的内联样式 */
    bodyStyle?: CSSProperties;
    /** 搜索框占位符文本 */
    placeholder?: string;
    /** 搜索栏组件的属性 */
    searchBarProps?: SearchBarProps;
    /** 数据加载函数 */
    loadData?: (keyword?: string) => Promise<DataRecord[]>;
    /** 数据记录的唯一标识字段名 */
    rowKey?: string;
    /** 数据记录的显示文本字段名 */
    labelProp?: string;
    /** 数据记录的值字段名 */
    valueProp?: string;
    /** 自定义结果项渲染函数 */
    renderResultItem?: (record: DataRecord, defaultItem: ReactNode) => ReactNode;
    /** 自定义空状态渲染函数 */
    renderEmpty?: () => ReactNode;
    /** 默认数据源 */
    defaultDataSource?: DataRecord[];
    /** 搜索数据源 */
    searchDataSource?: DataRecord[];
    /** 当前选中的值 */
    value?: (CheckListValue | DataRecord)[];
    /** 值变化回调函数 */
    onChange?: (values: CheckListValue[]) => void;
    /** 子渲染函数，用于自定义内容区域 */
    children?: (arg: {
        value?: CheckListValue[];
        onChange?: (values: CheckListValue[] | CheckListValue) => void;
        searchDataSource?: DataRecord[];
    }) => ReactNode;
    /** 是否显示结果面板 */
    showResult?: boolean;
}
/**
 * 树形自动完成组件的属性接口
 */
export type TreeAutoCompleteProps = AutoCompleteProps & {
    /** 树选择组件的属性 */
    treeSelectProps?: TreeSelectProps;
};
/**
 * 自动完成组件的类型定义，包含静态属性
 */
export type AutoCompleteComponent = NamedExoticComponent<AutoCompleteProps> & {
    /** 树形自动完成子组件 */
    TreeAutoComplete: typeof TreeAutoComplete;
};
