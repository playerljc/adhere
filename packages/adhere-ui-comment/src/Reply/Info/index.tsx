import React, { FC } from 'react';
import { NodeProps } from '../../types';

import Node from '../../Components/Node';

/**
 * ReplyInfo
 * @param props
 * @constructor
 * @classdesc 回复节点
 */
const ReplyInfo: FC<NodeProps> = (props) => <Node {...props} isReply />;

export default ReplyInfo;
