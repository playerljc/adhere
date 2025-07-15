import React from 'react';
/**
 * 表格列头筛选下拉框的属性接口
 */
export interface FilterDropdownProps {
    /** 确认筛选的回调函数 */
    confirm: () => void;
    /** 清除筛选的回调函数 */
    clearFilters?: () => void;
    /** 当前选中的筛选值 */
    selectedKeys?: React.Key[];
    /** 设置选中筛选值的回调函数 */
    setSelectedKeys?: (selectedKeys: React.Key[]) => void;
    /** 是否可见 */
    visible?: boolean;
    /** 关闭下拉框的回调函数 */
    close?: () => void;
}
/**
 * 表格列头筛选的渲染函数类型
 */
export type FilterDropdownRender = (props: FilterDropdownProps) => React.ReactNode;
/**
 * 表格列头筛选的返回对象接口
 */
export interface TableHeadSearchResult {
    /** 筛选图标渲染函数 */
    filterIcon: () => React.ReactNode;
    /** 筛选下拉框渲染函数 */
    filterDropdown: (props: FilterDropdownProps) => React.ReactNode;
}
/**
 * 表格列头筛选
 *
 * 这是一个高阶函数，用于为Ant Design Table的列配置添加自定义的筛选功能。
 * 返回的对象可以直接展开到Table的column配置中。
 *
 * @param render - 渲染筛选下拉框内容的函数，接收FilterDropdownProps作为参数
 * @param icon - 自定义的筛选图标，默认为SearchOutlined图标
 * @returns 包含filterIcon和filterDropdown的对象，可直接用于Table列配置
 *
 * @example
 * ```tsx
 * import { Table, Input, Button } from 'antd';
 * import { TableHeadSearch } from '@baifendian/adhere-ui-tableheadsearch';
 *
 * const columns = [
 *   {
 *     title: '姓名',
 *     dataIndex: 'name',
 *     key: 'name',
 *     ...TableHeadSearch(({ confirm }) => (
 *       <div>
 *         <Input placeholder="请输入姓名" />
 *         <Button type="primary" onClick={confirm}>
 *           确定
 *         </Button>
 *       </div>
 *     )),
 *   },
 * ];
 * ```
 *
 * @example
 * ```tsx
 * // 使用自定义图标
 * import { FilterOutlined } from '@ant-design/icons';
 *
 * ...TableHeadSearch(
 *   ({ confirm }) => <div>自定义筛选内容</div>,
 *   <FilterOutlined />
 * )
 * ```
 */
export default function TableHeadSearch(render: FilterDropdownRender, icon?: React.ReactNode): TableHeadSearchResult;
