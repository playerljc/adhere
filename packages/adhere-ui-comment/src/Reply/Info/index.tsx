import React, { FC, memo } from 'react';

import Node from '../../Components/Node';
import { NodeProps } from '../../types';

/**
 * ReplyInfo
 * @param props
 * @constructor
 * @classdesc 回复节点
 */
const ReplyInfo: FC<NodeProps> = (props) => <Node {...props} isReply />;

export default memo(ReplyInfo);
