import React, { memo } from 'react';

import Node from '../../Components/Node';
import type { NodeProps } from '../../types';

/**
 * 回复信息组件
 * 
 * @description 回复节点的包装组件，继承Node组件的所有功能
 * @param props - 组件属性
 * @returns 回复信息组件实例
 * 
 * @example
 * ```tsx
 * <ReplyInfo
 *   data={replyData}
 *   renderAuthor={(data) => <span>{data.author}</span>}
 *   renderContent={(data) => <p>{data.content}</p>}
 *   fetchReply={submitReply}
 * />
 * ```
 */
const ReplyInfo = memo<NodeProps>((props) => <Node {...props} isReply />);

ReplyInfo.displayName = 'ReplyInfo';

export default ReplyInfo;
