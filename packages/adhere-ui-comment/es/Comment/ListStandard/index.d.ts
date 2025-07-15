import React from 'react';
import type { ListStandardProps } from '../../types';
/**
 * 列表标准组件
 *
 * @description 提供评论列表的标准实现，支持分页加载、滚动加载等功能
 * @param props - 组件属性
 * @returns 列表标准组件实例
 *
 * @example
 * ```tsx
 * <ListStandard
 *   fetchData={fetchComments}
 *   renderList={(data) => <CommentList data={data.list} />}
 *   renderEmpty={() => <Empty description="暂无评论" />}
 * />
 * ```
 */
declare const ListStandard: React.NamedExoticComponent<ListStandardProps>;
export default ListStandard;
