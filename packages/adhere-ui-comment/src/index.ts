/**
 * @fileoverview 评论组件库主入口
 * @description 提供完整的评论功能，包括评论列表、回复、分页加载等
 * 
 * @example
 * ```tsx
 * import Comment from '@baifendian/adhere-ui-comment';
 * 
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

import Comment from './Comment';

export default Comment;
