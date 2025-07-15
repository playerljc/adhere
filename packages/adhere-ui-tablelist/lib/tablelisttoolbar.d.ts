import React from 'react';
import { ToolbarSelectAllProps, ReloadProps, SettingProps } from './types';
/**
 * 工具栏全选组件属性接口
 */
interface ToolbarSelectAllComponentProps {
    /** 全选配置 */
    selectAll: ToolbarSelectAllProps;
    /** 行选择配置 */
    rowSelection: any;
    /** 行键名 */
    rowKey: string;
    /** 数据源 */
    dataSource: any[];
    /** 设置全选状态的回调 */
    setSelectAll: (value: boolean | {
        exceptKeys: any[];
    }) => void;
}
/**
 * 工具栏全选组件
 * 提供全选功能和跨页选择支持
 */
export declare const ToolbarSelectAll: React.FC<ToolbarSelectAllComponentProps>;
/**
 * 工具栏刷新组件属性接口
 */
interface ToolbarReloadComponentProps {
    /** 刷新配置 */
    reload: ReloadProps;
    /** 搜索回调 */
    onSearch: () => void;
}
/**
 * 工具栏刷新组件
 * 提供刷新数据功能
 */
export declare const ToolbarReload: React.FC<ToolbarReloadComponentProps>;
/**
 * 工具栏设置组件属性接口
 */
interface ToolbarSettingComponentProps {
    /** 设置配置 */
    setting: SettingProps;
    /** 表格列配置 */
    tableColumns: any[];
    /** 列设置变化回调 */
    onSettingChange: (selectedColumnKeys: string[]) => void;
    /** 列设置拖拽排序完成回调 */
    onSettingSortEnd: (params: {
        oldIndex: number;
        newIndex: number;
    }) => void;
    /** 选中的列键 */
    selectedColumnKeys: string[];
}
/**
 * 工具栏设置组件
 * 提供列显示设置和拖拽排序功能
 */
export declare const ToolbarSetting: React.FC<ToolbarSettingComponentProps>;
export {};
