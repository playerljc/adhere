import React from 'react';
import type { ReplyProps } from '../../types';
/**
 * 回复提交组件
 *
 * @description 提供回复内容的输入、表情选择和提交功能
 * @param props - 组件属性
 * @returns 回复提交组件实例
 *
 * @example
 * ```tsx
 * <ReplySubmit
 *   onCancel={() => setShowReply(false)}
 *   onResult={(reply) => submitReply(reply)}
 *   local="zh"
 * />
 * ```
 */
declare const ReplySubmit: React.NamedExoticComponent<ReplyProps>;
export default ReplySubmit;
