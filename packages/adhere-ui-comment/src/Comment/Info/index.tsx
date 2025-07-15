import React, { memo } from 'react';

import Node from '../../Components/Node';
import type { NodeProps, CommentDataItem } from '../../types';

/**
 * 评论信息组件
 * 
 * @description 评论节点的包装组件，继承Node组件的所有功能，并提供子元素渲染支持
 * @param props - 组件属性
 * @returns 评论信息组件实例
 * 
 * @example
 * ```tsx
 * <CommentInfo
 *   data={commentData}
 *   renderAuthor={(data) => <span>{data.author}</span>}
 *   renderContent={(data) => <p>{data.content}</p>}
 *   fetchReply={submitReply}
 * >
 *   {(record) => <ReplyInfo data={record} />}
 * </CommentInfo>
 * ```
 */
const CommentInfo = memo<NodeProps>((props) => (
  <Node {...props} isReply={false}>
    {(record: CommentDataItem) => props?.children?.(record)}
  </Node>
));

CommentInfo.displayName = 'CommentInfo';

export default CommentInfo;
