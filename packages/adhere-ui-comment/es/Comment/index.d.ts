import React from 'react';
import type { CommentProps } from '../types';
/**
 * 评论组件
 *
 * @description 一个功能完整的评论组件，支持评论列表展示、回复功能、分页加载等
 * @param props - 组件属性
 * @returns 评论组件实例
 *
 * @example
 * ```tsx
 * <Comment
 *   fetchCommentData={fetchComments}
 *   fetchReplyData={fetchReplies}
 *   fetchReply={submitReply}
 *   renderCommentAuthor={(data) => <span>{data.author}</span>}
 *   renderCommentContent={(data) => <p>{data.content}</p>}
 *   renderCommentDateTime={(data) => <span>{data.datetime}</span>}
 * />
 * ```
 */
declare const Comment: React.NamedExoticComponent<CommentProps>;
export default Comment;
