import React, { FC, memo } from 'react';

import Node from '../../Components/Node';
import { NodeProps } from '../../types';

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

export default memo(CommentInfo);
