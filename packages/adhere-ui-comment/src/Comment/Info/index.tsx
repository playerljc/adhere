import React, { FC } from 'react';

import { NodeProps } from '../../types';
import Node from '../../Components/Node';

/**
 * CommentInfo
 * @param props
 * @constructor
 * @classdesc 评论节点
 */
const CommentInfo: FC<NodeProps> = (props) => (
  <Node {...props} isReply={false}>
    {(record) => props?.children?.(record)}
  </Node>
);

export default CommentInfo;
