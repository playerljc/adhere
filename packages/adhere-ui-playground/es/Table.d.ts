import React from 'react';
import type { TableProps } from './types';
/**
 * Table组件
 * @component Table
 * @description 表格组件，用于展示结构化数据
 * @param props - 组件属性
 * @param props.className - 自定义CSS类名
 * @param props.style - 自定义内联样式
 * @param props.tableClassName - 表格CSS类名
 * @param props.tableStyle - 表格内联样式
 * @param props.columns - 列配置
 * @param props.dataSource - 数据源
 * @param props.rowKey - 行键值字段
 * @returns JSX.Element
 * @example
 * ```tsx
 * <Table
 *   columns={[
 *     { key: 'name', title: '姓名', dataIndex: 'name', width: '50%' },
 *     { key: 'age', title: '年龄', dataIndex: 'age', width: '50%' }
 *   ]}
 *   dataSource={[
 *     { id: 1, name: '张三', age: 25 },
 *     { id: 2, name: '李四', age: 30 }
 *   ]}
 *   rowKey="id"
 * />
 * ```
 */
declare const Table: React.NamedExoticComponent<TableProps>;
export default Table;
