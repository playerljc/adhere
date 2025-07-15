import React from 'react';
import type { NodeProps } from '../../types';
/**
 * 节点组件（评论 | 回复）
 *
 * @description 评论或回复的节点组件，支持回复功能、分页加载、折叠展开等
 * @param props - 组件属性
 * @returns 节点组件实例
 *
 * @example
 * ```tsx
 * <Node
 *   data={commentData}
 *   renderAuthor={(data) => <span>{data.author}</span>}
 *   renderContent={(data) => <p>{data.content}</p>}
 *   renderDateTime={(data) => <span>{data.datetime}</span>}
 *   fetchReply={submitReply}
 * />
 * ```
 */
declare const Node: React.NamedExoticComponent<NodeProps>;
export default Node;
