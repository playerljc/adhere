import React, { memo } from 'react';

import Node from '../../Components/Node';
import type { NodeProps } from '../../types';

/**
 * CommentInfo
 * @param props
 * @constructor
 * @classdesc 评论节点
 */
const CommentInfo = memo<NodeProps>((props) => (
  <Node {...props} isReply={false}>
    {(record) => props?.children?.(record)}
  </Node>
));

export default CommentInfo;
