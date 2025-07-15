import React from 'react';
import type { ListProps } from '../../types';
/**
 * 评论列表组件
 *
 * @description 提供评论列表的容器组件，支持首次加载、滚动加载、回到顶部等功能
 * @param props - 组件属性
 * @returns 评论列表组件实例
 *
 * @example
 * ```tsx
 * <CommentList
 *   isLoading={loading}
 *   hasMore={hasMore}
 *   onLoadMore={loadMore}
 *   pages={totalPages}
 * >
 *   {commentItems}
 * </CommentList>
 * ```
 */
declare const CommentList: React.NamedExoticComponent<ListProps>;
export default CommentList;
